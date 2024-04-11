import styled from 'styled-components';
import media from 'styled-media-query';

interface Props {
  isSmall?: boolean;
}

export const SidebarWrapper = styled.aside`
  align-items: center;
  border-right: 1px solid #edf0f3;
  background: #f9fafb;
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 2rem;
  text-align: center;
  width: 520px;

  ${media.lessThan('large')`
    height: auto;
    min-height: 100vh;
    width: 100%;
    padding: 1rem;
    justify-content: space-evenly;
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
