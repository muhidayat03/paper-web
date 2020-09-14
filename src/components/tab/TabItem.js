import React from "react";
import { StyleSheet, css } from "aphrodite";

export default (props) => {
  return (
    <div
      onClick={props.onClick}
      className={css(styles.tabItem, props.active && styles.active)}
    >
      {props.title}
    </div>
  );
};

const styles = StyleSheet.create({
  tabItem: {
    margin: "0px 60px",
    width: 60,
    textAlign: "center",
    padding: "14px 0",
    bacol: "grey",
    fontSize: 12,
    fontWeight: "bold",
    ":hover": {
      cursor: "pointer",
    },
  },
  active: {
    borderBottom: "3px solid #569AD3",
  },
});
