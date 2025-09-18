'use client';

import { LuPhone } from 'react-icons/lu';
import Link from 'next/link';
import { IoLocationOutline } from 'react-icons/io5';
import { FaSquareFacebook } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa6';
import { BsTwitterX } from 'react-icons/bs';
import { IoMdBook } from 'react-icons/io';
import useGetQuery from '@/state/query/useGetQuery';
import Whatsapp from './Whatsapp';
import Image from 'next/image';

const Footer = () => {
  //SETTINGS  DATA
  const data = useGetQuery('settings', '/settings');
  const sett = data[0] || [];

  //ABOUT DATA
  const abt = useGetQuery('aboutus', '/aboutus');

  const aboutexcerpt: string = abt[0]?.content || [];

  return (
    <footer>
      <div>
        <div>
          <h6>Still Have Questions?</h6>
          <p>
            Contact us today and get all your questions answered without delay
          </p>
          <Link href="/contactus">
            <span>Contact Us</span>
            <LuPhone />
          </Link>
        </div>
      </div>

      <div>
        <div className="container">
          
          <div>
            <h6>About Us</h6>
            <p>{aboutexcerpt.slice(0, 100)}</p>
            <Link href="/aboutus" className="btn">
              About Us
              <IoMdBook />
            </Link>
          </div>

          <div>
            <h6>Quick Links</h6>
            <ul>
              <li>
                <Link href="/home">Home</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/projects">Projects</Link>
              </li>
              <li>
                <Link href="/contactus">Contact</Link>
              </li>
              <li>
                <Image alt="flag" src={sett?.flag} width={200} height={100} />
              </li>
            </ul>
          </div>

          <div>
            <h6>Contact</h6>
            <ul>
              <li>
                <IoLocationOutline />
                <span>{sett?.location}</span>
              </li>
              <li>
                <LuPhone />
                <span>{sett?.phone1}</span>
              </li>
              <li>
                <LuPhone />
                <span>{sett?.phone2}</span>
              </li>
              <li>
                <LuPhone />
                <span>{sett?.phone3}</span>
              </li>
              <li>
                <LuPhone />
                <span>{sett?.phone4}</span>
              </li>
              <li>
                <LuPhone />
                <span>{sett?.phone5}</span>
              </li>
              <li>
                <a href={sett?.facebook} target="_blank">
                  <FaSquareFacebook />
                </a>
                <a href={sett?.instagram} target="_blank">
                  <FaInstagram />
                </a>
                <a href={sett?.twitter} target="_blank">
                  <BsTwitterX />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div className="container">
          Copyrigt &copy; 2025 {sett?.comp_name} Design by Codenester
        </div>
      </div>

      <Whatsapp />
    </footer>
  );
};

export default Footer;
