import { combineReducers, configureStore } from "@reduxjs/toolkit";
import noteReducer from "./slices/NoteSlices";
import tagReducer from "./slices/TagSlices";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";


const persistConfig = {
    key: 'root',
    storage,
  }

const combinedReducer = combineReducers({
    notes:noteReducer,
    tags:tagReducer,
})

const persistedReducer = persistReducer(persistConfig, combinedReducer);

export const store = configureStore({
    reducer:persistedReducer,
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
        serializableCheck: false
    })
})
//useSelector kullanirken store tipi tanimlamak icin
export type RootState = ReturnType<typeof store.getState>;
//useDispatch kullanirken store tipi tanimlamak icin
export type AppDispatch = typeof store.dispatch;

export default store;

export const persistor = persistStore(store);