// import { useState } from 'react'
import '../App.css'
import '../index.css'
import * as React from "react"

import { Button } from "@/components/ui/button"
import {
Card,
CardContent,
CardDescription,
CardHeader,
CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface AuthProps {
    setAllowed: React.Dispatch<React.SetStateAction<boolean>>
}

const PASSWORD = import.meta.env.VITE_REACT_APP_PASSWORD;

export function Auth({setAllowed}: AuthProps) {
    const [userInput, setUserInput] = React.useState('')
    const verify = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(PASSWORD);
        if (userInput === PASSWORD)
            setAllowed(true);
        setUserInput('');
    }
return (
    <Card className="w-full max-w-96">
    <CardHeader>
        <CardTitle>Login TAT admin page</CardTitle>
        <CardDescription>including created story and nickname</CardDescription>
    </CardHeader>
    <CardContent>
        <form typeof='submit' onSubmit={verify}>
        <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">password</Label>
            <Input value={userInput} id="name" type='password' onChange={(e)=>{setUserInput(e.target.value)}} />
            <Button className='ml-auto mr-0' onClick={verify}>confirm</Button>
            </div>
        </div>
        </form>
    </CardContent>
    </Card>
)
}
export default Auth;