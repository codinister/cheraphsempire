'use client';

import useGetQuery from '@/state/query/useGetQuery';
import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaRegClock } from 'react-icons/fa';
import { LuInstagram } from 'react-icons/lu';
import { BsTwitterX } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import useActivenav from './useActivenav';

const Nav = () => {
  const [show, setShow] = useState('hide');

  const showBox = () => setShow('show');
  const hideBox = () => setShow('hide');


  const data = useGetQuery('settings', '/settings');

  useEffect(() => {
    window.addEventListener('scroll', navscroll);

    return () => window.removeEventListener('scrol', navscroll);
  }, []);

  const navscroll = () => {
    const scrolly = Math.floor(window.scrollY);

    if (scrolly > 100) {
      document.querySelector('.navbar')?.classList.add('fixed');
    } else {
      document.querySelector('.navbar')?.classList.remove('fixed');
    }
  };




  return (
    <nav>
      <div className="top-bar">
        <div>
          <ul>
            <li>
              <HiOutlineLocationMarker />
              {data[0]?.location}
            </li>
            <li>
              <FaPhoneAlt />
              {data[0]?.phone3}
            </li>
            <li>
              <FaRegClock />
              {data[0]?.working_hours}
            </li>
          </ul>
        </div>
        <div>
          <a href={data[0]?.facebook} title="Facebook">
            <FaFacebookF />
          </a>
          <a href={data[0]?.twitter} title="Twitter">
            <BsTwitterX />
          </a>
          <a href={data[0]?.instagram} title="Instagram">
            <LuInstagram />
          </a>
        </div>
      </div>

      <div className={show === 'show' ? 'navbar show' : 'navbar'}
      
      >
        <div
          style={{
            backgroundImage: `url(${data[0]?.logo})`,
            backgroundSize: 'cover',
            backgroundPosition: 'bottom',
          }}
        ></div>

        <div>
          <ul>
            <li>
              <Link href="/" onClick={hideBox} className={useActivenav('/')}>
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/aboutus"
                onClick={hideBox}
                className={useActivenav('/aboutus')}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                onClick={hideBox}
                className={useActivenav('/services')}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                onClick={hideBox}
                className={useActivenav('/projects')}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/contactus"
                onClick={hideBox}
                className={useActivenav('/contactus')}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={`navbar-overlay ${show}`} onClick={hideBox}></div>

      <Image
        src="/hamburger.jpg"
        alt="icon"
        width="20"
        height="20"
        className="hamburger"
        onClick={showBox}
      />

      <h6 className="comp-name">{data[0]?.title}</h6>
    </nav>
  );
};

export default Nav;
