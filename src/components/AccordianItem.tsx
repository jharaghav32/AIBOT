import React from 'react'
import Accordion from './Accordian'

const AccordianItem = () => {
  return (
    <div className="w-[100vw] md:w-[60vw]  p-4">
    <Accordion title="Section 1">
      Content for Section 1
    </Accordion>
    <Accordion title="Section 2">
      Content for Section 2
    </Accordion>
    <Accordion title="Section 3">
      Content for Section 3
    </Accordion>
  </div>
  )
}

export default AccordianItem