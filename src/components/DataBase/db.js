import DefaultImage from './../Image/profile-picture-boy-1.jpeg';
import avtar1 from './../Image/profile-picture-boy-2.jpeg';
import avtar2 from './../Image/profile-picture-boy-3.jpeg';
import avatar3 from './../Image/profile-picture-girl-2.jpeg';
import avatar4 from './../Image/profile-picture-girl-1.jpeg';
import avatar5 from './../Image/profile-picture-girl-3.jpeg';
import avatar6 from './../Image/profile-picture-girl-4.jpeg';
import fileTest from './../Image/test.txt';
import macarena from './../Image/macarena.mp4';
import hasson from './../Image/welcome.mp3';
import filedownload from './../Image/file-download.png';
import imageSent from './../Image/imageiconsend.png';
import videoSent from './../Image/videosendicon.png';
import textFileSend from './../Image/ib.png';
import Message from '../ChatPage/Message/Message';

const messages = [{ sent: false, message: 'hello world', time: '12:32' }, { sent: false, message: '<img src=' + imageSent + ' width="50" > </img>', time: '12:35' }, { sent: false, message: '<video width="150" src=' + macarena + ' controls ></video>', time: '12:40' }, {
    sent: false, message: '<a href=' + fileTest + ' download><img width="50" src=' + filedownload + '></img>' +'test.txt' + '</a>', time: '12:46'
}, { sent: true, message: '<audio src=' +hasson+' width="50" controls > </audio>', time: '13:04' }];
const lastMessage = { time: '13:04', message: "Recording..." };


const users = [{
    username: 'avi', nickname: 'avi1', password: '1234', image: DefaultImage, contacts: [{
        username: 'avi2', mem: messages, last: lastMessage
    }, {
            username: 'daniel', mem: [], last: null
        }, { username: 'aviv', mem: messages, last: lastMessage }]
},
{
    username: 'avi1', nickname: 'avi1', password: '0000', image: avtar1, contacts: [{
        username: 'miri', mem: messages, last: lastMessage
    }, { username: 'maor', mem: messages, last: lastMessage }, { username: 'aviv', mem: [], last: null }]
},
{
    username: 'avi2', nickname: 'avi2', password: '1212', image: avtar2, contacts: [{
        username: 'avi1', mem: messages, last: lastMessage
    }, { username: 'aviv', mem: [], last: null }]
},
{
    username: 'aviv', nickname: 'aviv123', password: 'Ma1234567', image: avatar3, contacts: [{
        username: 'avi2', mem: messages, last: lastMessage
    }, { username: 'avi1', mem: [], last: null }]
},
{
    username: 'maor', nickname: 'biton', password: 'Ma1234567', image: DefaultImage, contacts: [{
        username: 'yarden', mem: messages, last: lastMessage
    }, { username: 'miri', mem: messages, last: lastMessage }, { username: 'aviv', mem: [], last: null }]
},
{
    username: 'yarden', nickname: 'yarden123', password: 'Yarden123', image: avatar4, contacts: [{
        username: 'daniel', mem: messages, last: lastMessage
    }, { username: 'yarden', mem: [], last: null }]
},
{
    username: 'daniel', nickname: 'daniel123', password: 'Daniel123', image: avatar5, contacts: [{
        username: 'avi2', mem: messages, last: lastMessage
    }, { username: 'avi1', mem: [], last: null }]
},
{
    username: 'miri', nickname: 'miri12', password: 'Miri12', image: avatar6, contacts: [{
        username: 'daniel', mem: messages, last: lastMessage
    }, { username: 'yarden', mem: [], last: null }]
},
{
    username: 'elad', nickname: 'elad123', password: 'Elad123456', image: avtar1, contacts: [{
        username: 'avi2', mem: messages, last: lastMessage
    }, { username: 'daniel', mem: [], last: null }, { username: 'aviv', mem: [], last: null }, { username: 'miri', mem: [], last: null }, { username: 'maor', mem: [], last: null }]
}




]

export default users;

