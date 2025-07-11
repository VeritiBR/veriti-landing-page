import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Plans } from "@/components/plans"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Stats } from "@/components/stats"
import { Team } from "@/components/team"
import { Testimonials } from "@/components/testimonials"
import { OfficeLocation } from "@/components/office-location"
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Stats />
      <Team />
      <Testimonials />
      <Plans />
      <OfficeLocation />
      <FAQ />
      <Contact />
      <Footer />
      <Toaster position="bottom-center" />
    </main>
  )
}
