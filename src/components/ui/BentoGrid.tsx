"use client"

import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradientBg";
import { Globe } from "./Globe";
import { GlobeDemo } from "../GlobeDemo";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import Lottie from "react-lottie";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  icon,
  header,
  id,
  img,
  spareImg,
  titleClassName,
  imgClassName,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  icon?: React.ReactNode;
  header?: string | React.ReactNode;
  id?: number;
  img?: string;
  spareImg?: string;
  titleClassName?: string;
  imgClassName?:  string;
}) => {
    const [copied, setCopied] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText('alfarhama04@gmail.com');
        
        setCopied(true);
    }

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-black/[0.9] border-blue-700",
        className
      )}
      style={{
        background: 'rgb(30,144,255)',
        backgroundColor: 'radial-gradient(circle, rgba(124,116,241,1) 0%, rgba(67,67,202,1) 35%, rgba(0,212,255,1) 100%)',
      }}
    >
      <div className={`${id === 6 && 'flex justify-center'} h-full`}>
        <div className="w-full h-full absolute">
            {img && (
                <img 
                    src={img}
                    alt={img}
                    className={cn(imgClassName, 'object-cover objecet-center')}
                />
            )}
        </div>
        <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
            {spareImg && (
                <img 
                    src={spareImg}
                    alt={spareImg}
                    className={'object-cover objecet-center w-full h-full'}
                />
            )}
        </div>
        {id === 6 && (
            <BackgroundGradientAnimation>
                <div className="absolute z-50 flex items-center justify-center text-white font-bold"/>
            </BackgroundGradientAnimation>
        )}
        {id === 1 && (
            <BackgroundGradientAnimation>
                <div className="absolute z-50 flex items-center justify-center text-white font-bold"/>
            </BackgroundGradientAnimation>
        )}
        {id === 5 && (
            <BackgroundGradientAnimation>
                <div className="absolute z-50 flex items-center justify-center text-white font-bold"/>
            </BackgroundGradientAnimation>
        )}

        <div className={cn(
            titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-1 p-5 lg:p-10'
        )}>
            <div className="font-serif font-bold text-lg lg:text-3xl max-w-96 z-10">
                {title}
            </div>
            <div className="font-sans font-medium mt-2 text-white text-sm md:text-xs lg:text-base z-10 text-justify">
                {description}
            </div>
        {id === 2 && <GlobeDemo />}
        {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
                <div className="flex flex-col gap-1 mb-9 lg:gap-4">
                    {['Luzon', 'Visayas', 'Mindanao'].map((item) => (
                        <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-30 lg:opacity-100 rounded-lg text-center bg-[#212968]">
                            {item}
                        </span>
                    ))}
                    <span className="py-5 px-3 rounded-lg text-center bg-[#212968]"/>
                </div>
                <div className="flex flex-col gap-1 mb-7 lg:gap-4">
                <span className="py-4 px-3 rounded-lg text-center bg-[#212968]"/>
                    {['Quezon', 'Cebu', 'Zamboanga'].map((item) => (
                        <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#212968]">
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        )}
        {id === 6 && (
            <div className="mt-5 relative ">
                <div className={`absolute -bottom-5 right-0`}>
                    <Lottie options={{
                        loop: copied,
                        autoplay: copied,
                        animationData,
                        rendererSettings: {
                            preserveAspectRatio: 'xMidyMid slice',
                        }
                    }} 
                    />
                </div>
                <MagicButton 
                    title={copied ? 'Email Copied' : 'Copy this Email'}
                    icon={<IoCopyOutline />}
                    position="left"
                    otherClasses="!bg [#161a31]"
                    handleClick={handleCopy}
                />
            </div>
        )}
        </div>
      </div>
    </div>
  );
};
