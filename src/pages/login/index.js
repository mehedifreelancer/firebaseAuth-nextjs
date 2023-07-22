import React from 'react';
import {  signInWithPopup, GoogleAuthProvider, FacebookAuthProvider  } from "firebase/auth";
import { auth } from '../firebaseConfig';
import axios from 'axios';

const page = () => {

    const gprovider = new GoogleAuthProvider();
    const fbprovider = new FacebookAuthProvider();

    const handleGoogleLogin = ()=>{
        signInWithPopup(auth, gprovider)
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        // The signed-in user info.
        const user = result.user;
        console.log(user);

        // Save token to DB:
        // If already have account save data else create new account and update token 
       
        // IdP data available using getAdditionalUserInfo(result)
        // ...
    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        console.log("failed");

    });
    }

    const handleFbLogin = () =>{
        signInWithPopup(auth, fbprovider)
        .then((result) => {
          // The signed-in user info.
          const user = result.user;
      
          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          const credential = FacebookAuthProvider.credentialFromResult(result);
          const accessToken = credential.accessToken;
        //   console.log(credential);
          // IdP data available using getAdditionalUserInfo(result)
          // ...

          async function getUserInfo(accessToken) {
            try {
              const response = await axios.get('https://graph.facebook.com/me', {
                params: {
                  access_token: accessToken,
                  fields: 'id,name,email,picture', // Specify the fields you want to retrieve
                },
              });
          
              // The response contains the user information
              console.log(response.data);
              return response.data;
            } catch (error) {
              console.error('Error fetching user information:', error.message);
              throw error;
            }
          }

          getUserInfo(accessToken);
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = FacebookAuthProvider.credentialFromError(error);
      
          // ...
        });
    }


    return (
        <div className='mx-auto'>
            <>
         <div>
            <button onClick = {() =>handleGoogleLogin()} className='bg-red-700 px-5 py-4 mb-5'>Log in with Google</button>
            </div>
            <div>
            <button onClick={() => handleFbLogin() } className='bg-blue-500 px-5 py-4 mb-5'>Log in with Facebook</button>
            </div>
            </>
        </div>
    );
};

export default page;