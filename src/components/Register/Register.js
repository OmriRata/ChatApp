import { useState } from 'react';
import './Register.css';
import React from 'react';
import './../DataBase/db.js';
import { useHistory } from "react-router-dom";




function Register(props) {
    const history = useHistory();
    let k = Math.floor(Math.random() * 25);
    var newImage='./Emoji/'+k+'.png';

    const [file, setfile] = useState(newImage);
    
    const registerValid = async() => {
        var username = document.getElementById("userName").value;
        var nickname = document.getElementById("nickname").value;
        var password = document.getElementById("password").value;
        var confirmPass = document.getElementById("confirmPass").value;
        console.log(username, nickname, password, confirmPass);

    

        
        var flag = true;
        props.users.map((x) => {

            if (username === x.username) {
                alert("An existing username in the system");
                flag = false;
            }          
        });
        if (username === '') {
            flag = false;
            alert("type a username");
        }
 
        if (passwordValidation(password, confirmPass) && flag) {
            console.log("its ok");
            await fetch("https://localhost:7191/api/Users?username=" + username + "&nickname=" + nickname + "&password=" + password, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            }).then(response => response.json())
                .then(res => {
                    console.log(res);
                    console.log(res.status);
                    var status = res.status;
                    if (!status) {
                        console.log("got contact on register");
                    } else {
                        console.log("not go the contacts on register")
                    }
                });
            await fetch("https://localhost:7191/api/login?UserName=" + username + "&Password=" + password, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then(response => response.json())
                .then(res => {
                    var status = res.status;
                    if (!status) {
                        console.log("its ok");
                        localStorage.setItem('token', res);
                        localStorage.setItem('userId', username);
                        history.push('/chat');

                    } else {
                        console.log("u are not a user");
                        return;
                    }
                });
        }

    }
    return (
        
        <form id='form1' className="row g-3">
            <div className="header1"> Sign-up</div>
            <div className="md-4-row">
                <label className="form-label">Username:</label>
                <input id="userName" type="text"  className="form-control inp" required></input>
            </div>
            <div className="md-4-row">
                <label className="form-label">Nickname:</label>
                <input id="nickname" type="text" className="form-control inp" ></input>
            </div>
            <div className="md-4-row">
                <label className="form-label">password:</label>
                <input id="password" type="password" className="form-control inp"  required></input>
            </div>
            <div className="md-4-row">
                <label className="form-label">confirm password:</label>
                <input id="confirmPass" type="password" className="form-control inp" required></input>
            </div>
            <div>
                <input type="file" id="image-input" onInput={(e) => setfile(URL.createObjectURL(e.target.files[0]))} onClick={displayimage} accept="image/jpeg, image/png, image/jpg" />
            <div id="display-image"></div>
            </div>
            <div className="col-12">
                <button type="button" onClick={registerValid} className="btn btn-primary mb-1">Sign-up</button>
               
            </div>
        </form>
    );
}

export default Register;

function passwordValidation(pass, confPass) {
    //check if the password equal to the confirm password
    if (pass !== confPass) {
        console.log("invalid password", pass);
      
        alert()
        return false;

        //check if the length of the password is at least 6 charcters
    } else if (pass.length < 6) {
        alert("invalid password length");
        console.log("invalid password length");
        return false;
        //check if the password contains at least one capital letter
    } if (true) {
        let count = 0;
        let i = 65;
        for (i; i <= 90; i++) {
            if (pass.includes(String.fromCharCode(i))) count++;
        }
        if (count < 1) {
            alert("need at least one capital letter");
            return false;
        }
    }
    //check if the password contains at least one small letter
    if (true) {
        let count = 0;
        let i = 97;
        for (i; i <= 122; i++) {
            if (pass.includes(String.fromCharCode(i))) count++;
        }
        if (count < 1) {
            alert("need at least one small letter");
            return false;
        }
    }
    return true;
}
function displayimage(){
    const image_input = document.querySelector("#image-input");

    image_input.addEventListener("change", function() {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        const uploaded_image = reader.result;
        document.querySelector("#display-image").style.backgroundImage = `url(${uploaded_image})`;
      });
      reader.readAsDataURL(this.files[0]);
    });
}
function ImageValidation(myImage){
    if(myImage===0){    
        alert("you didnt choose any image");
        alert("this is your new profile image:");
        let i = Math.floor(Math.random() * 25);
        var newImage=window.open('./Emoji/'+i+'.png', "", "width=400,height=400");
        myImage=newImage;
        return myImage;
    }else{
        return myImage;
    }
}
    