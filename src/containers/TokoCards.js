import { connect } from "react-redux";

import {
  getStoreKeyword,
  getFilteredStoreCards,
  getStoreIsFetching,
  getStoreError
} from "../reducers";
import FilterCards from "../components/FilterCards";

const mapStateToProps = (state, ownProps) => ({
  keyword: getStoreKeyword(state),
  items: getFilteredStoreCards(state),
  isFetching: getStoreIsFetching(state),
  error: getStoreError(state)
});

const TokoCards = connect(mapStateToProps)(FilterCards);

export default TokoCards;
