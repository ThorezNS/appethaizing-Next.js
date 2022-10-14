import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './SearchBar.module.css';

const SearchBar = ({ placeholder }) => {
  const [inputValue, setInputValue] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`found/${inputValue}`);
    setInputValue('');
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          placeholder={placeholder}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchBar;
