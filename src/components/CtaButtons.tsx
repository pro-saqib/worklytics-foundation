import React from 'react'
import { Button } from './ui/button'
import { Link } from 'react-router-dom'
import PhoneButton from './PhoneButton'
import { cn } from "@/lib/utils"
import { MessageCircle } from 'lucide-react'

const CtaButtons = ({
  containerClass = "",
  primaryClass = "",
  phoneButtonClass = "",
  phoneProps = {}
}) => {
  return (
    <div className={cn("flex flex-wrap gap-4 md:items-start ", containerClass)}>

      {/* Primary CTA */}
      <Button
        asChild
        className={cn(
          "bg-gradient-to-r from-blue-600 to-blue-400 hover:opacity-90 transition-opacity text-white rounded-full px-8 py-3 h-auto text-base font-semibold",
          primaryClass
        )}
      >
        <Link to="/contact">Let's talk!<MessageCircle className="w-6 h-6 fill-white" /></Link>
      </Button>

      {/* Phone CTA
      <PhoneButton
        className={phoneButtonClass}
        {...phoneProps}
      /> */}
    </div>
  )
}

export default CtaButtons
