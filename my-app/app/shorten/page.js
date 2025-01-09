"use client"

import React, { useState } from 'react'
import Link from 'next/link'
const shorten = () => {
    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [generated, setgenerated] = useState("")
    const generate = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shorturl": shorturl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                seturl("");
                setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
                setshorturl("");
                console.log(result)
                alert(result.message)
            })
            .catch((error) => console.error(error));
    }

    return (
        <div>
            <div className='flex flex-col  bg-indigo-300 p-6 mx-auto gap-2 max-w-lg my-16'>
                <h1 className='font-bold text-2xl'>Generate your short URL</h1>
                <input className='bg-slate-100 p-2 rounded-lg   focus:outline-indigo-700 '
                    onChange={e => { seturl(e.target.value) }} value={url} placeholder='Paste your URL' type="text" name="urrl" id="" />
                <input className='bg-slate-100 p-2 rounded-lg  focus:outline-indigo-700'
                    onChange={e => { setshorturl(e.target.value) }} value={shorturl} placeholder='Enter shorten url' type="text" name="shorturrl" id="" />
                <button onClick={generate} className="bg-white p-2 text-indigo-700 font-bold my-3 mx-2 rounded-lg" type="button">Generate </button>
                {generated && <> <span className='font-semibold text-lg'>Your Link</span> <Link target='_blank' href={generated} >{generated}</Link>
            </>}
            </div>
            
        </div>
    )
}

export default shorten
