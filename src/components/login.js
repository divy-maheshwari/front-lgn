import React, { useState,useEffect } from 'react';
import {Link, useHistory} from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';


const LogIn = (props) => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const history = useHistory();
  const data = Cookies.get('token')
  let userInfo;
  if(data) userInfo = JSON.parse(data);

  useEffect(() => {
    if(userInfo){
      history.push('/');
    }
  },[]);

  const submitHandler = (e) => {
    e.preventDefault();
    axios.post("https://back-lgn.herokuapp.com/api/user/signIn",{email,password})
             .then(data => {
    //             console.log(data);
      //           console.log("i am here");
                 if(data.data.msg === "valid password"){
                  const user = {name:data.data.userData.name,token:data.data.token};
                 Cookies.set("token",JSON.stringify(user));
                  history.push("/");
                 }
                 else {
                   alert("wrong email or password");
                 }
             })
             .catch(err => {
                 console.log(err);
             })
  }


    return (
      <div>
        <form onSubmit={e => submitHandler(e)} style={{margin: "auto",width: "25%"}}>
         <div className="form-group ">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" name="email" id="exampleInputEmail1" onChange={event => setEmail(event.target.value)} aria-describedby="emailHelp" placeholder="example@gmail.com" required/>
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group ">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" name="password" onChange={event => setPassword(event.target.value)} id="exampleInputPassword1" required/>
        </div>
        <div className="form-group">
        <Link to='/register'>Doesn't have an Account</Link>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      </div>
    );
}

export default LogIn;