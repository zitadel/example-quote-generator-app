//App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import authConfig from "./authConfig";
import { UserManager, WebStorageStateStore } from "oidc-client-ts";

function App() {
  const [userManager, setUserManager] = useState(null);
  const [authenticated, setAuthenticated] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const manager = new UserManager({
      userStore: new WebStorageStateStore({ store: window.localStorage }),
      ...authConfig,
    });

    setUserManager(manager);
  }, []);

  useEffect(() => {
    if (userManager) {
      userManager.getUser().then((user) => {
        if (user) {
          setAuthenticated(true);
          setUserInfo(user); // Store the entire user object
        } else {
          setAuthenticated(false);
        }
      });

      if (window.location.href.includes('id_token') || window.location.href.includes('code')) {
        userManager.signinRedirectCallback()
          .then((user) => {
            if (user) {
              console.log('Redirect callback user', user);
              setAuthenticated(true);
              setUserInfo(user); // Store the entire user object
            }
          })
          .catch((error) => {
            console.error('Sign-in error', error);
          });
      }
    }
  }, [userManager]);



  function authorize() {
    userManager && userManager.signinRedirect({ state: "a2123a67ff11413fa19217a9ea0fbad5" });
  }

  function clearAuth() {
    userManager && userManager.signoutRedirect();
  }

  if (!userManager) {
    return <div>Loading...</div>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Login
              auth={authenticated}
              handleLogin={authorize}
              handleLogout={clearAuth}
              userInfo={userInfo}
              userManager={userManager}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


