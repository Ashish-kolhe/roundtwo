"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Code2,
  CheckCircle,
  MessageCircle,
  Clock,
  Award,
  Star,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  BookOpen,
  Briefcase,
  GraduationCap,
  UserCheck,
  ThumbsUp,
  Users,
  Target,
  Zap,
  Eye,
  Play,
  TrendingUp,
} from "lucide-react"
import Link from "next/link" 

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isVisible, setIsVisible] = useState({})
  const [stats, setStats] = useState({
    enrolled: 0,
    completed: 0,
    satisfied: 0,
    programs: 0,
  })
  const [showBackToTop, setShowBackToTop] = useState(false)

  const testimonials = [
    {
      name: "Priya Sharma",
      course: "Full Stack Development",
      quote:
        "The hands-on projects and mentorship at Inlighn Tech transformed my career. I landed my dream job within 2 months of completion!",
      avatar: "https://img.daisyui.com/images/profile/demo/idiotsandwich@192.webp",
      rating: 5,
      company: "Tech Mahindra",
    },
    {
      name: "Rahul Kumar",
      course: "Data Science",
      quote:
        "Real-world projects and flexible learning made all the difference. The industry certification opened many doors for me.",
      avatar: "https://img.daisyui.com/images/profile/demo/gordon@192.webp",
      rating: 5,
      company: "Wipro",
    },
    {
      name: "Sneha Patel",
      course: "AI & Machine Learning",
      quote:
        "Expert mentors and comprehensive curriculum helped me transition from a non-tech background to AI engineering.",
      avatar: "https://img.daisyui.com/images/profile/demo/distracted2@192.webp",
      rating: 5,
      company: "Infosys",
    },
  ]

  const features = [
    {
      title: "Real World Projects",
      description: "Work on industry-relevant projects that showcase your skills to potential employers",
      icon: Code2,
      color: "from-teal-500 to-emerald-500",
    },
    {
      title: "Expert Mentorships",
      description: "Get guidance from industry professionals with years of experience in their fields",
      icon: Users,
      color: "from-emerald-500 to-teal-500",
    },
    {
      title: "Certified Programs",
      description: "Earn industry-recognized certifications that employers value and trust",
      icon: Award,
      color: "from-teal-600 to-emerald-600",
    },
    {
      title: "Flexible Learning",
      description: "Learn at your own pace with our self-paced online learning platform",
      icon: Clock,
      color: "from-emerald-600 to-teal-600",
    },
  ]

  const benefits = [
    {
      title: "100% Online",
      description: "Learn from anywhere, anytime with our flexible online platform",
      icon: Zap,
    },
    {
      title: "Hands-on Projects",
      description: "Build real-world projects that showcase your skills to employers",
      icon: Target,
    },
    {
      title: "Flexible Schedule",
      description: "Self-paced learning that fits your lifestyle and commitments",
      icon: Clock,
    },
    {
      title: "Industry Certification",
      description: "Get recognized credentials that employers value and trust",
      icon: Award,
    },
  ]

  const faqs = [
    {
      question: "How long are the internship programs?",
      answer:
        "Our programs range from 3 to 6 months depending on the specialization. Each program is designed to be completed at your own pace with flexible deadlines.",
    },
    {
      question: "What are the eligibility requirements?",
      answer:
        "Most programs require basic computer literacy and enthusiasm to learn. Some advanced programs like AI & ML may require basic programming knowledge.",
    },
    {
      question: "Do I get a certificate upon completion?",
      answer:
        "Yes! You receive an industry-recognized certificate upon successful completion of your program, including all projects and assessments.",
    },
    {
      question: "What is your refund policy?",
      answer:
        "We offer a 7-day money-back guarantee. If you're not satisfied within the first week, you can request a full refund.",
    },
    {
      question: "Is there mentorship support available?",
      answer: "Each student is paired with an industry expert mentor who provides guidance throughout the program.",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

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

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Animate stats when visible
  useEffect(() => {
    if (isVisible.stats) {
      const animateStats = () => {
        const targets = { enrolled: 2500, completed: 1800, satisfied: 95, programs: 6 }
        const duration = 2000
        const steps = 60
        const stepTime = duration / steps

        let currentStep = 0
        const timer = setInterval(() => {
          currentStep++
          const progress = currentStep / steps

          setStats({
            enrolled: Math.floor(targets.enrolled * progress),
            completed: Math.floor(targets.completed * progress),
            satisfied: Math.floor(targets.satisfied * progress),
            programs: Math.floor(targets.programs * progress),
          })

          if (currentStep >= steps) {
            clearInterval(timer)
            setStats(targets)
          }
        }, stepTime)
      }

      animateStats()
    }
  }, [isVisible.stats])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-teal-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 pt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="animate-fade-in-up">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                  <span className="text-gray-800 dark:text-gray-200">
                    Transform Your Career With
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent font-black">INLIGHN TECH</span>
                </h1>

                <p className="text-md sm:text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Join thousands of students who've launched successful tech careers through our comprehensive
                  internship programs
                </p>

                {/* Key Benefits */}
                <div className="flex sm:flex-row gap-4 mb-8 justify-center lg:justify-start text-sm">
                  <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                    <CheckCircle className="w-5 h-5 text-teal-600" />
                    <span>95% Placement Rate</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                    <CheckCircle className="w-5 h-5 text-teal-600" />
                    <span>Industry Experts</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                    <CheckCircle className="w-5 h-5 text-teal-600" />
                    <span>Real Projects</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/programs">
                  <Button
                    size="md"
                    className="bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white px-12 py-2 text-md font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 my-4"
                   
                  >
                    Explore Programs
                    <ArrowRight className="ml-2 w-6 h-6" />
                  </Button></Link>
                  
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                {/* Main Image Container */}
                <div className="relative">
                  {/* Background Decorative Elements */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-3xl opacity-10 blur-xl"></div>
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-2xl opacity-20 rotate-12"></div>
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full opacity-15"></div>

                  {/* Main Image */}
                  <div className="relative z-10 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden">
                    <img
                      src="/images/students-learning.png"
                      alt="Students learning technology and coding together"
                      className="w-full h-96 lg:h-[500px] object-cover"
                    />

                    {/* Overlay Content */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                    {/* Floating Stats Cards */}
                    <div className="absolute top-6 left-6 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-lg flex items-center justify-center">
                          <Users className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-xl font-bold text-gray-900 dark:text-white">2500+</div>
                          <div className="text-xs text-gray-600 dark:text-gray-300">Students</div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute top-6 right-6 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg flex items-center justify-center">
                          <TrendingUp className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-xl font-bold text-gray-900 dark:text-white">95%</div>
                          <div className="text-xs text-gray-600 dark:text-gray-300">Placement</div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-lg flex items-center justify-center">
                          <Award className="w-5 h-5 text-white" />
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-gray-900 dark:text-white">Certified</div>
                          <div className="text-xs text-gray-600 dark:text-gray-300">Programs</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Tech Icons */}
                <div
                  className="absolute -top-4 left-1/4 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg animate-bounce"
                  style={{ animationDelay: "0s" }}
                >
                  <Code2 className="w-4 h-4 text-white" />
                </div>
                <div
                  className="absolute top-1/4 -right-4 w-8 h-8 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center shadow-lg animate-bounce"
                  style={{ animationDelay: "1s" }}
                >
                  <BookOpen className="w-4 h-4 text-white" />
                </div>
                <div
                  className="absolute bottom-1/4 -left-4 w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center shadow-lg animate-bounce"
                  style={{ animationDelay: "2s" }}
                >
                  <Briefcase className="w-4 h-4 text-white" />
                </div>
                <div
                  className="absolute -bottom-4 right-1/4 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center shadow-lg animate-bounce"
                  style={{ animationDelay: "3s" }}
                >
                  <GraduationCap className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Internships Section */}
      <section id="internships" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className={`transition-all duration-1000 ${isVisible.internships ? "opacity-100" : "opacity-0"}`}>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                We Provide The{" "}
                <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                  Best Internships
                </span>
              </h2>
              <p className="text-md text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Our internship programs are designed by industry experts to give you real-world experience and the
                skills employers are looking for. From Full Stack Development to AI & Machine Learning, we offer
                comprehensive programs that prepare you for success.
              </p>

              <div className="space-y-4 mb-8 text-sm">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-teal-600" />
                  <span className="text-gray-700 dark:text-gray-300">Industry-relevant curriculum</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-teal-600" />
                  <span className="text-gray-700 dark:text-gray-300">Hands-on project experience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-teal-600" />
                  <span className="text-gray-700 dark:text-gray-300">Expert mentorship and guidance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-teal-600" />
                  <span className="text-gray-700 dark:text-gray-300">Industry-recognized certification</span>
                </div>
              </div>
<Link href="/about">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white dark:border-teal-400 dark:text-teal-400 dark:hover:bg-teal-600 dark:hover:text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Know More
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button></Link>
            </div>

            <div
              className={`transition-all duration-1000 ${isVisible.internships ? "opacity-100" : "opacity-0"}`}
              style={{ transitionDelay: "200ms" }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-3xl transform rotate-3"></div>
                <img
                  src="https://images.pexels.com/photos/7550298/pexels-photo-7550298.jpeg"
                  alt="Modern coding workspace with multiple monitors"
                  className="relative z-10 w-full h-96 object-cover rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-2xl flex items-center justify-center z-20">
                  <GraduationCap className="w-8 h-8 sm:w-12 sm:h-12 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-20 bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-gray-800 dark:to-gray-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${isVisible.features ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                Our Programs
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We provide everything you need to succeed in your tech career journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card
                  key={index}
                  className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-white dark:bg-gray-800 rounded-2xl overflow-hidden relative ${isVisible.features ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-teal-900/20 dark:to-emerald-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <CardHeader className="relative z-10 text-center pb-4">
                    <div
                      className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}
                    >
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${isVisible.about ? "opacity-100" : "opacity-0"}`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About{" "}
              <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                Inlighn Tech
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Mission */}
            <div className={`transition-all duration-1000 ${isVisible.about ? "opacity-100" : "opacity-0"}`}>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-2xl flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Our Mission</h3>
              </div>
              <p className="text-md text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                To bridge the gap between academic learning and industry requirements by providing comprehensive,
                hands-on internship programs that prepare students for successful tech careers.
              </p>
              <p className="text-md text-gray-600 dark:text-gray-300 leading-relaxed">
                We believe in empowering the next generation of tech professionals with practical skills, real-world
                experience, and the confidence to excel in their chosen fields.
              </p>
            </div>

            {/* Vision */}
            <div
              className={`transition-all duration-1000 ${isVisible.about ? "opacity-100" : "opacity-0"}`}
              style={{ transitionDelay: "200ms" }}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center mr-4">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Our Vision</h3>
              </div>
              <p className="text-md text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                To become the leading platform for tech education and career transformation, creating a world where
                anyone can access quality tech education and build a successful career in technology.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                We envision a future where our graduates become industry leaders, innovators, and change-makers who
                contribute to technological advancement and societal progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-20 bg-gradient-to-r from-teal-600 to-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${isVisible.stats ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Impact</h2>
            <p className="text-lg text-teal-100 max-w-3xl mx-auto">
              Numbers that speak for our commitment to student success
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div
              className={`text-center group cursor-pointer transition-all duration-1000 hover:scale-105 ${isVisible.stats ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                <UserCheck className="w-10 h-10 text-white group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">{stats.enrolled.toLocaleString()}+</div>
              <div className="text-teal-100 text-lg">Students Enrolled</div>
            </div>

            <div
              className={`text-center group cursor-pointer transition-all duration-1000 hover:scale-105 ${isVisible.stats ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: "100ms" }}
            >
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                <GraduationCap className="w-10 h-10 text-white group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">{stats.completed.toLocaleString()}+</div>
              <div className="text-teal-100 text-lg">Programs Completed</div>
            </div>

            <div
              className={`text-center group cursor-pointer transition-all duration-1000 hover:scale-105 ${isVisible.stats ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: "200ms" }}
            >
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                <ThumbsUp className="w-10 h-10 text-white group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">{stats.satisfied}%</div>
              <div className="text-teal-100 text-lg">Satisfaction Rate</div>
            </div>

            <div
              className={`text-center group cursor-pointer transition-all duration-1000 hover:scale-105 ${isVisible.stats ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: "300ms" }}
            >
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                <BookOpen className="w-10 h-10 text-white group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">{stats.programs}+</div>
              <div className="text-teal-100 text-lg">Specialized Programs</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${isVisible.testimonials ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Student{" "}
              <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                Success Stories
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Hear from our graduates who transformed their careers with our programs
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <Card
                    key={index}
                    className="w-full flex-shrink-0 bg-white dark:bg-gray-700 shadow-xl border-0 rounded-2xl"
                  >
                    <CardContent className="p-8 text-center">
                      <div className="flex justify-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <blockquote className="text-lg text-gray-700 dark:text-gray-300 mb-6 italic leading-relaxed">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="flex items-center justify-center space-x-4">
                        <img
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full border-2 border-teal-200"
                        />
                        <div className="text-left">
                          <div className="font-semibold text-gray-900 dark:text-white text-lg">{testimonial.name}</div>
                          <div className="text-sm text-teal-600 dark:text-teal-400 font-medium">
                            {testimonial.course}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.company}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white dark:bg-gray-700 rounded-full shadow-lg flex items-center justify-center hover:bg-teal-50 dark:hover:bg-gray-600 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-teal-600 dark:text-teal-400" />
            </button>
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white dark:bg-gray-700 rounded-full shadow-lg flex items-center justify-center hover:bg-teal-50 dark:hover:bg-gray-600 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-teal-600 dark:text-teal-400" />
            </button>

            {/* Progress Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`relative w-12 h-2 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? "bg-teal-600" : "bg-gray-300 dark:bg-gray-600"
                  }`}
                >
                  {index === currentTestimonial && (
                    <div className="absolute inset-0 bg-emerald-400 rounded-full animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${isVisible.faq ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Get answers to common questions about our programs
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className={`border border-gray-200 dark:border-gray-700 rounded-xl px-6 bg-white dark:bg-gray-800 transition-all duration-1000 ${isVisible.faq ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
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
        </div>
      </section>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="w-12 h-12 bg-gradient-to-r from-teal-600 to-emerald-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center"
          >
            <ArrowRight className="w-5 h-5 rotate-[-90deg]" />
          </button>
        )}

        <button
          onClick={() => scrollToSection("contact")}
          className="w-14 h-14 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center group"
        >
          <span className=""><MessageCircle className="text-2xl"/></span>
          <div className="absolute right-16 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Get Help
          </div>
        </button>
      </div>
    </div>
  )
}
