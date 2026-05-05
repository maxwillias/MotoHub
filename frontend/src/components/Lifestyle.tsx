function Lifestyle() {
  return (
    <section className="relative min-h-130 flex items-center justify-center overflow-hidden">

      <div
      className="absolute inset-0 z-10"
      style={{
          background: `
          linear-gradient(to bottom, var(--color-dark) 0%, transparent 10%),
          linear-gradient(to top, var(--color-dark) 0%, transparent 10%)
          `,
      }}
      />

      {/* Imagem de fundo */}
      <img
        src="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=1600&q=80"
        alt="Grupo de motociclistas na estrada aberta"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-dark opacity-70" />

      {/* Borda accent no topo */}
      <div className="absolute top-0 left-0 right-0 h-0.75" />

      {/* Conteúdo */}
      <div className="relative z-10 text-center px-8 max-w-3xl mx-auto">
        <span className="text-[11px] tracking-[4px] uppercase text-accent mb-8 block">
          Mais do que uma plataforma
        </span>

        <blockquote className="text-[42px] font-medium text-beige-light leading-[1.15] mb-8">
          "Não é só sobre motos.
          <br />
          É sobre{" "}
          <span className="text-accent">liberdade</span>,{" "}
          estrada e{" "}
          <span className="text-accent">irmandade</span>."
        </blockquote>

        <div className="flex items-center justify-center gap-3">
          <div className="h-px w-12 bg-brown" />
          <span className="text-[13px] text-beige tracking-widest uppercase">
            MotoHub
          </span>
          <div className="h-px w-12 bg-brown" />
        </div>
      </div>

      {/* Borda accent na base */}
      <div className="absolute bottom-0 left-0 right-0 h-px" />

    </section>
  );
}

export default Lifestyle