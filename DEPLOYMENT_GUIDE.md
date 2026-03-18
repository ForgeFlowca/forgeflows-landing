# ForgeFlows Landing Page - Deployment Guide

This guide will help you:
1. ✅ Set up a GitHub repository
2. ✅ Deploy to Vercel (free tier, auto-scales)
3. ✅ Connect your custom domain (forgeflows.ca)
4. ✅ Set up the waitlist database
5. ✅ Configure email infrastructure

---

## Phase 1: Set Up Supabase Waitlist Table

### 1. Go to your Supabase Dashboard
- Open https://supabase.com and log into your project
- Navigate to **SQL Editor** (left sidebar)

### 2. Create the waitlist table
- Click **New Query**
- Copy the entire contents from `SUPABASE_SCHEMA.sql` (in this folder)
- Paste into the editor
- Click **Run** (⌘+Enter)
- ✅ Table created!

### 3. Verify the table was created
- Go to **Table Editor** (left sidebar)
- You should see a new table called `waitlist` with columns: id, email, role, created_at

---

## Phase 2: Create a GitHub Repository

### 1. Go to GitHub
- Go to https://github.com/new
- **Repository name:** `forgeflows-landing`
- **Description:** "Landing page & waitlist for ForgeFlows"
- **Public** (makes it easier to deploy to Vercel)
- Click **Create repository**

### 2. Push your code to GitHub
- Open your terminal in the project folder
- Run these commands:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: landing page with waitlist"

# Add remote (replace YOUR_USERNAME and YOUR_REPO with your actual values)
git remote add origin https://github.com/YOUR_USERNAME/forgeflows-landing.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 3. Verify on GitHub
- Go to https://github.com/YOUR_USERNAME/forgeflows-landing
- You should see all your files

---

## Phase 3: Deploy to Vercel

### 1. Go to Vercel
- Go to https://vercel.com
- Click **Sign up** (use GitHub account for easiest setup)
- Authorize Vercel to access your GitHub

### 2. Import your project
- Click **Add New** > **Project**
- Search for `forgeflows-landing`
- Click **Import**

### 3. Configure environment variables
- Under **Environment Variables**, add:
  - `VITE_SUPABASE_URL` = your Supabase URL (from your .env file)
  - `VITE_SUPABASE_PUBLISHABLE_KEY` = your public key (from your .env file)
  - `VITE_GEMINI_API_KEY` = your Gemini API key (from your .env file)

- Click **Deploy**
- ✅ Your site is now live at `forgeflows-landing.vercel.app`

### 4. Test the waitlist
- Visit your Vercel URL
- Click "Join Waitlist"
- Enter an email
- Check your Supabase dashboard under the `waitlist` table to confirm the entry was saved

---

## Phase 4: Connect Your Custom Domain

### 1. Add domain to Vercel
- In Vercel, go to **Settings** > **Domains**
- Click **Add**
- Enter `forgeflows.ca`
- Vercel will show you **DNS records** to add

### 2. Update DNS at your registrar
- Go to your domain registrar (GoDaddy, Namecheap, etc.)
- Find **DNS Settings**
- Add the DNS records Vercel provided:
  - Usually: A record pointing to Vercel's IP
  - Or: CNAME record pointing to Vercel

### 3. Verify domain
- Wait 5-15 minutes for DNS to propagate
- Go to https://forgeflows.ca
- ✅ Your site should be live!

---

## Phase 5: Set Up Email Infrastructure

### Option A: Email Forwarding (Recommended for MVP)

#### Using your registrar:
- Go to your domain registrar's email/forwarding settings
- Create forwarding rules:
  - `hello@forgeflows.ca` → your personal email
  - `support@forgeflows.ca` → your personal email
  - `contact@forgeflows.ca` → your personal email

#### Using Supabase (to email you on signups):
- Go to Supabase > **Email Templates** (Authentication > Email Templates)
- Or use a Supabase function to send you a notification email when someone joins the waitlist

### Option B: Professional Email (When You're Ready to Scale)

When you need full @forgeflows.ca email addresses:
- Use **Google Workspace** ($12/user/month)
  - Set up Gmail with your domain
  - Create accounts like hello@forgeflows.ca, support@forgeflows.ca, etc.
- Or use **Zoho Mail** (free tier available)

---

## Phase 6: Monitor Your Waitlist

### In Supabase:
- Go to **Table Editor** > **waitlist**
- See all signups in real-time
- Export data as CSV anytime

### Set up notifications (optional):
- Supabase > **Database** > **Webhooks**
- Create a webhook that sends you an email or Slack message on every signup

---

## Important Notes

### For Production Later:
- When you're ready to launch the full platform:
  1. Keep this Vercel deployment running (just update the code)
  2. Your waitlist data stays in Supabase
  3. No migration needed — everything scales automatically
  4. Update your DNS to point to the new app if you host it elsewhere

### Security Checklist:
- ✅ Environment variables are secure (never commit .env file)
- ✅ Supabase RLS prevents unauthorized access
- ✅ HTTPS is automatically enabled on Vercel
- ✅ Waitlist emails are private and validated

### Scaling Later:
- Vercel's free tier handles millions of requests
- Supabase free tier includes 500MB of database storage
- When you outgrow free tiers, you just upgrade — no code changes needed

---

## Troubleshooting

### "Waitlist form doesn't work"
- Check browser console for errors (F12 > Console)
- Verify your Supabase keys are correct in `.env`
- Make sure the `waitlist` table exists in Supabase

### "Domain isn't working"
- DNS changes can take 15-30 minutes
- Check DNS propagation: https://dnschecker.org/
- Verify Vercel shows "Active" next to your domain

### "Can't deploy to Vercel"
- Make sure your `.env` file is in `.gitignore` (so secrets aren't pushed)
- Verify you added the env vars in Vercel's dashboard
- Check build logs in Vercel for specific errors

---

## Next Steps

Once your landing page is live:

1. **Share with friends/investors** — Get early feedback
2. **Set up analytics** — Add Vercel Analytics or Google Analytics
3. **Collect feedback** — Monitor what questions people ask
4. **Plan full platform launch** — When ready, deploy the full app to the same domain
5. **Email infrastructure** — Upgrade to professional email when you're ready

Good luck! 🚀
