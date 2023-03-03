import React from "react";
import styled from "styled-components";

const WrapperFooterStyled = styled.footer`
  background-color: ${(props) => props.theme.backgroundColor};
  width: 100%;
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default WrapperFooterStyled;
