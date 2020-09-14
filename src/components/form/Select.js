import React from "react";
import { bool } from "prop-types";
import Select from "react-select";

const colourStyles = {
  control: (style, state) => {
    return {
      ...style,
      boxShadow: state.isFocused ? null : null,
      border: 0,
      borderBottom: "1px solid  rgba(0, 0, 0, 0.12)",
      borderRadius: 0,
      fontFamily: "lato",
      padding: 0,
      paddingBottom: 5,
      width: "100%",
      backgroundColor: "transparent",
      minHeight: 0,
      textAlign: "left",
      ":focus": {
        outline: 0,
      },
      ":hover": {
        borderBottom: "1px solid  rgba(0, 0, 0, 0.12)",
      },
      fontSize: 12,
    };
  },
  menu: (base) => ({
    ...base,
    // override border radius to match the box
    borderRadius: 0,
    // kill the gap
    marginTop: 0,
    padding: 0,
    fontFamily: "lato",

    fontSize: 12,
  }),
  menuList: (base) => ({
    ...base,
    // kill the white space on first and last option
    padding: 0,
  }),
  input: (styles) => {
    return {
      ...styles,
      fontFamily: "lato",
      padding: 0,
      "& input": {
        font: "inherit",
      },
    };
  },
  placeholder: (styles) => ({
    ...styles,
    fontFamily: "lato",
    fontSize: 12,
    color: "#495057",
    opacity: 0.68,
    padding : 0,
  }),
  singleValue: (styles, { data }) => ({
    ...styles,
    fontFamily: "lato",
    fontSize: 12,
  }),
};

const SelectComponent = (props) => (
  <Select
    isClearable={props.isClearable}
    styles={{ ...colourStyles }}
    {...props}
  />
);

SelectComponent.propsTypes = {
  isClearable: bool,
};
SelectComponent.defaultProps = {
  isClearable: true,
};

export default SelectComponent;
