import useGetQuery from '@/state/query/useGetQuery';
import { useState } from 'react';
import Modal from './Modal';

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
              <div
                onClick={() => {
                  modalFn('show');
                  setModalimg(images[0]?.image);
                }}
                style={{
                  backgroundImage: `url(${images[0]?.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: "center",
                }}
              ></div>
              <div
                onClick={() => {
                  modalFn('show');
                  setModalimg(images[1]?.image);
                }}
                style={{
                  backgroundImage: `url(${images[1]?.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: "center",
                }}
              ></div>
            </div>

            <div>{text}</div>
          </div>

          <div>
            <div
              onClick={() => {
                modalFn('show');
                setModalimg(images[2]?.image);
              }}
              style={{
                backgroundImage: `url(${images[2]?.image})`,
                backgroundSize: 'cover',
                backgroundPosition: "center",
              }}
            ></div>
            <div>
              <div
                onClick={() => {
                  modalFn('show');
                  setModalimg(images[3]?.image);
                }}
                style={{
                  backgroundImage: `url(${images[3]?.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: "center",
                }}
              ></div>
              <div
                onClick={() => {
                  modalFn('show');
                  setModalimg(images[4]?.image);
                }}
                style={{
                  backgroundImage: `url(${images[4]?.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <Modal image={modalimg} actionFn={modalFn} value={modalvalue} />
    </>
  );
};

export default Mining;
