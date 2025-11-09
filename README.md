### Prerequisites
- Git
- [Go](https://go.dev/doc/install)
- [Hugo (extended)](https://gohugo.io/getting-started/quick-start/)

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
The site is deployed to the `gh-pages-live` branch of the repository when commits are pushed to `master` and the build completes successfully.

To modify the build, check `.github/workflows/hugo.yml`