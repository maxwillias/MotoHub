function Hero() {
    return (
        <section className="relative flex items-center min-h-[90vh] bg-dark overflow-hidden pt-16">
 
            {/* Conteúdo esquerdo */}
            <div className="relative z-10 flex flex-col justify-center px-6 md:px-16 py-20 w-full max-w-2xl">
        
                <span className="text-[11px] tracking-[4px] uppercase text-accent mb-6">
                Plataforma para motociclistas
                </span>
        
                <h1 className="text-[40px] md:text-[56px] leading-[1.05] font-medium text-beige-light mb-6">
                Conecte<br />
                motoclubes.<br />
                <span className="text-accent">Viva a estrada.</span>
                </h1>
        
                <p className="text-[16px] text-beige leading-relaxed mb-10 max-w-md">
                Plataforma para organizar eventos, fortalecer sua irmandade e explorar rotas com quem compartilha a mesma paixão.
                </p>
        
                <div className="flex items-center gap-3">
                <button className="text-[13px] font-medium text-white bg-accent px-6 py-3 rounded-md transition-colors duration-150 hover:bg-[#8c3829]">
                    Criar conta
                </button>
                <button className="text-[13px] text-beige-light bg-transparent border border-brown px-6 py-3 rounded-md transition-colors duration-150 hover:border-beige-light hover:text-white hover:bg-brown-dark/70">
                    Explorar motoclubes
                </button>
                </div>
        
                {/* Stats */}
                <div className="flex items-center gap-8 mt-14 pt-8 border-t border-brown-dark">
                {[
                    { value: "4.200+", label: "Motociclistas" },
                    { value: "180+",   label: "Motoclubes" },
                    { value: "950+",   label: "Eventos realizados" },
                ].map(({ value, label }) => (
                    <div key={label}>
                    <p className="text-[22px] font-medium text-beige-light">{value}</p>
                    <p className="text-[12px] text-beige tracking-wide mt-0.5">{label}</p>
                    </div>
                ))}
                </div>
            </div>
        
            {/* Imagem direita */}
            <div className="absolute right-0 top-0 h-full w-[55%] pointer-events-none hidden md:block">
        
                {/* Máscara gradiente para fundir com o fundo */}
                <div
                className="absolute inset-0 z-10"
                style={{
                    background: `
                    linear-gradient(to right, var(--color-dark) 0%, transparent 35%),
                    linear-gradient(to top, var(--color-dark) 0%, transparent 15%)
                    `,
                }}
                />
        
                <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80"
                alt="Grupo de motociclistas na estrada"
                className="w-full h-full object-cover object-center opacity-60"
                />
        
                {/* Overlay escuro sutil para manter legibilidade */}
                <div className="absolute inset-0 bg-dark opacity-30" />
            </div>

        </section>
    )
}

export default Hero