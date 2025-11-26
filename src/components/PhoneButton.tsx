import React from 'react'
import { Phone } from "lucide-react";

const PhoneButton = ({
  href = "tel:+44 7900 925 247",
  number = "+44 7900 925 247",
  className = "",
  iconClassName = "",
  textClassName = ""
}) => {
  return (
    <a
      href={href}
      className={`inline-flex items-center border border-white/50 hover:bg-white/10 rounded-full justify-center gap-2  hover:bg-white/10 rounded-full text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity ${className}`}
    >
      <Phone size={20} className={iconClassName} />
      <span className={`font-semibold ${textClassName}`}>{number}</span>
    </a>
  )
}

export default PhoneButton
