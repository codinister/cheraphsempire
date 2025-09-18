'use client';

type ImageboxType = {
  modalFn: (show: string) => void;
  setModalimg: (image: string) => void;
  image: string;
};
const Imagebox = ({ modalFn, setModalimg, image }: ImageboxType) => {
  return (
    <div
      onClick={() => {
        modalFn('show');
        setModalimg(image);
      }}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
      }}
    ></div>
  );
};

export default Imagebox;
