
import './App.css'
import Homepage from './components/Homepage'
import Editorpage from './components/Editorpage';
import {Routes,Route} from 'react-router-dom';

function App() {
 

  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/editor/:roomid' element={<Editorpage/>} />

      </Routes>
  
    </>
  )
}

export default App
