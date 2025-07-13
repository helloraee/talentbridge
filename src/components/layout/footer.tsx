import Link from "next/link";
import { Briefcase, Github, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Briefcase className="h-6 w-6" />
              <span className="text-xl font-bold gradient-text">TalentBridge</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              The modern platform where exceptional developers meet innovative companies.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm" asChild>
                <Link href="https://github.com" aria-label="GitHub">
                  <Github className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="https://twitter.com" aria-label="Twitter">
                  <Twitter className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="https://linkedin.com" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* For Developers */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">For Developers</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/jobs"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Browse Jobs
              </Link>
              <Link
                href="/insights/salary"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Salary Insights
              </Link>
              <Link
                href="/resources/career-advice"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Career Advice
              </Link>
              <Link
                href="/dashboard/skill-assessment"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Skill Assessments
              </Link>
              <Link
                href="/resources/interview-prep"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Interview Prep
              </Link>
            </nav>
          </div>

          {/* For Employers */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">For Employers</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/dashboard/post-job"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Post a Job
              </Link>
              <Link
                href="/talent"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Talent Search
              </Link>
              <Link
                href="/companies/pricing"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="/insights/hiring"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Hiring Insights
              </Link>
              <Link
                href="/companies/register"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Start Hiring
              </Link>
            </nav>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Company</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/about"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/about/careers"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Careers
              </Link>
              <Link
                href="/resources/blog"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/support/contact"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/support/help-center"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Help Center
              </Link>
            </nav>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col space-y-4 md:flex-row md:justify-between md:space-y-0">
          <div className="text-sm text-muted-foreground">
            © 2025 TalentBridge. All rights reserved.
          </div>
          <nav className="flex space-x-6">
            <Link
              href="/privacy-policy"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookie-policy"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Cookie Policy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
