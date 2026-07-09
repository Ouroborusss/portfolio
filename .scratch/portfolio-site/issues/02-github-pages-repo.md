# Create the GitHub Pages repo and provide username

Type: task
Status: resolved
Blocked by:

## Question

Provision the GitHub side so the site has a home and can deploy.

HITL checklist for the human:

- Provide the GitHub username (fixes the final `site`/`base` config and the
  published URL).
- Decide user site (`username.github.io`) vs project site
  (`username.github.io/<repo>`) — user site is simplest; project site needs a
  `base` path.
- Create the repository on GitHub and confirm it is empty/ready to push.
- Enable GitHub Pages (source: GitHub Actions).

## Answer

- **GitHub username**: Ouroborusss
- **Repo**: `portfolio` → https://github.com/Ouroborusss/portfolio
- **Site type**: project site
- **Published URL**: https://Ouroborusss.github.io/portfolio
- **Astro config**: `site: 'https://Ouroborusss.github.io'`, `base: '/portfolio'`
- **Pages source**: GitHub Actions (enabled)
- **Remote**: `origin` set to `https://github.com/Ouroborusss/portfolio.git`
