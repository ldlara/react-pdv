import React from 'react';
import Layout from '../../components/Layout';

import * as s from './styled';

// import { Container } from './stylew';

// const About: React.FC = () => (
//   <Layout>
//     <h1>Sobre</h1>
//   </Layout>

// );

// export default About;

const About: React.FC = () => {
  return (
    <Layout>
      <s.Title>
      <h1>Sobre</h1>
      </s.Title>
      <p>
        <strong>Fabricante:</strong> Deha Tech
      </p>
      <p>
        <strong>Data de Lançamento:</strong> Versão 1.0
      </p>
      <p>
        <strong>Licença:</strong> Este software está licenciado para uso até 01/04/2025.
      </p>
      <h2>Descrição</h2>
      <p>
        A versão 1.0 é a primeira versão estável do software, com várias melhorias em relação às
        versões anteriores.
      </p>
      <p>
        Ela inclui novos recursos e melhora o desempenho geral do software.
      </p>
      <h2>Novos Recursos</h2>
      <ul>
        <li>Novo design moderno e fácil de usar</li>
        <li>Melhoria no desempenho</li>
        <li>Novos recursos de segurança</li>
        <li>Compatibilidade com os principais sistemas operacionais</li>
      </ul>

      
    </Layout>
  );
};

export default About;