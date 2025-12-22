// src/components/ui/DateRangePicker.jsx
import React, { useState, useRef, useEffect } from 'react';

const MONTHS = [
  'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
  'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
];

const DateRangePicker = ({ value = { from: '', to: '' }, onChange, placeholder = 'дд.мм.гггг – дд.мм.гггг', className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState('days'); // 'days' | 'months' | 'years'
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [hoverDate, setHoverDate] = useState(null); // 🔥 для hover-подсветки
  const dropdownRef = useRef(null);

  const parseDateStr = (str) => {
    if (!str) return null;
    const [d, m, y] = str.split('.').map(Number);
    const date = new Date(y, m - 1, d);
    return isNaN(date.getTime()) ? null : date;
  };

  const formatDate = (date) => {
    if (!date) return '';
    return `${String(date.getDate()).padStart(2, '0')}.${String(date.getMonth() + 1).padStart(2, '0')}.${date.getFullYear()}`;
  };

  const startDate = parseDateStr(value.from);
  const endDate = parseDateStr(value.to);

  useEffect(() => {
    if (isOpen) {
      const baseDate = startDate || endDate || new Date();
      setCurrentYear(baseDate.getFullYear());
      setCurrentMonth(baseDate.getMonth());
    }
  }, [isOpen, value]);

  // Закрытие по клику вне
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
        setView('days');
        setHoverDate(null);
      }
    };
    if (isOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // 🔥 Определяем, входит ли дата в диапазон (с учётом hover)
  const isInRange = (date) => {
    if (!startDate) return false;
    const time = date.getTime();

    if (endDate) {
      const start = startDate.getTime();
      const end = endDate.getTime();
      const min = Math.min(start, end);
      const max = Math.max(start, end);
      return time > min && time < max;
    }

    if (hoverDate) {
      const start = startDate.getTime();
      const end = hoverDate.getTime();
      const min = Math.min(start, end);
      const max = Math.max(start, end);
      return time > min && time < max;
    }

    return false;
  };

  const isDateSelected = (date, type) => {
    if (type === 'start') return startDate && date.getTime() === startDate.getTime();
    if (type === 'end') return endDate && date.getTime() === endDate.getTime();
    return false;
  };

  const handleDayClick = (date) => {
    if (!startDate || (startDate && endDate)) {
      onChange({ from: formatDate(date), to: '' });
      setHoverDate(null);
    } else if (startDate && !endDate) {
      const end = date;
      let newFrom, newTo;
      if (end < startDate) {
        newFrom = formatDate(end);
        newTo = formatDate(startDate);
      } else {
        newFrom = formatDate(startDate);
        newTo = formatDate(end);
      }
      onChange({ from: newFrom, to: newTo });
      setIsOpen(false);
      setView('days');
      setHoverDate(null);
    }
  };

  const changeMonth = (dir) => {
    let newMonth = currentMonth + dir;
    let newYear = currentYear;
    if (newMonth < 0) {
      newMonth = 11;
      newYear -= 1;
    } else if (newMonth > 11) {
      newMonth = 0;
      newYear += 1;
    }
    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
  };

  // === Рендер: дни ===
  const renderDays = () => {
    const today = new Date();
    const firstDay = new Date(currentYear, currentMonth, 1);
    const startDay = new Date(firstDay);
    const dayOfWeek = firstDay.getDay();
    startDay.setDate(firstDay.getDate() - dayOfWeek);

    const days = [];
    const day = new Date(startDay);

    for (let i = 0; i < 42; i++) {
      const isCurrentMonth = day.getMonth() === currentMonth && day.getFullYear() === currentYear;
      const isToday =
        day.getDate() === today.getDate() &&
        day.getMonth() === today.getMonth() &&
        day.getFullYear() === today.getFullYear();

      const isSelectedStart = isDateSelected(day, 'start');
      const isSelectedEnd = isDateSelected(day, 'end');
      const inRange = isInRange(day);
      const cellDate = new Date(day);

      days.push(
        <button
          key={i}
          type="button"
          onClick={() => handleDayClick(cellDate)}
          onMouseEnter={() => setHoverDate(cellDate)} // 🔥 hover!
          className={`w-8 h-8 text-sm rounded-full flex items-center justify-center
            ${isSelectedStart || isSelectedEnd
              ? 'bg-[#00D5FF] text-white'
              : inRange
                ? 'bg-[#00D5FF]/30 text-gray-800'
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
            {MONTHS[currentMonth]} {currentYear}
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

  // === Рендер: месяцы ===
  const renderMonths = () => {
    return (
      <>
        <div className="flex items-center justify-between mb-3">
          <button
            type="button"
            onClick={() => setCurrentYear(p => p - 1)}
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
            onClick={() => setCurrentYear(p => p + 1)}
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
                setCurrentMonth(idx);
                setView('days');
              }}
              className={`py-1.5 text-sm rounded hover:bg-gray-100 ${
                currentMonth === idx ? 'text-[#00D5FF] font-medium' : 'text-gray-800'
              }`}
            >
              {month.substring(0, 3)}
            </button>
          ))}
        </div>
      </>
    );
  };

  // === Рендер: годы ===
  const renderYears = () => {
    const startYear = Math.floor(currentYear / 10) * 10;
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
                currentYear === year ? 'text-[#00D5FF] font-medium' : 'text-gray-800'
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

  const displayValue = value.to
    ? `${value.from} – ${value.to}`
    : value.from
      ? `${value.from} – ...`
      : '';

  return (
    <div className="relative" ref={dropdownRef}>
      <input
        type="text"
        readOnly
        value={displayValue}
        placeholder={placeholder}
        onClick={() => {
          setIsOpen(!isOpen);
          if (!isOpen) {
            setView('days');
            setHoverDate(null);
          }
        }}
        className={`form-input w-full pl-3 pr-10 py-2 cursor-pointer ${className}`}
      />
      <div
        className={`absolute top-full mt-1 z-10 transition-all duration-300 ${
          isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        {renderCalendar()}
      </div>
    </div>
  );
};

export default DateRangePicker;