import Profile from "../../Profile/Profile";
import classes from "./Category.module.css";
import emptyPage from "../../../assets/empty.svg";
import {
  BrowserRouter as Router,
  Route,
  Link,
  BrowserRouter,
  withRouter,
} from "react-router-dom";
import ProfilePage from "../../Profile/ProfilePage";

const Other = (props) => {
  const Data = [];

  const getData = () => {
    props.props.map((user) => {
      if (user.category === "other") {
        Data.push(user);
      }
    });
  };
  getData();

  return (
    <BrowserRouter>
      <Route
        exact
        path="/other"
        name="Other"
        render={() => (
          <div className={classes.wrapper}>
            <h2 className={classes.title}>Разное</h2>
            <div className={classes.goBack}>
              <Link to="" onClick={() => props.history.goBack()}>
                {" "}
                &#8592; НАЗАД{" "}
              </Link>
            </div>
            <div className={Data.length ? classes.emptyPage : classes.show}>
              <img className={classes.noDataImg} src={emptyPage} alt="No data" />
            </div>
            <div className={classes.categoryWrapper}>
              {Data.map((user) => (
                <div className={classes.profileWrap} key={user.id}>
                  <Link to={"/other/" + user.id}>
                    <Profile props={user} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      />
      <Route exact path="/other/:id">
        <ProfilePage userData={Data} />
      </Route>
    </BrowserRouter>
  );
};

export default withRouter(Other);
