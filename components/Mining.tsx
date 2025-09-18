import useGetQuery from '@/state/query/useGetQuery';
import { useState } from 'react';
import Modal from './Modal';
import Imagebox from './projects/Imagebox';

const Mining = () => {
  const data = useGetQuery('mining', '/mining');

  const images = data[0]?.images || [];
  const text = data[0]?.content || '';
  const title = data[0]?.title || '';

  const [modalvalue, setModalvalue] = useState('hide');
  const [modalimg, setModalimg] = useState('');
  const modalFn = (value: string) => {
    setModalvalue(value);
  };

  return (
    <>
      <div className="mining">
        <div className="container">
          <div>
            <h5>{title}</h5>

            <div>
              <Imagebox
                modalFn={modalFn}
                setModalimg={setModalimg}
                image={images[0]?.image}
              />
              <Imagebox
                modalFn={modalFn}
                setModalimg={setModalimg}
                image={images[1]?.image}
              />
            </div>

            <div>{text}</div>
          </div>

          <div>
            <Imagebox
              modalFn={modalFn}
              setModalimg={setModalimg}
              image={images[2]?.image}
            />
            <div>
              <Imagebox
                modalFn={modalFn}
                setModalimg={setModalimg}
                image={images[3]?.image}
              />
              <Imagebox
                modalFn={modalFn}
                setModalimg={setModalimg}
                image={images[4]?.image}
              />
            </div>
          </div>
        </div>

        <div className="container">
          <Imagebox
            modalFn={modalFn}
            setModalimg={setModalimg}
            image={images[5]?.image}
          />
          <Imagebox
            modalFn={modalFn}
            setModalimg={setModalimg}
            image={images[6]?.image}
          />
          <Imagebox
            modalFn={modalFn}
            setModalimg={setModalimg}
            image={images[7]?.image}
          />
          <Imagebox
            modalFn={modalFn}
            setModalimg={setModalimg}
            image={images[8]?.image}
          />
          <Imagebox
            modalFn={modalFn}
            setModalimg={setModalimg}
            image={images[9]?.image}
          />
        </div>
      </div>
      <Modal image={modalimg} actionFn={modalFn} value={modalvalue} />
    </>
  );
};

export default Mining;
