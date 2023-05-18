import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.js";
import Login from "./pages/Login/Login.js";
import User from "./pages/User/User.js";
import SharedLayout from "./pages/SharedLayout/SharedLayout.js";
import Error from "./pages/Error/Error.js";
import RequireAuth from "./features/auth/RequireAuth";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';  
import { persistStore } from 'redux-persist';
function App() {
  let persistor = persistStore(store);
  return (
    <Provider store={store}>
  <PersistGate persistor={persistor}>
      <BrowserRouter>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Error />} />
          </Route>
          {/* Protected routes */}
          <Route element={<RequireAuth />}>
            <Route path="/profile" element={<User />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
