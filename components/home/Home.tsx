'use client';

import useGetQuery from '@/state/query/useGetQuery';
import Link from 'next/link';

type HomeType = {
  title: string;
  image: string;
  content: string;
}[];
const Home = () => {
  const home = useGetQuery('home', '/home');

  const cards: HomeType = home[0]?.cards || [];

  return (
    <>
      <div
        className="home"
        style={{
          backgroundImage: `url(${home[0]?.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          backgroundAttachment: 'fixed'
        }}
      >
        <div>
          <h4>{home[0]?.title}</h4>
          <div>{home[0]?.content}</div>
          <div>
            <Link href="">Our Services</Link>
            <Link href="">Contact Us</Link>
          </div>
        </div>
      </div>

      <div className="home-cards">
        {Object.values(cards).map((v, k) => {
          return (
            <div className="card" key={k}>
              <div
                style={{
                  backgroundImage: `url(${v.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
              <div>
                <h6>{v.title}</h6>
                <div>{v.content}</div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
