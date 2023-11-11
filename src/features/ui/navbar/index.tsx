import Link from 'next/link';
import Button from '../components/ฺButton';
import Image from 'next/image';

const Navbar = () => {
  return (
    <ul className="flex items-center gap-8">
      <li className="me-auto">
        <Link href="/">
          <Image
            src="/assets/logo/logo.png"
            alt="Co working space - logo"
            width={64}
            height={40}
          />
        </Link>
      </li>
      <li>
        <Link href="/workspaces">
          <Button color="transparent">Workspaces</Button>
        </Link>
      </li>
      <li>
        <Link href="/features">
          <Button color="transparent">Features</Button>
        </Link>
      </li>
      <li>
        <Link href="/contact">
          <Button color="transparent">Contact</Button>
        </Link>
      </li>
      <li>
        <Link href="/login">
          <Button size="sm">Login</Button>
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
