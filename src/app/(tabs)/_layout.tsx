/*
 * @Author: xt-guiyi 1661219752@qq.com
 * @Date: 2024-10-08 21:33:46
 * @LastEditors: xt-guiyi 1661219752@qq.com
 * @LastEditTime: 2024-10-13 18:03:09
 * @Description: 
 */

import { FontAwesome } from "@expo/vector-icons";
import AntDesign from '@expo/vector-icons/AntDesign'
import { Tabs } from "expo-router";
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '@/src/store'
import { setToken } from '@/src/store/user'


export default function TabsLayout() {
  return (
		<Tabs screenOptions={{ headerShown: false }}>
			<Tabs.Screen
				name='index'
				options={{
					title: '首页',
					tabBarIcon: ({ color }) => <AntDesign size={28} name='home' color={color} />,
				}}
			/>
			<Tabs.Screen
				name='discover'
				options={{
					title: '发现',
					tabBarIcon: ({ color }) => <AntDesign size={28} name='find' color={color} />,
				}}
			/>
			<Tabs.Screen
				name='me'
				options={{
					title: '我的',
					tabBarIcon: ({ color }) => <AntDesign size={28} name='user' color={color} />,
				}}
			/>
		</Tabs>
	)
}