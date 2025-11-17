# Stockly - Bar Inventory Prototype

[![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactnative.dev/)
[![SQLite](https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white)](https://sqlite.org/)
[![Status](https://img.shields.io/badge/status-unfinished-yellow?style=for-the-badge)]()

## About The Project

This project is a prototype for **Stockly**, a mobile inventory control application. It was originally designed for a local bar with the goal of helping the manager organize their inventory and move away from confusing spreadsheets.

This application was developed as a university assignment for a Mobile Development course.

As the project was not finalized, its current state serves as a demonstration of fundamental React Native concepts:
* Component-based structure (`Header`, `ProductCard`).
* Screen navigation (between the list and the form).
* Local data persistence using **SQLite**.
* A complete **CRUD** (Create, Read, Update, Delete) workflow for managing products.

### Built With
* [React Native](https://reactnative.dev/)
* [React Native SQLite Storage](https://github.com/andpor/react-native-sqlite-storage)
* [React Native Picker Select](https://github.com/lawnstarter/react-native-picker-select)
* [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)

## Project Features

* **View All Products:** A home screen that lists all products from the local database.
* **Create Products:** A form screen to add new products (name, category, quantity) to the inventory.
* **Update Quantities:** Users can increment or decrement the stock quantity directly from the product card on the home screen.
* **Delete Products:** Products can be deleted from the database.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

* [Node.js](https://nodejs.org/) (v18 or newer)
* [Yarn](https://yarnpkg.com/) (recommended) or npm
* [React Native environment setup](https://reactnative.dev/docs/environment-setup) (Android Studio / Xcode)

### Installation

1.  Clone the repository:
    ```bash
    git clone [https://github.com/BBennemann/Stockly.git](https://github.com/BBennemann/Stockly.git)
    ```
2.  Navigate to the project directory:
    ```bash
    cd Stockly
    ```
3.  Install NPM packages:
    ```bash
    npm install
    ```
    *or*
    ```bash
    yarn install
    ```
4.  For **iOS**, install the Pods:
    ```bash
    cd ios && pod install && cd ..
    ```

## Usage Instructions

Once the installation is complete, you can run the application on an emulator or a physical device.

1.  **Start the Metro Server:**
    ```bash
    npm start
    ```
2.  **Run on Android:**
    (In a new terminal)
    ```bash
    npm run android
    ```
3.  **Run on iOS:**
    (In a new terminal)
    ```bash
    npm run ios
    ```

The app will open with the **Home** screen, displaying any registered products. You can press the `+` button to navigate to the **Form** screen and add new items to the inventory.

## Contributors

* **Bernardo Thomas Bennemann** - *Project Owner* - [BBennemann](https://github.com/BBennemann)
