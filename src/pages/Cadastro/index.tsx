import React, { useState } from 'react';
import axios from 'axios';

const NFCeIssuanceScreen = () => {
  // Contribuinte data
  const [cnpj, setCnpj] = useState('');
  const [ie, setIe] = useState('');
  const [im, setIm] = useState('');
  const [cnae, setCnae] = useState('');
  const [name, setName] = useState('');
  const [fantasyName, setFantasyName] = useState('');

  // NFCe data
  const [series, setSeries] = useState('');
  const [number, setNumber] = useState('');
  const [productCode, setProductCode] = useState('');
  const [totalValue, setTotalValue] = useState('');
  const [issueDate, setIssueDate] = useState('');

  // Certificate data
  const [certificate, setCertificate] = useState('');

  // Environment type
  const [environment, setEnvironment] = useState('production');

  const handleGenerateNFCe = async () => {
    try {
      const response = await axios.post('/api/nfc-e', {
        contribuinte: {
          cnpj,
          ie,
          im,
          cnae,
          name,
          fantasyName,
        },
        nfce: {
          series,
          number,
          productCode,
          totalValue,
          issueDate,
        },
        certificate,
        environment,
      });

      const { data, fileName } = response.data;

      // Save the NFCe as a PDF file
      const url = window.URL.createObjectURL(new Blob([data], { type: 'application/pdf' }));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${fileName}.pdf`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="nfc-e-issuance-screen">
      <h1>NF-e Emissão</h1>

      <div className="contribuinte-data">
        <h2>Dados do Contribuinte</h2>
        <label>
          CNPJ:
          <input type="text" value={cnpj} onChange={(e) => setCnpj(e.target.value)} />
        </label>
        <label>
          IE:
          <input type="text" value={ie} onChange={(e) => setIe(e.target.value)} />
        </label>
        <label>
          IM:
          <input type="text" value={im} onChange={(e) => setIm(e.target.value)} />
        </label>
        <label>
          CNAE:
          <input type="text" value={cnae} onChange={(e) => setCnae(e.target.value)} />
        </label>
        <label>
          Nome:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Nome Fantasia:
          <input
            type="text"
            value={fantasyName}
            onChange={(e) => setFantasyName(e.target.value)}
          />
        </label>
      </div>

      <div className="nfc-e-data">
        <h2>Dados da NFC-e</h2>
        <label>
          Série:
          <input type="text" value={series} onChange={(e) => setSeries(e.target.value)} />
        </label>
        <label>
          Número:
          <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} />
        </label>
        <label>
          Código do Produto:
          <input
            type="text"
            value={productCode}
            onChange={(e) => setProductCode(e.target.value)}
          />
        </label>
        <label>
          Valor Total:
          <input
            type="text"
            value={totalValue}
            onChange={(e) => setTotalValue(e.target.value)}
          />
        </label>
        <label>
          Data de Emissão:
          <input
            type="date"
            value={issueDate}
            onChange={(e) => setIssueDate(e.target.value)}
          />
        </label>
      </div>

      <div className="certificate-data">
        <h2>Certificado Digital</h2>
        <label>
          Selecione o Certificado:
          <select value={certificate} onChange={(e) => setCertificate(e.target.value)}>
            {/* Add options for certificate selection */}
          </select>
        </label>
      </div>

      <div className="environment-data">
        <h2>Tipo de Ambiente</h2>
        <label>
          Selecione o Ambiente:
          <select value={environment} onChange={(e) => setEnvironment(e.target.value)}>
            <option value="production">Produção</option>
            <option value="homologation">Homologação</option>
          </select>
        </label>
      </div>

      <button onClick={handleGenerateNFCe}>Gerar NFC-e</button>
    </div>
  );
};

export default NFCeIssuanceScreen;

// This code includes the following modules:

// Módulo de Dados do Contribuinte
// Módulo de Dados da NFCe
// Módulo de Certificado Digital
// Módulo de Tipo de Ambiente
// Módulo de Gerar NFCe