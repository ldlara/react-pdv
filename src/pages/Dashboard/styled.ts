import styled from 'styled-components';
import media from 'styled-media-query';

interface Props {
  isSmall?: boolean;
}

export const Header = styled.div`
  margin-bottom: 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 48px;
  color: #292c48;
  ${media.lessThan('large')`
  padding: 0px 1.4rem;
  `}
`;

export const Info = styled.div`
  font-size: 18px;
  text-align: right;
  > span {
    display: block;
    line-height: 1.3;
    & + span {
      margin-top: 5px;
    }
  }
  > .cashier {
    color: #10b047;
  }

  > .date {
    color: #292c48;
  }
`;

export const Search = styled.div`
  display: flex;
  box-sizing: border-box;
  max-width: 100%;
  -webkit-box-align: center;
  align-items: center;
  min-width: 0px;
  min-height: 0px;
  height: 50px;
  flex-direction: row;
  margin: 40px 0;
  padding-left: 24px;
  padding-right: 24px;
  border-width: 2px;
  border-style: solid;
  border-color: rgb(218, 218, 218);
  border-image: initial;
  border-radius: 24px;

  &::placeholder{
    color: #DADADA;
  }

`;

export const SearchInput = styled.input`
  font-size: 24px;
  line-height: 24px;
  width: 100%;
  color: rgb(68, 68, 68);
  border: 0;
  padding: 0 1rem;
  outline: none;
  -webkit-font-smoothing: antialiased;
`;

export const CategoryContainer = styled.div`
  position: relative;
  height: 295px;
  margin: auto 10px;
  overflow: hidden;
`;

export const CategoryItem = styled.div`

background: #ffffff;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 100%;
  margin: 25px auto;
  max-width: 116px;
  height: 144px;
  padding: 18px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  transition: 0.3s;

  header {
    display: flex;
    height: 100%;
    align-items: center;
    flex-direction: column-reverse;
    justify-content: space-between;
    p {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      margin-top: 10px;
      line-height: 19px;
      letter-spacing: -0.274286px;
      color: #292c48;
    }
  }

  &:hover {
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
    transform: scale(1.2);
  }



  ${media.greaterThan('large')`
  background: #ffffff;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: auto;
  margin: 25px;
  max-width: 100%;
height: auto;
  padding: 20px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  transition: 0.3s;

  header {
    display: flex;
    height: 100%;
    align-items: center;
    flex-direction: column-reverse;
    justify-content: space-between;
    p {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      margin-top: 10px;
      line-height: 19px;
      letter-spacing: -0.274286px;
      color: #292c48;
    }
  }

  &:hover {
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
    transform: scale(1.2);
  }

  `}



`;

export const InputWrapper = styled.div`
  display: flex;
  margin-top: 31px;

  div + div {
    margin-left: 8px;
    flex: 1;
  }

  > div:first-child {
    width: 197px;
  }

  label {
    font-size: 14px;
    line-height: 16px;
    color: #292c48;
    font-weight: 300;
    display: block;
    text-align: left;
    padding-left: 20px;
    margin-bottom: 3px;
  }
`;

export const InputBox = styled.div<Props>`
  display: flex;
  align-items: center;
  height: 50px;
  border-width: 2px;
  border-style: solid;
  border-color: rgb(218, 218, 218);
  border-image: initial;
  border-radius: 24px;
  padding: ${(props) => (props.isSmall ? '0 17px' : '0 24px')};
  width: 197px; /* Adicione esta propriedade para definir a largura igual para ambas as caixas */

  &:last-child {
    margin-left: 8px; /* Adicione margem apenas à segunda caixa */
  }
`;


export const Input = styled.input`
  font-size: 14px;
  line-height: 22px;
  width: 100%;
  color: rgb(68, 68, 68);
  background: transparent;
  border: 0;
  outline: none;
  -webkit-font-smoothing: antialiased !important;

  /* Adicione a propriedade 'max' para limitar o valor máximo do input */
  &[type='number'] {
    max: 10; /* Defina o valor máximo permitido (neste exemplo, 10 unidades) */
  }

  &::placeholder {
    color: #dadada;
  }
`;

export const Receipt = styled.div`
  overflow: auto;
  width: 100%;
  padding: 10px;
  background: #fff9d8;
  box-shadow: 5px 2px 24px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  .table-wrapper {
    max-width: 100%;
    overflow-x: auto;
  }

  table {
    width: 100%;
    border-collapse: collapse;

    th,
    td {
      padding: 8px;
      text-align: center;
    }

    th {
      background-color: #f0f0f0;
      font-weight: bold;
    }

    td {
      border-bottom: 1px solid #eaeaea;
    }

    tbody tr:last-child td {
      border-bottom: none;
    }
  }
`;
