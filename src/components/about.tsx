"use client"

import { Users, Award, Target, TrendingUp, Calculator, PieChart, Lightbulb, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content + Rotating Icons */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 flex items-center gap-4">
                A
                {/* <Image
                  src="/images/5.png"
                  alt="Ícone da Veriti"
                  width={140}
                  height={10}
                  className="object-cover"
                /> */}
                <span className="text-[#0D9488] transform-it">VERITI</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Somos mais do que uma empresa de contabilidade - somos parceiros estratégicos no crescimento do seu
                negócio. Atuamos com excelência nas áreas de contabilidade, gestão tributária e consultoria empresarial,
                oferecendo soluções inteligentes, personalizadas e alinhadas com as necessidades de cada cliente.
              </p>
              <Button asChild className="bg-teal-600 hover:bg-teal-700">
                <Link href="#contact">Conversar com especialista</Link>
              </Button>
            </div>
          </div>

          {/* Right side - Animated Circle */}
          <div className="flex justify-center items-center scale-75">
            <div className="relative w-96 h-96">
              {/* Central Image */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="relative">
                  <Image
                    src="/images/veriti-icon.png"
                    alt="Logo Veriti"
                    width={300}
                    height={300}
                    className="w-[300px] h-[300px] rounded-full object-contain border-[10px] scale-90 bg-[#000721] border-teal-200 shadow-lg"
                  />
                </div>
              </div>

              {/* Animated rotating circles */}
              <div className="absolute inset-0 animate-spin-slow">
                {/* Circle 1 */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center border-2 border-teal-200">
                    <PieChart className="h-8 w-8 text-teal-600" />
                  </div>
                </div>

                {/* Circle 2 */}
                <div className="absolute top-1/4 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <div className="w-14 h-14 bg-teal-50 rounded-full flex items-center justify-center border-2 border-teal-200">
                    <Calculator className="h-6 w-6 text-teal-600" />
                  </div>
                </div>

                {/* Circle 3 */}
                <div className="absolute top-3/4 right-0 transform translate-x-1/2 translate-y-1/2">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center border-2 border-teal-200">
                    <FileText className="h-5 w-5 text-teal-600" />
                  </div>
                </div>

                {/* Circle 4 */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                  <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center border-2 border-teal-200">
                    <Lightbulb className="h-8 w-8 text-teal-600" />
                  </div>
                </div>

                {/* Circle 5 */}
                <div className="absolute top-3/4 left-0 transform -translate-x-1/2 translate-y-1/2">
                  <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center border-2 border-teal-200">
                    <TrendingUp className="h-6 w-6 text-teal-600" />
                  </div>
                </div>

                {/* Circle 6 */}
                <div className="absolute top-1/4 left-0 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center border-2 border-teal-200">
                    <Target className="h-5 w-5 text-teal-600" />
                  </div>
                </div>

                {/* Circle 7 */}
                <div className="absolute top-1/2 right-1/4 transform translate-x-1/2 -translate-y-1/2">
                  <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center border-2 border-teal-200">
                    <Award className="h-4 w-4 text-teal-600" />
                  </div>
                </div>

                {/* Circle 8 */}
                <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center border-2 border-teal-200">
                    <Users className="h-4 w-4 text-teal-600" />
                  </div>
                </div>
              </div>

              {/* Central connecting lines/path */}
              <div className="absolute inset-0 opacity-20">
                <svg className="w-full h-full" viewBox="0 0 400 400">
                  <circle
                    cx="200"
                    cy="200"
                    r="180"
                    fill="none"
                    stroke="#14b8a6"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    className="animate-pulse"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section with features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          <div className="text-center">
            <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Equipe Especializada</h3>
            <p className="text-gray-600">
              Profissionais qualificados e experientes em contabilidade e gestão tributária.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Excelência</h3>
            <p className="text-gray-600">Comprometimento com a qualidade e precisão em todos os nossos serviços.</p>
          </div>

          <div className="text-center">
            <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="h-8 w-8 text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Foco no Cliente</h3>
            <p className="text-gray-600">
              Soluções personalizadas que atendem às necessidades específicas de cada empresa.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-8 w-8 text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Crescimento</h3>
            <p className="text-gray-600">Ajudamos empresas a crescer com gestão eficiente e estratégica.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
