import classes from "./Footer.module.css";
import logo from '../../assets/logo.svg'


const Footer = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.innerWrapper}>
        <img className={classes.logoImg} alt="specialista.pt" src={logo} />
        <span className={classes.text}>Все права защищены. ©Especialista.pt 2021</span>
        <div classes={classes.social}>
          <a className={classes.insta} href="https://www.instagram.com/especialista.pt/" target="_blank"> <i class="bi bi-instagram"></i> </a>
          <a className={classes.face} href="https://www.facebook.com/profile.php?id=100074275574141" target="_blank"> <i class="bi bi-facebook"></i> </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
