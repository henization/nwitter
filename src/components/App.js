import React, { useState } from "react";
import Routers from "components/Routers";
import { authService } from "myBase";

function App() {
  console.log(authService.currentUser);
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);

  return (
    <>
      <Routers isLoggedIn={isLoggedIn} />
      <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
    </>
  );
}

export default App;
