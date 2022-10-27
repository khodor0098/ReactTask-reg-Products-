import {Route,Routes} from 'react-router-dom';
import Dashboard from './pages/Dashboard'
import Registration from './pages/Registration'
import Layou from './component/layout/Layou'
function App() {
  return (
    <div>
      <Layou/>
    <div className='main'>
  
  <Routes>
  <Route path='/' element={<Registration/>}/>

      
  <Route path='/Dashboard' element={<Dashboard/>}/>
  </Routes>

  
    </div>
    </div>
  );
}

export default App;
