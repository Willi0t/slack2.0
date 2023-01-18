import React from "react";
import styled from "styled-components";
import emoji from "../assets/images/emoji.png";
import mention from "../assets/images/mention.png";
import formating from "../assets/images/formating.png";
import attachmentShortcut from "../assets/images/attachmentShortcut.png";
import videoCamera from "../assets/images/videoCamera.png";
import mic from "../assets/images/mic.png";

function MainChatAttachment() {
  return (
    <MainChatAttachmentWrapper>
      <MainChatAttachmentIconContainer>
        <AttachmentShortcutContainer>
          <button className="attachmentShortcut">
            <img src={attachmentShortcut} alt="Link icon" />
          </button>
        </AttachmentShortcutContainer>
        <AudioVideoContainer>
          <InneraudioVideoContainer>
            <button className="chatIcon">
              <img src={videoCamera} alt="orderedListicon" />
            </button>
            <button className="chatIcon">
              <img src={mic} alt="bulletedList icon" />
            </button>
          </InneraudioVideoContainer>
        </AudioVideoContainer>
        <EmojiAndMention>
          <InnerEmojiAndMention>
            <button className="chatIcon">
              <img src={emoji} alt="Bold style" />
            </button>
            <button className="chatIcon">
              <img src={mention} alt="Italic style" />
            </button>
            <button className="chatIcon">
              <img src={formating} alt="Strikethrough" />
            </button>
          </InnerEmojiAndMention>
        </EmojiAndMention>
      </MainChatAttachmentIconContainer>
      <button className="submitButton" type="submit">
        SEND
      </button>
    </MainChatAttachmentWrapper>
  );
}

export default MainChatAttachment;

const MainChatAttachmentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
  background-color: rgb(255, 255, 255);

  > button {
    background-color: Transparent;
    background-repeat: no-repeat;
    border: none;
    overflow: hidden;
    color: lightgray;
  }
`;

const MainChatAttachmentIconContainer = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
  /* justify-content: center; */
  /* background-color: black; */
  width: 400px;
  /* margin-left: 20px; */
`;

const AttachmentShortcutContainer = styled.div`
  /* background-color: red; */
  padding: 0 10px;
  display: flex;
  justify-content: center;
  border-right: solid;
  border-width: thin;
  border-color: #bdbdbd;

  > button {
    background-color: Transparent;
    background-repeat: no-repeat;
    border: none;
    overflow: hidden;
    cursor: pointer;
  }

  > button > img {
    width: 20px;
    height: 20px;
  }
`;

const AudioVideoContainer = styled.div`
  /* background-color: orange; */
  padding: 0 10px;
  height: 23px;
  display: flex;
  justify-content: center;
  border-right: solid;
  border-width: thin;
  border-color: #bdbdbd;
`;

const InneraudioVideoContainer = styled.div`
  /* background-color: red; */
  display: flex;
  justify-content: space-between;
  > button {
    background-color: Transparent;
    background-repeat: no-repeat;
    border: none;
    overflow: hidden;
    cursor: pointer;
  }

  > button > img {
    width: 20px;
    height: 20px;
  }
`;

const EmojiAndMention = styled.div`
  /* background-color: orange; */
  padding: 0 10px;
  height: 23px;
  display: flex;
  justify-content: center;
  border-right: solid;
  border-width: thin;
  border-color: #bdbdbd;

  > button {
    background-color: Transparent;
    background-repeat: no-repeat;
    border: none;
    overflow: hidden;
    cursor: pointer;
  }

  > button > img {
    width: 20px;
    height: 20px;
  }
`;

const InnerEmojiAndMention = styled.div`
  /* background-color: red; */
  display: flex;
  justify-content: space-between;

  > button {
    background-color: Transparent;
    background-repeat: no-repeat;
    border: none;
    overflow: hidden;
    cursor: pointer;
  }

  > button > img {
    width: 20px;
    height: 20px;
  }
`;
