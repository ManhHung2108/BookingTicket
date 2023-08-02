import React from "react";

export default function DemoFlex() {
    return (
        <div className="w-screen h-screen bg-purple-300">
            <div className="flex bg-green-400 h-1/2 w-full flex-row justify-start items-center flex-wrap gap-4">
                <div className="flexItem h-10 w-1/4 bg-yellow-300"></div>
                <div className="flexItem h-10 w-1/4 bg-red-300"></div>
                <div className="flexItem h-10 w-1/4 bg-blue-300"></div>
            </div>
        </div>
    );
}
