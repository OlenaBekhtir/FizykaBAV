import './App.css';
import { Routes, Route } from 'react-router-dom';
import { MainPage } from './pages/MainPage/MainPage';
import { MehanikaPage } from './pages/Mehanika/MehanikaPage';
import { ThermoDinamikaPage } from './pages/ThermoDinamika/ThermoDinamikaPage';
import { ElectricaPage } from './pages/Electrica/ElectricaPage';
import { OptikaPage } from './pages/Optika/OptikaPage';
import { YaderkaPage } from './pages/Yaderka/YaderkaPage';


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

  return (

    <Routes>
      {/* {...routes.map(r => <Route {...r} />)} */}
      {routes.map((route, index) => (
        <Route key={index} {...route} />
      ))}
    </Routes>

  )
}

export default App
