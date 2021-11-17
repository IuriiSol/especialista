import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from "react-router-dom";
import StoreContext from './StoreContext';
import { db } from "./firebase";
import { collection, getDocs} from "firebase/firestore";
import { UserContextProvider } from "./context/userContext";

const Main = () => {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);

  const Data = [];
  const getData = () => {
    users.map((user) => {
      Data.push(user);
    })
  }
  getData();
  return(
    <React.StrictMode>
      <BrowserRouter>
        <StoreContext.Provider value={Data}>
          <UserContextProvider>
            <App />
          </UserContextProvider>
        </StoreContext.Provider>
      </BrowserRouter>
    </React.StrictMode>
  )
}

ReactDOM.render(
  <Main/>,
  document.getElementById('root')
);

reportWebVitals();
