import React, { Component } from 'react'
import Header from './header'
import Form from './form'
import Weather from './Weather'

class App extends Component {
    state = {
        temprature: undefined,
        humidity: undefined,
        city: undefined,
        country: undefined,
        Description: undefined,
        error: undefined
    }

    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.city.value;
        const country = e.target.country.value;
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=410e1a9659db2b53971c805303572ef6`);
        const response = await api_call.json();
        if (city && country) {
            this.setState({
                temperature: response.main.temp,
                humidity: response.main.humidity,
                city: response.name,
                country: response.sys.country,
                Description: response.weather[0].description,
                error: ""

            })
        } else {
            this.setState({
                error: "please enter the city and country"
            })
        }

    }
    render() {
        return (
            <div className="App container">
                <Header />
                <Form loadWeather={this.getWeather} />
                <Weather temperature={this.state.temperature}
                    humidity={this.state.humidity}
                    city={this.state.city}
                    country={this.state.country}
                    Description={this.state.Description}
                    error={this.state.error}
                />


            </div>
        );
    }
}

export default App;