/*
 * @Author: xt-guiyi 1661219752@qq.com
 * @Date: 2024-10-08 22:34:53
 * @LastEditors: xt-guiyi 1661219752@qq.com
 * @LastEditTime: 2024-10-13 18:38:48
 * @Description:
 */
import { Stack } from 'expo-router'

export default function RootLayout() {
	return (
		<Stack>
			<Stack.Screen name='welcome' options={{ headerShown: false }} />
		</Stack>
	)
}
