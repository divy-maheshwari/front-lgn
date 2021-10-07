import React, { useEffect } from 'react';
import { useHistory} from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';


const Home = () => {
    const data = Cookies.get('token')
    let userInfo;
    if(data) userInfo = JSON.parse(data);
 //   console.log(userInfo);
    let token;
    if(userInfo){
   //     console.log(userInfo.token);
        token = userInfo["token"];
    }
    const history = useHistory();
//   const redirect = props.location.search ? props.location.search.split('=')[1] : '/';

  useEffect(() => {
      show();
  },[]);

const show = () => {
    axios.get("https://back-lgn.herokuapp.com/api/user/home",{
        headers: {
            Authorization: 'Bearer '+ token
        }
    })
    .then(data => {
     //   console.log(data);
        if(data.data.msg === "Invalid Token"){
            history.push("/signIn");
        }
    })
    .catch(err => {
        console.log(err);
    })
}

    return (
      <div>
        <h1>hello</h1>
        {userInfo ? <h1>{userInfo.name}</h1> : <h1>user</h1>
        }
      </div>
    );
}

export default Home;