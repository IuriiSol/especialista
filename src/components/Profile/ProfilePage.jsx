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
import { OverlayTrigger, Button, Tooltip } from 'react-bootstrap';
import { useState } from 'react';


const ProfilePage = (props) => {
  const [tooltip, setTooltip] = useState('Копировать ссылку')

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    setTooltip("Скопировано")
  }

  return (
    <StoreContext.Consumer>
    {Data => (
      <Router>
       <Route
        path=""
        name="ProfilePage"
        render={Data.length ? () => {
          const ID = props.match.params.id;
          const data = Data.find(item => item.id === ID);
          if(data) {
              return <div className={classes.wrapper}>
                  <div className={classes.goBack}>
                    <Link to="" onClick={()=> props.history.goBack()}> &#8592; НАЗАД </Link>
                  </div>
                  <div className={data ? classes.emptyPage : classes.show}>
                    <img src={emptyPage} alt="No data" />
                  </div>
                  <div className={classes.profileItem_wrapper}>
                      <OverlayTrigger
                        placement="top"
                        overlay={
                          <Tooltip id="tooltip">
                            {tooltip} 
                          </Tooltip>
                        }
                      >
                      <span className={classes.getLinkBtn} onClick={copyLink}>
                        <i class="bi bi-share"></i>
                      </span>
                      </OverlayTrigger>
                      <h1 className={classes.name}>{data.name}</h1>
                      <h2 className={classes.proffesion}>{data.profession}</h2>
                      <h3 className={data.location ? classes.location : classes.noData}><i class="bi bi-geo-alt"></i>{data.location}</h3>
                      <img className={data.photo ? classes.profilePhoto : classes.noData} src={data.photo} alt="Avatar" />
          
                      {/* <p className={classes.description}> {data.description || data.shortDescription} </p> */}
                      <div className={classes.linesWrapper}>
                        <span className={classes.description}> {data.line0 || data.cardLine0}</span>
                        <span className={classes.description}> {data.line1 || data.cardLine1}</span>
                        <span className={classes.description}> {data.line2 || data.cardLine2}</span>
                        <span className={classes.description}> {data.line3 || data.cardLine3}</span>
                        <span className={classes.description}> {data.line4 || data.cardLine4}</span>
                        <span className={classes.description}> {data.line5 || data.cardLine5}</span>
                        <span className={classes.description}> {data.line6 || data.cardLine6}</span>
                        <span className={classes.description}> {data.line7 || data.cardLine7}</span>
                        <span className={classes.description}> {data.line8 || data.cardLine8}</span>
                        <span className={classes.description}> {data.line9 || data.cardLine9}</span>
                      </div>
      
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
          return setTimeout(()=>{<Redirect to="/" />}, 1000)
          } : ()=>{<h1>Loading...</h1>}
        }/>
    </Router>

      )}
    </StoreContext.Consumer>
  )
}

export default withRouter(ProfilePage)