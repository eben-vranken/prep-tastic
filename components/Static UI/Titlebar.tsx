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
        <nav className="titlebar w-full h-8 bg-text/[2.5%] border-b border-text/10 flex items-center justify-between " data-tauri-drag-region>
            <h1 className="text-text/50 text-xs font-bold pointer-events-none flex items-center gap-x-2 ml-2">
                {/* Icon */}
                <CalendarDots size={20} className="text-primary" />

                {/* Title*/}
                <span>
                    Plan-Tastic
                </span>
            </h1>

            {/* Titlebar controls */}
            <section className="flex space-x-2 ">
                <section ref={minimizeRef} id="titlebar-minimize">
                    <Minus size={17.5} weight="bold" className="w-full h-full p-2 text-green-500 hover:bg-green-700 hover:text-text cursor-pointer" />
                </section>
                <section ref={maximizeRef} id="titlebar-maximize">
                    <Rectangle size={17.5} weight="bold" className="w-full h-full text-yellow-500 p-2 hover:bg-yellow-600 hover:text-text cursor-pointer" />
                </section>
                <section ref={closeRef} id="titlebar-close">
                    <X size={17.5} weight="bold" className="w-full h-full text-red-500 p-2 hover:bg-red-700 hover:text-text cursor-pointer" />
                </section>
            </section>
        </nav>
    );
};

export default Titlebar;
