import CardsContainer from "./components/CardsContainer";
import { Routes, Route } from 'react-router-dom'
import Landing from "./components/Landing";
import Detail from "./components/Detail";


function App (){
  
  return(
  <div>
    <Routes  basename='/rick-y-morty-gh-pages'>
      <Route exact path="/" element={<Landing/>}/>
      <Route exact path='/home' element={<CardsContainer/>}/>
      <Route exact path="/detail/:id" element={<Detail/>}/>
    </Routes>
  </div>  
  )
}
export default App;

