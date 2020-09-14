import React, { Component } from "react";
import { Column, Row } from "simple-flexbox";
import SidebarComponent from "../sidebar/SidebarComponent";
import HeaderComponent from "../header/HeaderComponent";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  container: {
    height: "100%",
    minHeight: "100vh",
   
  },
  content: {
    marginTop: 54,
    zIndex : 10
  },
  mainBlock: {
    backgroundColor: "#F3FAFD",
    padding: 30,
  },
});

class Layout extends Component {
  state = { selectedItem: "" };

  render() {
    const { selectedItem } = this.state;
    const { children } = this.props;

    return (
      <Row className={css(styles.container)}>
        <SidebarComponent
          selectedItem={selectedItem}
          onChange={(selectedItem) => this.setState({ selectedItem })}
        />
        <Column flexGrow={1} className={css(styles.mainBlock)}>
          <HeaderComponent title={selectedItem} />
          <div className={css(styles.content)}>{children}</div>
  
        </Column>
      </Row>
    );
  }
}

export default Layout;
