import { Interest } from '@/types/resume';

interface InterestsProps {
  data: Interest[];
}

export default function InterestsSection({ data }: InterestsProps) {
  return (
    <section className="mb-8">
      <h2 className="section-title">Hobbies</h2>
      
      <div className="space-y-2">
        {data.map((interest, index) => (
          <div key={index}>
            {interest.keywords && interest.keywords.length > 0 && (
              <ul className="list-disc list-inside space-y-1">
                {interest.keywords.map((keyword, i) => (
                  <li key={i}>{keyword}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}