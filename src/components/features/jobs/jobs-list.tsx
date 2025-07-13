"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MapPin, Clock, DollarSign, Bookmark, Heart } from "lucide-react";

// Mock job data - in a real app, this would come from an API
const jobs = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    company: "TechCorp",
    location: "San Francisco, CA",
    type: "Remote",
    salary: "$120K - $160K",
    posted: "2 days ago",
    description: "Join our team building next-generation web applications using React, Node.js, and cloud technologies. We're looking for experienced developers who can work across the full stack.",
    skills: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL"],
    logo: "TC",
    featured: true,
    saved: false,
  },
  {
    id: 2,
    title: "Frontend Engineer",
    company: "StartupX",
    location: "New York, NY",
    type: "Hybrid",
    salary: "$90K - $130K",
    posted: "1 day ago",
    description: "Create beautiful, responsive user interfaces for our growing SaaS platform. Work with a talented design team to deliver exceptional user experiences.",
    skills: ["Vue.js", "JavaScript", "CSS", "Figma", "Tailwind"],
    logo: "SX",
    featured: false,
    saved: true,
  },
  {
    id: 3,
    title: "DevOps Engineer",
    company: "CloudTech",
    location: "Austin, TX",
    type: "Remote",
    salary: "$110K - $150K",
    posted: "3 days ago",
    description: "Build and maintain scalable infrastructure for high-traffic applications. Experience with containerization and cloud platforms required.",
    skills: ["Docker", "Kubernetes", "Terraform", "GCP", "Python"],
    logo: "CT",
    featured: true,
    saved: false,
  },
  {
    id: 4,
    title: "Backend Developer",
    company: "DataInc",
    location: "Seattle, WA",
    type: "On-site",
    salary: "$100K - $140K",
    posted: "1 week ago",
    description: "Develop robust APIs and services for our data analytics platform. Strong experience with Python and database optimization required.",
    skills: ["Python", "Django", "PostgreSQL", "Redis", "Elasticsearch"],
    logo: "DI",
    featured: false,
    saved: false,
  },
  {
    id: 5,
    title: "Mobile Developer",
    company: "AppStudio",
    location: "Los Angeles, CA",
    type: "Hybrid",
    salary: "$95K - $135K",
    posted: "4 days ago",
    description: "Create native mobile applications for iOS and Android platforms. Experience with React Native or native development preferred.",
    skills: ["React Native", "Swift", "Kotlin", "Firebase", "Redux"],
    logo: "AS",
    featured: false,
    saved: false,
  },
  {
    id: 6,
    title: "Data Scientist",
    company: "AI Labs",
    location: "Boston, MA",
    type: "Remote",
    salary: "$130K - $170K",
    posted: "5 days ago",
    description: "Apply machine learning to solve complex business problems. PhD in relevant field or equivalent experience required.",
    skills: ["Python", "TensorFlow", "SQL", "R", "Pandas"],
    logo: "AL",
    featured: true,
    saved: true,
  },
  {
    id: 7,
    title: "Product Manager",
    company: "InnovateNow",
    location: "Chicago, IL",
    type: "Hybrid",
    salary: "$105K - $145K",
    posted: "1 week ago",
    description: "Lead product development for our B2B SaaS platform. Work closely with engineering and design teams to deliver customer value.",
    skills: ["Product Strategy", "Analytics", "Jira", "Figma", "SQL"],
    logo: "IN",
    featured: false,
    saved: false,
  },
  {
    id: 8,
    title: "UI/UX Designer",
    company: "DesignFlow",
    location: "Portland, OR",
    type: "Remote",
    salary: "$85K - $120K",
    posted: "3 days ago",
    description: "Design intuitive user experiences for web and mobile applications. Strong portfolio demonstrating user-centered design process required.",
    skills: ["Figma", "Adobe XD", "Prototyping", "User Research", "Design Systems"],
    logo: "DF",
    featured: false,
    saved: false,
  },
];

export function JobsList() {
  return (
    <div className="space-y-4">
      {jobs.map((job) => (
        <Card 
          key={job.id} 
          className={`hover:shadow-md transition-all duration-200 ${
            job.featured ? "ring-1 ring-primary/20 bg-primary/5" : ""
          }`}
        >
          <CardHeader className="pb-4">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4 flex-1">
                <Avatar className="h-12 w-12">
                  <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                    {job.logo}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <Link 
                        href={`/jobs/${job.id}`}
                        className="text-lg font-semibold hover:text-primary transition-colors"
                      >
                        {job.title}
                      </Link>
                      {job.featured && (
                        <Badge className="ml-2 text-xs">Featured</Badge>
                      )}
                    </div>
                    
                    <div className="flex space-x-1 ml-4">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Bookmark className={`h-4 w-4 ${job.saved ? "fill-current" : ""}`} />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="text-sm text-muted-foreground mb-3">
                    <span className="font-medium text-foreground">{job.company}</span>
                    <span className="mx-2">•</span>
                    <span className="inline-flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      {job.location}
                    </span>
                    <span className="mx-2">•</span>
                    <span className="inline-flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {job.posted}
                    </span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {job.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.skills.slice(0, 4).map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {job.skills.length > 4 && (
                      <Badge variant="outline" className="text-xs">
                        +{job.skills.length - 4} more
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="pt-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Badge 
                  variant={job.type === "Remote" ? "default" : 
                          job.type === "Hybrid" ? "secondary" : "outline"}
                  className="text-xs"
                >
                  {job.type}
                </Badge>
                
                <div className="flex items-center text-sm font-semibold text-primary">
                  <DollarSign className="h-3 w-3 mr-1" />
                  {job.salary}
                </div>
              </div>
              
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/jobs/${job.id}`}>
                    View Details
                  </Link>
                </Button>
                <Button size="sm">
                  Apply Now
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
      
      {/* Load More Button */}
      <div className="text-center py-8">
        <Button variant="outline" size="lg">
          Load More Jobs
        </Button>
      </div>
    </div>
  );
}
