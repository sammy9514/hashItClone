import { styled } from "styled-components";
import bckimg from "../Assets/waitlist-a41208d5.png";
import { useColorChange } from "../useColor";
import { useGlobalContext } from "./useContext";

export const Hero = () => {
  const { dark, colorChange } = useColorChange();
  const { isBoolean } = useGlobalContext();

  return (
    <div>
      <Container color={isBoolean ? "#333" : "#cacaca46"}>
        <Wrapper>
          <Text color={isBoolean ? "white" : "black"}>
            Supercharge Your Mobile Life with <span>HashIT!</span>
          </Text>
          <BckImg>
            <Bck src={bckimg} />
          </BckImg>
          <LilText color={isBoolean ? "white" : "black"}>
            Level up your mobile experience with Hashit! Send money, buy
            airtime, pay utilities, save, earn, learn, connect with friends,
            explore our vibrant marketplace, advertise your biz, and win
            exciting giveaways - all in one place. Join
          </LilText>
        </Wrapper>
      </Container>
    </div>
  );
};

const LilText = styled.p`
  width: 65%;
  text-align: center;
  margin-top: 50px;
  color: ${(props) => props.color};
  /* font-weight: bold; */

  @media (max-width: 768px) {
    width: 100%;
    font-size: 14px;
    text-align: center;
  }
`;
const Bck = styled.img`
  width: 100%;
`;
const BckImg = styled.div`
  width: 100%;
`;
const Text = styled.h1`
  font-size: 50px;
  width: 47%;
  text-align: center;
  margin-top: 50px;
  font-weight: bold;
  color: ${(props) => props.color};

  @media (max-width: 768px) {
    width: 100%;
    font-size: 36px;
    /* background-color: red; */
  }

  span {
    color: #ec5a24;
  }
`;
const Wrapper = styled.div`
  width: 85%;
  height: 100%;
  /* background-color: yellow; */
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Container = styled.div`
  width: 100%;
  height: calc(100% - 100px);
  background-color: ${(props) => props.color};
  display: flex;
  justify-content: center;
  padding-top: 100px;
`;

// Using CRUD operation in HTTP, i'll be getting all my dummy data using the (GET method), adding new data using the (POST method), updating the data using (the PATCH and PUT method) and deleting the data using the (DELETE method). stay tuned, relax, learn and enjoy.
