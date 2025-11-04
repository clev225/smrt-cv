import { ResumeData } from '@/types/resume';
import resumeData from '@/data/Sample-Smrtcv-JsonSchema.json';

export function getResumeData(): ResumeData {
  return resumeData as ResumeData;
}