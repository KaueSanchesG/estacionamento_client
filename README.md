# Estacionamento Client 🚀

## About 📘

![Gif-3](https://github.com/KaueSanchesG/estacionamento_client/assets/95658722/e55aaed2-5e84-4a2e-a901-6152fe5ce77d)


This project is divided into 2 parts: the front end(this repository) and the [back end](https://github.com/KaueSanchesG/Estacionamento_API) . In short, it's a parking lot application made with Spring Boot in the back end and Vue.js as the front-end framework. The main goal was to create a REST API so the client could interact with it and extract data in the same way.

## Status ✅

This project has been completed, but there is still room for improvement. Below is a list of upgradable items:

* Apply clean code, as both the back end and the front end need it.
* Change some functions that are too heavy and could be made lighter.
* Turn the form into a component so it can work as a table.
* Style the select options in the forms.
* The main select should lead you to the other forms "editar" (put) / "cadastrar" (post), but instead, it just goes back to the tables.
* In the response from "movimentacao", there's a kind of receipt, and it could be shown as an alert on the screen.

## How to use 📋

As mentioned earlier, this project is divided into 2 parts. If you want to see it 100% working, you need to check the [estacionamento_API](https://github.com/KaueSanchesG/Estacionamento_API) repository. Alternatively, you can just run the front and inject the data with json (it's cooler when working 100% so you can see it in your browser). For running the front end, you'll need an IDE to run. I'm using **[Visual Studio Code](https://code.visualstudio.com/)**. 

Next, follow this code sequence in your local directory:

```bash
# Clone the repository
git clone https://github.com/KaueSanchesG/estacionamento_client.git

# Open the directory 
cd estacionamento_client

# You'll need to install the dependencies for this project
npm install

# After that, you're able to un the project
npm run serve

```
For stop running, just ctrl+c

## Technologies 🛠️

|      Technology      | Version |
|:--------------------:|:-------:|
|       bootstrap      |  5.3.0  |
|        core-js       |  3.8.3  |
|          Vue         |  3.2.13 |
|         axios        |  1.4.0  |
|      typescript      |  4.5.5  |
