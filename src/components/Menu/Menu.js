import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import { Link } from 'react-router-dom'
import classes from './Menu.module.css'


const Menu = ({ open, setOpen, ...props }) => {
  
  const isHidden = open ? true : false;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <Link open={open} onClick={() => setOpen(!open)} className={classes.link} to="/">На главную</Link>
      <Link open={open} onClick={() => setOpen(!open)} className={classes.link} to="/categories">Категории</Link>
      <Link open={open} onClick={() => setOpen(!open)} className={classes.link} to="/aboutUs">О проекте</Link> 
      <Link open={open} onClick={() => setOpen(!open)} className={classes.link} to="/addProfile">Анкета</Link> 
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;
