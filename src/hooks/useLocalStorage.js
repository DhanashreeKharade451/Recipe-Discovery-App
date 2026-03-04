import { useState } from "react";

function useLocalStorage(key, initialValue){
    const[storedValue, setstoredValue] = useState(() => {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : tialValue;
    });

    const setValue = (value) => {
        setstoredValue(value);
        localStorage.setItem(key, JSON.stringify(value));
    };

    return [storedValue, setValue];
}

export default useLocalStorage;