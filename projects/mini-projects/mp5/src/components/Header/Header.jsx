import styled from "styled-components";

function Header() {
  return (
    <HeaderWrapper>
      <Title>Hotel Reviews</Title>
    </HeaderWrapper>
  );
}

export default Header;

const HeaderWrapper = styled.div`
  background-color: royalBlue;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Title = styled.h1`
  pointer-events: none;
`;
