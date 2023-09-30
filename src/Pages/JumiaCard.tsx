import { styled } from "styled-components";
import ppp from "../Assets/1-3.jpg";
import defaulte from "../Assets/download.gif";

interface iCards {
  pics: any;
  desc: string;
  price: string;
  priceCan: string;
}

export const JumiaCard: React.FC<iCards> = ({
  pics,
  desc,
  price,
  priceCan,
}) => {
  return (
    <div>
      <Container>
        <ImgHold>
          <Img src={pics || defaulte}></Img>
        </ImgHold>
        <Wrapper>
          <Desc>{desc}</Desc>
          <Price>{price}</Price>
          <PriceCan>{priceCan}</PriceCan>
        </Wrapper>
      </Container>
    </div>
  );
};

const PriceCan = styled.div`
  font-size: 13px;
  text-decoration: line-through;
  color: #80808073;
`;
const Price = styled.div`
  font-size: 16px;
`;
const Desc = styled.div``;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const ImgHold = styled.div`
  width: 100%;
  height: calc(100% - 70px);

  /* background-color: purple; */
`;
const Wrapper = styled.div`
  width: 90%;
  height: 70px;
  padding: 10px 5px 0;
  /* background-color: red; */
`;
const Container = styled.div`
  width: 200px;
  height: 250px;
  /* background-color: blue; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &:hover {
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    transform: scale(1.04);
  }
`;
