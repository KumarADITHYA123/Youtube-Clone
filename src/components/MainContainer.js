import React from 'react'
import ButtonList from './ButtonList'
import VIdeoContainer from './VIdeoContainer'

const MainContainer = () => {
  return (
      <div className='w-full flex align-middle flex-col'>
          <ButtonList />
          <VIdeoContainer/>
    </div>
  )
}

export default MainContainer