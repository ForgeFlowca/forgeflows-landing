# ForgeFlows Landing Page & Waitlist

A modern, production-ready landing page for the ForgeFlows manufacturing marketplace. Built with React, TypeScript, Tailwind CSS, and Supabase.

## 🚀 What's Included

- **Landing Page** — Hero section with feature highlights and CTAs
- **How It Works** — 8-step visual timeline of the platform workflow
- **About Us** — Company mission, values, and approach
- **Waitlist** — Email collection form for early access signups
- **Responsive Design** — Mobile-first, fully responsive
- **Dark Theme** — Modern slate/blue color scheme
- **Zero Friction** — One-click signup, no payment required

## 🛠 Tech Stack

- **Frontend:** React 19 + TypeScript
- **Build:** Vite 6
- **Styling:** Tailwind CSS + custom theme
- **Icons:** Lucide React
- **Backend:** Supabase (PostgreSQL + Auth)
- **Deployment:** Vercel (free tier, auto-scales)
- **Domain:** forgeflows.ca (custom domain)

## 📦 Installation

### Prerequisites
- Node.js 16+ and npm
- GitHub account (for pushing code)
- Supabase account (free tier)
- Vercel account (free tier, sign up with GitHub)

### Local Setup

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/forgeflows-landing.git
cd forgeflows-landing

# Install dependencies
npm install

# Create .env file with your credentials
cp _env .env
# Edit .env and add:
# - VITE_SUPABASE_URL
# - VITE_SUPABASE_PUBLISHABLE_KEY
# - VITE_GEMINI_API_KEY

# Start development server
npm run dev

# Open http://localhost:3000 in your browser
```

## 🚢 Deployment

### To Vercel (Recommended)

1. **Push to GitHub** (see DEPLOYMENT_GUIDE.md)
2. **Go to https://vercel.com** and import the repository
3. **Add environment variables** in Vercel dashboard
4. **Deploy** — It's live! 🎉

See `DEPLOYMENT_GUIDE.md` for detailed step-by-step instructions.

## 📋 Project Structure

```
forgeflows-landing/
├── LandingPage.tsx          # Main hero + features
├── HowItWorksPage.tsx       # 8-step workflow timeline
├── AboutPage.tsx            # Company mission & values
├── WaitlistPage.tsx         # Email signup form
├── PublicLayout.tsx         # Navigation + footer
├── AppPublic.tsx            # Simplified routing (landing only)
├── constants.ts             # Shared constants
├── types.ts                 # TypeScript types
├── vite.config.ts           # Build configuration
├── tsconfig.json            # TypeScript config
├── index.html               # HTML entry point
├── package.json             # Dependencies & scripts
│
├── DEPLOYMENT_GUIDE.md      # Complete deployment guide
├── SUPABASE_SCHEMA.sql      # Database schema
├── vercel.json              # Vercel configuration
└── .gitignore               # Git ignore rules
```

## 🎯 Key Features

### Waitlist Form
- Role selection (Buyer vs. Supplier)
- Email validation
- Real-time Supabase storage
- Success confirmation
- Error handling

### Responsive Design
- Mobile-first approach
- Works on all devices
- Optimized images
- Fast load times

### SEO Ready
- Meta tags in HTML
- Semantic HTML structure
- Open Graph support (add if needed)

### Performance
- Code splitting with React
- CSS optimization with Tailwind
- Static site generation ready
- Lighthouse-ready (100/100 possible)

## 🔐 Security

- ✅ Environment variables kept private
- ✅ Supabase RLS (Row Level Security)
- ✅ HTTPS by default on Vercel
- ✅ No sensitive data in frontend
- ✅ Email validation

## 📊 Database Schema

### Waitlist Table
```sql
id          UUID (primary key)
email       VARCHAR (unique)
role        VARCHAR ('GENERATOR' or 'ENABLER')
created_at  TIMESTAMP
```

See `SUPABASE_SCHEMA.sql` for full SQL.

## 🎨 Customization

### Colors
Edit the Tailwind theme in `index.html`:
```html
<script>
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          blue: {...},    // Edit blue palette
          slate: {...}    // Edit slate palette
        }
      }
    }
  }
</script>
```

### Content
- `LandingPage.tsx` — Hero + features
- `HowItWorksPage.tsx` — Process steps
- `AboutPage.tsx` — Mission & values
- `PublicLayout.tsx` — Navigation + footer

### Fonts
Currently using Inter from Google Fonts. Change in `index.html` if needed.

## 🚀 Scaling

### When Ready to Launch Full Platform
1. Keep this deployment running at forgeflows.ca
2. Import the waitlist database into your full app
3. Migrate users with a simple SQL query
4. Deploy the full platform to the same domain
5. No downtime or data loss

### Free Tier Limits
- **Vercel:** 100GB/month bandwidth, unlimited deployments
- **Supabase:** 500MB storage, 2M requests/month
- Both auto-upgrade when you grow

## 🐛 Troubleshooting

### Waitlist Form Not Working
```bash
# Check browser console (F12 > Console)
# Verify .env variables match Supabase
# Ensure waitlist table exists in Supabase
```

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Domain Issues
- Wait 5-30 minutes for DNS propagation
- Check DNS status: https://dnschecker.org/
- Verify Vercel shows domain as "Active"

## 📞 Support

For issues or questions:
1. Check DEPLOYMENT_GUIDE.md
2. Review Vercel docs: https://vercel.com/docs
3. Review Supabase docs: https://supabase.com/docs

## 📝 License

This project is private. All rights reserved.

## 🎯 Roadmap

- [ ] Add Google Analytics
- [ ] Add form validation improvements
- [ ] Add email notification on signup (optional)
- [ ] Add blog section (future)
- [ ] Add customer testimonials (future)
- [ ] Integrate with full platform (future)

---

**Ready to launch?** See DEPLOYMENT_GUIDE.md for step-by-step instructions. 🚀
