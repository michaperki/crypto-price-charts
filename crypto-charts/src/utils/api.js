const API_BASE_URL = 'https://api.coingecko.com/api/v3';

// Fetches cryptocurrency data from CoinGecko API
export const fetchCryptocurrencyData = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching cryptocurrency data:', error);
    throw error;
  }
};

// Additional API functions can be added as needed