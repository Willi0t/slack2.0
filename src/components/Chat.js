import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import ChatInput from "./ChatInput";
import Message from "./Message";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useSelector } from "react-redux";
import { selectRoomId } from "../features/appSlice";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { db } from "../firebase";

function Chat() {
  const chatRef = useRef(0);
  const roomId = useSelector(selectRoomId); //pulling data drom redux store
  const [roomDetails] = useDocument(
    roomId && db.collection("rooms").doc(roomId)
  );
  //fetching data from backend
  const [roomMessages, loading] = useCollection(
    roomId &&
      db
        .collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
  );
  useEffect(() => {
    chatRef?.current.scrollIntoView({ behavior: "smooth" }); // scrolls to the bottom in conjunction with ChatBottom
  }, [roomId, loading]);
  // useEffect(() => {
  //   console.log("mounted");
  //   return () => console.log("unmount"); //checking when components mount
  // }, []);
  return (
    <ChatContainer>
      <>
        <Header>
          <HeaderLeft>
            <h4>
              <strong>#{roomDetails?.data().name}</strong>{" "}
              {/* header title from backend */}
            </h4>
            <StarBorderIcon />
          </HeaderLeft>
          <HeaderRight>
            <p>
              <InfoOutlinedIcon />
              Details
            </p>
          </HeaderRight>
        </Header>
        <ChatMessages>
          {roomMessages?.docs.map((doc) => {
            const { message, timestamp, user, userImage } = doc.data();
            return (
              <Message
                key={doc.id}
                message={message}
                timestamp={timestamp}
                user={user}
                userImage={userImage}
              />
            ); //fetching data from backend maping through and displaying with input and saved google information
          })}
          <ChatBottom ref={chatRef} />{" "}
          {/* scrolls to the bottom after you send a message */}
        </ChatMessages>
        <ChatInput
          chatRef={chatRef}
          channelName={roomDetails?.data().name}
          channelId={roomId}
        />
      </>
    </ChatContainer>
  );
}

export default Chat;

const ChatContainer = styled.div`
  flex: 1;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 60px;
`;

const ChatMessages = styled.div`
  min-height: 75vh;
`;

const ChatBottom = styled.div`
  height: 180px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid lightgray;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  > h4 {
    display: flex;
    text-transform: lowercase;
    margin-right: 10px;
  }

  > h4 .MuiSvgIcon-root {
    margin-left: 20px;
    font-size: 18px;
  }
`;
const HeaderRight = styled.div`
  > p {
    display: flex;
    align-items: center;
    font-size: 14px;
  }

  > p .MuiSvgIcon-root {
    margin-right: 5px !important;
    font-size: 16px;
  }
`;
