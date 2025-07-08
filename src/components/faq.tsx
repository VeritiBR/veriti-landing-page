import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "Quais documentos preciso fornecer para iniciar os serviços?",
      answer:
        "Para iniciar nossos serviços, você precisará fornecer: contrato social, cartão CNPJ, inscrições estadual e municipal, extratos bancários dos últimos 3 meses, notas fiscais de entrada e saída, e folhas de pagamento (se houver funcionários).",
    },
    {
      question: "Como funciona o atendimento e suporte?",
      answer:
        "Oferecemos atendimento personalizado através de um contador dedicado à sua conta. O suporte é realizado por telefone, email e WhatsApp, com horários de atendimento de segunda a sexta, das 8h às 18h. Clientes do plano Empresarial têm suporte 24/7.",
    },
    {
      question: "Vocês trabalham com empresas de todos os portes?",
      answer:
        "Sim, atendemos desde MEIs e microempresas até grandes corporações. Nossos planos são estruturados para atender diferentes necessidades e portes empresariais, sempre com soluções personalizadas.",
    },
    {
      question: "Como é feito o planejamento tributário?",
      answer:
        "Realizamos uma análise completa da situação fiscal da empresa, identificando oportunidades de economia tributária legal. Elaboramos estratégias personalizadas considerando o regime tributário mais vantajoso e todas as obrigações fiscais.",
    },
    {
      question: "Qual o prazo para entrega dos relatórios?",
      answer:
        "Os balancetes são entregues até o dia 15 do mês subsequente. Relatórios gerenciais são fornecidos mensalmente, e demonstrações anuais até 31 de março. Relatórios específicos podem ser solicitados a qualquer momento.",
    },
    {
      question: "Vocês oferecem consultoria para abertura de empresa?",
      answer:
        "Sim, oferecemos consultoria completa para abertura de empresas, incluindo escolha do tipo societário, regime tributário mais adequado, elaboração de contrato social e todos os registros necessários.",
    },
    {
      question: "Como garantem a segurança dos dados?",
      answer:
        "Utilizamos sistemas com certificação de segurança, backup automático em nuvem, criptografia de dados e acesso restrito por usuário. Todos os colaboradores assinam termo de confidencialidade e seguimos as normas da LGPD.",
    },
    {
      question: "É possível migrar de outro escritório contábil?",
      answer:
        "Sim, facilitamos todo o processo de migração. Nossa equipe cuida da transferência dos arquivos contábeis, regularização de pendências e transição sem interrupção dos serviços. O processo é gratuito e sem burocracia.",
    },
  ]

  return (
    <section id="faq" className="py-28 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Perguntas Frequentes</h2>
          <p className="text-lg text-gray-600">
            Encontre respostas para as dúvidas mais comuns sobre nossos serviços de contabilidade e gestão tributária.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg border border-gray-200">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
