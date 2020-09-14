import React from "react";
import Input from "./Input";
import Select from "./Select";
import { StyleSheet, css } from "aphrodite";
import { Row, Column } from "simple-flexbox"; 
import InfoIcon from "../../assets/icon_info_white.svg"; 
const Error = (props) => (
  <Column
    style={{
      height: 28,
    }}
    horizontal="start"
    className={css(styles.floating)}
  >
    <div
      style={{
        transform: "rotate(45deg)",
        height: 10,
        width: 10,
        position: "absolute",
        top: -2,
        left: 10,
        backgroundColor: "#e35273",
      }}
    ></div>
    <Row
      style={{
        marginBottom: 5,
        backgroundColor: "#e35273",
        padding: "4px 10px",
        borderRadius: 4,
      }}
      vertical="center"
    >
      <img
        src={InfoIcon}
        alt="lock-icon"
        height={10}
        style={{
          marginRight: 4,
          zIndex: 2,
        }}
      />
      <div style={{ fontSize: 11, color: "white" }}>{props.message}</div>
    </Row>
  </Column>
);

export function renderInputWithLabel(field) {
  return (
    <Column style={{ marginBottom: 10 }}>
      <Row
        style={{
          width: "100%",
          marginBottom: 5,
        }}
        vertical="center"
      >
        {field.icon && (
          <img
            src={field.icon}
            alt="lock-icon"
            height={15}
            style={{
              marginRight: 8,
            }}
          />
        )}

        <label style={{ fontSize: field.labelBig ? 15 : 12, margin: 0 }}>
          {field.label}
          {field.req && <span style={{ color: "red" }}>*</span>}
        </label>
      </Row>
      <Input
        {...field.input}
        type={field.type}
        disabled={field.disable}
        placeholder={field.placeholder}
        border
        styleClass={field.styleClass}
      />
      {field.meta.touched && field.meta.error ? (
        <Error message={field.meta.error} />
      ) : (
        <div style={{ height: 28 }} />
      )}
    </Column>
  );
}
export function renderSelectWithLabel(field) {
  const handleBlur = () => {
    setTimeout(() => {
      const { input } = field;
      input.onBlur(input.value);
    }, 1);
  };
  return (
    <Column style={{ marginBottom: 10 }}>
      <Row
        style={{
          width: "100%",
          marginBottom: 5,
        }}
        vertical="center"
      >
        {field.icon && (
          <img
            src={field.icon}
            alt="lock-icon"
            height={15}
            style={{
              marginRight: 8,
            }}
          />
        )}

        <label style={{ fontSize: field.labelBig ? 15 : 12, margin: 0 }}>
          {field.label}
          {field.req && <span style={{ color: "red" }}>*</span>}
        </label>
      </Row>
      <Select
        {...field.input}
        onChange={(value) => field.input.onChange(value)}
        onBlur={handleBlur}
        options={field.options}
        isSearchable={true}
        isClearable={field.isClearable}
        isMulti={field.isMulti}
        isDisabled={field.isDisabled}
        placeholder={field.placeholder}
      />
      {field.meta.touched && field.meta.error ? (
        <Error message={field.meta.error} />
      ) : (
        <div style={{ height: 28 }} />
      )}
    </Column>
  );
}

const translateKeyframes = {
  "0%": {
    transform: "translatey(0)",
  },

  "50%": {
    transform: "translatey(-5px)",
  },

  "100%": {
    transform: "translatey(0)",
  },
};

const styles = StyleSheet.create({
  formContainer: { marginBottom: 10 },
  errorContainer: { color: "#ED2A2A", marginTop: 5 },
  floating: {
    zIndex: 20,
    animationName: translateKeyframes,
    animationDuration: "3s",
    animationIterationCount: "infinite",
  },
});
