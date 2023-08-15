import { useState } from 'react';

export const useCountrySelected = () => {
  const [country, setCountry] = useState('');
  console.log('AAAA', country)
  return { country, setCountry };
};


