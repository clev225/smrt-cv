import { Education } from '@/types/resume';

interface EducationProps {
  data: Education[];
}

export default function EducationSection({ data }: EducationProps) {
  return (
    <section className="mb-8">
      <h2 className="main-section-title">Education</h2>
      
      <div className="space-y-4">
        {data.map((edu, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-lg font-semibold">{edu.studyType} in {edu.area}</h3>
            <p>{edu.institution} - {edu.location}</p>
            <div className="text-gray-700">
              {new Date(edu.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
              {' - '}
              {new Date(edu.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
            </div>
            
            {edu.score && <p className="mt-1 text-gray-700">GPA: {edu.score}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}