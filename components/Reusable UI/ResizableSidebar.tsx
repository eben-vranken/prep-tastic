'use client';

import React from "react";
import { useState, useRef } from "react";

interface Props {
    children: React.ReactNode;
}

const ResizableSidebar: React.FC<Props> = ({ children }) => {
    const sidebarRef = useRef<HTMLDivElement>(null);
    const [isResizing, setIsResizing] = useState(false);
    const [sidebarWidth, setSidebarWidth] = useState(0);

    const startResizing = React.useCallback((_mouseDownEvent: any) => {
        setIsResizing(true);
    }, []);

    const stopResizing = React.useCallback(() => {
        setIsResizing(false);
    }, []);

    const resize = React.useCallback(
        (mouseMoveEvent: any) => {
            if (isResizing && sidebarRef.current != null) {
                setSidebarWidth(
                    mouseMoveEvent.clientX - sidebarRef.current.getBoundingClientRect().left
                )
            }
        },
        [isResizing]
    );

    console.log(sidebarWidth)

    React.useEffect(() => {
        window.addEventListener("mousemove", resize);
        window.addEventListener("mouseup", stopResizing);
        return () => {
            window.removeEventListener("mousemove", resize);
            window.removeEventListener("mouseup", stopResizing);
        };
    }, [resize, stopResizing]);

    return (
        // Sidebar Container
        <aside className={`bg-body brightness-125 h-full flex min-w-72 max-w-[50%] `}
            ref={sidebarRef}
            style={{ width: sidebarWidth, maxWidth: 750 }}>

            {/* Sidebar Contents */}
            <section className="w-full p-3">
                {children}
            </section>

            {/* Sidebar resizer */}
            <section className="cursor-col-resize w-[5px] border-r border-text/5 hover:bg-text/5 transition duration-200" onMouseDown={startResizing}>

            </section>
        </aside>
    )
}

export default ResizableSidebar;