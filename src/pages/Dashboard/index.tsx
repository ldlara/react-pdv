import React, { useEffect, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { AiOutlineScan } from 'react-icons/ai';
import { MdDialpad } from 'react-icons/md';
import { FiSearch, FiPlusCircle } from 'react-icons/fi';

import * as s from './styled';
import Layout from '../../components/Layout';
import api from '../../service/api';
import { formatPrice } from '../../utils/formatPrice';
import { ProductList } from '../../components/ProductList';

interface Product {
  id: number;
  title: string;
  price: number;
  amount: number;
  image: string;
  priceFormatted: string;
}

const Dashboard: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [total, setTotal] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await api.get<Product[]>('/products');
        const data = response.data.map((product) => ({
          ...product,
          priceFormatted: formatPrice(product.price),
        }));
        setProducts(data);
      } catch (error) {
        console.error('Error loading products:', error);
      }
    }

    loadProducts();
  }, []);

  function handleAddProduct(product: Product) {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  }

  const [date, setDate] = useState(new Date());

  const productCodeRef = useRef<HTMLInputElement>(null);
  const quantityRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const productCode = productCodeRef.current?.value;
      const quantity = quantityRef.current?.value;

      if (productCode && quantity && parseInt(quantity) >= 1) {
        const newProduct: Product = {
          id: new Date().valueOf(),
          title: productCode,
          price: await fetchPrice(productCode),
          amount: parseInt(quantity),
          image: '',
          priceFormatted: '',
        };

        setCartItems([...cartItems, newProduct]);
        setTotal(total + newProduct.price * newProduct.amount);

        if (productCodeRef.current) {
          productCodeRef.current.value = '';
        }

        if (quantityRef.current) {
          quantityRef.current.value = '1';
        }
      }
    }
  };

  const fetchPrice = async (productCode: string) => {
    try {
      const response = await api.get(`/products/${productCode}`);
      const productPrice = response.data.price;
      return productPrice >= 0.01 ? productPrice : 0.01;
    } catch (error) {
      console.error('Error fetching price:', error);
      return 0.01;
    }
  };

  useEffect(() => {
    const updateDate = () => {
      setDate(new Date());
    };

    updateDate();

  }, []);

  return (
    <Layout>
      <s.Header>
        <s.Title>Painel</s.Title>
        <s.Info>
          <span className="cashier">
            CAIXA ABERTO
          </span>
          <span className="date">
            {date.toLocaleDateString()}
          </span>
        </s.Info>
      </s.Header>

      <s.Search>
        <FiSearch size="24px" color="grey" />
        <s.SearchInput placeholder="Consultar Material" />
      </s.Search>
      
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
          <s.InputBox isSmall={false}>
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
                  <td>{p.title}</td>
                  <td>{p.amount}</td>
                  <td>{formatPrice(p.price)}</td>
                  <td>{formatPrice(p.price * p.amount)}</td>
                </tr>
              ))}
              <tr>
                <td>Total</td>
                <td></td>
                <td></td>
                <td>{formatPrice(total)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </s.Receipt>

      <ProductList>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <span>
              <strong>{product.title}</strong>
              <p>{product.priceFormatted}</p>
            </span>

            <button type="button" onClick={() => handleAddProduct(product)}>
              <FiPlusCircle size="24px" color="grey" />
            </button>
          </li>
        ))}
      </ProductList>
    </Layout>
  );
};

export default Dashboard;
