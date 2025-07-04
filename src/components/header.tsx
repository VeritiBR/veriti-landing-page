import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import Logo from "../../public/logo.png"

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-white backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className=" flex items-center relative w-[350px] h-[70px]">
            <Image
              src={Logo}
              alt="VERITI - Contabilidade e Gestão Tributária"
              width={170}
              height={70}
              className=""
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-gray-700 hover:text-teal-600 transition-colors">
              Quem Somos
            </Link>
            <Link href="#services" className="text-gray-700 hover:text-teal-600 transition-colors">
              Serviços
            </Link>
            <Link href="#plans" className="text-gray-700 hover:text-teal-600 transition-colors">
              Planos
            </Link>
            <Link href="#faq" className="text-gray-700 hover:text-teal-600 transition-colors">
              FAQ
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-teal-600 transition-colors">
              Contato
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button asChild className="hidden md:inline-flex bg-teal-600 hover:bg-teal-700">
              <Link href="#contact">Entre em Contato</Link>
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
