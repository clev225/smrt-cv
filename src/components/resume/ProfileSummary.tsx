import { Basics } from '@/types/resume';

interface ProfileSummaryProps {
  data: Basics['summary'];
}

export default function ProfileSummary({ data }: ProfileSummaryProps) {
  if (!data) return null;

  return (
    <section>
      <h3 className="main-section-title">Profile Summary</h3>
      <p className="text-sm">{data}</p>
    </section>
  );
}