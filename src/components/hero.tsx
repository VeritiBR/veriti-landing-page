"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import styles from "./styles.module.css"

export function Hero() {
  return (
    <section className={styles.heroContainer}>

      <div className={styles.contentWrapper}>
        <h1 className="text-4xl font-bold leading-tight text-left text-white md:text-5xl lg:text-6xl mb-6 max-[1030px]:text-center max-[1030px]:mt-10">
          Contabilidade e Gestão Tributária
        </h1>
        <h2 className="text-xl text-teal-400 md:text-2xl ">Excelência, por virtude</h2>
        <p className=" mt-4 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl mb-8 text-left max-[1030px]:mx-auto max-[1030px]:text-center ">
          Transforme a gestão financeira da sua empresa com soluções contábeis modernas, eficientes e totalmente
          personalizadas para o seu negócio.
        </p>

        <div className="flex flex-row gap-4 sm:flex-row  mb-12  max-[1030px]:justify-center max-[550px]:flex-col ">
          <Button asChild size="lg" className="bg-teal-600 px-8 py-3 text-lg hover:bg-teal-700">
            <Link href="#contact" className="flex items-center ">
              Conheça Nossas Soluções
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white bg-transparent px-8 py-3 text-lg text-white hover:bg-white hover:text-slate-900"
          >
            <Link href="#services">Ver Serviços</Link>
          </Button>
        </div>

        <div className="mx-auto  grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          <div className="flex items-center justify-center gap-x-2">
            <CheckCircle className="h-5 w-5 flex-shrink-0 text-teal-400" />
            <span className="text-sm text-white">Atendimento Personalizado</span>
          </div>
          <div className="flex items-center justify-center gap-x-2">
            <CheckCircle className="h-5 w-5 flex-shrink-0 text-teal-400" />
            <span className="text-sm text-white">Tecnologia Avançada</span>
          </div>
          <div className="flex items-center justify-center gap-x-2">
            <CheckCircle className="h-5 w-5 flex-shrink-0 text-teal-400" />
            <span className="text-sm text-white">Compliance Garantido</span>
          </div>
        </div>
      </div>

      <div className={styles.partnerImageContainer}>
        <Image
          src="/images/teste_banner.png"
          alt="Sócios da Veriti Contabilidade"
          width={1080}
          height={1080}
          priority
          className="h-auto w-full"
        />
      </div>
    </section>
  )
}