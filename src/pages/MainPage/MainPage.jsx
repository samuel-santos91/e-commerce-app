import { useEffect } from 'react';

import { getAllCandles } from '../../services/candle-service';

const MainPage = () => {
  useEffect(() => {
    getAllCandles();
  }, []);

  return (
    <div>MainPage</div>
  )
}

export default MainPage