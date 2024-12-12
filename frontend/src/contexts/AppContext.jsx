import React from 'react';

const AppContext = React.createContext(undefined);

export const AppContextProvider = ({ children }) => {
    return (
        <AppContext.Provider value={{showToast: () => undefined}}>
            {children}
        </AppContext.Provider>
    );
};