import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styled from "styled-components";

const StyleDiv = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
`;

const StyleMain = styled.main`
  background-color: var(--color-grey-50);
  padding: 5rem 6rem;
`;

function AppLayout() {
  return (
    <StyleDiv>
      <Header />
      <Sidebar />
      <StyleMain>
        <Outlet />
      </StyleMain>
    </StyleDiv>
  );
}

export default AppLayout;
