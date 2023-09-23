import { styled } from "styled-components";
import bckimg from "../Assets/waitlist-a41208d5.png";

export const Hero = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Text>
            Supercharge Your Mobile Life with <span>HashIT!</span>
          </Text>
          <BckImg>
            <Bck src={bckimg} />
          </BckImg>
          <LilText>
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
  background-color: #cacaca46;
  display: flex;
  justify-content: center;
  padding-top: 100px;
`;
