import Image from "next/image";

import styles from "./SearchInput.module.css";

interface SearchInputProps {
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput = ({
  placeholder = "Search by name or ingredient…",
  value,
  defaultValue,
  onChange,
}: SearchInputProps) => {
  return (
    <div className={styles.searchContainer} role="search">
      <Image
        src="/images/icon-search.svg"
        alt="Search"
        width={20}
        height={20}
        className={styles.searchIcon}
      />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchInput;
