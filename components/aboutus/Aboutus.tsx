'use client';

import useGetQuery from '@/state/query/useGetQuery';

const Aboutus = () => {
  const data = useGetQuery('aboutus', '/aboutus');

  const cards: {
    content: string;
    icon: string;
    title: string;
  }[] = data[0]?.cards || [];

  const content: string = data[0]?.content || [];
  const image: string = data[0]?.image || [];

  const skills: {
    title: string;
  }[] = data[0]?.skills || [];

  return (
    <div className="about-us">
        <div>
          <h5>{data[0]?.title}</h5>

          <p>{content}</p>

          <div>
            {Object.values(cards).map((v, k) => (
              <div key={k}>
                <h6>{v.title}</h6>
                <p>{v.content}</p>
              </div>
            ))}
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <h5>Our Skills</h5>

          {Object.values(skills).map((v, k) => (
            <div key={k}>
              <h6>{v.title}</h6>
              <div>
                <div className={`cls${k}`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
  
  );
};

export default Aboutus;
