import Anims from '../../assets/animations/index'

const getWeatherStatus = (weatherCode) => {
    if (weatherCode == 0) {
        return { animation: Anims.sunny, status: 'Açık' }
    }

    else if (weatherCode == 1 || weatherCode == 2 || weatherCode == 3) {
        return { animation: Anims.partly_cloudy, status: 'Parçalı Bulutlu' }
    }

    else if (weatherCode == 45 || weatherCode == 48) {
        return { animation: Anims.foggy, status: 'Sisli' };
    }

    else if (weatherCode == 51 || weatherCode == 53 || weatherCode == 55 || weatherCode == 56 || weatherCode == 57) {
        return { animation: Anims.cloudy, status: 'Bulutlu' };
    }

    else if (weatherCode == 61 || weatherCode == 63 || weatherCode == 65 || weatherCode == 66 || weatherCode == 67) {
        return { animation: Anims.rainy, status: 'Yağmurlu' };
    }

    else if (weatherCode == 71 || weatherCode == 73 || weatherCode == 75 || weatherCode == 77) {
        return { animation: Anims.snow, status: 'Kar Yağışlı' };
    }

    else if (weatherCode == 80 || weatherCode == 81 || weatherCode == 82 || weatherCode == 85 || weatherCode == 86) {
        return { animation: Anims.storm, status: 'Sağanak Yağış' };
    }

    else if (weatherCode == 95 || weatherCode == 96 || weatherCode == 99) {
        return { animation: Anims.thunder, status: 'Fırtına' };
    }
}

const getWeatherInfo = (data, type) => {
    if (type == 'daily') {
        let daily_info = []
        const hourly = data.hourly;
        for (i = 0; i < 24; i++) {
            daily_info.push(
                {
                    animation: getWeatherStatus(hourly.weathercode[i]).animation,
                    degree: hourly.temperature_2m[i],
                    time: hourly.time[i],
                    weatherStatus: getWeatherStatus(hourly.weathercode[i]).status,
                    weatherCode: hourly.weathercode[i],
                }
            )
        }
        return daily_info
    }
    else if (type == 'current') {
        const currentWeather = data.current_weather;
        const { weathercode, temperature } = currentWeather;
        return {
            animation: getWeatherStatus(weathercode).animation,
            status: getWeatherStatus(weathercode).status,
            degree: temperature,
        }
    }
    else if (type == 'weekly') {
        let weekly_info = [];
        const weekly = data.hourly;
        let day = [];
        let i = 0, j = 0, k = 24
        while (i < 7) {
            for (m = j; m < k; m++) {
                day.push(
                    {
                        animation: getWeatherStatus(weekly.weathercode[m]).animation,
                        degree: weekly.temperature_2m[m],
                        time: weekly.time[m],
                        weatherStatus: getWeatherStatus(weekly.weathercode[m]).status
                    }
                )
            }
            weekly_info.push(day)
            day = []
            j += 24
            k += 24
            i++
        }
        return weekly_info
    }
}

export default getWeatherInfo;