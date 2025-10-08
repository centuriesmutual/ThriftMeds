# ThriftMeds - Affordable Medications Website

A modern, sleek website built with Next.js and TypeScript that helps users search for medications and get pricing information through a hotline service. The design is inspired by Walgreens with a professional color scheme of red, green, black, and gray.

## Features

- **Medication Search**: Comprehensive search functionality with category filtering
- **Professional Design**: Walgreens-inspired design with modern UI/UX
- **Responsive Layout**: Fully responsive design that works on all devices
- **Hotline Integration**: Direct phone calling functionality for pricing inquiries
- **Professional Typography**: Inter and Poppins fonts for a clean, modern look
- **Color Scheme**: Red (#DA020E), Green (#28A745), Black (#000000), and Gray (#6C757D)

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Heroicons
- **Fonts**: Inter (body) and Poppins (headings)

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn package manager

### Installation

1. Clone the repository or navigate to the project directory:
   ```bash
   cd /Users/customer/Desktop/ThriftMeds
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
ThriftMeds/
├── src/
│   ├── app/
│   │   ├── about/          # About page
│   │   ├── contact/        # Contact page
│   │   ├── search/         # Medication search page
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Homepage
│   └── components/
│       ├── Header.tsx      # Navigation header
│       └── Footer.tsx      # Footer component
├── public/                 # Static assets
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── next.config.js         # Next.js configuration
```

## Pages

### Homepage (`/`)
- Hero section with main search functionality
- Features showcase
- Call-to-action sections
- Professional design with Walgreens-inspired styling

### Search Page (`/search`)
- Advanced medication search with filters
- Category-based filtering
- Real-time search results
- Direct hotline integration for pricing

### About Page (`/about`)
- Company mission and values
- How it works section
- Professional information about the service

### Contact Page (`/contact`)
- Contact form
- Business hours and contact information
- Direct hotline calling functionality

## Design Features

### Color Palette
- **Primary Red**: #DA020E (Walgreens-style red)
- **Primary Green**: #28A745 (Success/call-to-action green)
- **Primary Black**: #000000 (Text and headers)
- **Primary Gray**: #6C757D (Secondary text and accents)
- **Light Gray**: #F8F9FA (Backgrounds)
- **Dark Gray**: #343A40 (Footer backgrounds)

### Typography
- **Headings**: Poppins font family (400, 500, 600, 700, 800 weights)
- **Body Text**: Inter font family (300, 400, 500, 600, 700 weights)

### Key Components
- **Header**: Sticky navigation with search bar and hotline information
- **Footer**: Comprehensive footer with contact information and links
- **Search Interface**: Advanced search with real-time results
- **Call-to-Action Buttons**: Prominent phone calling functionality

## Customization

### Adding New Medications
Edit the `mockMedications` array in `/src/app/page.tsx` and `/src/app/search/page.tsx` to add new medications to the database.

### Modifying Colors
Update the color values in `tailwind.config.js` under the `colors` section.

### Changing Fonts
Modify the font imports in `src/app/globals.css` and update the font family settings in `tailwind.config.js`.

## Phone Integration

The website includes direct phone calling functionality:
- Hotline number: (555) 123-THRIFT
- All phone buttons use `tel:` links for direct calling
- Mobile-optimized for one-tap calling

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is created for demonstration purposes. Please ensure compliance with any applicable regulations when implementing medication-related services.

## Support

For questions or support, please contact the development team or refer to the contact information on the website.
