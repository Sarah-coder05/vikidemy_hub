import React, { useState, useRef, useEffect, JSX } from "react";

interface DropdownProps {
  options: JSX.Element[];
  trigger: JSX.Element;
  className?: string;
}

const Dropdown = ({ options, trigger, className }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
      // Re-enable scrolling
      document.body.style.overflow = "auto";
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOptionClick = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className="cursor-pointer py-2 md:px-1 lg:px-4"
        onClick={toggleDropdown}
      >
        {trigger}
      </div>
      {isOpen && (
        <div
          className={`absolute z-50 mt-1 rounded-md border border-gray-300 bg-gray-900 py-2 shadow-lg ${className}`}
        >
          {options.map((option, index) => (
            <div
              key={index}
              className="cursor-pointer px-4 py-2 hover:bg-gray-100"
              onClick={handleOptionClick}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
