import React, { useEffect, useState } from "react";

import WhiteArrow from "../../../assets/details-page/icons/wad.svg";
import BlackArrow from "../../../assets/details-page/icons/bad.svg";
import Image from "next/image";

import styled from "styled-components";

export const SelectWrapper = styled.div`
  position: relative;
  height: 48px;

  .select-opener {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
    width: 100%;
    height: 100%;

    .selected-option {
      background-color: transparent;
      border: none;
      font-size: 15px;
      text-align: left;
      display: flex;
      flex-wrap: wrap;
      text-transform: capitalize;
      overflow: hidden;
      white-space: nowrap;
      font-weight: 300;
      &.light {
        color: #fff;
      }
      &.dark {
        color: #000;
      }
    }

    .arrow {
      transition: all 0.2s ease-in-out;
      display: flex;
      align-items: center;
      justify-content: center;
      &.opened {
        transform: rotate(180deg);
      }
    }
  }

  .options {
    min-width: 200px;
    max-height: 350px;
    padding: 10px;
    overflow-y: auto;
    position: absolute;
    top: 48px;
    right: -20px;
    background-color: #fff;
    z-index: 25;
    display: flex;
    flex-direction: column;
    border: 1px solid #e6e6e6;
    border-radius: 8px;

    &::-webkit-scrollbar {
      width: 10px;
    }

    &::-webkit-scrollbar-track {
      background-color: #fff;
      border-left: 1px solid #e6e6e6;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #e6e6e6;
    }
  }

  .option {
    padding: 10px 20px;
    border-bottom: 1px solid #d9d9d9;
    cursor: pointer;
    display: flex;
    color: #191919;
    font-size: 20px;
    font-weight: 300;
    line-height: 24.2px;

    &.selected {
      background-color: #e6e6e6;
    }
    &:hover {
      background-color: #e6e6e6;
    }

    &:nth-last-child(1) {
      border: none;
    }
  }
`;

export interface SelectOption {
  label: string;
  value: string;
}

interface SelectProps {
  options: SelectOption[];
  value: string;
  design: "light" | "dark";

  onChange: (value: string) => void;
  onDropdownOpen?: (isOpen: boolean) => void;
}
const Select = ({
  options,
  value,
  onChange,
  onDropdownOpen,
  design,
}: SelectProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [filteredOptions, setFilteredOptions] =
    useState<SelectOption[]>(options);

  const toggleOptions = () => {
    setFilteredOptions(options);
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    onDropdownOpen && onDropdownOpen(isDropdownOpen);
  }, [isDropdownOpen, onDropdownOpen]);

  const selectedOption = options.find((option) => option.value === value);
  return (
    <SelectWrapper>
      <div className="select-opener" onClick={toggleOptions}>
        <div
          className={`selected-option ${design === "light" ? "light" : "dark"}`}
        >
          <>
            {
              options.find((option) => option.value === selectedOption?.value)
                ?.label
            }
          </>
        </div>
        <Image
          style={{ flexShrink: "0" }}
          src={design === "light" ? WhiteArrow : BlackArrow}
          className={`arrow ${isDropdownOpen ? "opened" : ""}`}
          height={20}
          width={20}
          layout="fixed"
          alt="arrow"
        />
      </div>
      {isDropdownOpen && (
        <div className="options">
          {filteredOptions.map((option, index) => (
            <span
              className={`option 
                ${selectedOption?.value === option.value ? "selected" : ""} 
              
              `}
              key={`${option.label}_${index}`}
              onClick={() => {
                onChange(option.value);
                setIsDropdownOpen(false);
              }}
            >
              {option.label}
            </span>
          ))}
        </div>
      )}
    </SelectWrapper>
  );
};
export default Select;
