import React, { useEffect, useState } from 'react';
import Header from './components/Layout/Header/Header';
import PriceList from './components/PriceList/PriceList';
import ControlPanel from './components/ControlPanel/ControlPanel';
import Chart from './components/Chart/Chart';
import { fetchCryptocurrencyData } from './utils/api';
import MainContentWrapper from './AppStyles';

const App = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCryptocurrencyData();
        setData(data);
        setFilteredData(data);
      } catch (error) {
        console.error('Error fetching cryptocurrency data:', error);
      }
    };

    fetchData();
  }, []);

  const handleFilterChange = (filter) => {
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );

    setFilteredData(filtered);
  };

  console.log(filteredData)

  return (
    <div>
      <Header />
      <MainContentWrapper>
        <ControlPanel handleFilterChange={handleFilterChange} />
        <Chart data={filteredData} />
      </MainContentWrapper>
      <PriceList data={filteredData} />
    </div>
  );
};

export default App;
