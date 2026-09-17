import HeroSection from '../components/hero/HeroSection';
import StatsSection from '../components/stats/StatsSection';
import FeaturesSection from '../components/features/FeaturesSection';
import PipelineSection from '../components/pipeline/PipelineSection';
import ExplainabilitySection from '../components/explainability/ExplainabilitySection';
import CtaSection from '../components/cta/CtaSection';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <PipelineSection />
      <ExplainabilitySection />
      <CtaSection />
    </main>
  );
}
