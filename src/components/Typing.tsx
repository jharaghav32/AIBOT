import React from 'react'
//this is the page where we will show the typing animation
const Typing = () => {
  return (
    <>
    <div className="typing-animation">
    <div className="typing-dot dark:bg-white" style={{'--delay':'0.2s'} as React.CSSProperties}>
    </div>
    <div className="typing-dot dark:bg-white" style={{'--delay':'0.3s'}as React.CSSProperties}></div>
    <div className="typing-dot dark:bg-white" style={{'--delay':'0.4s'} as React.CSSProperties}></div>
</div>
</>
  )
}

export default Typing