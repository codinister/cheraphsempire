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
      <div className="container">
        <p>Our Team</p>
        <h5>Meet our Team</h5>
        <h5>Expert. Passionate. Proactive</h5>
        <p>We lead with care - our core value - and a shared passion for connecting the world.</p>
      </div>

      <div className="container">
        <div>
          {Object.values(data).map((v, k) => (
            <div key={k}>
              <div
                style={{
                  backgroundImage: `url(${v.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'top',
                }}
              ></div>
              <div>
                <strong>{v.title}</strong>
                <p>{v.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
