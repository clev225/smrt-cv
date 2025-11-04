import { Reference } from '@/types/resume';

interface ReferencesProps {
  data: Reference[];
}

export default function ReferencesSection({ data }: ReferencesProps) {
  return (
    <section className="mb-6">
      <h2 className="text-2xl font-bold mb-4 border-b pb-2">References</h2>
      
      <div className="space-y-4">
        {data.map((ref, index) => (
          <div key={index} className="mb-3 p-4 bg-gray-50 rounded">
            <h3 className="text-lg font-semibold">{ref.name}</h3>
            <p className="text-gray-700">{ref.reference}</p>
          </div>
        ))}
      </div>
    </section>
  );
}