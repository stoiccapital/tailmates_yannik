# Tailmates Yannik - Next.js Login App

A simple Next.js application with Tailwind CSS styling featuring a login system and protected dashboard.

## Features

- Login page with email and password authentication
- Mock API endpoint for login validation
- Protected dashboard page
- Responsive design with Tailwind CSS
- Local storage for user session management

## Setup

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000/login](http://localhost:3000/login) in your browser.

## Usage

1. Navigate to `/login`
2. Enter any email and password (both fields must be filled)
3. Submit the form to authenticate
4. You'll be redirected to `/app` if login is successful
5. The dashboard will show a welcome message with your email

## Project Structure

- `pages/login.js` - Login form page
- `pages/app.js` - Protected dashboard page
- `pages/api/login.js` - Mock login API endpoint
- `pages/_app.js` - Global app configuration
- `styles/globals.css` - Global styles with Tailwind directives
- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration 