import { styled } from "styled-components";

export const Footer = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Text>2023 HashIT App Ltd. Allrights reserved.</Text>
        </Wrapper>
      </Container>
    </div>
  );
};

const Text = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 15px;
    text-align: center;
  }
`;
const Wrapper = styled.div`
  width: 85%;
  /* background-color: green; */
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  width: 100%;
  height: 100px;
  background-color: #cacaca46;
  display: flex;
  justify-content: center;
  align-items: center;
`;
