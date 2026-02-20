# GitHub Contribution Gravity Lens – Web UI

[![Website](https://img.shields.io/website?url=https%3A%2F%2Fgravity-lens.rujuu.com)](https://gravity-lens.rujuu.com)
[![GitHub stars](https://img.shields.io/github/stars/Rujuu-prog/github-contribution-gravity-lens-web)](https://github.com/Rujuu-prog/github-contribution-gravity-lens-web/stargazers)
[![GitHub stars](https://img.shields.io/github/stars/Rujuu-prog/github-contribution-gravity-lens?label=main%20repo%20stars)](https://github.com/Rujuu-prog/github-contribution-gravity-lens/stargazers)

[日本語](./README.ja.md)

A web-based tool for previewing, customizing, and downloading gravitational lensing visualizations of your GitHub contribution graph.

> **Looking to add this to your GitHub profile automatically?**
> 
> Check out the main repository: [github-contribution-gravity-lens](https://github.com/Rujuu-prog/github-contribution-gravity-lens) — set up a GitHub Action and embed the SVG directly in your README.

## Demo

<p align="center">
  <img src="https://gravity-lens.rujuu.com/api/svg/Rujuu-prog?theme=deep-space" alt="Gravity Lens Demo (deep-space)" width="800">
</p>

## Features

- **6 themes** — github, deep-space, monochrome, solar-flare, event-horizon, paper-light
- **Customizable parameters** — adjust gravitational strength, animation duration, and clip percentage
- **Live preview** — instantly see how your contribution graph looks with different settings
- **SVG download** — save the generated SVG file directly
- **Embed code generation** — copy Markdown or HTML snippets to use anywhere
- **Permalink** — share your visualization via `/u/[username]`

## Usage

### Web UI

Visit **[gravity-lens.rujuu.com](https://gravity-lens.rujuu.com)**, enter your GitHub username, pick a theme, tweak the parameters, and download or copy the embed code.

### API

Generate an SVG directly via the API:

```
https://gravity-lens.rujuu.com/api/svg/[username]?theme=deep-space&strength=0.35&duration=14&clipPercent=95
```

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `theme` | string | `deep-space` | Theme name |
| `strength` | float | `0.35` | Gravitational lensing strength (0–1) |
| `duration` | integer | `14` | Animation duration in seconds |
| `clipPercent` | float | `95` | Clipping percentage |

### Embed

Use an `<img>` tag to embed the SVG anywhere that supports HTML:

```html
<img src="https://gravity-lens.rujuu.com/api/svg/YOUR_USERNAME?theme=deep-space" alt="GitHub Contribution Gravity Lens" width="800">
```

Or in Markdown:

```markdown
![GitHub Contribution Gravity Lens](https://gravity-lens.rujuu.com/api/svg/YOUR_USERNAME?theme=deep-space)
```

## Themes

| Theme | Description |
|-------|-------------|
| `github` | GitHub's default green contribution colors |
| `deep-space` | Purple and blue dark space theme (default) |
| `monochrome` | Grayscale theme |
| `solar-flare` | Orange and yellow solar theme |
| `event-horizon` | Red and crimson dark theme |
| `paper-light` | Light green theme for light backgrounds |

## Related

- **[github-contribution-gravity-lens](https://github.com/Rujuu-prog/github-contribution-gravity-lens)** — The main repository. Use GitHub Actions to automatically generate and embed the SVG in your profile README.

## Tech Stack

Next.js 16 · React 19 · Tailwind CSS 4 · Motion · TypeScript
