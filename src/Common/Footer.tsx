// import { styled } from "styled-components";

import { useState } from "react";
import { styled } from "styled-components";
import { useGlobalContext } from "../Pages/useContext";

export const Footer = () => {
  const { isBoolean } = useGlobalContext();

  return (
    <div>
      <Container color={isBoolean ? "#333" : "#cacaca46"}>
        <Wrapper>
          <Text color={isBoolean ? "white" : "#cacaca46"}>
            2023 HashIT App Ltd. Allrights reserved.
          </Text>
        </Wrapper>
      </Container>
    </div>
  );
};

const Text = styled.div`
  display: flex;
  justify-content: center;
  color: ${(props) => props.color};

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
  background-color: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
`;

// src/components/ColorChanger.js

// const ColorChanger: React.FC = () => {
//   const [changeColor, setChangeColor] = useState("");
//   const change = (color: any) => {
//     setChangeColor(color);
//   };
//   return (
//     <div>
//       <Container>
//         <Wrapper>
//           <ColorHold>
//             <Color bcc="red" onClick={() => change("red")}></Color>
//             <Color bcc="blue" onClick={() => change("blue")}></Color>
//             <Color bcc="yellow" onClick={() => change("yellow")}></Color>
//             <Color bcc="black" onClick={() => change("black")}></Color>
//             <Color bcc="purple" onClick={() => change("purple")}></Color>
//             <Color bcc="green" onClick={() => change("green")}></Color>
//           </ColorHold>
//         </Wrapper>

//         <Text color={changeColor}>Holla</Text>

//         <Text>Holla</Text>
//       </Container>
//     </div>
//   );
// };

// export default ColorChanger;

// const Text = styled.div`
//   margin: 20px 500px;
//   background-color: ${(props) => props.color || "gold"};
// `;
// const Color = styled.div<{ bcc: string }>`
//   width: 30px;
//   height: 30px;
//   border: 1px solid black;
//   background-color: ${({ bcc }) => bcc};
// `;
// const ColorHold = styled.div`
//   width: 90%;
//   min-height: 100%;
//   /* background-color: #333; */
//   display: flex;
//   gap: 20px;
//   flex-wrap: wrap;
//   /* padding: 4px; */
// `;
// const Wrapper = styled.div`
//   width: 220px;
//   height: 70px;
//   border: 2px solid black;
//   border-radius: 5px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 10px 0;
// `;
// const Container = styled.div`
//   width: 100%;
//   height: 70vh;
// `;
