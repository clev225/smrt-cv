import { ResumeData } from '@/types/resume';
import BasicsSection from './Basics';
import WorkSection from './Work';
import EducationSection from './Education';
import CertificatesSection from './Certificates';
import PublicationsSection from './Publications';
import AwardsSection from './Awards';
import LanguagesSection from './Languages';
import InterestsSection from './Interests';
import ProjectsSection from './Projects';
import ReferencesSection from './References';
import SkillsSection from './Skills';
// import ProfileSummary from './ProfileSummary'; // This will be removed
import AdvisorySection from './Advisory';

interface ResumeProps {
  data: ResumeData;
}

export default function Resume2({ data }: ResumeProps) {
  return (
    <article className="resume-container template-2">
      {/* Basics / header */}
      {data.basics && <BasicsSection data={data.basics} />}

      <div className="resume-content">
        {/* Sidebar */}
        <div className="resume-sidebar">
          {data.basics?.nationality && (
            <section className="mb-6">
                <h3 className="section-title">Nationality</h3>
              <p>{data.basics.nationality}</p>
            </section>
          )}
          {data.skills && data.skills.length > 0 && <SkillsSection data={data.skills} />}
          {data.languages && data.languages.length > 0 && <LanguagesSection data={data.languages} />}
          {data.interests && data.interests.length > 0 && <InterestsSection data={data.interests} />}
        </div>
        
        {/* Main content */}
        <div className="resume-main">
          {/* Profile Summary */}
          {data.basics?.summary && (
            <section>
              <h3 className="main-section-title">Profile Summary</h3>
              <p className="text-sm">{data.basics.summary}</p>
            </section>
          )}

          {data.work && data.work.length > 0 && <WorkSection data={data.work} />}
          {data.education && data.education.length > 0 && (
            <EducationSection data={data.education} />
          )}
          {data.advisory && data.advisory.length > 0 && (
            <AdvisorySection data={data.advisory} />
          )}
          {data.projects && data.projects.length > 0 && (
            <ProjectsSection data={data.projects} />
          )}
          {data.certificates && data.certificates.length > 0 && (
            <CertificatesSection data={data.certificates} />
          )}
          {data.publications && data.publications.length > 0 && (
            <PublicationsSection data={data.publications} />
          )}
          {data.awards && data.awards.length > 0 && (
            <AwardsSection data={data.awards} />
          )}
          {data.references && data.references.length > 0 && (
            <ReferencesSection data={data.references} />
          )}
        </div>
      </div>
    </article>
  );
}
