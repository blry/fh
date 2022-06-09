import { useState } from 'react';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion'

import { ModalContactUs } from '../templates/ModalContactUs';
import {NavbarItemLine} from '../utils/motion/NavbarItemLine';

const primaryItems = [
  {
    title: 'Product Development',
    link: '/product-development',
  },
  {
    title: 'Team Extension',
    link: '/team-extension',
  },
  {
    title: 'Fundraising',
    link: '/fundraising',
  },
  {
    title: 'Sales Solutions',
    link: '/sales-solution',
  },
];

const firstMenuItems = [
  {
    key: 10,
    title: 'About us',
    link: '/about'
  },
  {
    key: 11,
    title: 'Team',
    link: '/team'
  },
  {
    key: 12,
    title: 'Imprint',
    link: '/imprint'
  },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1)
  const [buttonHover, setButtonHover] = useState(false)

  const ModalHandler = (e: any) => {
    e.preventDefault();
    setModal(!modal);
    setIsOpen(false);
  };

  const closeModalCallback = () => {
    setModal(false);
  };

  const styles = {
    button: {
      transition: '0.2s',
      backgroundColor: buttonHover ? '#ffffff' : '#2C4DCA',
      color: buttonHover ? '#2C4DCA' : '#ffffff',
      border: '3px solid #2C4DCA'
    }
  }

  return (
    <>
      <div className="fixed z-50 top-0 w-full bg-white lg:shadow flex flex-col items-center">
        <nav className="container flex justify-around z-20 mt-2">
          <div></div>
          <div className="hidden lg:flex text-[13px] text-gray">
            {
              firstMenuItems.map(item => (
                <Link href={item.link}>
                  <motion.a 
                    className="mx-7 py-1 relative flex flex-col items-center cursor-pointer"
                    onMouseEnter={() => setActiveIndex(item.key)}
                    onMouseLeave={() => setActiveIndex(-1)}
                    initial={{color: '#1F1F1F'}}
                    animate={{color: activeIndex === item.key ? '#2C4DCA' : ''}}
                  >
                    <AnimatePresence>
                      {activeIndex === item.key && <NavbarItemLine top />}
                    </AnimatePresence>
                    {item.title}
                  </motion.a>
                </Link>
              ))
            }
          </div>
        </nav>
        <nav className="w-[97%] mx-5 max-w-[1245px] flex justify-between items-center z-20">
          <div className="my-3">
            <Link href="/">
              <a onClick={() => setIsOpen(false)}>
                <div className="flex items-center text-black navbar-logo-text" style={{width: '235px'}}>
                  <img
                    src="/assets/images/logo_white.svg"
                    className="navbar-logo-img"
                    alt="logo"
                  />
                  Scaling Solutions
                </div>
              </a>
            </Link>
          </div>

          <div className="hidden lg:flex text-[15px] font-medium text-black">
            {primaryItems.map((navItem, key) => (
              <Link href={navItem.link} key={key}>
                <motion.a 
                  className="mx-4 py-2 relative flex flex-col items-center cursor-pointer" 
                  onMouseEnter={() => setActiveIndex(key)}
                  onMouseLeave={() => setActiveIndex(-1)}
                  initial={{color: '#1F1F1F'}}
                  animate={{color: activeIndex === key ? '#2C4DCA' : ''}}
                >
                  {navItem.title}
                  <AnimatePresence>
                    {activeIndex === key && <NavbarItemLine bottom />}
                  </AnimatePresence>
                </motion.a>
              </Link>
            ))}
          </div>

          <button
            className="hidden lg:block bg-blue-700 px-2 py-1 text-neutral-white text-[15px] font-semibold"
            style={styles.button}
            onClick={ModalHandler}
            onMouseEnter={() => setButtonHover(true)}
            onMouseLeave={() => setButtonHover(false)}
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
            <Link key={navItem.title} href={navItem.link}>
              <a className="py-2" onClick={() => setIsOpen(false)}>
                {navItem.title}
              </a>
            </Link>
          ))}

          <Link href="/about">
            <a className="py-2" onClick={() => setIsOpen(false)}>
              About us
            </a>
          </Link>
          <Link href="/team">
            <a className="py-2" onClick={() => setIsOpen(false)}>
              Team
            </a>
          </Link>
          <Link href="/imprint">
            <a className="py-2" onClick={() => setIsOpen(false)}>
              Imprint
            </a>
          </Link>

          <button
            className="lg:block bg-blue-700 px-4 py-2 text-neutral-white text-sm font-bold hover:button-brightness focus:outline-none focus:ring"
            onClick={ModalHandler}
          >
            Contact Us
          </button>
        </div>
      </div>
    </>
  );
}
