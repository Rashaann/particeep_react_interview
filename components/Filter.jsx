import React from 'react';
import styles from "../styles/Home.module.css";



const Filter = ({ categories, selectedCategories, onChange }) => {
  const handleChange = (category) => {
    if (selectedCategories.includes(category)) {
      onChange(selectedCategories.filter(cat => cat !== category));
    } else {
      onChange([...selectedCategories, category]);
    }
  };

  return (
    <div className={styles.filter}>
      {categories.map(category => (
        <label key={category}>
          <input
            type="checkbox"
            checked={selectedCategories.includes(category)}
            onChange={() => handleChange(category)}
          />
          {category}
        </label>
      ))}
    </div>
  );
};

export default Filter;