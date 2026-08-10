import "./i18n";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './globals.css'
import { router } from "./providers/router.tsx";
import { ApolloProvider } from "@apollo/client/react";
import { client } from "../shared/config";
import { ToasterProvider } from "./providers/toaster-provider.tsx";
import { ThemeProvider } from "./providers/theme-provider.tsx";
import { RouterProvider } from "react-router";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider>
            <ApolloProvider client={client}>
                <RouterProvider router={router}/>
                <ToasterProvider />
            </ApolloProvider>
        </ThemeProvider>
    </StrictMode>,
)
