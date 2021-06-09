import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import PropTypes from "prop-types";
import {
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Drawer,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
});
function SideDrawer(props) {
  const { list } = useStyles;

  const [state, setState] = useState({
    drawerOpen: false,
  });

  const { drawerOpen } = state;

  const handleDrawerOpen = () => {
    setState((prevState) => ({
      ...prevState,
      drawerOpen: true,
    }));
  };
  const handleDrawerClose = () => {
    setState((prevState) => ({
      ...prevState,
      drawerOpen: false,
    }));
  };

  const getDrawerList = () => {
    return (
      <div className={list} role="presentation">
        <List>
          {props.headerData.map(({ label, href }) => {
            return (
              <ListItem key={label}>
                <ListItemText primary={label} />
              </ListItem>
            );
          })}
        </List>
      </div>
    );
  };

  return (
    <Toolbar>
      <IconButton
        {...{
          edge: "start",
          color: "inherit",
          "aria-label": "menu",
          "aria-haspopup": "true",
          onClick: handleDrawerOpen,
        }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        {...{
          anchor: "left",
          open: drawerOpen,
          onClose: handleDrawerClose,
        }}
      >
        <div>{getDrawerList()}</div>
      </Drawer>
    </Toolbar>
  );

  SideDrawer.propTypes = {
    headerData: PropTypes.object,
  };
}

export default SideDrawer;
