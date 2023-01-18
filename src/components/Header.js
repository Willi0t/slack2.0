import React from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

function Header() {
  const [user] = useAuthState(auth);
  return (
    <div>
      <HeaderContainer>
        <HeaderLeft>
          <HeaderAvatar
            onClick={() => auth.signOut()}
            src={user?.photoURL}
            alt={user.displayName}
          />
          <AccessTimeIcon />
        </HeaderLeft>
        <HeaderSearch>
          <input placeholder="Search Hyper island" />
          <SearchIcon />
        </HeaderSearch>
        <HeaderRight>
          <HelpOutlineIcon />
        </HeaderRight>
      </HeaderContainer>
    </div>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  background-color: var(--slack-color);
  color: white;
`;

const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left: 20px;

  > .MuiSvgIcon-root {
    opacity: 0.6;
    margin-left: auto;
    margin-right: 30px;
  }
`;

const HeaderAvatar = styled(Avatar)`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

const HeaderSearch = styled.div`
  flex: 0.4;
  opacity: 1;
  display: flex;
  padding: 0 35px;
  color: gray;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 5px;

  > input {
    background-color: transparent;
    border: none;
    min-width: 100%;
    outline: 0;
    color: white;
  }

  > input > ::placeholder {
    color: white;
  }

  > .MuiSvgIcon-root {
    color: white;
    opacity: 0.6;
  }
`;

const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  align-items: flex-end;

  > .MuiSvgIcon-root {
    opacity: 0.6;
    margin-left: auto;
    margin-right: 20px;
  }
`;
