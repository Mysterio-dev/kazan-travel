import React, { useState } from 'react';
import {
  CruiseIcon, ToursIcon, RailIcon, HotelsIcon,
  AviationIcon, ProfileIcon, SettingsIcon, ExitIcon
} from '../../ui/icons';

const NavigationMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Все пункты — для выпадашки
  const menuItems = [
    { label: 'Круизы', icon: <CruiseIcon className="mr-2" /> },
    { label: 'Туры', icon: <ToursIcon className="mr-2" /> },
    { label: 'Авиа', icon: <AviationIcon className="mr-2" /> },
    { label: 'Отели', icon: <HotelsIcon className="mr-2" /> },
    { label: 'Ж/д', icon: <RailIcon className="mr-2" /> },
    { label: 'История', icon: <ProfileIcon className="mr-2" /> },
    { label: 'Настройки', icon: <SettingsIcon className="mr-2" /> },
    { label: 'Выйти', icon: <ExitIcon className="mr-2" /> },
  ];

  return (
    <>
      {/* Десктоп (xl+) — ТВОЙ ОРИГИНАЛ, без изменений */}
      <nav className="hidden xl:block bg-[#f3f7fa] rounded-full p-4 mb-8">
        <ul className="flex flex-row justify-evenly">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className={`flex items-center px-4 py-2 rounded-full transition-colors text-[18px] font-medium ${
                  item.label === 'Выйти'
                    ? 'text-[#BAB9CA] hover:text-red-500'
                    : 'text-[#27314A] hover:text-[#01d5ff]'
                }`}
              >
                {item.icon}
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Средние экраны (lg: 1024–1279px) — уменьшаем шрифт до 16px */}
      <nav className="hidden lg:block xl:hidden bg-[#f3f7fa] rounded-full p-4 mb-8">
        <ul className="flex flex-row justify-evenly">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className={`flex items-center px-4 py-2 rounded-full transition-colors text-[16px] font-medium ${
                  item.label === 'Выйти'
                    ? 'text-[#BAB9CA] hover:text-red-500'
                    : 'text-[#27314A] hover:text-[#01d5ff]'
                }`}
              >
                {item.icon}
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Мобильные и планшеты (до 1023px) — выпадающее меню */}
      <nav className="block lg:hidden bg-[#f3f7fa] rounded-xl p-3 mb-6 relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex justify-between items-center px-4 py-2.5 bg-white rounded-lg shadow-sm text-[#27314A] font-medium"
        >
          Меню
          <svg
            className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Выпадающее меню с анимацией */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'mt-2 max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="bg-white rounded-lg shadow-lg border border-gray-100 divide-y divide-gray-100">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className={`flex items-center px-4 py-3 text-[15px] font-medium transition-colors ${
                    item.label === 'Выйти'
                      ? 'text-[#BAB9CA] hover:text-red-500'
                      : 'text-[#27314A] hover:bg-gray-50'
                  }`}
                >
                  {item.icon}
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavigationMenu;