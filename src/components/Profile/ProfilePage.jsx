import classes from './ProfilePage.module.css'
import {
    BrowserRouter as Router,
    Link,
    withRouter,
    Route
  } from "react-router-dom";
import emptyPage from "../../assets/empty.svg";
import StoreContext from "../../StoreContext";
import { Redirect } from 'react-router';

const ProfilePage = (props) => {

  return (
    <StoreContext.Consumer>
    {Data => (
       <Route
        path=""
        name="ProfilePage"
        render={() => {

          const ID = props.match.params.id;
          const data = Data.find(item => item.id === ID);
          if(data) {
              return         <div className={classes.wrapper}>
              <div className={classes.goBack}>
                <Link to="" onClick={()=> props.history.goBack()}> &#8592; НАЗАД </Link>
              </div>
              <div className={data ? classes.emptyPage : classes.show}>
                <img src={emptyPage} alt="No data" />
              </div>
              <div className={classes.profileItem_wrapper}>
                  <h3 className={classes.name}>{data.name}</h3>
                  <h6 className={classes.proffesion}>{data.profession}</h6>
                  <h6 className={classes.location}><i class="bi bi-geo-alt"></i>{data.location}</h6>
                  <img className={data.photo ? classes.profilePhoto : classes.noData} src={data.photo} alt="Avatar" />
      
                  <p className={classes.description}> {data.description || data.shortDescription} </p>
  
                  <div className={classes.contacts}>
                      <h5>Контакты</h5>
                      <p className={data.address ? classes.link : classes.noData} href="#"><i class="bi bi-geo"></i> {data.address}</p>
                      <a className={data.email ? classes.link : classes.noData} href="mailto:{props.email}"><i class="bi bi-envelope"></i> {data.email}</a>
                      <a className={data.phone ? classes.link : classes.noData} href="tel:{props.phone}"> <i class="bi bi-telephone"></i> {data.phone}</a>
                      <a className={data.site ? classes.link : classes.noData} href={data.site} target="_blank"><i class="bi bi-card-list"></i> {data.site}</a>
                      <a className={data.instagram ? classes.link : classes.noData} href={data.instagram} target="_blank"><i class="bi bi-instagram"></i> Перейти в Instagram</a>
                      <a className={data.facebook ? classes.link : classes.noData} href={data.facebook} target="_blank"><i class="bi bi-facebook"></i> Перейти в Facebook</a>
                      <a className={data.telegram ? classes.link : classes.noData} href={data.telegram} target="_blank"><i class="bi bi-telegram"></i> Перейти в телеграм</a>
                  </div>
              </div>
  
          </div>
          }
          return <Redirect to={props.match.params.id} />
          }
        }/>
      )}
    </StoreContext.Consumer>
  )
}

export default withRouter(ProfilePage)