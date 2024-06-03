
import HarryPotterList from './pages/HarryPotterList'
import HarryPotterCharacterDetailedView from './pages/HarryPotterCharacterDetailedView'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {Link} from "react-router-dom"


import './App.css'

function App() {
  return (
    <>
      <Router>
        <div class="nav">
      <Link to="/">
        <h1>Harry Potter Api Testing!</h1>
      </Link>
        </div>
        <div className='page-style'>
        <Routes>
          <Route path="/" element={<Link to="/characters"><h3>Characters</h3></Link>} />
          <Route path="/characters" element={<HarryPotterList/>} />
          <Route path="/characters/:characterId" element={<HarryPotterCharacterDetailedView/>} />
          <Route path="/*" element={<p>Error Does not exist</p>}/>
        </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
