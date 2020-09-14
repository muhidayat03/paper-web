import React from "react";
import { Row } from "simple-flexbox";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  container: {
    borderBottom: "1px solid #00000029",
    padding: "0px 10px",
    margin: "10px 0",
  },
});

export default (props) => {
  return <Row className={css(styles.container)}>{props.children}</Row>;
};
