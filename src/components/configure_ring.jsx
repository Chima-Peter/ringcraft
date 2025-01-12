import { IoMdArrowRoundBack } from "react-icons/io";
import { GrDiamond } from "react-icons/gr";
import { useColorContext } from "../hooks/colorContext"


const ConfigureRing = () => {
    const { setFilterCount, setShankColor } = useColorContext()

    const filters = [
        {
          text: "Ruby Red",
          color: "#E0115F", // Ruby Red
        },
        {
          text: "Sapphire Blue",
          color: "#0F52BA", // Sapphire Blue
        },
        {
          text: "Emerald Green",
          color: "#50C878", // Emerald Green
        },
        {
          text: "Rose Pink",
          color: "#FF66CC", // Rose Pink
        },
        {
          text: "Amethyst Purple",
          color: "#9966CC", // Amethyst Purple
        },
        {
          text: "Pearl White",
          color: "#F8F8FF", // Pearl White
        },
        {
          text: "Citrine Yellow",
          color: "#E4D00A", // Citrine Yellow
        },
    ]

    const changeShankColor = (color) => {
        setShankColor(color)
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
                    Oval
                </h2>
            </div>
            <section className="flex flex-col gap-0 text-black">
                {
                    filters.map((filter) => (
                        <button onClick={() => changeShankColor(filter.color)} key={filter.header} className="flex justify-between w-[100%] items-center  p-3 px-6 hover:border-y hover:border-y-gray-300 cursor-pointer">
                            <h3 className="text-[16px] font-semibold">
                                {filter.text}
                            </h3>
                            <GrDiamond className="w-7 h-7" style={{ color: `${filter.color}` }} />
                        </button>
                    ))
                }
            </section>
        </section>
    )
}

export default ConfigureRing
