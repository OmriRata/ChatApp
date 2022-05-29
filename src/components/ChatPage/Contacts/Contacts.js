import './../ChatPage.css';
import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './../Sidebar/Sidebar.css';
import './../style/PopupImg.css';
import './../style/Modal.css';
import { PopupImg } from './../Sidebar/Sidebar.js';






function Contacts({ contacts, users, changeChat }) {
    const [_contacts, setcontacts] = useState(contacts);
    const [errMsg, seterrMsg] = useState(null);
    const _username = localStorage.getItem("userId");
    console.log(_contacts);
    function getImage(user){
        var image;
        users.map((x)=>{
            if(x.username===user)image=x.image;
        })
        return image;
    }

    //POST 
    const callAddfriend = async (username) => {
        //addFriend(username);
        const id =document.getElementById("contactId");
        const server =document.getElementById("contactServer");
        const name = document.getElementById("contactName");
        console.log("addFriend invoked", name.value, server.value, id.value);
        await fetch("https://localhost:7191/api/contacts", {
            method: "POST",
            body: JSON.stringify({
                id: id.value,
                name: name.value,
                server: server.value
            }),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("token")

            }
        }).then(response => response.json())
            .then(res => {
                console.log(res);
                console.log(res.status);
                var status = res.status;
                if (!status) {
                    console.log("its ok");
                } else {
                    console.log("u are not a user");
                    seterrMsg("cant add the user:" + id.value);
                    return;
                }
            });
        await fetch("https://"+server.value + "/api/invitations", {
            method: "POST",
            body: JSON.stringify({
                to: id.value,
                from: _username,
                server: server.value
            }),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("token")

            }
        }).then(response => response.json())
            .then(res => {
                console.log(res);
                console.log(res.status);
                var status = res.status;
                if (!status) {
                    console.log("its ok");
                } else {
                    console.log("u are not a user");
                    seterrMsg("cant add the user:" + id.value);

                    return;
                }
            });
    }

   const modelpop = () => {
    var moddd = document.getElementById("mym1");
    var span = document.getElementsByClassName("close")[1];
    moddd.style.display = "block";
    span.onclick = function() {
      moddd.style.display = "none";
    }
    window.onclick = function(event) {
      if (event.target == moddd) {
        moddd.style.display = "none";
      }
    }
    }
    const listContact = users.map((friend, key) => {
        return <li><a href="#" key={key} onClick={(e) => callAddfriend(friend.username)}><img className="pImage" src={getImage(friend.username)}/> {friend.username }</a></li>
    });

    useEffect(() => {
        fetch("https://localhost:7191/api/contacts", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("token")

            }
        }).then(response => response.json())
            .then(res => {
                console.log(res);
                setcontacts(res);
                console.log(res.status);
                var status = res.status;
                if (!status) {
                    console.log("its ok");
                } else {
                    console.log("u are not a user");
                    return;
                }
            });
    },[]);
    function Search(){
        var input, filter, ul, li, a, i;
        input = document.getElementById("mySearch");
        filter = input.value.toUpperCase();
        ul = document.getElementById("myMenu");
        li = ul.getElementsByTagName("li");


        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }

    }

  
     
   
    


    return (
        <div className="card">
            <div className="card-header">
                <h5 className='nameStyle'>
                    welcome {_username}
                </h5>
{/*                <img id="myImg" className='myImg' onClick={PopupImg} src={user.image} />
*/}                    <div id="myModal" className="modal">
                    <span className="close">&times;</span>
                    <img className="modal-content" id="img01"/>
                    <div id="caption"></div>
                  </div>
              
                </div>
                <ul className="list-group list-group-flush">
                {contacts && contacts.map((friend) => {
                    return <li onClick={(e) => changeChat(friend.id)} className="list-group-item profile">
                        <div className='contactProfile'>
                            <div className='contactName'><h6>{friend.name}</h6></div>
{/*                            <img className='imgcon' src={getImage(friend.name)} onClick={PopupImg}></img>
*/}                            {console.log(friend.last)}
                            <span className='lastM'>{friend.last && friend.last}</span>
                            <time className='time'><span>{friend.last && friend.lastDate}</span></time>

                        </div>

                    </li>
                })}
            </ul>

            <button id="myb1" type="button" onClick={modelpop} className="btn btn-primary addFriend">Add a Friend</button>
            <div>
            <div id="mym1" className="mod1">
            <span><h4 className='h4modal'>Search new friend</h4></span>
              <div className="mod2">
                <span className="close">&times;</span>
        {/*        <div className="search">
                <div className="searchInputs">
                <input id='mySearch' type="text" placeholder="Search..." onKeyUp={Search}>
                                </input>
                <ul id="myMenu">
                    {listContact}
                                    </ul>
                                    </div>
               </div>*/}

                        <br></br>
                        <h5 style={{ color: "red" }}>{errMsg}</h5>

                        <div className="md-3-row">
                            <label className="form-label">UserName:</label>
                            <input id="contactId" type="text" className="form-control inp" required></input>
                        </div>
                        <div className="md-3-row">
                            <label className="form-label">NickName:</label>
                            <input id="contactName" type="text" className="form-control inp"></input>
                        </div>
                        <div className="md-3-row">
                            <label className="form-label">Server:</label>
                            <input id="contactServer" type="text" className="form-control inp" required></input>
                        </div>
                        <br></br>
                        <div md-3-row>
                            <button type="submit" className="btn-primary" onClick={callAddfriend}>add</button>
                            </div>
                </div>
              
            </div>
          </div>
            </div>
        );
}


export default Contacts;