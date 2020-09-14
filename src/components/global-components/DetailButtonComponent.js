import React from "react";
import Menu from "@material-ui/core/Menu";
import { css, StyleSheet } from "aphrodite";
// import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

export default (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { button, horizontal } = props;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div onClick={handleClick} className={css(styles.button)}>
        {button}
      </div>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{
          vertical: "top",
          horizontal: horizontal ? horizontal : "center",
        }}
        // keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose} 
      >
        {props.children}
      </Menu>
    </div>
  );
};

const styles = StyleSheet.create({
  button: {
    // backgroundColor:'black',
    ":hover": {
      cursor: "pointer",
    },
  },
});
