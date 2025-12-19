import './OnboardAmenities.css';

import { LikeGradientIcon, WifiGradientIcon, MicrophoneGradientIcon, MartiniGradientIcon, OkbGradientIcon, ForkKnifeGradientIcon } from '../../ui/icons';

const OnboardAmenities = () => {
    return (
        <div className="onboard-amenities flex flex-col border border-[#e8edf2] rounded-[40px] px-[30px] pt-[30px] pb-[35px]">
            <h2 className="text-xl font-semibold mb-5">Удобства на борту</h2>
            <ul className="grid grid-cols-1 gap-3 mb-8">
                <li className="flex items-center text-sm gap-2 mb-3">
                    <LikeGradientIcon className="mt-0.5 flex-shrink-0" />
                    <span>Курение запрещено на всей территории</span>
                </li>
                <li className="flex items-center text-sm gap-2 mb-3">
                    <WifiGradientIcon className="mt-0.5 flex-shrink-0" />
                    <span>По всему теплоходу Wi-Fi</span>
                </li>
                <li className="flex items-center text-sm gap-2 mb-3">
                    <MicrophoneGradientIcon className="mt-0.5 flex-shrink-0" />
                    <span>Концертный / конференц зал</span>
                </li>
                <li className="flex items-center text-sm gap-2 mb-3">
                     <MartiniGradientIcon className="mt-0.5 flex-shrink-0" />
                    <span>Панорамный бар</span>
                </li>
                <li className="flex items-center text-sm gap-2 mb-3">
                     <OkbGradientIcon className="mt-0.5 flex-shrink-0" />
                    <span>Спа-услуги / массаж</span>
                </li>
                <li className="flex items-center text-sm gap-2">
                     <ForkKnifeGradientIcon className="mt-0.5 flex-shrink-0" />
                    <span>Ресторан</span>
                </li>
            </ul>
            <a
                href="#"
                className="flex items-center w-max h-[40px] px-[16px] py-[12px] rounded-[16px] bg-[rgba(243,247,250,1)] text-[14px] text-[rgba(33,42,51,1)] hover:bg-gray-100 transition-colors"
            >
                Все удобства
            </a>
        </div>
    );
};

export default OnboardAmenities;
