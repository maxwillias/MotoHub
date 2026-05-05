function CTA() {
    return (
        <section className="bg-brown-dark">
            <div className="max-w-3xl mx-auto px-16 py-28 flex flex-col items-center text-center gap-6">
        
                <span className="text-[11px] tracking-[4px] uppercase text-accent">
                Junte-se à comunidade
                </span>
        
                <h2 className="text-[44px] font-medium text-beige-light leading-[1.1]">
                Pronto para acelerar<br />com o MotoHub?
                </h2>
        
                <p className="text-[16px] text-beige leading-relaxed max-w-md">
                Junte-se agora e leve seu motoclube para o próximo nível. Gratuito para começar, sempre.
                </p>
        
                <div className="flex items-center gap-3 mt-4">
                <button className="text-[13px] font-medium text-white bg-accent px-8 py-3.5 rounded-md hover:bg-[#8c3829] transition-colors duration-150">
                    Criar conta
                </button>
                <button className="text-[13px] text-beige-light bg-transparent border border-brown px-8 py-3.5 rounded-md hover:border-beige-light hover:text-white transition-colors duration-150">
                    Explorar motoclubes
                </button>
                </div>
        
                <p className="text-[12px] text-beige mt-2">
                Sem cartão de crédito · Plano gratuito para sempre
                </p>
        
            </div>
        </section>
    )
}

export default CTA