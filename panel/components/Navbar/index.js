const Navbar = ({ children }) => {
    return <nav className="mt-10">{children}</nav>
}

const NavbarLink = ({ children }) => {
    return (
        <a className="flex items-center mt-4 py-2 px-6 text-gray-500 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100" href="/">
            {children}
        </a>
    )
}

const NavbarText = ({ children }) => <span className="mx-3">{children}</span>

Navbar.Link = NavbarLink
Navbar.Text = NavbarText
export default Navbar;