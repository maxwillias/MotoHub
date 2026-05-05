function About() {
    const features = [
        "Criar e gerenciar motoclubes",
        "Organizar eventos e encontros",
        "Conectar-se com outros riders",
        "Explorar e compartilhar rotas",
    ];

    return (
        <section className="bg-dark">
            <div className="max-w-6xl mx-auto px-16 py-24 flex items-center gap-20">
        
                {/* Esquerda — texto */}
                <div className="flex-1">
                <span className="text-[11px] tracking-[4px] uppercase text-accent mb-4 block">
                    Sobre a plataforma
                </span>
        
                <h2 className="text-[38px] font-medium text-beige-light leading-[1.1] mb-6">
                    O que é o MotoHub?
                </h2>
        
                <p className="text-[15px] text-beige leading-relaxed mb-10 max-w-sm">
                    Uma plataforma feita para motociclistas que querem mais do que apenas pilotar. Aqui, você encontra sua tribo, organiza sua jornada e vive a estrada com mais intensidade.
                </p>
        
                <ul className="flex flex-col gap-4">
                    {features.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-accent shrink-0">
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                            <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        </span>
                        <span className="text-[14px] text-beige-light">{item}</span>
                    </li>
                    ))}
                </ul>
                </div>
        
                {/* Direita — card visual */}
                <div className="flex-1 flex flex-col gap-4">
        
                <div className="bg-brown-dark border border-brown rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center shrink-0">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="5" r="3" stroke="white" strokeWidth="1.4"/>
                        <path d="M2 14c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
                        </svg>
                    </div>
                    <div>
                        <p className="text-[13px] font-medium text-beige-light">Iron Brotherhood MC</p>
                        <p className="text-[11px] text-beige">248 membros · São Paulo, SP</p>
                    </div>
                    </div>
                    <div className="flex gap-2">
                    {["Eventos", "Rotas", "Galeria"].map((tag) => (
                        <span key={tag} className="text-[11px] text-beige border border-brown px-3 py-1 rounded-full">
                        {tag}
                        </span>
                    ))}
                    </div>
                </div>
        
                <div className="bg-brown-dark border border-brown rounded-lg p-6">
                    <p className="text-[11px] tracking-[3px] uppercase text-beige mb-3">Próximo evento</p>
                    <p className="text-[15px] font-medium text-beige-light mb-1">Rally do Cerrado — Goiânia</p>
                    <p className="text-[12px] text-beige">12 de Abril · 7h · Concentração no Parque Flamboyant</p>
                    <div className="mt-4 h-1 rounded-full bg-brown">
                    <div className="h-1 rounded-full bg-accent w-[68%]" />
                    </div>
                    <p className="text-[11px] text-beige mt-1.5">68 de 100 vagas preenchidas</p>
                </div>
        
                <div className="bg-brown-dark border border-brown rounded-lg p-6 flex items-center gap-4">
                    <div className="flex -space-x-2">
                    {["#A44331","#766148","#553825","#A08463"].map((color, i) => (
                        <div
                        key={i}
                        className="w-8 h-8 rounded-full border-2 border-brown-dark"
                        style={{ backgroundColor: color }}
                        />
                    ))}
                    </div>
                    <div>
                    <p className="text-[13px] font-medium text-beige-light">+4.200 riders conectados</p>
                    <p className="text-[11px] text-beige">Junte-se à comunidade</p>
                    </div>
                </div>
        
                </div>
            </div>
        </section>
    )
}

export default About