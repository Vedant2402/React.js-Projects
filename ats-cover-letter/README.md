# ATS Friendly Cover Letter Generator

## Day 14 of 15 Days Challenge

## Live Link - https://coverletter-ai.netlify.app/

A beautiful, retro-styled web application for generating personalized cover letters using AI. Built with React, TypeScript, Firebase Authentication, and featuring a vintage aesthetic.

## Features

### 🔐 Authentication

- Email/password authentication
- Google Sign-in/Sign-Up integration
- Secure Firebase authentication

### 📝 Cover Letter Generation

- Comprehensive form with personal and job information
- Multiple tone options (Professional, Friendly, Bold, Fun)
- AI-powered letter generation
- Job description analysis for targeted content

### 🎨 Retro Design

- Vintage color palette and typography
- Paper texture effects
- Typewriter-style letter preview
- Smooth animations and transitions

### 💼 User Experience

- Responsive design for all devices
- Copy to clipboard functionality
- Easy form reset for multiple letters
- Professional letter formatting

## Setup Instructions

### 1. Firebase Configuration

1. Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Authentication and configure:
   - Email/Password provider
   - Google provider (optional)
3. Get your Firebase configuration from Project Settings
4. Replace the placeholder values in `src/firebase/config.ts`:

```typescript
const firebaseConfig = {
  apiKey: "your-api-key-here",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "your-app-id"
};
```

### 2. OpenAI Integration (Optional)

For real AI-powered letter generation:

1. Get an OpenAI API key from [OpenAI Platform](https://platform.openai.com/)
2. Create a `.env` file in the root directory:

```
REACT_APP_OPENAI_API_KEY=your-openai-api-key-here
```

3. Uncomment and use the real OpenAI implementation in `src/services/openaiService.ts`

### 3. Installation & Development

```bash
npm install
npm run dev
```

## Project Structure

```
src/
├── components/
│   ├── CoverLetterForm.tsx    # Main form component
│   ├── CoverLetterPreview.tsx # Letter preview and actions
│   └── PrivateRoute.tsx       # Route protection
├── contexts/
│   └── AuthContext.tsx        # Authentication context
├── firebase/
│   └── config.ts              # Firebase configuration
├── pages/
│   └── Login.tsx              # Authentication page
├── services/
│   └── openaiService.ts       # AI letter generation
└── App.tsx                    # Main application component
```

## Technologies Used

- **React 18** with TypeScript
- **Firebase** for authentication
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **Vite** for fast development

## Customization

### Styling

- Modify colors in Tailwind config or CSS files
- Adjust fonts in `src/index.css`
- Update spacing and layout in components

### AI Integration

- Replace the mock service with real OpenAI API calls
- Customize prompts for different letter styles
- Add additional tone options

### Authentication

- Add more OAuth providers in Firebase
- Implement custom user profiles
- Add email verification

## Deployment

The app can be deployed to any static hosting service:

1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting provider
3. Configure environment variables on your hosting platform

## Security Notes

- Never commit real API keys to version control
- Use environment variables for sensitive data
- Configure Firebase security rules appropriately
- Implement proper error handling for production

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request
