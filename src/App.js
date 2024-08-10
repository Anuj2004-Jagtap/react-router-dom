
import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';





function App() {
  return (
    <>
      <div className="App">

        <header>
          <Navbar/>
        </header>
        <h1>Welcome to react router dom </h1>
      </div>
      <main>
        <Outlet/>
      </main>

     
    </>
  );
}

export default App;
