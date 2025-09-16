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
        <h5>{title}</h5>
        <div>
          <div>
            <div
              onClick={() => {
                modalFn('show');
                setModalimg(gallery[0]?.image);
              }}
              style={{
                backgroundImage: `url(${gallery[0]?.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'top',
              }}
            ></div>
            <div>
              <div
                onClick={() => {
                  modalFn('show');
                  setModalimg(gallery[1]?.image);
                }}
                style={{
                  backgroundImage: `url(${gallery[1]?.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'top',
                }}
              ></div>
              <div
                onClick={() => {
                  modalFn('show');
                  setModalimg(gallery[2]?.image);
                }}
                style={{
                  backgroundImage: `url(${gallery[2]?.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'top',
                }}
              ></div>
            </div>
          </div>
          <div>
            <div>
              <div
                onClick={() => {
                  modalFn('show');
                  setModalimg(gallery[3]?.image);
                }}
                style={{
                  backgroundImage: `url(${gallery[3]?.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'top',
                }}
              ></div>
              <div
                onClick={() => {
                  modalFn('show');
                  setModalimg(gallery[4]?.image);
                }}
                style={{
                  backgroundImage: `url(${gallery[4]?.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'top',
                }}
              ></div>
            </div>
            <div
              onClick={() => {
                modalFn('show');
                setModalimg(gallery[5]?.image);
              }}
              style={{
                backgroundImage: `url(${gallery[5]?.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'top',
              }}
            ></div>
          </div>
        </div>
      </div>

      <Modal image={modalimg} actionFn={modalFn} value={modalvalue} />
    </>
  );
};

export default Projects;
