import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import loginImg from './../Image/login.png';
import login_user from './../Image/login_user.png';



import './LogIn.css';


function Login(props) {
    const hist = useHistory();
    const [err, seterr] = useState("");
    const [_data, setData] = useState("");

    const verifyUser = (e) => {
        if (e.keyCode === 13 || e.target.tagName.toLowerCase() == 'button') {

            var username = document.getElementById("user").value;
            var password = document.getElementById("floatingPassword").value;

            if (username === '' & password === '') {
                seterr("type a username and password");
                return;
            } else if (username === '') {
                seterr("type a username");
                return;
            }
            else if (password === '') {
                seterr("type a password");
                return;
            }
            seterr('');
            fetch("https://localhost:7191/api/login?UserName="+username+"&Password="+password, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(response => response.json())
                .then(res => {
                    //console.log(res);
                    //console.log(res.status);
                    var status = res.status;
                    if (!status) {
                        console.log("its ok");
                        localStorage.setItem('token', res);
                        localStorage.setItem('userId', username);
                        hist.push('/chat');

                    } else {
                        console.log("u are not a user");
                        seterr("u are not a user");
                        return;
                    }
                });
            props.users.map((user) => {
                if (username === user.username && password === user.password) {
                    console.log("yees you are login", user);
                    localStorage.setItem('user', JSON.stringify(user));
                    console.log(localStorage);

                    hist.push('/chat');
                }


            });
        }

    }

    return (
        <div onKeyDown={verifyUser} className="login">
            <img className='login_user' src={login_user}></img>
            <br></br>
            {_data}
            <h3> Login Your Account</h3>
            {err !== "" ? <div className="error">{err}</div> : null}
                <input type="username" id="user" className="form-control" placeholder="Username "></input>
            <br></br>
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"></input>
            <br></br>
            <button onClick={verifyUser} id="verify" type="submit" className="btn btn-primary mb-1"><img className="loginImg" src={loginImg}></img>&nbsp;Login</button> </div>
            );
}

export default Login;