import React, { useState, useRef } from 'react';

const SortPopup = React.memo(function SortPopup({ items, activeSortType, onClickSortType }) {
  const [visiblePopup, setVisiblePopup] = useState(false); //useState для высветления Popup
  const sortRef = useRef(null); //переменная для извлечения пути в React
  const activeLabel = items.find((obj) => obj.type === activeSortType).name; //переменная для отображения выбранного пункта в popup

  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup); //функция, которая скрывает и отображает popup
  };

  const handleOutsidePopupClick = (event) => {
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(sortRef.current)) {
      //если клик за пределом Popup, то скрыть появившийся список
      setVisiblePopup(false);
    }
  };

  React.useEffect(() => {
    document.body.addEventListener('click', handleOutsidePopupClick); //хук useEffect выполняется после рендера страницы
  }, []);

  const onSelectItem = (index) => {
    if (onClickSortType) {
      onClickSortType(index);
    } //Функция вызывающая ререндер страницы и выделяющая выбранный елемент
    setVisiblePopup(false);
  };

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Sortuj według:</b>
        <span onClick={toggleVisiblePopup}>{activeLabel}</span>
      </div>
      {visiblePopup && (
        <div className="sort__popup">
          <ul>
            {items.map((item, index) => (
              <li
                className={activeSortType === item.type ? 'active' : ''}
                onClick={() => onSelectItem(item)}
                key={`${item.type}_${index}`}>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
});

export default SortPopup;
