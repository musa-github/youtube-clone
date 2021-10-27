import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getAccessToken, loading, user } from "../features/LoginSlice";
import { auth, provider } from "../firebase";
import login from "../img/logn.svg";
import logout from "../img/logout.svg";
function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const email = useSelector((state) => state.auth.user.email);

  const signUp = async () => {
    try {
      dispatch(loading(true));
      provider.addScope("https://www.googleapis.com/auth/youtube.force-ssl");
      const res = await auth.signInWithPopup(provider);
      const photo = res.user.photoURL;
      const email = res.credential.email;
      const name = res.additionalUserInfo.profile.name;
      const id = res.additionalUserInfo.profile.id;
      const granted_scopes = res.additionalUserInfo.profile.granted_scopes;
      const accessToken = res.credential.accessToken;
      dispatch(getAccessToken(accessToken));
      dispatch(
        user({
          photo: photo,
          name: name,
          scope: granted_scopes,
          id: id,
          email: email,
        })
      );

      dispatch(loading(false));
    } catch (error) {}
  };

  useEffect(() => {
    if (email) {
      history.push("/");
    }
  }, [email, history]);
  return (
    <div className="login">
      {email ? (
        <img title="Logout" src={logout} alt="logout" />
      ) : (
        <img title="Login" src={login} alt="login" onClick={signUp} />
      )}
    </div>
  );
}

export default Login;
