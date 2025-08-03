"use client"
import { useState } from "react"
import Services from "../HeroAnimation/HeroAnimation"
import { ExploreServiceMenu } from "./ExploreServiceMenu"
import { services } from "../services.data"

export const ServicesComponentPage = () => {
  const [category, setCategory] = useState<string>("Communion Service")
  return (
    <>
      <Services data={services} />
      <ExploreServiceMenu category={category} setCategory={setCategory} />
    </>
  )
}