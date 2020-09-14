import React, { useState } from "react";
import { Column, Row } from "simple-flexbox";
import { StyleSheet, css } from "aphrodite";
import LogoComponent from "../../assets/logo.svg";
import sidebarBg from "../../assets/sidebar-bg.png";
import MenuItemComponent from "./MenuItemComponent";
import { NavLink } from "react-router-dom";
import { useWindowWidth } from "@react-hook/window-size";
import DashboardIcon from "../../assets/dashboard.svg";
import FinanceIcon from "../../assets/finance.svg";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#569AD3",
    width: 200,
    paddingTop: 15,
    height: "100%",
  },
  containerMobile: {
    position: "absolute",
    zIndex: 901,
  },
  mainContainer: {
    height: "100%",
    minHeight: "100vh",
  },

  mainContainerMobile: {
    position: "absolute",
    width: "100vw",
    minWidth: "100%",
    top: 0,
    left: 0,
  },
  outsideLayer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,.50)",
    zIndex: 900,
  },
  hide: {
    left: -200,
    transition: "0.5s",
  },
  show: {
    left: 0,
    transition: "0.5s",
  },

  menuItemList: {
    marginTop: 20,
  },
  separator: {
    borderTop: "1px solid #DFE0EB",
    marginTop: 16,
    marginBottom: 16,
    opacity: 0.06,
  },
  burgerIcon: {
    cursor: "pointer",
    position: "absolute",
    left: 24,
    top: 34,
  },
  navlink: {
    textDecoration: "none",
  },
});

const SidebarComponent = (props) => {
  const [expanded, setExpanded] = useState(false);
  const widowWidth = useWindowWidth();

  const onItemClicked = (item) => {
    setExpanded(true);
    return props.onChange(item);
  };

  const isMobile = () => widowWidth <= 768;

  const toggleMenu = () => setExpanded(!expanded);
  const renderBurger = () => {
    return (
      <div onClick={toggleMenu} className={css(styles.burgerIcon)}>
        <svg
          height="32px"
          version="1.1"
          viewBox="0 0 32 32"
          width="32px"
          xmlSpace="preserve"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" />
        </svg>
      </div>
    );
  };

  return (
    <div style={{ position: "relative" }}>
      <Row
        className={css(styles.mainContainer)}
        breakpoints={{ 768: css(styles.mainContainerMobile) }}
      >
        {isMobile() && !expanded && renderBurger()}
        <Column
          className={css(styles.container)}
          breakpoints={{
            768: css(
              styles.containerMobile,
              expanded ? styles.show : styles.hide
            ),
          }}
        >
          <div style={{ padding: 30 }}>
            <img src={LogoComponent} style={{ width: "100%" }} alt="logo" />
            <img
              src={sidebarBg}
              style={{ width: "100%", position: "absolute", top: 0, left: 0 }}
              alt="bg"
            />
          </div>
          <Column className={css(styles.menuItemList)}>
            <NavLink to="/dashboard" exact className={css(styles.navlink)}>
              <MenuItemComponent
                title="Dashboard"
                icon={DashboardIcon}
                onClick={() => onItemClicked("Dashboard")}
                active={props.selectedItem === "Dashboard"}
              />
            </NavLink>
            <NavLink to="/finance" exact className={css(styles.navlink)}>
              <MenuItemComponent
                title="Finance"
                icon={FinanceIcon}
                onClick={() => onItemClicked("Finance")}
                active={props.selectedItem === "Finance"}
              />
            </NavLink>
          </Column>
        </Column>
        {isMobile() && expanded && (
          <div className={css(styles.outsideLayer)} onClick={toggleMenu}></div>
        )}
      </Row>
    </div>
  );
};

export default SidebarComponent;
