"use client"

import * as React from "react"

import { Calendar } from "@/components/ui/calendar"

export function CalendarPage() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <div className="w-full flex iteams-center justify-center mt-25">
     <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      captionLayout="dropdown"
      className="[&_[data-today]]:bg-[#d63037] [&_[data-today]]:text-white [&_[data-today]_button]:bg-[#d63037] [&_[data-today]_button]:rounded-md [&_[data-today]]:rounded-md"
      />
    </div>
  )
}
