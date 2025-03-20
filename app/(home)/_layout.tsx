import { Stack } from 'expo-router'
import { PortalProvider, TamaguiProvider } from 'tamagui'
import { tamaguiConfig } from '../../tamagui.config'

export default function RootLayout() {

  return (
    <PortalProvider shouldAddRootHost>
      <TamaguiProvider config={tamaguiConfig}>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="datePickPage" />
          <Stack.Screen name="search" />
          <Stack.Screen name="animation" />
        </Stack>
      </TamaguiProvider>
    </PortalProvider>
  )
}