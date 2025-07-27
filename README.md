# Pomodoro Timer by DL
Create a pomodoro tracker application for productivity from https://roadmap.sh/projects/pomodoro-timer

The goal of this project is to learn and practice frontend development skills by building a Pomodoro Timer, a productivity tool based on the Pomodoro Technique. The Pomodoro Technique is a time management method that uses a timer to break work into intervals (typically 25 minutes) separated by short breaks.

## Requirements

- Will create a Pomodoro Timer web application using Nuxt v4
- User should be able to start stop and resume a pomodoro timer.
- User should be able to configure the default interval configuration; default work session should be 25 minutes, short break should be 5 minutes and longer break after 4 work sessions should be 15 minutes.
- Application should display the current session type (e.g., Work, Short Break, Long Break).
- It should also track the number of tracked work sessions
- Play a sound when a session ends to notify the user.
- Ensure the app is accessible and visually appealing on both desktop and mobile devices.

## Technical Requirements

- Implement state management for the timer and session tracking.
- Use a modular and reusable code structure.
- Maintain proper accessibility standards (e.g., keyboard navigation, ARIA labels).

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```