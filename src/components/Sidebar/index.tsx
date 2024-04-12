import React, { } from 'react';
import { } from 'react-redux';
import Profile from '../Profile';

import * as s from './styled';

import {
  FiDollarSign, FiCreditCard, FiHardDrive,
} from 'react-icons/fi';

export interface Props {
  isSmall?: boolean;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  amount: number;
}

export interface Cart {
  cart: Product[];
}

const Sidebar: React.FC<Props> = ({ isSmall }) => {
  
  return (
    <s.SidebarWrapper>
      <Profile />
      <s.CardContainer>
        <s.Card>
          <header>
            <p>Dinheiro</p>
            <FiDollarSign size="24px" color="green" />
          </header>
          <section>
            <p>R$</p>
            <h1>457,56</h1>
          </section>
        </s.Card>
        <s.Card>
          <header>
            <p>Cartão</p>
            <FiCreditCard size="24px" color="orange" />
          </header>
          <section>
            <p>R$</p>
            <h1>24.540,25</h1>
          </section>
        </s.Card>
        <s.Card>
          <header>
            <p>Caixa</p>
            <FiHardDrive size="24px" color="grey" />
          </header>
          <section>
            <p>R$</p>
            <h1>24.997,81</h1>
          </section>
        </s.Card>
      </s.CardContainer>

    </s.SidebarWrapper>
  );
};

export default Sidebar;
