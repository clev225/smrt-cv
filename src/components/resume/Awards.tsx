import { Award } from '@/types/resume';

interface AwardsProps {
  data: Award[];
}

export default function AwardsSection({ data }: AwardsProps) {
  return (
    <section className="mb-6">
      <h2 className="text-2xl font-bold mb-4 border-b pb-2">Awards</h2>
      
      <div className="space-y-4">
        {data.map((award, index) => (
          <div key={index} className="mb-3">
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-semibold">{award.title}</h3>
              <div className="text-gray-600">
                {new Date(award.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}
              </div>
            </div>
            <p className="text-gray-700">{award.awarder}</p>
            <p className="mt-1">{award.summary}</p>
          </div>
        ))}
      </div>
    </section>
  );
}