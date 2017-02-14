# blog-e2e

# Information

Create blog with TDD

# Endpoints

| Routes                          | HTTP   | Description      |
|---------------------------------|--------|------------------|
| localhost:3000/api/articles     | GET    | Get all articles |
| localhost:3000/api/articles     | POST   | Create article   |
| localhost:3000/api/articles/:id | PUT    | Update article   |
| localhost:3000/api/articles/:id | DELETE | Delete article   |
| localhost:3000/auth/users       | GET    | Get all users    |
| localhost:3000/auth/register    | POST   | Create user      |
| localhost:3000/auth/users/:id   | PUT    | Update user      |
| localhost:3000/auth/users/:id   | DELETE | Delete user      |
| localhost:3000/auth/login       | POST   | Verify user      |

# Usage

```
npm install
npm run dev
mocha (for testing)

```
