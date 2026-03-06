import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";

export default function HomePage () {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await axios.get(
                    "http://127.0.0.1:8000/api/me",
                    { withCredentials: true }
                );

                setUser(response.data.user);
            } catch (e) {
                setUser(null);
            } finally {
                setLoading(false);
            }
        }

        checkAuth();
    },[user]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Header />
            {user ? (<h1>Welcome {user.name}!</h1>) : <LoginForm setUser={setUser} />}
        </div>
    );
}