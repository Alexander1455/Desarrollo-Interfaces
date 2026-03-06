import StepShell from './StepShell'

function ReviewStep({
  progress,
  onBack,
  onClose,
  fondoImage,
  selectedDateLabel,
  selectedTimeLabel,
  guestCount,
  onEditDate,
  onEditGuests,
  onConfirm,
}) {
  return (
    <StepShell currentStep={5} onBack={onBack} onClose={onClose} progress={progress}>
      <div className="mt-3 flex-1 overflow-y-auto pr-1">
        <div className="overflow-hidden rounded-[18px] bg-[#8a6338] px-4 py-10 text-white" style={{ backgroundImage: `linear-gradient(180deg, rgba(15, 23, 42, 0.1), rgba(15, 23, 42, 0.55)), url(${fondoImage})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
          <h3 className="mt-6 text-[18px] font-semibold">La Mesa de Zafiro</h3>
          <p className="text-[12px] text-white/80">Restaurantes de lujo • Centro de San Isidro</p>
        </div>
        <div className="mt-4 space-y-3">
          {[
            ['Fecha y hora', selectedDateLabel, selectedTimeLabel],
            ['Invitados', `${guestCount} Personas`, 'Asientos Interiores Estándar'],
            ['Información del contacto', 'Julian Richardson', 'j.richardson@example.com'],
          ].map(([title, value, extra]) => (
            <div className="flex items-start gap-3 rounded-2xl border border-[#e2e8f0] px-4 py-3" key={title}>
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-[#fff1f2] text-sm text-[#ef4444]"><i className={`${title === 'Invitados' ? 'fa-solid fa-user-group' : title === 'Información del contacto' ? 'fa-solid fa-user' : 'fa-regular fa-calendar'}`} /></div>
              <div className="flex-1">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-[#94a3b8]">{title}</p>
                  <button className="text-xs font-bold text-[#ef4444]" onClick={title === 'Invitados' ? onEditGuests : onEditDate} type="button">Editar</button>
                </div>
                <p className="text-[14px] font-semibold text-[#0f172a]">{value}</p>
                <p className="text-[12px] text-[#94a3b8]">{extra}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 overflow-hidden rounded-2xl border border-[#e2e8f0] bg-[#f8fafc] p-1">
          <div className="grid h-28 place-items-center rounded-[14px] bg-[linear-gradient(135deg,#e2e8f0_0%,#f8fafc_100%)]">
            <div className="relative h-20 w-full max-w-[240px] rounded-xl bg-[radial-gradient(circle_at_20%_50%,#cfe8c3_0_18%,transparent_19%),radial-gradient(circle_at_80%_30%,#d9eecf_0_16%,transparent_17%),linear-gradient(90deg,#dbeafe_0_20%,#e5e7eb_20_40%,#dbeafe_40_60%,#e5e7eb_60_80%,#dbeafe_80_100%)]">
              <div className="absolute left-1/2 top-2 h-12 w-8 -translate-x-1/2 rounded-t-full rounded-b-[999px] bg-[#fb7185]" />
              <div className="absolute left-1/2 top-10 h-4 w-4 -translate-x-1/2 rounded-full bg-[#2563eb]" />
            </div>
          </div>
        </div>
        <p className="mx-auto mt-3 max-w-[250px] text-center text-[11px] leading-4 text-[#94a3b8]">Al hacer clic en “Confirmar reserva”, acepta nuestra política de reservas.</p>
      </div>
      <div className="pt-3">
        <button className="w-full rounded-2xl bg-[#ef2b34] px-5 py-3.5 text-[15px] font-semibold text-white shadow-[0_10px_22px_rgba(239,43,52,0.16)]" onClick={onConfirm} type="button">Confirmar la Reserva <i className="fa-solid fa-circle-check ml-2" /></button>
        <button className="mt-3 w-full text-center text-[13px] font-medium text-[#64748b]" onClick={onClose} type="button">Cancelar y Salir</button>
      </div>
    </StepShell>
  )
}

export default ReviewStep
