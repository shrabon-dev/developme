'use client'
import { motion } from 'framer-motion'
import React from 'react'

export default function PTextFadeUp({ text }) {
  const container = {
    hidden: {
      x: -10,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: .41,
        staggerChildren: 0.01,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, scale: 0},
    visible: { opacity: 1, scale: 1, transition: {
            duration:.5,
        } },
  }

  const txtToArray = text.split('')

  return (
    <motion.span
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="inline-block"
    >
      {txtToArray.map((letter, index) => (
        <span key={index} className="inline-block">
          <motion.span
            variants={item}
            className="inline-block"
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        </span>
      ))}
    </motion.span>
  )
}
