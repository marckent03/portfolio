import { services } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'
import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from './ui/GradientBg';

const Services = () => {
  return (
    <div className='py-5' id="services">
        <h1 className="text-black heading">
                Services {' '}
            <span className="text-blue-700">
                Offered
            </span>
        </h1>
        <div className="md:min-h-[80vh] lg:min-h-[95vh] sm:min-h-[50vh] mt-7 relative 
                        overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between
                        flex flex-col space-y-4 border border-black/[0.9] border-blue-700"
        style={{
            background: 'rgb(30,144,255)',
            backgroundColor: 'radial-gradient(circle, rgba(124,116,241,1) 0%, rgba(67,67,202,1) 35%, rgba(0,212,255,1) 100%)',
        }}>
            <BackgroundGradientAnimation>
                <div className='absolute z-50 flex text-white font-bold flex-col px-1 p-5 lg:p-10 md:h-full min-h-40'>
                    <h1 className='heading text-white font-serif font-bold text-justify text-lg lg:text-3xl max-w-96 z-10'>
                        Loan Program
                    </h1>
                    <p className="mt-2 font-sans font-medium text-white text-sm md:text-xs lg:text-base z-10 text-justify">
                        AmberCash PH Micro Lending Corp.'s LOAN PROGRAM is designed to offer a rapid and efficient lending solution within the 
                        LENDING and MICROFINANCE sector. With a service charge of 20%, the program provides borrowers the convenience of a 
                        two-month and three-week repayment period (60 days) without the need for any collateral. Through its Micro-financing 
                        approach, the corporation grants clients the flexibility to opt for the continuation or cessation of their membership 
                        with other financial institutions, contingent upon their ability to meet their obligations. The loan financing process 
                        commences with a minimum amount of Php5000 and extends up to a maximum of Php7,000, ensuring accessibility to a range of 
                        individuals seeking financial assistance. 
                    </p>
                    <p className="mt-2 font-sans font-medium text-white text-sm md:text-xs lg:text-base z-10 text-justify">
                        AmberCash PH not only offers its primary loan services but has also expanded its offerings to include another loan option/
                        Other Loan Service (weekly). This additional service allows borrowers to repay their loans over a span of 24 weeks 
                        (six (6) months), with 20% service charge. The minimum loan amount for this other loan program is set at Php5000.00, 
                        while maximum loan amount is Php40000.00. This cap enables us to responsibly provide adequate financial prudent lending 
                        practices. 
                    </p>
                    <h1 className='heading mt-2 text-white font-serif font-bold text-justify text-lg lg:text-2xl max-w-96 z-10'>
                        Members Capital Build-Up (MCBU)
                    </h1>
                    <ul className="mt-2 font-sans font-medium text-white text-sm md:text-xs lg:text-base z-10 text-justify">
                        <li>
                            •	MCBU is a micro savings of the client in which fixed and mandatory Php10.00 and deposit daily
                        </li>
                        <li>
                            •	Non-withdrawable but 100% refundable upon renewal of client’s loan
                        </li>
                        <li>
                            •	If client wishes not to refund his/her MCBU upon renewal, MCBU balance automatically forwarded to the next loan 
                            cycle 
                        </li>
                        <li>
                            •	As soon as the client desires to leave the program MCBU will be returned 100%
                        </li>
                    </ul>
                    <h1 className='heading mt-2 text-white font-serif font-bold text-justify text-lg lg:text-2xl max-w-96 z-10'>
                        Hospitalization Benefits
                    </h1>
                    <ul className="mt-2 font-sans font-medium text-white text-sm md:text-xs lg:text-base z-10 text-justify">
                        <li>
                            •	Ten (10) days confinement every cycle both client, primary beneficiaries and additional beneficiaries
                        </li>
                        <li>
                            •	Php300 per day confinement for 0-24 months membership
                        </li>
                        <li>
                            •	Php500 per day for client and primary beneficiary and Php400 per day for additional beneficiaries for 24 
                            months-50 months continuous membership
                        </li>
                        <li>   
                            •	Php800 per day for both client and primary beneficiaries and Php600 for additional beneficiaries over 51 months of 
                            continuous membership in the program
                        </li>
                        <li>
                            •	Plus, Death benefits: Financial and burial assistance for natural cause of death for both client and beneficiaries
                        </li>
                    </ul>
                </div>
            </BackgroundGradientAnimation>
        </div>

        <h1 className="text-black heading mt-10">
                Long Term Aim Of {' '}
            <span className="text-blue-700">
                Business and Objectives
            </span>
        </h1>
        <div className="md:min-h-[80vh] lg:min-h-[87vh] sm:min-h-[50vh] mt-7 relative 
                        overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none 
                        justify-between flex flex-col space-y-4 border border-black/[0.9] border-blue-700"
        style={{
            background: 'rgb(30,144,255)',
            backgroundColor: 'radial-gradient(circle, rgba(124,116,241,1) 0%, rgba(67,67,202,1) 35%, rgba(0,212,255,1) 100%)',
        }}>
            <BackgroundGradientAnimation>
                <div className='absolute z-50 flex text-white font-bold flex-col px-1 p-5 lg:p-10 md:h-full min-h-40'>
                    <h1 className='heading mt-2 text-white font-serif font-bold text-justify text-lg lg:text-2xl max-w-96 z-10'>
                        Business Aims:
                    </h1>
                    <p className="mt-2 font-sans font-medium text-white text-sm md:text-xs lg:text-base z-10 text-justify">
                        At its core, the underlying mission driving the micro lending business is nothing short of a profound ambition: 
                        the alleviation of poverty on a long-term horizon. This lofty aspiration echoes throughout every facet of the business's 
                        existence, setting the compass needle toward a trajectory of positive social change. The realization that financial inclusion 
                        can be a formidable weapon in the fight against poverty is the lodestar that guides this endeavor.
                    </p>
                    <p className="mt-2 font-sans font-medium text-white text-sm md:text-xs lg:text-base z-10 text-justify">
                        Central to this mission is the pivotal role that AmberCash PH Micro Lending Corp. plays in delivering much-needed financial
                        services to a demographic often relegated to the peripheries of the financial landscape. The unbanked and underbanked 
                        individuals, those whose access to traditional commercial bank services remains scant or non-existent, find solace and 
                        potential within the embrace of micro lending. AmberCash PH recognizes that these marginalized communities are teeming 
                        with untapped potential, with ambitious souls striving to break free from the shackles of limited resources. By extending 
                        a helping hand through tailored financial solutions, the corporation not only grants access but also imparts a renewed 
                        sense of agency. Each transaction carries the promise of a transformed reality – one where entrepreneurial dream can 
                        flourish, businesses can sprout and thrive, and the wheels of progress can begin to turn.
                    </p>
                    <p className="mt-2 font-sans font-medium text-white text-sm md:text-xs lg:text-base z-10 text-justify">
                        In essence, AmberCash PH's operations transcend mere monetary exchanges; they become vehicles of empowerment, capable of 
                        propelling individuals and communities toward a brighter future. As they take strides to bridge the gap between opportunity
                        and access, they foster an environment where financial stability is no longer a distant dream but a tangible reality. And 
                        in doing so, they inch ever closer to the ultimate goal of mitigating the grasp of poverty, one step at a time.
                    </p>
                    <h1 className='heading mt-2 text-white font-serif font-bold text-justify text-lg lg:text-2xl max-w-96 z-10'>
                        Objectives:
                    </h1>
                    <ul className="mt-2 font-sans font-medium text-white text-sm md:text-xs lg:text-base z-10 text-justify">   
                        <li>
                            1.	To improve the personal and social value of a poor client in her own family and in society by bearing involved in 
                            an income-generating activity.
                        </li>
                        <li>  
                            2.	To provide the enterprising poor a source of relatively cheap capital for investment.
                        </li>
                        <li>
                            3.	To alleviate poverty and unemployment by generating income and self-employment for the poor.
                        </li>
                        <li>
                            4.	To eliminate or reduce dependency on usurious money lenders.
                        </li>
                        <li>
                            5.	To develop a strong drive for self-sufficiency to clients through self-help, and self-employment.
                        </li>
                        <li>   
                            6.	To create an environment of competition among Lending investors and Microfinance Institution (MFI) that would 
                            encourage them to provide better services.
                        </li>
                        <li>
                            7.	To attain full cost recovery and added income for expansion of the Corporation’s program.
                        </li>
                    </ul>
                </div>
            </BackgroundGradientAnimation>
        </div>

        <h1 className="text-black heading mt-10">
            A section of {' '}
            <span className="text-blue-700">
                recent services
            </span>
        </h1>
        <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-2 mt-1">
            {services.map(({id, title, des, img, iconLists, link}) => (
                <div key={id} className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]">
                    <PinContainer title={link} href={link}>
                        <div className='relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h[40vh] h-[30vh] mb-10'>
                            <div className="relative w-full h-full overflow-hidden lg:rounded-3xl">
                                <img src="/bg.png" alt="bg-img"/>
                            </div>
                            <img 
                                src={img}
                                alt={title}
                                className="z-10 relative bottom-0"
                            />
                        </div>
                        <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                            {title}
                        </h1>
                        <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                            {des}
                        </p>
                        <div className="flex items-center justify-between mt-7 mb-3">
                            <div className="flex items-center">
                                {iconLists.map((icon, index) => (
                                    <div key={icon} className="border border-black/[0.9] rounded-full bg-white lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                                    style={{
                                        transform:`translateX(-${5 * index * 2} px)`}}>
                                        <img src={icon} alt={icon} className="p-2"/>
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-center items-center">
                                <p>Click this to see link</p><FaLocationArrow className='ms-3' color="#CBACF9"/>
                            </div>
                        </div>
                    </PinContainer>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Services