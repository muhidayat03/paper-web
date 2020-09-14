import React from "react";
import { StyleSheet, css } from "aphrodite";

const Button = ({ disabled, title, color, styleClass, ...restProps }) => {
  return (
    <button
      {...restProps}
      className={css(
        styles.btn,
        color === "primary" && styles.primary,
        color === "success" && styles.success,
        styleClass,
        disabled && styles.disabled
      )}
    >
      {title}
    </button>
  );
};

const styles = StyleSheet.create({
  btn: {
    borderRadius: 120,
    color: "#8B99A4",
    cursor: "pointer",
    fontSize: 12,
    fontFamily: "lato",
    position: "relative",
    minWidth: 120,
    WebkitBoxShadow: "0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.1)",
    boxShadow: "0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.1)",
    WebkitTransition: ".5s",
    transition: ".5s",
    // backgroundColor: "#93c854",
    border: "2px solid #8B99A4",
    display: "inline-block",
    textAlign: "center",
    lineHeight: 1,
    letterSpacing: ".4px",
    fontWeight: 400,
    padding: "13px 20px",
    width: "100%",
    outline: "none",
  },
  primary: {
    backgroundColor: "#4199d5",
    color: "#fff",
    border: "2px solid #4199d5",
    ":hover": {
      backgroundColor: "transparent",
      color: "#4199d5",
    },
  },
  success: {
    backgroundColor: "#93c854",
    color: "#fff",
    border: "2px solid #93c854",
    ":hover": {
      backgroundColor: "transparent",
      color: "#93c854",
    },
  },
  disabled: {
    cursor: "not-allowed",
    color: "#ccc",
    borderColor: "#eee",
    backgroundColor: "#eee",
    ":hover": { 
      color: "#ccc",
      borderColor: "#eee",
      backgroundColor: "#eee",
    },
  },
  
});

Button.defaultProps = {};

export default Button;
