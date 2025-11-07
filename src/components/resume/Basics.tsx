import { Basics } from '@/types/resume';

interface BasicsProps {
  data: Basics;
}

export default function BasicsSection({ data }: BasicsProps) {
  return (
    <section className="resume-header">
      {/* Left side - photo */}
      <div className="header-photo">
        {data.image ? (
          <img 
            src={data.image} 
            alt={data.name} 
            className="w-40 h-40 object-cover"
          />
        ) : (
          <div className="w-40 h-40 bg-gray-300 flex items-center justify-center">
            <span className="text-gray-500">Photo</span>
          </div>
        )}
      </div>

      {/* Right side - contact info */}
      <div className="header-info">
        <h1 className="text-3xl font-bold">{data.name}</h1>
        <h2 className="text-xl mb-4">{data.label}</h2>
        
        <div className="space-y-1">
          <p>{data.location.address}, {data.location.city}, {data.location.region} {data.location.postalCode}, {data.location.countryCode}</p>
          <div className="flex flex-wrap">
            <div style={{ display: 'flex' }}>
              <span style={{ marginRight: '3rem' }}>{data.phone}</span>
              <span>{data.email}</span>
            </div>
          </div>
          <p>{data.url}</p>
        </div>
      </div>
    </section>
  );
}