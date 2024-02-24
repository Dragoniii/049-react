import styled from "styled-components";
import { Link } from "react-router-dom";

const RodapeContainer = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #1f0049;
  color: #ffffff;
`;

const RodapeText = styled.p`
  padding: 0 15px;
`;

const RodapeLink = styled(Link)`
  color: #e2d8a5;
  text-decoration: none;
  padding: 0 15px;
  &:hover {
    color: #6f9f9c;
  }
`;

function Rodape() {
  return (
    <RodapeContainer>
      <RodapeText>
        Copyright © 2024 - Site desenvolvido por turma 1025.
      </RodapeText>
      <RodapeLink to="/login">Login para administradores</RodapeLink>
    </RodapeContainer>
  );
}
export default Rodape;
