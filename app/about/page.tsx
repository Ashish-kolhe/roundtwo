"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  ArrowDown,
  Users,
  BookOpen,
  Code2,
  Award,
  Briefcase,
  CheckCircle,
  Star,
  ChevronLeft,
  ChevronRight,
  Target,
  Eye,
  UserCheck,
  GraduationCap,
  ThumbsUp,
  Trophy,
  Globe,
  Heart,
  Shield,
  Clock,
  TrendingUp,
  Play,
  Building,
} from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isVisible, setIsVisible] = useState({})
  const [stats, setStats] = useState({
    enrolled: 0,
    completed: 0,
    satisfied: 0,
    programs: 0,
    mentors: 0,
    companies: 0,
  })

  const roadmapSteps = [
    {
      step: 1,
      title: "Explore Programs",
      description: "Browse our comprehensive internship programs and find your perfect tech career path",
      icon: BookOpen,
      color: "from-teal-500 to-emerald-500",
      duration: "Day 1",
    },
    {
      step: 2,
      title: "Enroll & Start",
      description: "Complete enrollment and begin your learning journey with our structured curriculum",
      icon: Play,
      color: "from-emerald-500 to-teal-500",
      duration: "Week 1",
    },
    {
      step: 3,
      title: "Learn & Practice",
      description: "Engage with interactive content, hands-on projects, and real-world scenarios",
      icon: Code2,
      color: "from-teal-600 to-emerald-600",
      duration: "Months 1-4",
    },
    {
      step: 4,
      title: "Get Mentorship",
      description: "Connect with industry experts who guide you through challenges and career decisions",
      icon: Users,
      color: "from-emerald-600 to-teal-600",
      duration: "Throughout",
    },
    {
      step: 5,
      title: "Build Projects",
      description: "Create impressive portfolio projects that showcase your skills to potential employers",
      icon: Briefcase,
      color: "from-teal-700 to-emerald-700",
      duration: "Months 2-5",
    },
    {
      step: 6,
      title: "Get Certified",
      description: "Earn industry-recognized certification and join our alumni network",
      icon: Award,
      color: "from-emerald-700 to-teal-700",
      duration: "Final Month",
    },
  ]

  const testimonials = [
    {
      name: "Arjun Mehta",
      course: "Full Stack Development",
      quote:
        "The structured roadmap and mentorship at Inlighn Tech made my transition from non-tech to tech seamless. Now I'm a senior developer at a top MNC!",
      avatar: "https://img.daisyui.com/images/profile/demo/distracted1@192.webp",
      rating: 5,
      company: "TCS",
      position: "Senior Developer",
    },
    {
      name: "Kavya Singh",
      course: "Data Science",
      quote:
        "The hands-on approach and real-world projects prepared me perfectly for the industry. I landed my dream job even before completing the program!",
      avatar: "https://img.daisyui.com/images/profile/demo/wonderperson@192.webp",
      rating: 5,
      company: "Accenture",
      position: "Data Analyst",
    },
    {
      name: "Rohit Sharma",
      course: "AI & Machine Learning",
      quote:
        "Inlighn Tech's comprehensive curriculum and expert mentors helped me master AI concepts and build amazing projects. Highly recommended!",
      avatar: "https://img.daisyui.com/images/profile/demo/gordon@192.webp",
      rating: 5,
      company: "IBM",
      position: "ML Engineer",
    },
  ]

  const whyChooseUs = [
    {
      title: "Industry Experts",
      description: "Learn from professionals with 10+ years of experience in top tech companies",
      icon: Users,
      color: "from-teal-500 to-emerald-500",
    },
    {
      title: "Real Projects",
      description: "Work on actual industry projects that solve real business problems",
      icon: Code2,
      color: "from-emerald-500 to-teal-500",
    },
    {
      title: "Flexible Learning",
      description: "Self-paced online learning that fits your schedule and lifestyle",
      icon: Clock,
      color: "from-teal-600 to-emerald-600",
    },
    {
      title: "Career Support",
      description: "Dedicated placement assistance and career guidance throughout your journey",
      icon: TrendingUp,
      color: "from-emerald-600 to-teal-600",
    },
    {
      title: "Lifetime Access",
      description: "Get lifetime access to course materials and community support",
      icon: Shield,
      color: "from-teal-700 to-emerald-700",
    },
    {
      title: "Global Network",
      description: "Join a community of 2500+ alumni working in top companies worldwide",
      icon: Globe,
      color: "from-emerald-700 to-teal-700",
    },
  ]

  const achievements = [
    {
      title: "Best EdTech Startup 2023",
      description: "Recognized by TechCrunch for innovation in tech education",
      icon: Trophy,
      year: "2023",
    },
    {
      title: "95% Placement Rate",
      description: "Highest placement rate among online tech education platforms",
      icon: TrendingUp,
      year: "2024",
    },
    {
      title: "50+ Industry Partners",
      description: "Partnerships with leading tech companies for internships and placements",
      icon: Building,
      year: "2024",
    },
    {
      title: "10,000+ Lives Transformed",
      description: "Successfully helped students transition to rewarding tech careers",
      icon: Heart,
      year: "2024",
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

  // Animate stats when visible
  useEffect(() => {
    if (isVisible.stats) {
      const animateStats = () => {
        const targets = { enrolled: 2500, completed: 1800, satisfied: 95, programs: 6, mentors: 50, companies: 200 }
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
            mentors: Math.floor(targets.mentors * progress),
            companies: Math.floor(targets.companies * progress),
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

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      {/* Hero Section - Internship Journey Roadmap */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-teal-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Your{" "}
              <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                Internship Journey
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Follow our proven 6-step roadmap to transform from a beginner to an industry-ready tech professional
            </p>
          </div>

          {/* Roadmap */}
          <div className="relative" id="roadmap">
            {/* Desktop Connection Line */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-teal-300 to-transparent dark:via-teal-700 z-0"></div>

            {/* Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
              {roadmapSteps.map((step, index) => {
                const IconComponent = step.icon
                return (
                  <div
                    key={index}
                    className={`relative text-center group transition-all duration-1000 ${
                      isVisible.roadmap ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    {/* Step Number */}
                    <div className="relative z-10 mb-6">
                      <div
                        className={`w-16 h-16 mx-auto bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-all duration-300`}
                      >
                        {step.step}
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="mb-6">
                      <div
                        className={`w-20 h-20 mx-auto bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center group-hover:scale-105 group-hover:rotate-2 transition-all duration-300 shadow-lg`}
                      >
                        <IconComponent className="w-10 h-10 text-white" />
                      </div>
                    </div>

                    {/* Duration Badge */}
                    <div className="mb-4">
                      <Badge
                        variant="secondary"
                        className="bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 px-3 py-1 text-sm font-medium"
                      >
                        {step.duration}
                      </Badge>
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-sm mx-auto">
                        {step.description}
                      </p>
                    </div>

                    {/* Mobile Arrow */}
                    {index < roadmapSteps.length - 1 && (
                      <div className="flex justify-center mt-8 lg:hidden">
                        <div className="w-10 h-10 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full flex items-center justify-center shadow-md">
                          <ArrowDown className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-16">
              <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
                <div className="text-center sm:text-left">
                  <p className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    Ready to start your transformation?
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">Join 2500+ students who chose success</p>
                </div>
                <Link href="/programs">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white px-8 py-3 text-lg rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    Explore Programs
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="vision-mission" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Mission */}
            <div
              className={`transition-all duration-1000 ${isVisible["vision-mission"] ? "opacity-100" : "opacity-0"}`}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-2xl flex items-center justify-center mr-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                To democratize tech education by providing world-class internship programs that bridge the gap between
                academic learning and industry requirements, empowering students to build successful careers in
                technology.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                We believe every student deserves access to quality tech education, expert mentorship, and real-world
                experience that prepares them for the challenges of the modern tech industry.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-teal-600" />
                  <span className="text-gray-700 dark:text-gray-300">Accessible quality education for all</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-teal-600" />
                  <span className="text-gray-700 dark:text-gray-300">Industry-relevant curriculum and projects</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-teal-600" />
                  <span className="text-gray-700 dark:text-gray-300">Personalized mentorship and career guidance</span>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div
              className={`transition-all duration-1000 ${isVisible["vision-mission"] ? "opacity-100" : "opacity-0"}`}
              style={{ transitionDelay: "200ms" }}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center mr-4">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                To become the global leader in tech education transformation, creating a world where anyone, regardless
                of their background, can access premium tech education and build a thriving career in technology.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                We envision a future where our graduates become industry leaders, innovators, and change-makers who
                drive technological advancement and create positive impact in society.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <span className="text-gray-700 dark:text-gray-300">Global reach and impact</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <span className="text-gray-700 dark:text-gray-300">Innovation in education technology</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <span className="text-gray-700 dark:text-gray-300">Sustainable career transformation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-20 bg-gradient-to-r from-teal-600 to-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible.stats ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Our Impact in Numbers</h2>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto">
              These numbers represent real lives transformed and careers launched
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div
              className={`text-center group cursor-pointer transition-all duration-1000 hover:scale-105 ${
                isVisible.stats ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                <UserCheck className="w-10 h-10 text-white group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">{stats.enrolled.toLocaleString()}+</div>
              <div className="text-teal-100 text-sm">Students Enrolled</div>
            </div>

            <div
              className={`text-center group cursor-pointer transition-all duration-1000 hover:scale-105 ${
                isVisible.stats ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                <GraduationCap className="w-10 h-10 text-white group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">{stats.completed.toLocaleString()}+</div>
              <div className="text-teal-100 text-sm">Programs Completed</div>
            </div>

            <div
              className={`text-center group cursor-pointer transition-all duration-1000 hover:scale-105 ${
                isVisible.stats ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                <ThumbsUp className="w-10 h-10 text-white group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">{stats.satisfied}%</div>
              <div className="text-teal-100 text-sm">Satisfaction Rate</div>
            </div>

            <div
              className={`text-center group cursor-pointer transition-all duration-1000 hover:scale-105 ${
                isVisible.stats ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                <BookOpen className="w-10 h-10 text-white group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">{stats.programs}+</div>
              <div className="text-teal-100 text-sm">Specialized Programs</div>
            </div>

            <div
              className={`text-center group cursor-pointer transition-all duration-1000 hover:scale-105 ${
                isVisible.stats ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                <Users className="w-10 h-10 text-white group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">{stats.mentors}+</div>
              <div className="text-teal-100 text-sm">Expert Mentors</div>
            </div>

            <div
              className={`text-center group cursor-pointer transition-all duration-1000 hover:scale-105 ${
                isVisible.stats ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "500ms" }}
            >
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                <Building className="w-10 h-10 text-white group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">{stats.companies}+</div>
              <div className="text-teal-100 text-sm">Hiring Partners</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-choose" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible["why-choose"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                Inlighn Tech
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We're not just another online course platform. We're your career transformation partner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => {
              const IconComponent = item.icon
              return (
                <Card
                  key={index}
                  className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-white dark:bg-gray-700 rounded-2xl overflow-hidden relative ${
                    isVisible["why-choose"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-teal-900/20 dark:to-emerald-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <CardHeader className="relative z-10 text-center pb-4">
                    <div
                      className={`w-20 h-20 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}
                    >
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible.testimonials ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Success{" "}
              <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                Stories
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Real stories from real students who transformed their careers with us
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
                    className="w-full flex-shrink-0 bg-white dark:bg-gray-800 shadow-xl border-0 rounded-2xl"
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
                          className="w-16 h-16 rounded-full border-2 border-teal-200 dark:border-teal-700"
                        />
                        <div className="text-left">
                          <div className="font-semibold text-gray-900 dark:text-white text-lg">{testimonial.name}</div>
                          <div className="text-sm text-teal-600 dark:text-teal-400 font-medium">
                            {testimonial.position}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.company}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Navigation */}
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

            {/* Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? "bg-teal-600" : "bg-gray-300 dark:bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section
        id="achievements"
        className="py-20 bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-gray-800 dark:to-gray-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible.achievements ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                Achievements
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Recognition and milestones that showcase our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon
              return (
                <Card
                  key={index}
                  className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-white dark:bg-gray-800 rounded-2xl overflow-hidden text-center ${
                    isVisible.achievements ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <Badge
                      variant="secondary"
                      className="mb-2 bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300"
                    >
                      {achievement.year}
                    </Badge>
                    <CardTitle className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                      {achievement.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {achievement.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to Start Your Journey?</h3>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have already transformed their careers with our proven internship programs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/programs">
              <Button
                size="lg"
                className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Explore Programs
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
