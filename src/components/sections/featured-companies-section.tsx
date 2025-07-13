"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building2, Users, MapPin, Star } from "lucide-react";

const featuredCompanies = [
  {
    id: 1,
    name: "TechCorp",
    logo: "TC",
    description: "Leading software company building innovative solutions for modern businesses.",
    location: "San Francisco, CA",
    employees: "500-1000",
    rating: 4.8,
    openJobs: 15,
    featured: true,
    tags: ["SaaS", "AI/ML", "Remote-First"],
  },
  {
    id: 2,
    name: "StartupX",
    logo: "SX",
    description: "Fast-growing startup revolutionizing the e-commerce experience.",
    location: "New York, NY",
    employees: "50-100",
    rating: 4.6,
    openJobs: 8,
    featured: false,
    tags: ["E-commerce", "Growth Stage", "Equity"],
  },
  {
    id: 3,
    name: "CloudTech",
    logo: "CT",
    description: "Cloud infrastructure company helping businesses scale globally.",
    location: "Austin, TX",
    employees: "200-500",
    rating: 4.9,
    openJobs: 12,
    featured: true,
    tags: ["Cloud", "DevOps", "Enterprise"],
  },
  {
    id: 4,
    name: "DataInc",
    logo: "DI",
    description: "Data analytics platform trusted by Fortune 500 companies.",
    location: "Seattle, WA",
    employees: "100-200",
    rating: 4.7,
    openJobs: 6,
    featured: false,
    tags: ["Data", "Analytics", "B2B"],
  },
  {
    id: 5,
    name: "AppStudio",
    logo: "AS",
    description: "Mobile-first company creating engaging consumer applications.",
    location: "Los Angeles, CA",
    employees: "50-100",
    rating: 4.5,
    openJobs: 7,
    featured: false,
    tags: ["Mobile", "Consumer", "Creative"],
  },
  {
    id: 6,
    name: "AI Labs",
    logo: "AL",
    description: "Research-driven company advancing artificial intelligence technologies.",
    location: "Boston, MA",
    employees: "100-200",
    rating: 4.9,
    openJobs: 10,
    featured: true,
    tags: ["AI/ML", "Research", "Innovation"],
  },
];

export function FeaturedCompaniesSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">
            Top Hiring Companies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Explore opportunities at companies that are actively building exceptional teams
          </p>
          <Button asChild variant="outline">
            <Link href="/companies">Browse All Companies</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredCompanies.map((company, index) => (
            <Card 
              key={company.id}
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer animate-fade-in-up relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {company.featured && (
                <Badge className="absolute -top-2 -right-2 z-10">
                  Featured
                </Badge>
              )}
              
              <CardContent className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold text-lg shrink-0">
                    {company.logo}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-lg leading-tight mb-1">
                      {company.name}
                    </h3>
                    <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Star className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" />
                        {company.rating}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-3 w-3 mr-1" />
                        {company.employees}
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {company.description}
                </p>

                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <MapPin className="h-3 w-3 mr-1" />
                  {company.location}
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {company.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2 border-t">
                  <div className="flex items-center text-sm">
                    <Building2 className="h-3 w-3 mr-1 text-primary" />
                    <span className="font-medium text-primary">
                      {company.openJobs} open positions
                    </span>
                  </div>
                  <Button size="sm" variant="outline" asChild>
                    <Link href={`/companies/${company.id}`}>
                      View Company
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
