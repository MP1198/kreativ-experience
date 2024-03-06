
import { useState, createContext } from 'react';

const PageContext = createContext();

const PageProvider = ({ children }) => {
    

    return (
        <PageContext.Provider value={{  }}>
            {children}
        </PageContext.Provider>
    );
};  

export default PageContext;