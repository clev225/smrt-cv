
import Resume from '@/components/resume/Resume';
import { getResumeData } from '@/utils/resume-data';

export default function Home() {
  const resumeData = getResumeData();
  
  return (
    <main className="min-h-screen bg-gray-100 p-4 md:p-8">
      <Resume data={resumeData} />
    </main>
  );
}
