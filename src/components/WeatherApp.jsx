import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const WeatherContainer = styled.div`
  font-family: 'Arial', sans-serif;
  display: flex;
  `;

const WeatherInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 4.5vw;
  font-weight: bold;
  color: #ffe;
  `;



const ImageAndTemperature = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  
  `;


const Descrption = styled.p`
  font-family: 'Arial', sans-serif;
  font-size: 2.5vw;
  color: yellow;
  font-weight: bold;
`;

const WeatherImage = styled.img`
  width: 7vw;
  `;

const LoadingText = styled.p`
  font-size: 16px;
  color: #888;
`;


const translateWeatherDescription = (description) => {
  // Mapeamento mais flexível usando um objeto de palavras-chave
  const translations = {

    'light intensity drizzle': 'chuvisco de intensidade leve',
   
    'thunderstorm with light rain': 'Tempestade com chuva fraca',
    'thunderstorm with rain': 'Tempestade com chuva',
    'thunderstorm with heavy rain': 'Tempestade com chuva intensa',
    'light thunderstorm': 'Tempestade leve',
    'thunderstorm': 'Tempestade',
    'heavy thunderstorm': 'Tempestade intensa',
    'ragged thunderstorm': 'Tempestade irregular',
    'thunderstorm with light drizzle': 'Tempestade com chuvisco leve',
    'thunderstorm with drizzle': 'Tempestade com chuvisco',
    'thunderstorm with heavy drizzle': 'Tempestade com chuvisco intenso',

    
    'drizzle': 'Chuvisco',
    'heavy intensity drizzle': 'Chuvisco de intensidade forte',
    'light intensity drizzle rain': 'Chuva de chuvisco de intensidade leve',
    'drizzle rain': 'Chuva de chuvisco',
    'heavy intensity drizzle rain': 'Chuva de chuvisco de intensidade forte',
    'shower rain and drizzle': 'Chuva e chuvisco',
    'heavy shower rain and drizzle': 'Chuva intensa e chuvisco',
    'shower drizzle': 'Chuva intensa com chuvisco',

    'light rain': 'Chuva leve',
    'moderate rain': 'Chuva moderada',
    'heavy intensity rain': 'Chuva intensa',
    'very heavy rain': 'Chuva muito intensa',
    'extreme rain': 'Chuva extrema',
    'freezing rain': 'Chuva congelante',
    'light intensity shower rain': 'Chuva de intensidade leve',
    'shower rain': 'Chuva',
    'heavy intensity shower rain': 'Chuva de intensidade forte',
    'ragged shower rain': 'Chuva irregular',

    'light snow': 'Neve leve',
    'snow': 'Neve',
    'heavy snow': 'Neve intensa',
    'sleet': 'Aguaceiros de neve',
    'light shower sleet': 'Aguaceiros leves de neve',
    'shower sleet': 'Aguaceiros de neve',
    'light rain and snow': 'Neve misturada com chuva leve',
    'rain and snow': 'Neve misturada com chuva',
    'light shower snow': 'Aguaceiros leves de neve',
    'shower snow': 'Aguaceiros de neve',
    'heavy shower snow': 'Aguaceiros intensos de neve',

    'mist': 'Névoa',
    'smoke': 'Fumaça',
    'haze': 'Neblina',
    'dust/sand whirls': 'Redemoinhos de poeira',
    'fog': 'Nevoeiro',
    'sand': 'Areia',
    'dust': 'Poeira',
    'volcanic ash': 'Cinzas vulcânicas',
    'squalls': 'Rajadas',
    'tornado': 'Tornado',

    'clear sky': 'Céu limpo',
    'few clouds': 'Poucas nuvens',
    'scattered clouds': 'Nuvens dispersas',
    'broken clouds': 'Nublado',
    'overcast clouds': 'Nuvens encobertas'
  }

  // Procurar por qualquer palavra-chave nas descrições
  const translatedDescription = Object.keys(translations).find(key =>
    description.toLowerCase().includes(key)
  );

  return translations[translatedDescription] || description;
};

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [weatherImage, setWeatherImage] = useState(null);

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getWeatherData, showError);
      } else {
        console.error("Geolocalização não é suportada por este navegador.");
      }
    };

    const getWeatherData = (position) => {
      const apiKey = '46e31477863d695c4415e2215a514ac0';
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          console.log('weatherData:', data);
          setWeatherData({
            cityName: data.name,
            temperature: data.main.temp,
            description: data.weather[0].description,
            icon: data.weather[0].icon, // Corrigir a lógica para extrair o código do ícone
          });

          const iconCode = data.weather[0].icon;
          setWeatherImage(`https://openweathermap.org/img/wn/${iconCode}@2x.png`);
        })
        .catch(error => {
          console.error('Erro ao obter dados do OpenWeatherMap:', error);
        });
    };

    const showError = (error) => {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          console.error("Permissão de geolocalização negada pelo usuário.");
          break;
        case error.POSITION_UNAVAILABLE:
          console.error("Informações de localização indisponíveis.");
          break;
        case error.TIMEOUT:
          console.error("Tempo limite expirado ao obter informações de localização.");
          break;
        case error.UNKNOWN_ERROR:
          console.error("Erro desconhecido ao obter informações de localização.");
          break;
        default:
          console.error("Erro ao obter informações de localização.");

      }
    };

    getLocation();
  }, []);

  return (
    <WeatherContainer>

      {weatherData ? (
        <WeatherInfo>
          <ImageAndTemperature>

            {weatherImage && <WeatherImage src={weatherImage} alt="Weather" />}
            {`${weatherData.temperature.toFixed(1)}°C`}
          </ImageAndTemperature>
          <Descrption>
            {/* ${weatherData.cityName}: */  `${translateWeatherDescription(weatherData.description)}`}
          </Descrption>


        </WeatherInfo>
      ) : (
        <LoadingText>Carregando...</LoadingText>
      )}
    </WeatherContainer>
  );
};


export default WeatherApp;

