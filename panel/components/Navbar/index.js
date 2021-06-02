const Navbar = ({ children }) => {
    return <nav className="flex flex-col bg-secondary-900 px-10 w-1/6 max-w-xs h-screen relative">{children}</nav>
}

const NavbarLogo = ({ children }) => {
    return (
        <div className="flex items-center justify-center mt-5">
            <div className="flex items-center">
                {children}
            </div>
        </div>
    )
}

const NavbarLink = ({ children }) => {
    return (
        <a className="flex items-center mt-4 py-2 px-6 text-white hover:bg-gray-700 hover:bg-opacity-25 hover:text-secondary-500 w-full" href="/">
            {children}
        </a>
    )
}

const NavbarText = ({ children }) => <span className="mx-3">{children}</span>

Navbar.Logo = NavbarLogo
Navbar.Link = NavbarLink
Navbar.Text = NavbarText
export default Navbar;