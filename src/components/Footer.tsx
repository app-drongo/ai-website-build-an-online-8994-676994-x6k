// Footer Component
// Generated: 2025-08-27T16:37:56.859Z
// Template: footer-c001
// Context: layout
// Position: layout.footer.0

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Heart,
  BookOpen,
  GraduationCap
} from "lucide-react"

export default function Footer() {
  const footerSections = [
    {
      title: "Courses",
      links: [
        { name: "Digital Marketing", href: "/courses/digital-marketing" },
        { name: "Data Science", href: "/courses/data-science" },
        { name: "UX Design", href: "/courses/ux-design" },
        { name: "Web Development", href: "/courses/web-development" },
        { name: "AI & Machine Learning", href: "/courses/ai-ml" },
        { name: "All Courses", href: "/courses" }
      ]
    },
    {
      title: "Learning",
      links: [
        { name: "Learning Paths", href: "/learning-paths" },
        { name: "Certifications", href: "/certifications" },
        { name: "Live Sessions", href: "/live-sessions" },
        { name: "Practice Labs", href: "/labs" },
        { name: "Career Services", href: "/career-services" },
        { name: "Student Portal", href: "/portal" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Help Center", href: "/help" },
        { name: "Student Community", href: "/community" },
        { name: "Blog & Tutorials", href: "/blog" },
        { name: "Webinars", href: "/webinars" },
        { name: "Success Stories", href: "/success-stories" },
        { name: "Downloads", href: "/downloads" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Instructors", href: "/instructors" },
        { name: "Careers", href: "/careers" },
        { name: "Press Kit", href: "/press" },
        { name: "Partner Program", href: "/partners" },
        { name: "Contact Us", href: "/contact" }
      ]
    }
  ]

  const socialLinks = [
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/skillbridgeacademy" },
    { name: "Facebook", icon: Facebook, href: "https://facebook.com/skillbridgeacademy" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/skillbridgeacademy" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/skillbridgeacademy" },
    { name: "YouTube", icon: Youtube, href: "https://youtube.com/skillbridgeacademy" }
  ]

  return (
    <footer className="bg-background border-t border-muted">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="size-10 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                  <BookOpen className="size-5 text-background" />
                </div>
                <span className="font-bold text-xl text-foreground">SkillBridge Academy</span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Empowering professionals with cutting-edge skills in digital marketing, data science, and UX design. 
                Join thousands of learners advancing their careers with our expert-led courses.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">learn@skillbridgeacademy.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+1 (555) 123-LEARN</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">Education Hub, Innovation District</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm text-foreground flex items-center gap-2">
                <GraduationCap className="size-4 text-accent" />
                Learning Updates
              </h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 text-sm border border-muted rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-foreground"
                />
                <Button size="sm" className="px-3 bg-primary hover:bg-primary/90 text-background">
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Get course updates, learning tips, and career insights. Unsubscribe anytime.
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-sm text-foreground">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-muted bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© 2024 SkillBridge Academy. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                Crafted with <Heart className="size-3 text-accent fill-current" /> for learners
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground mr-2">Follow us:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-8 rounded-md bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors duration-200 group"
                  >
                    <Icon className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border-muted/30">
            <Link href="/privacy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="/accessibility" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Accessibility
            </Link>
            <Link href="/student-support" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Student Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}