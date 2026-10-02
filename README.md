# Bordet App

Restaurant bucket list and rating app for groups of friends.

## Features

- **Restaurant List** - Add restaurants, mark as "want to try" or "visited", search and filter
- **Rating System** - Individual 1-10 scores, auto-calculated group averages, comments
- **Restaurant Profiles** - Detailed pages with ratings, comments, visit dates
- **Group Functionality** - Create groups, invite friends, share restaurant lists
- **Modern Design** - Minimalist design with light/dark mode support

## Tech Stack

- **Frontend**: Next.js 15, React 19, Tailwind CSS
- **Backend**: Supabase (PostgreSQL + Auth)
- **ORM**: Drizzle ORM
- **Styling**: Tailwind CSS, shadcn/ui components
- **Validation**: Zod

## Getting Started

### Prerequisites

- Node.js 18+
- Supabase account
- PostgreSQL database (via Supabase)

### Installation

1. Clone the repository
2. Copy `.env.local.example` to `.env.local` and fill in your Supabase credentials
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up the database:
   ```bash
   npm run db:generate
   npm run db:migrate
   ```
5. Run the development server:
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
app/              # Next.js app directory
db/               # Database schema
lib/              # Utilities and helpers
components/       # React components
drizzle/          # Migration files
```

## Development

- `npm run dev` - Start dev server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run typecheck` - TypeScript type checking
- `npm run db:generate` - Generate migrations
- `npm run db:migrate` - Run migrations
