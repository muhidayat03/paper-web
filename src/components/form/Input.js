import React from "react";
import { StyleSheet, css } from "aphrodite";
import { func } from "prop-types";

const styles = StyleSheet.create({
  input: {
    "::placeholder": {
      color: "#495057",
      opacity: 0.68,
    },
    padding: "10px 20px",
    borderRadius: 20,
    zIndex: 30,
    border: 0,
    borderStyle: "solid",
    WebkitBoxShadow: "0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.1)",
    boxShadow: "5px 5px 40px 0px rgba(59, 152, 212, 0.15)",
    display: "inline-block",
    boxSizing: "border-box",
    width: "100%",
    outline: "none",
    fontSize: "12px",
    backgroundColor: "#fff",
  },
  input2: {
    fontSize: "12px",
    border: 0,
    borderBottom: "1px solid  rgba(0, 0, 0, 0.12)",
    padding: 0,
    paddingBottom: 5,
    width: "100%",
    backgroundColor: "transparent",
    textAlign: "left",
    ":focus": {
      outline: 0,
    },
  },
  disabled: {
    ":hover": {
      cursor: "not-allowed",
      borderColor: "#EFF0F2",
    },
  },
  icon: {
    position: "absolute",
    top: 10,
    height: 20,
    color: "#495057",
    width: 20,
  },
  start: {
    left: 10,
  },
  startContainer: { paddingLeft: 35 },
  end: {
    right: 10,
  },
  endContainer: { paddingRight: 35 },
});

const InputContainer = (props) => {
  const {
    value,
    placeholder,
    startIcon,
    disabled,
    endIcon,
    styleClass,
    border,
    ...otherProps
  } = props;
  const StartIcon = startIcon;
  const EndIcon = endIcon;
  return (
    <div style={{ position: "relative" }}>
      <input
        className={css(
          border ? styles.input2 : styles.input,
          startIcon && styles.startContainer,
          endIcon && styles.endContainer,
          disabled && styles.disabled,
          styleClass
        )}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        disabled={props.disabled}
        {...otherProps}
      />

      {startIcon && (
        <StartIcon
          onClick={props.onClick}
          className={css(styles.icon, styles.start)}
        />
      )}
      {endIcon && (
        <EndIcon
          onClick={props.onClick}
          className={css(styles.icon, styles.end)}
        />
      )}
    </div>
  );
};

InputContainer.propsTypes = {
  startIcon: func,
  endIcon: func,
};
// InputContainer.defaultProps = {};

export default InputContainer;
