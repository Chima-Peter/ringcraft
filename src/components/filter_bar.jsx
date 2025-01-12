import { IoDiamondSharp } from "react-icons/io5";
import { FaRegCircle } from "react-icons/fa";
import { GiRingBox } from "react-icons/gi";

import { useColorContext } from "../hooks/colorContext"


const FilterBar = () => {
    const { setFilterCount } = useColorContext()

    const filters = [
        {
            icon: <IoDiamondSharp className="w-8 h-8" />,
            header: "Center Oval",
            paragraph: "Diamond in Center"
        },
        {
            icon: <FaRegCircle className="w-8 h-8" />,
            header: "Shank",
            paragraph: "Ring's Shank Material"
        },
        {
            icon: <GiRingBox className="w-8 h-8" />,
            header: "Ring's Box",
            paragraph: "Ring's Box Material"
        },
    ]

    const openFilter = (index) => {
        setFilterCount(index)
    }


    return (
        <section className="flex gap-4 flex-col">
            <div className="flex flex-col gap-3 items-center w-[100%] my-6">
                <h1 className="text-xl font-semibold">
                    RingCraft Jewels
                </h1> 
                <h2 className="text-[16px] font-light px-2 text-center w-[250px]">
                    Customize your ring to your preferences
                </h2>
            </div>
            <section className="flex flex-col gap-6 mt-4 text-black">
                {
                    filters.map((filter, index) => (
                        <button onClick={() => openFilter(index + 1)} key={filter.header} className="flex justify-between w-[100%] items-center p-4 px-6 hover:border-y border-gray-300 cursor-pointer">
                            <div className="flex gap-4 items-center">
                                {filter.icon}
                                <div className="flex flex-col gap-0">
                                    <h3 className="text-[18px] font-bold">
                                        {filter.header}
                                    </h3>
                                    <p className="text-[14px]">
                                        {filter.paragraph}
                                    </p>
                                </div>
                            </div>
                        </button>
                    ))
                }
            </section>
        </section>
    )
}

export default FilterBar
