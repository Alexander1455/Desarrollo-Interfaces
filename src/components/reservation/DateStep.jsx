import StepShell from './StepShell'
import { dayNames } from './reservationData'

function DateStep({
  progress,
  onBack,
  onClose,
  currentMonth,
  monthIndex,
  monthConfigs,
  currentStatuses,
  selectedDay,
  selectedDateLabel,
  onChangeMonth,
  onSelectDay,
  onNext,
}) {
  return (
    <StepShell currentStep={1} onBack={onBack} onClose={onClose} progress={progress}>
      <div className="mt-4">
        <h3 className="text-[18px] font-semibold leading-tight text-[#0f172a] sm:text-[20px]">Seleccione Una Fecha</h3>
        <p className="mt-1 max-w-[230px] text-[11px] leading-4 text-[#94a3b8]">Elija una fecha disponible para su experiencia gastronómica.</p>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <h4 className="text-[15px] font-semibold text-[#1e293b]">{currentMonth.label}</h4>
        <div className="flex gap-2 text-lg">
          <button className="grid h-8 w-8 place-items-center rounded-xl border border-[#e2e8f0] text-[11px] text-[#94a3b8] disabled:opacity-40" disabled={monthIndex === 0} onClick={() => onChangeMonth(-1)} type="button"><i className="fa-solid fa-chevron-left" /></button>
          <button className="grid h-8 w-8 place-items-center rounded-xl border border-[#e2e8f0] text-[11px] text-[#ef4444] disabled:opacity-40" disabled={monthIndex === monthConfigs.length - 1} onClick={() => onChangeMonth(1)} type="button"><i className="fa-solid fa-chevron-right" /></button>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-7 gap-y-3 text-center">
        {dayNames.map((day, index) => (
          <span className="text-[10px] font-medium text-[#94a3b8]" key={`${day}-${index}`}>{day}</span>
        ))}
        {currentMonth.days.flat().map((day) => {
          const numericDay = Number(day)
          const selected = numericDay === selectedDay
          const status = currentStatuses[numericDay]
          const muted = !status || day === '29' || day === '30'
          const disabled = muted || status === 'Lleno'

          return (
            <button className="flex min-h-[48px] flex-col items-center gap-1" disabled={disabled} key={`${currentMonth.label}-${day}`} onClick={() => onSelectDay(numericDay)} type="button">
              <span
                className={`grid h-8 w-8 place-items-center rounded-2xl text-[14px] font-semibold transition-all ${
                  selected
                    ? 'bg-[#ef4444] text-white shadow-[0_10px_22px_rgba(239,68,68,0.35)]'
                    : muted
                      ? 'text-[#cbd5e1]'
                      : status === 'Lleno'
                        ? 'text-[#cbd5e1]'
                        : 'text-[#1e293b]'
                }`}
              >
                {day}
              </span>
              <span className={`min-h-[16px] max-w-[42px] text-center text-[7px] leading-[8px] ${selected ? 'font-medium text-[#ef4444]' : status === 'Lleno' ? 'text-[#cbd5e1]' : 'text-[#94a3b8]'}`}>
                {selected ? 'Seleccionado' : status ?? ''}
              </span>
            </button>
          )
        })}
      </div>
      <div className="mt-3 flex flex-wrap justify-center gap-3 text-[10px] text-[#94a3b8]">
        <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#cbd5e1]" />Reserva Confirmada</div>
        <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full border border-[#cbd5e1]" />Disponible</div>
        <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#ef4444]" />Seleccionada</div>
      </div>
      <div className="mt-3 flex items-center gap-3 rounded-2xl bg-[#f8fafc] px-4 py-2.5">
        <div className="grid h-9 w-9 place-items-center rounded-xl bg-[#fee2e2] text-sm text-[#ef4444]"><i className="fa-regular fa-calendar" /></div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#ef4444]">Fecha seleccionada</p>
          <p className="text-[13px] font-semibold text-[#0f172a]">{selectedDateLabel}</p>
        </div>
      </div>
      <div className="mt-auto pt-3">
        <button className="w-full rounded-2xl bg-[#ef2b34] px-5 py-3 text-[14px] font-semibold text-white shadow-[0_14px_30px_rgba(239,43,52,0.28)]" onClick={onNext} type="button">Continuar con el Tiempo <i className="fa-solid fa-arrow-right ml-2" /></button>
      </div>
    </StepShell>
  )
}

export default DateStep
