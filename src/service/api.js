import axios from 'axios';
const URL = 'http://localhost:8000';
const addUser = async (data)=>{
    try {
        return await axios.post(`${URL}/add`,data)
    } catch (error) {
        console.log("error while calling api",error.message);
    }
};
const getUsers = async ()=>{
    try {
        let response = await axios.get(`${URL}/users`);
        console.log(response);
        return response.data;
    } catch (error) {
        console.log("error while calling api of getUsers",error.message);
    }
};
const setConversation = async (data)=>{
    try {
        await axios.post(`${URL}/conversation/add`,data);
    } catch (error) {
        console.log("error while calling setConversation api",error.message);
    }
};
const getConversation = async (d)=>{
    try {
        let response = await axios.post(`${URL}/conversation/get`,d);
        return response.data;
    } catch (error) {
        console.log("error while calling getConversation api",error.message);
    }
};
const newMessage = async (message)=>{
    try {
        await axios.post(`${URL}/message/add`,message);
    } catch (error) {
        console.log("error while calling newMessage api",error);
    }
};
const getMessages = async (id)=>{
    try {
        return await axios.get(`${URL}/message/get/${id}`);
    } catch (error) {
        console.log("error while calling getMessages api",error);
    }
};
export {addUser,getUsers,setConversation,getConversation,newMessage,getMessages};