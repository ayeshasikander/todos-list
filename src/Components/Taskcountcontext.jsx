import React, { createContext, useContext, useState, useEffect } from 'react';

const TaskCountContext = createContext();

export const TaskCountProvider = ({ children }) => {
    const [taskCount, setTaskCount] = useState(0);
    useEffect(() => {
        localStorage.setItem("taskCount", taskCount);
    }, [taskCount]);
    return (

        <TaskCountContext.Provider value={{ taskCount, setTaskCount }}>
            {children}
        </TaskCountContext.Provider>
    );
};

export const useTaskCount = () => {
    return useContext(TaskCountContext);
};
