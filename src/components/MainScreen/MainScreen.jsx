import React from "react";
import classes from "./MainScreen.module.css";
import Carousel from 'react-elastic-carousel'
import Profile from "../Profile/Profile";
import {
  BrowserRouter as Router,
  Route,
  Link,
  BrowserRouter,
  withRouter,
} from "react-router-dom";
import ProfilePage from "../Profile/ProfilePage";


function MainScreen(props) {

  const Data = [];
  
  const getData = () => {
    props.props.map((user) => {
      if(user.isPromoted){
        Data.push(user);
      }
    })
  }
  getData();



  const carouselRef = React.useRef(null);
  const onNextStart = (currentItem, nextItem) => {
    if (currentItem.index == nextItem.index) {
      carouselRef.current.goTo(0);
    }
  };
  const onPrevStart = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
      carouselRef.current.goTo(Data.length);
    }
  };
  
  const Loop = (currentItem) => {
    if (currentItem.index == Data.length - 1)  {
      setTimeout(() => {
        carouselRef.current.goTo(0);
      }, 2500);
    }
  };



  return (
    <BrowserRouter>
    <Route
        exact
        path="/"
        name="MainScreen"
        render={() => (

    <div className={classes.wrapper}>
      <div className={classes.mainTitle}>
        <span className={classes.titleAccent}>Специалист</span> на растоянии клика
      </div>
      <div className={classes.mainScreen}>
        <div className={classes.slider}>
          <h5 className={classes.subtitle}>Вам могут быть интересны:</h5>
          <Carousel
            onChange={Loop}
            ref={carouselRef}
            onPrevStart={onPrevStart}
            onNextStart={onNextStart}
            disableArrowsOnEnd={false}
            enableAutoPlay autoPlaySpeed={4500}
            itemPadding={[0, 5]}
            className={classes.carousel}
          >
            {Data.map((user) => (
              <div className={classes.profileWrapSlider} key={user.id}>

                  <Link to={"/recomended/" + user.id}>
                    <Profile props={user} />
                  </Link>

              </div>
            ))}
          </Carousel>
        </div>

        <div className={classes.about}>
          <h5 className={classes.subtitle}>Especialista.pt - это:</h5>
          <div className={classes.aboutContent}>
            <ul>
              <li> - сообщество русскоговорящих специалистов в Португалии</li>
              <li> - постоянное пополнения базы новыми специалистами</li>
              <li> - мастера разных сфер деятельности в одном месте</li>
              <li> - более 20 категорий и удобный поиск по ним</li>
              <li> - отличный способ прорекламировать усвои услуги</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    )}
    />
    <Route exact path="/recomended/:id">
      <ProfilePage userData={Data} />
    </Route>
  </BrowserRouter>
  );
};

export default withRouter(MainScreen);