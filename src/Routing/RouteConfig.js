import React, {useState} from 'react'

// Content pages
import HomeScreen from '../Screens/Pages/HomeScreen'
import ContactScreen from '../Screens/Pages/ContactScreen'

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
                path: "/contact",
                element: <ContactScreen />
            },
            {
                path: "*",
                element: <PageNotFound />
            }
        ]
    }
]