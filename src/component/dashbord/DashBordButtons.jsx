import React from "react";
import { Button } from "@material-tailwind/react";

// Custom styled button with a neon effect using Tailwind CSS classes
const NeonButton = ({ children }) => {
    return (
        <Button
            className="
                text-white
                rounded-lg
                text-lg
                px-5 py-2.5
                uppercase
                shadow-[0_0_10px_#00ffcc,0_0_20px_#00ffcc,0_0_30px_#00ffcc]
                border-2
                border-[#00ffcc]
                bg-[#053480]
                hover:bg-[#0fd7de]
                hover:shadow-[0_0_20px_#00ff99,0_0_40px_#00ff99,0_0_60px_#00ff99]
                transition-all
                duration-300
                ease-in-out
            "
        >
            {children}
        </Button>
    );
};

export const DashBordButtons = ({ buttonText, justifyContent }) => {
    return (
        <div className={`flex ${justifyContent} px-4 items-center`}>
            <NeonButton>{buttonText}</NeonButton>
        </div>
    );
};
