import { motion, useMotionValue, useSpring } from 'framer-motion'
import React, { useState } from 'react'
import { distance } from "@popmotion/popcorn";




const grid = [
    [],
    [
        
        "Figma",
        "Node.js",
        "MongoDB",
        "Razorpay",
        "Express.js",
    ],
    [
        "React",
        "Css",
        "Html",
        "Framer Motion",
        "Tailwind Css",

    ], [

        "Git",
        "Javascript",
        "VS Code",
        "Next.js",

    ], [
        "GitHub",
        "Postman",
        "AJAX",
        "Context API",
        "RESTful APIs",
    ]
];
const gap = 0;

const Square = ({ active, setActive, colIndex, rowIndex, x, y }) => {
    const isDragging = colIndex === active.col && rowIndex === active.row;
    const diagonalIndex = (360 / 6) * (colIndex + rowIndex);
    const d = distance(
        { x: active.col, y: active.row },
        { x: colIndex, y: rowIndex }
    );
    const springConfig = {
        stiffness: Math.max(700 - d * 120, 0),
        damping: 20 + d * 5
    };
    const dx = useSpring(x, springConfig);
    const dy = useSpring(y, springConfig);

    return (
        <motion.div
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragTransition={{ bounceStiffness: 500, bounceDamping: 20 }}
            dragElastic={1}
            onDragStart={() => setActive({ row: rowIndex, col: colIndex })}
            style={{
                x: isDragging ? x : dx,
                y: isDragging ? y : dy,
                zIndex: isDragging ? 1 : 0
            }}
            animate={{ scale: 1.1 }}
            className="md:px-20 h-max px-4 cursor-pointer md:py-10 py-3 text-[#e8e8e3]/[.5] hover:text-[#e8e8e3] hover:bg-[#2c1c13] transition-all duration-100 font-semibold mb-[1px] bg-[#2c1c13]/[.9] md:text-4xl text-2xl"
        >
            {grid[rowIndex][colIndex]}
        </motion.div>
    );
};












const Trial = () => {

    const [active, setActive] = useState({ row: 0, col: 0 });
    const x = useMotionValue(0);
    const y = useMotionValue(0);


    return (
        <div className="flex justify-center items-center">
            <div className='w-[80vw] h-max flex justify-center items-center flex-wrap '>
                {grid.map((row, rowIndex) =>
                    row.map((_item, colIndex) => (
                        <Square
                            x={x}
                            y={y}
                            active={active}
                            setActive={setActive}
                            rowIndex={rowIndex}
                            colIndex={colIndex}
                            key={rowIndex + colIndex}
                        />
                    ))
                )}
            </div>
        </div>
    )
}

export default Trial