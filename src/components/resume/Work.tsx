import { Work } from '@/types/resume';

interface WorkProps {
  data: Work[];
}

export default function WorkSection({ data }: WorkProps) {
  return (
    <section className="mb-8">
      <h2 className="main-section-title">Employment History</h2>
      
      <div className="space-y-4">
        {data.map((work, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-lg font-semibold">{work.position}</h3>
            <div className="text-gray-700">
              {work.startDate && new Date(work.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
              {' - '}
              {work.endDate && work.endDate.toLowerCase() !== 'present'
                ? new Date(work.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })
                : 'Present'}
            </div>
            
            <p className="my-2">{work.summary}</p>
            
            {work.highlights && work.highlights.length > 0 && (
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {work.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}