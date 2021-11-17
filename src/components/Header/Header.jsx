import logo from "./../../assets/ESPECIALISTA.svg";
import classes from "./Header.module.css";
import { Link } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react';
import { useOnClickOutside } from '../../hooks';
import Burger from '../Burger/Burger';
import Menu from '../Menu/Menu';
import FocusLock from 'react-focus-lock';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme';
import { GlobalStyles } from '../../global';
import { Toast, Col } from 'react-bootstrap';


const Header = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  const [showA, setShowA] = useState(false);
  const toggleShowA = () => setShowA(false);

  useEffect(() => {
    setTimeout(() => {
      setShowA(true);
    }, 30000);
  }, []);


  useOnClickOutside(node, () => setOpen(false));
  return (
    <>
      <div>
        <ThemeProvider theme={theme}>
          <>
            <GlobalStyles />
            <div ref={node}>
              <FocusLock disabled={!open}>
                <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                <Menu open={open} setOpen={setOpen} id={menuId} />
              </FocusLock>
            </div>
          </>
        </ThemeProvider>
      </div>
      <div className={classes.wrapper}>
        <Link to="/"><img className={classes.logoImg} alt="specialista.pt" src={logo} /></Link>
      </div>

      {/* {showA &&
        <Col lg={12} className={classes.toast}>
          <Toast show={showA} onClose={toggleShowA} delay={20000} autohide>
            <Toast.Header>
              <strong className="me-auto"><i class="bi bi-bookmark-check"></i></strong>
            </Toast.Header>
            <Toast.Body>Добавь сайт в закладки, чтобы не потерять.</Toast.Body>
          </Toast>
        </Col>
      } */}


      <Link className={classes.searchButton} to="/searchResult"> <i class="bi bi-search"></i> </Link>
    </>
  );
};

export default Header;
