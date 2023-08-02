import React from "react";
import "./Custom.css";

export default function CustomCssDemo() {
    return (
        <div className="container mt-1">
            <article className="bg-gray-500 p-5 shadow-md">
                <p className="text-2xl text-white">Responsive</p>
                <p className="content">Nội dung....</p>
                <button className="p-3 bg-success-200 animation-sacle">
                    Hover
                </button>
            </article>
        </div>
    );
}
