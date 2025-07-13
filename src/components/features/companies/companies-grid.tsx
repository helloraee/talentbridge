"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MapPin, Users, Briefcase, Star, Heart, Follow } from "lucide-react";

// Mock company data
const companies = [
  {
    id: 1,
    name: "TechCorp",
    logo: "TC",
    description: "Leading software company building innovative solutions for modern businesses with cutting-edge technology.",
    location: "San Francisco, CA",
    employees: "500-1000",
    industry: "Technology",
    rating: 4.8,
    openJobs: 15,
    featured: true,
    following: false,
    tags: ["SaaS", "AI/ML", "Remote-First"],
    benefits: ["Health Insurance", "401k", "Unlimited PTO", "Equity"],
  },
  {
    id: 2,
    name: "StartupX",
    logo: "SX",
    description: "Fast-growing startup revolutionizing the e-commerce experience with innovative technology solutions.",
    location: "New York, NY",
    employees: "50-100",
    industry: "E-commerce",
    rating: 4.6,
    openJobs: 8,
    featured: false,
    following: true,
    tags: ["Growth Stage", "Equity", "Fast-paced"],
    benefits: ["Equity", "Flexible Hours", "Learning Budget"],
  },
  {
    id: 3,
    name: "CloudTech",
    logo: "CT",
    description: "Cloud infrastructure company helping businesses scale globally with reliable and secure solutions.",
    location: "Austin, TX",
    employees: "200-500",
    industry: "Cloud Computing",
    rating: 4.9,
    openJobs: 12,
    featured: true,
    following: false,
    tags: ["Cloud", "DevOps", "Enterprise"],
    benefits: ["Health Insurance", "Stock Options", "Remote Work"],
  },
  {
    id: 4,
    name: "DataInc",
    logo: "DI",
    description: "Data analytics platform trusted by Fortune 500 companies for business intelligence and insights.",
    location: "Seattle, WA",
    employees: "100-200",
    industry: "Analytics",
    rating: 4.7,
    openJobs: 6,
    featured: false,
    following: false,
    tags: ["Data", "B2B", "Analytics"],
    benefits: ["401k", "Professional Development", "Bonuses"],
  },
  {
    id: 5,
    name: "AppStudio",
    logo: "AS",
    description: "Mobile-first company creating engaging consumer applications with millions of users worldwide.",
    location: "Los Angeles, CA",
    employees: "50-100",
    industry: "Mobile",
    rating: 4.5,
    openJobs: 7,
    featured: false,
    following: true,
    tags: ["Mobile", "Consumer", "Creative"],
    benefits: ["Flexible PTO", "Team Events", "Health Insurance"],
  },
  {
    id: 6,
    name: "AI Labs",
    logo: "AL",
    description: "Research-driven company advancing artificial intelligence technologies for real-world applications.",
    location: "Boston, MA",
    employees: "100-200",
    industry: "AI/ML",
    rating: 4.9,
    openJobs: 10,
    featured: true,
    following: false,
    tags: ["AI/ML", "Research", "Innovation"],
    benefits: ["Research Budget", "Conference Attendance", "Equity"],
  },
  {
    id: 7,
    name: "FinanceFlow",
    logo: "FF",
    description: "Fintech startup providing financial services and payment solutions for modern businesses.",
    location: "Chicago, IL",
    employees: "100-200",
    industry: "Fintech",
    rating: 4.4,
    openJobs: 9,
    featured: false,
    following: false,
    tags: ["Fintech", "Payments", "Security"],
    benefits: ["Stock Options", "Health Insurance", "Gym Membership"],
  },
  {
    id: 8,
    name: "HealthTech",
    logo: "HT",
    description: "Healthcare technology company improving patient outcomes through innovative digital solutions.",
    location: "San Diego, CA",
    employees: "200-500",
    industry: "Healthcare",
    rating: 4.6,
    openJobs: 11,
    featured: false,
    following: false,
    tags: ["Healthcare", "Digital Health", "Impact"],
    benefits: ["Health Insurance", "PTO", "Mission-driven"],
  },
  {
    id: 9,
    name: "GreenEnergy",
    logo: "GE",
    description: "Renewable energy company focused on sustainable technology solutions for a cleaner future.",
    location: "Denver, CO",
    employees: "500-1000",
    industry: "Clean Energy",
    rating: 4.8,
    openJobs: 14,
    featured: true,
    following: false,
    tags: ["Clean Energy", "Sustainability", "Impact"],
    benefits: ["401k", "Environmental Impact", "Professional Growth"],
  },
];

export function CompaniesGrid() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {companies.map((company, index) => (
          <Card 
            key={company.id}
            className={`hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative animate-fade-in-up ${
              company.featured ? "ring-1 ring-primary/20 bg-primary/5" : ""
            }`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {company.featured && (
              <Badge className="absolute -top-2 -right-2 z-10">
                Featured
              </Badge>
            )}

            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-primary text-primary-foreground font-bold text-lg">
                      {company.logo}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <Link 
                      href={`/companies/${company.id}`}
                      className="text-lg font-semibold hover:text-primary transition-colors"
                    >
                      {company.name}
                    </Link>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Star className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" />
                        {company.rating}
                      </div>
                      <span>•</span>
                      <div className="flex items-center">
                        <Users className="h-3 w-3 mr-1" />
                        {company.employees}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-1">
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant={company.following ? "default" : "ghost"} 
                    size="sm" 
                    className="h-8 w-8 p-0"
                  >
                    <Follow className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground line-clamp-2">
                {company.description}
              </p>

              <div className="space-y-2">
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="h-3 w-3 mr-2" />
                  {company.location}
                </div>
                
                <div className="flex items-center text-sm">
                  <Briefcase className="h-3 w-3 mr-2 text-primary" />
                  <span className="font-medium text-primary">
                    {company.openJobs} open positions
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {company.tags.slice(0, 2).map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
                {company.tags.length > 2 && (
                  <Badge variant="outline" className="text-xs">
                    +{company.tags.length - 2}
                  </Badge>
                )}
              </div>

              <div className="flex items-center justify-between pt-2 border-t">
                <Badge variant="outline" className="text-xs">
                  {company.industry}
                </Badge>
                
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/companies/${company.id}`}>
                      View Profile
                    </Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href={`/companies/${company.id}/jobs`}>
                      View Jobs
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center py-8">
        <Button variant="outline" size="lg">
          Load More Companies
        </Button>
      </div>
    </div>
  );
}
