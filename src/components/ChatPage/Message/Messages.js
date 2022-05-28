import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import Message from './Message';




function Messages({ id }) {
    const [mess, setMess] = useState([]);
    const t = mess.map((i, key) => {
        return <Message key={key} sent={i   .sent} data={i.content} time={i.created} />
    })

    useEffect(() => {
        fetch("https://localhost:7191/api/contacts/"+id+"/messages", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("token")

            }
        }).then(response => response.json())
            .then(res => {
                console.log(res);
                setMess(res);
                console.log(res.status);
                var status = res.status;
                if (!status) {
                    console.log("got contact on chatPage");
                } else {
                    console.log("not go the contacts on chatPage")
                }
            });
    }, [id]);

    return (
        <div  className='mess'>
            {t}
            </div>
        );
}

export default Messages;