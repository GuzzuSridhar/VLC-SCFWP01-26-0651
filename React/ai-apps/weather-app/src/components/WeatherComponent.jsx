import { useEffect, useState } from "react";

const cities = [
  {
    name: "London",
    latitude: 51.5072,
    longitude: -0.1276,
  },
  {
    name: "New York",
    latitude: 40.7128,
    longitude: -74.006,
  },
  {
    name: "Tokyo",
    latitude: 35.6762,
    longitude: 139.6503,
  },
  {
    name: "Hyderabad",
    latitude: 17.385,
    longitude: 78.4867,
  },
  {
    name: "Mumbai",
    latitude: 19.076,
    longitude: 72.8777,
  },
];

function WeatherComponent() {
  const [selectedCity, setSelectedCity] = useState(cities[0]);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async (city) => {
    setLoading(true);

    try {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${city.latitude}&longitude=${city.longitude}&current_weather=true`,
      );

      const data = await response.json();

      setWeather(data.current_weather);
    } catch (error) {
      console.error("Error fetching weather:", error);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchWeather(selectedCity);
  }, [selectedCity]);

  return (
    <div className="weather-page">
      <style>
        {`
          .weather-page {
            min-height: 100vh;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), 
                        url('https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?q=80&w=1974&auto=format&fit=crop') no-repeat center center fixed;
            background-size: cover;
            font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            margin: 0;
          }
          .weather-container {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(15px);
            -webkit-backdrop-filter: blur(15px);
            border-radius: 30px;
            padding: 3rem;
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
            border: 1px solid rgba(255, 255, 255, 0.2);
            width: 90%;
            max-width: 450px;
            color: white;
            text-align: center;
          }
          .weather-container h2 {
            margin: 0 0 1.5rem 0;
            font-weight: 300;
            letter-spacing: 3px;
            text-transform: uppercase;
            font-size: 1.2rem;
          }
          .city-select {
            width: 100%;
            padding: 15px;
            border-radius: 15px;
            border: 1px solid rgba(255, 255, 255, 0.3);
            background: rgba(255, 255, 255, 0.1);
            color: white;
            font-size: 1.1rem;
            margin-bottom: 2rem;
            cursor: pointer;
            outline: none;
            appearance: none;
            text-align: center;
          }
          .city-select option {
            background: #34495e;
            color: white;
          }
          .weather-card h3 {
            font-size: 2.2rem;
            margin-bottom: 0.5rem;
            font-weight: 600;
          }
          .temp-display {
            font-size: 5rem;
            font-weight: 100;
            margin: 1rem 0 2rem 0;
          }
          .details-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1.2rem;
            margin-top: 2rem;
          }
          .detail-item {
            background: rgba(255, 255, 255, 0.08);
            padding: 1.2rem;
            border-radius: 20px;
            transition: background 0.3s ease;
          }
          .detail-item:hover {
            background: rgba(255, 255, 255, 0.15);
          }
          .detail-label {
            display: block;
            font-size: 0.7rem;
            text-transform: uppercase;
            opacity: 0.7;
            margin-bottom: 0.5rem;
            letter-spacing: 1px;
          }
          .detail-value {
            font-size: 1.2rem;
            font-weight: 500;
          }
          .loading-text {
            font-size: 1.1rem;
            font-weight: 300;
            padding: 3rem;
            font-style: italic;
          }
        `}
      </style>

      <div className="weather-container">
        <h2>Weather Forecast</h2>

        <select
          className="city-select"
          value={selectedCity.name}
          onChange={(e) => {
            const city = cities.find((c) => c.name === e.target.value);
            setSelectedCity(city);
          }}
        >
          {cities.map((city) => (
            <option key={city.name} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>

        {loading ? (
          <p className="loading-text">Synchronizing atmospheric data...</p>
        ) : (
          weather && (
            <div className="weather-card">
              <h3>{selectedCity.name}</h3>
              <div className="temp-display">{weather.temperature}°C</div>

              <div className="details-grid">
                <div className="detail-item">
                  <span className="detail-label">Wind Velocity</span>
                  <span className="detail-value">
                    {weather.windspeed} <small>km/h</small>
                  </span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Condition Code</span>
                  <span className="detail-value">{weather.weathercode}</span>
                </div>
                <div className="detail-item" style={{ gridColumn: "span 2" }}>
                  <span className="detail-label">Last Observation</span>
                  <span className="detail-value">
                    {new Date(weather.time).toLocaleString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                      day: "numeric",
                      month: "short",
                    })}
                  </span>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default WeatherComponent;
