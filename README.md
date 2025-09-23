# 🎰 Liquid Glass Casino

## Project Description

An experimental casino project focused on building a reward system. It features an animated vortex effect background, a sleek liquid glass UI, user authentication with Google, and demo casino games.

## Tech Stack

I'm building this project using:

- **Next.js**: A React framework for building fast web applications.
- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Supabase**: An open-source Firebase alternative for database, authentication, and storage.
- **pnpm**: A fast, disk space efficient package manager.
- **Biome**: A linter and formatter for web projects.
- **Howler.js**: Audio library for the modern web.

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

Make sure you have these installed:

- Node.js (v18.x or later)
- pnpm

### Installation

1.  First, clone this repository:
    ```bash
    git clone https://github.com/your-username/liquid-glass-casino.git
    cd liquid-glass-casino
    ```
2.  Then, install the dependencies:
    ```bash
    pnpm install
    ```

### Environment Variables

Create a `.env.local` file in the root directory and add your Supabase credentials. You'll need to get these from your Supabase project dashboard.

```
NEXT_PUBLIC_SUPABASE_URL=YOUR_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
```

### Running the Development Server

To start the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. The page auto-updates as you edit the files.
