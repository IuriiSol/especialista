import classes from "./Footer.module.css";
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'



const Footer = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.innerWrapper}>
        <Link to="/addProfile"> <img className={classes.logoImg} alt="specialista.pt" src={logo} /></Link>
        <span className={classes.text}>Все права защищены. ©Espe<Link className={classes.hiddenLink} to="/admin">c</Link>ialista.pt 2021</span>
        <div classes={classes.social}>
          <a className={classes.insta} href="https://www.instagram.com/especialista.pt/" target="_blank"> <i class="bi bi-instagram"></i> </a>
          <a className={classes.face} href="https://www.facebook.com/especialista.pt/" target="_blank"> <i class="bi bi-facebook"></i> </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
