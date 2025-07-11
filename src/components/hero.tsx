"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import styles from "./styles.module.css"

export function Hero() {
  return (
    <section className="relative w-[100vw] h-[100vh] bg-[#10141D] ">
      <div className={`${styles.desktopImage} `}>
        <Image
          src="/images/banner_2.png"
          width={1920}
          height={1080}
          alt="Banner de fundo com imagem dos sócios da Veriti"
          className="absolute top-0 left-0 w-full h-full object-fit opacity-70 aspect-[3/4]"
        />
      </div>

      <div className={`${styles.mobileImage} `}>
        <Image
          src="/images/mobile_banner_hero.png"
          width={800}
          height={1200}
          alt="Banner mobile com imagem dos sócios da Veriti"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
          style={{ objectPosition: "center center" }}
        />
      </div>

      <div className={`${styles.smallImage}`}>
        <Image
          src="/images/small_hero.png"
          width={800}
          height={1200}
          alt="Banner mobile com imagem dos sócios da Veriti"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
          style={{ objectPosition: "center center" }}
        />
      </div>

      <div className="flex justify-start px-4 pt-[200px] md:pt-[300px] relative z-10">
        <div className="max-w-4xl text-center text-white">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Contabilidade e Gestão Tributária
          </h1>
          <h2 className="text-xl md:text-2xl text-teal-400">Excelência, por virtude</h2>
          <p className="mt-4 text-lg md:text-xl lg:text-2xl mb-8 text-gray-300 leading-relaxed px-4">
            Transforme a gestão financeira da sua empresa com soluções contábeis modernas, eficientes e totalmente
            personalizadas para o seu negócio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 px-4">
            <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700 text-lg px-8 py-3">
              <Link href="#contact">
                Conheça Nossas Soluções
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
            >
              <Link href="#services">
                <span className="hover:text-teal-600">Ver Serviços</span>
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto px-4">
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="h-5 w-5 text-teal-400 flex-shrink-0" />
              <span className="text-sm">Atendimento Personalizado</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="h-5 w-5 text-teal-400 flex-shrink-0" />
              <span className="text-sm">Tecnologia Avançada</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="h-5 w-5 text-teal-400 flex-shrink-0" />
              <span className="text-sm">Compliance Garantido</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
