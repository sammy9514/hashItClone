import { styled } from "styled-components";
import logo from "../Assets/logo-black-12822108.svg";
import logoDark from "../Assets/logo-2ed48836.svg";
import { PiToggleLeftFill } from "react-icons/pi";
import { PiToggleRightFill } from "react-icons/pi";
import { useContext, useState } from "react";
import { useColorChange } from "../useColor";
import { useGlobalContext } from "../Pages/useContext";
export const Header: React.FC = () => {
  let [on, off] = useState(false);
  const toggle = () => {
    off(!on);
  };

  // const [dark, setDark] = useState(false);
  // const colorChange = () => {
  //   setDark(!dark);
  // };

  // const { colorChange, dark } = useColorChange();
  const { isBoolean, toggleBoolean } = useGlobalContext();

  return (
    <div>
      <Container color={isBoolean ? "#282828" : "white"}>
        <Wrapper>
          <Logo>
            {isBoolean ? <Ilogo src={logoDark} /> : <Ilogo src={logo} />}
          </Logo>
          <Toggle
            onClick={() => {
              toggle();
              toggleBoolean();
            }}
          >
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
  background-color: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;

  @media (max-width: 768px) {
    height: 78px;
  }
`;
