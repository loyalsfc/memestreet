import { useEffect } from 'react'
import Home from './page/Home'
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(()=>{
    AOS.init({once: true, duration: 800});
  }, [])
  return (
    <div className="overflow-x-hidden">
      <Home />
    </div>
  )
}

export default App
