"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { GitFork, MapPin, Mail, Phone, Linkedin, Instagram, Youtube, Twitter, ArrowRight, Heart } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "Contact", href: "/contact" },
  ]

  const programs = [
    { name: "Full Stack Development", href: "/programs/1" },
    { name: "Data Science", href: "/programs/2" },
    { name: "AI & Machine Learning", href: "/programs/3" },
    { name: "Ethical Hacking", href: "/programs/4" },
  ]

  const socialLinks = [
    { name: "LinkedIn", href: "#", icon: Linkedin },
    { name: "Instagram", href: "#", icon: Instagram },
    { name: "YouTube", href: "#", icon: Youtube },
    { name: "Twitter", href: "#", icon: Twitter },
  ]

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-6">
              Get the latest updates on new programs, success stories, and tech industry insights
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 dark:bg-gray-900 border-gray-700 dark:border-gray-600 text-white placeholder-gray-400"
              />
              <Button className="bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white px-6">
                Subscribe
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-lg flex items-center justify-center">
                <GitFork className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-extrabold bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
                INLIGHN TECH
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering the next generation of tech professionals through comprehensive internship programs and
              industry-relevant training.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 dark:bg-gray-900 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-teal-600 hover:to-emerald-600 transition-all duration-300 group"
                  >
                    <IconComponent className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-teal-400 transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Programs</h4>
            <ul className="space-y-3">
              {programs.map((program) => (
                <li key={program.name}>
                  <Link
                    href={program.href}
                    className="text-gray-400 hover:text-teal-400 transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {program.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">
                    WeWork Prestige Central,
                    <br />
                    Bengaluru, Karnataka
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-teal-400 flex-shrink-0" />
                <a
                  href="mailto:info@inlighntech.com"
                  className="text-gray-400 hover:text-teal-400 transition-colors text-sm"
                >
                  info@inlighntech.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-teal-400 flex-shrink-0" />
                <a href="tel:+919368842663" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">
                  +91 93688 42663
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Inlighn Tech. All rights reserved. Transform your career with us.
            </p>
            <div className="flex items-center space-x-1 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>by Ashish</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
