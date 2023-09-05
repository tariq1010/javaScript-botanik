import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import createSagaMidleware from "redux-saga";
import parentReducer from "./redux/parentReducer";
import rootSaga from "./saga/rootSaga";

const sagaMiddleware = createSagaMidleware();

const store = configureStore({
  reducer: parentReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;

export default store;
