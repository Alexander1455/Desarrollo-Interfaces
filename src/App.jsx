import { useMemo, useState } from 'react'
import fondoImage from './assets/fondo.png'
import ConfirmedStep from './components/reservation/ConfirmedStep'
import DateStep from './components/reservation/DateStep'
import GuestsStep from './components/reservation/GuestsStep'
import ReviewStep from './components/reservation/ReviewStep'
import { dayLabelMap, monthConfigs, statusByDayByMonth } from './components/reservation/reservationData'

function App() {
  const [screen, setScreen] = useState('date')
  const [guestCount, setGuestCount] = useState(4)
  const [monthIndex, setMonthIndex] = useState(0)
  const [selectedDay, setSelectedDay] = useState(11)

  const progress = useMemo(() => {
    if (screen === 'date') return 20
    if (screen === 'guests') return 40
    if (screen === 'review') return 100
    return 100
  }, [screen])

  const goBack = () => {
    if (screen === 'date') return
    if (screen === 'guests') {
      setScreen('date')
      return
    }
    if (screen === 'review') {
      setScreen('guests')
      return
    }
    if (screen === 'confirmed') {
      setScreen('review')
    }
  }

  const closeFlow = () => {
    setScreen('date')
    setGuestCount(4)
    setMonthIndex(0)
    setSelectedDay(11)
  }

  const currentMonth = monthConfigs[monthIndex]
  const currentStatuses = statusByDayByMonth[currentMonth.label]
  const selectedDateLabel = `${dayLabelMap[selectedDay]}, ${currentMonth.monthShort} ${selectedDay}, 2026`
  const selectedTimeLabel = '07:30 PM'

  const changeMonth = (direction) => {
    const nextIndex = monthIndex + direction

    if (nextIndex < 0 || nextIndex >= monthConfigs.length) {
      return
    }

    const nextMonth = monthConfigs[nextIndex]
    const nextStatuses = statusByDayByMonth[nextMonth.label]
    const firstAvailableDay = Object.entries(nextStatuses).find(([, value]) => value === 'Disponible')

    setMonthIndex(nextIndex)
    setSelectedDay(firstAvailableDay ? Number(firstAvailableDay[0]) : 1)
  }

  return (
    <main className="h-[100dvh] overflow-hidden bg-[#e5e7eb] px-2 py-2 sm:h-screen sm:px-4 sm:py-4">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-center">

        {screen === 'date' && (
          <DateStep
            currentMonth={currentMonth}
            currentStatuses={currentStatuses}
            monthConfigs={monthConfigs}
            monthIndex={monthIndex}
            onBack={goBack}
            onChangeMonth={changeMonth}
            onClose={closeFlow}
            onNext={() => setScreen('guests')}
            onSelectDay={setSelectedDay}
            progress={progress}
            selectedDateLabel={selectedDateLabel}
            selectedDay={selectedDay}
          />
        )}

        {screen === 'guests' && (
          <GuestsStep
            guestCount={guestCount}
            onBack={goBack}
            onClose={closeFlow}
            onNext={() => setScreen('review')}
            progress={progress}
            setGuestCount={setGuestCount}
          />
        )}

        {screen === 'review' && (
          <ReviewStep
            fondoImage={fondoImage}
            guestCount={guestCount}
            onBack={goBack}
            onClose={closeFlow}
            onConfirm={() => setScreen('confirmed')}
            onEditDate={() => setScreen('date')}
            onEditGuests={() => setScreen('guests')}
            progress={progress}
            selectedDateLabel={selectedDateLabel}
            selectedTimeLabel={selectedTimeLabel}
          />
        )}

        {screen === 'confirmed' && (
          <ConfirmedStep
            guestCount={guestCount}
            onClose={closeFlow}
            selectedDateLabel={selectedDateLabel}
            selectedTimeLabel={selectedTimeLabel}
          />
        )}
      </div>
    </main>
  )
}

export default App
