# 🚀 ForgeFlows Landing Page - Quick Start Checklist

Complete these steps in order to launch your landing page and waitlist.

---

## ✅ Checklist

### Phase 1: Database Setup (5 min)

- [ ] Open https://supabase.com and log into your project
- [ ] Go to SQL Editor > New Query
- [ ] Copy the contents of `SUPABASE_SCHEMA.sql` from this folder
- [ ] Paste into SQL editor and click Run
- [ ] Verify in Table Editor that `waitlist` table exists
- [ ] ✅ Database ready!

### Phase 2: GitHub Setup (10 min)

- [ ] Go to https://github.com/new
- [ ] Create repository: `forgeflows-landing`
- [ ] Make it public
- [ ] Click Create
- [ ] Open your terminal in the project folder
- [ ] Run:
  ```bash
  git init
  git add .
  git commit -m "Initial commit: landing page with waitlist"
  git branch -M main
  git remote add origin https://github.com/YOUR_USERNAME/forgeflows-landing.git
  git push -u origin main
  ```
- [ ] Verify all files are on GitHub
- [ ] ✅ Code ready!

### Phase 3: Vercel Deployment (5 min)

- [ ] Go to https://vercel.com
- [ ] Sign up or log in with GitHub
- [ ] Click "Add New" > "Project"
- [ ] Import `forgeflows-landing`
- [ ] Under Environment Variables, add:
  - [ ] `VITE_SUPABASE_URL` = (from your .env)
  - [ ] `VITE_SUPABASE_PUBLISHABLE_KEY` = (from your .env)
  - [ ] `VITE_GEMINI_API_KEY` = (from your .env)
- [ ] Click Deploy
- [ ] Visit your Vercel URL (e.g., forgeflows-landing.vercel.app)
- [ ] Test the waitlist form
- [ ] Check Supabase to confirm signup was saved
- [ ] ✅ Site live!

### Phase 4: Custom Domain (10 min)

- [ ] In Vercel, go to Settings > Domains
- [ ] Click Add
- [ ] Enter: `forgeflows.ca`
- [ ] Vercel shows DNS records
- [ ] Go to your domain registrar (GoDaddy, Namecheap, etc.)
- [ ] Update DNS records as Vercel instructed
- [ ] Wait 5-15 minutes for DNS to propagate
- [ ] Visit https://forgeflows.ca
- [ ] ✅ Domain live!

### Phase 5: Email Setup (5 min)

- [ ] Go to your domain registrar
- [ ] Find email/forwarding settings
- [ ] Create forwards:
  - [ ] `hello@forgeflows.ca` → your email
  - [ ] `support@forgeflows.ca` → your email
  - [ ] `contact@forgeflows.ca` → your email
- [ ] ✅ Email ready!

---

## 📋 Files Reference

| File | Purpose |
|------|---------|
| `DEPLOYMENT_GUIDE.md` | Detailed step-by-step instructions |
| `EMAIL_SETUP.md` | Email configuration guide |
| `SUPABASE_SCHEMA.sql` | Database schema (copy into Supabase) |
| `README.md` | Project overview and structure |
| `vercel.json` | Vercel configuration |
| `.gitignore` | Prevents committing secrets |
| `LandingPage.tsx` | Hero section + features |
| `HowItWorksPage.tsx` | 8-step process |
| `AboutPage.tsx` | Company info |
| `WaitlistPage.tsx` | Email signup form |

---

## 🔍 Testing Checklist

After deployment, verify everything works:

- [ ] Landing page loads at https://forgeflows.ca
- [ ] Navigation links work
- [ ] Mobile responsive (test on phone)
- [ ] Click "Join Waitlist" goes to waitlist page
- [ ] Submit email on waitlist form
- [ ] Check Supabase table — email is there
- [ ] All form fields validate (require valid email)
- [ ] Success message shows after signup
- [ ] Analytics show page views (if added)

---

## 🎯 What You've Accomplished

✅ Modern landing page (React + Tailwind)  
✅ Email collection system (Supabase)  
✅ One-click signup (no payment, no friction)  
✅ Professional deployment (Vercel + custom domain)  
✅ Email infrastructure (@forgeflows.ca)  
✅ Scalable foundation (ready for full platform)  

---

## 📊 Next Steps

### Immediately (Day 1)
1. Share landing page with friends & advisors
2. Get feedback on messaging
3. Monitor waitlist signups

### Week 1
1. Optimize based on feedback
2. Add Google Analytics (optional)
3. Start following up with signups

### Month 1
1. Reach out to 100+ waitlist users
2. Gather feature requests
3. Start building full platform features

### When Ready
1. Build out the full marketplace platform
2. Keep this landing page running
3. Migrate waitlist data to full platform
4. Launch! 🎉

---

## 💡 Pro Tips

### Optimization
- Add UTM parameters to track where people come from
- Use Vercel Analytics to see traffic
- Monitor Supabase for signup trends (role breakdown)

### Growth
- Share landing page on Twitter, LinkedIn, Product Hunt
- Email early signups for feedback
- Iterate based on what you learn

### Scaling
- At 10K signups, upgrade Supabase to paid
- At 1M requests/month, upgrade Vercel to paid
- Both will notify you before you hit limits

---

## ⚠️ Important Notes

### Security
- ✅ Never commit `.env` file (it's in .gitignore)
- ✅ Vercel handles HTTPS automatically
- ✅ Supabase RLS prevents unauthorized access

### Billing
- ✅ Vercel: Free tier is $0 unless you exceed 100GB/month
- ✅ Supabase: Free tier is $0 for up to 500MB storage
- ✅ Domain: ~$10-15/year depending on registrar

### Backups
- Supabase automatically backs up your data
- GitHub is your code backup
- Export waitlist data monthly as CSV

---

## 🆘 Help

### If something breaks:
1. Check DEPLOYMENT_GUIDE.md troubleshooting section
2. Review error messages in Vercel deploy logs
3. Check browser console (F12 > Console)
4. Verify environment variables match Supabase keys

### Common Issues:
| Problem | Solution |
|---------|----------|
| "Supabase connection error" | Verify VITE_SUPABASE_URL and key in Vercel env vars |
| "Domain not working" | Wait 30 min for DNS, check dns propagation |
| "Waitlist form fails" | Open browser console, check for errors |
| "Emails not forwarding" | Check registrar email settings, verify address |

---

## 🎉 You're Ready!

You now have:
- ✅ A professional landing page
- ✅ A working waitlist system
- ✅ A scalable architecture
- ✅ A custom domain
- ✅ Professional email

**Time to launch!** Share this with the world. 🚀

---

**Questions?** See DEPLOYMENT_GUIDE.md or EMAIL_SETUP.md for more detailed instructions.
