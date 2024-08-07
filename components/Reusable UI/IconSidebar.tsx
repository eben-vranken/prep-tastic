"use client"

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation'

interface Props {
    linksTop: Array<{
        [key: string]: [React.ReactNode, string]
    }>,
    linksMiddle: Array<{
        [key: string]: [React.ReactNode, string]
    }>,
    linksBottom: Array<{
        [key: string]: [React.ReactNode, string]
    }>;
}



const IconSidebar: React.FC<Props> = ({ linksTop, linksMiddle, linksBottom }) => {
    const pathname = usePathname()


    return (
        <aside className="py-4 bg-body brightness-125 border-r border-r-white/5 w-10 flex flex-col items-center z-10 justify-between">
            {/* Links top */}
            {
                linksTop ?
                    <section className='flex gap-y-2 flex-col'>
                        {linksTop.map((linkItem, index) => {
                            const key = Object.keys(linkItem)[0];
                            const [icon, url] = linkItem[key];
                            console.log(pathname, url, pathname == url)
                            return (
                                <section className='relative overflow-visible flex items-center'>
                                    <Link key={index} href={url} className={`relative mb-2  ${pathname == url ? "text-text/40" : "text-text/20"} hover:text-text/40 group transition`}>
                                        {icon}

                                        {/* Tooltip */}
                                        <span className='capitalize absolute left-6 top-0 bg-black text-text px-3 py-1 rounded hidden group-hover:block whitespace-nowrap '>
                                            {key}
                                        </span>
                                    </Link>
                                </section>
                            );
                        })}
                    </section> : null
            }
            {/* Links Middle */}
            {
                linksMiddle ?
                    <section className='flex gap-y-2 flex-col'>
                        {linksMiddle.map((linkItem, index) => {
                            const key = Object.keys(linkItem)[0];
                            const [icon, url] = linkItem[key];
                            console.log(pathname, url, pathname == url)
                            return (
                                <section className='relative overflow-visible flex items-center'>
                                    <Link key={index} href={url} className={`relative mb-2  ${pathname == url ? "text-text/40" : "text-text/20"} hover:text-text/40 group transition`}>
                                        {icon}

                                        {/* Tooltip */}
                                        <span className='capitalize absolute left-6 top-0 bg-black text-text px-3 py-1 rounded hidden group-hover:block whitespace-nowrap '>
                                            {key}
                                        </span>
                                    </Link>
                                </section>
                            );
                        })}
                    </section> : null
            }

            {/* Links Bottom */}
            {
                linksBottom ?
                    <section className='flex gap-y-2 flex-col'>
                        {linksBottom.map((linkItem, index) => {
                            const key = Object.keys(linkItem)[0];
                            const [icon, url] = linkItem[key];
                            console.log(pathname, url, pathname == url)
                            return (
                                <section className='relative overflow-visible flex items-center'>
                                    <Link key={index} href={url} className={`relative mb-2  ${pathname == url ? "text-text/40" : "text-text/20"} hover:text-text/40 group transition`}>
                                        {icon}

                                        {/* Tooltip */}
                                        <span className='capitalize absolute left-6 top-0 bg-black text-text px-3 py-1 rounded hidden group-hover:block whitespace-nowrap '>
                                            {key}
                                        </span>
                                    </Link>
                                </section>
                            );
                        })}
                    </section> : null
            }


        </aside >
    );
};

export default IconSidebar;
