import React from 'react'

const Container = ({children}) => {
  return (
    <div className="flex max-w-7xl mx-auto min-h-screen ">
        {children}
    </div>
  )
}

export default Container