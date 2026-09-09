import ButtonGradient from "./assets/svg/ButtonGradient.jsx";

import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Benefits from "./components/Benefits.jsx";
import Products from "./components/Products.jsx";
import ContactForm from "./components/ContactForm.jsx";
import Footer from "./components/Footer.jsx";



const App = () =>{

  return (
      <>
          <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
              <Header/>
              <Hero/>
              <Products/>
              <Benefits/>
              <ContactForm/>
              <Footer/>
          </div>

          <ButtonGradient />
      </>
  )
}

export default App
