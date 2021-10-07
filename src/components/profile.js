import React from 'react';
import {useHistory} from 'react-router-dom';
import Cookies from 'js-cookie'


const Profile = () => {
    const data = Cookies.get('token')
    let userInfo;
    if(data) userInfo = JSON.parse(data);
    const history = useHistory();

    // useEffect(() => {
    //     if(!userInfo) history.push("/profile");
    // },[userInfo]);
    

    const handleLogOut = () => {
        Cookies.remove('token');
        history.push('/signIn');
    }

    const handleLogin = () => {
        history.push('/signIn');
    }


    return (
       <div className="form-group" style={{ marginLeft: '40%'}}>
           <h1>WELCOME </h1> {userInfo ? <h1>{userInfo.name}</h1> : <h1>User</h1>}
        {userInfo ? <button type="button" onClick={handleLogOut} className="btn btn-danger">LOGOUT</button> :
        <div><button type="button" onClick={handleLogin} className="btn btn-warning">LOGIN</button>
        </div>}
       </div>
    );
}

export default Profile;