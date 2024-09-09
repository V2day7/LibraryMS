import React, { useEffect, useState } from "react";

export default function WebSocketComponent({ onmessage }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080");

    socket.onopen = () => {
      console.log("Connected to WebSocket server!");
    };

    socket.onmessage = async (event) => {
      let message;
      if (event.data instanceof Blob) {
        message = await event.data.text(); // Convert Blob to text
      } else {
        message = event.data;
      }
      console.log("Message received: " + message);
      setMessages((prevMessages) => [...prevMessages, message]);
      onmessage(message); // Pass the received message to the onmessage prop
    };

    socket.onclose = (event) => {
      console.log("Disconnected from WebSocket server!", event);
    };

    socket.onerror = (error) => {
      console.log("WebSocket error: ", error);
    };

    return () => {
      socket.close();
    };
  }, []);

  return <></>;
}
