import React from 'react'

const ThemeContext = React.createContext()

export default ThemeContext;

const { Consumer, Provider } = ThemeContext;

export const ThemeConsumer = Consumer
export const ThemeProvider = Provider