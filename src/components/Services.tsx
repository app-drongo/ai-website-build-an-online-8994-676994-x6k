// Services Component
// Generated: 2025-08-27T16:37:56.859Z
// Template: services-c001
// Context: Homepage
// Position: pages.0.sections.2

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  BarChart3,
  Megaphone,
  Palette,
  Code2,
  TrendingUp,
  Users,
  Brain,
  Target,
  ArrowRight
} from "lucide-react"

export default function Services() {
  const courses = [
    {
      id: "data-science",
      title: "Data Science Mastery",
      description: "Master Python, machine learning, and statistical analysis to become a data-driven professional.",
      icon: BarChart3,
      badge: "Most Popular",
      features: ["Python & R Programming", "Machine Learning", "Data Visualization"],
      link: "/courses/data-science"
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing Pro",
      description: "Learn SEO, social media marketing, and analytics to drive business growth online.",
      icon: Megaphone,
      features: ["SEO & SEM", "Social Media Strategy", "Google Analytics"],
      link: "/courses/digital-marketing"
    },
    {
      id: "ux-design",
      title: "UX Design Fundamentals",
      description: "Create user-centered designs that solve real problems and enhance user experiences.",
      icon: Palette,
      badge: "New",
      features: ["User Research", "Wireframing & Prototyping", "Design Systems"],
      link: "/courses/ux-design"
    },
    {
      id: "web-development",
      title: "Full-Stack Development",
      description: "Build modern web applications with React, Node.js, and cloud deployment strategies.",
      icon: Code2,
      features: ["React & JavaScript", "Backend APIs", "Cloud Deployment"],
      link: "/courses/web-development"
    },
    {
      id: "business-analytics",
      title: "Business Analytics",
      description: "Transform data into actionable insights for strategic business decision-making.",
      icon: TrendingUp,
      features: ["Excel & Power BI", "SQL Databases", "Business Intelligence"],
      link: "/courses/business-analytics"
    },
    {
      id: "product-management",
      title: "Product Management",
      description: "Lead product development from conception to launch with agile methodologies.",
      icon: Target,
      features: ["Product Strategy", "Agile & Scrum", "Market Research"],
      link: "/courses/product-management"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Professional Courses
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Advance Your Career with
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Industry-Leading Skills
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Master in-demand skills with our comprehensive online courses designed for working professionals
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => {
            const Icon = course.icon
            
            return (
              <Card 
                key={course.id}
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    {course.badge && (
                      <Badge variant="secondary" className="text-xs">
                        {course.badge}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {course.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative space-y-4">
                  <CardDescription className="text-base leading-relaxed">
                    {course.description}
                  </CardDescription>
                  
                  {/* Features List */}
                  <ul className="space-y-2">
                    {course.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="size-1.5 rounded-full bg-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Enroll Now Link */}
                  <Button 
                    variant="ghost" 
                    className="w-full group/btn justify-between hover:bg-primary/10"
                    asChild
                  >
                    <a href={course.link}>
                      <span>View Course Details</span>
                      <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
                    </a>
                  </Button>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300 pointer-events-none" />
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to transform your career?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Browse All Courses
            </Button>
            <Button size="lg" variant="outline">
              Book Free Consultation
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}