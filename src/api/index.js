const baseURL = 'https://api.weatherapi.com/v1/current.json?key=b0ede313e01c4b9aa6471705250301';

export const getWeatherDataForCity = async(city) => {
    const response = await fetch(`${baseURL}&q=${city}&aqi=yes `);
    return await response.json();
}

export const getWeatherDataForLocation = async(lat, lon) => {
    const response = await fetch(`${baseURL}&q=${lat},&q${lon}&aqi=yes `);
    return await response.json();
}