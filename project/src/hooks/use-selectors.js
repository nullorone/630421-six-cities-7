import {useSelector} from 'react-redux';

function useCustomSelector(selector) {
  return useSelector((state) => state[selector]);
}

function useSelectors(...selectors) {
  return selectors.map(useCustomSelector);
}

export default useSelectors;
