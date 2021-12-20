import Head from 'next/head';
import Navbar from '../components/Navbar'

//destructure children

const Layout = ({children}) =>  (
    <>
    <Head>
    <title>Note App</title>
    </Head>
    <Navbar/>
    {children}
    </>
)
export default Layout