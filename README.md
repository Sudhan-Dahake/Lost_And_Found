# LossEndFound - Lost and Found Application

LossEndFound is an AI-powered Lost and Found application designed to help users find lost items by utilizing vector similarity search capabilities. The system leverages similarity search (using cosine) to match lost and found items based on their user's description of the Item.

## Features

- **User Authentication**: Users can register and log in to their accounts using Firebase Authentication. (In development)
- **Image Upload**: Users can upload images of lost or found items. (In development)
- **AI-Powered Matching**: The application uses Cohere's embeddings to extract features from uploaded images and ChromaDB for efficient similarity search to match lost and found items.
- **FastAPI Backend**: The backend of the application is built using FastAPI, offering a high-performance, easy-to-use interface.

## Technologies Used

### 1. **FastAPI**
   - FastAPI is used for the backend of the application. It provides an asynchronous web framework that allows for easy API development, and it's known for its high performance and intuitive design.

### 2. **Firebase Authentication**
   - Firebase Authentication is used to manage user authentication, including registering and logging in users. This service ensures secure and reliable user management.

### 3. **Cohere**
   - Cohere's embeddings are employed to generate embeddings. These embeddings are then used to compare and match similar items in the database.

### 4. **ChromaDB**
   - ChromaDB is utilized for storing the vector embeddings.

### 5. **Python**
   - Python serves as the core programming language for the backend, handling everything from server-side logic to managing API requests and database queries.

## How It Works

1. **User Registration/Login**: Users can create an account and log in via Firebase Authentication.
2. **Upload Lost or Found Item**: Users upload images of lost or found items via the frontend.
3. **Embedding Generation**: The image features are converted into vector embeddings using Cohere.
4. **Similarity Search**: The generated embeddings are stored in ChromaDB, and the system runs similarity searches to match lost and found items.
5. **Results**: Users are presented with a list of items that closely match the uploaded image based on user's description of the Item.

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/Sudhan-Dahake/Lost_And_Found.git
   cd LossEndFound
   ```

2. Install dependencies:

   ```
   pip install -r requirements.txt
   ```

3. Set up environment variables for Firebase, Cohere API key, and ChromaDB in a .env file:

   ```
   COHERE_API_KEY='your-cohere-api-key'
   FIREBASE_API_KEY='firebase-api-key'
   ```

4. Run the application:

   ```
   uvicorn main:app --host 0.0.0.0 --port 80
   ```


## Demo
###[Watch the Demo on YouTube](https://youtu.be/Jl3UXhts0GA)
