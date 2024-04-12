import styled from 'styled-components';
import media from 'styled-media-query';

export const SidebarWrapper = styled.aside`
  align-items: center;
  border-right: 1px solid #edf0f3;
  background: #f9fafb;
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 2rem;
  text-align: center;
  width: auto;

  ${media.lessThan('large')`
    height: auto;
    min-height: 100vh;
    width: 100%;
    padding: 1rem;
    justify-content: space-evenly;
  `}
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    font-family: Roboto Mono;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    text-align: initial;
    display: flex;
    margin-bottom: 20px;
    letter-spacing: -0.34px;
  }
`;

export const CardContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column; /* Alteração para exibir os cards verticalmente */
`;

export const Card = styled.div`
  background: #ffffff;
  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 100%;
  max-width: 200px; /* Reduza a largura máxima do card */
  height: 126px;
  padding: 12px; /* Ajuste o padding interno */
  border-radius: 5px;
  display: flex;
  flex-direction: column; /* Mantém o conteúdo verticalmente */
  margin-bottom: 18px; /* Espaçamento entre os cards */
  & + div {
    margin-left: 0; /* Remova o espaçamento entre os cards */
  }
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 19px;
      letter-spacing: -0.274286px;
      color: #8e99af;
    }
  }
  section {
    p {
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      line-height: 19px;
      letter-spacing: -0.274286px;
      color: #8e99af;
    }
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    h1 {
      margin-top: 14px;
      font-size: 24px; /* Reduza o tamanho da fonte do valor */
      font-weight: 100;
      line-height: 36px; /* Reduza o line-height */
    }
  }
`;