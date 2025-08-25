import useGetQuery from '@/state/query/useGetQuery';
import Map from '../Map';
import Contactform from '../Contactform';
import { IoLocationOutline } from 'react-icons/io5';
import { CiPhone } from 'react-icons/ci';
import { FaRegEnvelope } from 'react-icons/fa';
import { FaRegClock } from 'react-icons/fa';

const Contactus = () => {
  const sett = useGetQuery('settings', '/settings');
  return (
    <div className="contactus">
      <div className="container">
        <div>
          <Map src={sett[0]?.location} width="100%" height="450" />
        </div>

        <div>
          <ul>
            <li>
              <div>
                <IoLocationOutline />
              </div>
              <div>
                <h6>Address</h6>
                <p>{sett[0]?.location}</p>
              </div>
            </li>
            <li>
              <div>
                <CiPhone />
              </div>
              <div>
                <h6>Phone 1</h6>
                <p>{sett[0]?.phone1}</p>
              </div>
            </li>
            <li>
              <div>
                <CiPhone />
              </div>
              <div>
                <h6>Phone 2</h6>
                <p>{sett[0]?.phone2}</p>
              </div>
            </li>
            <li>
              <div>
                <CiPhone />
              </div>
              <div>
                <h6>Phone 3</h6>
                <p>{sett[0]?.phone3}</p>
              </div>
            </li>
            <li>
              <div>
                <FaRegEnvelope />
              </div>
              <div>
                <h6>Email</h6>
                <p>{sett[0]?.email}</p>
              </div>
            </li>
            <li>
              <div>
                <FaRegClock />
              </div>
              <div>
                <h6>Open</h6>
                <p>{sett[0]?.working_hours}</p>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <Contactform />
        </div>
      </div>
    </div>
  );
};

export default Contactus;
