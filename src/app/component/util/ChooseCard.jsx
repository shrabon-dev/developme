import { motion } from 'framer-motion'
import React from 'react'

export default function ChooseCard({ icon, title, description,variant }) {
  return (
    <>
      <motion.div variants={variant} className="relative 
        after:w-[101%] after:rounded-lg after:opacity-50 after:h-[101%] after:z-[-5] hover:after:rotate-6 after:transition-all after:duration-300 after:ease-linear after:-translate-y-1/2 after:-translate-x-1/2 z-0 after:content-[''] after:bg-gradient-to-bl after:from-theme-main after:to-theme-bg before:rounded-lg after:absolute after:top-1/2 after:left-1/2 
        before:w-[100%] after:inset-2 before:inset-8  before:h-[100%] before:z-[-2] before:content-[''] before:bg-[#141414]  before:absolute before:top-0 before:left-0 
        card p-5 rounded-3xl flex flex-col items-start justify-start gap-4">
        <div className="icon">
          <span className="text-white text-7xl">{icon}</span>
        </div>
        <h5 className="text-lg font-sportB text-theme-light-text">{title}</h5>
        <p className="font-sportR text-base text-theme-sub-text">{description}</p>
      </motion.div>
    </>
  )
}
