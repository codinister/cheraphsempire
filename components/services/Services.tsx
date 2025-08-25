'use client';

import useGetQuery from '@/state/query/useGetQuery';

const Services = () => {
  const data = useGetQuery('services', '/services');

  const title: string = data[0]?.title || '';
  const cards: {
    title: string;
    content: string;
    image: string;
  }[] = data[0]?.cards || [];

  return (
    <div className="services">
      <div className="container">
        <h5>{title}</h5>

        <div>
          {Object.values(cards).map((v, k) => (
            <div key={k}>
              <div
                style={{
                  backgroundImage: `url(${v.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'top',
                }}
              ></div>
              <div>
                <h6>{v.title}</h6>
                <p>{v.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
