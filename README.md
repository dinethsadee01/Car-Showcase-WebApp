# 🚗 Car Showcase WebApp

<div align="center">
  <img src="./public/logo.svg" alt="Car Showcase Hero" width="600px">
  
  <p align="center">
    <strong>A modern, responsive car showcase and rental platform built with Next.js 15</strong>
  </p>
  
  <p align="center">
    <a href="#demo">View Demo</a> •
    <a href="#features">Features</a> •
    <a href="#installation">Installation</a> •
    <a href="#usage">Usage</a> •
    <a href="#contributing">Contributing</a>
  </p>
  
  <p align="center">
    <img src="https://img.shields.io/badge/Next.js-15.3.4-black?style=for-the-badge&logo=next.js" alt="Next.js">
    <img src="https://img.shields.io/badge/React-19.0.0-blue?style=for-the-badge&logo=react" alt="React">
    <img src="https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript" alt="TypeScript">
    <img src="https://img.shields.io/badge/Tailwind-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS">
  </p>
</div>

---

## 📋 Table of Contents

- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Demo](#-demo)
- [📦 Installation](#-installation)
- [🔧 Configuration](#-configuration)
- [💻 Usage](#-usage)
- [📱 Screenshots](#-screenshots)
- [🏗️ Project Structure](#️-project-structure)
- [🌐 API Integration](#-api-integration)
- [🎨 Customization](#-customization)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👨‍💻 Author](#-author)

---

## ✨ Features

🎯 **Core Functionality**

- **Advanced Car Search** - Search by manufacturer, model, year, and fuel type
- **Dynamic Filtering** - Real-time filtering with multiple criteria
- **Car Details Modal** - Detailed specifications and rental pricing
- **Responsive Design** - Optimized for all devices and screen sizes
- **Modern UI/UX** - Clean, intuitive interface with smooth animations

🔧 **Technical Features**

- **Server-Side Rendering** - Powered by Next.js 15 App Router
- **TypeScript Support** - Full type safety throughout the application
- **API Integration** - Real-time car data from Cars API (API Ninjas)
- **Performance Optimized** - Image optimization and lazy loading
- **SEO Friendly** - Optimized meta tags and structured data

🎨 **Design Features**

- **Modern Aesthetics** - Beautiful gradient backgrounds and card designs
- **Interactive Elements** - Hover effects and smooth transitions
- **Accessibility** - WCAG compliant with keyboard navigation
- **Mobile-First** - Responsive design that works on all devices

---

## 🛠️ Tech Stack

| Technology       | Version | Purpose                         |
| ---------------- | ------- | ------------------------------- |
| **Next.js**      | 15.3.4  | React framework with App Router |
| **React**        | 19.0.0  | UI library                      |
| **TypeScript**   | 5.x     | Type safety and better DX       |
| **Tailwind CSS** | 3.4.17  | Utility-first CSS framework     |
| **Headless UI**  | 2.2.4   | Accessible UI components        |
| **Cars API**     | -       | Real-time car data              |

---

## 🚀 Demo

🌐 **Live Demo**: [Car Showcase WebApp](https://your-demo-link.vercel.app)

---

## 📦 Installation

### Prerequisites

Make sure you have the following installed:

- **Node.js** (v18 or higher)
- **npm**, **yarn**, **pnpm**, or **bun**

### Quick Start

1. **Clone the repository**

   ```bash
   git clone https://github.com/dinethsadee01/Car-Showcase-WebApp.git
   cd car-showcase-webapp
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

4. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Cars API Configuration
NEXT_PUBLIC_RAPID_API_KEY=your_rapidapi_key_here

# Optional: Add other environment variables
# NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Getting API Keys

1. **Cars API (API Ninjas)**:
   - Visit [RapidAPI - Cars API](https://rapidapi.com/apininjas/api/cars-by-api-ninjas)
   - Subscribe to the API (free tier available)
   - Copy your API key to the environment variable

---

## 💻 Usage

### Basic Usage

1. **Browse Cars**: The homepage displays a curated selection of cars
2. **Search**: Use the search bar to find specific car models
3. **Filter**: Apply filters for fuel type, year, and manufacturer
4. **View Details**: Click on any car card to see detailed specifications
5. **Calculate Rent**: View estimated rental prices based on car specifications

### Advanced Features

- **Pagination**: Use "Show More" to load additional cars
- **Responsive Search**: Search updates in real-time as you type
- **Multi-Filter**: Combine multiple filters for precise results

---

## 📱 Screenshots

<div align="center">
  
### 🏠 Homepage
<img src="./public/screenshots/homepage.png" alt="Homepage" width="800px">

### 🔍 Search & Filter

<img src="./public/screenshots/search.png" alt="Search and Filter" width="800px">

### 📋 Car Details

<img src="./public/screenshots/car-details.png" alt="Car Details Modal" width="800px">

### 📱 Mobile View

<img src="./public/screenshots/mobile.png" alt="Mobile View" width="300px">

</div>

---

## 🏗️ Project Structure

```
car-showcase-webapp/
├── 📁 app/                    # Next.js App Router
│   ├── favicon.ico
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Homepage
├── 📁 components/            # Reusable components
│   ├── CarCard.tsx           # Individual car card
│   ├── CustomButton.tsx      # Reusable button component
│   ├── CustomFilter.tsx      # Filter dropdown
│   ├── Hero.tsx              # Hero section
│   ├── Navbar.tsx            # Navigation bar
│   ├── SearchBar.tsx         # Search functionality
│   └── index.ts              # Component exports
├── 📁 constants/             # App constants
│   └── index.ts              # Fuel types, years, etc.
├── 📁 public/                # Static assets
│   ├── 🖼️ hero.png           # Hero image
│   ├── 🖼️ logo.svg           # App logo
│   └── 📁 icons/             # SVG icons
├── 📁 types/                 # TypeScript definitions
│   └── index.ts              # Type definitions
├── 📁 utils/                 # Utility functions
│   └── index.ts              # API calls, helpers
├── 📄 package.json           # Dependencies
├── 📄 tailwind.config.js     # Tailwind configuration
├── 📄 tsconfig.json          # TypeScript configuration
└── 📄 README.md              # This file
```

---

## 🌐 API Integration

### Cars API (API Ninjas)

The application integrates with the Cars API to fetch real-time car data:

**Base URL**: `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars`

**Supported Parameters**:

- `make` - Car manufacturer (e.g., Toyota, BMW)
- `model` - Car model (e.g., Camry, X5)
- `year` - Manufacturing year
- `fuel_type` - Fuel type (gas, diesel, electric)
- `limit` - Number of results (max 30)

**Example Request**:

```typescript
const response = await fetch(
  `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=toyota&year=2022&limit=10`,
  {
    headers: {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
      "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
    },
  }
);
```

---

## 🎨 Customization

### Styling

The app uses **Tailwind CSS** for styling. Key customization files:

- `tailwind.config.js` - Tailwind configuration
- `app/globals.css` - Global styles and custom CSS

### Components

All components are modular and can be easily customized:

```typescript
// Example: Customizing the Hero component
export const Hero = () => {
  return (
    <div className="hero bg-gradient-to-r from-blue-500 to-purple-600">
      {/* Your custom hero content */}
    </div>
  );
};
```

### Constants

Modify filter options in `constants/index.ts`:

```typescript
export const fuels = [
  { title: "Fuel", value: "" },
  { title: "Gas", value: "gas" },
  { title: "Electricity", value: "electricity" },
  // Add more fuel types
];
```

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Getting Started

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Commit your changes**
   ```bash
   git commit -m "Add some amazing feature"
   ```
5. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open a Pull Request**

### Contribution Guidelines

- ✅ Follow the existing code style
- ✅ Add tests for new features
- ✅ Update documentation as needed
- ✅ Keep commits atomic and descriptive

### Areas for Contribution

- 🐛 **Bug Fixes** - Help us squash bugs
- ✨ **New Features** - Add new functionality
- 📚 **Documentation** - Improve our docs
- 🎨 **UI/UX** - Enhance the user experience
- ⚡ **Performance** - Optimize for speed

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

<div align="center">
  <img src="https://github.com/dinethsadee01.png" alt="Author" width="100px" style="border-radius: 50%;">
  
  **Dineth Sadeepa**
  
  [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/dinethsadee01)
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/dinethsadeepaedirisinghe)
  [![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/DinethSadeepa)
  [![Portfolio](https://img.shields.io/badge/Portfolio-FF5722?style=for-the-badge&logo=google-chrome&logoColor=white)](https://dineth.is-a.dev)
</div>

---

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing React framework
- **Vercel** - For hosting and deployment platform
- **API Ninjas** - For providing the Cars API
- **Tailwind CSS** - For the utility-first CSS framework
- **Headless UI** - For accessible UI components

---

<div align="center">
  <p>Made with ❤️ and ☕</p>
  <p>If you found this project helpful, please give it a ⭐!</p>
</div>
