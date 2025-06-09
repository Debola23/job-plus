import  Styles from'./App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navv } from './Components/Navv/Navv';
import { Hero } from './Components/Hero/Hero';
import { Barner1 } from './Components/Barner/Barner1';
import { SearchBox } from './Components/SearchBox/SearchBox';
import { Footer } from './Components/Footer/Footer';
import { Scroll } from './Components/Scroll/Scroll';

function App() {

  return (
    <>
      <div className={Styles.app}>
          <Navv/>
          <Hero/>
          <Barner1/>
          <SearchBox/>
          <Footer/>
          <Scroll/>
      </div>
    </>
  )
}

export default App
