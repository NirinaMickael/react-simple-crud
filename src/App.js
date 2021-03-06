 import './App.css';
import React , {Component} from 'react';
import  {BrowserRouter,Routes,Route} from "react-router-dom"
import About from './components/about/About';
import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import NotFound from './components/not-found/NotFound';
import User from './components/user/User';
class App extends Component{
  state = { // represente des differentes donnée dans composant app
    titre : "Cars"
  }
  render(){
    return (
      <>
          <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='*' element={<NotFound/>}></Route>
                <Route path='/contact'element={ <Contact/>} ></Route>  
                <Route path='/user'element={ <User/>} ></Route>  
            </Routes>
        </BrowserRouter>
      </>
    );
  }
}
export default App;
