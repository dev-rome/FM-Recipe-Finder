"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";

import styles from "./RadioDropdown.module.css";

type Option = {
  label: string;
  value: string;
};

interface RadioDropdownProps {
  label: string;
  options: Option[];
  onChange?: (value: string) => void;
  defaultValue?: string;
}

const RadioDropdown = ({
  label,
  options,
  onChange,
  defaultValue,
}: RadioDropdownProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>(
    defaultValue || options[0]?.value || "",
  );

  useEffect(() => {
    if (defaultValue !== undefined) {
      setValue(defaultValue);
    }
  }, [defaultValue]);

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (val: string) => {
    setValue(val);
    setOpen(false);
    if (onChange) onChange(val);
  };

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <button
        className={styles.dropdownTrigger}
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        {label}
        <Image
          src="/images/icon-chevron-down.svg"
          alt="Chevron Down"
          width={20}
          height={20}
        />
      </button>

      {open && (
        <div className={styles.dropdownMenu} role="menu" aria-label={label}>
          {options.map((opt) => (
            <label
              key={opt.value}
              className={styles.dropdownItem}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleSelect(opt.value);
                }
              }}
            >
              <input
                type="radio"
                name={label}
                value={opt.value}
                checked={value === opt.value}
                onChange={() => handleSelect(opt.value)}
                tabIndex={-1}
              />
              {opt.label}
            </label>
          ))}

          <button className={styles.clearBtn} onClick={() => handleSelect("")}>
            Clear
          </button>
        </div>
      )}
    </div>
  );
};

export default RadioDropdown;
