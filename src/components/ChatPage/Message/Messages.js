import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import Message from './Message';




function Messages({ messages ,img}) {

    const t = messages.map((i, key) => {
        return <Message key={key} sent={i.sent} data={i.message} img={img} time={i.time && i.time} />
    })

    return (
        <div  className='mess'>
            {t}
            </div>
        );
}

export default Messages;