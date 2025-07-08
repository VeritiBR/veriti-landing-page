"use client"

import { useEffect, useRef, useState } from "react"
import { Quote, Star, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image, { type StaticImageData } from "next/image"

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatar: StaticImageData
  location: string
  businessType: string
  videoUrl?: string
}

import Img1 from "../../public/images/sinara.jpg"
import Img2 from "../../public/images/caio.jpg"
import Img3 from "../../public/images/juliano.jpg"
import Link from "next/link"

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sinara",
    role: "Contadora",
    company: "Morro da Mesa",
    content:
      "Com experiência e dedicação, nosso consultor fiscal atua lado a lado com nossa equipe, oferecendo soluções práticas e seguras para facilitar a rotina fiscal e evitar problemas com o fisco. Sempre atualizado, busca enxergar além das obrigações, ajudando a identificar oportunidades e trazer mais eficiência para o dia a dia trazendo tranquilidade para a gestão fiscal.",
    rating: 5,
    avatar: Img1,
    location: "Primavera do Leste, MT",
    businessType: "Concessão de rodovia",
  },
  {
    id: 2,
    name: "Caio Rezende",
    role: "Diretor Financeiro",
    company: "Sojal",
    content: "Tivemos a satisfação de contar com o suporte técnico da equipe da VERITI em assuntos contábeis e tributários que demandavam elevado grau de complexidade e celeridade na execução. Desde o primeiro contato, a equipe demonstrou comprometimento, profundo conhecimento técnico e proatividade na busca de soluções alinhadas às melhores práticas de mercado. O atendimento foi conduzido com alto padrão de profissionalismo, cordialidade e transparência, proporcionando segurança e confiabilidade em cada etapa do trabalho. A expertise apresentada pela VERITI permitiu que a Sojal obtivesse não apenas conformidade fiscal e contábil, mas também identificasse oportunidades relevantes de otimização tributária e aprimoramento de seus controles internos. Recomendamos, com total confiança, os serviços da VERITI a qualquer organização que busque excelência em assessoria contábil e tributária.",
    rating: 5,
    avatar: Img2,
    location: "Paragominas, PA",
    businessType: "Revenda de Insumos Agrícolas",
  },
  {
    id: 3,
    name: "Juliano Santos de Oliveira",
    role: "Coordenador de Controladoria",
    company: "Coanorte  ",
    content: `A COANORTE  tem contado com o suporte técnico e especializado da VERITI Contabilidade e Gestão Tributária na condução de importantes frentes relacionadas à nossa área fiscal e tributária.
      Atualmente, a VERITI é responsável pelo levantamento de créditos tributários, promovendo uma análise minuciosa de oportunidades de recuperação de tributos, restituições de valores pagos indevidamente ou a maior, com total respaldo legal e recebimento em conta correte a título de restituição garantidos, outros casos ainda de compensação de créditos com débitos de tributos. Além disso, a empresa tem atuado com excelência na revisão de obrigações acessórias, garantindo a conformidade das informações prestadas ao fisco, reduzindo riscos de autuações e promovendo maior segurança contábil.
      Outro ponto de destaque é o trabalho de estruturação e planejamento fiscal, que vem proporcionando à COANORTE uma visão estratégica mais clara, contribuindo para a otimização da carga tributária e o fortalecimento da governança corporativa.
      A atuação da VERITI tem sido pautada pela transparência, ética profissional e profundo conhecimento técnico, sendo um parceiro essencial no aprimoramento de nossos processos internos. O compromisso deles com o compliance fiscal demonstra o alinhamento da empresa com as melhores práticas do mercado.
      Recomendamos os serviços da VERITI a qualquer organização que busque uma gestão tributária eficiente, segura e alinhada à legislação vigente.`,
    rating: 5,
    avatar: Img3,
    location: "Sinop, MT",
    businessType: "Cooperativa agropecuária",
  },
]

function TestimonialCard({
  testimonial,
  isActive,
  onClick,
}: {
  testimonial: Testimonial
  isActive: boolean
  onClick: () => void
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`relative cursor-pointer transition-all duration-700 transform ${isActive ? "scale-100 opacity-100 z-10" : "scale-95 opacity-60 hover:opacity-80"
        }`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-500 relative overflow-hidden">
        {/* Background Gradient */}
        <div
          className={`absolute inset-0 bg-gradient-to-br from-teal-50 to-blue-50 opacity-0 transition-opacity duration-500 ${isHovered ? "opacity-100" : ""}`}
        ></div>

        {/* Quote Icon */}
        <div className="absolute top-6 right-6 opacity-10">
          <Quote className="h-16 w-16 text-teal-600" />
        </div>

        <div className="relative z-10">
          {/* Rating Stars */}
          <div className="flex items-center mb-4">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 text-yellow-400 fill-current transition-all duration-300 ${isHovered ? "animate-pulse" : ""
                  }`}
                style={{ animationDelay: `${i * 100}ms` }}
              />
            ))}
          </div>

          {/* Content */}
          <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 font-medium">
            &ldquo;{testimonial.content}&rdquo;
          </blockquote>

          {/* Author Info */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Image
                src={testimonial.avatar || "/placeholder.svg"}
                alt={testimonial.name}
                width={64}
                height={64}
                className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
              />
              {/* Online indicator */}
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
            </div>

            <div className="flex-1">
              <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
              <p className="text-teal-600 font-semibold">{testimonial.role}</p>
              <p className="text-gray-600 text-sm">{testimonial.company}</p>
              <div className="flex items-center space-x-2 mt-1">
                <span className="text-xs text-gray-500">{testimonial.location}</span>
                <span className="text-xs text-gray-400">•</span>
                <span className="text-xs text-gray-500">{testimonial.businessType}</span>
              </div>
            </div>
          </div>

          {/* Hover Effect - Additional Info */}
          <div
            className={`mt-4 overflow-hidden transition-all duration-500 ${isHovered ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
              }`}
          >
            <div className="pt-4 border-t border-gray-100">
              <p className="text-sm text-gray-600 italic">
                &ldquo;Recomendo a VERITI para qualquer empresa que busca excelência em gestão financeira.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.2,
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

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
      }, 5000)
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying)
  }

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-teal-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className={`transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              O que nossos{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
                clientes dizem
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Histórias reais de empresas que transformaram seus resultados com a VERITI. Cada depoimento representa uma
              parceria de sucesso.
            </p>
          </div>
        </div>

        {/* Main Testimonial Display */}
        <div className="max-w-4xl mx-auto mb-12">
          <div
            className={`transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
              }`}
            style={{ transitionDelay: "300ms" }}
          >
            <TestimonialCard testimonial={testimonials[currentIndex]} isActive={true} onClick={() => { }} />
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center space-x-6 mb-8">
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className="rounded-full border-teal-200 hover:border-teal-400 hover:bg-teal-50"
          >
            <ChevronLeft className="h-5 w-5 text-teal-600" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-teal-600 scale-125" : "bg-gray-300 hover:bg-gray-400"
                  }`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="rounded-full border-teal-200 hover:border-teal-400 hover:bg-teal-50"
          >
            <ChevronRight className="h-5 w-5 text-teal-600" />
          </Button>

          {/* Auto-play Toggle */}
          <Button
            variant="outline"
            size="icon"
            onClick={toggleAutoPlay}
            className={`rounded-full transition-all duration-300 ${isAutoPlaying ? "border-teal-400 bg-teal-50 text-teal-600" : "border-gray-300 text-gray-600"
              }`}
          >
            {isAutoPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </Button>
        </div>

        {/* Thumbnail Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              onClick={() => setCurrentIndex(index)}
              className={`cursor-pointer transition-all duration-300 transform hover:scale-105 ${index === currentIndex ? "opacity-100" : "opacity-60 hover:opacity-80"
                }`}
            >
              <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100 text-center">
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full mx-auto mb-2 object-cover"
                />
                <h5 className="font-semibold text-sm text-gray-900 truncate">{testimonial.name}</h5>
                <p className="text-xs text-gray-600 truncate">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className={`text-center transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          style={{ transitionDelay: "600ms" }}
        >
          <div className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-3xl p-8 text-white max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Pronto para ser nosso próximo caso de sucesso?</h3>
            <p className="text-teal-100 mb-6 text-lg">
              Junte-se ao time de empresas que já transformaram seus resultados com a VERITI.
            </p>
            <Button
              size="lg"
              className="w-full sm:w-auto text-center whitespace-normal bg-white text-teal-600 hover:bg-gray-100 px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105"
            >
              <Link href="https://wa.me/5516999642390" target="_blank" rel="noopener noreferrer">
                Quero Transformar Minha Empresa
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
