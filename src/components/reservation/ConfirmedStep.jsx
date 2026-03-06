function ConfirmedStep({ selectedDateLabel, selectedTimeLabel, guestCount, onClose }) {
  return (
    <section className="mx-auto flex h-[100dvh] max-h-[900px] w-full max-w-[430px] flex-col overflow-hidden rounded-[30px] bg-white px-4 py-5 shadow-[0_24px_60px_rgba(15,23,42,0.12)] sm:h-[100vh] sm:px-5">
      <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#dcfce7] text-[28px] text-[#22c55e]"><i className="fa-solid fa-check" /></div>
      <div className="mt-4 text-center">
        <h2 className="text-[20px] font-semibold text-[#0f172a]">Reserva confirmada!</h2>
        <p className="mx-auto mt-1 max-w-[250px] text-[12px] leading-5 text-[#94a3b8]">Se ha enviado un correo electrónico de confirmación a su bandeja de entrada.</p>
      </div>
      <div className="mt-4 flex-1 overflow-y-auto pr-1">
        <div className="rounded-2xl border border-[#e2e8f0] px-4 py-3">
          <div className="flex items-center justify-between gap-2 border-b border-[#eef2f7] pb-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#94a3b8]">ID de reserva</p>
              <p className="text-[16px] font-bold text-[#334155]">#R-98234</p>
            </div>
            <span className="rounded-full bg-[#dcfce7] px-3 py-1 text-xs font-bold text-[#16a34a]">• Confirmada</span>
          </div>
          <div className="space-y-3 pt-3">
            {[
              ['Fecha y hora', `${selectedDateLabel} @ ${selectedTimeLabel}`, '◷'],
              ['Tamaño del grupo', `${guestCount} Invitados`, '◉'],
              ['Restaurante', 'The Sapphire Bistro', '⌘'],
            ].map(([label, value, icon]) => (
              <div className="flex items-center gap-3" key={label}>
                <div className="grid h-9 w-9 place-items-center rounded-xl bg-[#fff1f2] text-sm text-[#ef4444]">{icon}</div>
                <div>
                  <p className="text-[11px] text-[#94a3b8]">{label}</p>
                  <p className="text-[14px] font-semibold text-[#1e293b]">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4 space-y-2">
          <div className="rounded-2xl bg-[#f8fafc] px-4 py-3 text-[#64748b]">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#94a3b8]">Llegada recomendada</p>
            <p className="mt-1 text-[14px] font-medium text-[#334155]">Por favor llegue 10 minutos antes</p>
          </div>
          <div className="rounded-2xl bg-[#f8fafc] px-4 py-3 text-[#64748b]">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#94a3b8]">Política de cancelación</p>
            <p className="mt-1 text-[14px] font-medium text-[#334155]">Cancelación gratuita hasta 24 horas antes</p>
          </div>
        </div>
        <div className="mt-4 overflow-hidden rounded-2xl border border-[#e2e8f0] bg-[#f1f5f9] p-1">
          <div className="grid h-40 place-items-center rounded-[14px] bg-[#e6efe0] px-3 py-3">
            <div className="relative h-full w-full overflow-hidden rounded-xl border border-[#d7e3d0] bg-[linear-gradient(135deg,#dcead4_0%,#eef5ea_100%)]">
              <div className="absolute inset-y-0 left-[18%] w-5 bg-[#c8d1c2]" />
              <div className="absolute inset-y-0 right-[22%] w-4 bg-[#d6ddd1]" />
              <div className="absolute left-0 right-0 top-[22%] h-4 bg-[#d9dfd2]" />
              <div className="absolute left-0 right-0 top-[52%] h-5 bg-[#cfd7ca]" />
              <div className="absolute left-[34%] top-[10%] h-16 w-14 rounded-lg bg-[#c7ddb8]/80" />
              <div className="absolute left-[58%] top-[18%] h-12 w-16 rounded-lg bg-[#cfe3c2]/80" />
              <div className="absolute left-[28%] top-[58%] h-14 w-20 rounded-lg bg-[#d8e7cb]/80" />
              <div className="absolute right-[12%] top-[60%] h-12 w-16 rounded-lg bg-[#c9deb8]/80" />
              <div className="absolute left-1/2 top-[44%] h-16 w-10 -translate-x-1/2 rounded-t-full rounded-b-[999px] bg-[#fb7185] shadow-[0_10px_25px_rgba(251,113,133,0.35)]" />
              <div className="absolute left-1/2 top-[52%] grid h-5 w-5 -translate-x-1/2 place-items-center rounded-full bg-[#2563eb] text-[10px] text-white shadow-md"><i className="fa-solid fa-location-dot" /></div>
              <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-medium text-[#334155] shadow-sm">
                <i className="fa-solid fa-location-dot text-[#2563eb]" />
                123 Culinary Way, Soho
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-3">
        <button className="w-full rounded-2xl bg-[#ef2b34] px-5 py-3.5 text-[15px] font-semibold text-white shadow-[0_10px_22px_rgba(239,43,52,0.16)]" type="button"><i className="fa-regular fa-calendar mr-2" />Agregar al calendario</button>
        <button className="mt-3 w-full text-center text-[15px] font-medium text-[#475569]" onClick={onClose} type="button">Volver a Inicio</button>
      </div>
    </section>
  )
}

export default ConfirmedStep
