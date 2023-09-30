import { styled } from "styled-components";
import { JumiaCard } from "./JumiaCard";
import datas from "./datas.json";

export const Cards = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          {datas.map((props) => (
            <JumiaCard
              pics={props.pics}
              desc={props.desc}
              price={props.price}
              priceCan={props.priceCon}
            />
          ))}
        </Wrapper>
      </Container>
    </div>
  );
};

// const Container = styled.div`

// `
const Wrapper = styled.div`
  width: 90%;
  height: 100%;
  /* background-color: red; */
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;

  /* gap: ; */
`;
const Container = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: blue; */
`;
