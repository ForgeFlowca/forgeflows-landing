# Email Setup Guide for ForgeFlows

This guide will help you set up:
1. ✅ Email forwarding (@forgeflows.ca → your inbox)
2. ✅ Professional email addresses (when you need them)
3. ✅ Automated notifications (waitlist signups)
4. ✅ Contact form (optional)

---

## Part 1: Email Forwarding (Quick Setup - 5 min)

### For MVP Phase (Right Now)

You need to forward emails from your domain to your personal inbox.

#### Step 1: Find your registrar's email settings

Popular registrars:
- **GoDaddy:** godaddy.com > your account > Domain settings > Email forwarding
- **Namecheap:** namecheap.com > Dashboard > Email > Email Forwarding
- **Google Domains:** domains.google.com > Your domain > Email
- **Cloudflare:** cloudflare.com > Domains > Email Routing

#### Step 2: Create forwarding rules

Set up forwards for these addresses (all forward to your personal email):

| From Address | Forward To |
|---|---|
| hello@forgeflows.ca | your.email@gmail.com |
| support@forgeflows.ca | your.email@gmail.com |
| contact@forgeflows.ca | your.email@gmail.com |
| info@forgeflows.ca | your.email@gmail.com |

#### Step 3: Verify it works

- Visit your landing page
- Try to "contact" via the form (if you add one)
- Check that emails arrive in your inbox

---

## Part 2: Notify on Waitlist Signups (Supabase)

### Option A: Supabase Email Notifications (Free)

#### 1. Set up Supabase function (auto-notify you)

Go to your Supabase dashboard:

1. **Database > Webhooks**
2. Click **Create new webhook**
3. Select table: `waitlist`
4. Events: **Insert**
5. HTTP method: **POST**
6. URL: `https://your-backend.com/api/notify-waitlist` (we'll create this)

*Note: You'll need a backend endpoint. For now, skip this and use Option B.*

#### 2. Alternative: Use Supabase Functions (easier)

1. Go to **Edge Functions**
2. Click **Create new function**
3. Name: `notify-waitlist-signup`
4. Paste this code:

```typescript
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2"

serve(async (req) => {
  const payload = await req.json()
  
  // Send email notification
  // You'll need Resend, SendGrid, or similar
  
  return new Response(
    JSON.stringify({ success: true }),
    { headers: { "Content-Type": "application/json" } }
  )
})
```

*Note: This requires a paid email service. Skip for now.*

### Option B: Simple Approach (Now)

1. Check Supabase dashboard manually when you want updates
2. Go to **Table Editor > waitlist**
3. See all signups in real-time
4. Export as CSV anytime

This is fine for MVP! You can automate later when signups volume is high.

---

## Part 3: Professional Email Addresses (When You're Ready)

### When to Set Up Professional Email

- ✅ After you have 100+ waitlist signups
- ✅ When you're hiring team members
- ✅ When you need branded email for credibility

### Option 1: Google Workspace (Recommended)

**Cost:** $12/user/month (includes Gmail + Drive + Docs + Calendar)

#### Setup:
1. Go to workspace.google.com
2. Click **Sign up for Google Workspace**
3. Select your domain: `forgeflows.ca`
4. Create admin account
5. Verify domain ownership
6. Create user accounts:
   - hello@forgeflows.ca
   - support@forgeflows.ca
   - engineering@forgeflows.ca
   - etc.

#### Benefits:
- Full Gmail interface
- Professional look
- Integrates with all Google services
- Easy user management
- Mobile app

### Option 2: Zoho Mail (Budget-Friendly)

**Cost:** Free (up to 5 users), then $1-5/user/month

#### Setup:
1. Go to zoho.com/mail
2. Create account with forgeflows.ca
3. Add users
4. Configure DNS records (Zoho will guide you)

#### Benefits:
- Very affordable
- Works with all email clients
- Good for small teams
- Unlimited storage on paid plans

### Option 3: Microsoft 365 (Enterprise)

**Cost:** $6/user/month

#### Setup:
1. Go to microsoft.com/business/microsoft-365
2. Select domain: forgeflows.ca
3. Create team accounts
4. Configure DNS

#### Benefits:
- Full Office suite
- Outlook + Teams integration
- Enterprise support
- Good for large teams

---

## Part 4: Contact Form (Optional)

If you want a contact form on your landing page:

### Option A: Formspree (Easiest)

1. Go to formspree.io
2. Sign up (free)
3. Create form with forgeflows.ca email
4. They'll give you form ID
5. Add to your landing page:

```jsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <input type="email" name="email" required />
  <textarea name="message" required></textarea>
  <button type="submit">Send</button>
</form>
```

### Option B: Supabase + Function

Create a form that stores in Supabase:

```jsx
const handleSubmit = async (e: React.FormEvent) => {
  const { error } = await supabase
    .from('contact_messages')
    .insert([{ email, message }])
}
```

Then email yourself a summary daily.

### Option C: Basin (Free)

1. Go to usebasin.com
2. Create account
3. Get form endpoint
4. Post to their endpoint
5. They'll email you submissions

---

## Recommended Setup Timeline

### Week 1 (MVP)
- ✅ Email forwarding set up
- ✅ You receive waitlist signups manually
- ✅ Landing page live

### Month 1-3 (Growing)
- ✅ Add automated waitlist notifications (Supabase)
- ✅ Monitor signups in dashboard
- ✅ Manually follow up with interested users

### Month 3+ (Scaling)
- ✅ Set up professional email (Google Workspace)
- ✅ Hire team members
- ✅ Create support@forgeflows.ca email
- ✅ Automate responses

---

## Email Security Best Practices

### DO
- ✅ Use strong passwords (20+ characters)
- ✅ Enable 2FA on all email accounts
- ✅ Keep email forwarding addresses private
- ✅ Use aliases for sensitive accounts

### DON'T
- ❌ Don't use the same password everywhere
- ❌ Don't forward to public email addresses
- ❌ Don't share email passwords in Slack/chat
- ❌ Don't disable security features

---

## Troubleshooting Email

### "Emails not forwarding"
- Wait 24 hours for DNS to propagate
- Check registrar's forwarding settings
- Verify forward address is correct
- Check spam folder

### "Getting too many emails"
- Create email filters/labels
- Use email rules to auto-organize
- Unsubscribe from notifications you don't need

### "Need to change forwarding address"
- Go back to registrar's email settings
- Update the destination address
- Test with a test email

---

## Quick Links

- **GoDaddy Email:** godaddy.com/help/email
- **Namecheap Email:** namecheap.com/support/email
- **Google Workspace:** workspace.google.com
- **Zoho Mail:** zoho.com/mail
- **Formspree:** formspree.io

---

## Next Steps

1. **Today:** Set up email forwarding (5 minutes)
2. **Week 1:** Launch landing page with waitlist
3. **When growing:** Add notifications (optional)
4. **When hiring:** Set up professional email (Google Workspace)

That's it! Your email is ready. 📧
