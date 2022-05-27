import './Message.css';
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Avatar from './../../Image/profile-picture-boy-1.jpeg';
import imageSent from './../../Image/imageiconsend.png';



function Message({sent,data,img,time}) {
    //    const d= <div dangerouslySetInnerHTML={{__html: data}} />
     
    const convert = (_data) => {
        if ((typeof _data).toLowerCase() == 'string') {
            return <h6><p dangerouslySetInnerHTML={{ __html: _data }} className='dataStyle'></p></h6>;
        } else {
            return <h6><p className='dataStyle'>{_data}</p></h6>;
        }
    }


    if (sent) {
        return <div className="container lighter">
            <img src={img} className='right' alt="Avatar" ></img>
            {convert(data)}
            <span className="time-right">{time}</span>
        </div>
    } else {
        return <div className="container darker">
            <img src={Avatar} alt="Avatar"></img>
            {convert(data)}
            <span className="time-left">{time}</span>

        </div>
    }
    
}

export default Message;