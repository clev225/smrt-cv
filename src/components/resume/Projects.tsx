import { Project } from '@/types/resume';

interface ProjectsProps {
  data: Project[];
}

export default function ProjectsSection({ data }: ProjectsProps) {
  return (
    <section className="mb-6">
      <h2 className="text-2xl font-bold mb-4 border-b pb-2">Projects</h2>
      
      <div className="space-y-4">
        {data.map((project, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-semibold">
                {project.url ? (
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    {project.name}
                  </a>
                ) : (
                  project.name
                )}
              </h3>
              <div className="text-gray-600">
                {new Date(project.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}
                {' - '}
                {new Date(project.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}
              </div>
            </div>
            
            <p className="my-2 text-gray-700">{project.description}</p>
            
            {project.highlights.length > 0 && (
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {project.highlights.map((highlight, i) => (
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