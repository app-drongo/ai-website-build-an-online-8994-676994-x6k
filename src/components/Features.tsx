// Features Component
// Generated: 2025-08-27T16:37:56.859Z
// Template: features-c001
// Context: Homepage
// Position: pages.0.sections.1

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  BarChart3, 
  Users, 
  Smartphone, 
  Globe, 
  Award, 
  Clock,
  BookOpen,
  Headphones,
  TrendingUp
} from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: BarChart3,
      title: "Data Science Mastery",
      description: "Learn Python, machine learning, and analytics with real-world datasets and industry projects.",
      badge: "Technical"
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing Excellence",
      description: "Master SEO, social media, PPC, and conversion optimization with hands-on campaigns.",
      badge: "Marketing"
    },
    {
      icon: Smartphone,
      title: "UX Design Fundamentals",
      description: "Create user-centered designs with wireframing, prototyping, and usability testing skills.",
      badge: "Design"
    },
    {
      icon: Globe,
      title: "Flexible Online Learning",
      description: "Study anywhere, anytime with our mobile-optimized platform and offline content access.",
      badge: "Accessibility"
    },
    {
      icon: Users,
      title: "Industry Mentorship",
      description: "Get personalized guidance from experienced professionals working at top tech companies.",
      badge: "Support"
    },
    {
      icon: Award,
      title: "Career Certification",
      description: "Earn recognized certificates that showcase your skills to employers and advance your career.",
      badge: "Credentials"
    },
    {
      icon: BookOpen,
      title: "Project-Based Learning",
      description: "Build a professional portfolio with real projects that demonstrate your expertise.",
      badge: "Practical"
    },
    {
      icon: Headphones,
      title: "24/7 Learning Support",
      description: "Access help when you need it with our dedicated student success team and peer community.",
      badge: "Community"
    },
    {
      icon: Clock,
      title: "Self-Paced Progress",
      description: "Learn at your own speed with lifetime access to course materials and regular updates.",
      badge: "Flexibility"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Learning Experience
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Everything You Need to
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Advance Your Career
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Comprehensive learning features designed to help busy professionals master in-demand 
            tech skills and accelerate their career growth.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to transform your career with SkillBridge Academy?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Browse All Courses
            </button>
            <button className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors">
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}