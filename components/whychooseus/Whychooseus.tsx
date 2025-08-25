'use client';

import useGetQuery from '@/state/query/useGetQuery';
import { CiCircleCheck } from 'react-icons/ci';

const Whychooseus = () => {
  const data = useGetQuery('whychooseus', '/whychooseus');

  const image = data[0]?.Image || [];
  const details: {
    title: string;
    content: string;
  }[] = data[0]?.details || [];
  const stats: {
    title: string;
    subtitle: string;
  }[] = data[0]?.stats || [];

  return (
    <div className="whychooseus">
      <div>
        {Object.values(stats).map((v, k) => {
          return (
            <div key={k}>
              <h6>{v.title}</h6>
              <p>{v.subtitle}</p>
            </div>
          );
        })}
      </div>
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          backgroundAttachment: 'fixed',
        }}
      >
        {Object.values(details).map((v, k) => {
          return (
            <div key={k}>
              <div>
                <CiCircleCheck />
              </div>
              <div>
                <h6>{v.title}</h6>
                <p>{v.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Whychooseus;
