// CityBreeze App
#include <cpprest/http_client.h>
#include <cpprest/filestream.h>
#include <cpprest/json.h>
#include <iostream>
#include <string>
#include <ctime>

using namespace utility;                    // Common utilities like string conversions
using namespace web;                        // Common features like URIs.
using namespace web::http;                  // Common HTTP functionality
using namespace web::http::client;          // HTTP client features

// Helper function to convert Kelvin to Fahrenheit
double kelvinToFahrenheit(double kelvin) {
    return (kelvin - 273.15) * 9/5 + 32;
}

// Helper function to format the timestamp into a human-readable format
std::string formatTimestamp(long timestamp) {
    std::time_t time = timestamp;
    char buffer[80];
    struct tm * timeinfo = std::localtime(&time);
    std::strftime(buffer, sizeof(buffer), "%Y-%m-%d %H:%M:%S", timeinfo);
    return std::string(buffer);
}

int main() {
    std::string city;
    std::cout << "Enter the city name: ";
    std::getline(std::cin, city);

    string_t query_city = conversions::to_string_t(city);

    http_client client(U("http://api.openweathermap.org/data/2.5/weather"));

    uri_builder builder;
    builder.append_query(U("appid"), U("your-api-key-here")); // Replace with your actual openweathermap API key
    builder.append_query(U("q"), query_city);

    client.request(methods::GET, builder.to_string())
    .then([](http_response response) -> pplx::task<json::value> {
        if(response.status_code() == status_codes::OK) {
            return response.extract_json();
        } else {
            throw std::runtime_error("Returned " + std::to_string(response.status_code()));
        }
    })
    .then([](pplx::task<json::value> previousTask) {
        try {
            const json::value& v = previousTask.get();

            // Here we parse and display the information
            std::cout << "Weather in " << v.at(U("name")).as_string() << ":\n";
            std::cout << "Cloudiness: " << v.at(U("clouds")).at(U("all")).as_integer() << "%\n";
            std::cout << "Timestamp: " << formatTimestamp(v.at(U("dt")).as_integer()) << "\n";
            std::cout << "Feels Like: " << kelvinToFahrenheit(v.at(U("main")).at(U("feels_like")).as_double()) << " °F\n";
            std::cout << "Humidity: " << v.at(U("main")).at(U("humidity")).as_integer() << "%\n";
            std::cout << "Temperature: " << kelvinToFahrenheit(v.at(U("main")).at(U("temp")).as_double()) << " °F\n";
            std::cout << "Min Temperature: " << kelvinToFahrenheit(v.at(U("main")).at(U("temp_min")).as_double()) << " °F\n";
            std::cout << "Max Temperature: " << kelvinToFahrenheit(v.at(U("main")).at(U("temp_max")).as_double()) << " °F\n";
            std::cout << "Weather Description: " << v.at(U("weather")).at(0).at(U("description")).as_string() << "\n";
            
        }
        catch (const http_exception& e) {
            std::cout << e.what() << std::endl;
        }
    })
    .wait();

    return 0;
}


// Compile app
// clang++ -std=c++17 main.cpp -o WeatherApp -lcpprest -lboost_system -lcrypto -lssl

// Start app
// ./WeatherApp
