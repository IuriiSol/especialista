import classes from "./Search.module.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  BrowserRouter,
  withRouter,
} from "react-router-dom";
import { useState } from "react";
import Profile from "../Profile/Profile";
import emptyPage from "../../assets/empty.svg";
import ProfilePage from "../Profile/ProfilePage";

export const searchData = [];

const Search = ( props ) => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = props.props.filter((value) => {
      return (
        value.tags.toLowerCase().includes(searchWord.toLowerCase()) |
        value.name.toLowerCase().includes(searchWord.toLowerCase()) |
        value.profession.toLowerCase().includes(searchWord.toLowerCase()) |
        value.description.toLowerCase().includes(searchWord.toLowerCase())
      );
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };
  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };
  return (
    <BrowserRouter>
      <Route
        exact
        path="/searchResult"
        name="searchResult"
        render={() => (
          <div className={classes.wrapper}>
            <div className={classes.searchContainer}>
              <input
                type="text"
                placeholder="Поиск..."
                value={wordEntered}
                onChange={handleFilter}
              />
              <button disabled>
                <Link to="/searchResult">
                  {" "}
                  <i class="bi bi-search"></i>{" "}
                </Link>
              </button>
            </div>
            <div className={classes.goBack}>
              <Link to="" onClick={() => props.history.goBack()}>
                {" "}
                &#8592; НАЗАД{" "}
              </Link>
            </div>
            <div
              className={filteredData.length ? classes.emptyPage : classes.show}
            >
              <img
                className={classes.nodataResult}
                src={emptyPage}
                alt="No data"
              />
            </div>
            {filteredData.length != 0 && (
              <div className={classes.searchResultContainer}>
                {filteredData.map((user) => {
                  return (
                    <Link to={"/searchResult/" + user.id}>
                      <Profile props={user} />
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        )}
      />
      <Route exact path="/searchResult/:id">
        <ProfilePage userData={filteredData} />
      </Route>
    </BrowserRouter>
  );
};

export default withRouter(Search);
