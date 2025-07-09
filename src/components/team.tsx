"use client"
import { useEffect, useRef, useState } from "react"
import { Linkedin, Mail, Award, Users, Target, Lightbulb, ChevronDown } from "lucide-react"
import Image, { type StaticImageData } from "next/image"
import Img1 from "../../public/images/FOTO_BLENA.jpg"
import Img2 from "../../public/images/FOTO_DANIELA.jpg"
import Img3 from "../../public/images/FOTO_MAUR.jpg"
import Img4 from "../../public/images/FOTO_TATI.jpg"
import Img6 from "../../public/images/fernando.jpg"
import Img7 from "../../public/images/marlon.jpg"
import Link from "next/link"

// INTERFACE PARA MEMBRO DA EQUIPE
// O tipo 'avatar' foi alterado para string para suportar URLs de placeholders.
interface TeamMember {
  id: number;
  name: string;
  email: string;
  linkedin?: string;
  avatar: StaticImageData;
  color: string;
  role: string;
}

// DADOS DOS MEMBROS DA EQUIPE COM IMAGENS DE PLACEHOLDER
// Substitua as URLs de 'avatar' pelos caminhos das suas imagens locais quando for usar no seu projeto.
const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Blena Lima",
    email: "blena.lima@veriti.srv.br",
    linkedin: "https://www.linkedin.com/in/blenna/",
    avatar: Img1,
    color: "from-teal-400 to-blue-500",
    role: "Analista Fiscal",
  },
  {
    id: 2,
    name: "Maur Paiva",
    email: "maur.paiva@veriti.srv.br",
    linkedin: "https://www.linkedin.com/in/maur-paiva-2b25771b4/",
    avatar: Img3,
    color: "from-green-400 to-teal-500",
    role: "Analista Contábil",
  },
  {
    id: 3,
    name: "Tatiane Barboza",
    email: "Tatiane.barboza@veriti.srv.br",
    avatar: Img4,
    color: "from-orange-400 to-red-500",
    role: "Coordenadora Administrativa",
  },
  {
    id: 4,
    name: "Daniela Siqueira",
    email: "daniela.siqueira@veriti.srv.br",
    linkedin: "https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAAAfCak4BlobtNxn2GhQ5cGpyob7s4vHaSqw&keywords=daniela%20siqueira%20pinheiro&origin=RICH_QUERY_TYPEAHEAD_HISTORY&position=0&searchId=343dafdf-6f44-402f-ade5-7fba7ada8994&sid=bRF&spellCorrectionEnabled=true",
    avatar: Img2,
    color: "from-orange-400 to-red-500",
    role: "Especialista Fiscal",
  },
  {
    id: 5,
    name: "Fernando Donegá",
    email: "fernando@veriti.srv.br",
    linkedin: "https://www.linkedin.com/in/fhmdonega/",
    avatar: Img6,
    color: "from-purple-400 to-pink-500",
    role: "Partner | TAX",
  },
  {
    id: 6,
    name: "Marlon Barboza",
    email: "marlon@veriti.srv.br",
    linkedin: "https://www.linkedin.com/in/marlon-barboza-997702112/",
    avatar: Img7,
    color: "from-purple-400 to-pink-500",
    role: "Partner",
  },
];

// COMPONENTE PARA FORMAS FLUTUANTES ANIMADAS NO FUNDO
function FloatingShape({ delay = 0, duration = 20 }) {
  return (
    <div
      className="absolute opacity-10 animate-pulse"
      style={{
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        top: `${Math.random() * 80}%`,
        left: `${Math.random() * 80}%`,
      }}
    >
      <div className="w-32 h-32 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full blur-xl animate-bounce"></div>
    </div>
  );
}

// COMPONENTE PARA O CARD DE CADA MEMBRO DA EQUIPE
function TeamCard({ member, index, isVisible }: { member: TeamMember; index: number; isVisible: boolean }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative group cursor-pointer transition-all duration-700 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }`}
      style={{ transitionDelay: `${index * 200}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-80 rounded-3xl overflow-hidden border border-white/10 hover:border-teal-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-teal-500/20">
        {/* Imagem de fundo */}
        <div className="absolute inset-0">
          <Image
            src={member.avatar}
            alt={member.name}
            className="w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-110"
          />
        </div>

        {/* Overlay de gradiente */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

        {/* Overlay de hover com informações */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 to-black/60 transition-all duration-500 flex flex-col justify-end p-6 ${isHovered ? "opacity-100" : "opacity-0"
            }`}
        >
          {/* Ícones flutuantes */}
          {isHovered && (
            <>
              <Award className="absolute top-4 right-4 h-6 w-6 text-teal-400 animate-bounce" />
              <Target className="absolute top-4 left-4 h-5 w-5 text-blue-400 animate-pulse" />
            </>
          )}

          {/* Conteúdo */}
          <div className="text-center space-y-4">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
              <h4 className="text-lg font-semibold text-teal-400">{member.role}</h4>
            </div>

            {/* Links de contato */}
            <div className="flex gap-3 justify-center">
              <Link
                href={`mailto:${member.email}`}
                className="flex items-center z-40 justify-center px-3 py-2 border border-teal-500/50 text-white text-sm font-bold hover:bg-teal-500/20 rounded-md transition-all duration-300 hover:scale-105 bg-black/30 backdrop-blur-sm no-underline"
              >
                <Mail className="h-4 w-4 mr-1" />
                Email
              </Link>
              {member.linkedin && (
                <Link
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center z-40 justify-center px-3 py-2 border border-blue-500/50 text-white text-sm font-bold hover:bg-blue-500/20 rounded-md transition-all duration-300 hover:scale-105 bg-black/30 backdrop-blur-sm no-underline"
                >
                  <Linkedin className="h-4 w-4 mr-1" />
                  LinkedIn
                </Link>
              )}
            </div>

            {/* Indicador de chevron */}
            <div className="flex justify-center">
              <ChevronDown
                className={`h-5 w-5 text-teal-400 transition-all duration-300 ${isHovered ? "rotate-180" : ""}`}
              />
            </div>
          </div>
        </div>

        {/* Gradiente de fundo animado */}
        <div
          className={`absolute inset-0 bg-gradient-to-r ${member.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
        ></div>

        {/* Efeito de brilho no hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-400/0 via-teal-400/10 to-blue-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      </div>
    </div>
  );
}

// COMPONENTE PRINCIPAL DA SEÇÃO DE EQUIPE  
export function Team() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStats, setActiveStats] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Observador de interseção para animar a entrada da seção
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px",
      },
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Rotação automática das estatísticas
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStats((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { icon: Users, label: "Equipe Especializada", value: "15+ Anos de Experiência" },
    { icon: Award, label: "Certificações", value: "CRC e Especializações" },
    { icon: Lightbulb, label: "Inovação", value: "Soluções Personalizadas" },
  ];

  // Separa dinamicamente os partners dos outros membros da equipe
  const partners = teamMembers.filter(member => member.role.includes("Partner"));
  const otherMembers = teamMembers.filter(member => !member.role.includes("Partner"));

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden" style={{ backgroundColor: "#000721" }}>
      {/* Elementos de fundo animados */}
      <div className="absolute inset-0">
        <FloatingShape delay={0} duration={25} />
        <FloatingShape delay={5} duration={30} />
        <FloatingShape delay={10} duration={20} />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-r from-teal-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Overlay de grade */}
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
        {/* Seção do cabeçalho */}
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

          {/* Estatísticas animadas */}
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

        {/* Grade da equipe - Layout dinâmico */}
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Primeira linha - Partners */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
              {partners.map((member, index) => (
                <TeamCard key={member.id} member={member} index={index} isVisible={isVisible} />
              ))}
            </div>
          </div>

          {/* Segunda linha - Outros membros */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {otherMembers.map((member, index) => (
              <TeamCard key={member.id} member={member} index={index + partners.length} isVisible={isVisible} />
            ))}
          </div>
        </div>

        {/* Call to Action interativo */}
        <div
          className={`text-center mt-16 transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          style={{ transitionDelay: "800ms" }}
        >
          <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 backdrop-blur-sm rounded-3xl p-8 border border-teal-500/20 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Pronto para conhecer nossa equipe pessoalmente?</h3>
            <p className="text-gray-300 mb-6">
              Agende uma reunião e descubra como podemos transformar a gestão da sua empresa.
            </p>
            <a
              href="https://wa.me/5516999642390"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block no-underline bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/25"
            >
              Agendar Reunião
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}