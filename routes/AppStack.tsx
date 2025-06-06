import { Tabs } from "expo-router";
import React from "react";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const AppStack: React.FC = () => {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'white',
            tabBarStyle: { height: 60 },
            tabBarLabelStyle: { marginBlock: 'auto' },
            tabBarIconStyle: { marginBlock: 'auto' },
            tabBarActiveBackgroundColor: '#07476D',
            tabBarInactiveBackgroundColor: '#19A1CB',
            headerShown: false
        }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Cộng đồng',
                    tabBarIcon: () => <MaterialCommunityIcons name="google-circles-communities" size={24} color="white" />,
                }}
            />
            <Tabs.Screen
                name="activity"
                options={{
                    title: 'Hoạt động',
                    tabBarIcon: () => <MaterialCommunityIcons name="shoe-print" size={24} color="white" />,
                }}
            />
            <Tabs.Screen
                name="record"
                options={{
                    title: 'Ghi lại',
                    tabBarIcon: () => <MaterialCommunityIcons name="record-circle-outline" size={24} color="white" />,
                }}
            />
            <Tabs.Screen
                name="archivement"
                options={{
                    title: 'Thành tích',
                    tabBarIcon: () => <MaterialCommunityIcons name="trophy-variant-outline" size={24} color="white" />,
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Hồ sơ',
                    tabBarIcon: () => <MaterialCommunityIcons name="account-outline" size={24} color="white" />,
                }}
            />
        </Tabs>
    );
};

export default AppStack;