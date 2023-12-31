import { styled } from "styled-components";
import { GoPerson, GoMail } from "react-icons/go";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { useColorChange } from "../useColor";
import { useGlobalContext } from "./useContext";

export const EditorsChoice = () => {
  const { isBoolean } = useGlobalContext();

  return (
    <div>
      <Container color={isBoolean ? "#282828" : "white"}>
        <Wrapper>
          <Text color={isBoolean ? "white" : "#282828"}>
            Join the waitlist for <span>HashIT!</span>
          </Text>
          <Input color={isBoolean ? "white" : "#282828"}>
            <Icon color={isBoolean ? "white" : "#282828"}>
              <GoPerson />
            </Icon>
            <input type="text" name="" id="" placeholder="Full name" />
          </Input>
          <Input color={isBoolean ? "white" : "#282828"}>
            <Icon color={isBoolean ? "white" : "#282828"}>
              <GoMail />
            </Icon>
            <input type="text" name="" id="" placeholder="Email Address" />
          </Input>
          <Button color={!isBoolean ? "#282828" : "white"}>
            <p color={isBoolean ? "red" : "red"}>
              Get notified when HashIT is live
            </p>
          </Button>
          <Iconss color={isBoolean ? "white" : "#282828"}>
            <BsFacebook />
            <AiFillTwitterCircle />
            <AiFillInstagram />
            <AiFillLinkedin />
          </Iconss>
        </Wrapper>
      </Container>
    </div>
  );
};

const Icon = styled.p`
  font-size: 20px;
  padding-left: 15px;
  color: ${(props) => (props.color === "white" ? "white" : "black")};
`;
const Iconss = styled.p`
  width: 50%;
  height: 20px;
  display: flex;
  justify-content: center;
  gap: 5px;
  font-size: 25px;
  color: ${(props) => props.color};
`;
const Button = styled.div`
  width: 47%;
  height: 50px;
  background-color: ${(props) => props.color};
  border-radius: 5px;
  color: white;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  padding: 2px 7px;
  align-items: center;
  color: ${(props) => (props.color === "#282828" ? "white" : "black")};
  @media (max-width: 500px) {
    width: 100%;
    font-size: 14px;
    background-color: black;
  }

  p {
  }
`;
const Input = styled.div`
  width: 47%;
  height: 50px;
  /* background-color: ${(props) => props.color}; */
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 30px;
  border-radius: 5px;
  border: 1px solid
    ${(props) => (props.color === "white" ? "white" : "#282828")};
  @media (max-width: 500px) {
    width: 100%;
    font-size: 16px;
    /* background-color: red; */
  }
  input {
    flex: 1;
    outline: none;
    border: none;
    background-color: ${(props) =>
      props.color === "white" ? "#282828" : "white"};
    color: ${(props) => (props.color ? "black" : "white")};
  }
`;
const Text = styled.h1`
  font-size: 49px;
  width: 50%;
  text-align: center;
  margin-top: 50px;
  font-weight: 800;
  color: ${(props) => props.color};

  @media (min-width: 320px) {
    width: 100%;
    font-size: 36px;
    /* background-color: red; */
  }
  span {
    color: #ec5a24;
  }
`;
const Wrapper = styled.div`
  width: 50%;
  height: 100%;
  /* background-color: yellow; */
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (max-width: 1024px) {
    width: 100%;
    padding: 0 15px;
  }
`;
const Container = styled.div`
  width: 100%;
  height: 60%;
  background-color: ${(props) => props.color};
  display: flex;
  justify-content: center;
`;
