import React, { useState } from 'react';
import { IMaskInput } from 'react-imask';
import './PersonalDataForm.css';
import { CalendarIcon } from '../../../components/ui/icons';
import CustomSelect from '../../../components/ui/Select/CustomSelect'

import { SecurityShieldIcon } from '../../ui/icons';

const PersonalDataForm = () => {
    const [gender, setGender] = useState('');
    const [citizenship, setCitizenship] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [passport, setPassport] = useState('');



    return (
        <div className="personal-data-form">
            <h2 className="text-lg mb-3 md:mb-4">Личные данные</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mb-6 md:mb-8">
                <div className='form-control'>
                    <label className="form-label">Ваше имя</label>
                    <input
                        type="text"
                        className="form-input"
                        placeholder='Введите ваше имя'
                    />
                </div>



                <div className='form-control'>
                    <label className="form-label">Фамилия</label>
                    <input
                        type="text"
                        className="form-input"
                        placeholder='Введите вашу фамилию'
                    />
                </div>
                <div className='form-control'>
                    <label className="form-label">Отчество</label>
                    <input
                        type="text"
                        className="form-input"
                        placeholder='Введите ваше отчество'
                    />
                </div>
            </div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 mb-6 md:mb-13">
                <div className="form-control">
                    <label className="form-label">Дата рождения</label>
                    <IMaskInput
                        mask="00.00.0000"
                        className="form-input appearance-none w-full"
                        value={selectedDate}
                        onAccept={(value) => setSelectedDate(value)}
                        placeholder="дд.мм.гггг"
                    />
                    <CalendarIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
                <div className="form-control">
                    <CustomSelect
                        placeholder="Пол"
                        value={gender}
                        onChange={setGender}
                        options={[
                            { value: 'male', label: 'Мужской' },
                            { value: 'female', label: 'Женский' },
                        ]}
                    />
                </div>
                <div className="form-control">
                    <CustomSelect
                        placeholder="Гражданство"
                        value={citizenship}
                        onChange={setCitizenship}
                        options={[
                            { value: 'ru', label: 'Россия' },
                            { value: 'by', label: 'Беларусь' },
                            { value: 'kz', label: 'Казахстан' },
                            { value: 'other', label: 'Другое' },
                        ]}
                    />
                </div>
                <div className='form-control'>
                    <label className="form-label">Город</label>
                    <input
                        type="text"
                        className="form-input"
                        placeholder='Выберите город'
                    />
                </div>

            </div>
            <h2 className="text-lg mb-3 md:mb-4">Паспорт РФ</h2>
<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4 mb-5 md:mb-7">
                <div className="form-control">
                    <label className="form-label">Серия и номер паспорта</label>
                    <IMaskInput
                        mask="0000 000000"
                        className="form-input"
                        placeholder="1234 567890"
                        value={passport}
                        onAccept={(value) => setPassport(value)}
                    />
                </div>
                <div className='form-control'>
                    <label className="form-label">Адрес регистрации</label>
                    <input
                        type="text"
                        className="form-input"
                        placeholder='Введите адрес'
                    />
                </div>
                <div className="flex items-center gap-2 max-w-md">
                    <SecurityShieldIcon
                        size={20}
                        className="text-gray-700 flex-shrink-0"
                        aria-hidden="true"
                    />
                    <p className="text-[11px] text-gray-700">
                        Это нужно в первую очередь, для вашей безопасности.
                    </p>
                </div>

            </div>
            <h2 className="text-lg mb-3 md:mb-4">Контактные данные</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mb-6 md:mb-10">
                <div className="form-control">
                    <label className="form-label">Номер телефона</label>
                    <IMaskInput
                        mask="+{7} 000 000-00-00"
                        className="form-input"
                        placeholder="+7 999 999-99-99"
                        value={phoneNumber}
                        onAccept={(value) => setPhoneNumber(value)}
                    />
                </div>
                <div className='form-control'>
                    <label className="form-label">Электронная почта</label>
                    <input
                        type="email"
                        className="form-input"
                        placeholder='info@email.com'
                    />
                </div>
            </div>

            <button className="btn-primary-lg w-full sm:w-[215px] h-[50px]">Сохранить</button>


        </div>
    );
};

export default PersonalDataForm;
