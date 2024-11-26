import { getAuth, signOut } from "firebase/auth";

const logout = () => {
  const auth = getAuth();
  signOut(auth)
    .then(() => {})
    .catch((error) => {
      console.log(error);
    });
};

export default logout;
