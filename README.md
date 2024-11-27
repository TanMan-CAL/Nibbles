# Nibbles

A full-stack application that recommends recipes based on pantry inventory and locates the nearest grocery stores offering the cheapest ingredients.

## Features
- **AI-Powered Recipe Generation**: Fine-tuned Cohere’s machine learning model with transfer learning for enhanced recipe accuracy.
- **Dietary Restrictions Support**: API endpoint to query recipes based on user-specified dietary preferences.
- **Smart Inventory Management**: Weight sensors track ingredient quantities, integrated via a REST API with an ESP32.
- **Cost Optimization**: Identifies affordable grocery options nearby.

## Tech Stack
- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **AI Model**: Cohere API with fine-tuned transfer learning
- **Hardware Integration**: ESP32 microcontroller with weight sensors

## How It Works
1. **Ingredient Tracking**: Monitors pantry inventory using weight sensors.
2. **Recipe Suggestions**: AI generates recipes using pantry data.
3. **Grocery Search**: Fetches the nearest and most affordable grocery options.
4. **API Integration**: REST API enables seamless communication between hardware and backend.

## Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/recipe-app.git
   cd recipe-app
