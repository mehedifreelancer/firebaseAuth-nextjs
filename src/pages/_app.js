import '@/styles/globals.css'
import Link from 'next/link'

export default function App({ Component, pageProps }) {
  return (

    <>
    <nav className='p-5 flex justify-between'>
    <ul className='flex gap-5'>
        <li><Link href='/'>Home</Link></li>
        <li><Link href='history'>History</Link></li>
        <li><Link href='myAccount'>My Account</Link></li>
    </ul>

    <ul className='flex gap-5'>
        <li><Link href='/login'>Login</Link></li>
        <li><Link href=''>Log Out</Link></li>
    </ul>
</nav>
<hr/>
<div className='max-w-[95%] mx-auto mt-5'>
<Component {...pageProps} />
</div>
    </>
  ) 
}
