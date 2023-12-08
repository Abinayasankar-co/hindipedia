import './App.css';
import Home from './components/home';
import React, { useEffect, useState } from 'react';
import About from './components/About';
import Services from './components/services';
import { Route,Routes} from 'react-router-dom';
import Login from './components/login';
import './login.css';
import Signup from './components/signup';
import Dashboard from './components/dashboard/dashboard'; 
import Help from './components/help';
import Logout from './components/logout';
import ProtectedRoute from './components/ProtectedRoutes';
import { AuthProvider } from '../src/services/auth';
import Video from './components/video/video';
import Course1 from './components/parthmic/parthmic';
import Course from './components/teachers/course';
import RoomPage from './components/videoclass';
import ClassRoom from './components/class';
import TeachDashboard from './components/teachers/teachdashboard';



function App() {

  //check if user logged in 
  {/* const [auth,setauth] = useState(false);
   const [auth1,setauth1] = useState(true);

  const isLoggedIn = async() =>{
    try{
      const res = await fetch('/auth',{
        method:"GET",
        headers :{
          Accept:"application/json",
          "Content-Type" : "application/json",
        },
        credentials:"include"
      });

      if(res.status === 200){
        setauth(true)
        setauth1(false)
      }
      if(res.status === 401){
        setauth(false)
        setauth1(true)
      }

    }catch(error){
          console.log(error);
    }
}
  

  useEffect(()=>{
      isLoggedIn();
  },[]);

*/}
  return (
    <AuthProvider>
    <Routes>      
        <Route path='/' element={<Home />}/>
        <Route path='/contact' element={<About/>} />
        <Route path='/services' element={<Services />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>}  />
        <Route path='/dashboard/:name' /*Enter login condition while using link*/element={
             <Dashboard/>
       } /> 
        <Route path='/logout' element={<Logout/>} />
        <Route path='/help' element={<Help/>}/>
        <Route path='/prathmic' element={<Course1/>}/>
        <Route path='/instructor' element={<Course/>}/>
       <Route path='/joinclass' element={<RoomPage/>}/>
       <Route path='/room/:roomId/:userName' element={<ClassRoom/>}/>
       <Route path='/instruct/:intructor' element={<TeachDashboard/>}/>
    </Routes>
         
      {/*<Route path="/video" element={<Video />}/>*/}
    </AuthProvider>
  );
}

export default App;
