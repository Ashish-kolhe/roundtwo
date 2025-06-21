"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Code2,
  Database,
  Brain,
  Shield,
  Smartphone,
  Globe,
  Clock,
  Star,
  ArrowRight,
  Target,
  TrendingUp,
  Briefcase,
  CheckCircle,
  Play,
  Download,
  MessageSquare,
  ArrowLeft,
  MapPin,
  Linkedin,
  Twitter,
  Github,
} from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { notFound } from "next/navigation"

export default function ProgramDetailPage() {
  const params = useParams()
  const programId = params.id as string
  const [isVisible, setIsVisible] = useState({})
  const [activeTab, setActiveTab] = useState("overview")

  const programs = [
    {
      id: "1",
      title: "Full Stack Web Development",
      category: "development",
      description:
        "Master both frontend and backend development with modern technologies like React, Node.js, and MongoDB. Build scalable web applications from scratch.",
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
      skills: ["JavaScript", "React", "Node.js", "MongoDB", "AWS", "TypeScript", "Express", "PostgreSQL"],
      projects: 8,
      mentorship: "1-on-1 Weekly",
      certification: "Industry Recognized",
      placement: "95%",
      popular: true,
      curriculum: [
        {
          module: "Module 1: Frontend Fundamentals",
          duration: "4 weeks",
          topics: [
            "HTML5 & CSS3 Advanced Concepts",
            "JavaScript ES6+ Features",
            "DOM Manipulation & Events",
            "Responsive Design & Flexbox/Grid",
            "Version Control with Git",
          ],
        },
        {
          module: "Module 2: React Development",
          duration: "6 weeks",
          topics: [
            "React Components & JSX",
            "State Management & Hooks",
            "React Router & Navigation",
            "Context API & Redux",
            "Testing with Jest & React Testing Library",
          ],
        },
        {
          module: "Module 3: Backend Development",
          duration: "6 weeks",
          topics: [
            "Node.js & Express.js",
            "RESTful API Development",
            "Database Design & MongoDB",
            "Authentication & Authorization",
            "Error Handling & Validation",
          ],
        },
        {
          module: "Module 4: Advanced Topics",
          duration: "4 weeks",
          topics: [
            "GraphQL & Apollo",
            "Microservices Architecture",
            "Docker & Containerization",
            "AWS Deployment & CI/CD",
            "Performance Optimization",
          ],
        },
        {
          module: "Module 5: Capstone Project",
          duration: "4 weeks",
          topics: [
            "Project Planning & Architecture",
            "Full-Stack Application Development",
            "Testing & Quality Assurance",
            "Deployment & Monitoring",
            "Portfolio Presentation",
          ],
        },
      ],
      instructors: [
        {
          name: "Rajesh Kumar",
          role: "Senior Full Stack Developer",
          company: "Google",
          experience: "12 years",
          image: "https://img.daisyui.com/images/profile/demo/gordon@192.webp",
          bio: "Former Google engineer with expertise in React and Node.js. Led development of multiple high-scale applications.",
          linkedin: "#",
          twitter: "#",
          github: "#",
        },
        {
          name: "Priya Sharma",
          role: "Frontend Architect",
          company: "Microsoft",
          experience: "10 years",
          image: "https://img.daisyui.com/images/profile/demo/distracted2@192.webp",
          bio: "Frontend specialist with deep knowledge of React ecosystem and modern web technologies.",
          linkedin: "#",
          twitter: "#",
          github: "#",
        },
      ],
      testimonials: [
        {
          name: "Amit Patel",
          role: "Software Engineer",
          company: "Flipkart",
          image: "https://img.daisyui.com/images/profile/demo/wonderperson@192.webp",
          quote:
            "This program completely transformed my career. The hands-on approach and expert mentorship helped me land my dream job at Flipkart.",
          rating: 5,
        },
        {
          name: "Sneha Reddy",
          role: "Full Stack Developer",
          company: "Zomato",
          image: "https://img.daisyui.com/images/profile/demo/distracted1@192.webp",
          quote:
            "The curriculum is perfectly designed for beginners. I went from zero coding knowledge to building full-stack applications.",
          rating: 5,
        },
      ],
      pricing: {
        current: "₹49,999",
        original: "₹69,999",
        installments: "₹8,333/month for 6 months",
        discount: "30% Early Bird Discount",
      },
      highlights: [
        "Build 8+ real-world projects",
        "1-on-1 weekly mentorship sessions",
        "Industry-recognized certification",
        "Lifetime access to course materials",
        "Job placement assistance",
        "24/7 community support",
      ],
    },
    {
      id: "2",
      title: "Data Science & Analytics",
      category: "data-science",
      description:
        "Master data analysis, machine learning, and artificial intelligence with Python, TensorFlow, and real-world datasets. Build intelligent systems that solve complex problems.",
      duration: "8 months",
      level: "Intermediate to Advanced",
      rating: 4.8,
      students: 890,
      icon: Database,
      color: "from-green-500 to-teal-600",
      features: [
        "Python & R Programming",
        "Machine Learning Algorithms",
        "Deep Learning & Neural Networks",
        "Data Visualization",
        "Big Data Technologies",
        "AI Model Deployment",
      ],
      skills: ["Python", "TensorFlow", "Pandas", "Scikit-learn", "SQL", "Tableau", "AWS", "Docker"],
      projects: 10,
      mentorship: "1-on-1 Bi-weekly",
      certification: "Industry Recognized",
      placement: "92%",
      popular: false,
      curriculum: [
        {
          module: "Module 1: Python for Data Science",
          duration: "4 weeks",
          topics: [
            "Python Programming Fundamentals",
            "NumPy & Pandas for Data Manipulation",
            "Data Cleaning & Preprocessing",
            "Statistical Analysis with Python",
            "Jupyter Notebooks & Development Environment",
          ],
        },
        {
          module: "Module 2: Data Analysis & Visualization",
          duration: "6 weeks",
          topics: [
            "Exploratory Data Analysis (EDA)",
            "Data Visualization with Matplotlib & Seaborn",
            "Interactive Dashboards with Plotly",
            "Statistical Hypothesis Testing",
            "A/B Testing & Experimental Design",
          ],
        },
        {
          module: "Module 3: Machine Learning",
          duration: "8 weeks",
          topics: [
            "Supervised Learning Algorithms",
            "Unsupervised Learning & Clustering",
            "Model Selection & Evaluation",
            "Feature Engineering & Selection",
            "Ensemble Methods & Advanced Techniques",
          ],
        },
        {
          module: "Module 4: Deep Learning & AI",
          duration: "6 weeks",
          topics: [
            "Neural Networks & Deep Learning",
            "TensorFlow & Keras Framework",
            "Computer Vision with CNNs",
            "Natural Language Processing",
            "Generative AI & Large Language Models",
          ],
        },
        {
          module: "Module 5: Big Data & Deployment",
          duration: "4 weeks",
          topics: [
            "Big Data Technologies (Spark, Hadoop)",
            "Cloud Platforms (AWS, GCP)",
            "Model Deployment & MLOps",
            "Real-time Data Processing",
            "Capstone Project & Portfolio",
          ],
        },
      ],
      instructors: [
        {
          name: "Dr. Ananya Singh",
          role: "Senior Data Scientist",
          company: "Netflix",
          experience: "15 years",
          image: "https://img.daisyui.com/images/profile/demo/distracted2@192.webp",
          bio: "PhD in Machine Learning with expertise in recommendation systems and deep learning. Led AI initiatives at Netflix.",
          linkedin: "#",
          twitter: "#",
          github: "#",
        },
        {
          name: "Rohit Mehta",
          role: "AI Research Engineer",
          company: "OpenAI",
          experience: "8 years",
          image: "https://img.daisyui.com/images/profile/demo/gordon@192.webp",
          bio: "Specialist in NLP and generative AI. Contributed to major AI research projects and publications.",
          linkedin: "#",
          twitter: "#",
          github: "#",
        },
      ],
      testimonials: [
        {
          name: "Kavya Nair",
          role: "Data Scientist",
          company: "Swiggy",
          image: "/placeholder.svg?height=60&width=60",
          quote:
            "The hands-on approach with real datasets made all the difference. I'm now building ML models that impact millions of users.",
          rating: 5,
        },
        {
          name: "Arjun Kumar",
          role: "ML Engineer",
          company: "Ola",
          image: "https://img.daisyui.com/images/profile/demo/distracted1@192.webp",
          quote:
            "From zero knowledge in data science to deploying AI models in production. This program is comprehensive and practical.",
          rating: 5,
        },
      ],
      pricing: {
        current: "₹59,999",
        original: "₹79,999",
        installments: "₹7,500/month for 8 months",
        discount: "25% Early Bird Discount",
      },
      highlights: [
        "Work with 10+ real-world datasets",
        "Build and deploy ML models",
        "Industry-recognized certification",
        "Bi-weekly 1-on-1 mentorship",
        "Job placement assistance",
        "Access to premium datasets and tools",
      ],
    },
    {
      id: "5",
      title: "Mobile App Development",
      category: "mobile",
      description:
        "Create stunning mobile applications for iOS and Android using React Native and Flutter. Learn to build cross-platform apps that reach millions of users.",
      duration: "5 months",
      level: "Beginner to Advanced",
      rating: 4.7,
      students: 750,
      icon: Smartphone,
      color: "from-indigo-500 to-blue-600",
      features: [
        "React Native & Flutter",
        "iOS & Android Development",
        "Mobile UI/UX Design",
        "App Store Deployment",
        "Push Notifications",
        "Mobile Backend Integration",
      ],
      skills: ["React Native", "Flutter", "Dart", "JavaScript", "Firebase", "Redux", "API Integration", "App Store"],
      projects: 6,
      mentorship: "1-on-1 Weekly",
      certification: "Industry Recognized",
      placement: "88%",
      popular: false,
      curriculum: [
        {
          module: "Module 1: Mobile Development Fundamentals",
          duration: "3 weeks",
          topics: [
            "Mobile App Development Overview",
            "React Native Setup & Environment",
            "JavaScript ES6+ for Mobile",
            "Mobile UI Components & Navigation",
            "State Management in Mobile Apps",
          ],
        },
        {
          module: "Module 2: Advanced React Native",
          duration: "6 weeks",
          topics: [
            "Custom Components & Styling",
            "Navigation & Routing",
            "API Integration & HTTP Requests",
            "Local Storage & AsyncStorage",
            "Camera, GPS & Device Features",
          ],
        },
        {
          module: "Module 3: Flutter Development",
          duration: "6 weeks",
          topics: [
            "Dart Programming Language",
            "Flutter Widgets & Layouts",
            "State Management with Provider/Bloc",
            "Flutter Animations & Gestures",
            "Platform-specific Code Integration",
          ],
        },
        {
          module: "Module 4: Backend & Services",
          duration: "4 weeks",
          topics: [
            "Firebase Integration",
            "Push Notifications",
            "Authentication & User Management",
            "Real-time Database & Cloud Firestore",
            "Payment Gateway Integration",
          ],
        },
        {
          module: "Module 5: Deployment & Publishing",
          duration: "3 weeks",
          topics: [
            "App Store Guidelines & Policies",
            "iOS App Store Submission",
            "Google Play Store Publishing",
            "App Performance Optimization",
            "Analytics & Crash Reporting",
          ],
        },
      ],
      instructors: [
        {
          name: "Vikram Patel",
          role: "Senior Mobile Developer",
          company: "Paytm",
          experience: "11 years",
          image: "/placeholder.svg?height=100&width=100",
          bio: "Expert in React Native and Flutter with multiple apps published on both app stores. Led mobile teams at Paytm.",
          linkedin: "#",
          twitter: "#",
          github: "#",
        },
        {
          name: "Shreya Gupta",
          role: "Mobile App Architect",
          company: "PhonePe",
          experience: "9 years",
          image: "https://img.daisyui.com/images/profile/demo/distracted2@192.webp",
          bio: "Specialist in cross-platform development and mobile architecture. Built apps used by millions of users.",
          linkedin: "#",
          twitter: "#",
          github: "#",
        },
      ],
      testimonials: [
        {
          name: "Rahul Sharma",
          role: "Mobile Developer",
          company: "Byju's",
          image: "/placeholder.svg?height=60&width=60",
          quote:
            "Learned both React Native and Flutter in one program. Now I can build apps for any platform with confidence.",
          rating: 5,
        },
        {
          name: "Pooja Agarwal",
          role: "App Developer",
          company: "Zomato",
          image: "/placeholder.svg?height=60&width=60",
          quote: "The hands-on projects and real app deployment experience prepared me perfectly for the industry.",
          rating: 4,
        },
      ],
      pricing: {
        current: "₹44,999",
        original: "₹59,999",
        installments: "₹9,000/month for 5 months",
        discount: "25% Early Bird Discount",
      },
      highlights: [
        "Build 6+ mobile applications",
        "Learn both React Native & Flutter",
        "Publish apps to app stores",
        "Weekly 1-on-1 mentorship",
        "Job placement assistance",
        "Lifetime access to course updates",
      ],
    },
    {
      id: "6",
      title: "DevOps & Cloud Computing",
      category: "devops",
      description:
        "Master modern DevOps practices and cloud technologies. Learn Docker, Kubernetes, AWS, and CI/CD pipelines to automate and scale applications efficiently.",
      duration: "4 months",
      level: "Intermediate to Advanced",
      rating: 4.9,
      students: 650,
      icon: Globe,
      color: "from-cyan-500 to-blue-600",
      features: [
        "Docker & Kubernetes",
        "AWS Cloud Services",
        "CI/CD Pipelines",
        "Infrastructure as Code",
        "Monitoring & Logging",
        "Security Best Practices",
      ],
      skills: ["Docker", "Kubernetes", "AWS", "Jenkins", "Terraform", "Ansible", "Git", "Linux"],
      projects: 5,
      mentorship: "1-on-1 Weekly",
      certification: "AWS Certified",
      placement: "94%",
      popular: false,
      curriculum: [
        {
          module: "Module 1: DevOps Fundamentals",
          duration: "3 weeks",
          topics: [
            "DevOps Culture & Practices",
            "Linux System Administration",
            "Version Control with Git",
            "Shell Scripting & Automation",
            "Networking & Security Basics",
          ],
        },
        {
          module: "Module 2: Containerization",
          duration: "4 weeks",
          topics: [
            "Docker Fundamentals",
            "Container Orchestration",
            "Kubernetes Architecture",
            "Pod Management & Services",
            "Helm Charts & Package Management",
          ],
        },
        {
          module: "Module 3: Cloud Platforms",
          duration: "5 weeks",
          topics: [
            "AWS Core Services",
            "EC2, S3, RDS, and VPC",
            "Auto Scaling & Load Balancing",
            "AWS Lambda & Serverless",
            "Cloud Security & IAM",
          ],
        },
        {
          module: "Module 4: CI/CD & Automation",
          duration: "4 weeks",
          topics: [
            "Jenkins & Build Automation",
            "GitLab CI/CD Pipelines",
            "Infrastructure as Code (Terraform)",
            "Configuration Management (Ansible)",
            "Automated Testing & Deployment",
          ],
        },
      ],
      instructors: [
        {
          name: "Suresh Reddy",
          role: "DevOps Architect",
          company: "Amazon",
          experience: "14 years",
          image: "/placeholder.svg?height=100&width=100",
          bio: "AWS certified architect with extensive experience in large-scale cloud deployments and DevOps transformations.",
          linkedin: "#",
          twitter: "#",
          github: "#",
        },
      ],
      testimonials: [
        {
          name: "Deepak Singh",
          role: "DevOps Engineer",
          company: "Razorpay",
          image: "/placeholder.svg?height=60&width=60",
          quote:
            "Transformed from a developer to a DevOps engineer. The hands-on AWS projects were incredibly valuable.",
          rating: 5,
        },
      ],
      pricing: {
        current: "₹39,999",
        original: "₹54,999",
        installments: "₹10,000/month for 4 months",
        discount: "27% Early Bird Discount",
      },
      highlights: [
        "AWS certification preparation",
        "Build production-ready CI/CD pipelines",
        "Hands-on with Kubernetes clusters",
        "Weekly 1-on-1 mentorship",
        "Job placement assistance",
        "Real-world DevOps projects",
      ],
    },
    {
      id: "3",
      title: "UI/UX Design",
      category: "design",
      description:
        "Create beautiful and user-friendly digital experiences. Master design thinking, prototyping, and modern design tools to build interfaces that users love.",
      duration: "4 months",
      level: "Beginner to Advanced",
      rating: 4.8,
      students: 920,
      icon: Star,
      color: "from-pink-500 to-rose-600",
      features: [
        "Design Thinking Process",
        "Figma & Adobe Creative Suite",
        "User Research & Testing",
        "Prototyping & Wireframing",
        "Design Systems",
        "Portfolio Development",
      ],
      skills: ["Figma", "Adobe XD", "Sketch", "Photoshop", "Illustrator", "Principle", "InVision", "Miro"],
      projects: 7,
      mentorship: "1-on-1 Weekly",
      certification: "Industry Recognized",
      placement: "85%",
      popular: false,
      curriculum: [
        {
          module: "Module 1: Design Fundamentals",
          duration: "3 weeks",
          topics: [
            "Design Principles & Theory",
            "Color Theory & Typography",
            "Layout & Composition",
            "Visual Hierarchy",
            "Design Tools Introduction",
          ],
        },
        {
          module: "Module 2: User Experience Design",
          duration: "5 weeks",
          topics: [
            "Design Thinking Process",
            "User Research Methods",
            "Persona Development",
            "User Journey Mapping",
            "Information Architecture",
          ],
        },
        {
          module: "Module 3: User Interface Design",
          duration: "5 weeks",
          topics: [
            "Wireframing & Prototyping",
            "Interface Design Patterns",
            "Mobile & Web UI Design",
            "Micro-interactions & Animations",
            "Design Systems & Style Guides",
          ],
        },
        {
          module: "Module 4: Advanced Design & Portfolio",
          duration: "3 weeks",
          topics: [
            "Advanced Figma Techniques",
            "Design Handoff & Collaboration",
            "Portfolio Development",
            "Case Study Creation",
            "Design Presentation Skills",
          ],
        },
      ],
      instructors: [
        {
          name: "Meera Joshi",
          role: "Senior UX Designer",
          company: "Airbnb",
          experience: "10 years",
          image: "/placeholder.svg?height=100&width=100",
          bio: "Award-winning designer with expertise in user-centered design. Led design teams at Airbnb and Uber.",
          linkedin: "#",
          twitter: "#",
          github: "#",
        },
      ],
      testimonials: [
        {
          name: "Ravi Kumar",
          role: "UI/UX Designer",
          company: "Myntra",
          image: "/placeholder.svg?height=60&width=60",
          quote: "The portfolio guidance and real client projects helped me land my dream design job at Myntra.",
          rating: 5,
        },
      ],
      pricing: {
        current: "₹34,999",
        original: "₹49,999",
        installments: "₹8,750/month for 4 months",
        discount: "30% Early Bird Discount",
      },
      highlights: [
        "Build a professional design portfolio",
        "Work on real client projects",
        "Master industry-standard tools",
        "Weekly 1-on-1 design critiques",
        "Job placement assistance",
        "Lifetime design community access",
      ],
    },
    {
      id: "4",
      title: "Cybersecurity",
      category: "security",
      description:
        "Protect digital assets and learn ethical hacking techniques. Master cybersecurity fundamentals, penetration testing, and security analysis to defend against cyber threats.",
      duration: "6 months",
      level: "Intermediate to Advanced",
      rating: 4.9,
      students: 480,
      icon: Shield,
      color: "from-red-500 to-orange-600",
      features: [
        "Ethical Hacking",
        "Penetration Testing",
        "Network Security",
        "Incident Response",
        "Security Analysis",
        "Compliance & Governance",
      ],
      skills: ["Kali Linux", "Wireshark", "Metasploit", "Nmap", "Burp Suite", "Python", "CISSP", "CEH"],
      projects: 8,
      mentorship: "1-on-1 Bi-weekly",
      certification: "CEH Certified",
      placement: "96%",
      popular: false,
      curriculum: [
        {
          module: "Module 1: Security Fundamentals",
          duration: "4 weeks",
          topics: [
            "Cybersecurity Overview",
            "Network Security Basics",
            "Cryptography & Encryption",
            "Security Policies & Procedures",
            "Risk Assessment & Management",
          ],
        },
        {
          module: "Module 2: Ethical Hacking",
          duration: "6 weeks",
          topics: [
            "Penetration Testing Methodology",
            "Reconnaissance & Information Gathering",
            "Vulnerability Assessment",
            "Exploitation Techniques",
            "Post-Exploitation & Reporting",
          ],
        },
        {
          module: "Module 3: Advanced Security",
          duration: "6 weeks",
          topics: [
            "Web Application Security",
            "Mobile Security Testing",
            "Wireless Network Security",
            "Social Engineering",
            "Malware Analysis",
          ],
        },
        {
          module: "Module 4: Security Operations",
          duration: "4 weeks",
          topics: [
            "Incident Response & Forensics",
            "Security Monitoring & SIEM",
            "Compliance & Governance",
            "Security Architecture",
            "Career Development & Certification Prep",
          ],
        },
      ],
      instructors: [
        {
          name: "Colonel Rajesh Singh",
          role: "Cybersecurity Expert",
          company: "Indian Army (Retd.)",
          experience: "20 years",
          image: "/placeholder.svg?height=100&width=100",
          bio: "Former military cybersecurity officer with extensive experience in national security and ethical hacking.",
          linkedin: "#",
          twitter: "#",
          github: "#",
        },
      ],
      testimonials: [
        {
          name: "Ankit Verma",
          role: "Security Analyst",
          company: "TCS",
          image: "/placeholder.svg?height=60&width=60",
          quote: "The hands-on penetration testing labs prepared me perfectly for real-world security challenges.",
          rating: 5,
        },
      ],
      pricing: {
        current: "₹54,999",
        original: "₹74,999",
        installments: "₹9,167/month for 6 months",
        discount: "27% Early Bird Discount",
      },
      highlights: [
        "CEH certification preparation",
        "Hands-on penetration testing labs",
        "Real-world security scenarios",
        "Bi-weekly expert mentorship",
        "High-demand career placement",
        "Access to premium security tools",
      ],
    },

    // Add other programs here with similar structure...
  ]

  const program = programs.find((p) => p.id === programId)

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

  if (!program) {
    notFound()
  }

  const IconComponent = program.icon

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-teal-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-8">
            <Link
              href="/programs"
              className="inline-flex items-center space-x-2 text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Programs</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Program Info */}
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div
                  className={`w-20 h-20 bg-gradient-to-r ${program.color} rounded-2xl flex items-center justify-center shadow-lg`}
                >
                  <IconComponent className="w-10 h-10 text-white" />
                </div>
                <div>
                  {program.popular && (
                    <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 mb-2">
                      🔥 Most Popular
                    </Badge>
                  )}
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="font-medium text-gray-900 dark:text-white">{program.rating}</span>
                    </div>
                    <span className="text-gray-500 dark:text-gray-400">•</span>
                    <span className="text-gray-600 dark:text-gray-300">{program.students} students enrolled</span>
                  </div>
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">{program.title}</h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">{program.description}</p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-teal-600" />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Duration</div>
                    <div className="text-gray-600 dark:text-gray-300">{program.duration}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Target className="w-6 h-6 text-teal-600" />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Level</div>
                    <div className="text-gray-600 dark:text-gray-300">{program.level}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Briefcase className="w-6 h-6 text-teal-600" />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Projects</div>
                    <div className="text-gray-600 dark:text-gray-300">{program.projects} hands-on projects</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-6 h-6 text-teal-600" />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Placement</div>
                    <div className="text-gray-600 dark:text-gray-300">{program.placement} success rate</div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Enroll Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white dark:border-teal-400 dark:text-teal-400 dark:hover:bg-teal-600 dark:hover:text-white px-8 py-4 text-lg rounded-full"
                >
                  Download Brochure
                  <Download className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Program Highlights */}
            <div>
              <Card className="bg-white dark:bg-gray-800 shadow-xl border-0 rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">Program Highlights</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {program.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Pricing Card */}
                  <div className="mt-8 p-6 bg-gradient-to-r from-teal-50 to-emerald-50 dark:from-teal-900/20 dark:to-emerald-900/20 rounded-xl">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        {program.pricing.current}
                      </div>
                      <div className="text-lg text-gray-500 dark:text-gray-400 line-through mb-2">
                        {program.pricing.original}
                      </div>
                      <Badge className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 border-0 mb-4">
                        {program.pricing.discount}
                      </Badge>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        Or pay in installments: {program.pricing.installments}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-12">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
              <TabsTrigger value="instructors">Instructors</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-12">
              {/* Skills You'll Learn */}
              <div id="skills">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Skills You'll Master</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {program.skills.map((skill, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-r from-teal-50 to-emerald-50 dark:from-teal-900/20 dark:to-emerald-900/20 p-4 rounded-xl text-center"
                    >
                      <div className="font-medium text-gray-900 dark:text-white">{skill}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* What You'll Build */}
              <div id="projects">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">What You'll Build</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    {
                      title: "E-commerce Platform",
                      description: "Full-featured online store with payment integration",
                      tech: ["React", "Node.js", "MongoDB"],
                    },
                    {
                      title: "Social Media Dashboard",
                      description: "Real-time analytics and content management system",
                      tech: ["Next.js", "GraphQL", "PostgreSQL"],
                    },
                    {
                      title: "Task Management App",
                      description: "Collaborative project management tool",
                      tech: ["React", "Express", "Socket.io"],
                    },
                    {
                      title: "Portfolio Website",
                      description: "Professional portfolio with CMS integration",
                      tech: ["Next.js", "Tailwind", "Strapi"],
                    },
                  ].map((project, index) => (
                    <Card key={index} className="bg-white dark:bg-gray-800 border-0 shadow-lg rounded-2xl">
                      <CardHeader>
                        <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-gray-600 dark:text-gray-300">
                          {project.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="secondary"
                              className="bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Curriculum Tab */}
            <TabsContent value="curriculum">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Course Curriculum</h3>
                <Accordion type="single" collapsible className="space-y-4">
                  {program.curriculum.map((module, index) => (
                    <AccordionItem
                      key={index}
                      value={`module-${index}`}
                      className="border border-gray-200 dark:border-gray-700 rounded-xl px-6 bg-white dark:bg-gray-800"
                    >
                      <AccordionTrigger className="text-left font-semibold text-gray-900 dark:text-white hover:text-teal-600 dark:hover:text-teal-400 py-6">
                        <div className="flex items-center justify-between w-full mr-4">
                          <span>{module.module}</span>
                          <Badge
                            variant="secondary"
                            className="bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300"
                          >
                            {module.duration}
                          </Badge>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pb-6">
                        <div className="space-y-3">
                          {module.topics.map((topic, topicIndex) => (
                            <div key={topicIndex} className="flex items-center space-x-3">
                              <Play className="w-4 h-4 text-teal-600 flex-shrink-0" />
                              <span className="text-gray-700 dark:text-gray-300">{topic}</span>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </TabsContent>

            {/* Instructors Tab */}
            <TabsContent value="instructors">
              <div className="space-y-8">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Meet Your Instructors</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {program.instructors.map((instructor, index) => (
                    <Card key={index} className="bg-white dark:bg-gray-800 border-0 shadow-lg rounded-2xl">
                      <CardHeader className="text-center">
                        <img
                          src={instructor.image || "/placeholder.svg"}
                          alt={instructor.name}
                          className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-teal-200 dark:border-teal-700"
                        />
                        <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                          {instructor.name}
                        </CardTitle>
                        <CardDescription className="text-teal-600 dark:text-teal-400 font-medium">
                          {instructor.role}
                        </CardDescription>
                        <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-300">
                          <MapPin className="w-4 h-4" />
                          <span>{instructor.company}</span>
                          <span>•</span>
                          <span>{instructor.experience}</span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 dark:text-gray-300 text-center mb-6">{instructor.bio}</p>
                        <div className="flex justify-center space-x-4">
                          <a
                            href={instructor.linkedin}
                            className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                          >
                            <Linkedin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                          </a>
                          <a
                            href={instructor.twitter}
                            className="w-10 h-10 bg-sky-100 dark:bg-sky-900 rounded-full flex items-center justify-center hover:bg-sky-200 dark:hover:bg-sky-800 transition-colors"
                          >
                            <Twitter className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                          </a>
                          <a
                            href={instructor.github}
                            className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                          >
                            <Github className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                          </a>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Reviews Tab */}
            <TabsContent value="reviews">
              <div className="space-y-8">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Student Reviews</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {program.testimonials.map((testimonial, index) => (
                    <Card key={index} className="bg-white dark:bg-gray-800 border-0 shadow-lg rounded-2xl">
                      <CardContent className="p-8">
                        <div className="flex items-center space-x-4 mb-6">
                          <img
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            className="w-16 h-16 rounded-full border-2 border-teal-200 dark:border-teal-700"
                          />
                          <div>
                            <div className="font-semibold text-gray-900 dark:text-white text-lg">
                              {testimonial.name}
                            </div>
                            <div className="text-teal-600 dark:text-teal-400 font-medium">{testimonial.role}</div>
                            <div className="text-gray-500 dark:text-gray-400 text-sm">{testimonial.company}</div>
                          </div>
                        </div>
                        <div className="flex items-center mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <blockquote className="text-gray-700 dark:text-gray-300 italic leading-relaxed">
                          "{testimonial.quote}"
                        </blockquote>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to Start Your Journey?</h3>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Join {program.students} students who are already transforming their careers with this program
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Enroll Now - {program.pricing.current}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 text-lg rounded-full font-semibold"
            >
              Talk to Counselor
              <MessageSquare className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
