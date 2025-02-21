import './App.css';
import Navbar from'./components/Navbar'
import RightSlidebar from './components/RightSidebar';
import Banner from './components/Banner';
import Feature from './components/Feature';
import Description from './components/Description';
import From from './components/Form';
import Progressbar from './components/Progressbar';
import Departments from './components/Departments';
import Statisticslist from './components/Statisticslist';
import Patientgallery from './components/Patientgallery';
import Testimonial from './components/Testimonial';
import Blogs from './components/Blogs';
import Contactpage from './components/Contactpage';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <section id="Navbar">
        <Navbar/>
      </section>
      <section id="RightSlidebar">
        <RightSlidebar/>
      </section>
      <section id="Banner">
        <Banner/>
      </section>
      <section id="Feature">
        <Feature/>
      </section>
      <section id="Description">
        <Description/>
      </section>
      <section id="Progressbar">
        <Progressbar/>
      </section>
      <section id="From">
        <From/>
      </section>
      <section id="Departments">
        <Departments/>
      </section>
      <section id="Statisticslist">
        <Statisticslist />
      </section>
      <section id="Patientgallery">
        <Patientgallery/>
      </section>
      <section id="Testimonial">
        <Testimonial/>
      </section>
      <section id="Blogs">
        <Blogs/>
      </section>
      <section id="Contactpage">
        <Contactpage/>
      </section>
      <section id="Footer">
        <Footer/>
      </section>
    </>
  );
}

export default App;
