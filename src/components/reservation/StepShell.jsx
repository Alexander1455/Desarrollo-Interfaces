function StepShell({ children, currentStep, onBack, onClose, progress }) {
  return (
    <section className="mx-auto flex h-[100dvh] max-h-[900px] w-full max-w-[430px] flex-col overflow-hidden rounded-[30px] bg-white px-4 py-4 shadow-[0_24px_60px_rgba(15,23,42,0.12)] sm:h-[100vh] sm:px-5 sm:py-5">
      <div className="flex items-center justify-between text-[#64748b]">
        <button className="text-[28px] leading-none" onClick={onBack} type="button">
          ‹
        </button>
        <div className="text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#94a3b8]">Reserva</p>
          <h2 className="mt-1 text-[16px] font-bold text-[#0f172a]">Paso {currentStep} de 5</h2>
        </div>
        <button className="text-[28px] leading-none" onClick={onClose} type="button">
          ×
        </button>
      </div>
      <div className="mt-5 h-1 rounded-full bg-[#e5e7eb]">
        <div className="h-1 rounded-full bg-[#ef4444] transition-all duration-300" style={{ width: `${progress}%` }} />
      </div>
      <div className="flex flex-1 flex-col overflow-hidden">{children}</div>
    </section>
  )
}

export default StepShell
