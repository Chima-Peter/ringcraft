import { useColorContext } from "./hooks/colorContext"
import { AnimatePresence, motion } from "motion/react"
import FilterBar from "./components/filter_bar"
import ConfigureShank from "./components/configure_shank"
import ConfigureRing from "./components/configure_ring"
import ConfigureRingBox from "./components/configure_ring_box"


const FilterControl = () => {
    const { filterCount } = useColorContext()
    const filterList = [
        <FilterBar key={0} />,
        <ConfigureRing key={1} />,
        <ConfigureShank key={2} />,
        <ConfigureRingBox key={3} />
    ]
    return (
        <section className="h-[100vh] overflow-y-auto w-[300px] shadow-xl  bg-white text-black py-6 overflow-x-hidden">
            <AnimatePresence mode='wait'>
                <motion.div
                    key={filterCount}
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -100, opacity: 0 }}
                    transition={{ duration: 1, ease: 'easeInOut' }}>
                        {filterList[filterCount]}
                </motion.div>
            </AnimatePresence>
        </section>
    )
}

export default FilterControl