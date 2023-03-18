//@ts-nocheck

'use client';


import Script from 'next/script'

import { useState, useEffect } from 'react';
import { useStickyState } from '@/lib/storageHelper';


export default function CookieBanner(){

    const [cookieConsent, setCookieConsent] = useStickyState(false, "cookieConsent")

    useEffect(() => {
        const newValue = cookieConsent ? 'granted' : 'denied'

        window.gtag("consent", 'update', {
            'analytics_storage': newValue
        });

        console.log("Cookie Consent: ", cookieConsent)

    }, [cookieConsent]);

    return (
        <>
            <div className="w-min absolute bottom-0 mx-auto left-0 right-0">
                <button onClick={() => setCookieConsent(false)}>No</button>
                <button onClick={() => setCookieConsent(true)}>Yes</button>
            </div>
        </>

        



    )
}