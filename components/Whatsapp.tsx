import useGetQuery from '@/state/query/useGetQuery';
import { BsWhatsapp } from 'react-icons/bs';

const Whatsapp = () => {
  const sett = useGetQuery('settings', '/settings');

  const whatsapp = sett[0]?.whatsapp || '';


  const whatsapp_num = whatsapp.slice(-9)

  return (
    <a href={`https://wa.me/233${whatsapp_num}`} className="whatsapp">
      <BsWhatsapp />
    </a>
  );
};

export default Whatsapp;
