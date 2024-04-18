This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install packages

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## RSC Form

This is a demo of how to combine server components in a form and still make use of client side validation using zod and react-hook-form.
By breaking all compnents into client and server component and handle the respective logic where needed, along with using context to pass data around between the form and its components only on the client you can achieve the best of both worlds.
