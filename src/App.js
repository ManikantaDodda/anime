import './App.css';
import Header from './components/Header';
import OverlappingSlides from './components/Home';
import OverviewSection from './components/Video';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <OverviewSection/> */}
      <OverlappingSlides/>
    </div>
  );
}

export default App;
