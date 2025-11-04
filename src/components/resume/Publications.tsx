import { Publication } from '@/types/resume';

interface PublicationsProps {
  data: Publication[];
}

export default function PublicationsSection({ data }: PublicationsProps) {
  return (
    <section className="mb-6">
      <h2 className="text-2xl font-bold mb-4 border-b pb-2">Publications</h2>
      
      <div className="space-y-4">
        {data.map((pub, index) => (
          <div key={index} className="mb-3">
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-semibold">
                <a href={pub.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  {pub.name}
                </a>
              </h3>
              <div className="text-gray-600">
                {new Date(pub.releaseDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}
              </div>
            </div>
            <p className="text-gray-700">{pub.publisher}</p>
            <p className="mt-1">{pub.summary}</p>
          </div>
        ))}
      </div>
    </section>
  );
}