import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import { Fragment } from 'react';

export const HeaderMenu: React.FC = () => {
  return (
    <Menu as="div" className="relative">
      <Menu.Button className="text-main">
        <MenuButtonIcon />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute bg-white top-full divide-y divide-gray-100 right-full origin-top-right flex justify-start items-stretch flex-col gap-2 shadow shadow-main rounded-md p-2">
          {links.map((l) => (
            <Link href={l.path} key={l.title} passHref>
              <Menu.Item
                as="a"
                className="bg-transparent hover:bg-main py-2 px-4 rounded-md duration-150 hover:bg-opacity-25 text-text hover:text-main font-semibold"
              >
                {l.title}
              </Menu.Item>
            </Link>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

const MenuButtonIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
  </svg>
);

const links = [
  { title: 'Inicio', path: '/' },
  { title: 'Serviços', path: '#servicos' },
  { title: 'Sobre', path: '#sobre' },
  { title: 'Contato', path: '#contato' },
];
