import axios from "axios";
import { UserRegistration } from "./types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "https://cestom-digital-backend.up.railway.app/api";

// Configure the base URL for the API
export const api = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
});

export async function registerUser(data: UserRegistration) {
    try {
        const response = await api.post("/auth/register", data);
        return response.data;
    } catch (error) {
        console.error("Error during registration:", error);
        throw error;
    }
}

// Function to log in a user
export async function loginUser({ username, password }: { username: string; password: string }) {
    try {
        const response = await api.post("/auth/login", { username, password });
        console.log("Login successful:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error during login:", error);
        throw error;
    }
}
