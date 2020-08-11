import styled from "styled-components";

const Progress = styled.div`
  position: fixed;
  background: linear-gradient(
    to right,
    rgba(21, 121, 9, 100) ${(props) => props.scroll},
    transparent 0
  );
  width: 100%;
  height: 7px;
  z-index: 3;
`;

export default Progress;
