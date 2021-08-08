import React from 'react'
import Input from './Input'

export default {
    title: 'Form/Input',
    component: Input,
}

export const Small = () => <Input size='small' placeholder='small input' />
export const Medium = () => <Input size='medium' placeholder='medium input' />
export const Large = () => <Input size='large' placeholder='large input' />

Small.storyName = 'Small Input'