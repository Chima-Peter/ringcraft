import { IoMdArrowRoundBack } from "react-icons/io";
import { FaBox } from "react-icons/fa";
import { useColorContext } from "../hooks/colorContext"


const ConfigureRingBox = () => {
    const { setFilterCount, setOuterColor } = useColorContext()

    const filters = [
        {
          text: "Outer Space",
          color: "#9B111E", // Ruby Red
        },
        {
          text: "Chinese Black",
          color: "#708090", // Slate Gray (matches Sapphire inspiration more closely for a muted tone)
        },
        {
          text: "Garnet",
          color: "#D4AF37", // Golden Beige (a rich beige inspired by gemstones)
        },
        {
          text: "Apple Red",
          color: "#FFB6C1", // Light Pink (softer rose shade)
        },
        {
          text: "Sunburst",
          color: "#E6E6FA", // Lavender color for Amethyst inspiration
        },
        {
          text: "Light Gray",
          color: "#F5F5DC", // Beige (more neutral for Pearl White inspiration)
        },
      ];

    const changeOuterColor = (color) => {
        setOuterColor(color)
    }
      

    const changeFocus = (index) => {
        setFilterCount(index)
    }


    return (
        <section className="flex gap-4 flex-col relative">
            <button  className="absolute -top-4 left-4 mb-10">
                <IoMdArrowRoundBack className="w-7 h-7" onClick={() => changeFocus(0)} />
            </button>
            <div className="flex flex-col gap-3 items-center w-[100%] my-6">
                <h1 className="text-xl font-semibold">
                    RingCraft Jewels
                </h1> 
                <h2 className="text-[16px] font-light px-2 text-center w-[250px]">
                    Ring Box
                </h2>
            </div>
            <section className="flex flex-col gap-0 text-black">
                {
                    filters.map((filter) => (
                        <button onClick={() => changeOuterColor(filter.color)} key={filter.header} className="flex justify-between w-[100%] items-center  p-3 px-6 hover:border-y hover:border-y-gray-300 cursor-pointer">
                            <h3 className="text-[16px] font-semibold">
                                {filter.text}
                            </h3>
                            <FaBox className="w-7 h-7" style={{ color: `${filter.color}` }} />
                        </button>
                    ))
                }
            </section>
        </section>
    )
}

export default ConfigureRingBox
