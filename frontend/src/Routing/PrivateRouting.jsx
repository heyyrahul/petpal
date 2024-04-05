

import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRouting = ({children}) => {

  let isAuth = useSelector(store=>store.isLoggedIn);
  const token = localStorage.getItem("token");
  if(token){
    isAuth=true;
  }
  else{
    isAuth=false;
  }
  console.log(isAuth);

  return (
   isAuth ? children : <Navigate to={"/login"} />
  )
}

export default PrivateRouting
