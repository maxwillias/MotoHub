function Pricing() {

    const plans = [
    {
        name: "Gratuito",
        price: "R$ 0",
        period: "para sempre",
        description: "Para quem quer entrar na comunidade e explorar a plataforma.",
        cta: "Começar grátis",
        ctaStyle: "ghost",
        features: [
        "Perfil de motociclista",
        "Participar de eventos",
        "Entrar em motoclubes",
        "Explorar rotas no mapa",
        "Chat com membros",
        ],
    },
    {
        name: "Pro",
        price: "R$ 29",
        period: "por mês",
        description: "Para líderes que querem criar, gerenciar e crescer sua irmandade.",
        cta: "Assinar agora",
        ctaStyle: "primary",
        highlight: true,
        features: [
        "Tudo do plano Gratuito",
        "Criar e gerenciar motoclube",
        "Organizar eventos com vagas",
        "Destaque no sistema",
        "Relatórios e métricas do clube",
        ],
    },
    ];
    
    function CheckIcon() {
        return (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 mt-0.5">
            <circle cx="7" cy="7" r="7" fill="var(--color-accent)" />
            <path d="M4 7l2 2 4-4" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        );
    }

    return (
        <section className="bg-dark">
            <div className="max-w-4xl mx-auto px-16 py-24">
        
                <div className="mb-14">
                <span className="text-[11px] tracking-[4px] uppercase text-accent mb-4 block">
                    Simples e transparente
                </span>
                <h2 className="text-[38px] font-medium text-beige-light leading-[1.1]">
                    Planos
                </h2>
                </div>
        
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {plans.map((plan) => (
                    <div
                    key={plan.name}
                    className={`
                        flex flex-col rounded-lg p-8 border transition-colors duration-200
                        ${plan.highlight
                        ? "bg-brown-dark border-accent"
                        : "bg-brown-dark border-brown"
                        }
                    `}
                    >
                    {/* Badge */}
                    {plan.highlight && (
                        <span className="self-start text-[10px] tracking-[2px] uppercase text-accent border border-accent px-3 py-1 rounded-full mb-5">
                        Mais popular
                        </span>
                    )}
        
                    {/* Header */}
                    <p className="text-[13px] font-medium text-beige tracking-wide mb-3">
                        {plan.name}
                    </p>
                    <div className="flex items-baseline gap-1.5 mb-2">
                        <span className="text-[40px] font-medium text-beige-light leading-none">
                        {plan.price}
                        </span>
                        <span className="text-[13px] text-beige">/ {plan.period}</span>
                    </div>
                    <p className="text-[13px] text-beige leading-relaxed mb-8">
                        {plan.description}
                    </p>
        
                    {/* Divider */}
                    <div className="h-px bg-brown mb-6" />
        
                    {/* Features */}
                    <ul className="flex flex-col gap-3 mb-8 flex-1">
                        {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-[13px] text-beige-light">
                            <CheckIcon />
                            {f}
                        </li>
                        ))}
                    </ul>
        
                    {/* CTA */}
                    {plan.ctaStyle === "primary" ? (
                        <button className="w-full text-[13px] font-medium text-white bg-accent py-3 rounded-md hover:bg-[#8c3829] transition-colors duration-150">
                        {plan.cta}
                        </button>
                    ) : (
                        <button className="w-full text-[13px] text-beige-light bg-transparent border border-brown py-3 rounded-md hover:border-beige-light hover:text-white transition-colors duration-150">
                        {plan.cta}
                        </button>
                    )}
                    </div>
                ))}
                </div>
        
            </div>
        </section>
    )
}

export default Pricing