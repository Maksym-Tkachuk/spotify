import React, { ReactNode } from 'react'

import { ActiveBorder, TabContainer } from 'src/components/TabButton/styles'

type TabButtonProps = {
  activeIcon: ReactNode
  icon: ReactNode
  focused: boolean
}

const TabButton = ({ activeIcon, icon, focused }: TabButtonProps): JSX.Element => {
  return (
    <TabContainer>
      {focused && <ActiveBorder />}

      {focused ? activeIcon : icon}
    </TabContainer>
  )
}

export default TabButton
