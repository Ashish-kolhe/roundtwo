"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  ArrowRight,
  CheckCircle,
  Linkedin,
  Instagram,
  Youtube,
  Twitter,
} from "lucide-react"

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState({})
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const contactMethods = [
    {
      title: "Email Us",
      description: "Get in touch via email for detailed inquiries",
      icon: Mail,
      value: "info@inlighntech.com",
      action: "mailto:info@inlighntech.com",
      color: "from-blue-500 to-purple-600",
      available: "24/7 Response",
    },
    {
      title: "Call Us",
      description: "Speak directly with our counselors",
      icon: Phone,
      value: "+91 93688 42663",
      action: "tel:+919368842663",
      color: "from-green-500 to-teal-600",
      available: "Mon-Sat, 9 AM - 8 PM",
    },
    {
      title: "Visit Us",
      description: "Come to our office for in-person consultation",
      icon: MapPin,
      value: "WeWork Prestige Central, Bengaluru, Karnataka 560001",
      action: "https://maps.google.com",
      color: "from-orange-500 to-red-600",
      available: "Mon-Fri, 10 AM - 6 PM",
    },
  ]

  const socialLinks = [
    { name: "LinkedIn", href: "#", icon: Linkedin, color: "hover:bg-blue-600" },
    { name: "Instagram", href: "#", icon: Instagram, color: "hover:bg-pink-600" },
    { name: "YouTube", href: "#", icon: Youtube, color: "hover:bg-red-600" },
    { name: "Twitter", href: "#", icon: Twitter, color: "hover:bg-sky-600" },
  ]

  const faqs = [
    {
      question: "How do I enroll in a program?",
      answer:
        "You can enroll by visiting our Programs page, selecting your desired course, and clicking 'Enroll Now'. Our counselors will guide you through the enrollment process and payment options.",
    },
    {
      question: "What are the payment options available?",
      answer:
        "We offer multiple payment options including full payment, EMI options (3, 6, 12 months), UPI, credit/debit cards, and net banking. We also provide scholarship opportunities for deserving candidates.",
    },
    {
      question: "Do you provide placement assistance?",
      answer:
        "Yes, we have a dedicated placement team that works with 200+ hiring partners. We provide resume building, interview preparation, mock interviews, and direct placement opportunities with our partner companies",
    },
    {
      question: "What is the refund policy?",
      answer:
        "We offer a 7-day money-back guarantee from the date of enrollment. If you're not satisfied with the program within the first week, you can request a full refund. Terms and conditions apply.",
    },
    {
      question: "Are the programs suitable for beginners?",
      answer:
        "Most of our programs are designed for beginners with no prior experience. We start with fundamentals and gradually progress to advanced topics with hands-on projects and mentorship.",
    },
    {
      question: "What kind of support do you provide during the program?",
      answer:
        "We provide 24/7 community support, weekly 1-on-1 mentorship sessions, doubt clearing sessions, project reviews, and career guidance throughout your learning journey.",
    },
    {
      question: "Do I get a certificate after completion?",
      answer:
        "Yes, you receive an industry-recognized certificate upon successful completion of the program, including all projects and assessments. The certificate is valued by top companies in the industry.",
    },
    {
      question: "Can I switch between programs?",
      answer:
        "Yes, you can switch to another program within the first 2 weeks of enrollment. Our counselors will help you choose the most suitable program based on your career goals and interests.",
    },
    {
      question: "What is the duration of mentorship support?",
      answer:
        "Mentorship support is provided throughout the program duration plus an additional 3 months post-completion to help with job search and career transition.",
    },
    {
      question: "Do you offer corporate training programs?",
      answer:
        "Yes, we offer customized corporate training programs for organizations looking to upskill their teams. Contact us for enterprise solutions and bulk training packages.",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }))
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll("[id]")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      {/* Hero Section */}

      {/* Contact Methods */}
      <section id="contact-methods" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible["contact-methods"] ? "opacity-100" : "opacity-0"
            }`}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Multiple Ways to{" "}
              <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                Connect
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Choose the most convenient way to reach out to us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon
              return (
                <Card
                  key={index}
                  className={`group text-center border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white dark:bg-gray-800 rounded-2xl overflow-hidden ${
                    isVisible["contact-methods"] ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-teal-900/20 dark:to-emerald-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <CardHeader className="relative z-10 pb-4">
                    <div
                      className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}
                    >
                      <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                      {method.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-300 mb-4">
                      {method.description}
                    </CardDescription>
                    <Badge
                      variant="secondary"
                      className=" text-teal-700 dark:text-teal-300 mb-4"
                    >
                      {method.available}
                    </Badge>
                  </CardHeader>

                  <CardContent className="relative z-10">
                    <div className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{method.value}</div>
                    <a href={method.action} target="_blank" rel="noopener noreferrer">
                      <Button
                        className="w-full bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                        size="lg"
                      >
                        Contact Now
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Social Media */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Follow Us</h3>
            <div className="flex justify-center space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center ${social.color} hover:text-white transition-all duration-300 transform hover:scale-110`}
                  >
                    <IconComponent className="w-6 h-6" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-12 transition-all duration-1000 ${
              isVisible["contact-form"] ? "opacity-100" : "opacity-0"
            }`}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Send Us a{" "}
              <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                Message
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Fill out the form below and we'll get back to you within 2 hours
            </p>
          </div>

          <Card
            className={`bg-white dark:bg-gray-900 shadow-xl border-0 rounded-2xl transition-all duration-1000 ${
              isVisible["contact-form"] ? "opacity-100" : "opacity-0"
            }`}
          >
            <CardContent className="p-8">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Message Sent Successfully!</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Thank you for reaching out. Our team will get back to you within 2 hours.
                  </p>
                  <Badge className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300">
                    Response within 2 hours
                  </Badge>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email address"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter your phone number"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What's this about?"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      className="w-full"
                    />
                  </div>

                  <div className="text-center">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      size="lg"
                      className="bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white px-12 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible.faq ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Find answers to common questions about our programs and services
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className={`border border-gray-200 dark:border-gray-700 rounded-xl px-6 bg-white dark:bg-gray-800 transition-all duration-1000 ${
                  isVisible.faq ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 dark:text-white hover:text-teal-600 dark:hover:text-teal-400 py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-300 pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Still have questions? Our support team is here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:info@inlighntech.com">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Email Support
                  <Mail className="ml-2 w-5 h-5" />
                </Button>
              </a>
              <a href="tel:+919368842663">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white dark:border-teal-400 dark:text-teal-400 dark:hover:bg-teal-600 dark:hover:text-white px-8 py-4 rounded-full"
                >
                  Call Now
                  <Phone className="ml-2 w-5 h-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Clock className="w-8 h-8 text-white mr-3" />
            <h3 className="text-3xl font-bold text-white">Office Hours</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            <div>
              <h4 className="text-xl font-semibold mb-2">Phone Support</h4>
              <p className="text-teal-100">Monday - Saturday</p>
              <p className="text-teal-100">9:00 AM - 8:00 PM IST</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">Email Support</h4>
              <p className="text-teal-100">24/7 Available</p>
              <p className="text-teal-100">Response within 2 hours</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">Office Visits</h4>
              <p className="text-teal-100">Monday - Friday</p>
              <p className="text-teal-100">10:00 AM - 6:00 PM IST</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
