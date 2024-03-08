import {useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import authServce from "./appwrite/auth";
import {login,logout} from "./store/authFile"
import {Header, Footer} from './components'
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()
  useEffect(() => {
    authServce.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(login({userData}))
      }
      else{
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, []);

  return !loading ? (
    <div className="min-h-screen flex flex-wrap
    content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <main>
          Todo: <Outlet/>
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;