import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, Building2, Zap, Shield } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4">
        {/* Main CTA */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl mb-6">
            Ready to Find Your Perfect Match?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Join thousands of developers and companies who have found success through TalentBridge. 
            Start your journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-lg px-8 py-6">
              <Link href="/auth/register?type=jobseeker">
                Find Your Dream Job
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6">
              <Link href="/auth/register?type=employer">
                Start Hiring
              </Link>
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
          <Card className="p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-500/10 mb-4">
              <Users className="h-6 w-6 text-blue-500" />
            </div>
            <h3 className="font-semibold mb-2">For Developers</h3>
            <p className="text-sm text-muted-foreground">
              Access curated opportunities, salary insights, and career resources
            </p>
          </Card>

          <Card className="p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-green-500/10 mb-4">
              <Building2 className="h-6 w-6 text-green-500" />
            </div>
            <h3 className="font-semibold mb-2">For Companies</h3>
            <p className="text-sm text-muted-foreground">
              Find qualified candidates with advanced search and AI matching
            </p>
          </Card>

          <Card className="p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-purple-500/10 mb-4">
              <Zap className="h-6 w-6 text-purple-500" />
            </div>
            <h3 className="font-semibold mb-2">Fast Matching</h3>
            <p className="text-sm text-muted-foreground">
              Our AI-powered system connects the right talent with the right opportunities
            </p>
          </Card>

          <Card className="p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-orange-500/10 mb-4">
              <Shield className="h-6 w-6 text-orange-500" />
            </div>
            <h3 className="font-semibold mb-2">Trusted Platform</h3>
            <p className="text-sm text-muted-foreground">
              Verified companies and candidates with transparent reviews and ratings
            </p>
          </Card>
        </div>

        {/* Newsletter Signup */}
        <Card className="p-8 bg-gradient-to-r from-primary/5 via-background to-primary/5">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
            <p className="text-muted-foreground mb-6">
              Get the latest job opportunities and industry insights delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md border border-input bg-background"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
