# Tailwind + Turborepo Sandboxing

I used this repo to tinker with configurations. It's not meant to be a production-ready example.

## Current Known Issues

### @tailwindcss/typography

`prose` is not present in the generated CSS when using `@tailwindcss/typography`.

```sh
git clone https://github.com/snowtrek/tailwind-turborepo-sandbox
cd tailwind-turborepo-sandbox
yarn install
yarn dev
```

Visit http://localhost:3000 (`appDir` implementation) or http://localhost:3000/oops (`404` legacy behavior) and you'll see `prose` is not applied.
