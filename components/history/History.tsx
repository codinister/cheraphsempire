'use client';

import useGetQuery from '@/state/query/useGetQuery';

const History = () => {
  const data = useGetQuery('history', '/history');



  const cards: {
    content: string;
    title: string;
  }[] = data[0]?.details || [];

  const image: string = data[0]?.image || [];
  const title: string = data[0]?.title || [];

  return (
    <div className="history">
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
        }}
      ></div>
      <div>
        <h5>{title}</h5>
        {Object.values(cards).map((v, k) => (
          <div key={k} className="hist-box">
            <div>
              <div></div>
              <div></div>
            </div>
            <div>
              <h6>{v.title}</h6>
              <p>{v.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
