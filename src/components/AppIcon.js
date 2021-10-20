import React from 'react'
import { Ionicons } from '@expo/vector-icons'

import { THEME } from '../theme'

export const AppIcon = props => (
    <Ionicons
        {...props}
        size = {38}
        IconComponent = {Ionicons}
        color = {THEME.MAIN_COLOR}
    />
)
