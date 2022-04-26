import CardsContainer from "./components/CardsContainer";
import { Routes, Route } from 'react-router-dom'
import Landing from "./components/Landing";
import Detail from "./components/Detail";


function App (){
  
  return(
  <div>
    <Routes >
      <Route path="/rick-y-morty-gh-pages" element={<Landing/>}/>
      <Route exact path='/rick-y-morty-gh-pages/home' element={<CardsContainer/>}/>
      <Route exact path="/rick-y-morty-gh-pages/detail/:id" element={<Detail/>}/>
    </Routes>
  </div>  
  )
}
export default App;

