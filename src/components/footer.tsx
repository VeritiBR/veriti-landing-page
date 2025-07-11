import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react"
import Logo from "../../public/logo-black.png"

export function Footer() {
  return (
    <footer className="bg-[#000A20] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Image
              src={Logo}
              alt="VERITI"
              width={170}
              height={70}
              className="h-[100px] w-[270px]"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Transformando a gestão das empresas com soluções contábeis modernas e personalizadas.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.instagram.com/veriticontabilidade/" target="_blank" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="https://www.linkedin.com/company/veriti-contabilidade-e-gest%C3%A3o-tribut%C3%A1ria/?viewAsMember=true" target="_blank" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                  BPO Financeiro
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Contabilidade Completa
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Gestão Tributária
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Compliance e Auditoria
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Gestão Empresarial
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Departamento Pessoal
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link href="#plans" className="text-gray-400 hover:text-white transition-colors">
                  Planos
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-teal-400" />
                <span className="text-gray-400">(16) 99964-2390 </span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-teal-400" />
                <span className="text-gray-400">contato@veriti.srv.br</span>
              </div>
              <div className="text-gray-400">
                Av. Wladimir Meirelles Ferreira, 1660
                <br />
                Jardim Botânico, Ribeirão Preto - SP
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 VERITI - Contabilidade e Gestão Tributária. Todos os direitos reservados.
          </p>
          <Image
            src="/images/logo_barbieratto.png"
            alt="Logo da Barbieratto agência de marketing e design que gerência a VERITI"
            width={150}
            height={150}
            className="mx-auto py-8"
          />
          <p className="text-gray-400 text-sm mt-5">
            Desenvolvido por <span className="hover:text-green-300 cursor-pointer">
              <Link href="https://wa.me/5511976571580" target="_blank" rel="noopener noreferrer">              Filipe P. M.</Link>
            </span>
          </p>
        </div>
      </div>
    </footer >
  )
}
