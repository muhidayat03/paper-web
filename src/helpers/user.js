export function getUser() {
  let user = JSON.parse(localStorage.getItem("user_paper")); 
      console.log("user", user)
  if (user) {
    return user;
  } else {
    return null;
  }
}
