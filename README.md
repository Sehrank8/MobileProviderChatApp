
# MobileProviderChatApp

The **MobileProviderChatApp** is a user-facing web application that enables subscribers to interact with an AI chatbot about their mobile service billing, usage, and payments in real time. It is built using React and connects to Firebase for real-time messaging.

### You can test it here: On [Render](https://mobileproviderchatapp.onrender.com)
### Video link: [VIDEO](https://drive.google.com/drive/folders/1iURph3ZgeGjW0-FUfo7s3M3Ar8QlmeFc?usp=sharing)
## 🔗 Related Projects

- **API Gateway**: [MobileProviderGateway](https://github.com/Sehrank8/MobileProviderGateway)
- **Backend API**: [MobileProviderAPI](https://github.com/Sehrank8/MobileProviderAPI)
- **Chatbot Backend**: [MobileProviderChatBot](https://github.com/Sehrank8/MobileProviderChatBot)

## 🧩 Features

- Real-time chat interface
- Clean and responsive UI 
- Firebase integration for storing and retrieving chat messages
- Integration with backend bot for intelligent replies

## 🛠️ Technologies Used

- JavaScript
- Firebase Firestore

## 📁 Project Structure

```
MobileProviderChatApp/
├── src/
│   ├── firebase.js              # Firebase app and Firestore init
│   ├── App.jsx                  # Main application root
│   └── main.jsx                 # React rendering entry
├── public/
├── .env                         # Firebase credentials
└── ...
```

## ⚙️ Getting Started

### Prerequisites

- Node.js (v18 or later)
- Firebase Project with Firestore enabled

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Sehrank8/MobileProviderChatApp.git
cd MobileProviderChatApp
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file with your Firebase settings:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
.........
.........
```

4. Run the app locally:

```bash
npm run dev
```

Access it via `http://localhost:56776`. (Or your specified port)

## 🚀 Deployment

Deployable via:

- **Render**
- **Docker**

Ensure proper environment variables are set for Firebase in the deployment dashboard.

## 📡 Firebase Messages Schema

Each message in Firestore has the following structure:

```json
{
  "text": "Your message here",
  "sender": "user" | "bot",
  "createdAt": Timestamp,
  "processed": boolean
}
```

