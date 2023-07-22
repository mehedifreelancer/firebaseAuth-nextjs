const jwt = require('jsonwebtoken');

const getToken = ({token}) => {
    // Step 2: Decode the access token and extract user data
const accessToken = 'YOUR_FIREBASE_ACCESS_TOKEN'; // Replace this with the actual access token
const decodedToken = JSON.parse(atob(accessToken.split('.')[1])); // Decoding the payload of the JWT

const userId = decodedToken.user_id;
const userEmail = decodedToken.email;

// Step 3: Create a JWT on the client-side using Firebase's expiration time (exp)
const YOUR_SECRET_KEY = 'your_secret_key'; // Replace this with your actual secret key
const jwtData = {
  userId: userId,
  email: userEmail,
};

const jwtToken = jwt.sign(jwtData, YOUR_SECRET_KEY, {
    expiresIn: decodedToken.exp - Math.floor(Date.now() / 1000), // Setting the expiration time based on Firebase's exp
  });
};

export default getToken;