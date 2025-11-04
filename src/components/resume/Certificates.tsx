import { Certificate } from '@/types/resume';

interface CertificatesProps {
  data: Certificate[];
}

export default function CertificatesSection({ data }: CertificatesProps) {
  return (
    <section className="mb-6">
      <h2 className="text-2xl font-bold mb-4 border-b pb-2">Certificates</h2>
      
      <div className="space-y-3">
        {data.map((cert, index) => (
          <div key={index} className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold">
                {cert.url ? (
                  <a href={cert.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    {cert.name}
                  </a>
                ) : (
                  cert.name
                )}
              </h3>
              <p className="text-gray-700">{cert.issuer}</p>
            </div>
            <div className="text-gray-600">
              {new Date(cert.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}