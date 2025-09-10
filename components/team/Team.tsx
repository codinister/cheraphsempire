'use client';

import useGetQuery from '@/state/query/useGetQuery';

const Team = () => {
  const data: {
    title: string;
    image: string;
    subtitle: string;
  }[] = useGetQuery('team', '/team');

  return (
    <div className="team">
    <h5>Our Team</h5>
      <div className="container">
        {Object.values(data).map((v, k) => (
          <div key={k}>
            <div
              style={{
                backgroundImage: `url(${v.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'top',
              }}
            ></div>
            <h6>{v.title}</h6>
            <p>{v.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
