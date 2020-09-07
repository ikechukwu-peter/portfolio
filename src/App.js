import React, { useEffect, lazy, Suspense} from 'react';
import './App.css';
import Header from './components/Header';

import Footer from './components/Footer';
import Aos from 'aos';
import 'aos/dist/aos.css'


const Intro = lazy(()=> import ('./components/Intro'))

const App = () => {
  
  useEffect(() => {
    Aos.init({duration: 2000})
}, []);

  return (
  
    <div className="App">
     <Header />
     <Suspense fallback={'Loading'} >
              <Intro/>
              
              <Footer /> 
     </Suspense>
    
    </div>
    
  );
}

export default App;
