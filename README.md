# 💪 Local Gym Website

A modern, responsive fitness gym website built with React, TypeScript, Tailwind CSS, and Vite. Showcasing classes, trainers, memberships, and member engagement.

## 🚀 Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Class Schedule** - Browse classes with real-time availability and difficulty levels
- **Trainer Profiles** - Meet certified fitness professionals with specializations
- **Membership Plans** - Compare and choose membership options that fit your lifestyle
- **Online Enrollment** - Easy-to-use forms for membership and class signups
- **Member Testimonials** - Real success stories from our community
- **Contact Forms** - Get in touch with validated form submission
- **Modern UI** - Clean, professional design with smooth animations

## 🛠️ Tech Stack

- **Frontend Framework:** React 19
- **Language:** TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **State Management:** Zustand
- **Data Fetching:** React Query (TanStack Query)
- **Forms:** React Hook Form + Zod
- **HTTP Client:** Axios
- **Testing:** Vitest + React Testing Library
- **Linting:** ESLint + TypeScript ESLint

## 📦 Installation

### Prerequisites
- Node.js 16.x or higher
- npm or yarn package manager

### Setup

```bash
# Clone the repository
git clone https://github.com/AhmedMelliti9/Local-Gym-Website.git
cd Local-Gym-Website

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

## 🏃 Available Scripts

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint

# Run tests
npm run test

# Run tests in watch mode
npm run test:watch
```

## 📁 Project Structure

```
Local-Gym-Website/
├── public/                 # Static assets
├── src/
│   ├── components/        # Reusable React components
│   │   ├── Header/        # Navigation header
│   │   ├── Footer/        # Footer component
│   │   ├── ClassCard/     # Class display card
│   │   ├── TrainerCard/   # Trainer profile card
│   │   └── PricingCard/   # Membership pricing card
│   ├── pages/             # Page components
│   │   ├── Home.tsx       # Landing page
│   │   ├── Classes.tsx    # Classes listing
���   │   ├── Trainers.tsx   # Trainers listing
│   │   ├── Membership.tsx # Membership plans
│   │   ├── About.tsx      # About page
│   │   └── Contact.tsx    # Contact form
│   ├── services/          # API service calls
│   │   ├── api.ts         # Axios configuration
│   │   └── gymService.ts  # Gym-specific API calls
│   ├── hooks/             # Custom React hooks
│   │   ├── useClasses.ts
│   │   ├── useTrainers.ts
│   │   └── useMemberships.ts
│   ├── utils/             # Utility functions
│   │   ├── constants.ts
│   │   └── helpers.ts
│   ├── types/             # TypeScript type definitions
│   ├── App.tsx            # Root component
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global styles
├── .env.example           # Environment variables template
├── .eslintrc.cjs          # ESLint configuration
├── vite.config.ts         # Vite configuration
├── tsconfig.json          # TypeScript configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── vitest.config.ts       # Vitest configuration
├── package.json           # Project dependencies
└── index.html             # HTML template
```

## 🔌 Environment Configuration

Create a `.env` file based on `.env.example`:

```env
VITE_API_URL=http://localhost:3000/api
VITE_APP_NAME=Local Gym Website
VITE_APP_ENV=development
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#FF6B35',    // Main brand color
      secondary: '#004E89',  // Secondary color
      dark: '#1A1A1A',       // Dark background
      light: '#F5F5F5',      // Light accent
    },
  },
}
```

### Fonts
Update the font stack in `src/index.css` and `tailwind.config.js`.

## 🧪 Testing

Tests are located alongside components with `.test.ts` or `.test.tsx` extensions.

```bash
# Run all tests
npm run test

# Watch mode
npm run test:watch
```

## 📝 API Integration

Update `src/services/gymService.ts` with your actual API endpoints. The service is configured to work with a backend API.

### Example API Endpoints Expected:

```
GET    /api/classes
GET    /api/classes/:id
POST   /api/classes/:id/enroll
GET    /api/trainers
GET    /api/trainers/:id
POST   /api/trainers/:id/book
GET    /api/memberships
POST   /api/memberships/:id/subscribe
GET    /api/testimonials
POST   /api/contact
```

## 🚀 Deployment

### Netlify

```bash
# Build the project
npm run build

# Deploy the dist folder to Netlify
```

### Vercel

```bash
npm install -g vercel
vercel
```

### GitHub Pages

1. Update `vite.config.ts` with your repo name
2. Run `npm run build`
3. Deploy the `dist` folder

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

MIT License - see LICENSE file for details

## 👤 Author

**Ahmed Melliti**
- GitHub: [@AhmedMelliti9](https://github.com/AhmedMelliti9)

## 🙏 Acknowledgments

- React and Vite communities
- Tailwind CSS for excellent utility-first CSS
- Radix UI components inspiration
- All contributors and users

## 📞 Support

For issues, questions, or suggestions:
1. Open an issue on GitHub
2. Contact: info@localgym.com
3. Check existing documentation

---

**Happy coding! 🎉**
