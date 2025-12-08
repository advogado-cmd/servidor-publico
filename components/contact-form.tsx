"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon, CheckCircleIcon } from "@/components/icons"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    esfera: "",
    cargo: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [redirectToWhatsApp, setRedirectToWhatsApp] = useState(false)

  const submitToAPI = async () => {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })

    const result = await response.json()
    return result.success
  }

  const openWhatsApp = () => {
    const mensagem = `Olá, Dr. Carlos!

Sou ${formData.name}, servidor(a) da esfera ${formData.esfera}.
Cargo: ${formData.cargo}

📧 Email: ${formData.email}
📱 Telefone: ${formData.phone}

Tenho um problema administrativo/estatutário e preciso de análise.

📝 Relato: ${formData.message}`

    window.open(`https://api.whatsapp.com/send?phone=5511930819577&text=${encodeURIComponent(mensagem)}`, "_blank")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")
    setRedirectToWhatsApp(true)

    try {
      const success = await submitToAPI()

      if (success) {
        setSubmitStatus("success")
        setTimeout(() => {
          openWhatsApp()
        }, 2000)
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleEmailOnly = async () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.esfera ||
      !formData.cargo ||
      !formData.message
    ) {
      alert("Por favor, preencha todos os campos obrigatórios.")
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")
    setRedirectToWhatsApp(false)

    try {
      const success = await submitToAPI()

      if (success) {
        setSubmitStatus("success")
        setFormData({
          name: "",
          email: "",
          phone: "",
          esfera: "",
          cargo: "",
          message: "",
        })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Fale Conosco
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary mb-6 text-balance">
            Solicite sua Defesa Estatutária
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Preencha o formulário abaixo para análise do seu caso. Nossa equipe entrará em contato em breve.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-secondary rounded-2xl p-8">
            {submitStatus === "success" ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircleIcon className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="font-serif text-2xl text-primary mb-4">Mensagem Enviada!</h3>
                <p className="text-muted-foreground mb-6">
                  {redirectToWhatsApp
                    ? "Seus dados foram recebidos com sucesso. Abrindo WhatsApp..."
                    : "Seus dados foram recebidos com sucesso. Entraremos em contato em breve pelo e-mail informado."}
                </p>
                <Button
                  onClick={() => setSubmitStatus("idle")}
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                >
                  Enviar Nova Mensagem
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome Completo *</Label>
                  <Input
                    id="name"
                    required
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone/WhatsApp *</Label>
                    <Input
                      id="phone"
                      required
                      placeholder="(11) 99999-9999"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="esfera">Esfera do Servidor *</Label>
                    <Select
                      value={formData.esfera}
                      onValueChange={(value) => setFormData({ ...formData, esfera: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Municipal">Municipal</SelectItem>
                        <SelectItem value="Estadual">Estadual</SelectItem>
                        <SelectItem value="Federal">Federal</SelectItem>
                        <SelectItem value="Candidato a Concurso">Candidato a Concurso</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cargo">Qual o seu Cargo? *</Label>
                    <Input
                      id="cargo"
                      required
                      placeholder="Ex: Professor, Policial, Técnico..."
                      value={formData.cargo}
                      onChange={(e) => setFormData({ ...formData, cargo: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Breve relato do caso *</Label>
                  <Textarea
                    id="message"
                    required
                    placeholder="Conte-nos brevemente sobre sua situação, incluindo há quanto tempo enfrenta esse problema..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <div className="space-y-3">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-accent hover:bg-accent/90 text-foreground font-semibold text-lg py-6"
                  >
                    {isSubmitting ? "Processando..." : "Solicitar Defesa Estatutária"}
                  </Button>

                  <Button
                    type="button"
                    size="lg"
                    variant="outline"
                    disabled={isSubmitting}
                    onClick={handleEmailOnly}
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white font-semibold bg-transparent"
                  >
                    Prefiro Aguardar Contato por E-mail
                  </Button>
                </div>

                <p className="text-muted-foreground text-sm text-center">
                  Seus dados estão seguros e serão usados apenas para contato sobre seu caso.
                </p>

                {submitStatus === "error" && (
                  <p className="text-red-600 text-sm text-center">
                    Ocorreu um erro ao enviar. Por favor, tente novamente ou entre em contato diretamente pelo WhatsApp.
                  </p>
                )}
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-primary rounded-2xl p-8 text-white">
              <h3 className="font-serif text-2xl mb-6">Informações de Contato</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPinIcon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Endereço</p>
                    <p className="text-white/80">
                      Rua Loefgren, 1291, Conjunto 72
                      <br />
                      Vila Mariana, São Paulo - SP
                      <br />
                      CEP 04040-030
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <PhoneIcon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">WhatsApp</p>
                    <p className="text-white/80">+55 (11) 93081-9577</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MailIcon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">E-mail</p>
                    <p className="text-white/80">contato@droliveira.adv.br</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ClockIcon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Horário de Atendimento</p>
                    <p className="text-white/80">
                      Segunda a Sexta: 9h às 18h
                      <br />
                      Sábado: 9h às 12h (agendamento)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-secondary rounded-2xl overflow-hidden h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.8692547854!2d-46.6361!3d-23.5899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59f1069d11d1%3A0x3c0c8e7f8c7c5c7c!2sRua%20Loefgren%2C%201291%20-%20Vila%20Mariana%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004040-030!5e0!3m2!1spt-BR!2sbr!4v1699999999999!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do Escritório Dr. Oliveira Advocacia"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
