import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
  const [count, setCount] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const handleClick = () => alert('Button Clicked!');
  const handlerChange = (e) => console.log("Changed to: ", e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form Submitted!');
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [])

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
