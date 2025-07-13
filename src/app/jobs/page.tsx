import { JobsHeader } from "@/components/features/jobs/jobs-header";
import { JobsFilters } from "@/components/features/jobs/jobs-filters";
import { JobsList } from "@/components/features/jobs/jobs-list";

export default function JobsPage() {
  return (
    <div className="min-h-screen bg-background">
      <JobsHeader />
      <div className="container px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-80 shrink-0">
            <JobsFilters />
          </aside>
          <main className="flex-1">
            <JobsList />
          </main>
        </div>
      </div>
    </div>
  );
}
