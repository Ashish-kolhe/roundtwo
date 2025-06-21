"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Play,
  Award,
  Trophy,
  Star,
  Users,
  Target,
  Gift,
  Crown,
  Zap,
  CheckCircle,
  ArrowRight,
  Calendar,
  BookOpen,
  Code2,
  Brain,
  Smartphone,
  Database,
  Shield,
  Globe,
  Medal,
  Coins,
  Gem,
  Sparkles,
  TrendingUp,
  Heart,
  Gamepad2,
  PartyPopper,
  Briefcase,
  FileText,
  MessageSquare,
  DollarSign,
  Rocket,
} from "lucide-react"
import Link from "next/link"

export default function WhatsSpecialPage() {
  const [isVisible, setIsVisible] = useState({})
  const [activeVideo, setActiveVideo] = useState(null)

  const videoLectures = [
    {
      id: 1,
      title: "Full Stack Development Masterclass",
      instructor: "Rajesh Kumar",
      company: "Google",
      duration: "2h 45m",
      views: "12.5K",
      rating: 4.9,
      thumbnail: "https://images.pexels.com/photos/4974922/pexels-photo-4974922.jpeg",
      category: "Development",
      level: "Advanced",
      description: "Deep dive into modern full-stack development with React, Node.js, and cloud deployment strategies.",
      topics: ["React Hooks", "Node.js APIs", "Database Design", "AWS Deployment"],
    },
    {
      id: 2,
      title: "AI & Machine Learning Fundamentals",
      instructor: "Dr. Priya Sharma",
      company: "Microsoft",
      duration: "3h 20m",
      views: "18.2K",
      rating: 4.8,
      thumbnail: "https://images.pexels.com/photos/8438964/pexels-photo-8438964.jpeg",
      category: "AI/ML",
      level: "Beginner",
      description: "Complete introduction to AI and ML concepts with hands-on Python programming examples.",
      topics: ["Python Basics", "Neural Networks", "TensorFlow", "Real Projects"],
    },
    {
      id: 3,
      title: "Data Science Career Roadmap",
      instructor: "Amit Patel",
      company: "Netflix",
      duration: "1h 55m",
      views: "9.8K",
      rating: 4.9,
      thumbnail: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg",
      category: "Data Science",
      level: "Intermediate",
      description: "Strategic guide to building a successful career in data science with industry insights.",
      topics: ["Career Planning", "Skill Development", "Portfolio Building", "Interview Tips"],
    },
    
  ]

  const internsOfTheMonth = [
    {
      name: "Arjun Mehta",
      program: "Full Stack Development",
      achievement: "Built 5 production-ready applications",
      reward: "₹50,000",
      company: "Hired by Flipkart",
      image: "https://img.daisyui.com/images/profile/demo/gordon@192.webp",
      badge: "🏆 Gold Winner",
      month: "December 2024",
    },
    {
      name: "Priya Singh",
      program: "Data Science",
      achievement: "Created ML model with 95% accuracy",
      reward: "₹35,000",
      company: "Hired by Zomato",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
      badge: "🥈 Silver Winner",
      month: "December 2024",
    },
    {
      name: "Rohit Kumar",
      program: "AI & Machine Learning",
      achievement: "Published research paper on NLP",
      reward: "₹25,000",
      company: "Hired by Paytm",
      image: "https://img.daisyui.com/images/profile/demo/batperson@192.webp",
      badge: "🥉 Bronze Winner",
      month: "December 2024",
    },
  ]

  const recentWinners = [
    { name: "Sneha Patel", amount: "₹75,000", achievement: "Outstanding Project Portfolio", month: "Nov 2024" },
    { name: "Vikash Sharma", amount: "₹60,000", achievement: "Best Innovation Award", month: "Nov 2024" },
    { name: "Anita Reddy", amount: "₹45,000", achievement: "Community Contribution", month: "Oct 2024" },
    { name: "Rahul Gupta", amount: "₹40,000", achievement: "Mentor's Choice Award", month: "Oct 2024" },
    { name: "Kavya Nair", amount: "₹55,000", achievement: "Technical Excellence", month: "Sep 2024" },
  ]

  const participationRules = [
    {
      title: "Enrollment Requirement",
      description: "Must be actively enrolled in any Inlighn Tech program",
      icon: CheckCircle,
    },
    {
      title: "Project Submission",
      description: "Submit at least 2 completed projects during the program",
      icon: Code2,
    },
    {
      title: "Community Engagement",
      description: "Actively participate in community discussions and help peers",
      icon: Users,
    },
    {
      title: "Attendance Record",
      description: "Maintain 90% attendance in live sessions and mentorship calls",
      icon: Calendar,
    },
    {
      title: "Assessment Scores",
      description: "Score minimum 85% in all module assessments",
      icon: Target,
    },
    {
      title: "Final Presentation",
      description: "Present capstone project to industry experts panel",
      icon: Trophy,
    },
  ]

  const rewardsAndPerks = [
    {
      category: "Monthly Rewards",
      icon: Crown,
      color: "from-yellow-500 to-orange-500",
      items: [
        { name: "Intern of the Month", value: "₹50,000 + Certificate", icon: Trophy },
        { name: "Runner-up Awards", value: "₹25,000 each", icon: Medal },
        { name: "Special Recognition", value: "₹10,000 + Goodies", icon: Star },
        { name: "Community Champion", value: "₹15,000 + Swag", icon: Heart },
      ],
    },
    {
      category: "Learning Perks",
      icon: BookOpen,
      color: "from-blue-500 to-purple-500",
      items: [
        { name: "Premium Course Access", value: "Lifetime access to all courses", icon: Zap },
        { name: "1-on-1 Mentorship", value: "Weekly sessions with experts", icon: Users },
        { name: "Industry Workshops", value: "Exclusive masterclasses", icon: Brain },
        { name: "Certification Fast-track", value: "Priority certification", icon: Award },
      ],
    },
    {
      category: "Career Benefits",
      icon: TrendingUp,
      color: "from-green-500 to-teal-500",
      items: [
        { name: "Job Placement Priority", value: "Fast-track to top companies", icon: Briefcase },
        { name: "Resume Building", value: "Professional portfolio creation", icon: FileText },
        { name: "Interview Preparation", value: "Mock interviews with experts", icon: MessageSquare },
        { name: "Salary Negotiation", value: "Expert guidance on offers", icon: DollarSign },
      ],
    },
    {
      category: "Exclusive Access",
      icon: Gem,
      color: "from-purple-500 to-pink-500",
      items: [
        { name: "Alumni Network", value: "Connect with 2500+ graduates", icon: Globe },
        { name: "Industry Events", value: "VIP access to tech conferences", icon: Calendar },
        { name: "Startup Opportunities", value: "Early access to startup roles", icon: Rocket },
        { name: "Freelance Projects", value: "High-paying project opportunities", icon: Coins },
      ],
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

  const getCategoryIcon = (category) => {
    const icons = {
      Development: Code2,
      "AI/ML": Brain,
      "Data Science": Database,
      Security: Shield,
      Mobile: Smartphone,
      Cloud: Globe,
    }
    return icons[category] || Code2
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-teal-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              What Makes Us{" "}
              <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                Special
              </span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover exclusive video lectures, epic opportunities, and amazing rewards that set Inlighn Tech apart
              from the rest
            </p>
          </div>

          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Sparkles
              className="absolute top-20 left-20 w-8 h-8 text-teal-400 opacity-30 animate-bounce"
              style={{ animationDelay: "0s" }}
            />
            <Trophy
              className="absolute top-40 right-32 w-6 h-6 text-yellow-400 opacity-30 animate-bounce"
              style={{ animationDelay: "1s" }}
            />
            <Gift
              className="absolute bottom-40 left-32 w-7 h-7 text-purple-500 opacity-30 animate-bounce"
              style={{ animationDelay: "2s" }}
            />
            <Crown
              className="absolute bottom-20 right-20 w-6 h-6 text-orange-500 opacity-30 animate-bounce"
              style={{ animationDelay: "3s" }}
            />
          </div>
        </div>
      </section>

      {/* Video Lectures Section */}
      <section id="video-lectures" className="pb-20 pt-8
       bg-gradient-to-tr from-teal-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible["video-lectures"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Exclusive{" "}
              <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                Video Lectures
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Learn from industry experts at top tech companies with our premium video content
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoLectures.map((video, index) => {
              const CategoryIcon = getCategoryIcon(video.category)
              return (
                <Card
                  key={video.id}
                  className={`group overflow-hidden bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-2xl ${
                    isVisible["video-lectures"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Video Thumbnail */}
                  <div className="relative overflow-hidden">
                    <img
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-black/50 text-white border-0">{video.duration}</Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge
                        variant="secondary"
                        className="bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300"
                      >
                        {video.level}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <CategoryIcon className="w-5 h-5 text-teal-600" />
                        <span className="text-sm font-medium text-teal-600 dark:text-teal-400">{video.category}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">{video.rating}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                      {video.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {video.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white">{video.instructor}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">{video.company}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-600 dark:text-gray-300">{video.views} views</div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="text-sm font-medium text-gray-900 dark:text-white mb-2">Topics Covered:</div>
                      <div className="flex flex-wrap gap-1">
                        {video.topics.slice(0, 2).map((topic, topicIndex) => (
                          <Badge
                            key={topicIndex}
                            variant="secondary"
                            className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                          >
                            {topic}
                          </Badge>
                        ))}
                        {video.topics.length > 2 && (
                          <Badge variant="secondary" className="text-xs">
                            +{video.topics.length - 2} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    <Button
                      className="w-full bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                      onClick={() => setActiveVideo(video.id)}
                    >
                      Watch Now
                      <Play className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Epic Opportunities Section */}
      <section
        id="opportunities"
        className="py-20 bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-gray-800 dark:to-gray-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible.opportunities ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Epic{" "}
              <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                Opportunities
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Incredible rewards and recognition await our top-performing interns
            </p>
          </div>

          {/* Interns of the Month */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
              🏆 Interns of the Month - December 2024
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {internsOfTheMonth.map((intern, index) => (
                <Card
                  key={index}
                  className={`relative overflow-hidden bg-white dark:bg-gray-800 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-2xl ${
                    index === 0
                      ? "ring-4 ring-yellow-400"
                      : index === 1
                        ? "ring-4 ring-gray-400"
                        : "ring-4 ring-orange-400"
                  }`}
                >
                  {/* Winner Badge */}
                  <div className="absolute -top-2 -right-2 z-10">
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl ${
                        index === 0
                          ? "bg-gradient-to-r from-yellow-400 to-orange-500"
                          : index === 1
                            ? "bg-gradient-to-r from-gray-400 to-gray-600"
                            : "bg-gradient-to-r from-orange-400 to-red-500"
                      }`}
                    >
                      {index === 0 ? "🏆" : index === 1 ? "🥈" : "🥉"}
                    </div>
                  </div>

                  <CardHeader className="text-center pb-4">
                    <img
                      src={intern.image || "/placeholder.svg"}
                      alt={intern.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-teal-200 dark:border-teal-700"
                    />
                    <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">{intern.name}</CardTitle>
                    <CardDescription className="text-teal-600 dark:text-teal-400 font-medium">
                      {intern.program}
                    </CardDescription>
                    <Badge className="bg-green-600 dark:bg-green-900 text-white border-0 mt-2">
                      {intern.badge}
                    </Badge>
                  </CardHeader>

                  <CardContent className="text-center">
                    <div className="mb-4">
                      <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{intern.reward}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300 mb-2">{intern.achievement}</div>
                      <div className="text-sm font-medium text-green-600 dark:text-green-400">{intern.company}</div>
                    </div>
                    <Badge
                      variant="secondary"
                      className="bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300"
                    >
                      {intern.month}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Recent Winners */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
              💰 Recent Winners & Rewards
            </h3>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recentWinners.map((winner, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 p-4 bg-gradient-to-r from-teal-50 to-emerald-50 dark:from-teal-900/20 dark:to-emerald-900/20 rounded-xl"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-full flex items-center justify-center">
                      <Coins className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 dark:text-white">{winner.name}</div>
                      <div className="text-lg font-bold text-green-600 dark:text-green-400">{winner.amount}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">{winner.achievement}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">{winner.month}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Total Rewards */}
          <div className="text-center">
            <Card className="bg-gradient-to-r from-teal-600 to-emerald-600 border-0 shadow-xl rounded-2xl">
              <CardContent className="p-8 text-white">
                <div className="flex items-center justify-center mb-4">
                  <PartyPopper className="w-12 h-12 mr-4" />
                  <div>
                    <div className="text-4xl font-bold">₹25+ Lakhs</div>
                    <div className="text-xl">Total Rewards Distributed</div>
                  </div>
                </div>
                <p className="text-teal-100 text-lg">
                  Over 500+ students have received cash rewards, recognition, and career opportunities!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How to Participate */}
      <section id="participation" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible.participation ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              How to{" "}
              <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                Participate
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Follow these simple rules to be eligible for amazing rewards and recognition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {participationRules.map((rule, index) => {
              const IconComponent = rule.icon
              return (
                <Card
                  key={index}
                  className={`group text-center border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white dark:bg-gray-800 rounded-2xl ${
                    isVisible.participation ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                      {rule.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {rule.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>

          <div className="text-center mt-12">
          <Link href="/programs">
            <Button
              size="lg"
              className="bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white px-12 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Start Your Journey
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button></Link>
          </div>
        </div>
      </section>

      {/* Perks and Rewards */}
      <section id="perks" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible.perks ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Perks &{" "}
              <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                Rewards
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Unlock incredible benefits and rewards as you progress through your learning journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {rewardsAndPerks.map((category, index) => {
              const CategoryIcon = category.icon
              return (
                <Card
                  key={index}
                  className={`overflow-hidden bg-white dark:bg-gray-900 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 rounded-2xl ${
                    isVisible.perks ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className={`h-2 bg-gradient-to-r ${category.color}`}></div>
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-4 mb-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center`}
                      >
                        <CategoryIcon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                        {category.category}
                      </CardTitle>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-4">
                      {category.items.map((item, itemIndex) => {
                        const ItemIcon = item.icon
                        return (
                          <div
                            key={itemIndex}
                            className="flex items-start space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                          >
                            <div className="w-8 h-8 bg-gradient-to-r from-teal-100 to-emerald-100 dark:from-teal-900 dark:to-emerald-900 rounded-lg flex items-center justify-center flex-shrink-0">
                              <ItemIcon className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                            </div>
                            <div>
                              <div className="font-medium text-gray-900 dark:text-white">{item.name}</div>
                              <div className="text-sm text-gray-600 dark:text-gray-300">{item.value}</div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Gamepad2 className="w-12 h-12 text-white mr-4" />
            <h3 className="text-3xl sm:text-4xl font-bold text-white">Ready to Win Big?</h3>
          </div>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Join Inlighn Tech today and start your journey towards amazing rewards, recognition, and career success!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/programs">
            <Button
              size="lg"
              className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Enroll Now & Start Winning
              <Trophy className="ml-2 w-5 h-5" />
            </Button></Link>
           
          </div>
        </div>
      </section>
    </div>
  )
}
