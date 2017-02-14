# blog-e2e

Blog admin CRUD with nightmare testing!

| Routes                                      | Method        | Description                              |
| -------------                               |:-------------:| ----------------------------------------:|
| http://localhost:3000                       | GET           | Login page                               |
| http://localhost:3000/blog.html             | GET           | Blog admin page after login              |

API Routes

| Routes        | Method        | Description            |
| ------------- |:-------------:| ----------------------:|
| /api          | GET           | Path to user and blogs |
| /users        | GET           | Get all users data     |
| /users        | POST          | Insert new user        |
| /users        | DELETE        | Delete User            |
| /blogs        | GET           | Get all blogs data     |
| /blogs        | POST          | Add new blog           |
| /blogs        | DELETE        | Delete blog            |
| /blogs        | PUT           | Update blog            |


```
npm i
cd blog-e2e/public -> live-server
mongoose database
database = blog
```
