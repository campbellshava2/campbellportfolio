"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Phone, Send, Terminal } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    const payload = {
      access_key: "3b6b2513-edbe-425b-835b-37fa17089a91",
      from_name: "Website Requests",
      from_email: "notify@web3forms.com",
      replyto: "shavachiurai@gmail.com",
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (result.success) {
        setSubmitMessage("Thank you! Your message has been sent successfully.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitMessage("Sorry, there was an error sending your message. Please try again later.");
      }
    } catch (error) {
      setSubmitMessage("Sorry, there was an error sending your message. Please try again later.");
    }
    setIsSubmitting(false);
    setTimeout(() => setSubmitMessage(""), 5000);
  }

  const contactInfo = [
    {
      icon: <Mail className="h-10 w-10 text-primary" />,
      title: "Email",
      details: "shavachiurai@gmail.com",
      link: "mailto:shavachiurai@gmail.com",
    },
    {
      icon: <Phone className="h-10 w-10 text-primary" />,
      title: "Phone",
      details: "+263 (0) 713376255",
      link: "tel:+263713376255",
    },
    {
      icon: <MapPin className="h-10 w-10 text-primary" />,
      title: "Location",
      details: "Bulawayo",
      link: "#",
    },
  ]

  return (
    <section id="contact" className="py-20 relative">
      {/* Tech-inspired background */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-20 h-full">
          {Array.from({ length: 400 }).map((_, i) => (
            <div key={i} className="border-[0.5px] border-primary/20"></div>
          ))}
        </div>
      </div>

      {/* Dark mode specific glowing elements */}
      <div className="absolute top-1/4 right-1/3 w-72 h-72 rounded-full bg-primary/5 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center">
            <Terminal className="mr-2 text-primary" />
            Get In Touch
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-foreground/70 max-w-2xl mx-auto font-mono">
            <span className="text-primary">&gt;</span> Have a project in mind? Let's collaborate and build something
            amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="border border-primary/20 bg-card/50 backdrop-blur-sm hover:shadow-md hover:shadow-primary/10 transition-all"
              >
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4">{info.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{info.title}</h3>
                  <a
                    href={info.link}
                    className="text-foreground/70 hover:text-primary transition-colors font-mono"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {info.details}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="lg:col-span-2">
            <Card className="border border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <form 
                  className="space-y-6"
                  onSubmit={handleSubmit}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium font-mono flex items-center">
                        <span className="text-primary mr-1">&gt;</span> Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Campbell Shava"
                        className="border-primary/20 focus:border-primary bg-background/50"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium font-mono flex items-center">
                        <span className="text-primary mr-1">&gt;</span> Your Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="campbell@example.com"
                        className="border-primary/20 focus:border-primary bg-background/50"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium font-mono flex items-center">
                      <span className="text-primary mr-1">&gt;</span> Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry"
                      className="border-primary/20 focus:border-primary bg-background/50"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium font-mono flex items-center">
                      <span className="text-primary mr-1">&gt;</span> Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message here..."
                      rows={6}
                      className="border-primary/20 focus:border-primary bg-background/50"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/80 group" disabled={isSubmitting}>
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </>
                    )}
                  </Button>

                  {submitMessage && (
                    <div className="bg-primary/10 text-primary p-3 rounded-md font-mono">
                      <span className="text-primary mr-1">&gt;</span> {submitMessage}
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

