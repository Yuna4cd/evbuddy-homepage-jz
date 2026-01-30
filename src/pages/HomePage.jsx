import Hero from '../components/Hero';
import Solution from '../components/Solution'
import HowItWorks from '../components/HowItWorks';
import Charge from '../components/Charger'
import VideoShowcase from '../components/VideoShowcase';
import Cluster from '../components/Cluster'
import PilotPlan from '../components/PilotPlan';
import Market from '../components/Market';
import News from '../components/News'
import Order from '../components/Order';

export default function HomePage() {
  return (
    <div className='home'>
      <Hero />
      <Solution />
      <HowItWorks />
      <Charge />
      <VideoShowcase />
      <Cluster />
      <PilotPlan />
      <Market />
      <News />
      <Order />
    </div>
  );
}