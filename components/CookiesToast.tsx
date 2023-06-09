import React, { useEffect, useState } from "react";
import { createUserCookiesPreferences } from "@/helpers/index"
import { hasCookie } from 'cookies-next';
import Modal from './Modal';
import { EssentialsCookies } from "@/interfaces";

export const CookiesToast: React.FC = ()  => {

    const [cookiesPreferencesSelected, setCookiesPreferencesSelected] = useState<boolean>()
    

    useEffect(() => {
        const visitStatus = hasCookie('savedTheme')
        setCookiesPreferencesSelected(visitStatus)
    }, []);
    
    const CookiePreferences = (pref : string, cookieValue?: EssentialsCookies): void => {
        setCookiesPreferencesSelected(true);
        createUserCookiesPreferences(pref, cookieValue);
    }

    return (
        <>
            {
                cookiesPreferencesSelected ?

                <div className="toast toast-start">
                    <label htmlFor="my-modal-6" className="btn btn-circle">🍪</label>
                </ div>

                :

                <div className="toast toast-start">
                    <div className="alert flex-col items-start w-1/2">
                        <p>Cookies 🍪</p>
                        <p className="text-xs">Nous utilisons des cookies ou des technologies équivalentes pour stocker et/ou accéder à des informations sur votre appareil.</p>
                        <div className="flex flex-wrap">
                            <label className="btn btn-sm text-xs normal-case" htmlFor="my-modal-6">Gérer ⚙️</label>
                            <button onClick={() => CookiePreferences("allAccepted")} className="btn btn-sm btn-outline btn-success text-xs normal-case">Tout accepter</button>
                            <button onClick={() => CookiePreferences("allRejected")} className="btn btn-sm btn-outline btn-error text-xs normal-case">Tout refuser</button>
                        </div>
                    </div>
                </div>
            }

            < Modal onCookiePreferences={CookiePreferences} />
        </>
    )

};