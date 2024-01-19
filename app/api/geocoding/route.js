import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(userInput) {
    const APIKEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
    try {
        const response = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${userInput}&limit=5&appid=${APIKEY}`);
        const data = response.data[0] ? response.data[0] : null;
        
        if (!data) {
            return undefined;
        }

        const lat = data.lat;
        const lon = data.lon;

        try {
            const weatherResponse = await axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${APIKEY}&units=metric`);
            
            return weatherResponse;
        } catch (error) {
            console.error(error);
            return NextResponse.error();
        }
    } catch (error) {
        console.error(error);
        return NextResponse.error();
    }
}