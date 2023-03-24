'use client';

import { dateTimeString, timeSince } from "@/lib/dateHelper";

export default function BlogPreviewDate({dateNum} : {dateNum : number | undefined}){

    return (
        dateNum ?
         <p title={dateTimeString(dateNum)}>{timeSince(dateNum)}</p>
         :
         <p></p>
    )
}