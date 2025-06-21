"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Code2,
  Database,
  Brain,
  Shield,
  Smartphone,
  Globe,
  Clock,
  Users,
  Star,
  ArrowRight,
  BookOpen,
  Target,
  Zap,
  TrendingUp,
  Calendar,
  Briefcase,
  Filter,
  Search,
  X,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function ProgramsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [isVisible, setIsVisible] = useState({})
  const [filteredPrograms, setFilteredPrograms] = useState([])

  const categories = [
    { id: "all", name: "All Programs", icon: Globe },
    { id: "development", name: "Development", icon: Code2 },
    { id: "data", name: "Data Science", icon: Database },
    { id: "ai", name: "AI & ML", icon: Brain },
    { id: "security", name: "Cybersecurity", icon: Shield },
    { id: "mobile", name: "Mobile Dev", icon: Smartphone },
  ]

  const programs = [
    {
      id: 1,
      title: "Full Stack Web Development",
      category: "development",
      description:
        "Master both frontend and backend development with modern technologies like React, Node.js, and MongoDB.",
      duration: "6 months",
      level: "Beginner to Advanced",
      rating: 4.9,
      students: 1250,
      icon: Code2,
      color: "from-blue-500 to-purple-600",
      features: [
        "React.js & Next.js",
        "Node.js & Express",
        "MongoDB & PostgreSQL",
        "REST APIs & GraphQL",
        "AWS Deployment",
        "Real-world Projects",
      ],
      skills: ["JavaScript", "React", "Node.js", "MongoDB", "AWS"],
      projects: 8,
      mentorship: "1-on-1 Weekly",
      certification: "Industry Recognized",
      placement: "95%",
      popular: true,
    },
    {
      id: 2,
      title: "Data Science & Analytics",
      category: "data",
      description:
        "Learn to extract insights from data using Python, machine learning, and advanced analytics techniques.",
      duration: "5 months",
      level: "Intermediate",
      rating: 4.8,
      students: 890,
      icon: Database,
      color: "from-green-500 to-teal-600",
      features: [
        "Python & R Programming",
        "Machine Learning",
        "Data Visualization",
        "SQL & NoSQL",
        "Statistical Analysis",
        "Business Intelligence",
      ],
      skills: ["Python", "Pandas", "Scikit-learn", "Tableau", "SQL"],
      projects: 6,
      mentorship: "1-on-1 Bi-weekly",
      certification: "Industry Recognized",
      placement: "92%",
      popular: false,
    },
    {
      id: 3,
      title: "AI & Machine Learning",
      category: "ai",
      description:
        "Dive deep into artificial intelligence and machine learning with hands-on projects and real-world applications.",
      duration: "6 months",
      level: "Advanced",
      rating: 4.9,
      students: 675,
      icon: Brain,
      color: "from-purple-500 to-pink-600",
      features: [
        "Deep Learning",
        "Neural Networks",
        "Computer Vision",
        "Natural Language Processing",
        "TensorFlow & PyTorch",
        "MLOps & Deployment",
      ],
      skills: ["Python", "TensorFlow", "PyTorch", "OpenCV", "NLP"],
      projects: 10,
      mentorship: "1-on-1 Weekly",
      certification: "Industry Recognized",
      placement: "94%",
      trending: true,
    },
    {
      id: 4,
      title: "Ethical Hacking & Cybersecurity",
      category: "security",
      description:
        "Learn to protect systems and networks from cyber threats with hands-on penetration testing experience.",
      duration: "4 months",
      level: "Intermediate",
      rating: 4.7,
      students: 520,
      icon: Shield,
      color: "from-red-500 to-orange-600",
      features: [
        "Penetration Testing",
        "Network Security",
        "Web Application Security",
        "Digital Forensics",
        "Security Tools",
        "Compliance & Governance",
      ],
      skills: ["Kali Linux", "Metasploit", "Wireshark", "Burp Suite", "OWASP"],
      projects: 5,
      mentorship: "1-on-1 Bi-weekly",
      certification: "Industry Recognized",
      placement: "88%",
      popular: false,
    },
    {
      id: 5,
      title: "Mobile App Development",
      category: "mobile",
      description:
        "Build native and cross-platform mobile applications for iOS and Android using React Native and Flutter.",
      duration: "5 months",
      level: "Beginner to Advanced",
      rating: 4.8,
      students: 780,
      icon: Smartphone,
      color: "from-indigo-500 to-blue-600",
      features: [
        "React Native",
        "Flutter & Dart",
        "iOS Development",
        "Android Development",
        "App Store Deployment",
        "Mobile UI/UX",
      ],
      skills: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
      projects: 7,
      mentorship: "1-on-1 Weekly",
      certification: "Industry Recognized",
      placement: "90%",
      popular: false,
    },
    {
      id: 6,
      title: "DevOps & Cloud Engineering",
      category: "development",
      description:
        "Master cloud infrastructure, CI/CD pipelines, and DevOps practices with AWS, Docker, and Kubernetes.",
      duration: "4 months",
      level: "Intermediate to Advanced",
      rating: 4.8,
      students: 445,
      icon: Globe,
      color: "from-cyan-500 to-blue-600",
      features: [
        "AWS Cloud Services",
        "Docker & Kubernetes",
        "CI/CD Pipelines",
        "Infrastructure as Code",
        "Monitoring & Logging",
        "Security Best Practices",
      ],
      skills: ["AWS", "Docker", "Kubernetes", "Jenkins", "Terraform"],
      projects: 6,
      mentorship: "1-on-1 Bi-weekly",
      certification: "Industry Recognized",
      placement: "93%",
      trending: true,
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

  useEffect(() => {
    let filtered = programs

    if (selectedCategory !== "all") {
      filtered = filtered.filter((program) => program.category === selectedCategory)
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (program) =>
          program.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          program.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          program.skills.some((skill) => skill.toLowerCase().includes(searchTerm.toLowerCase())),
      )
    }

    setFilteredPrograms(filtered)
  }, [selectedCategory, searchTerm])

  const clearFilters = () => {
    setSelectedCategory("all")
    setSearchTerm("")
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-teal-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                Internship Programs
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Choose from our comprehensive range of tech internship programs designed to transform you into an
              industry-ready professional
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600 dark:text-teal-400 mb-2">6+</div>
              <div className="text-gray-600 dark:text-gray-300">Specialized Programs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600 dark:text-teal-400 mb-2">2500+</div>
              <div className="text-gray-600 dark:text-gray-300">Students Enrolled</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600 dark:text-teal-400 mb-2">95%</div>
              <div className="text-gray-600 dark:text-gray-300">Placement Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600 dark:text-teal-400 mb-2">50+</div>
              <div className="text-gray-600 dark:text-gray-300">Hiring Partners</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col  gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search programs, skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-10"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-4 justify-evenly">
              {categories.map((category) => {
                const IconComponent = category.icon
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === category.id
                        ? "bg-teal-600 text-white shadow-lg"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span>{category.name}</span>
                  </button>
                )
              })}
            </div>

            {/* Clear Filters */}
            {(selectedCategory !== "all" || searchTerm) && (
              <Button variant="outline" onClick={clearFilters} className="flex items-center space-x-2">
                <Filter className="w-4 h-4" />
                <span>Clear Filters</span>
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section id="programs-grid" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPrograms.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">No programs found</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
              <Button onClick={clearFilters} variant="outline">
                Clear all filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPrograms.map((program, index) => {
                const IconComponent = program.icon
                return (
                  <Card
                    key={program.id}
                    className={`group relative overflow-hidden bg-white dark:bg-gray-900 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-2xl ${
                      isVisible["programs-grid"] ? "opacity-100" : "opacity-0"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {/* Popular/Trending Badge */}
                    {program.popular && (
                      <div className="absolute -top-1 -right-1 z-10">
                        <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0">
                          🔥 Popular
                        </Badge>
                      </div>
                    )}
                    {program.trending && (
                      <div className="absolute -top-1 -right-1 z-10">
                        <Badge className="bg-gradient-to-r from-green-500 to-teal-500 text-white border-0">
                          📈 Trending
                        </Badge>
                      </div>
                    )}

                    {/* Gradient Background */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
                    ></div>

                    <CardHeader className="relative z-10 pb-6">
                      {/* Icon and Title */}
                      <div className="flex items-start justify-between mb-6">
                        <div
                          className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r ${program.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}
                        >
                          <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                        </div>
                        <div className="text-right">
                          <div className="flex items-center space-x-1 mb-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                              {program.rating}
                            </span>
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">{program.students} students</div>
                        </div>
                      </div>

                      <CardTitle className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                        {program.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                        {program.description}
                      </CardDescription>

                      {/* Program Details */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-teal-600" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">{program.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Target className="w-4 h-4 text-teal-600" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">{program.level}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Briefcase className="w-4 h-4 text-teal-600" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">{program.projects} Projects</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <TrendingUp className="w-4 h-4 text-teal-600" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">
                            {program.placement} Placement
                          </span>
                        </div>
                      </div>

                      {/* Skills */}
                      <div className="mb-6">
                        <div className="text-sm font-medium text-gray-900 dark:text-white mb-3">Key Skills:</div>
                        <div className="flex flex-wrap gap-2">
                          {program.skills.slice(0, 3).map((skill, skillIndex) => (
                            <Badge
                              key={skillIndex}
                              variant="secondary"
                              className="text-xs bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300"
                            >
                              {skill}
                            </Badge>
                          ))}
                          {program.skills.length > 3 && (
                            <Badge variant="secondary" className="text-xs">
                              +{program.skills.length - 3} more
                            </Badge>
                          )}
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="relative z-10 pt-0 pb-6">
                      {/* Action Buttons */}
                      <div className="space-y-3">
                        <Link href={`/programs/${program.id}`}>
                          <Button
                            className="w-full bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                            size="lg"
                          >
                            Enroll Now
                            <ArrowRight className="ml-2 w-5 h-5" />
                          </Button>
                        </Link>
                        <Link href={`/programs/${program.id}`}>
                          <Button
                            variant="outline"
                            className="w-full border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white dark:border-teal-400 dark:text-teal-400 dark:hover:bg-teal-600 dark:hover:text-white rounded-full mt-4"
                          >
                            View Details
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Our Programs */}
      <section id="why-choose" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible["why-choose"] ? "opacity-100" : "opacity-0"
            }`}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Our{" "}
              <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                Programs
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our programs are designed with industry experts to ensure you get the most relevant and practical
              education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Industry-Relevant Curriculum",
                description: "Updated regularly with latest industry trends and technologies",
                icon: BookOpen,
                color: "from-blue-500 to-purple-600",
              },
              {
                title: "Expert Mentorship",
                description: "1-on-1 guidance from industry professionals with 10+ years experience",
                icon: Users,
                color: "from-green-500 to-teal-600",
              },
              {
                title: "Hands-on Projects",
                description: "Build real-world projects that showcase your skills to employers",
                icon: Zap,
                color: "from-orange-500 to-red-600",
              },
              {
                title: "Placement Support",
                description: "Dedicated career services and placement assistance",
                icon: TrendingUp,
                color: "from-purple-500 to-pink-600",
              },
            ].map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card
                  key={index}
                  className={`group text-center border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white dark:bg-gray-800 rounded-2xl ${
                    isVisible["why-choose"] ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="pb-4">
                    <div
                      className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}
                    >
                      <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to Start Your Tech Journey?</h3>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have already transformed their careers with our proven programs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Browse All Programs
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
          </div>
        </div>
      </section>
    </div>
  )
}
