"use client"
import { useEffect, useState } from "react"

export type SizeOfWindow = {
    width: number | undefined,
    height: number | undefined
}
export const UseWindowSize = (): SizeOfWindow => {
  const [windowSize, setWindowSize] = useState<SizeOfWindow>({
    width: undefined,
    height: undefined
  })

  useEffect(() => {
    const handleResize = () => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }

    handleResize()

    window.addEventListener("resize", handleResize)

    return () => {
        window.removeEventListener("resize", handleResize)
    }
  }, [])

  return windowSize
}