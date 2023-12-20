
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Card from './components/Card';
import Grid from './components/Grid';
import Footer from './components/Footer';


function App() {
  return (
  <div>
    <Header/>
    <Hero/>
    <Card/>
    <div className='gridclass'>
    <Grid />
    </div>
    <Footer/>
  </div>
    
  );
}

export default App;
