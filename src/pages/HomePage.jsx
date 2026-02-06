import Hero from '../components/HomePageComponents/Hero';
import Solution from '../components/HomePageComponents/Solution'
import HowItWorks from '../components/HomePageComponents/HowItWorks';
import Charge from '../components/HomePageComponents/Charger'
import VideoShowcase from '../components/HomePageComponents/VideoShowcase';
import Cluster from '../components/HomePageComponents/Cluster'
import PilotPlan from '../components/HomePageComponents/PilotPlan';
import Market from '../components/HomePageComponents/Market';
import News from '../components/HomePageComponents/News'
import Order from '../components/HomePageComponents/Order';

export default function HomePage() {
  return (
    <div className='home'>
      <Hero />
      <Solution />
      <HowItWorks />
      <Charge />
      <VideoShowcase />
      <PilotPlan />
      <Cluster />
      <Market />
      <News />
      <Order />
    </div>
  );
}