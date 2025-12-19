import React from 'react';
import { CruiseIcon, ToursIcon, RailIcon, HotelsIcon, AviationIcon, ProfileIcon, SettingsIcon, ExitIcon } from '../../ui/icons';

const NavigationMenu = () => {
  const menuItems = [
    'Круизы',
    'Туры',
    'Авиа',
    'Отели',
    'Ж/д',
    'Моя анкета',
    'Настройки',
    'Выйти'
  ];

  return (
    <nav className="bg-[#f3f7fa] rounded-full p-4 mb-8">
      <ul className="flex flex-col md:flex-row md:justify-evenly">
        {menuItems.map((item, index) => (
          <li key={index}>
            <a
              href="#"
              className={`flex items-center px-4 py-2 rounded-full transition-colors text-[18px] font-medium ${item === 'Выйти' ? 'text-[#BAB9CA] hover:text-red-500' : 'text-[#27314A] hover:text-[#01d5ff]'}`}
            >
              {item === 'Круизы' && (
                <CruiseIcon className="mr-2" />
              )}
              {item === 'Туры' && (
                <ToursIcon className="mr-2" />
              )}
              {item === 'Ж/д' && (
                <RailIcon className="mr-2" />
              )}
              {item === 'Отели' && (
                <HotelsIcon className="mr-2" />
              )}
              {item === 'Авиа' && (
                <AviationIcon className="mr-2" />
              )}
              {item === 'Моя анкета' && (
                <ProfileIcon className="mr-2" />
              )}
              {item === 'Настройки' && (
                <SettingsIcon className="mr-2" />
              )}
              {item === 'Выйти' && (
                <ExitIcon className="mr-2" />
              )}
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationMenu;
