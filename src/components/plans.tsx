import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, X, Star, Users, FileText, Calculator, Shield, MessageCircle } from "lucide-react"
import Link from "next/link"

export function Plans() {
  const planFeatures = [
    {
      category: "Serviços Essenciais",
      icon: <FileText className="h-5 w-5" />,
      features: [
        {
          name: "Contabilidade completa",
          initium: true,
          gradus: true,
          virtus: true,
        },
        {
          name: "Folha de pagamento",
          initium: "Até 05 colaboradores",
          gradus: "Até 10 colaboradores",
          virtus: "Acima de 10 colaboradores",
        },
        {
          name: "1ª emissão ou renovação de certificado digital gratuita",
          initium: true,
          gradus: true,
          virtus: true,
        },
      ],
    },
    {
      category: "Gestão Societária",
      icon: <Users className="h-5 w-5" />,
      features: [
        {
          name: "Abertura de empresa",
          initium: false,
          gradus: true,
          virtus: true,
        },
        {
          name: "Alteração societário por ano",
          initium: "Até 01 alteração",
          gradus: "Até 02 alterações",
          virtus: "Até 04 alterações",
        },
      ],
    },
    {
      category: "Compliance Fiscal",
      icon: <Calculator className="h-5 w-5" />,
      features: [
        {
          name: "Acompanhamento de caixas postais fiscais",
          initium: true,
          gradus: true,
          virtus: true,
        },
        {
          name: "Gestão de parcelamentos fiscais",
          initium: false,
          gradus: true,
          virtus: true,
        },
        {
          name: "Revisão cadastral de produtos e operações",
          initium: false,
          gradus: false,
          virtus: true,
        },
      ],
    },
    {
      category: "Serviços Avançados",
      icon: <Shield className="h-5 w-5" />,
      features: [
        {
          name: "Apresentação de demonstrações financeiras",
          initium: "Semestral",
          gradus: "Trimestral",
          virtus: "Mensal",
        },
        {
          name: "Envio do balanço e DRE",
          initium: "Mensal",
          gradus: "Mensal",
          virtus: "Mensal",
        },
        {
          name: "Planejamento tributário",
          initium: false,
          gradus: false,
          virtus: true,
        },
        {
          name: "Análise de aderência à incentivos fiscais",
          initium: false,
          gradus: false,
          virtus: true,
        },
      ],
    },
    {
      category: "Atendimento",
      icon: <MessageCircle className="h-5 w-5" />,
      features: [
        {
          name: "Atendimento via whatsapp e e-mail em horário comercial",
          initium: true,
          gradus: true,
          virtus: true,
        },
        {
          name: "Atendimento via whatsapp e e-mail com consultor dedicado",
          initium: false,
          gradus: false,
          virtus: true,
        },
      ],
    },
  ]

  const plans = [
    {
      name: "Initium",
      subtitle: "Plano Básico",
      description: "Ideal para pequenas empresas e MEIs que precisam dos serviços essenciais",
      popular: false,
      color: "border-gray-200",
      buttonColor: "bg-gray-900 hover:bg-gray-800",
    },
    {
      name: "Gradus",
      subtitle: "Plano Intermediário",
      description: "Para empresas em crescimento que precisam de mais suporte",
      popular: true,
      color: "border-teal-500",
      buttonColor: "bg-teal-600 hover:bg-teal-700",
    },
    {
      name: "Virtus",
      subtitle: "Plano Avançado",
      description: "Solução completa para empresas que precisam de consultoria especializada",
      popular: false,
      color: "border-blue-500",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
    },
  ]

  const renderFeatureValue = (value: boolean | string) => {
    if (value === true) {
      return <Check className="h-5 w-5 text-green-600 mx-auto" />
    }
    if (value === false) {
      return <X className="h-5 w-5 text-gray-400 mx-auto" />
    }
    return <span className="text-sm text-center text-gray-700 px-2">{value}</span>
  }

  return (
    <section id="plans" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Planos e Soluções</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Escolha o plano ideal para sua empresa. Todos os planos incluem atendimento personalizado e tecnologia de
            ponta para manter sua contabilidade sempre em dia.
          </p>
        </div>

        {/* Cards dos Planos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${plan.color} ${plan.popular ? "shadow-xl scale-105" : "shadow-lg"} transition-all duration-300 hover:shadow-xl`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-teal-600 text-white px-4 py-2 text-sm font-medium flex items-center">
                    <Star className="h-4 w-4 mr-1 fill-current" />
                    Mais Popular
                  </Badge>
                </div>
              )}
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-3xl font-bold text-gray-900 mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-lg font-medium text-gray-600 mb-4">{plan.subtitle}</CardDescription>
                <p className="text-gray-600 leading-relaxed">{plan.description}</p>
              </CardHeader>
              <CardContent className="pt-0">
                <Button
                  asChild
                  className={`w-full ${plan.buttonColor} text-white font-semibold py-3 rounded-lg transition-colors duration-200`}
                >
                  <Link href="#contact">Escolher {plan.name}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tabela de Comparação Detalhada */}
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gray-50 px-8 py-6 border-b">
              <h3 className="text-2xl font-bold text-gray-900 text-center">Comparação Detalhada dos Planos</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left py-4 px-6 font-semibold text-gray-900 w-1/3">Funcionalidades</th>
                    <th className="text-center py-4 px-6 font-semibold text-gray-900">
                      <div className="flex flex-col items-center">
                        <span className="text-lg">Initium</span>
                        <span className="text-sm text-gray-600">Básico</span>
                      </div>
                    </th>
                    <th className="text-center py-4 px-6 font-semibold text-gray-900">
                      <div className="flex flex-col items-center">
                        <span className="text-lg">Gradus</span>
                        <span className="text-sm text-gray-600">Intermediário</span>
                      </div>
                    </th>
                    <th className="text-center py-4 px-6 font-semibold text-gray-900">
                      <div className="flex flex-col items-center">
                        <span className="text-lg">Virtus</span>
                        <span className="text-sm text-gray-600">Avançado</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {planFeatures.map((category, categoryIndex) => (
                    <React.Fragment key={`category-group-${categoryIndex}`}>
                      <tr key={`category-${categoryIndex}`} className="bg-gray-100">
                        <td colSpan={4} className="py-3 px-6">
                          <div className="flex items-center font-semibold text-gray-800">
                            {category.icon}
                            <span className="ml-2">{category.category}</span>
                          </div>
                        </td>
                      </tr>
                      {category.features.map((feature, featureIndex) => (
                        <tr
                          key={`feature-${categoryIndex}-${featureIndex}`}
                          className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                        >
                          <td className="py-4 px-6 text-gray-700">{feature.name}</td>
                          <td className="py-4 px-6 text-center">{renderFeatureValue(feature.initium)}</td>
                          <td className="py-4 px-6 text-center">{renderFeatureValue(feature.gradus)}</td>
                          <td className="py-4 px-6 text-center">{renderFeatureValue(feature.virtus)}</td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">Não tem certeza de qual plano escolher? Fale conosco!</p>
          <Button
            asChild
            size="lg"
            className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 text-lg font-semibold rounded-lg"
          >
            <Link href="#contact">Falar com Especialista</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
