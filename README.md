# Sharkny

A modern blogging platform where developers learn by explaining concepts and grow by reading others' insights. **Knowledge Grows When You Share It.**

## Table of Contents

- [What Sharkny Does](#what-sharkny-does)
- [Why Sharkny](#why-sharkny)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Development](#development)
- [Contributing](#contributing)
- [Support](#support)

## What Sharkny Does

Sharkny is a developer-focused blogging and knowledge-sharing platform built with modern web technologies. It enables developers to:

- **Write and publish articles** on diverse tech topics (Frontend, Backend, AI/ML, DevOps, and more)
- **Share knowledge** in their own words to deepen understanding
- **Discover insights** from the developer community
- **Learn from peers** by reading how others approach and explain concepts

The platform features an intuitive editor, topic-based filtering, search capabilities, and user authentication with Clerk.

## Why Sharkny

### Learn Deeper by Explaining
Writing forces clarity. When you explain what you're learning in your own words, concepts stick longer and understanding goes deeper.

### Learn from Other Developers
Read how others break down problems, share insights, and approach topics differently — learning doesn't stop with your own posts.

### Discover New Topics
Explore ideas, tools, and concepts you didn't even know existed, shared by developers learning in public.

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd sharkny
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
   CLERK_SECRET_KEY=your_clerk_secret
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open in browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

### Usage Examples

#### Browse Articles
Visit `/articles` to explore published articles with filtering by topic and search functionality.

#### Write an Article
1. Sign in with your Clerk account
2. Navigate to `/my-journey/new`
3. Fill in the article form:
   - Title
   - Subtitle
   - Description
   - Topic (select from available categories)
4. Publish to share with the community

#### View Single Article
Click on any article card to view the full article at `/articles/[id]`

## Project Structure

```
sharkny/
├── app/                          # Next.js app directory (pages & routes)
│   ├── page.tsx                 # Home page with hero, features, how-it-works
│   ├── articles/                # Articles listing & details
│   ├── my-journey/              # User's article management
│   └── sign-in/                 # Clerk authentication
├── components/
│   ├── features/
│   │   ├── home/               # Hero, Features, HowItWorks sections
│   │   └── articles/           # ArticleCard, Filter, Search, Pagination
│   ├── layout/                 # Navbar, Footer, ThemeProvider
│   └── ui/                     # Reusable UI components (button, input, etc.)
├── lib/
│   ├── supabase.ts            # Supabase client initialization
│   ├── actions/
│   │   └── blog.actions.ts    # Server actions for article CRUD
│   └── utils.ts               # Utility functions
├── types/
│   └── index.d.ts             # TypeScript type definitions
├── constans/
│   └── index.ts               # Application constants
└── public/                     # Static assets
```

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org) - React meta-framework with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS framework
- **Authentication**: [Clerk](https://clerk.com/) - Modern authentication platform
- **Database**: [Supabase](https://supabase.com/) - PostgreSQL backend with real-time capabilities
- **UI Components**: 
  - [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible component library
  - [Lucide React](https://lucide.dev/) - Icon library
- **Forms**: 
  - [React Hook Form](https://react-hook-form.com/) - Performant form validation
  - [Zod](https://zod.dev/) - TypeScript-first schema validation
- **Utilities**: [clsx](https://github.com/lukeed/clsx), [tailwind-merge](https://github.com/dcastil/tailwind-merge)

## Features

### ✨ Core Features
- 📝 **Article Creation** - Rich article editor for sharing knowledge
- 🔍 **Search & Filter** - Find articles by title and topic
- 📚 **Topic Categories** - 10+ tech topic categories (Frontend, Backend, AI/ML, DevOps, etc.)
- 👤 **User Authentication** - Seamless sign-in with Clerk
- 🌓 **Dark/Light Mode** - Theme toggle for comfortable reading
- 📱 **Responsive Design** - Mobile-first approach with Tailwind CSS

### 🔧 Technical Features
- Server-side actions for secure operations
- Pagination for efficient article browsing
- Image optimization with Next.js
- Type-safe codebase with TypeScript
- ESLint configuration for code quality

## Development

### Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

### Code Quality

This project uses:
- **TypeScript** for type safety
- **ESLint** with Next.js recommended rules
- **Tailwind CSS** for consistent styling

### Hot Module Replacement

The development server supports automatic page reload when you modify files in `app/` directory.

## Contributing

We welcome contributions! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Workflow

- Follow the existing code structure and patterns
- Use TypeScript for all new code
- Ensure your code passes `npm run lint`
- Test your changes locally before submitting a PR

## Support

### Documentation
- [Next.js Documentation](https://nextjs.org/docs) - Next.js features and API
- [Supabase Docs](https://supabase.com/docs) - Database and real-time features
- [Clerk Documentation](https://clerk.com/docs) - Authentication setup and usage
- [Tailwind CSS](https://tailwindcss.com/docs) - Styling utilities

### Getting Help
- Check existing issues and discussions
- Review the codebase structure and examples
- Consult the tech stack documentation

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Maintainer

Created and maintained by the Sharkny team. We're passionate about developer education and learning in public.

---

**Happy learning and sharing! 🦈**
