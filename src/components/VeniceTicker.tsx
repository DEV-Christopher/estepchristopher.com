'use client'

import { useEffect, useState } from 'react'

const VENICE = { lat: 33.985, lon: -118.4695, tz: 'America/Los_Angeles' }

type TimeParts = { hour: string; minute: string; dayPeriod: string }

export function VeniceTicker() {
  const [time, setTime] = useState<TimeParts | null>(null)
  const [temp, setTemp] = useState<number | null>(null)

  useEffect(() => {
    const update = () => {
      const parts = new Intl.DateTimeFormat('en-US', {
        timeZone: VENICE.tz,
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      }).formatToParts(new Date())
      const get = (type: string) => parts.find((p) => p.type === type)?.value ?? ''
      setTime({ hour: get('hour'), minute: get('minute'), dayPeriod: get('dayPeriod') })
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${VENICE.lat}&longitude=${VENICE.lon}&current=temperature_2m&temperature_unit=fahrenheit`
    )
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        const t = data?.current?.temperature_2m
        if (typeof t === 'number') setTemp(Math.round(t))
      })
      .catch(() => {})
  }, [])

  // Rendered client-side only, so there is no hydration mismatch on the clock
  if (!time) return null

  return (
    <span className="kicker tabular-nums whitespace-nowrap">
      {temp !== null && <>{temp}°F · </>}
      {time.hour}
      <span className="colon-blink" aria-hidden="true">:</span>
      {time.minute} {time.dayPeriod}
    </span>
  )
}
