"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  CheckCircle,
  XCircle,
  Award,
  Calendar,
  User,
  BookOpen,
  Star,
  Download,
  Share2,
  Shield,
  Verified,
  Clock,
  Building,
  GraduationCap,
  Trophy,
  Sparkles,
  FileText,
  QrCode,
  Copy,
  ExternalLink,
  Loader2,
} from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function VerifyPage() {
  const [internId, setInternId] = useState("")
  const [isSearching, setIsSearching] = useState(false)
  const [searchResult, setSearchResult] = useState(null)
  const [searchError, setSearchError] = useState("")
  const [isVisible, setIsVisible] = useState({})
  const [recentVerifications, setRecentVerifications] = useState([])

  // Sample certificate data
  const sampleCertificates = {
    INT2024001: {
      internId: "INT2024001",
      studentName: "Arjun Mehta",
      program: "Full Stack Web Development",
      issueDate: "2024-12-15",
      completionDate: "2024-12-10",
      duration: "6 months",
      grade: "A+",
      gpa: "9.2/10",
      status: "valid",
      certificateNumber: "CERT-FS-2024-001",
      skills: ["React.js", "Node.js", "MongoDB", "AWS", "JavaScript", "TypeScript"],
      projects: ["E-commerce Platform", "Social Media Dashboard", "Task Management App", "Portfolio Website"],
      mentor: "Rajesh Kumar",
      mentorCompany: "Google",
      achievements: ["Best Project Award", "Top Performer", "Community Champion"],
      verificationUrl: "https://inlighntech.com/verify/INT2024001",
      qrCode: "/placeholder.svg?height=150&width=150",
      digitalSignature: "Valid",
      blockchain: "Verified on Ethereum",
    },
    INT2024002: {
      internId: "INT2024002",
      studentName: "Priya Singh",
      program: "Data Science & Analytics",
      issueDate: "2024-11-28",
      completionDate: "2024-11-25",
      duration: "5 months",
      grade: "A",
      gpa: "8.8/10",
      status: "valid",
      certificateNumber: "CERT-DS-2024-002",
      skills: ["Python", "Pandas", "Scikit-learn", "Tableau", "SQL", "Machine Learning"],
      projects: ["Customer Segmentation Analysis", "Predictive Sales Model", "Data Visualization Dashboard"],
      mentor: "Dr. Priya Sharma",
      mentorCompany: "Microsoft",
      achievements: ["Data Science Excellence", "Innovation Award"],
      verificationUrl: "https://inlighntech.com/verify/INT2024002",
      qrCode: "/placeholder.svg?height=150&width=150",
      digitalSignature: "Valid",
      blockchain: "Verified on Ethereum",
    },
    INT2024003: {
      internId: "INT2024003",
      studentName: "Rohit Kumar",
      program: "AI & Machine Learning",
      issueDate: "2024-10-20",
      completionDate: "2024-10-15",
      duration: "6 months",
      grade: "A+",
      gpa: "9.5/10",
      status: "valid",
      certificateNumber: "CERT-AI-2024-003",
      skills: ["Python", "TensorFlow", "PyTorch", "OpenCV", "NLP", "Deep Learning"],
      projects: ["Image Recognition System", "Chatbot with NLP", "Recommendation Engine", "Computer Vision App"],
      mentor: "Dr. Amit Patel",
      mentorCompany: "Netflix",
      achievements: ["AI Innovation Award", "Research Publication", "Top Graduate"],
      verificationUrl: "https://inlighntech.com/verify/INT2024003",
      qrCode: "/placeholder.svg?height=150&width=150",
      digitalSignature: "Valid",
      blockchain: "Verified on Ethereum",
    },
  }

  const recentVerificationsData = [
    {
      internId: "INT2024001",
      studentName: "Arjun Mehta",
      program: "Full Stack Development",
      verifiedAt: "2 hours ago",
    },
    { internId: "INT2024005", studentName: "Sneha Patel", program: "Cybersecurity", verifiedAt: "5 hours ago" },
    { internId: "INT2024003", studentName: "Rohit Kumar", program: "AI & Machine Learning", verifiedAt: "1 day ago" },
    { internId: "INT2024007", studentName: "Kavya Nair", program: "Mobile Development", verifiedAt: "2 days ago" },
    { internId: "INT2024002", studentName: "Priya Singh", program: "Data Science", verifiedAt: "3 days ago" },
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

    setRecentVerifications(recentVerificationsData)

    return () => observer.disconnect()
  }, [])

  const handleSearch = async () => {
    if (!internId.trim()) {
      setSearchError("Please enter an Intern ID")
      return
    }

    setIsSearching(true)
    setSearchError("")
    setSearchResult(null)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    const certificate = sampleCertificates[internId.toUpperCase()]

    if (certificate) {
      setSearchResult(certificate)
      // Add to recent verifications
      const newVerification = {
        internId: certificate.internId,
        studentName: certificate.studentName,
        program: certificate.program,
        verifiedAt: "Just now",
      }
      setRecentVerifications((prev) => [newVerification, ...prev.slice(0, 4)])
    } else {
      setSearchError("Certificate not found. Please check the Intern ID and try again.")
    }

    setIsSearching(false)
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    // You could add a toast notification here
  }

  const downloadCertificate = () => {
    // Simulate certificate download
    console.log("Downloading certificate...")
  }

  const shareCertificate = () => {
    if (navigator.share && searchResult) {
      navigator.share({
        title: `${searchResult.studentName}'s Certificate`,
        text: `Verify ${searchResult.studentName}'s ${searchResult.program} certificate from Inlighn Tech`,
        url: searchResult.verificationUrl,
      })
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-teal-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
                Certificate{" "}
                <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                  Verification
                </span>
              </h1>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Verify the authenticity of Inlighn Tech certificates using the unique Intern ID. Our certificates are
              blockchain-verified and tamper-proof.
            </p>
          </div>

          {/* Search Section */}
          <div className="max-w-2xl mx-auto">
            <Card className="bg-white dark:bg-gray-800 shadow-xl border-0 rounded-2xl">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white flex items-center justify-center">
                  <Search className="w-6 h-6 mr-2" />
                  Enter Intern ID
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Enter the Intern ID found on the certificate (e.g., INT2024001)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <Input
                      type="text"
                      placeholder="Enter Intern ID (e.g., INT2024001)"
                      value={internId}
                      onChange={(e) => setInternId(e.target.value)}
                      onKeyPress={handleKeyPress}
                      className="text-sm py-3 px-4 rounded-xl"
                      disabled={isSearching}
                    />
                  </div>
                  <Button
                    onClick={handleSearch}
                    disabled={isSearching}
                    size="lg"
                    className="bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSearching ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Verifying...
                      </>
                    ) : (
                      <>
                        <Search className="w-5 h-5 mr-2" />
                        Verify
                      </>
                    )}
                  </Button>
                </div>

                {searchError && (
                  <Alert className="mt-4 border-red-200 bg-red-50 dark:bg-red-900/20 dark:border-red-800">
                    <XCircle className="h-4 w-4 text-red-600" />
                    <AlertDescription className="text-red-700 dark:text-red-400">{searchError}</AlertDescription>
                  </Alert>
                )}
              </CardContent>
            </Card>

            {/* Sample IDs for testing */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Try these sample Intern IDs:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {Object.keys(sampleCertificates).map((id) => (
                  <Button key={id} variant="outline" size="sm" onClick={() => setInternId(id)} className="text-xs">
                    {id}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Results */}
      {searchResult && (
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Verification Status */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-3 bg-green-100 dark:bg-green-900/20 px-6 py-3 rounded-full">
                <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                <span className="text-xl font-bold text-green-700 dark:text-green-300">Certificate Verified</span>
                <Verified className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
            </div>

            {/* Certificate Details */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Certificate Info */}
              <div className="lg:col-span-2">
                <Card className="bg-white dark:bg-gray-800 shadow-xl border-0 rounded-2xl overflow-hidden">
                  {/* Certificate Header */}
                  <div className="bg-gradient-to-r from-teal-600 to-emerald-600 p-6 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-3xl font-bold mb-2">{searchResult.studentName}</h2>
                        <p className="text-teal-100 text-lg">{searchResult.program}</p>
                      </div>
                      <div className="text-right">
                        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-2">
                          <Award className="w-8 h-8 text-white" />
                        </div>
                        <Badge className="bg-white/20 text-white border-0">Grade: {searchResult.grade}</Badge>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    {/* Basic Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <User className="w-5 h-5 text-teal-600" />
                          <div>
                            <div className="font-medium text-gray-900 dark:text-white">Intern ID</div>
                            <div className="text-gray-600 dark:text-gray-300">{searchResult.internId}</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <FileText className="w-5 h-5 text-teal-600" />
                          <div>
                            <div className="font-medium text-gray-900 dark:text-white">Certificate Number</div>
                            <div className="text-gray-600 dark:text-gray-300">{searchResult.certificateNumber}</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Calendar className="w-5 h-5 text-teal-600" />
                          <div>
                            <div className="font-medium text-gray-900 dark:text-white">Issue Date</div>
                            <div className="text-gray-600 dark:text-gray-300">
                              {new Date(searchResult.issueDate).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <Clock className="w-5 h-5 text-teal-600" />
                          <div>
                            <div className="font-medium text-gray-900 dark:text-white">Duration</div>
                            <div className="text-gray-600 dark:text-gray-300">{searchResult.duration}</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Star className="w-5 h-5 text-teal-600" />
                          <div>
                            <div className="font-medium text-gray-900 dark:text-white">GPA</div>
                            <div className="text-gray-600 dark:text-gray-300">{searchResult.gpa}</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Building className="w-5 h-5 text-teal-600" />
                          <div>
                            <div className="font-medium text-gray-900 dark:text-white">Mentor</div>
                            <div className="text-gray-600 dark:text-gray-300">
                              {searchResult.mentor} ({searchResult.mentorCompany})
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="mb-8">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                        <BookOpen className="w-5 h-5 mr-2" />
                        Skills Acquired
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {searchResult.skills.map((skill, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Projects */}
                    <div className="mb-8">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                        <GraduationCap className="w-5 h-5 mr-2" />
                        Projects Completed
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {searchResult.projects.map((project, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                          >
                            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300">{project}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                        <Trophy className="w-5 h-5 mr-2" />
                        Achievements
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {searchResult.achievements.map((achievement, index) => (
                          <Badge
                            key={index}
                            className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0"
                          >
                            <Sparkles className="w-3 h-3 mr-1" />
                            {achievement}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Verification Details & Actions */}
              <div className="space-y-6">
                {/* Verification Status */}
                <Card className="bg-white dark:bg-gray-800 shadow-lg border-0 rounded-2xl">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                      <Shield className="w-5 h-5 mr-2" />
                      Verification Status
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                        <span className="text-gray-700 dark:text-gray-300">Certificate Status</span>
                        <Badge className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 border-0">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Valid
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <span className="text-gray-700 dark:text-gray-300">Digital Signature</span>
                        <Badge className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 border-0">
                          <Verified className="w-3 h-3 mr-1" />
                          Verified
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                        <span className="text-gray-700 dark:text-gray-300">Blockchain</span>
                        <Badge className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 border-0">
                          <Shield className="w-3 h-3 mr-1" />
                          Secured
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* QR Code */}
                <Card className="bg-white dark:bg-gray-800 shadow-lg border-0 rounded-2xl">
                  <CardHeader className="pb-4 text-center">
                    <CardTitle className="text-xl font-bold text-gray-900 dark:text-white flex items-center justify-center">
                      <QrCode className="w-5 h-5 mr-2" />
                      QR Code
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <img
                      src={searchResult.qrCode || "/placeholder.svg"}
                      alt="Certificate QR Code"
                      className="w-32 h-32 mx-auto mb-4 border-2 border-gray-200 dark:border-gray-700 rounded-lg"
                    />
                    <p className="text-sm text-gray-600 dark:text-gray-400">Scan to verify certificate</p>
                  </CardContent>
                </Card>

                {/* Actions */}
                <Card className="bg-white dark:bg-gray-800 shadow-lg border-0 rounded-2xl">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">Actions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <Button
                        onClick={downloadCertificate}
                        className="w-full bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white rounded-lg"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download Certificate
                      </Button>
                      <Button
                        onClick={shareCertificate}
                        variant="outline"
                        className="w-full border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white dark:border-teal-400 dark:text-teal-400 dark:hover:bg-teal-600 dark:hover:text-white rounded-lg"
                      >
                        <Share2 className="w-4 h-4 mr-2" />
                        Share Certificate
                      </Button>
                      <Button
                        onClick={() => copyToClipboard(searchResult.verificationUrl)}
                        variant="outline"
                        className="w-full rounded-lg"
                      >
                        <Copy className="w-4 h-4 mr-2" />
                        Copy Verification URL
                      </Button>
                      <Button
                        onClick={() => window.open(searchResult.verificationUrl, "_blank")}
                        variant="outline"
                        className="w-full rounded-lg"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Public Profile
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Recent Verifications */}
      <section id="recent-verifications" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-12 transition-all duration-1000 ${
              isVisible["recent-verifications"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Recent{" "}
              <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                Verifications
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Latest certificate verifications from our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentVerifications.map((verification, index) => (
              <Card
                key={index}
                className={`bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 rounded-2xl ${
                  isVisible["recent-verifications"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge
                      variant="secondary"
                      className="bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300"
                    >
                      {verification.internId}
                    </Badge>
                    <div className="flex items-center space-x-1 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      <span className="text-sm">Verified</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{verification.studentName}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">{verification.program}</p>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Clock className="w-4 h-4 mr-1" />
                    {verification.verifiedAt}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible["how-it-works"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              How{" "}
              <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                Verification Works
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our certificates use advanced security features to ensure authenticity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Enter Intern ID",
                description: "Input the unique Intern ID found on the certificate",
                icon: Search,
                color: "from-blue-500 to-purple-600",
              },
              {
                step: "2",
                title: "Database Lookup",
                description: "Our system searches the secure certificate database",
                icon: Shield,
                color: "from-green-500 to-teal-600",
              },
              {
                step: "3",
                title: "Blockchain Verification",
                description: "Certificate authenticity is verified on blockchain",
                icon: Verified,
                color: "from-purple-500 to-pink-600",
              },
              {
                step: "4",
                title: "Display Results",
                description: "Complete certificate details are displayed securely",
                icon: CheckCircle,
                color: "from-orange-500 to-red-600",
              },
            ].map((step, index) => {
              const IconComponent = step.icon
              return (
                <Card
                  key={index}
                  className={`text-center border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white dark:bg-gray-800 rounded-2xl ${
                    isVisible["how-it-works"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <CardHeader className="pb-4">
                    <div className="relative mb-4">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mx-auto shadow-lg`}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full flex items-center justify-center text-sm font-bold">
                        {step.step}
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">{step.title}</CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {step.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            
            <h3 className="text-3xl sm:text-4xl font-bold text-white">Secure & Tamper-Proof</h3>
          </div>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Our certificates use blockchain technology, digital signatures, and advanced encryption to ensure complete
            authenticity and prevent fraud.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            <div>
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Blockchain Secured</h4>
              <p className="text-teal-100">
                Certificates are recorded on Ethereum blockchain for immutable verification
              </p>
            </div>
            <div>
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Verified className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Digital Signatures</h4>
              <p className="text-teal-100">Each certificate is digitally signed with cryptographic security</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <QrCode className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-semibold mb-2">QR Code Verification</h4>
              <p className="text-teal-100">Quick verification through secure QR codes linked to our database</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
