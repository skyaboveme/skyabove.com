# GoDaddy DNS Setup for skyabove.com → GitHub Pages

## Step-by-Step Instructions

### 1. Log in to GoDaddy
- Go to https://www.godaddy.com
- Sign in to your account

### 2. Access DNS Management
- Click on your profile icon (top right)
- Select **"My Products"**
- Find **skyabove.com** in your domain list
- Click the **DNS** button next to it (or click the domain, then **"Manage DNS"**)

### 3. Delete Existing Records (Important!)
Before adding new records, you need to remove conflicting ones:

**Delete these if they exist:**
- Any existing **A records** pointing to `@` or `skyabove.com`
- Any existing **CNAME record** for `@` (root domain)
- Keep the existing **CNAME** for `www` if you want to update it, or delete it to recreate

### 4. Add A Records for GitHub Pages

Click **"Add"** and create **4 separate A records**:

#### A Record #1
```
Type: A
Name: @
Value: 185.199.108.153
TTL: 600 seconds (or default)
```

#### A Record #2
```
Type: A
Name: @
Value: 185.199.109.153
TTL: 600 seconds (or default)
```

#### A Record #3
```
Type: A
Name: @
Value: 185.199.110.153
TTL: 600 seconds (or default)
```

#### A Record #4
```
Type: A
Name: @
Value: 185.199.111.153
TTL: 600 seconds (or default)
```

### 5. Add CNAME Record for www

Click **"Add"** and create a CNAME record:

```
Type: CNAME
Name: www
Value: skyaboveme.github.io
TTL: 1 Hour (or default)
```

**Important:** Do NOT include `https://` or trailing periods in the value field.

### 6. Save Changes
- Click **"Save"** at the bottom of the page
- GoDaddy will warn you about changes - confirm to proceed

### 7. Enable GitHub Pages (if not done already)

1. Go to: https://github.com/skyaboveme/skyabove.com/settings/pages
2. Under **"Source"**, select **"GitHub Actions"**
3. Under **"Custom domain"**, enter: `skyabove.com`
4. Check **"Enforce HTTPS"** (wait until DNS propagates first)
5. Click **"Save"**

## Verification

### Check DNS Propagation (takes 5-30 minutes)
Use these tools to verify:
- https://dnschecker.org (enter `skyabove.com`)
- https://www.whatsmydns.net

### Expected Results:
- `skyabove.com` should point to GitHub's IP addresses
- `www.skyabove.com` should point to `skyaboveme.github.io`

### Test Your Site:
Once DNS propagates:
- http://skyabove.com ✅
- http://www.skyabove.com ✅
- https://skyabove.com ✅ (after enabling HTTPS in GitHub)

## Troubleshooting

### "DNS_PROBE_FINISHED_NXDOMAIN" Error
- DNS hasn't propagated yet, wait 15-30 more minutes
- Clear your browser cache and DNS cache

### "Site can't be reached"
- Check that all 4 A records are added correctly
- Verify no typos in IP addresses
- Make sure you deleted conflicting records

### HTTPS Not Working
- Wait for DNS to fully propagate first (30 min - 24 hours)
- Then enable "Enforce HTTPS" in GitHub Pages settings
- GitHub will automatically provision an SSL certificate

### GoDaddy Domain Forwarding Conflict
- Make sure **Domain Forwarding** is turned OFF
- Go to: Domain Settings → Forwarding → Disable it

## Quick Reference

**GitHub Pages IPs:**
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**CNAME Target:**
```
skyaboveme.github.io
```

---

## Timeline

- **Immediate:** GitHub Actions will deploy your site
- **5-30 minutes:** DNS records propagate globally
- **Up to 24 hours:** HTTPS certificate provisioning (usually much faster)

Your site will be live at **https://skyabove.com** once complete! 🚀
