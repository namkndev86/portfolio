import { Metadata } from 'next';
import { Container } from '@/components/common/Container';
import { ResumeViewer } from '@/features/resume/ResumeViewer';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Resume & CV | ${SITE_CONFIG.name}`,
  description: 'Online Resume and downloadable CV for Senior Software Architect & Fullstack Engineer Nam K. Nguyen.',
};

export default function ResumePage() {
  return (
    <div className="py-12 sm:py-20 bg-background min-h-screen text-foreground transition-colors">
      <Container>
        <ResumeViewer />
      </Container>
    </div>
  );
}
