"use client"

import { useEffect, useRef, useState } from "react"
import { Linkedin, Mail, Award, Users, Target, Lightbulb, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image, { type StaticImageData } from "next/image"

interface TeamMember {
  id: number
  name: string
  email: string
  linkedin?: string
  avatar: StaticImageData
  color: string
}

import Img1 from "../../public/images/FOTO_BLENA.jpg"
import Img2 from "../../public/images/FOTO_DANIELA.jpg"
import Img3 from "../../public/images/FOTO_MAUR.jpg"
import Img4 from "../../public/images/FOTO_TATI.jpg"
import Img5 from "../../public/images/img2.jpg"
import Link from "next/link"

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Blena de Farias de Lima",
    email: "blena.lima@veriti.srv.br",
    linkedin: "https://www.linkedin.com/in/blenna/",
    avatar: Img1,
    color: "from-teal-400 to-blue-500",
  },
  {
    id: 2,
    name: "Maur Paiva",
    email: "maur.paiva@veriti.srv.br",
    linkedin: "https://www.linkedin.com/in/maur-paiva-2b25771b4/",
    avatar: Img3,
    color: "from-green-400 to-teal-500",
  },
  {
    id: 3,
    name: "Tatiane Barboza",
    email: "Tatiane.barboza@veriti.srv.br",
    avatar: Img4,
    color: "from-orange-400 to-red-500",
  },
  {
    id: 4,
    name: "Daniela Siqueira",
    email: "daniela.siqueira@veriti.srv.br",
    linkedin:
      "https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAAAfCak4BlobtNxn2GhQ5cGpyob7s4vHaSqw&keywords=daniela%20siqueira%20pinheiro&origin=RICH_QUERY_TYPEAHEAD_HISTORY&position=0&searchId=343dafdf-6f44-402f-ade5-7fba7ada8994&sid=bRF&spellCorrectionEnabled=true",
    avatar: Img4,
    color: "from-orange-400 to-red-500",
  },
  {
    id: 5,
    name: "Fernando Donegá",
    email: "fernando@veriti.srv.br",
    linkedin: "https://www.linkedin.com/in/fhmdonega/",
    avatar: Img2,
    color: "from-purple-400 to-pink-500",
  },
  {
    id: 6,
    name: "Marlon Barboza",
    email: "marlon@veriti.srv.br",
    linkedin: "https://www.linkedin.com/in/marlon-barboza-997702112/",
    avatar: Img5,
    color: "from-purple-400 to-pink-500",
  },
]

function FloatingShape({ delay = 0, duration = 20 }) {
  return (
    <div
      className="absolute opacity-10 animate-pulse"
      style={{
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
    >
      <div className="w-32 h-32 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full blur-xl animate-bounce"></div>
    </div>
  )
}

function TeamCard({ member, index, isVisible }: { member: TeamMember; index: number; isVisible: boolean }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`relative group cursor-pointer transition-all duration-700 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }`}
      style={{ transitionDelay: `${index * 200}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Background with Gradient Border */}
      <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-teal-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-teal-500/20">
        {/* Animated Background Gradient */}
        <div
          className={`absolute inset-0 bg-gradient-to-r ${member.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}
        ></div>

        {/* Avatar with Floating Animation */}
        <div className="relative mb-6 flex justify-center">
          <div
            className={`relative w-24 h-24 rounded-full overflow-hidden border-4 border-white/20 transition-all duration-500 ${isHovered ? "scale-110 border-teal-400/50" : ""
              }`}
          >
            <Image
              src={member.avatar || "/placeholder.svg"}
              alt={member.name}
              width={96}
              height={96}
              className="w-full h-full object-cover"
            />
            {/* Animated Ring */}
            <div
              className={`absolute inset-0 rounded-full border-2 border-teal-400 transition-all duration-1000 ${isHovered ? "scale-125 opacity-0" : "scale-100 opacity-0"
                }`}
            ></div>
          </div>

          {/* Floating Icons */}
          {isHovered && (
            <>
              <Award className="absolute -top-2 -right-2 h-6 w-6 text-teal-400 animate-bounce" />
              <Target className="absolute -bottom-2 -left-2 h-5 w-5 text-blue-400 animate-pulse" />
            </>
          )}
        </div>

        {/* Content */}
        <div className="text-center space-y-4">
          <h3 className="text-[20px] font-bold text-white group-hover:text-teal-400 transition-colors duration-300">
            {member.name}
          </h3>

          {/* Expandable Description - Now triggered by hover */}
          <div
            className={`overflow-hidden transition-all duration-500 ${isHovered ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
          >
            {/* Contact Links - Using Link component */}
            <div className="flex gap-3 justify-center">
              <Link
                href={`mailto:${member.email}`}
                className="flex items-center justify-center z-10 px-4 py-2 border border-teal-500/50 text-white font-bold hover:bg-teal-500/20 w-24 rounded-md transition-all duration-300 hover:scale-105 bg-transparent no-underline"
              >
                <Mail className="h-4 w-4 mr-2" />
                Email
              </Link>
              {member.linkedin && (
                <Link
                  href={member.linkedin}
                  target="_blank"
                  className="flex items-center justify-center z-10 px-4 py-2 border border-blue-500/50 text-white font-bold hover:bg-blue-500/20 w-24 rounded-md transition-all duration-300 hover:scale-105 bg-transparent no-underline"
                >
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </Link>
              )}
            </div>
          </div>

          {/* Chevron Indicator instead of bar */}
          <div className="flex justify-center">
            <ChevronDown
              className={`h-5 w-5 text-teal-400 transition-all duration-300 ${isHovered ? "rotate-180" : ""}`}
            />
          </div>
        </div>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-teal-400/0 via-teal-400/5 to-blue-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      </div>
    </div>
  )
}

export function Team() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeStats, setActiveStats] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

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

  // Auto-rotate stats
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStats((prev) => (prev + 1) % 3)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const stats = [
    { icon: Users, label: "Equipe Especializada", value: "15+ Anos de Experiência" },
    { icon: Award, label: "Certificações", value: "CRC e Especializações" },
    { icon: Lightbulb, label: "Inovação", value: "Soluções Personalizadas" },
  ]

  // Dividir membros em grupos: primeiros 4 e restantes
  const firstRowMembers = teamMembers.slice(0, 4)
  const secondRowMembers = teamMembers.slice(4, 7) // Próximos 3

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden" style={{ backgroundColor: "#000721" }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <FloatingShape delay={0} duration={25} />
        <FloatingShape delay={5} duration={30} />
        <FloatingShape delay={10} duration={20} />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-r from-teal-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div
            className={`transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Nosso{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Time</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Profissionais experientes e apaixonados por transformar a gestão das empresas com excelência e inovação.
            </p>
          </div>

          {/* Animated Stats */}
          <div className="mt-12 flex justify-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-4 transition-all duration-500 ${activeStats === index ? "opacity-100 scale-100" : "opacity-50 scale-95"
                    }`}
                  style={{ display: activeStats === index ? "flex" : "none" }}
                >
                  <div className="bg-teal-500/20 p-3 rounded-full">
                    <stat.icon className="h-6 w-6 text-teal-400" />
                  </div>
                  <div className="text-left">
                    <p className="text-white font-semibold">{stat.label}</p>
                    <p className="text-teal-400">{stat.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Grid - Custom Layout */}
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Primeira linha - 4 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {firstRowMembers.map((member, index) => (
              <TeamCard key={member.id} member={member} index={index} isVisible={isVisible} />
            ))}
          </div>

          {/* Segunda linha - 2 cards centralizados */}
          {secondRowMembers.length > 0 && (
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl">
                {secondRowMembers.map((member, index) => (
                  <TeamCard key={member.id} member={member} index={index + 4} isVisible={isVisible} />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Interactive Call to Action */}
        <div
          className={`text-center mt-16 transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          style={{ transitionDelay: "800ms" }}
        >
          <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 backdrop-blur-sm rounded-3xl p-8 border border-teal-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Pronto para conhecer nossa equipe pessoalmente?</h3>
            <p className="text-gray-300 mb-6">
              Agende uma reunião e descubra como podemos transformar a gestão da sua empresa.
            </p>
            <Button
              asChild
              className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/25"
            >
              <Link href="https://wa.me/5516999642390" target="_blank" rel="noopener noreferrer">
                Agendar Reunião
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
