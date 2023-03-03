import React from "react";
import WrappedIconStyled from "./WrappedIconStyled";

interface IconsProps {
  icon: React.ReactNode;
  descricao: string;
  titulo: string;
}

const Icons: React.FC<IconsProps> = ({ icon, descricao, titulo }) => {
  return (
    <WrappedIconStyled>
      {icon}

      <h2>{titulo}</h2>
      <p>{descricao}</p>
    </WrappedIconStyled>
  );
};

export default Icons;
