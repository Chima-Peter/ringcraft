import { motion } from 'motion/react'
const Loading = () => {
  return (
    <section className='w-[100vw] flex items-center justify-center backdrop-blur-md min-h-[100vh]'>
        <motion.div className='w-10 h-10 border-x-2 rounded-full border-t-2 border-blue-400 animate-spin'>

        </motion.div>
    </section>
  )
}

export default Loading