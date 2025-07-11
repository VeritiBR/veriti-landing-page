"use client"

import { MapPin, Building, Camera, ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

const officeImages = [
  {
    id: 1,
    src: "/images/local-1.jpg",
    alt: "Recepção moderna do escritório VERITI",
    title: "Recepção Moderna",
    description: "Ambiente acolhedor e profissional",
  },
  {
    id: 2,
    src: "/images/local-2.jpg",
    alt: "Sala de reuniões iluminada VERITI",
    title: "Sala de Reuniões",
    description: "Espaço ideal para encontros de negócios",
  },
]

const officeAddress = "Av. Wladimir Meirelles Ferreira, 1660 - Jardim Botânico, Ribeirão Preto - SP, 14021-630"
const googleMapsEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.8234567890123!2d-47.8063!3d-21.1775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9bf0b0b0b0b0b%3A0x0b0b0b0b0b0b0b0b!2sAv.%20Wladimir%20Meirelles%20Ferreira%2C%201660%20-%20Jardim%20Bot%C3%A2nico%2C%20Ribeir%C3%A3o%20Preto%20-%20SP%2C%2014021-630!5e0!3m2!1spt-BR!2sbr!4v1678886580500!5m2!1spt-BR!2sbr"

export function OfficeLocation() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredImage, setHoveredImage] = useState<number | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
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

  return (
    <section id="office" ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            <div className="flex items-center justify-center mb-6">
              <div className="relative flex items-center justify-center h-10 w-10">
                <Building className="h-10 w-10 text-teal-600 relative z-10 ml-auto mr-auto" />
                <div className="absolute inset-0 bg-teal-200 rounded-full scale-150 opacity-20 animate-pulse"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 ml-5">Nosso Escritório</h2>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center text-gray-700">
                <MapPin className="h-5 w-5 mr-2 text-teal-600 flex-shrink-0" />
                <p className="font-medium">{officeAddress}</p>
              </div>
              <div className="flex items-center justify-center text-gray-700">
                <Building className="h-5 w-5 mr-2 text-teal-600 flex-shrink-0" />
                <p className="font-medium">W Offices, Sala 710</p>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`flex flex-col lg:flex-row gap-8 h-[80vh] max-h-[700px] w-full transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
        >
          <div className="w-full lg:w-1/2 h-1/2 lg:h-full grid grid-cols-1 grid-rows-2 gap-4">
            {officeImages.map((image, index) => (
              <div
                key={image.id}
                className={`group relative rounded-2xl overflow-hidden shadow-lg transition-all duration-700 ease-out transform cursor-pointer ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                  } ${hoveredImage === image.id ? "scale-105 shadow-2xl z-10" : "hover:scale-102"}`}
                style={{ transitionDelay: `${(index + 2) * 150}ms` }}
                onMouseEnter={() => setHoveredImage(image.id)}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                  priority={index === 0}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-all duration-500"></div>

                <div className="absolute inset-0 border-2 border-transparent group-hover:border-teal-400/50 rounded-2xl transition-all duration-500"></div>

                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">

                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <h3 className="text-xl font-bold mb-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                      {image.title}
                    </h3>
                    <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                      {image.description}
                    </p>
                  </div>
                </div>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </div>
            ))}
          </div>

          <div
            className={`w-full lg:w-1/2 h-1/2 lg:h-full rounded-2xl overflow-hidden shadow-2xl border border-gray-200 transition-all duration-700 ease-out transform group  ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              } hover:scale-[1.02] hover:shadow-3xl`}
            style={{ transitionDelay: "600ms" }}
          >
            <div className="relative bg-gradient-to-r from-teal-600 to-teal-700 p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span className="font-semibold">Nossa Localização</span>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 h-1 bg-white/30 w-0 group-hover:w-full transition-all duration-500"></div>
            </div>

            <div className="relative h-full">
              <iframe
                src={googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do Escritório VERITI"
                className="transition-all duration-500 group-hover:saturate-110 group-hover:contrast-110"
              ></iframe>

              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          </div>
        </div>

        <div
          className={`text-center mt-12 transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <p className="text-lg text-gray-600 mb-4">
            Venha nos conhecer pessoalmente e descubra como podemos ajudar sua empresa
          </p>
          <Link href="https://maps.app.goo.gl/WyUnXQSS5vmhKp1r5" target="_blank" className="inline-flex items-center text-teal-600 font-semibold hover:text-teal-700 transition-colors cursor-pointer group">
            <MapPin className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
            <span>Ver no Google Maps</span>
            <ArrowUpRight className="h-4 w-4 ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
