'use client';

import { useState, useEffect } from "react";

export function useStickyState(defaultValue : any, key: string) {


    const [value, setValue] = useState(() => {
      const stickyValue = typeof window !== 'undefined' ? localStorage.getItem(key) : defaultValue;
      return stickyValue !== null
        ? JSON.parse(stickyValue)
        : defaultValue;
    });
    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem(key, JSON.stringify(value));
        }
    }, [key, value]);
    return [value, setValue];
}