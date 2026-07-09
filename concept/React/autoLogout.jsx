// for auto logout , we generally write it in main component after login such as

import { useEffect } from "react";

function Dashboard(){
    useEffect(() => {
        let timer;
        const resetTimer = () => {
            clearTimeout(timer);

            timer = setTimeout(() => {
                logout();
            },15*60*1000) ; // 15 minutes
        }
    window.addEventListener("mousemove", resetTimer)
    window.addEventListener("keydown", resetTimer)
    window.addEventListener("click", resetTimer)

    resetTimer();

    return () => {
        clearTimeout(timer);
        window.removeEventListener("mousemove", resetTimer);
        window.removeEventListener("keydown", resetTimer);
        window.removeEventListener("click", resetTimer);
    }

    },[])

}

/*
Dashboard component Mounted
            |
useEffect  Runs
            |
Timer started
            |           (after 14 min we show warning model pop ) --> your session will expire in 1 minute
15 Minutes passed                                                               |
            |                                                           user clicks countinue?
logout()  called                                                                 |
            |                                                                   Yes ---> Reset Timers
user Redirected to login  
                                                                             No / No Activity --> 15 minutes Reached
                                                                                    |
                                                                                    LOGOUT USER

*/