function Footer() {
    const links = ["Sobre", "Contato", "Termos", "Privacidade"];

    return (
        <footer className="bg-dark border-t border-brown-dark">
            <div className="max-w-6xl mx-auto px-16 py-8 flex items-center justify-between">
        
                <div className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 28 28" fill="none">
                    <circle cx="14" cy="14" r="13" stroke="var(--color-accent)" strokeWidth="1.5" />
                    <circle cx="14" cy="14" r="5" fill="var(--color-accent)" />
                    <circle cx="14" cy="14" r="2" fill="var(--color-dark)" />
                    <path d="M14 1 L14 5 M14 23 L14 27 M1 14 L5 14 M23 14 L27 14" stroke="var(--color-brown-dark)" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
                <span className="text-[14px] font-medium text-beige-light">
                    Moto<span className="text-accent">Hub</span>
                </span>
                <span className="text-[13px] text-brown ml-2">©2026</span>
                </div>
        
                <nav className="flex items-center gap-6">
                {links.map((link) => (
                    <a
                    key={link}
                    href="#"
                    className="text-[13px] text-beige hover:text-beige-light transition-colors duration-150"
                    >
                    {link}
                    </a>
                ))}
                </nav>
        
            </div>
        </footer>
    )
}

export default Footer