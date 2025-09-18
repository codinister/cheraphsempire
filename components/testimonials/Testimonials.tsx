'use client';

import useGetQuery from '@/state/query/useGetQuery';
import { FaQuoteLeft } from 'react-icons/fa';
import Youtubebox from '../Youtubebox';

const Testimonials = () => {
  const data = useGetQuery('testimonials', '/testimonials');
  const content = data[0]?.content || '';
  const title = data[0]?.title || '';
  const mainimage = data[0]?.mainimage || '';

  //SETTINGS  DATA
  const settings = useGetQuery('settings', '/settings');
  const sett = settings[0] || [];

  return (
    <div
      className="testimonials"
      style={{
        backgroundImage: `url(${mainimage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="container">
        <div>
          <h5>{title}</h5>
          <div>
            <p>
              <FaQuoteLeft />
            </p>
            <p>{content}</p>
          </div>
        </div>
        <div>
          <Youtubebox url={sett?.youtube} />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
