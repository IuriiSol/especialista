import { useState, useEffect } from "react";
import {db} from '../firebase';
import classes from './addNewProfile.module.css';
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
  } from "firebase/firestore";
import { Button } from 'react-bootstrap';
import { useUserContext } from "../context/userContext";
import emptyPage from "../assets/empty.svg"


  function OnModeration() {
      
    const { user, logoutUser } = useUserContext();
    const [users, setUsers] = useState([]);
    const usersCollectionRefPending = collection(db, "pending");
    const usersCollectionRefApproved = collection(db, "users");



  
    const promoteUser = async (id, isPromoted) => {
      const userDoc = doc(db, "pending", id);
      const newFields = { isPromoted: !isPromoted};
      await updateDoc(userDoc, newFields);
    };
  
    const deleteUser = async (id) => {
      const userDoc = doc(db, "pending", id);
      await deleteDoc(userDoc);
    };

    useEffect(() => {
      const getUsers = async () => {
        const data = await getDocs(usersCollectionRefPending);
        setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };
  
      getUsers();
    }, []);


    function refreshPage() {
      window.location.reload(true);
    }

    return (
      <div className={classes.wrapper}>
        <button className={classes.logout} onClick={logoutUser}>Log out</button>
        <h3 className="mb-3">На модерации</h3>
        <div
              className={users.length ? classes.emptyPage : classes.show}
            >
              <img
                className={classes.nodataResult}
                src={emptyPage}
                alt="No data"
              />
            </div>
        <div className={classes.profilesWrapper}>

          {users.map((user) => {

          const approveUser = async () => {
            await addDoc(usersCollectionRefApproved, { 
                                name: user.name, 
                                isPromoted: user.isPromoted,
                                category: user.category, 
                                photo: user.photo, 
                                location: user.location,
                                address: user.address,
                                profession: user.profession,
                                shortDescription: user.shortDescription,
                                description: user.description,
                                phone: user.phone,
                                email: user.email,
                                site: user.site,
                                instagram: user.instagram,
                                facebook: user.facebook,
                                telegram: user.telegram,
                                tags: user.tags
            });
          }

            return (
              <div className={classes.profileItem}>
                {" "}
                <h5>Name: {user.name}</h5>
                <h5>Is promoted: {user.isPromoted ? "Yes" : "No"}</h5>
                <h5>Category: {user.category}</h5>
                <h5>Photo link: {user.photo ? "Yes" : "No"}</h5>
                <img className={user.photo ? classes.profilePhoto : classes.hide} alt="profilePhoto" src={user.photo}/>
                <h5>Location: {user.location || "Not indicated"}</h5>
                <h5>Address: {user.address || "Not indicated"}</h5>
                <h5>Profession: {user.profession}</h5>
                <h5>Short description: {user.shortDescription}</h5>
                <h5>Description: {user.description}</h5>
                <h5>Tags: {user.tags}</h5>
                <h5>Phone: {user.phone || "Not indicated"}</h5>
                <h5>Email: {user.email || "Not indicated"}</h5>
                <h5>Site: {user.site || "Not indicated"}</h5>
                <h5>Instagram: {user.instagram || "Not indicated"}</h5>
                <h5>Facebook: {user.facebook || "Not indicated"}</h5>
                <h5>Telegram: {user.telegram || "Not indicated"}</h5>
                
                <Button className="mb-0 mt-3" variant="primary"
                  onClick={() => {
                    promoteUser(user.id, user.isPromoted);
                    setTimeout(refreshPage, 500)
                  }}
                >
                  Promote
                </Button>{' '}
                <Button className="mb-0 mt-3" variant="danger"
                  onClick={() => {
                    deleteUser(user.id);
                    setTimeout(refreshPage, 1500);
                  }}
                  >
                  Delete User
                </Button>{' '}
                <Button className="mb-0 mt-3" variant="success" 
                    onClick={() => {
                      approveUser()
                      deleteUser(user.id);
                      setTimeout(refreshPage, 1000)
                    }}> Approve User 
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  
  export default OnModeration;