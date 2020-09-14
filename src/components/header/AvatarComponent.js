import React from "react";
import { StyleSheet, css } from "aphrodite";
import avatarImage from "../../assets/avatar.png";
import Avatar from "../../assets/dayat.png";

function AvatarComponent(props) {
  const { image } = props;
  const imageUrl =
    "http://api.paboi.bigio.id/v1/image/show/user_profile/" + image;
  return (
    <>
      <img
        src={Avatar}
        alt="profil"
        width="100%"
        height="100%"
        className={css(styles.image)}
      />
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    borderRadius: "50%",
    objectFit: "contain",
  },
});

AvatarComponent.propsTypes = {
  // image: node,
};
AvatarComponent.defaultProps = {
  // image: avatarImage,
};

export default AvatarComponent;
