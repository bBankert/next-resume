'use client'

import { Provider } from "react-redux"
import React, { useRef } from "react"
import { AppStore, makeStore } from "./store"


export default function StoreProvider({
    children
}: {
    children: React.ReactNode
}) {
    const storeRef = useRef<AppStore | null>(null);


    storeRef.current ??= makeStore();

    return <Provider store={storeRef.current}>{children}</Provider>
}