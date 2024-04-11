import React, { useRef, useState } from 'react';
import { AiOutlineScan } from 'react-icons/ai';
import { MdDialpad } from 'react-icons/md';
import { useSelector } from 'react-redux';
import Profile from '../Profile';

import * as s from './styled';

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
  const cart = useSelector((state: Cart) => state.cart.map((product) => ({
    ...product,
  })));

  const [cartItems, setCartItems] = useState<Product[]>(cart);
  const [total, setTotal] = useState(0);

  const productCodeRef = useRef<HTMLInputElement>(null);
  const quantityRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const productCode = productCodeRef.current?.value;
      const quantity = quantityRef.current?.value;
  
      if (productCode && quantity && parseInt(quantity) >= 1) {
        const newProduct: Product = {
          id: new Date().valueOf(),
          title: productCode, // Código do produto
          price: 0, // Preço inicial (pode ser atualizado posteriormente)
          amount: parseInt(quantity),
        };
  
        // Aqui você deve fazer a consulta ao banco de dados para obter o preço do produto com base no código inserido
        // Supondo que você tenha uma função fetchPrice que retorna o preço do produto com base no código
        // Você deve substituir a string '0.01' pelo preço mínimo desejado
        fetchPrice(productCode).then((price) => {
          // Verifica se o preço retornado é menor que 0.01 e ajusta para 0.01 se for o caso
          newProduct.price = price < 0.01 ? 0.01 : price;
  
          // Continua com o restante do código para adicionar o produto ao carrinho
          setCartItems([...cartItems, newProduct]);
          setTotal(total + newProduct.price * newProduct.amount);
  
          if (productCodeRef.current) {
            productCodeRef.current.value = '';
          }
  
          if (quantityRef.current) {
            quantityRef.current.value = '1'; // Reset the quantity input to 1
          }
        });
      }
    }
  };
  
  const fetchPrice = async (productCode: string) => {
    // Simula a consulta ao banco de dados para obter o preço do produto
    // Você deve implementar a lógica real de consulta ao banco de dados aqui
    return new Promise<number>((resolve) => {
      setTimeout(() => {
        // Suponha que 'productPrice' seja o preço retornado do banco de dados
        const productPrice = 0.005; // Exemplo de preço retornado do banco de dados
        resolve(productPrice);
      }, 500);
    });
  };
  
  const fetchDescription = async (productCode: string) => {
    // Simula a consulta ao banco de dados para obter a descrição do produto
    // Você deve implementar a lógica real de consulta ao banco de dados aqui
    return new Promise<string>((resolve) => {
      setTimeout(() => {
        // Suponha que 'productData' seja o objeto retornado do banco de dados com a descrição do produto
        const productData = { code: 'XYZ123', description: 'Produto ABC' };
        if (productData.code === productCode) {
          resolve(productData.description);
        } else {
          resolve('Descrição do Produto'); // Caso não encontre a descrição, retorna um valor padrão
        }
      }, 500);
    });
  };

  return (
    <s.SidebarWrapper>
      <Profile />
      <s.InputWrapper>
        <div>
          <label htmlFor="product_cod">Cod.Produto</label>
          <s.InputBox>
            <s.Input id="product_cod" ref={productCodeRef} onKeyDown={handleKeyDown} />
            <AiOutlineScan size="24px" color="grey" />
          </s.InputBox>
        </div>
        <div>
          <label htmlFor="quantity">Qtde</label>
          <s.InputBox isSmall={isSmall}>
            <s.Input id="quantity" ref={quantityRef} defaultValue="1" onKeyDown={handleKeyDown} />
            <MdDialpad size="24px" color="grey" />
          </s.InputBox>
        </div>
      </s.InputWrapper>
      <hr />
      <s.Receipt>
        <div className="table-wrapper">
          <table className="responsive-table">
            <thead>
              <tr>
                <th>Descrição do produto</th>
                <th>Qtde</th>
                <th>Valor unitário</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((p, index) => (
                <tr key={index}>
                  <td>{p.title}</td> {/* Troque p.title pela descrição real vinda do banco de dados */}
                  <td>{p.amount}</td>
                  <td>{p.price}</td>
                  <td>{p.price * p.amount}</td>
                </tr>
              ))}
              <tr>
                <td>Total</td>
                <td></td>
                <td></td>
                <td>{total}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </s.Receipt>
    </s.SidebarWrapper>
  );
};

export default Sidebar;
