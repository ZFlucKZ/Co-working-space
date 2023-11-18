import Link from 'next/link';
import Button from '../components/ฺButton';
import Image from 'next/image';

import { FaInstagramSquare, FaTwitter, FaFacebookSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <ul className="mb-10 flex items-center gap-6">
        <li className="me-auto">
          <Link href="/">
            <Image
              src="/assets/logo/logo-white.png"
              alt="Co working space - logo"
              width={93}
              height={56}
            />
          </Link>
        </li>
        <li>
          <Link href="/workspaces">
            <Button color="transparent" className="text-white-10">
              Workspaces
            </Button>
          </Link>
        </li>
        <li>
          <Link href="/features">
            <Button color="transparent" className="text-white-10">
              Features
            </Button>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <Button color="transparent" className="text-white-10">
              Contact
            </Button>
          </Link>
        </li>
        <li>
          <Link href="/login">
            <Button color="transparent" className="text-white-10">
              Login
            </Button>
          </Link>
        </li>
        <li className="me-auto">
          <Link href="/register">
            <Button color="transparent" className="text-white-10">
              Sign up
            </Button>
          </Link>
        </li>
        <li>
          <Link href="#">
            <FaFacebookSquare className="text-[28px] text-white-10" />
          </Link>
        </li>
        <li>
          <Link href="#">
            <FaInstagramSquare className="text-[28px] text-white-10" />
          </Link>
        </li>
        <li>
          <Link href="#">
            <FaTwitter className="text-[28px] text-white-10" />
          </Link>
        </li>
      </ul>
      <div className="border-t-[1px] border-t-grey-40">
        <p className="body-2 pt-2 text-grey-50">
          Copyright ⓒ 2023 Co Space Co., Ltd. All right reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
