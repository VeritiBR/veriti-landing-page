"use client"

import { MapPin, Building } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const officeImages = [
  { id: 1, src: "/images/local-1.jpg", alt: "Recepção moderna do escritório VERITI" },
  { id: 2, src: "/images/local-2.jpg", alt: "Sala de reuniões iluminada VERITI" },
]

const officeAddress =
  "Av. Wladimir Meirelles Ferreira, 1660 - Jardim Botânico, Ribeirão Preto - SP, 14021-630";
const googleMapsEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.8234567890123!2d-47.8063!3d-21.1775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9bf0b0b0b0b0b%3A0x0b0b0b0b0b0b0b0b!2sAv.%20Wladimir%20Meirelles%20Ferreira%2C%201660%20-%20Jardim%20Bot%C3%A2nico%2C%20Ribeir%C3%A3o%20Preto%20-%20SP%2C%2014021-630!5e0!3m2!1spt-BR!2sbr!4v1678886580500!5m2!1spt-BR!2sbr";

export function OfficeLocation() {
  const [isVisible, setIsVisible] = useState(false)
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
        rootMargin: "0px 0px -50px 0px", // Adjust rootMargin if needed
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
    <section id="office" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div
            className={`transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"
              } transform ${isVisible ? "translate-y-0" : "translate-y-10"}`}
          >
            <div className="flex items-center justify-center mb-6">
              <Building className="h-10 w-10 text-teal-600 mr-3" />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Nosso Escritório</h2>
            </div>
            <div className="flex items-center justify-center text-gray-700">
              <MapPin className="h-5 w-5 mr-2 text-teal-600 flex-shrink-0" />
              <p className="font-medium">{officeAddress}</p>
            </div>
            <div className="flex items-center justify-center text-gray-700">
              <MapPin className="h-5 w-5 mr-2 text-teal-600 flex-shrink-0" />
              <p className="font-medium">W Offices, Sala 710</p>
            </div>
          </div>
        </div>

        {/* Main Content: Photos Mosaic and Map */}
        <div
          className={`flex flex-col lg:flex-row gap-6 h-[80vh] max-h-[700px] w-full transition-opacity duration-1000 delay-300 ${isVisible ? "opacity-100" : "opacity-0"
            } transform ${isVisible ? "scale-100" : "scale-95"}`}
        >
          {/* Left Side: Photos Mosaic */}
          <div className="w-full lg:w-1/2 h-1/2 lg:h-full grid grid-cols-1 grid-rows-2 gap-3">
            {officeImages.map((image, index) => (
              <div
                key={image.id}
                className={`group relative rounded-lg overflow-hidden shadow-lg transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl
    ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
                style={{ transitionDelay: `${(index + 2) * 150}ms` }}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 20vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110 group-hover:blur-[1px]"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center p-4">
                  <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-semibold text-center">
                    {image.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Map */}
          <div
            className={`w-full lg:w-1/2 h-1/2 lg:h-full rounded-xl overflow-hidden shadow-2xl border-2 border-gray-100 transition-all duration-500 ease-in-out transform hover:scale-[1.02]
              ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            style={{ transitionDelay: "600ms" }}
          >
            <iframe
              src={googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do Escritório VERITI"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
