# Upload Instructions for GitHub Pages

## 📋 Files Included in This Package

```
pod-automation-website/
├── index.html              ← Main homepage
├── dashboard.html          ← Interactive dashboard
├── styles.css             ← All styling
├── script.js              ← Interactive features
├── README.md              ← Project documentation
├── GITHUB_DEPLOYMENT.md   ← Deployment guide
├── UPLOAD_INSTRUCTIONS.md ← This file
└── guides/
    └── niche-research.html ← First guide (more guides to be added)
```

---

## 🚀 Step-by-Step Upload to GitHub Pages

### **Step 1: Create a GitHub Repository**

1. Go to [GitHub.com](https://github.com)
2. Sign in to your account
3. Click the **+** icon (top right) → **New repository**
4. Repository name: `pod-automation-website`
5. Description: `Print-on-Demand TikTok Automation System`
6. Choose **Public** (required for free GitHub Pages)
7. Click **Create repository**

---

### **Step 2: Upload All Files to GitHub**

**Option A: Using GitHub Web Interface (Easiest)**

1. Go to your newly created repository
2. Click **Add file** → **Upload files**
3. **Drag and drop all files** from this package, OR click to select them:
   - `index.html`
   - `dashboard.html`
   - `styles.css`
   - `script.js`
   - `README.md`
   - `GITHUB_DEPLOYMENT.md`
   - `guides/` folder (with all files inside)

4. Scroll down and click **Commit changes**
5. Add commit message: "Initial commit: POD automation website"
6. Click **Commit changes**

**Option B: Using Git Command Line**

If you have Git installed:

```bash
# Navigate to this package directory
cd /path/to/pod-automation-website

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: POD automation website"

# Add remote (replace USERNAME with your GitHub username)
git remote add origin https://github.com/USERNAME/pod-automation-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

---

### **Step 3: Enable GitHub Pages**

1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Scroll down to **Pages** section (left sidebar)
4. Under "Source", select **Deploy from a branch**
5. Select branch: **main**
6. Select folder: **/ (root)**
7. Click **Save**

---

### **Step 4: Your Site is Live!**

GitHub will display a message like:
> "Your site is published at `https://USERNAME.github.io/pod-automation-website/`"

**Your website is now live!** 🎉

---

## 📝 File Descriptions

| File | Purpose |
|------|---------|
| `index.html` | Main homepage with hero section, overview, and navigation |
| `dashboard.html` | Interactive dashboard with calculators and metrics |
| `styles.css` | All CSS styling for the website |
| `script.js` | JavaScript for interactive features (calculators, animations) |
| `README.md` | Project documentation and overview |
| `GITHUB_DEPLOYMENT.md` | Detailed GitHub Pages deployment guide |
| `guides/niche-research.html` | First comprehensive guide (more guides to be added) |

---

## ✅ Verification Checklist

After uploading, verify everything works:

- [ ] Homepage loads and displays content
- [ ] Navigation menu works
- [ ] Dashboard page loads
- [ ] Buttons and links work
- [ ] Responsive on mobile (test with browser DevTools)
- [ ] All images and styling display correctly

---

## 🔄 Updating Your Site

After initial upload, updating is easy:

**Via GitHub Web Interface:**
1. Go to your repository
2. Click on the file you want to edit
3. Click the pencil icon (Edit)
4. Make changes
5. Click **Commit changes**

**Via Git:**
```bash
git add .
git commit -m "Update: [describe changes]"
git push origin main
```

Your site updates automatically within seconds!

---

## 🌐 Custom Domain (Optional)

To use your own domain (e.g., `pod-automation.com`):

1. Purchase a domain from a registrar (GoDaddy, Namecheap, etc.)
2. Update DNS records at your registrar
3. Go to repository **Settings** → **Pages**
4. Enter your custom domain
5. Check **Enforce HTTPS**
6. Click **Save**

See `GITHUB_DEPLOYMENT.md` for detailed DNS configuration.

---

## 🆘 Troubleshooting

### Site shows blank page?
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Wait 2-3 minutes for GitHub to deploy
- Check browser console (F12) for errors

### 404 Error on guide pages?
- Verify `guides/` folder is uploaded
- Check file paths in HTML are correct
- Make sure all files are in the repository

### CSS not loading?
- Hard refresh your browser
- Check that `styles.css` is in the root directory
- Verify file names match exactly (case-sensitive)

### Custom domain not working?
- Wait 24-48 hours for DNS propagation
- Verify DNS records are correct
- Check domain is configured in GitHub Pages settings

---

## 📊 Monitor Your Site

**View Traffic:**
- Go to repository → **Insights** → **Traffic**
- See visitor count, page views, and referrers

**Check Deployments:**
- Go to repository → **Actions**
- See deployment history and any errors

---

## 🎯 Next Steps

1. ✅ Upload all files to GitHub
2. ✅ Enable GitHub Pages
3. ✅ Share your URL: `https://USERNAME.github.io/pod-automation-website/`
4. ⏭️ Add more guides to the `guides/` folder
5. ⏭️ Update content as needed
6. ⏭️ (Optional) Set up custom domain

---

## 📚 Additional Resources

- **GitHub Pages Docs:** https://pages.github.com/
- **GitHub Help:** https://docs.github.com/en/pages
- **Custom Domains:** https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

---

## ✨ You're All Set!

Your print-on-demand automation website is ready to deploy. Follow the steps above and your site will be live in minutes.

**Questions?** Refer to `GITHUB_DEPLOYMENT.md` for more detailed instructions.

Good luck! 🚀
