"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Briefcase } from "lucide-react";

export function HeroSection() {
  const [userType, setUserType] = useState<"jobseeker" | "employer">("jobseeker");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (searchQuery.trim()) {
      // In a real app, this would navigate to search results
      console.log(`Searching for: ${searchQuery}`);
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-background/80">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      
      <div className="container relative px-4 py-24 md:py-32">
        <div className="mx-auto max-w-4xl text-center space-y-8">
          {/* Main Heading */}
          <div className="space-y-4 animate-fade-in-up">
            <Badge variant="secondary" className="mx-auto">
              <Briefcase className="mr-2 h-3 w-3" />
              Connecting Talent with Opportunity
            </Badge>
            
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              <span className="gradient-text">
                Find Your Next
              </span>
              <br />
              <span className="text-foreground">
                Career Move
              </span>
            </h1>
            
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
              The modern platform where exceptional developers meet innovative companies. 
              Discover opportunities that match your skills and ambitions.
            </p>
          </div>

          {/* User Type Toggle */}
          <div className="flex justify-center animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="inline-flex rounded-lg border p-1 bg-muted">
              <Button
                variant={userType === "jobseeker" ? "default" : "ghost"}
                size="sm"
                onClick={() => setUserType("jobseeker")}
                className="rounded-md"
              >
                I'm seeking opportunities
              </Button>
              <Button
                variant={userType === "employer" ? "default" : "ghost"}
                size="sm"
                onClick={() => setUserType("employer")}
                className="rounded-md"
              >
                I'm hiring talent
              </Button>
            </div>
          </div>

          {/* Search Section */}
          <div className="mx-auto max-w-2xl animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex flex-col gap-4 p-6 rounded-2xl border bg-card shadow-lg">
              <div className="flex flex-col gap-4 md:flex-row">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder={
                      userType === "jobseeker"
                        ? "Search roles, companies, or skills..."
                        : "Search candidates, skills, or locations..."
                    }
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                    className="pl-10 h-12"
                  />
                </div>
                
                <div className="relative md:w-48">
                  <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Location"
                    className="pl-10 h-12"
                  />
                </div>
              </div>
              
              <Button 
                onClick={handleSearch}
                size="lg"
                className="w-full h-12 animate-pulse-border"
              >
                {userType === "jobseeker" ? "Find Jobs" : "Find Talent"}
              </Button>
            </div>
          </div>

          {/* Popular Searches */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <p className="text-sm text-muted-foreground mb-3">Popular searches:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                "React Developer",
                "Python Engineer",
                "DevOps",
                "Full Stack",
                "Remote Jobs",
                "Startups",
                "Senior Level",
                "Frontend"
              ].map((term) => (
                <Button
                  key={term}
                  variant="outline"
                  size="sm"
                  onClick={() => setSearchQuery(term)}
                  className="rounded-full"
                >
                  {term}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
