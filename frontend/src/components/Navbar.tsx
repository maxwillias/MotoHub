function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-10 h-16 bg-dark/90 backdrop-blur border-b border-brown-dark">
 
            <a href="#" className="flex items-center gap-2 no-underline">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <circle cx="14" cy="14" r="13" stroke="var(--color-accent)" strokeWidth="1.5" />
                    <circle cx="14" cy="14" r="5" fill="var(--color-accent)" />
                    <circle cx="14" cy="14" r="2" fill="var(--color-dark)" />
                    <path
                        d="M14 1 L14 5 M14 23 L14 27 M1 14 L5 14 M23 14 L27 14"
                        stroke="var(--color-brown-dark)"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                    />
                    <path
                        d="M6 6 L9 9 M19 19 L22 22 M6 22 L9 19 M19 9 L22 6"
                        stroke="var(--color-brown-dark)"
                        strokeWidth="0.8"
                        strokeLinecap="round"
                    />
                </svg>
                <span className="text-[18px] font-medium text-beige-light">
                    Moto<span className="text-accent">Hub</span>
                </span>
            </a>
        
            {/* Links */}
            <div className="flex items-center gap-1">
                {["Início", "Funcionalidades", "Planos"].map((item) => (
                <a
                    key={item}
                    href="#"
                    className="text-[13px] text-beige px-4 py-1.5 rounded-md transition-colors duration-150 hover:text-white hover:bg-brown-dark/80"
                >
                    {item}
                </a>
                ))}
            </div>
        
            {/* Ações */}
            <div className="flex items-center gap-2">
                <button className="text-[13px] text-beige-light bg-transparent border border-brown px-4.5 py-1.75 rounded-md transition-colors duration-150 hover:border-beige-light hover:text-white">
                Entrar
                </button>
                <button className="text-[13px] text-white font-medium bg-accent px-4.5 py-2 rounded-md transition-colors duration-150 hover:bg-[#8c3829]">
                Criar conta
                </button>
            </div>
    
        </nav>
    )
}

export default Navbar