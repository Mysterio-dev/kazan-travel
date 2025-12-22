// src/components/ui/CustomDatePicker.jsx
import React, { useState, useRef, useEffect } from 'react';

const MONTHS = [
  'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
  'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
];

const CustomDatePicker = ({ value, onChange, placeholder = 'дд.мм.гггг', className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [view, setView] = useState('days'); // 'days' | 'months' | 'years'
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const dropdownRef = useRef(null);

  // Синхронизация извне
  useEffect(() => {
    if (value) {
      const [day, month, year] = value.split('.').map(Number);
      if (day && month && year) {
        const date = new Date(year, month - 1, day);
        if (!isNaN(date.getTime())) {
          setSelectedDate(date);
          setCurrentYear(year);
        }
      }
    } else {
      setSelectedDate(null);
    }
  }, [value]);

  // Закрытие по клику вне
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
        setView('days'); // сброс при закрытии
      }
    };
    if (isOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    onChange(formatDate(date));
    setIsOpen(false);
    setView('days');
  };

  // === Рендер: Выбор дней ===
  const renderDays = () => {
    const today = new Date();
    const current = selectedDate || new Date(currentYear, 0, 1);
    const year = current.getFullYear();
    const month = current.getMonth();

    const firstDay = new Date(year, month, 1);
    const startDay = new Date(firstDay);
    const dayOfWeek = firstDay.getDay();
    const daysToPrevSunday = dayOfWeek; // воскресенье = 0
    startDay.setDate(firstDay.getDate() - daysToPrevSunday);

    const days = [];
    const day = new Date(startDay);

    for (let i = 0; i < 42; i++) {
      const isCurrentMonth = day.getMonth() === month;
      const isToday =
        day.getDate() === today.getDate() &&
        day.getMonth() === today.getMonth() &&
        day.getFullYear() === today.getFullYear();

      const isSelected =
        selectedDate &&
        day.getDate() === selectedDate.getDate() &&
        day.getMonth() === selectedDate.getMonth() &&
        day.getFullYear() === selectedDate.getFullYear();

      const cellDate = new Date(day);

      days.push(
        <button
          key={i}
          type="button"
          onClick={() => handleDateSelect(cellDate)}
          className={`w-8 h-8 text-sm rounded-full flex items-center justify-center
            ${isSelected
              ? 'bg-[#00D5FF] text-white'
              : isToday
                ? 'border border-[#00D5FF] text-[#00D5FF]'
                : isCurrentMonth
                  ? 'text-gray-800 hover:bg-gray-100'
                  : 'text-gray-400 hover:bg-gray-50'}
          `}
        >
          {day.getDate()}
        </button>
      );
      day.setDate(day.getDate() + 1);
    }

    const changeMonth = (dir) => {
      const newDate = new Date(year, month + dir, 1);
      setCurrentYear(newDate.getFullYear());
      setSelectedDate(newDate);
    };

    return (
      <>
        <div className="flex items-center justify-between mb-2">
          <button
            type="button"
            onClick={() => changeMonth(-1)}
            className="text-gray-600 hover:text-gray-900 text-sm"
          >
            &lt;
          </button>
          <button
            type="button"
            onClick={() => setView('months')}
            className="font-medium text-gray-800 hover:text-[#00D5FF] text-sm"
          >
            {MONTHS[month]} {year}
          </button>
          <button
            type="button"
            onClick={() => changeMonth(1)}
            className="text-gray-600 hover:text-gray-900 text-sm"
          >
            &gt;
          </button>
        </div>
        <div className="grid grid-cols-7 gap-1 mb-1">
          {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map((d) => (
            <div key={d} className="text-[11px] text-center text-gray-500 font-medium">{d}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">{days}</div>
      </>
    );
  };

// === Рендер: Выбор месяца ===
const renderMonths = () => {
  return (
    <>
      <div className="flex items-center justify-between mb-3">
        <button
          type="button"
          onClick={() => setCurrentYear(prev => prev - 1)}
          className="text-gray-600 hover:text-gray-900 text-sm"
        >
          &lt;
        </button>
        <button
          type="button"
          onClick={() => setView('years')}
          className="font-medium text-gray-800 hover:text-[#00D5FF] text-sm"
        >
          {currentYear}
        </button>
        <button
          type="button"
          onClick={() => setCurrentYear(prev => prev + 1)}
          className="text-gray-600 hover:text-gray-900 text-sm"
        >
          &gt;
        </button>
      </div>
      <div className="grid grid-cols-3 gap-1">
        {MONTHS.map((month, idx) => (
          <button
            key={month}
            type="button"
            onClick={() => {
              const newDate = new Date(currentYear, idx, 1);
              setSelectedDate(newDate);
              setView('days');
            }}
            className={`py-1.5 text-sm rounded hover:bg-gray-100 ${
              selectedDate && selectedDate.getMonth() === idx
                ? 'text-[#00D5FF] font-medium'
                : 'text-gray-800'
            }`}
          >
            {month.substring(0, 3)}
          </button>
        ))}
      </div>
    </>
  );
};

  // === Рендер: Выбор года (диапазон ±10 лет) ===
  const renderYears = () => {
    const startYear = Math.floor(currentYear / 10) * 10; // 2020, 2030...
    const years = Array.from({ length: 12 }, (_, i) => startYear - 1 + i);

    return (
      <>
        <div className="flex items-center justify-between mb-3">
          <button
            type="button"
            onClick={() => setCurrentYear(startYear - 10)}
            className="text-gray-600 hover:text-gray-900"
          >
            &lt;
          </button>
          <span className="font-medium text-gray-800 text-sm">
            {startYear - 1} – {startYear + 10}
          </span>
          <button
            type="button"
            onClick={() => setCurrentYear(startYear + 10)}
            className="text-gray-600 hover:text-gray-900"
          >
            &gt;
          </button>
        </div>
        <div className="grid grid-cols-4 gap-1">
          {years.map((year) => (
            <button
              key={year}
              type="button"
              onClick={() => {
                setCurrentYear(year);
                setView('months');
              }}
              className={`py-1.5 text-sm rounded hover:bg-gray-100 ${
                selectedDate && selectedDate.getFullYear() === year
                  ? 'text-[#00D5FF] font-medium'
                  : 'text-gray-800'
              }`}
            >
              {year}
            </button>
          ))}
        </div>
      </>
    );
  };

  const renderCalendar = () => {
    return (
      <div className="w-64 bg-white border border-gray-200 rounded-lg shadow-lg p-3">
        {view === 'days' && renderDays()}
        {view === 'months' && renderMonths()}
        {view === 'years' && renderYears()}
      </div>
    );
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <input
        type="text"
        readOnly
        value={value || ''}
        placeholder={placeholder}
        onClick={() => {
          setIsOpen(!isOpen);
          if (!isOpen) setView('days');
        }}
        className={`form-input w-full pl-3 pr-10 py-2 cursor-pointer ${className}`}
      />
      <div
        className={`absolute top-full mt-3 z-10 transition-all duration-300 ${
          isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        {renderCalendar()}
      </div>
    </div>
  );
};

export default CustomDatePicker;