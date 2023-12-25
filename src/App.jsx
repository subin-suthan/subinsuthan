import { BrowserRouter } from "react-router-dom";
import {
  About, Contact, Experience, Feedbacks,
  Hero, Navbar, Tech, Works, StarsCanvas,Blog
} from "./components";

const App = () => {


  return (
    <BrowserRouter>
      <div className="relative z-0">
        <div className="bg-hero-pattern bg-cover
                   bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About/>
        <Experience/>
        {/* <Route path="/Blogs" component={Blog} /> */}
        <Tech/>
        <Works/>
        {/* <Feedbacks/> */}
        <div className="relative z-0">
          <Contact/>
          
          <StarsCanvas/>
        </div>
        <div>
       <div className=""> <p className="justify">&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
       &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
       &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
       &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
       &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;Copyright © 2023 Subin Suthan</p></div>
        </div>
      </div>
      
    </BrowserRouter>

  )
}

export default App
