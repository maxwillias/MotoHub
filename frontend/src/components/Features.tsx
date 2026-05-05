function Features() {
    const features = [
    {
        title: "Motoclubes",
        description: "Crie e gerencie seu clube com página própria, membros e hierarquia.",
        icon: (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <circle cx="8" cy="7" r="3" stroke="currentColor" strokeWidth="1.4"/>
            <path d="M2 19c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
            <circle cx="16" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.4"/>
            <path d="M19 19c0-2.761-1.343-5-3-5.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        </svg>
        ),
    },
    {
        title: "Eventos",
        description: "Organize encontros, rallys e passeios com controle de vagas e confirmações.",
        icon: (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <rect x="3" y="5" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.4"/>
            <path d="M3 9h16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
            <path d="M7 3v4M15 3v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
            <path d="M7 13h4M7 16h2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        </svg>
        ),
    },
    {
        title: "Chat",
        description: "Converse com membros do clube em tempo real, por grupos ou privado.",
        icon: (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M4 4h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H7l-4 3V6a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
            <path d="M7 9h8M7 12h5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        </svg>
        ),
    },
    {
        title: "Explorar",
        description: "Descubra rotas, motoclubes e eventos próximos a você no mapa.",
        icon: (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.4"/>
            <path d="M11 3v2M11 17v2M3 11h2M17 11h2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
            <circle cx="11" cy="11" r="3" stroke="currentColor" strokeWidth="1.4"/>
            <path d="M13.5 8.5l1-3.5-3.5 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        ),
    },
    ];

    return (
        <section className="bg-dark">
            <div className="max-w-6xl mx-auto px-16 py-24">
        
                <div className="mb-14">
                <span className="text-[11px] tracking-[4px] uppercase text-accent mb-4 block">
                    O que você pode fazer
                </span>
                <h2 className="text-[38px] font-medium text-beige-light leading-[1.1]">
                    Funcionalidades principais
                </h2>
                </div>
        
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, i) => (
                    <div
                    key={feature.title}
                    className="group bg-brown-dark border border-brown rounded-lg p-6 flex flex-col gap-5 hover:border-accent transition-colors duration-200 cursor-default"
                    >
                    <div className="flex items-center justify-between">
                        <div className="w-10 h-10 rounded-md bg-dark border border-brown flex items-center justify-center text-accent group-hover:border-accent transition-colors duration-200">
                        {feature.icon}
                        </div>
                        <span className="text-[28px] font-medium text-brown leading-none">
                        0{i + 1}
                        </span>
                    </div>
        
                    <div>
                        <h3 className="text-[15px] font-medium text-beige-light mb-2">
                        {feature.title}
                        </h3>
                        <p className="text-[13px] text-beige leading-relaxed">
                        {feature.description}
                        </p>
                    </div>
                    </div>
                ))}
                </div>
        
            </div>
        </section>
    )
}

export default Features