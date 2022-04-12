import '../styles/app/app.css';
import MainPage from './MainPage';
import Resume from './Resume';
import { Routes,Route } from 'react-router-dom';
function App() {

  return (
    <div className='back-container'>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>  
    </div>
  )
}

export default App