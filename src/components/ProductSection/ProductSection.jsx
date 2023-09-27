import { useContext } from 'react'

import { CandlesContext } from '../../context/ProductsContextProvider';

const ProductSection = () => {
  const {candles} = useContext(CandlesContext)

  return (
    <div>
        {candles.map((candle)=> <p>{candle.name}</p>)}
    </div>
  
  )
}

export default ProductSection