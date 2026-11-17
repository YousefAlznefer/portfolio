const links = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
]

function Navbar() {
    return (
        <header className="navbar">
            <a href="#" className="logo">YA</a>
            <nav>
                {links.map((link) => (
                    <a key={link.href} href={link.href}>
                        {link.label}
                    </a>
                ))}
            </nav>
        </header>
    )
}

export default Navbar