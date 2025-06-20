import { useSelector, useDispatch } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
import styles from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleFilterChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={styles.searchBoxContainer}>
      <label htmlFor="search" className={styles.searchLabel}>Find contacts by name</label>
      <input
        type="text"
        id="search"
        className={styles.searchInput}
        value={filter}
        onChange={handleFilterChange}
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBox;