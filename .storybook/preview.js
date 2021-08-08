import {addDecorator} from '@storybook/react'
import { ChakraProvider, CSSReset, Box } from "@chakra-ui/react"
import theme from '@chakra-ui/theme'

addDecorator(story => <ChakraProvider theme={theme}><CSSReset /><Box>{story()}</Box></ChakraProvider>)

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
}