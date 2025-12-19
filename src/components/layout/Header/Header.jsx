import { useState, useEffect, useRef } from 'react';
import logoSvg from '../../../img/logo.svg';
import { TripIcon, FavoriteIcon, JournalIcon, SupportIcon, CurrencyIcon } from '../../../components/ui/icons';

function Header() {
  const [isCurrencyDropdownOpen, setIsCurrencyDropdownOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState('RUB');
  const currencyDropdownRef = useRef(null);

  const currencies = ['RUB', 'USD', 'EUR', 'GBP'];

  // Закрытие выпадающего меню при клике вне его области
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (currencyDropdownRef.current && !currencyDropdownRef.current.contains(event.target)) {
        setIsCurrencyDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white">
      <div className="max-w-[1390px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <img src={logoSvg} alt="Logo" className="w-auto" />
          </div>

          <nav className="hidden lg:flex space-x-7">
            <a href="#" className="group text-gray-600 hover:text-gray-900 text-sm transition-colors flex items-center">
              <TripIcon size={20} className="mr-2 text-[#ADB7C0] group-hover:text-gray-900 transition-colors" />
              Мои поездки
            </a>
            <a href="#" className="group text-gray-600 hover:text-gray-900 text-sm transition-colors flex items-center">
              <FavoriteIcon size={20} className="mr-2 text-[#ADB7C0] group-hover:text-gray-900 transition-colors" />
              Избранное
            </a>
            <a href="#" className="group text-gray-600 hover:text-gray-900 text-sm transition-colors flex items-center">
              <JournalIcon size={20} className="mr-2 text-[#ADB7C0] group-hover:text-gray-900 transition-colors" />
              Журнал
            </a>
            <a href="#" className="group text-gray-600 hover:text-gray-900 text-sm transition-colors flex items-center">
              <SupportIcon size={20} className="mr-2 text-[#ADB7C0] group-hover:text-gray-900 transition-colors" />
              Поддержка
            </a>
            <div className="relative flex items-center">
              <button
                onClick={() => setIsCurrencyDropdownOpen(!isCurrencyDropdownOpen)}
                className="w-[60px] group text-gray-600 hover:text-gray-900 text-sm transition-colors flex items-center"
              >
                <CurrencyIcon size={20} className="mr-2 text-[#ADB7C0] group-hover:text-gray-900 transition-colors" />
                {selectedCurrency}
              </button>
              <div ref={currencyDropdownRef} className={`absolute top-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-10 w-20 transition-all duration-300 ${isCurrencyDropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                {currencies.map((currency, index) => (
                  <button
                    key={currency}
                    onClick={() => {
                      setSelectedCurrency(currency);
                      setIsCurrencyDropdownOpen(false);
                    }}
                    className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 first:rounded-t-md last:rounded-b-md"
                  >
                    {currency}
                  </button>
                ))}
              </div>
            </div>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors flex items-center">
              Где мой билет?
            </a>
          </nav>

          
          <div className="flex items-center">
            <a href="tel:88002560720" className="text-[#27314A] hover:text-gray-900 transition-colors">8 800 2560-720</a>
            <button
              className="ml-8 bg-[rgba(243,247,250,1)] h-[52px] rounded-[22px] flex items-center justify-center px-[16px] py-[12px] hover:bg-gray-100 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <span className="text-gray-600">Профиль</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
