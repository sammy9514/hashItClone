import { styled } from "styled-components";
import { GoPerson, GoMail } from "react-icons/go";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

export const EditorsChoice = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Text>
            Join the waitlist for <span>HashIT!</span>
          </Text>
          <Input>
            <Icon>
              <GoPerson />
            </Icon>
            <input type="text" name="" id="" placeholder="Full name" />
          </Input>
          <Input>
            <Icon>
              <GoMail />
            </Icon>
            <input type="text" name="" id="" placeholder="Email Address" />
          </Input>
          <Button>Get notified when HashIT is live</Button>
          <Iconss>
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
`;
const Iconss = styled.p`
  width: 50%;
  height: 20px;
  display: flex;
  justify-content: center;
  gap: 5px;
  font-size: 25px;
`;
const Button = styled.div`
  width: 47%;
  height: 50px;
  background-color: black;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  padding: 2px 7px;
  align-items: center;
  @media (max-width: 500px) {
    width: 100%;
    font-size: 14px;
    background-color: black;
  }
`;
const Input = styled.div`
  width: 47%;
  height: 50px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 30px;
  border-radius: 5px;
  border: 1px solid black;
  @media (max-width: 500px) {
    width: 100%;
    font-size: 16px;
    /* background-color: red; */
  }
  input {
    flex: 1;
    outline: none;
    border: none;
  }
`;
const Text = styled.h1`
  font-size: 49px;
  width: 50%;
  text-align: center;
  margin-top: 50px;
  font-weight: 800;

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
  background-color: white;
  display: flex;
  justify-content: center;
`;
