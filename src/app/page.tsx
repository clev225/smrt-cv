
"use client";

import { useState } from 'react';
import Resume from "@/components/resume/Resume";
import Resume2 from "@/components/resume/Resume2";
import Resume3 from "@/components/resume/Resume3";
import { getResumeData } from "@/utils/resume-data";

export default function Page() {
  const [template, setTemplate] = useState(1);
  const resumeData = getResumeData();

  const handleToggle = () => {
    setTemplate(prev => (prev === 3 ? 1 : prev + 1));
  };

  return (
    <main className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="flex justify-end mb-4">
        <button 
          onClick={handleToggle}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Toggle Template
        </button>
      </div>
      {template === 1 && <Resume data={resumeData} />}
      {template === 2 && <Resume2 data={resumeData} />}
      {template === 3 && <Resume3 data={resumeData} />}
    </main>
  );
}
