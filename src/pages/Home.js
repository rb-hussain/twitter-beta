import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
    // Redirect to login page after logout
    const navigator = useNavigate();
    // Getting UserName Value From Local Storage
    // const userName = JSON.parse(localStorage.getItem("user"));
    const user = JSON.parse(localStorage.getItem('users'));
    const names = user.map((user) => user.name);
    console.log(user);
    const logoutHandler = () =>{
    localStorage.removeItem("IsloggedIn")
    navigator("/login");
    // removeUser(user.name);
    setIsLoggedin(false);
    setCurrentUser(null);
    };
    /// 

    const [isLoggedin, setIsLoggedin] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
  
    useEffect(() => {
      // Load user data from local storage
      const userData = JSON.parse(localStorage.getItem('userData'));
      // console.log("this is "+ userData);
      if (userData && userData.isLoggedin) {
        setIsLoggedin(true);
        setCurrentUser(userData.user);
      }
    }, []);

    ///
    
    // const isLoggedin = localStorage.getItem("IsloggedIn");
    return(
        <>
        <h1>Home </h1>

        {/* {isLoggedin ? 
        <div>
            <p>  {names.map((name) => (
         <p key={name}>welcome {currentUser.name}</p>
        ))}</p>
        </div>
       : (
        <div>
            <p>Hello</p>
        </div>
      )} */}

<div>
      {isLoggedin ? (
        <div>
          <h1>Welcome {currentUser.name}!</h1>
        </div>
      ) : (
        <div>
          <h1>Please login to continue</h1>
        </div>
      )}
    </div>

        {/* <p>  {names.map((name) => (
         <p key={name}>welcome {name}</p>
        ))}</p> */}
        <button onClick={logoutHandler}> Logout</button>
        </>
    )};
export default Home;