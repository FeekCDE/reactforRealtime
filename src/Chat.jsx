import React, { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:4000/");

const Chat = () => {
  const messageRef = useRef("");
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    socket.on("SEND_MESSAGE", (message) => {
      console.log(message);
      setMessages((messages) => [...messages, message]);//This is to recieve message from the server
    });
  }, []);

  const sendMessage = () => {
    const message= messageRef.current.value;
    socket.emit("SEND_MESSAGE", message)
    setMessages((messages) => [...messages, message]);//This is to send message to the server
    messageRef.current.value = ""
  };


  return (
    <div className="chat-body">
      <div className="chat-box">
        {messages.map((message, i) => (
          <div key={"message" + i} className="message">{message} </div>
        ))}
      </div>
      <div className="chat-input">
        <input ref={messageRef} type="text" autoFocus/>
        <button onClick={sendMessage}><i class="fa-solid fa-paper-plane"></i></button>
      </div>
    </div>
  );
};

export default Chat;