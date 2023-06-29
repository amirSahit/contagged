import React, { useState } from 'react';
import { MagicLink } from "@thirdweb-dev/wallets";

const MyComponent = async () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const wallet = new MagicLink({
    apiKey: 'pk_live_F783F5D90C1B77C7',
  });

  const magic = await wallet.getMagic();

  const userLoggedIn = await magic.user.isLoggedIn();

  const handleButtonClick = () => {
    // Perform the desired action here
    wallet.connect({
      email: "user@example.com",
    });
    setIsLoggedIn(true);
  };

  /* const userMetadata = await magic.user.getMetadata();
      html = `
          <h1>Current user: ${userMetadata.email}</h1>
          <button onclick="handleLogout()">Logout</button>
        `; */

  return (
    <div>
      <button onClick={handleButtonClick}>Log In</button>
      {isLoggedIn && <p>User got logged in.</p>}
    </div>
  );
};

export default MyComponent;


/* function Register() {
  return <div>Hello from register</div>;
}

export default Register; */
