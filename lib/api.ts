import axios from "axios";

export const api = axios.create({
    baseURL: "https://cestom-digital-backend.up.railway.app/api",
    withCredentials: true,
    headers: { 
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
});

export async function registerUser(data: {
    username: string;
    password: string;
    email: string;
    nom: string;
    prenoms: string;
    city_id: string;
    cndp_consent: boolean;
}) {
    try {
        const response = await api.post("/auth/register", data);
        return response.data;
    } catch (error) {
        console.error("Error during registration:", error);
        throw error;
    }
}

export async function loginUser(data: { username: string; password: string }) {
    try {
        const response = await api.post("/auth/login", data, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error during login:", error);
        throw error;
    }
}
