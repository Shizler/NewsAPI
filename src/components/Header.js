import React, { useEffect, useState } from "react";
import SideDrawer from "./SideDrawer";
import { fade, makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";

const headerData = [
  {
    label: "business",
    href: "#",
  },
  { label: "entertainment", href: "#" },
  { label: "general", href: "#" },
  { label: "health", href: "#" },
  { label: "science", href: "#" },
  { label: "sports", href: "#" },
  {
    label: "technology",
    href: "#",
  },
];
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  navItems: {
    display: "flex",
    justifyContent: "space-between",
    textTransform: "uppercase",
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `white`,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  fullList: {
    width: "auto",
  },
}));

function Header() {
  const classes = useStyles();

  const [state, setState] = useState({
    mobileView: false,
  });

  const { mobileView } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const getMenu = () => {
    return (
      <List
        component="nav"
        aria-labelledby="main navigation"
        className={classes.navItems}
      >
        {headerData.map(({ label, href }) => {
          return (
            <ListItem key={label}>
              <ListItemText>{label}</ListItemText>
            </ListItem>
          );
        })}
      </List>
    );
  };

  const displayDesktop = () => {
    return <Toolbar>{getMenu()}</Toolbar>;
  };

  const displayMobile = () => {
    return <SideDrawer headerData={headerData} />;
  };

  return (
    <AppBar position="static">
      {mobileView ? displayMobile() : displayDesktop()}
    </AppBar>
  );
}

export default Header;
