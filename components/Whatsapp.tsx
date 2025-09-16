import useGetQuery from '@/state/query/useGetQuery';
import { BsWhatsapp } from 'react-icons/bs';

const Whatsapp = () => {
  const sett = useGetQuery('settings', '/settings');

  const whatsapp = sett[0]?.whatsapp || '';

  return (
    <a href={`https://wa.me/${whatsapp}`} className="whatsapp">
      <BsWhatsapp />
    </a>
  );
};

export default Whatsapp;
