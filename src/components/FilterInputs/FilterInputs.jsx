import css from "./FilterInputs.module.css";

const FilterInputs = ({ searchKeys, setSearchKeys }) => {
  return (
    <div className={css.inputsWrapper}>
      <input
        onChange={(e) =>
          setSearchKeys({ ...searchKeys, titleKey: e.target.value })
        }
        className={css.input}
        placeholder="Search by title"
        value={searchKeys.titleKey}
        type="text"
      />
      <input
        onChange={(e) =>
          setSearchKeys({ ...searchKeys, dateKey: e.target.value })
        }
        className={css.input}
        value={searchKeys.dateKey}
        type="date"
      />
    </div>
  );
};

export default FilterInputs;
