import React from "react";

export default function DemoGrid() {
    return (
        <div className="container">
            <div className="grid grid-cols-5 gap-3">
                <div className="bg-red-400">1</div>
                <div className="bg-green-400">2</div>
                <div className="bg-blue-400">3</div>
                <div className="bg-gray-400">4</div>
                <div className="bg-yellow-400">5</div>
            </div>
        </div>
    );
}
/**
 * 1rem: 16px
 * 1: 0.25rem
 * 2: 0.5rem
 * 3: 0.75rem
 */
