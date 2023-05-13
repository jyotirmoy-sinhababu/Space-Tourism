import './App.css';

import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/homePage/HomePage';
import AllPageCnt from './pages/allPages/AllPageCnt';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<AllPageCnt />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
