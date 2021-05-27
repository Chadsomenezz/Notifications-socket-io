const socket = io();
const container = document.querySelector(".container");

socket.on('userConnect',(data)=>{
    container.innerHTML  += `<p>user entered the server ${data.userId}</p>`
})

socket.on('userDisconnect',(data)=>{
    container.innerHTML  += `<p>user leave the server ${data.userId}</p>`
})

document.querySelector("#btn").addEventListener("click",()=>{
    socket.emit("alertThem",{userId:socket.id});
})

socket.on("alertThemAll",(data)=>{
    container.innerHTML  += `<p>user click the button ${data.userId}</p>`
})