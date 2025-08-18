import { useQuery } from 'react-query';
import fetch from './fetch';

type useGetQueryType = {
  key: string;
  url: string;
};

const useGetQuery = ({ key, url }: useGetQueryType) => {
  const fn = () => fetch({ url });

  const res = useQuery(key, fn);
  if (res) {
    return res?.data?.data;
  } else {
    return [];
  }
};

export default useGetQuery;
