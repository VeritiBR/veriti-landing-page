"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { DollarSign, Building, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { GiInjustice } from "react-icons/gi";
import { IoMdPin } from "react-icons/io";

interface StatCardProps {
  icon: React.ReactNode
  value: number
  label: string
  prefix?: string
  isVisible: boolean
}

function StatCard({ icon, value, label, prefix = "+", isVisible }: StatCardProps) {
  const [currentValue, setCurrentValue] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000 // 2 seconds

    // Special handling for revenue (faturamento)
    if (value >= 100000000) {
      const increment = 100000000 // 100.000 increments
      const totalSteps = 10 // From 100k to 1M = 10 steps
      const stepDuration = duration / totalSteps

      let currentStep = 0
      const timer = setInterval(() => {
        currentStep++
        const newValue = currentStep * increment
        setCurrentValue(newValue)

        if (currentStep >= totalSteps) {
          clearInterval(timer)
          setCurrentValue(value)
        }
      }, stepDuration)

      return () => clearInterval(timer)
    } else {
      // Original logic for other values
      const steps = 60
      const stepValue = value / steps
      const stepDuration = duration / steps

      let currentStep = 0
      const timer = setInterval(() => {
        currentStep++
        const newValue = Math.min(currentStep * stepValue, value)
        setCurrentValue(newValue)

        if (currentStep >= steps) {
          clearInterval(timer)
          setCurrentValue(value)
        }
      }, stepDuration)

      return () => clearInterval(timer)
    }
  }, [isVisible, value])

  const formatValue = (val: number) => {
    if (value >= 1000000) {
      // Format as Brazilian currency: 1.000.000,00
      return val.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    }
    return Math.floor(val).toLocaleString("pt-BR")
  }

  return (
    <div className="relative z-50 overflow-hidden">
      {/* Card positioned to span both white and dark sections */}
      <div className="bg-slate-800 rounded-2xl mt-10 p-8 text-center border border-slate-700 shadow-2xl transform hover:scale-105 transition-all duration-300">
        {/* Icon circle - positioned to be in the white area */}
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
          <div className="bg-slate-900 rounded-full w-16 h-16 flex items-center justify-center border-4 border-white shadow-lg">
            {icon}
          </div>
        </div>

        {/* Content - positioned in the dark area */}
        <div className="pt-8">
          <div className="text-[18px] md:text-[20px] lg:text-[22px] font-bold text-white mb-2">
            {prefix}
            {formatValue(currentValue)}
          </div>
          <div className="text-[15px] text-gray-300 font-medium">{label}</div>
        </div>
      </div>
    </div>
  )
}

export function Stats() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
        rootMargin: "0px 0px -100px 0px",
      },
    )

    const currentRef = sectionRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  const stats = [
    {
      icon: <DollarSign className="h-8 w-8 text-white" />,
      value: 800000000,
      label: "Total de faturamento sob gestão",
    },
    {
      icon: <IoMdPin className="h-8 w-8 text-white" />,
      value: 9,
      label: "Estados atendidos",
    },
    {
      icon: <GiInjustice className="h-8 w-8 text-white" />,
      value: 7000000,
      label: "Tributos recuperados",
    },
  ]

  return (
    <div className="relative">
      {/* White section above */}
      <div className="bg-white"></div>

      {/* Dark section below */}
      <div
        ref={sectionRef}
        className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-teal-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 py-24">
          {/* Stats Cards - positioned to overlap the boundary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12 -mt-32">
            {stats.map((stat, index) => (
              <StatCard key={index} icon={stat.icon} value={stat.value} label={stat.label} isVisible={isVisible} />
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              A nossa experiência e excelência é refletida nos nossos resultados
            </p>

            <Button
              asChild
              size="lg"
              className="bg-white text-slate-900 hover:bg-gray-100 text-lg px-8 py-3 rounded-full font-semibold"
            >
              <Link href="#contact">Faça Parte Desses Resultados</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
