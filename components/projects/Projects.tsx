'use client';

import useGetQuery from '@/state/query/useGetQuery';
import Modal from '../Modal';
import { useState } from 'react';

const Projects = () => {
  const data = useGetQuery('projects', '/projects');

  const [modalvalue, setModalvalue] = useState('hide');
  const [modalimg, setModalimg] = useState('');
  const modalFn = (value: string) => {
    setModalvalue(value);
  };

  const title: string = data[0]?.title || '';
  const gallery: {
    image: string;
  }[] = data[0]?.gallery || [];

  return (
    <>
      <div className="projects">
        <div className="container">
          <h5>{title}</h5>

          <div>
            {Object.values(gallery).map((v, k) => (
              <div
                onClick={() => {
                  modalFn('show');
                  setModalimg(v.image);
                }}
                key={k}
                style={{
                  backgroundImage: `url(${v.image})`,
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <Modal image={modalimg} actionFn={modalFn} value={modalvalue} />
    </>
  );
};

export default Projects;
