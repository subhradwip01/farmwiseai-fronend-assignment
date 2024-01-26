import { useEffect } from 'react';
import './App.css';
import DashBoard from './pages/DashBoard';
import { useDispatch } from 'react-redux';
import { initalizeState } from './redux/action';

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    const allProfessionalFeildInformation = localStorage.getItem('allProfessionalFeildInformation');
    if(allProfessionalFeildInformation){
      const allProfessionalFeildInformationObj = JSON.parse(allProfessionalFeildInformation);
      dispatch(initalizeState(allProfessionalFeildInformationObj));
    }
  },[])
  return (
    <div className="App">
      <DashBoard/>
    </div>
  );
}

export default App;
