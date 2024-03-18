'use client';

import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import ButtonLink from '@/features/ui/components/Button';
import Container from '@/features/ui/components/Container';

const navigation = [
  { name: 'Workspaces', href: '/workspaces' },
  { name: 'Features', href: '/features' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header>
      <nav className="w-full shadow-mild ">
        <Container className="flex items-center justify-between py-6">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image
              src="/assets/logo/logo.png"
              alt="Co space working logo"
              width={64}
              height={40}
            />
          </Link>
          <div className="flex md:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black-80"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden md:flex md:gap-x-12">
            {navigation.map((item) => (
              <div key={item.name} className="flex items-center">
                <Link
                  href={item.href}
                  className="from-blue-50 via-pink-50 to-orange-50 text-button-2 text-black-80 hover:bg-gradient-to-r hover:bg-clip-text hover:text-transparent hover:duration-300"
                >
                  {item.name}
                </Link>
              </div>
            ))}
            <ButtonLink href="/sign-in">Login</ButtonLink>
          </div>
        </Container>
      </nav>
      <Dialog
        as="div"
        className="md:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="bg-white fixed inset-y-0 right-0 z-10 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                src="/assets/logo/logo.png"
                alt="Co space working logo"
                width={64}
                height={40}
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-black-80"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-button-2 text-black-80 hover:bg-gray-50 "
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  href="/sign-in"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-black-80 hover:bg-gray-50"
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
