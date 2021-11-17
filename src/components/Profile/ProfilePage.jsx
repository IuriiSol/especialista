import classes from './ProfilePage.module.css'
import {
    BrowserRouter as Router,
    Link,
    BrowserRouter,
    withRouter,
    Route
  } from "react-router-dom";
import emptyPage from "../../assets/empty.svg";



const ProfilePage = (props) => {
  const Data = [];

  const getData = () => {
    props.userData.map((user) => {
      if (user.id === props.match.params.id) {
        Data.push(user);
      }
    });
  };
  getData();
    // console.log(props.match.params.id);
  return (
    <BrowserRouter>
       <Route
        path="*/:id"
        name="Beauty"
        render={() => (
        <div className={classes.wrapper}>
            <div className={classes.goBack}>
              <Link to="" onClick={()=> props.history.goBack()}> &#8592; НАЗАД </Link>
            </div>
            <div className={Data.length ? classes.emptyPage : classes.show}>
              <img src={emptyPage} alt="No data" />
            </div>
            <div className={classes.profileItem_wrapper}>
                <h3 className={classes.name}>{Data[0].name}</h3>
                <h6 className={classes.proffesion}>{Data[0].profession}</h6>
                <h6 className={classes.location}><i class="bi bi-geo-alt"></i>{Data[0].location}</h6>
                <img className={Data[0].photo ? classes.profilePhoto : classes.noData} src={Data[0].photo} alt="Avatar" />
    
                <p className={classes.description}> {Data[0].description || Data[0].shortDescription} </p>

                <div className={classes.contacts}>
                    <h5>Контакты</h5>
                    <p className={Data[0].address ? classes.link : classes.noData} href="#"><i class="bi bi-geo"></i> {Data[0].address}</p>
                    <a className={Data[0].email ? classes.link : classes.noData} href="mailto:{props.email}"><i class="bi bi-envelope"></i> {Data[0].email}</a>
                    <a className={Data[0].phone ? classes.link : classes.noData} href="tel:{props.phone}"> <i class="bi bi-telephone"></i> {Data[0].phone}</a>
                    <a className={Data[0].site ? classes.link : classes.noData} href={Data[0].site} target="_blank"><i class="bi bi-card-list"></i> {Data[0].site}</a>
                    <a className={Data[0].instagram ? classes.link : classes.noData} href={Data[0].instagram} target="_blank"><i class="bi bi-instagram"></i> Перейти в Instagram</a>
                    <a className={Data[0].facebook ? classes.link : classes.noData} href={Data[0].facebook} target="_blank"><i class="bi bi-facebook"></i> Перейти в Facebook</a>
                    <a className={Data[0].telegram ? classes.link : classes.noData} href={Data[0].telegram} target="_blank"><i class="bi bi-telegram"></i> Перейти в телеграм</a>
                </div>
            </div>

        </div>
        )}
        />
    </BrowserRouter>

  )
}

export default withRouter(ProfilePage)