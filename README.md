# CodeAlpha Task 2 — Mini Social Media Platform
https://code-alpha-mini-social-media-task2.vercel.app

A complete beginner-friendly mini social media platform built with **HTML, CSS, JavaScript and Express.js**.

## Features
- User registration and login with JWT authentication
- User profiles
- Create and delete posts
- Like/unlike posts
- Comments on posts
- Follow/unfollow users through API
- Persistent JSON database (`data/db.json`)
- Responsive UI

## Run locally
1. Install Node.js 22 LTS (recommended for this project).
2. Open this folder in VS Code.
3. Run:
```bash
npm install
```
4. Optional: copy `.env.example` to `.env` and change `JWT_SECRET`.
5. Run:
```bash
npm start
```
6. Open `http://localhost:3000`.

## API routes
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/posts`
- `POST /api/posts`
- `DELETE /api/posts/:id`
- `POST /api/posts/:id/like`
- `POST /api/posts/:id/comments`
- `GET /api/users/:id`
- `POST /api/users/:id/follow`

For a submission, mention the stack as: **HTML, CSS, JavaScript, Node.js, Express.js, JWT, JSON database**.
