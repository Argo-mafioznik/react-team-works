<<<<<<< HEAD
import React from "react";
import Routes from "./Routes";
import StoreContextProvider from "./contexts/StoreContext";
import { AuthProvider } from "./contexts/AuthContext";
=======
import React from 'react';
import Routes from './Routes';
import StoreContextProvider from './contexts/StoreContext';
>>>>>>> 7995cdc6f48c0f95387c61b961fa62c2446ac492

import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { ConfirmProvider } from 'material-ui-confirm';

toast.configure();

const defaultConfirmOptions = {
  title: 'Вы уверены?',
  confirmationText: 'Да',
  cancellationText: 'Отмена',
};

function App() {
  return (
    <ConfirmProvider defaultOptions={defaultConfirmOptions}>
      <StoreContextProvider>
        <AuthProvider>
        <Routes />

        </AuthProvider>
      </StoreContextProvider>
    </ConfirmProvider>
  );
}

export default App;
