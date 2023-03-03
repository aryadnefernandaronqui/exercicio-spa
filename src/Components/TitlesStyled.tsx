import React from "react";
import styled from "styled-components";

interface TitleStyledProps {
  fontSize: string;
  color?: string;
}

const TitleStyled = styled.h2<TitleStyledProps>`
  font-size: ${(prop) => prop.fontSize};
  color: ${(props) => (props.color ? props.color : "inherit")};
`;

export default TitleStyled;
