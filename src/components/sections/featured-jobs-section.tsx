"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, DollarSign, Building2 } from "lucide-react";

const featuredJobs = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    company: "TechCorp",
    location: "San Francisco, CA",
    type: "Remote",
    salary: "$120K - $160K",
    posted: "2 days ago",
    description: "Join our team building next-generation web applications using React, Node.js, and cloud technologies.",
    skills: ["React", "Node.js", "TypeScript", "AWS"],
    logo: "TC",
  },
  {
    id: 2,
    title: "Frontend Engineer",
    company: "StartupX",
    location: "New York, NY",
    type: "Hybrid",
    salary: "$90K - $130K",
    posted: "1 day ago",
    description: "Create beautiful, responsive user interfaces for our growing SaaS platform.",
    skills: ["Vue.js", "JavaScript", "CSS", "Figma"],
    logo: "SX",
  },
  {
    id: 3,
    title: "DevOps Engineer",
    company: "CloudTech",
    location: "Austin, TX",
    type: "Remote",
    salary: "$110K - $150K",
    posted: "3 days ago",
    description: "Build and maintain scalable infrastructure for high-traffic applications.",
    skills: ["Docker", "Kubernetes", "Terraform", "GCP"],
    logo: "CT",
  },
  {
    id: 4,
    title: "Backend Developer",
    company: "DataInc",
    location: "Seattle, WA",
    type: "On-site",
    salary: "$100K - $140K",
    posted: "1 week ago",
    description: "Develop robust APIs and services for our data analytics platform.",
    skills: ["Python", "Django", "PostgreSQL", "Redis"],
    logo: "DI",
  },
  {
    id: 5,
    title: "Mobile Developer",
    company: "AppStudio",
    location: "Los Angeles, CA",
    type: "Hybrid",
    salary: "$95K - $135K",
    posted: "4 days ago",
    description: "Create native mobile applications for iOS and Android platforms.",
    skills: ["React Native", "Swift", "Kotlin", "Firebase"],
    logo: "AS",
  },
  {
    id: 6,
    title: "Data Scientist",
    company: "AI Labs",
    location: "Boston, MA",
    type: "Remote",
    salary: "$130K - $170K",
    posted: "5 days ago",
    description: "Apply machine learning to solve complex business problems.",
    skills: ["Python", "TensorFlow", "SQL", "R"],
    logo: "AL",
  },
];

export function FeaturedJobsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">
            Featured Opportunities
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Discover hand-picked positions from top companies actively hiring exceptional talent
          </p>
          <Button asChild variant="outline">
            <Link href="/jobs">View All Jobs</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredJobs.map((job, index) => (
            <Card 
              key={job.id} 
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-semibold text-sm">
                      {job.logo}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg leading-tight">{job.title}</h3>
                      <div className="flex items-center text-sm text-muted-foreground mt-1">
                        <Building2 className="h-3 w-3 mr-1" />
                        {job.company}
                      </div>
                    </div>
                  </div>
                  <Badge 
                    variant={job.type === "Remote" ? "default" : job.type === "Hybrid" ? "secondary" : "outline"}
                    className="shrink-0"
                  >
                    {job.type}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <MapPin className="h-3 w-3 mr-1" />
                    {job.location}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {job.posted}
                  </div>
                </div>

                <p className="text-sm text-muted-foreground line-clamp-2">
                  {job.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {job.skills.slice(0, 3).map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                  {job.skills.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{job.skills.length - 3}
                    </Badge>
                  )}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center text-sm font-semibold text-primary">
                    <DollarSign className="h-3 w-3 mr-1" />
                    {job.salary}
                  </div>
                  <Button size="sm" asChild>
                    <Link href={`/jobs/${job.id}`}>
                      View Details
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
