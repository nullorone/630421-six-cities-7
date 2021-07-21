import React from 'react';
import classNames from 'classnames';
import {SortName} from '../../utils/const';
import {ActionCreator} from '../../store/action';
import {useDispatch} from 'react-redux';

const SORT_ITEMS = Object.values(SortName);

function Sort() {
  const [currentOptionIdx, setCurrentOptionIdx] = React.useState(null);
  const [currentOption, setCurrentOption] = React.useState(SORT_ITEMS[0]);
  const [isOpened, setIsOpened] = React.useState(false);

  const dispatch = useDispatch();

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0" onClick={() => setIsOpened(true)}>
        {currentOption}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>
      <ul className={classNames(
        'places__options',
        'places__options--custom',
        isOpened && 'places__options--opened',
      )}
      >
        {SORT_ITEMS.map((item, idx) => (
          <li
            key={`sort-${item}`}
            className={classNames(
              'places__option',
              currentOptionIdx === idx && 'places__option--active',
            )}
            tabIndex="0"
            onClick={() => {
              setCurrentOptionIdx(idx);
              setCurrentOption(item);
              setIsOpened(false);
              dispatch(ActionCreator.filteredOffersOfSort(item));
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default Sort;
