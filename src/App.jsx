import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import CardUser from "./components/CardUser";
import { useDispatch } from "react-redux";
import { setUserNameGlobal } from "./store/slices/userName.slice";
import MapUser from "./components/MapUser";

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    // Endpoint name
    const URL = "https://randomuser.me/api/";
    axios
      .get(URL)
      .then((res) => setUser(res.data.results[0]))
      .catch((err) => console.log(err));
  }, []);

  const dispatch = useDispatch();
  dispatch(setUserNameGlobal("Bienvenido al sitio web te presento a"));
  return (
    <div className="App">
      <CardUser user={user} />
      <div className="location">
        <span>Ubicacion actual</span>
      </div>
      {user && <MapUser user={user} />}
    </div>
  );
}

export default App;
