import { AirplaneIcon, ВedIcon, TrIcon, ShipIcon } from '../../ui/icons';

function Footer() {
  return (
    <footer className="bg-white text-gray-900 py-12 mt-auto">
      <div className="max-w-[1390px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">

          <div>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-gray-500 transition-colors flex items-center">
                <AirplaneIcon className="mr-3" />
                Купить авиабилеты</a>
              </li>
              <li><a href="#" className="hover:text-gray-500 transition-colors flex items-center">
                <ВedIcon className='mr-3' />
                Забронировать отель</a></li>
              <li><a href="#" className="hover:text-gray-500 transition-colors flex items-center">
                <TrIcon className='mr-3' />
                Купить ЖД билеты</a></li>
              <li><a href="#" className="hover:text-gray-500 transition-colors flex items-center">
                <ShipIcon className='mr-3' />
                Забронировать круиз</a></li>
            </ul>
          </div>


          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#adb7c0]">Мы</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-500 transition-colors text-sm">О сервисе</a></li>
              <li><a href="#" className="hover:text-gray-500 transition-colors text-sm">Сотрудничество</a></li>
              <li><a href="#" className="hover:text-gray-500 transition-colors text-sm">Журнал</a></li>
              <li><a href="#" className="hover:text-gray-500 transition-colors text-sm">Партнерам</a></li>
            </ul>
          </div>


          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#adb7c0]">Инфо</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-500 transition-colors text-sm">Мои поездки</a></li>
              <li><a href="#" className="hover:text-gray-500 transition-colors text-sm">Избранное</a></li>
              <li><a href="#" className="hover:text-gray-500 transition-colors text-sm">Акции</a></li>
              <li><a href="#" className="hover:text-gray-500 transition-colors text-sm">Профиль</a></li>
            </ul>
          </div>


          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#adb7c0]">Помощь</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-500 transition-colors text-sm">Где мой билет?</a></li>
              <li><a href="#" className="hover:text-gray-500 transition-colors text-sm">Частые вопросы</a></li>
              <li><a href="#" className="hover:text-gray-500 transition-colors text-sm">Поддержка</a></li>
              <li><a href="#" className="hover:text-gray-500 transition-colors text-sm">Контакты</a></li>
            </ul>
          </div>


          <div>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[#adb7c0] hover:text-[#8a99a6] transition-colors text-sm">
                  Политика конфиденциальности
                </a>
              </li>
              <li>
                <a href="#" className="text-[#adb7c0] hover:text-[#8a99a6] transition-colors text-sm">
                  Правовая информация
                </a>
              </li>
              <li className="text-[#adb7c0] pt-4 text-sm">
                Copyright © 2025 «Казань Тревел»
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
