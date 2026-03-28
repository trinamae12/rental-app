import { useState, useEffect } from "react";
import Header from '../components/Header.js';
import axios from "axios";

export default function HomePage ({user, setUser, loading }) {

    const logout = async () => {
        await axios.post("http://localhost:8000/logout", {}, {
            withCredentials: true
        });

        setUser(null);
    }

    return (
        <div>
            <Header />
            <h1>Welcome  {user.name}!</h1>
        </div>
    );
}