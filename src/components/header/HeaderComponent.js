import React from "react";
import { Row, Column } from "simple-flexbox";
import { StyleSheet, css } from "aphrodite";
import { useHistory } from "react-router-dom";
import DetailButtonComponent from "../../components/global-components/DetailButtonComponent";

import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import MenuItem from "@material-ui/core/MenuItem";
import { getUser } from "../../helpers/user";
import UserIcon from "../../assets/users.svg";

const ProfileDetail = (props) => (
  <Column style={{ marginBottom: 10 }}>
    <Row
      style={{
        width: "100%",
        height: 20,
      }}
      vertical="center"
    >
      <label style={{ fontSize: 10, fontWeight: "bold", margin: 0 }}>
        {props.label}
      </label>
    </Row>
    <p style={{ fontSize: 12, margin: 0 }}>{props.value}</p>
  </Column>
);

const styles = StyleSheet.create({
  container: {
    height: 40,
  },
});

function HeaderComponent(props) {
  const { ...otherProps } = props;
  const history = useHistory();
  let user = getUser();
  let name = "",
    last_login;
  if (user) {
    console.log("userrrrrr", user);
    ({ name, last_login } = user);
  }

  return (
    <Row
      className={css(styles.container)}
      vertical="center"
      horizontal="end"
      {...otherProps}
    >
      <Row vertical="center">
        <DetailButtonComponent
          button={
            <Row
              vertical="center"
              horizontal="center"
              style={{
                color: "#133F5D",
                fontSize: 14,
                // width: 80,
                padding: "4px 10px",
                // backgroundColor: "#A9E270",
                borderRadius: 5,
              }}
            >
              <img src={UserIcon} alt="user" height={24} />
              {name}
              <ArrowDropDownIcon />
            </Row>
          }
          horizontal="center"
        >
          <MenuItem style={{ width: 200 }}>
            <div>
              <ProfileDetail label="User Name" value={name} />
              <ProfileDetail label="Last Login" value={last_login} />
            </div>
          </MenuItem>
          <MenuItem
            style={{ width: 200 }}
            onClick={() => history.push("/login")}
          >
            <PowerSettingsNewIcon style={{ fontSize: 14, marginRight: 4 }} />{" "}
            Logout
          </MenuItem>
        </DetailButtonComponent>
      </Row>
    </Row>
  );
}

export default HeaderComponent;
