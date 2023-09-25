
import './App.css'
import { Routes, Route } from 'react-router';
import Ordenes from './components/paginas/Ordenes';
import Menu from './components/paginas/Menu';
import NuevoPlatillo from './components/paginas/NuevoPlatillo';
import Sidebar from './components/ui/Sidebar';

const App= () => {


  return (
    <div>
      <Routes>
        <Route path='/' element={<Ordenes/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='nuevo' element={<NuevoPlatillo/>}/>
      </Routes>
    </div>
  )
}

export default App
