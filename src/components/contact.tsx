"use client";

import { useForm, type SubmitHandler } from "react-hook-form";
import { toast } from "react-hot-toast";
import {
  Card, CardContent, CardDescription, CardHeader, CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { ChangeEvent } from "react";

type FormValues = {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  message: string;
};

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

function formatPhone(value: string): string {
  const numeric = value.replace(/\D/g, "");
  if (numeric.length <= 2) return `(${numeric}`;
  if (numeric.length <= 7) return `(${numeric.slice(0, 2)})${numeric.slice(2)}`;
  return `(${numeric.slice(0, 2)})${numeric.slice(2, 7)}-${numeric.slice(7, 11)}`;
}

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors }
  } = useForm<FormValues>({ mode: "onChange" });

  const watchPhone = watch("phone") || "";

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const loadingToastId = toast.loading("Enviando sua mensagem...");

    const formData = {
      ...data,
      phone: data.phone?.replace(/\D/g, ""),
      access_key: "cfde5134-cf33-4da6-ba4c-8c0cd24a3dbb",
      from_name: "Formulário de Contato - Veriti",
      subject: "Novo Contato Recebido do Site"
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      toast.dismiss(loadingToastId);

      if (result.success) {
        console.log('Olá')
        toast.success("Mensagem enviada com sucesso! Agradecemos o contato.");
        reset();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        toast.error(`Erro ao enviar: ${result.message || "Tente novamente."}`);
      }
    } catch (error) {
      toast.dismiss(loadingToastId);
      toast.error("Erro de rede. Verifique sua conexão.");
    }
  };

  return (
    <section id="contact" className="py-36 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Entre em Contato
          </h2>
          <p className="text-lg text-gray-600">
            Pronto para transformar a gestão da sua empresa? Entre em contato conosco e descubra como podemos ajudar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-8xl mx-auto">
          <Card className="h-full flex flex-col">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Fale Conosco</CardTitle>
              <CardDescription>Responderemos em até 24h úteis.</CardDescription>
            </CardHeader>

            <form onSubmit={handleSubmit(onSubmit)}>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="name">Nome Completo</Label>
                  <Input
                    id="name"
                    placeholder="Seu nome completo"
                    className="py-5 mt-2"
                    {...register("name", { required: "O nome é obrigatório" })}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>

                <div>
                  <Label htmlFor="company">Empresa</Label>
                  <Input
                    id="company"
                    placeholder="Nome da empresa"
                    className="py-5 mt-2"
                    {...register("company")}
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    className="py-5 mt-2"
                    {...register("email", {
                      required: "O email é obrigatório",
                      pattern: {
                        value: emailRegex,
                        message: "Email inválido"
                      }
                    })}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>

                <div>
                  <Label htmlFor="phone">Telefone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    inputMode="numeric"
                    placeholder="(11)99999-9999"
                    className="py-5 mt-2"
                    {...register("phone", {
                      validate: (value) => {
                        if (!value) return true;
                        const clean = value.replace(/\D/g, "");
                        return clean.length === 11 || "Digite um número válido";
                      }
                    })}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      const formatted = formatPhone(e.target.value);
                      setValue("phone", formatted);
                    }}
                    value={watchPhone}
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                </div>

                <div>
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea
                    id="message"
                    placeholder="Descreva suas necessidades ou dúvidas..."
                    rows={4}
                    className="py-5 mt-2"
                    {...register("message", { required: "A mensagem é obrigatória" })}
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                </div>

                <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 mt-2">
                  Enviar Mensagem
                </Button>
              </CardContent>
            </form>
          </Card>

          <div className="space-y-6">
            {[{
              icon: <MapPin className="h-6 w-6 text-teal-600" />,
              title: "Endereço",
              content: (
                <>
                  Av. Wladimir Meirelles Ferreira, 1660<br />
                  Jardim Botânico, Ribeirão Preto - SP<br />
                  CEP: 14021-630<br />
                  <span className="font-medium">W Offices, Sala 710</span>
                </>
              )
            }, {
              icon: <Phone className="h-6 w-6 text-teal-600" />,
              title: "Telefone",
              content: <p>(16) 99964-2390 (WhatsApp)</p>
            }, {
              icon: <Mail className="h-6 w-6 text-teal-600" />,
              title: "Email",
              content: <p>contato@veriti.srv.br</p>
            }, {
              icon: <Clock className="h-6 w-6 text-teal-600" />,
              title: "Horário de Atendimento",
              content: <p>Segunda a Sexta: 8h às 18h</p>
            }].map((item, idx) => (
              <Card key={idx}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-teal-100 p-3 rounded-lg">{item.icon}</div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <div className="text-gray-600">{item.content}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
