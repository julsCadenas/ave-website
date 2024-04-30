import '../src/styles/App.css';
import Header from './components/header'
import About from './components/about'
import Footer from './components/footer'
import Photographs from './components/photographs';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<About />} /> 
          <Route path="/about" element={<About />} />
          <Route path="/photographs" element={<Photographs/>}/>
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
