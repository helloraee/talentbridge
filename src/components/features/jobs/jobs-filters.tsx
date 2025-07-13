"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";

export function JobsFilters() {
  const [salaryRange, setSalaryRange] = useState([50000, 150000]);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const jobTypes = [
    { id: "full-time", label: "Full-time", count: 1245 },
    { id: "part-time", label: "Part-time", count: 342 },
    { id: "contract", label: "Contract", count: 567 },
    { id: "freelance", label: "Freelance", count: 234 },
  ];

  const workModes = [
    { id: "remote", label: "Remote", count: 892 },
    { id: "hybrid", label: "Hybrid", count: 634 },
    { id: "on-site", label: "On-site", count: 1022 },
  ];

  const experienceLevels = [
    { id: "entry", label: "Entry Level", count: 456 },
    { id: "mid", label: "Mid Level", count: 1234 },
    { id: "senior", label: "Senior Level", count: 678 },
    { id: "lead", label: "Lead/Principal", count: 180 },
  ];

  const technologies = [
    { id: "react", label: "React", count: 567 },
    { id: "nodejs", label: "Node.js", count: 434 },
    { id: "python", label: "Python", count: 678 },
    { id: "typescript", label: "TypeScript", count: 345 },
    { id: "aws", label: "AWS", count: 234 },
    { id: "docker", label: "Docker", count: 123 },
    { id: "kubernetes", label: "Kubernetes", count: 89 },
    { id: "vue", label: "Vue.js", count: 156 },
  ];

  const companySizes = [
    { id: "startup", label: "Startup (1-50)", count: 234 },
    { id: "small", label: "Small (51-200)", count: 456 },
    { id: "medium", label: "Medium (201-1000)", count: 678 },
    { id: "large", label: "Large (1000+)", count: 890 },
  ];

  const toggleFilter = (filterId: string) => {
    setSelectedFilters(prev => 
      prev.includes(filterId) 
        ? prev.filter(id => id !== filterId)
        : [...prev, filterId]
    );
  };

  const clearAllFilters = () => {
    setSelectedFilters([]);
    setSalaryRange([50000, 150000]);
  };

  return (
    <div className="space-y-6">
      {/* Active Filters */}
      {selectedFilters.length > 0 && (
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm">Active Filters</CardTitle>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={clearAllFilters}
                className="text-xs h-6 px-2"
              >
                Clear All
              </Button>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="flex flex-wrap gap-2">
              {selectedFilters.map((filterId) => (
                <Badge key={filterId} variant="secondary" className="text-xs">
                  {filterId}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="ml-1 h-4 w-4 p-0"
                    onClick={() => toggleFilter(filterId)}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Salary Range */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Salary Range</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="px-2">
            <Slider
              value={salaryRange}
              onValueChange={setSalaryRange}
              max={200000}
              min={30000}
              step={5000}
              className="w-full"
            />
          </div>
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>${salaryRange[0].toLocaleString()}</span>
            <span>${salaryRange[1].toLocaleString()}</span>
          </div>
        </CardContent>
      </Card>

      {/* Job Type */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Job Type</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {jobTypes.map((type) => (
            <div key={type.id} className="flex items-center space-x-2">
              <Checkbox
                id={type.id}
                checked={selectedFilters.includes(type.id)}
                onCheckedChange={() => toggleFilter(type.id)}
              />
              <label
                htmlFor={type.id}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex-1 cursor-pointer"
              >
                {type.label}
              </label>
              <span className="text-xs text-muted-foreground">{type.count}</span>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Work Mode */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Work Mode</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {workModes.map((mode) => (
            <div key={mode.id} className="flex items-center space-x-2">
              <Checkbox
                id={mode.id}
                checked={selectedFilters.includes(mode.id)}
                onCheckedChange={() => toggleFilter(mode.id)}
              />
              <label
                htmlFor={mode.id}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex-1 cursor-pointer"
              >
                {mode.label}
              </label>
              <span className="text-xs text-muted-foreground">{mode.count}</span>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Experience Level */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Experience Level</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {experienceLevels.map((level) => (
            <div key={level.id} className="flex items-center space-x-2">
              <Checkbox
                id={level.id}
                checked={selectedFilters.includes(level.id)}
                onCheckedChange={() => toggleFilter(level.id)}
              />
              <label
                htmlFor={level.id}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex-1 cursor-pointer"
              >
                {level.label}
              </label>
              <span className="text-xs text-muted-foreground">{level.count}</span>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Technologies */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Technologies</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {technologies.map((tech) => (
            <div key={tech.id} className="flex items-center space-x-2">
              <Checkbox
                id={tech.id}
                checked={selectedFilters.includes(tech.id)}
                onCheckedChange={() => toggleFilter(tech.id)}
              />
              <label
                htmlFor={tech.id}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex-1 cursor-pointer"
              >
                {tech.label}
              </label>
              <span className="text-xs text-muted-foreground">{tech.count}</span>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Company Size */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Company Size</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {companySizes.map((size) => (
            <div key={size.id} className="flex items-center space-x-2">
              <Checkbox
                id={size.id}
                checked={selectedFilters.includes(size.id)}
                onCheckedChange={() => toggleFilter(size.id)}
              />
              <label
                htmlFor={size.id}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex-1 cursor-pointer"
              >
                {size.label}
              </label>
              <span className="text-xs text-muted-foreground">{size.count}</span>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
