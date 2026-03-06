import StepShell from './StepShell'

function GuestsStep({ progress, onBack, onClose, guestCount, setGuestCount, onNext }) {
  return (
    <StepShell currentStep={2} onBack={onBack} onClose={onClose} progress={progress}>
      <div className="mt-8 text-center sm:mt-10">
        <h3 className="text-[20px] font-semibold text-[#0f172a]">¿Cuántos invitados?</h3>
        <p className="mt-1 text-[12px] text-[#94a3b8]">Por favor seleccione el tamaño de su grupo</p>
      </div>
      <div className="mt-5 flex items-center justify-between gap-4">
        <button className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#f8fafc] text-[30px] text-[#ef4444] shadow-sm" onClick={() => setGuestCount((value) => Math.max(1, value - 1))} type="button">−</button>
        <div className="min-w-0 flex-1 text-center">
          <div className="text-[64px] font-bold leading-none text-[#0f172a] sm:text-[72px]">{guestCount}</div>
          <div className="mt-1 text-[10px] font-bold uppercase tracking-wide text-[#94a3b8]">Invitados</div>
        </div>
        <button className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#ef2b34] text-[30px] text-white shadow-[0_12px_24px_rgba(239,43,52,0.3)]" onClick={() => setGuestCount((value) => Math.min(12, value + 1))} type="button">+</button>
      </div>
      <div className="mt-6 rounded-[22px] border border-[#fecaca] bg-[#fff5f5] px-4 py-4 text-left">
        <div className="flex gap-4">
          <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#fee2e2] text-sm text-[#ef4444]">i</div>
          <div>
            <h4 className="text-[14px] font-medium text-[#334155]">Políticas de grupo</h4>
            <p className="mt-1 text-[12px] leading-5 text-[#64748b]">Para grupos grandes (6+), se requiere una confirmación manual de nuestro personal después de realizar la reserva.</p>
          </div>
        </div>
      </div>
      <div className="mt-auto border-t border-[#e5e7eb] pt-4">
        <button className="w-full rounded-2xl bg-[#ef2b34] px-5 py-3.5 text-[15px] font-semibold text-white shadow-[0_10px_22px_rgba(239,43,52,0.18)]" onClick={onNext} type="button">Ver horarios disponibles <i className="fa-solid fa-arrow-right ml-2" /></button>
        <p className="mt-4 text-center text-[11px] uppercase tracking-[0.16em] text-[#0f172a]">Reserva para un evento privado ?</p>
      </div>
    </StepShell>
  )
}

export default GuestsStep
