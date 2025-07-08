import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Entre em Contato</h2>
          <p className="text-lg text-gray-600">
            Pronto para transformar a gestão da sua empresa? Entre em contato conosco e descubra como podemos
            ajudar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-8xl mx-auto relative">
          <div className="space-y-8 relative">
            <Card className=" h-[100%] flex flex-col relative">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Fale Conosco</CardTitle>
                <CardDescription>
                  Preencha o formulário e nossa equipe entrará em contato em até 24 horas.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="w-[100%]">
                  <div className="space-y-5">
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input id="name" placeholder="Seu nome completo" className="py-5" />
                  </div>
                </div>
                <div className="w-[100%]">

                  <div className="space-y-2">
                    <Label htmlFor="company">Empresa</Label>
                    <Input id="company" placeholder="Nome da empresa" className="py-5" />
                  </div>
                </div>
                <div className="w-[100%]">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="seu@email.com" className="py-5" />
                  </div>
                </div>
                <div className="w-[100%]">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input id="phone" placeholder="(11) 99999-9999" className="py-5" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea id="message" placeholder="Descreva suas necessidades ou dúvidas..." rows={4} className="py-5" />
                </div>
                <br />
                <br />
                <br />
                <Button className="w-full bg-teal-600 hover:bg-teal-700 mt-2">Enviar Mensagem</Button>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-teal-100 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Endereço</h3>
                      <p className="text-gray-600">
                        Av. Wladimir Meirelles Ferreira, 1660
                        <br />
                        Jardim Botânico, Ribeirão Preto - SP
                        <br />
                        CEP:  14021-630
                        <br />
                        <p className="font-medium">W Offices, Sala 710</p>

                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-teal-100 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Telefone</h3>
                      <p className="text-gray-600">
                        (16) 99964-2390 (WhatsApp)
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-teal-100 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <p className="text-gray-600">
                        contato@veriti.srv.br
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-teal-100 p-3 rounded-lg">
                      <Clock className="h-6 w-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Horário de Atendimento</h3>
                      <p className="text-gray-600">
                        Segunda a Sexta: 8h às 18h
                        <br />
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
