import { Skill } from '@/types/resume';

interface SkillsProps {
  data: Skill[];
}

export default function SkillsSection({ data }: SkillsProps) {
  const getProgressWidth = (level: string) => {
    switch(level?.toLowerCase()) {
      case 'expert': return '100%';
      case 'advanced': return '80%';
      case 'intermediate': return '60%';
      case 'beginner': return '40%';
      default: return '50%';
    }
  };
  
  const getDotFilled = (level: string, dotIndex: number) => {
    const levelLower = level?.toLowerCase() || '';
    if (levelLower === 'expert') return true;
    if (levelLower === 'advanced') return dotIndex < 4;
    if (levelLower === 'intermediate') return dotIndex < 3;
    if (levelLower === 'beginner') return dotIndex < 2;
    return dotIndex < 3;
  };
  
  return (
    <section className="mb-8">
      <h2 className="section-title">Skills</h2>
      
      <div className="space-y-3">
        {data.map((skill, index) => (
          <div key={index} className="mb-2">
            <h3 className="font-semibold">{skill.name}</h3>
            <div>
              {/* <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: getProgressWidth(skill.level || '') }}
                ></div>
              </div> */}
              
              <div className="skill-dots">
                {[0, 1, 2, 3, 4].map((dot) => (
                  <div 
                    key={dot}
                    className={`skill-dot ${getDotFilled(skill.level || '', dot) ? 'skill-dot-filled' : 'skill-dot-empty'}`}
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