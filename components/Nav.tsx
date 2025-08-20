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

const Nav = () => {
  const data = useGetQuery('settings', '/settings');

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
              {data[0]?.phone4}
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
      <div className="navbar">
        <div
          style={{
            backgroundImage: `url(${data[0]?.logo})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>

        <div>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/aboutus">About Us</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/team">Team</Link>
            </li>
            <li>
              <Link href="/process">Process</Link>
            </li>
            <li>
              <Link href="/contactus">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-overlay"></div>

      <Image
        src="/hamburger.jpg"
        alt="icon"
        width="3"
        height="3"
        className="hamburger"
      />
    </nav>
  );
};

export default Nav;
