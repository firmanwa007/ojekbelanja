import base from '../services/base';

export const INC_ORDER = "INC_ORDER";
export const DEC_ORDER = "DEC_ORDER";
export const SET_ORDER = "SET_ORDER";
export const REMOVE_ORDER = "REMOVE_ORDER";
export const CLEAN_ORDER = "CLEAN_ORDER";
export const CLEAR_ORDER = "CLEAR_ORDER";

export const SET_USER = "SET_USER";
export const CLEAR_USER = "CLEAR_USER";

export const SET_STORE_KEYWORD = "SET_STORE_KEYWORD";
export const FETCH_STORES_SUCCESS = "FETCH_STORES_SUCCESS";
export const FETCH_STORE_SUCCESS = "FETCH_STORE_SUCCESS";

export const SET_PRODUCT_KEYWORD = "SET_PRODUCT_KEYWORD";

export const incOrder = (id) => ({
  type: INC_ORDER,
  id
});

export const decOrder = (id) => ({
  type: DEC_ORDER,
  id
});

export const setOrder = (id, count) => ({
  type: SET_ORDER,
  id,
  count
});

export const removeOrder = (id) => ({
  type: REMOVE_ORDER,
  id
});

export const cleanOrder = (products) => ({
  type: CLEAN_ORDER,
  products
});

export const clearOrder = () => ({
  type: CLEAR_ORDER,
});

export const setUser = (field, value) => ({
  type: SET_USER,
  field,
  value
});

export const clearUser = () => ({
  type: CLEAR_USER,
});

export const setStoreKeyword = (keyword) => ({
  type: SET_STORE_KEYWORD,
  keyword
});

export const receiveStores = (stores) => ({
  type: FETCH_STORES_SUCCESS,
  stores
});

// Fetch stores from Firebase
export const fetchStores = () => base
  .fetch(`/stores`, { context: this })
  .then(stores => receiveStores(stores))
  .catch(error => {console.error(error);});

const receiveStore = (id, store) => ({
  type: FETCH_STORE_SUCCESS,
  id,
  store
});

export const fetchStore = (id) => base
  .fetch(`/stores/${id}`, { context: this })
  .then(store => receiveStore(id, store))
  .catch(error => {console.error(error);});

export const setProductKeyword = (keyword) => ({
  type: SET_PRODUCT_KEYWORD,
  keyword
});
