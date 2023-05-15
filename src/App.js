import './App.css';

import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/homePage/HomePage';
import AllPageCnt from './pages/allPages/AllPageCnt';
import DestinationPage from './pages/destination/DestinationPage';
import ControlCount from './countState/ControlCount';

function App() {
  return (
    <ControlCount>
      <div className='App'>
        <Routes>
          <Route path='/' element={<AllPageCnt />}>
            <Route index element={<HomePage />} />
            <Route path='/home' element={<HomePage />} />
            <Route path='/destination' element={<DestinationPage />} />
          </Route>
        </Routes>
      </div>
    </ControlCount>
  );
}

export default App;
