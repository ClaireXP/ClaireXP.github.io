import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar'
import Bio from './components/about/About';
import Skills from './components/about/Skills';
import Orgs from './components/orgs/Orgs';
import Resume from './components/resume/Resume';
import Footer from './components/footer/Footer';

export default function HomePage() {
  return (
    <div className='page'>
      <Header />
      <Navbar />
      <Bio />
      <Skills />
      <Orgs />
      <Resume />
      <Footer />
    </div>
  );
};
