import React from "react";
import bold from "../assets/images/bold.png";
import italic from "../assets/images/italic.png";
import strikethrough from "../assets/images/strikethrough.png";
import link from "../assets/images/link.png";
import orderedList from "../assets/images/orderedList.png";
import bulletedList from "../assets/images/bulletedList.png";
import blockquote from "../assets/images/blockquote.png";
import code from "../assets/images/code.png";
import codeBlock from "../assets/images/codeBlock.png";
import styled from "styled-components";

const MainChatStyle = () => {
  return (
    <MainChatStyleWrapper>
      <MainChatStyleIconContainer>
        <StyleContainer>
          <InnerStyleContainer>
            <button className="chatIcon">
              <img src={bold} alt="Bold style" />
            </button>
            <button className="chatIcon">
              <img src={italic} alt="Italic style" />
            </button>
            <button className="chatIcon">
              <img src={strikethrough} alt="Strikethrough" />
            </button>
          </InnerStyleContainer>
        </StyleContainer>
        <LinkContainer>
          <button className="chatIcon">
            <img src={link} alt="Link icon" />
          </button>
        </LinkContainer>
        <ListContainer>
          <InnerListContainer>
            <button className="chatIcon">
              <img src={orderedList} alt="orderedListicon" />
            </button>
            <button className="chatIcon">
              <img src={bulletedList} alt="bulletedList icon" />
            </button>
          </InnerListContainer>
        </ListContainer>
        <BlockquteContainer>
          <button className="chatIcon">
            <img src={blockquote} alt="blockquote icon" />
          </button>
        </BlockquteContainer>
        <CodeContainer>
          <InnercodeContainer>
            <button className="chatIcon">
              <img src={code} alt="code icon" />
            </button>
            <button className="chatIcon">
              <img src={codeBlock} alt="codeBlock icon" />
            </button>
          </InnercodeContainer>
        </CodeContainer>
      </MainChatStyleIconContainer>
    </MainChatStyleWrapper>
  );
};

export default MainChatStyle;

const MainChatStyleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 50px;
  background-color: #f8f8f8;
`;

const MainChatStyleIconContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  /* justify-content: center; */
  /* background-color: black; */
  width: 400px;
  /* margin-left: 20px; */
`;

const StyleContainer = styled.div`
  /* background-color: orange; */
  padding: 0 10px;
  display: flex;
  justify-content: center;
  border-right: solid;
  border-width: thin;
  border-color: #bdbdbd;
`;

const InnerStyleContainer = styled.div`
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
    width: 15px;
    height: 15px;
  }
`;

const LinkContainer = styled.div`
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
    width: 15px;
    height: 15px;
  }
`;

const ListContainer = styled.div`
  /* background-color: orange; */
  padding: 0 10px;
  display: flex;
  justify-content: center;
  border-right: solid;
  border-width: thin;
  border-color: #bdbdbd;
`;

const InnerListContainer = styled.div`
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
    width: 15px;
    height: 15px;
  }
`;

const BlockquteContainer = styled.div`
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
    width: 15px;
    height: 15px;
  }
`;

const CodeContainer = styled.div`
  /* background-color: orange; */
  padding: 0 10px;
  display: flex;
  justify-content: center;
`;

const InnercodeContainer = styled.div`
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
    width: 15px;
    height: 15px;
  }
`;
