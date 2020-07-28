import React from 'react';
import styled from 'styled-components';
import Menu from '../../components/menu';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

const AppWrapper = styled.div`
  background: #141414;

  padding-top: 94px;
  
  @media (max-width: 800px) {
    padding-top: 40px;
  }
`;

function Home() {
  return (
    <AppWrapper>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"Here's how to start running when you're overweight. Losing weight can feel extremely daunting as a task, and as such keeps even the most strong-willed people from getting started"}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />      

      <Carousel
        category={dadosIniciais.categorias[3]}
      />      

      <Carousel
        category={dadosIniciais.categorias[4]}
      />       

      <Footer />
    </AppWrapper>
  );
}

export default Home;
