import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'

import { THEME } from '../theme'

export const Icon = props => (
    <Ionicons
        {...props}
        size = {38}
        IconComponent = {Ionicons}
        color = {THEME.ACTIVE_COLOR}
    />
)

export const IconClub = props => (
    <MaterialIcons
        {...props}
        size = {44}
        IconComponent = {MaterialIcons}
        color = {THEME.MAIN_COLOR}
    />
)
export const IconClubCard = props => (
    <MaterialIcons
        {...props}
        size = {38}
        IconComponent = {MaterialIcons}
        
    />
)

export const MaterialIcon = props => (
    <MaterialIcons
        {...props}
        size = {30}
        IconComponent = {MaterialIcons}
        color = {'grey'}
    />
)
export const MaterialIconCard = props => (
    <MaterialIcons
        {...props}
        size = {30}
        IconComponent = {MaterialIcons}
        color = {'grey'}
    />
)
