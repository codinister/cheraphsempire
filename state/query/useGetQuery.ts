'use client'

import { useQuery } from 'react-query';
import fetch from './fetch';


const useGetQuery = ( key: string, url: string) => {
  const fn = () => fetch({ url });

  const res = useQuery(key, fn) 

    return res?.data?.data || []

};

export default useGetQuery;
