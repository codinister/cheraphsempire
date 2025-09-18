'use client';

import useGetQuery from '@/state/query/useGetQuery';
import Modal from '../Modal';
import { useState } from 'react';
import Imagebox from './Imagebox';

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
        <div className="container">



          <div>
            <div>
              <Imagebox
                modalFn={modalFn}
                setModalimg={setModalimg}
                image={gallery[0]?.image}
              />
              <div>
                <Imagebox
                  modalFn={modalFn}
                  setModalimg={setModalimg}
                  image={gallery[1]?.image}
                />
                <Imagebox
                  modalFn={modalFn}
                  setModalimg={setModalimg}
                  image={gallery[2]?.image}
                />
                <Imagebox
                  modalFn={modalFn}
                  setModalimg={setModalimg}
                  image={gallery[3]?.image}
                />
              </div>
            </div>
            <div>
              <Imagebox
                modalFn={modalFn}
                setModalimg={setModalimg}
                image={gallery[4]?.image}
              />
              <Imagebox
                modalFn={modalFn}
                setModalimg={setModalimg}
                image={gallery[5]?.image}
              />
            </div>
          </div>






          <div>
            <div>
              <Imagebox
                modalFn={modalFn}
                setModalimg={setModalimg}
                image={gallery[6]?.image}
              />
              <Imagebox
                modalFn={modalFn}
                setModalimg={setModalimg}
                image={gallery[7]?.image}
              />
            </div>
            <Imagebox
              modalFn={modalFn}
              setModalimg={setModalimg}
              image={gallery[8]?.image}
            />
            <div>
              <Imagebox
                modalFn={modalFn}
                setModalimg={setModalimg}
                image={gallery[9]?.image}
              />
              <Imagebox
                modalFn={modalFn}
                setModalimg={setModalimg}
                image={gallery[10]?.image}
              />
            </div>
          </div>
        </div>

        <div className="container">
          <Imagebox
            modalFn={modalFn}
            setModalimg={setModalimg}
            image={gallery[11]?.image}
          />
          <Imagebox
            modalFn={modalFn}
            setModalimg={setModalimg}
            image={gallery[12]?.image}
          />
          <Imagebox
            modalFn={modalFn}
            setModalimg={setModalimg}
            image={gallery[13]?.image}
          />
          <Imagebox
            modalFn={modalFn}
            setModalimg={setModalimg}
            image={gallery[14]?.image}
          />
          <Imagebox
            modalFn={modalFn}
            setModalimg={setModalimg}
            image={gallery[15]?.image}
          />
        </div>
      </div>

      <Modal image={modalimg} actionFn={modalFn} value={modalvalue} />
    </>
  );
};

export default Projects;
