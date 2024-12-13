import './App.css';
import Header from './components/Header';
import OverlappingSlides from './components/Home';
import NoticedSection from './components/Image';
import OverviewSection from './components/Video';
import TechSpc from './components/Watch';

function App() {
  return (
    <div className="App">
      <Header/>
      <OverviewSection/>
      <OverlappingSlides/>
      <NoticedSection/>
      <TechSpc/>
      
    </div>
  );
}

export default App;
