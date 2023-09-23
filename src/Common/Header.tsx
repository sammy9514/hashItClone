import { styled } from "styled-components";
import logo from "../Assets/logo-black-12822108.svg";
import { PiToggleLeftFill } from "react-icons/pi";
import { PiToggleRightFill } from "react-icons/pi";
import { useState } from "react";
export const Header = () => {
  let [on, off] = useState(false);
  const toggle = () => {
    off(!on);
  };
  return (
    <div>
      <Container>
        <Wrapper>
          <Logo>
            <Ilogo src={logo} />
          </Logo>
          <Toggle onClick={toggle}>
            {on ? (
              <PiToggleRightFill style={{ color: "dodgerblue" }} />
            ) : (
              <PiToggleLeftFill />
            )}
          </Toggle>
        </Wrapper>
      </Container>
    </div>
  );
};

const Ilogo = styled.img``;
const Toggle = styled.div`
  font-size: 60px;
  color: gray;

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;
const Logo = styled.div``;
const Wrapper = styled.div`
  width: 85%;
  /* background-color: green; */
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Container = styled.div`
  width: 100%;
  height: 100px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;

  @media (max-width: 768px) {
    height: 78px;
  }
`;
