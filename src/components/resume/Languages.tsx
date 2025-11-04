import { Language } from '@/types/resume';

interface LanguagesProps {
  data: Language[];
}

export default function LanguagesSection({ data }: LanguagesProps) {
  const getProgressWidth = (fluency: string) => {
    switch(fluency.toLowerCase()) {
      case 'native': return '100%';
      case 'advanced': return '80%';
      case 'intermediate': return '60%';
      case 'beginner': return '40%';
      default: return '50%';
    }
  };
  
  const getDotFilled = (fluency: string, dotIndex: number) => {
    const fluencyLower = fluency.toLowerCase();
    if (fluencyLower === 'native') return true;
    if (fluencyLower === 'advanced') return dotIndex < 4;
    if (fluencyLower === 'intermediate') return dotIndex < 3;
    if (fluencyLower === 'beginner') return dotIndex < 2;
    return dotIndex < 3;
  };
  
  return (
    <section className="mb-8">
      <h2 className="section-title">Language</h2>
      
      <div className="space-y-3">
        {data.map((lang, index) => (
          <div key={index} className="mb-2">
            <h3 className="font-semibold">{lang.language}</h3>
            <div>
              {/* <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: getProgressWidth(lang.fluency) }}
                ></div>
              </div> */}
              <div className="skill-dots">
                {[0, 1, 2, 3, 4].map(i => (
                  <div 
                    key={i} 
                    className={`skill-dot ${getDotFilled(lang.fluency, i) ? 'skill-dot-filled' : 'skill-dot-empty'}`}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}