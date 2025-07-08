import { Calculator, FileText, PieChart, Shield, Briefcase, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Services() {
  const services = [
    {
      icon: PieChart,
      title: "BPO Financeiro",
      description: "Análise financeira, fluxo de caixa, contas a pagar e receber, assim como projeções para tomada de decisão.",
      features: ["Contas a pagar/receber", "Fluxo de caixa", "Análise financeira", "Projeções financeiras"],
    },
    {
      icon: Calculator,
      title: "Contabilidade Consultiva",
      description: "Escrituração contábil, balancetes, demonstrações financeiras e relatórios gerenciais completos.",
      features: ["Escrituração fiscal", "Balancetes mensais", "DRE e Balanço", "Relatórios gerenciais"],
    },
    {
      icon: FileText,
      title: "Gestão Tributária",
      description: "Planejamento tributário estratégico, apuração de impostos e compliance fiscal.",
      features: ["Planejamento tributário", "Apuração de impostos", "Compliance fiscal", "Consultoria tributária"],
    },
    {
      icon: Shield,
      title: "Compliance e Auditoria",
      description: "Auditoria independente, compliance regulatório e adequação às normas contábeis.",
      features: ["Auditoria independente", "Compliance", "Normas contábeis", "Controles internos"],
    },
    {
      icon: Briefcase,
      title: "Gestão Empresarial",
      description: "Consultoria em gestão, reestruturação empresarial e otimização de processos.",
      features: ["Consultoria em gestão", "Reestruturação", "Otimização", "Processos"],
    },
    {
      icon: Users,
      title: "Departamento Pessoal",
      description: "Folha de pagamento, admissões, demissões e compliance de normas trabalhistas.",
      features: ["Folha de pagamento", "Admissões/Demissões", "eSocial", "Normas trabalhistas"],
    },
  ]

  return (
    <section id="services" className="py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Nossos Serviços</h2>
          <p className="text-lg text-gray-600">
            Oferecemos soluções completas em contabilidade e gestão tributária, com diferenciais que garantem eficiência
            e resultados para sua empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-teal-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-teal-600 rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
