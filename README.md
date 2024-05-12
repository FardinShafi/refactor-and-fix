# Refactor & Fix

_. Refactor the code
_. Fix the bug
\*. Implement the feature

# Installation

- Prerequisites
  - Node.js > v18
  - npm

```bash
npm install
npx prisma generate
```

Start the server

```bash
npm start:dev
```

# API Documentation

- Swagger API Documentation [http://localhost:3000/api](http://localhost:3000/api)

## Authentication

For the simplicity of the project, we are using a simple user id as a token for authentication.

For protected routes (a lock icon on the right side of the route), you need to login first to get the user id (as simplified token).

Then while accessing those routes, please add the following header with your request to get authenticated.

```bash
x-auth-userid : <user_id>
```

## ERD

- Entity Relationship Diagram
  - [ERD link](https://mermaid.live/edit#pako:eNqNkt9rwjAQx_-Vcs9VbNM2Lm8b82kDYbKXUZDYHhq0SUlSnKv935dWZcVW2D1dvlzuPvejhkzlCAxQvwq-1bzwUuk5-1wtPrz64rcmq2KD2hP5n2SsFnLrYcHFYaBKXuBALLkxR6WvOZpUXpyX5fKtX-saPVLLCnsYpuWV3Sm9Hi2Zo8m0KK1QctBMqUWGA7UyqNfinnH1_L74H-NGqf26r4_lfUxx4-YW7xC6lZzPk4mqLyNjnjpK1GYnyt4gG9VFdMDMM_yAkxapl2MkooUDHwrUbpu5u4eu1RTsDt1QgTk353qfQiobF-cmrlYnmQGzukIfqrLlvV7QTSy5_FKq_wRWwzewgEbTIJwlNIrJPKSRDydghEyjmCaE0DAMwvnTLGp8-On-B9NZEiUxpSSgNCY0SJpfJZHOfQ)

# Project Board

Browse the project board for and start solving the challenges.

- Trello [Project Board](https://trello.com/invite/b/xZd19p0u/ATTI37a4a2ff0d4ce97929d0fd436b99a63dDD00AACF/pm-refactor-fix)
