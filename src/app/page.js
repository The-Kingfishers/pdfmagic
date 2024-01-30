
import Banner from './banner/Banner';
import ServiceCount from '@/app/components/ui/ServiceCount/ServiceCount';
import Testimonial from './components/testimonial/Testimonial';
import Benefits from './components/Benefits/Benefits';
import Services from './services/page';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ServiceCount />
      <Testimonial></Testimonial>
      <Benefits></Benefits>
      <Services></Services>
    </div>
  );
};

export default Home;