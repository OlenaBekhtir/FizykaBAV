import './App.css';
import { useState } from 'react'; // Импортируем хук useState
import { Routes, Route } from 'react-router-dom';
import { MainPage } from './pages/MainPage/MainPage';
import { MehanikaPage } from './pages/Mehanika/MehanikaPage';
import { ThermoDinamikaPage } from './pages/ThermoDinamika/ThermoDinamikaPage';
import { ElectricaPage } from './pages/Electrica/ElectricaPage';
import { OptikaPage } from './pages/Optika/OptikaPage';
import { YaderkaPage } from './pages/Yaderka/YaderkaPage';
import { Footer } from './components/Footer/Footer';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Header } from './components/Header/Header';


const routes = [
  {
    path: "/",
    element: <MainPage />,
    errorElement: <div>Not found</div>
  },
  {
    path: "/mehanika",
    element: <MehanikaPage />,
    errorElement: <div>Not found</div>
  },
  {
    path: "/thermodinamika",
    element: <ThermoDinamikaPage />,
    errorElement: <div>Not found</div>
  },
  {
    path: "/electrica",
    element: <ElectricaPage />,
    errorElement: <div>Not found</div>
  },
  {
    path: "/optika",
    element: <OptikaPage />,
    errorElement: <div>Not found</div>
  },
  {
    path: "/yaderka",
    element: <YaderkaPage />,
    errorElement: <div>Not found</div>
  },
];


function App() {

  const [showSidebar, setShowSidebar] = useState(true); // Состояние для отображения сайдбара

  return (
    <>
      <div className='main'>

        <Header/> 
        <Sidebar/> 

        <Routes>
          {/* {...routes.map(r => <Route {...r} />)} */}
          {routes.map((route, index) => (
            <Route key={index} {...route} />
          ))}
        </Routes>
        </div>
        <Footer />
   
    </>
  )
}

export default App
