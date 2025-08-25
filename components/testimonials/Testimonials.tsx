'use client';

import useGetQuery from '@/state/query/useGetQuery';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const data = useGetQuery('testimonials', '/testimonials');

  const image = data[0]?.image || '';
  const content = data[0]?.content || '';
  const title = data[0]?.title || '';
  const mainimage = data[0]?.mainimage || '';

  return (
    <div
      className="testimonials"
      style={{
        backgroundImage: `url(${mainimage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        backgroundAttachment: 'fixed'
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
          <div
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'bottom',
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
