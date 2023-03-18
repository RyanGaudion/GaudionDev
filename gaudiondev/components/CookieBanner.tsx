//@ts-nocheck

'use client';

import { getLocalStorage, setLocalStorage } from '@/lib/storageHelper';
import { useState, useEffect } from 'react';


export default function CookieBanner(){

    const [cookieConsent, setCookieConsent] = useState(false);

    useEffect (() => {
        const storedCookieConsent = getLocalStorage("cookie_consent", null)

        setCookieConsent(storedCookieConsent)
    }, [setCookieConsent])

    
    useEffect(() => {
        const newValue = cookieConsent ? 'granted' : 'denied'

        window.gtag("consent", 'update', {
            'analytics_storage': newValue
        });

        setLocalStorage("cookie_consent", cookieConsent)

        console.log("Cookie Consent: ", cookieConsent)

    }, [cookieConsent]);

    return (
        
        <div className={`my-10 mx-auto max-w-max md:max-w-screen-sm
                    absolute bottom-0 left-0 right-0 
                    ${cookieConsent != null ? "hidden" : "flex"} px-4 py-2 justify-between items-center flex-col sm:flex-row gap-4  
                    bg-gray-700 rounded shadow`}>
            
            <div className='text-center'>
                <p >We use <a className='font-bold text-sky-400'>cookies</a> on our site.</p>
            </div>

            
            <div className='flex gap-2 md:gap-6'>
                <button className='px-5 py-2 text-gray-300 rounded-md border-gray-900' onClick={() => setCookieConsent(false)}>Decline</button>
                <button className='bg-gray-900 px-5 py-2 text-white rounded-md' onClick={() => setCookieConsent(true)}>Allow Cookies</button>
            </div>   
        </div>
    )
}