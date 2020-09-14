import React from "react";
import { bool, string } from "prop-types";
import { Row } from "simple-flexbox";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  activeBar: {
    height: 56,
    width: 3,
    backgroundColor: "#B2ED7F",
    position: "absolute",
    left: 0,
  },
  activeContainer: {
    // backgroundColor: "#F5FAFE",
  },
  activeTitle: {
    color: "#B2ED7F",
    fontWeight: "bold",
  },
  container: {
    height: 56,
    cursor: "pointer",
    ":hover": {
      backgroundColor: "rgba(221,226,255, 0.08)",
    },
    paddingLeft: 32,
    paddingRight: 32,
  },
  title: {
    fontSize: 14,
    lineHeight: "20px",
    letterSpacing: "0.2px",
    color: "#fff",
    marginLeft: 10,
  },
});

function MenuItemComponent(props) {
  const { active, icon, title, ...otherProps } = props;
  return (
    <Row
      className={css(styles.container, active && styles.activeContainer)}
      vertical="center"
      {...otherProps}
    >
      {active && <div className={css(styles.activeBar)}></div>}
      <img src={icon} height={active ? 20 : 18} alt="icon" />
      <span className={css(styles.title, active && styles.activeTitle)}>
        {title}
      </span>
    </Row>
  );
}

MenuItemComponent.propTypes = {
  active: bool,
  title: string,
};

export default MenuItemComponent;
