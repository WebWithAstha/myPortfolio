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
        "Redux",
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
            dragTransition={{ bounceStiffness: 500, bounceDamping: 30 }}
            dragElastic={1}
            onDragStart={() => setActive({ row: rowIndex, col: colIndex })}
            style={{
                x: isDragging ? x : dx,
                y: isDragging ? y : dy,
                zIndex: isDragging ? 1 : 0
            }}
            transition={{duration:.1}}
            // animate={{ scale: 1.1 }}
            className="md:px-20 h-max px-4 cursor-pointer md:py-8 py-2 rounded-full text-purple-400 font-semibold mb-2 border mr-2 md:text-[2vw] text-[4vw]"
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
        <div className="flex px-8 md:px-20 items-center">
            <div className='w-[80vw] h-max flex items-center flex-wrap '>
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