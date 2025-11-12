## Company Website
https://www.rustlingleavesgames.com

Domain managed by: [namecheap](https://ap.www.namecheap.com/)

### Prerequisites
- Git
- [Go](https://go.dev/doc/install)
- [Hugo (extended)](https://gohugo.io/getting-started/quick-start/)

### Adding Content

This site is powered by Hugo and the Blowfish theme.
- [Hugo](https://gohugo.io/)
- [Blowfish](https://blowfish.page/)

## Build
### Local Build Instructions
To run the server locally:
```
hugo server
```
or
```
hugo server --disableFastRender
```

### GitHub Actions
The site is deployed to the `live-web` branch of the repository when commits are pushed to `main` and the build completes successfully.

To modify the build, check `.github/workflows/hugo.yml`
