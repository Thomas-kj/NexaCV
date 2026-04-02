"use client";

import ProfessionalTemplate from "@/components/templates/ProfessionalTemplate";

export default function ResumePreview({ data }: { data: any }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border">
      <ProfessionalTemplate data={data} />
    </div>
  );
}
