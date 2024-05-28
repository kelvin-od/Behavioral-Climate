
import './App.css';
import { Routes, Route} from 'react-router-dom';
import Becomemember from './pages/Becomemember';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import OurWork from './pages/OurWork';
import OurImpact from './pages/OurImpact';
import NewsAndEvents from './pages/NewsAndEvents';
import ContactUs from './pages/ContactUs';
import NoPage from './pages/NoPage';



function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
            <Route index element={<Home />} />
            <Route path='/becomemember' element={<Becomemember />} />
            <Route path='/ourwork' element={<OurWork />} />
            <Route path='/ourimpact' element={<OurImpact />} />
            <Route path='/newsandevents' element={<NewsAndEvents />} />
            <Route path='/contactus' element={<ContactUs />} />
            <Route path='*' element = {<NoPage />} />
        </Routes>
    </div>
  );
}

export default App;
