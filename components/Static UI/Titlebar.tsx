"use client"

import { CalendarDots, Minus, Rectangle, Square, X } from "@phosphor-icons/react/dist/ssr";
import { FunctionComponent, useEffect, useRef } from "react";
import { appWindow } from '@tauri-apps/api/window';

const Titlebar: FunctionComponent = () => {
    const minimizeRef = useRef<HTMLDivElement>(null);
    const maximizeRef = useRef<HTMLDivElement>(null);
    const closeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const minimizeButton = minimizeRef.current;
        const maximizeButton = maximizeRef.current;
        const closeButton = closeRef.current;

        const handleMinimize = () => appWindow.minimize();
        const handleMaximize = () => appWindow.toggleMaximize();
        const handleClose = () => appWindow.close();

        if (minimizeButton) {
            minimizeButton.addEventListener('click', handleMinimize);
        }
        if (maximizeButton) {
            maximizeButton.addEventListener('click', handleMaximize);
        }
        if (closeButton) {
            closeButton.addEventListener('click', handleClose);
        }

        // Clean up event listeners on component unmount
        return () => {
            if (minimizeButton) {
                minimizeButton.removeEventListener('click', handleMinimize);
            }
            if (maximizeButton) {
                maximizeButton.removeEventListener('click', handleMaximize);
            }
            if (closeButton) {
                closeButton.removeEventListener('click', handleClose);
            }
        };
    }, []);

    return (
        <nav className="titlebar w-full h-10 bg-text/[2.5%] border-b border-text/10 flex items-center px-2 justify-between" data-tauri-drag-region>
            <h1 className="text-text/50 font-bold pointer-events-none flex items-center gap-x-2">
                {/* Icon */}
                <CalendarDots size={25} className="text-primary" />

                {/* Title*/}
                <span>
                    Plan-Tastic
                </span>
            </h1>

            {/* Titlebar controls */}
            <section className="flex space-x-2">

                <section ref={minimizeRef} id="titlebar-minimize">
                    <Minus size={20} weight="bold" className="text-green-500 hover:text-green-700 cursor-pointer" alt="minimize" />
                </section>
                <section ref={maximizeRef} id="titlebar-maximize">
                    <Rectangle size={20} weight="bold" className="text-yellow-500 hover:text-yellow-700 cursor-pointer" alt="minimize" />
                </section>
                <section ref={closeRef} id="titlebar-close">
                    <X size={20} weight="bold" className="text-red-500 hover:text-red-700 cursor-pointer" alt="minimize" />
                </section>
            </section>
        </nav>
    );
};

export default Titlebar;
