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
import { Redirect } from "react-router";

const IT = (props) => {
  const Data = [];

  const getData = () => {
    props.props.map((user) => {
      if (user.category === "it") {
        Data.push(user);
      }
    });
  };
  getData();

  return (
    <BrowserRouter>
      <Route
        exact
        path="/it"
        name="IT"
        render={() => (
          <div className={classes.wrapper}>
            <h1 className={classes.title}>IT-специалисты</h1>
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
                  <Link to={location => ({ ...location, pathname: "/it/" + user.id })} >
                    <Profile props={user} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      />

      <Route path="/it/:id">
          <ProfilePage  />
      </Route>
    </BrowserRouter>
  );
};

export default withRouter(IT);
