import { useEffect } from 'react';
import './App.css';
import DashBoard from './pages/DashBoard';
import { useDispatch } from 'react-redux';
import { initializeState } from './redux/reducer';

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    const allProfessionalFeildInformation = localStorage.getItem('allProfessionalFeildInformation');
    if(allProfessionalFeildInformation){
      const allProfessionalFeildInformationObj = JSON.parse(allProfessionalFeildInformation);
      dispatch(initializeState(allProfessionalFeildInformationObj));
    }
  },[])
  return (
    <div className="App">
      <DashBoard/>
    </div>
  );
}

export default App;
