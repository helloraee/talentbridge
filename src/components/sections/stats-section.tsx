"use client";

import { Card } from "@/components/ui/card";
import { Users, Building2, Briefcase, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "12K+",
    label: "Active Developers",
    description: "Talented professionals ready to join your team",
  },
  {
    icon: Building2,
    number: "500+",
    label: "Hiring Companies",
    description: "From startups to Fortune 500 companies",
  },
  {
    icon: Briefcase,
    number: "2.5K+",
    label: "Jobs Posted",
    description: "New opportunities added daily",
  },
  {
    icon: TrendingUp,
    number: "95%",
    label: "Match Success",
    description: "Successful placements through our platform",
  },
];

export function StatsSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join the community of developers and companies who have found success through TalentBridge
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card 
                key={stat.label} 
                className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-foreground">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold">
                    {stat.label}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {stat.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
