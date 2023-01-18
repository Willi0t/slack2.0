import React from "react";
import styled from "styled-components";
import { useCollection } from "react-firebase-hooks/firestore";
import { db, auth } from "../firebase";
import SidebarOptions from "./SidebarOptions";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CreateIcon from "@mui/icons-material/Create";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AppsIcon from "@mui/icons-material/Apps";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import { useAuthState } from "react-firebase-hooks/auth";

function SideBar() {
  const [channels, loading, error] = useCollection(db.collection("rooms"));
  const [user] = useAuthState(auth);
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>Hyper island learning</h2>
          <h3>
            <FiberManualRecordIcon />
            William sinclair
          </h3>
        </SidebarInfo>
        <CreateIcon></CreateIcon>
      </SidebarHeader>
      <SidebarOptions Icon={InsertCommentIcon} title="Threads" />
      <SidebarOptions Icon={InboxIcon} title="Mentions & reactions" />
      <SidebarOptions Icon={DraftsIcon} title="Saved items" />
      <SidebarOptions Icon={BookmarkBorderIcon} title="Channel browser" />
      <SidebarOptions Icon={PeopleAltIcon} title="People & user groups" />
      <SidebarOptions Icon={AppsIcon} title="Apps" />
      <SidebarOptions Icon={FileCopyIcon} title="File browser" />
      <SidebarOptions Icon={ExpandLessIcon} title="Show less" />
      <hr />
      <SidebarOptions Icon={ExpandMoreIcon} title="Channels" />
      <hr />
      <SidebarOptions Icon={AddIcon} addChannelOption title="Add Channel" />
      {channels?.docs.map((doc) => (
        <SidebarOptions key={doc.id} id={doc.id} title={doc.data().name} />
      ))}
    </SidebarContainer>
  );
}

export default SideBar;

const SidebarContainer = styled.div`
  color: white;
  background-color: var(--slack-color);
  flex: 0.3;
  border-top: 1px solid #49274b;
  max-width: 260px;
  margin-top: 60px;

  > hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #49274b;
  }
`;

const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding: 13px;

  > .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background-color: white;
    border-radius: 999px;
  }
`;

const SidebarInfo = styled.div`
  flex: 1;

  > {
    font-size: 15px;
    font-weight: 900px;
    margin-bottom: 5px;
  }

  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
  }

  > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    align-items: center;
    color: green;
  }
`;
