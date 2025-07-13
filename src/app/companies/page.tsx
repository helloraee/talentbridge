import { CompaniesHeader } from "@/components/features/companies/companies-header";
import { CompaniesGrid } from "@/components/features/companies/companies-grid";

export default function CompaniesPage() {
  return (
    <div className="min-h-screen bg-background">
      <CompaniesHeader />
      <div className="container px-4 py-8">
        <CompaniesGrid />
      </div>
    </div>
  );
}
