import { useState, useEffect } from "react";
import LoginForm from './components/LoginForm.js';
import HomePage from "./pages/HomePage.js";
import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://localhost:8000";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
        try {
            const token = localStorage.getItem("token");
            const response = await axios.get("/api/me", {
              headers: {
                Authorization: `Bearer ${token}`,
              }
            });
            setUser(response.data.user);
        } catch (e) {
            setUser(null);
        } finally {
            setLoading(false);
        }
    }

    checkAuth();
},[]);

  if (loading) return <p>Loading...</p>;

  if (!user) {
    return <LoginForm setUser={setUser} />;
  }

  return <HomePage user={user} setUser={setUser} loading={loading}/>;
}

export default App;