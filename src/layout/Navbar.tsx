import { useState } from 'react';

import Link from 'next/link';

import { ModalContactUs } from '../templates/ModalContactUs';

const primaryItems = [
  'Product Development',
  'Team Extension',
  'Fundraising',
  'Sales Solutions',
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false);

  const ModalHandler = (e: any) => {
    e.preventDefault();
    setModal(!modal);
  };

  const closeModalCallback = () => {
    setModal(false);
  };

  return (
    <>
      <div className="fixed z-50 top-0 w-full bg-white">
        <nav className="container flex justify-around z-20 mt-3">
          <div></div>
          <div className="hidden lg:block text-xs text-gray">
            <Link href="/about">
              <a className="mx-7 py-1 hover:text-black">About us</a>
            </Link>
            <Link href="/team">
              <a className="mx-7 py-1 hover:text-black">Team</a>
            </Link>
            <Link href="/imprint">
              <a className="mx-7 py-1 hover:text-black">Imprint</a>
            </Link>
          </div>
        </nav>
        <nav className="container flex justify-between items-center z-20">
          <div className="my-3">
            <Link href="/">
              <a>
                <img
                  src="/assets/images/logo.png"
                  style={{ height: '35px' }}
                  alt="Finhub Software Solutions logo"
                />
              </a>
            </Link>
          </div>

          <div className="hidden lg:block text-sm font-bold text-black">
            {primaryItems.map((navItem) => (
              <Link href="/" key={`${navItem}`}>
                <a className="mx-4 py-2 hover:gradient-border-bottom">
                  {navItem}
                </a>
              </Link>
            ))}
          </div>

          <button
            className="hidden lg:block bg-blue-700 px-4 py-2 text-neutral-white text-sm font-bold hover:button-brightness focus:outline-none focus:ring"
            onClick={ModalHandler}
          >
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
          <ModalContactUs
            closeModalCallback={closeModalCallback}
            modal={modal}
          />
        </nav>
      </div>

      {/* Modal */}
      <div
        className={`fixed inset-0 z-30 bg-gray-800 
      bg-opacity-50 ${isOpen ? 'block' : 'hidden'}`}
      >
        <div className="bg-white text-primary-dark-blue flex flex-col text-center mx-5 my-20 py-4 rounded">
          {primaryItems.map((navItem) => (
            <Link key={navItem} href="/">
              <a className="py-2">{navItem}</a>
            </Link>
          ))}

          <Link href="/about">
            <a className="py-2">About us</a>
          </Link>
          <Link href="/team">
            <a className="py-2">Team</a>
          </Link>
          <Link href="/imprint">
            <a className="py-2">Imprint</a>
          </Link>

          <Link href="/contact-us">
            <a className="bg-blue-700 px-4 py-2 text-neutral-white text-sm font-bold hover:button-brightness focus:outline-none focus:ring">
              Contact Us
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
