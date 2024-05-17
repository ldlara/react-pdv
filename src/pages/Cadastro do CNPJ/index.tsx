import React, { useState } from 'react';
import Layout from '../../components/Layout';

interface NfceData {
  series: string;
  number: string;
  productCode: string;
  totalValue: string;
  issueDate: string;
}

const NfceForm: React.FC<{
  nfceData: NfceData;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ nfceData, onInputChange }) => (
  <>
    <label htmlFor="series" style={{ marginBottom: '1rem', display: 'block' }}>
      Série:
      <input
        type="text"
        name="series"
        id="series"
        value={nfceData.series}
        onChange={onInputChange}
        style={{ marginLeft: '0.5rem', width: '100%', maxWidth: '300px' }}
      />
    </label>
    <label htmlFor="number">
      Número:
      <input
        type="text"
        name="number"
        id="number"
        value={nfceData.number}
        onChange={onInputChange}
      />
    </label>
    <label htmlFor="productCode">
      Código do Produto:
      <input
        type="text"
        name="productCode"
        id="productCode"
        value={nfceData.productCode}
        onChange={onInputChange}
      />
    </label>
    <label htmlFor="totalValue">
      Valor Total:
      <input
        type="text"
        name="totalValue"
        id="totalValue"
        value={nfceData.totalValue}
        onChange={onInputChange}
      />
    </label>
    <label htmlFor="issueDate">
      Data de Emissão:
      <input
        type="date"
        name="issueDate"
        id="issueDate"
        value={nfceData.issueDate}
        onChange={onInputChange}
      />
    </label>
  </>
);

const Product: React.FC = () => {
  const [nfceData, setNfceData] = useState<NfceData>({
    series: '',
    number: '',
    productCode: '',
    totalValue: '',
    issueDate: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNfceData({ ...nfceData, [name]: value });
  };

  const handleGenerateNFCe = async () => {
    // Your NFCe generation logic here
  };

  return (
    <Layout>
      <div className="nfc-e-issuance-screen">
        <h1>NF-e Emissão</h1>
        <NfceForm nfceData={nfceData} onInputChange={handleInputChange} />
        <button type="button" onClick={handleGenerateNFCe}>Gerar NFC-e</button>
      </div>
    </Layout>
  );
};

export default Product;
