import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import { styled } from "@mui/system";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { makeStyles } from " @mui/styles";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles (theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar
  }
})) 





export function Header(props) {
  const classes = useStyles();
  // const [value, setValue] = useState(0);
  // const [anchorEl, setAnchorEl] = useState(null);
  // const [open, setOpen] = useState(false);

  // const clickHandler = (e) => {
  //   setAnchorEl(e.currentTarget);
  //   setOpen(true);
  // };

  // const closeHandler = (e) => {
  //   setAnchorEl(null);
  //   setOpen(false);
  // };

  // useEffect(() => {
  //   if (window.location.pathname === "/" && value !== 0) {
  //     setValue(0);
  //   } else if (window.location.pathname === "/services" && value !== 1) {
  //     setValue(1);
  //   } else if (window.location.pathname === "/revolution" && value !== 2) {
  //     setValue(2);
  //   } else if (window.location.pathname === "/about" && value !== 3) {
  //     setValue(3);
  //   } else if (window.location.pathname === "/contact" && value !== 4) {
  //     setValue(4);
  //   } else if (window.location.pathname === "/estimate" && value !== 5) {
  //     setValue(5);
  //   }
  // }, [value]);

  // const changeHandler = (e, newValue) => {
  //   setValue(newValue);
  // };

  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters>

          <img src={logo} alt= "logo Image" />





            {/* <LogoButton
              disableRipple
              component={Link}
              to="/"
              onClick={() => setValue(0)}
            >
              <Img style={{ height: "7em" }} src={logo} alt="company logo" />{" "}
            </LogoButton>
            <StyledTabs
              value={value}
              onChange={changeHandler}
              indicatorColor="secondary"
              textColor="secondary"
            >
              <StyledTab label="Home" component={Link} to="/" />
              <StyledTab
                onMouseOver={(e) => {
                  clickHandler(e);
                }}
                label="Services"
                component={Link}
                to="/services"
              />
              <StyledTab label="Revolution" component={Link} to="/revolution" />
              <StyledTab label="About" component={Link} to="/about" />
              <StyledTab label="Contact" component={Link} to="/contact" />
            </StyledTabs>
            <StyledButton variant="contained" color="secondary">
              Estimate
            </StyledButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={closeHandler}
              MenuListProps={{ onMouseLeave: closeHandler }}
            >
              <MenuItem onClick={closeHandler} component={Link} to="/custom-software" >Custom Softwares Development</MenuItem>
              <MenuItem onClick={closeHandler} component={Link} to="/mobile-apps" >Mobile App Development</MenuItem>
              <MenuItem onClick={closeHandler} component={Link} to="/websites" >Websites Development</MenuItem>
            </Menu> */}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} ></div>
      {/* <Div /> */}
    </>
  );
}
