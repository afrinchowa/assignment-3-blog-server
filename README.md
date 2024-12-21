<==========================================>
Project name: EchoScribe
Live URL: https://assignment-3-blog-server.vercel.app/
Technology:
•	TypeScript
•	Node.js
•	Express.js
•	MongoDB with Mongoose

<==========================================>

This project is a backend application for a blogging platform that allows users to create, update, delete, and manage blogs. The platform includes robust authentication, role-based access control, and a public API for accessing blogs with advanced features like search, sort, and filter.

Features
User Roles:
Admin: Manage users and delete any blog.
User: Perform CRUD operations on their own blogs.
Authentication: Secure login system with JWT tokens.
Authorization: Role-based access for Admin and Users.
Public Blog API:
Search blogs by title or content.
Sort blogs by fields like createdAt or title.
Filter blogs by author.
Technologies Used
Backend: Node.js with Express.js
Database: MongoDB with Mongoose
Language: TypeScript
Getting Started
Prerequisites
Ensure you have the following installed:

Node.js
MongoDB
A package manager like npm or yarn.
Installation

npm install
Set up environment variables: Create a .env file in the root directory and configure the following:
env
PORT=5000

Start the development server:
bash
npm run dev
The server will run at http://localhost:5000.

API Endpoints
Refer to the detailed API documentation in the project for a comprehensive guide. Key endpoints include:

User Authentication:
Register: POST /api/auth/register
Login: POST /api/auth/login
Blog Management:
Create Blog: POST /api/blogs
Update Blog: PATCH /api/blogs/:id
Delete Blog: DELETE /api/blogs/:id
Get Blogs: GET /api/blogs
Admin Actions:
Block User: PATCH /api/admin/users/:userId/block
Delete Blog: DELETE /api/admin/blogs/:id