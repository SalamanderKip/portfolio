import React from 'react'

// Content pages
import HomeScreen from '../Screens/Pages/HomeScreen'
import AboutScreen from '../Screens/Pages/AboutScreen'

// Error pages
import PageNotFound from '../Screens/Error/PageNotFound'

export const RouteConfig = [
    {
        path: "/",
        children: [
            {
                index: true,
                element: <HomeScreen />
            },
            {
                path: "/about",
                element: <AboutScreen />
            },
            {
                path: "*",
                element: <PageNotFound />
            }
        ]
    }
]