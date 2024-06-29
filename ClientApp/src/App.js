import './App.css';
import {RouterProvider , createBrowserRouter} from "react-router-dom"
import MainLayout from './Layouts/MainLayout';
import HomePage from './HomePage/HomePage';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';
import UserPage from './UserPage/UserPage';
function App() {
  
   let routes =createBrowserRouter([
     {
       path:'',
       element:<MainLayout/> ,
       children:[
         {index:true , element:<HomePage/>},
         {path:'login' , element:<Login/>},
         {path:'signup' , element:<SignUp/>},
         {path:'userpage' , element:<UserPage/>},

         //fief



       ]
     }

   ])

  return (
    <>
   <h1>hellloooooooooooooo</h1>
    </>
  );
}

export default App;