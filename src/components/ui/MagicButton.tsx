import React from 'react'

const MagicButton = ({
    title, icon, position, handleClick, otherClasses, img
}: {
    title?: string;
    icon?: React.ReactNode;
    position?: string;
    handleClick?: () => void;
    otherClasses?: string;
    img?: string;
}) => {
  return (
        <button className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-black-100 to-blue-700 rounded-lg" />
                <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent" onClick={handleClick}>
                {position === 'left' && icon}
                {title}
                {position === 'right' && icon}
            </div>
        </button>
  )
}

export default MagicButton
