import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 2.5rem 2.8rem;
  border-bottom: 2px solid #000;
`;

function Header() {
  return <StyledHeader>Header</StyledHeader>;
}

export default Header;
