
import './CustomSelect.css';

// components/CustomSelect.jsx
import React, { useState, useRef, useEffect } from 'react';
import { ArrowDownIcon } from '../../../components/ui/icons';

const CustomSelect = ({ options, value, onChange, placeholder, className = "form-select" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (optionValue) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  const selectedOption = options.find(opt => opt.value === value);

  return (
    <div className="relative" ref={containerRef}>
      {/* Поле */}
      <div
        className={`${className} ${isOpen ? 'border-[var(--main-accent-color)]' : ''} flex items-center justify-between cursor-pointer relative`}
        onClick={() => setIsOpen(!isOpen)}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') setIsOpen(!isOpen);
        }}
      >
        <span className={value ? 'text-gray-900' : 'text-[rgba(187,189,195,1)]'}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>

        <ArrowDownIcon
          className={`absolute right-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </div>

      {/* Выпадающий список с анимацией как в Currency Dropdown */}
      <div
        className={`absolute z-10 mt-3 w-full bg-white border border-gray-200 rounded-xl shadow-lg max-h-60 overflow-auto py-1 transition-all duration-300 origin-top ${
          isOpen
            ? 'opacity-100 scale-100'
            : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        {options.map((option) => (
          <div
            key={option.value}
            className={`px-4 py-2.5 cursor-pointer transition-colors ${
              value === option.value
                ? 'bg-[#00D5FF]/10 text-[#00D5FF] font-semibold'
                : 'text-gray-900 hover:bg-gray-50'
            }`}
            onClick={() => handleSelect(option.value)}
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomSelect;