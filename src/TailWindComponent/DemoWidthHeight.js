import React from "react";

export default function DemoWidthHeight() {
    return (
        <div className="container">
            <div className="bg-red-400 w-1/4">Width 25%</div>
            <div className="bg-purple-400 w-1/2 mt-4">Width 50%</div>
            <div className="w-screen h-screen bg-slate-400 mt-4">
                Width và Height theo kích thước của thiết bị
            </div>
        </div>
    );
}

/**
 * Để là số thì tính theo rem
 * Để là phân số thì tính theo %
 *
 * */
