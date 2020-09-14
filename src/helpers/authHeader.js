export function authHeader() {
  let user = JSON.parse(localStorage.getItem("user_paper"));
  if (user) {
    console.log(user);
    return {
      headers: { Authorization: `Bearer ${user.token}` },
    };
  } else {
    return {};
  }
}
