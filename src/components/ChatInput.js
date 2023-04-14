import { Button } from "@material-ui/core";
import React, { useState } from "react";
import styled from "styled-components";
import { db, auth } from "../firebase";
import firebase from "firebase/compat/app";
import { useAuthState } from "react-firebase-hooks/auth";
import MainChatStyle from "./MainChatStyle";
import MainChatAttachment from "./MainChatAttachment";

function ChatInput({ channelName, channelId, chatRef }) {
  const [input, setInput] = useState("");
  const [user] = useAuthState(auth);
  const sendMessage = (e) => {
    e.preventDefault(); // prevents refresh
    if (!channelId) {
      // if no channek return false
      return false;
    }
    db.collection("rooms").doc(channelId).collection("messages").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: user.displayName,
      userImage: user.photoURL,
    }); // pushing message to backend

    chatRef.current.scrollIntoView({ behavior: "smooth" }); //scrolls to the bottom after typed message

    setInput("");
  };

  return (
    <ChatInputContainer>
      <MainChatStyle />
      <MainChatMessage>
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`Message #${channelName}`}
          />
          <Button hidden type="submit" onClick={sendMessage}>
            send
          </Button>
        </form>
      </MainChatMessage>
      <MainChatAttachment />
    </ChatInputContainer>
  );
}

export default ChatInput;
const ChatInputContainer = styled.div`
  min-width: 400px;
  bottom: 30px;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  margin-left: 20px;
  margin-right: 20px;
  border: solid;
  border-width: thin;
  border-color: #9e9e9e;
  overflow: hidden;

  /* border-radius: 20px; */
`;

const MainChatMessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
  min-height: 50px;

  > form > input {
    margin-left: 10px;
    width: 100%;
    background: transparent;
    border: 0;
    outline: none;
    font-size: small;
    color: #5e5e5e;
  }

  > form > button {
    display: none !important;
  }
`;
