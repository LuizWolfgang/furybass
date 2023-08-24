import { useState } from 'react';

export const useCountrySelected = () => {
  const [country, setCountry] = useState('');
  return { country, setCountry };
};


