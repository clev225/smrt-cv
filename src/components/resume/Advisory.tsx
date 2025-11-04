import { Advisory } from '@/types/resume';

interface AdvisoryProps {
  data: Advisory[];
}

export default function AdvisorySection({ data }: AdvisoryProps) {
  if (!data || data.length === 0) return null;

  return (
    <section>
      <h3 className="main-section-title">Advisory Roles</h3>
      {data.map((advisory, index) => (
        <div key={index} className="mb-4">
          <h4 className="font-bold">{advisory.organization}</h4>
          <p className="text-sm">{advisory.position}</p>
        </div>
      ))}
    </section>
  );
}