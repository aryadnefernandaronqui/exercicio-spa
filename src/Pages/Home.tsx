import React from "react";
import Banner from "../Components/BannerStyled";
import Icons from "../Components/Icons";
import { BsAlarmFill, BsFillBasketFill, BsFillBellFill } from "react-icons/bs";
import BoxStyled from "../Components/BoxStyled";
import TitleStyled from "../Components/TitlesStyled";
import Content from "../Components/Content";
import Footer from "../Components/Footer";

const Home: React.FC = () => {
  return (
    <>
      <Banner height="40vh">
        <TitleStyled fontSize="3rem" color="white">
          Minha Primeira Página com React
        </TitleStyled>
      </Banner>
      <BoxStyled>
        <Icons
          icon={<BsAlarmFill />}
          titulo="Somente para desktop"
          descricao="Vamos aprender, como utilizar um framework."
        />
        <Icons
          icon={<BsFillBasketFill />}
          titulo="Criado com componentes"
          descricao="Utilizamos o Styled Components."
        />
        <Icons
          icon={<BsFillBellFill />}
          titulo="Facíl aproveitamento"
          descricao="Estamos no caminho."
        />
      </BoxStyled>

      <Content
        title="Lorem ipsum1"
        description="dolor sit amet consectetur adipisicing elit. Labore vitae magnam non at, quod voluptate tenetur rerum recusandae maxime! Amet nulla praesentium quo laudantium nesciunt rerum sed voluptas earum nobisdolor sit amet consectetur adipisicing elit. Labore vitae magnam non at, quod voluptate tenetur rerum recusandae maxime! Amet nulla praesentium quo laudantium nesciunt rerum sed voluptas earum nobis dolor sit amet consectetur adipisicing elit. Labore vitae magnam non at, quod voluptate tenetur rerum recusandae maxime! Amet nulla praesentium quo laudantium nesciunt rerum sed voluptas earum nobis."
        srcImage="./assets/images/celular.jpg"
      ></Content>
      <Content
        title="Lorem ipsum2"
        description="dolor sit amet consectetur adipisicing elit. Labore vitae magnam non at, quod voluptate tenetur rerum recusandae maxime! Amet nulla praesentium quo laudantium nesciunt rerum sed voluptas earum nobisdolor sit amet consectetur adipisicing elit. Labore vitae magnam non at, quod voluptate tenetur rerum recusandae maxime! Amet nulla praesentium quo laudantium nesciunt rerum sed voluptas earum nobis dolor sit amet consectetur adipisicing elit. Labore vitae magnam non at, quod voluptate tenetur rerum recusandae maxime! Amet nulla praesentium quo laudantium nesciunt rerum sed voluptas earum nobis."
        srcImage="./assets/images/card.jpg"
        rowDirection="row-reverse"
      ></Content>
      <Content
        title="Lorem ipsum3"
        description="dolor sit amet consectetur adipisicing elit. Labore vitae magnam non at, quod voluptate tenetur rerum recusandae maxime! Amet nulla praesentium quo laudantium nesciunt rerum sed voluptas earum nobisdolor sit amet consectetur adipisicing elit. Labore vitae magnam non at, quod voluptate tenetur rerum recusandae maxime! Amet nulla praesentium quo laudantium nesciunt rerum sed voluptas earum nobis dolor sit amet consectetur adipisicing elit. Labore vitae magnam non at, quod voluptate tenetur rerum recusandae maxime! Amet nulla praesentium quo laudantium nesciunt rerum sed voluptas earum nobis."
        srcImage="./assets/images/img3card.jpg"
      ></Content>

      <Banner height="30vh">
        <TitleStyled fontSize="2rem">Contato</TitleStyled>
      </Banner>

      <Footer />
    </>
  );
};

export default Home;
