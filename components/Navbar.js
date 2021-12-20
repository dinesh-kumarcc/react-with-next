import Link from 'next/link'

const Navbar =()=>(
    <nav className="navbar">
        <Link href="/">
        <a className="navbar-brand">Blog App</a>
        </Link>
        <Link href="/new">
        <a className="create">Create Blog</a>
        </Link>
    </nav>
)
export default Navbar