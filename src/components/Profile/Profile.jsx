import classes from './Profile.module.css'


const Profile = ({props}) => {
console.log(props.shortDescription);
  return (
          <div className={classes.profileCard}>
              <div className={classes.profileItem_wrapper}>
                <div className={classes.profileWrap} key={props.id}>
                  <div className={classes.profileCardHeader}>
                    <div className={classes.titleProfession}>
                      <div className={classes.name}><h5> {props.name}</h5></div>
                      <div className={classes.profession}> {props.profession} </div>
                      <div className={props.location ? classes.location : classes.noData }> <i class="bi bi-geo-alt"></i>{props.location}</div>
                    </div>
                    <img className={props.photo ? classes.profilePhoto : classes.noData} alt="profilePhoto" src={props.photo}/>
                  </div>
                  <div className={classes.description}><p>{props.shortDescription}</p></div>
                </div>
              </div> 
          </div>
  )
}

export default Profile