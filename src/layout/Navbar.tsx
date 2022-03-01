import { useState } from 'react';

import Link from 'next/link';

const primaryItems = [
  'Product Development',
  'Team Extension',
  'Fundraising',
  'Sales Solutions',
];

const secondaryItems = ['About us', 'Team', 'Imprint'];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="fixed z-50 top-0 w-full bg-white">
        <nav className="container flex justify-around z-20 mt-3">
          <div></div>
          <div className="hidden lg:block text-xs text-gray">
            {secondaryItems.map((navItem) => (
              <a
                className="mx-7 py-1 hover:text-black"
                href="#"
                key={`${navItem}`}
              >
                {navItem}
              </a>
            ))}
          </div>
        </nav>
        <nav className="container flex justify-between items-center z-20">
          <div className="my-3">
            <Link href="/">
              <a>
                <img
                  src="/assets/images/logo.png"
                  style={{ height: '35px' }}
                  alt="finhubss logo"
                />
              </a>
            </Link>
          </div>

          <div className="hidden lg:block text-sm font-bold text-black">
            {primaryItems.map((navItem) => (
              <a
                className="mx-4 py-2 hover:gradient-border-bottom"
                href="#"
                key={`${navItem}`}
              >
                {navItem}
              </a>
            ))}
          </div>

          <button className="hidden lg:block bg-blue-700 px-4 py-2 text-neutral-white text-sm font-bold hover:button-brightness focus:outline-none focus:ring">
            Contact Us
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden focus:outline-none"
          >
            <img
              className={`${isOpen && 'hidden'}`}
              src="/icons/icon-hamburger.svg"
              alt=""
            />
            <img
              className={isOpen ? 'block' : 'hidden'}
              src="/icons/icon-close.svg"
              alt=""
            />
          </button>
        </nav>
      </div>

      {/* Modal */}
      <div
        className={`fixed inset-0 z-30 bg-gray-800 
      bg-opacity-50 ${isOpen ? 'block' : 'hidden'}`}
      >
        <div className="bg-white text-primary-dark-blue flex flex-col text-center mx-5 my-20 py-4 rounded">
          {primaryItems.map((navItem) => (
            <a key={navItem} className="py-2" href="#">
              {navItem}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
