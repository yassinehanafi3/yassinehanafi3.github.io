# Deployment Guide

## Branch Structure

This project uses a two-branch workflow for development and deployment:

- **`develop`**: Development branch for active work and testing
- **`main`**: Production branch that triggers automatic deployment
- **`gh-pages`**: Auto-generated branch containing the built site (managed by GitHub Actions)

## Workflow

### Development Workflow

1. **Start development on `develop` branch:**
   ```bash
   git checkout develop
   ```

2. **Make your changes and commit:**
   ```bash
   git add .
   git commit -m "Your commit message"
   ```

3. **Push to develop:**
   ```bash
   git push origin develop
   ```

### Deployment Workflow

1. **When ready to deploy, merge develop into main:**
   ```bash
   git checkout main
   git merge develop
   git push origin main
   ```

2. **GitHub Actions will automatically:**
   - Build the project
   - Deploy to the `gh-pages` branch
   - Update your live site at https://elhanafiyassine.me

## GitHub Pages Configuration

1. Go to your repository settings on GitHub
2. Navigate to "Pages" in the sidebar
3. Set source to "GitHub Actions" (this is the recommended approach for public repositories)
4. The workflow will automatically handle deployment to GitHub Pages

## Repository Settings

Since this is a public repository, make sure to:

1. Enable GitHub Pages in repository settings
2. Set the source to "GitHub Actions" 
3. The workflow has the necessary permissions to deploy automatically

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## Notes

- GitHub Actions handles all automatic deployments using the official GitHub Pages deployment action
- Only pushes to `main` trigger deployments
- Pull requests to `main` will build but not deploy (for testing)
- The workflow uses GitHub's official Pages deployment which is more secure for public repositories
- No manual `gh-pages` branch management needed - GitHub handles this automatically 