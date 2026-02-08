# How to Push to GitHub and Deploy Your Portfolio

Follow these steps to put your portfolio online for free using GitHub Pages.

## Prerequisites
1.  **Git Installed**: Ensure you have Git installed on your computer.
    - Check by opening a terminal (Command Prompt or PowerShell) and typing: `git --version`
2.  **GitHub Account**: Make sure you have an account at [github.com](https://github.com/).

---

## Step 1: Initialize Git in Your Project Folder

1.  Open your project folder in VS Code.
2.  Open the Terminal in VS Code (`Ctrl + ~` or `Terminal > New Terminal`).
3.  Type the following commands one by one and press Enter after each:

```bash
git init
```
*(This initializes a new empty Git repository)*

```bash
git add .
```
*(This stages all your files - the `.` means "all files")*

```bash
git commit -m "Initial portfolio commit"
```
*(This saves your changes with a message)*

---

## Step 2: Create a Repository on GitHub

1.  Go to [github.com/new](https://github.com/new).
2.  **Repository name**: give it a name like `my-portfolio` (or `gratvitya-portfolio`).
3.  **Public/Private**: Select **Public** (required for free GitHub Pages).
4.  **Initialize this repository with**: Leave all these unchecked (no README, no .gitignore).
5.  Click **Create repository**.

---

## Step 3: Connect and Push Your Code

1.  After creating the repo, you will see a page with setup instructions. Look for the section **"…or push an existing repository from the command line"**.
2.  Copy the commands shown there. They will look something like this (but copy YOURS from the browser):

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

3.  Paste these commands into your VS Code terminal and press Enter.
    - *Note: If usage asks for a password, it might be looking for a Personal Access Token or browser authentication.*

---

## Step 4: Deploy Using GitHub Pages

1.  Go back to your repository page on GitHub.
2.  Click on the **Settings** tab (top right of the repo menu).
3.  On the left sidebar, scroll down and click on **Pages**.
4.  Under **Build and deployment** > **Source**, select **Deploy from a branch**.
5.  Under **Branch**, click the dropdown that says "None" and select **main**.
6.  Click **Save**.

---

## Step 5: Check Your Live Site!

1.  Wait about 1-2 minutes. GitHub is building your site.
2.  Refresh the **Pages** settings page.
3.  You will see a bar at the top saying: **"Your site is live at..."** followed by a link (e.g., `https://your-username.github.io/my-portfolio/`).
4.  Click that link to see your live portfolio!

---

## Common Issues & Fixes
- **Images not loading?** Make sure image paths are correct. Use relative paths like `./images/pic.jpg` or exact filenames (case-sensitive).
- **CSS not showing?** Ensure the `<link>` tag in your HTML points to the correct filename (`portfolie.css`).
