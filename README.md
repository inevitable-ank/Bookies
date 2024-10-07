E-bookstore
An online bookstore platform that allows users to explore and purchase a variety of e-books and learning materials. Built with a modern tech stack to deliver a smooth and responsive user experience.

Table of Contents
Features
Technologies Used
Getting Started
Installation
Environment Variables
Usage
Screenshots
Backend API Endpoints
Contributing
License
Features
User authentication (Sign up, Log in)
Browse a wide collection of e-books
Responsive and user-friendly design
Theme toggling (dark/light mode)
Protected routes for logged-in users (e.g., viewing courses)
Add books to cart and checkout system (future enhancements)
Contact form with validation
Hot toast notifications for user interactions
Slick carousel for displaying featured books
Technologies Used
Frontend:
React: For building dynamic user interfaces
Tailwind CSS: For efficient styling with utility classes
React Router: For routing and navigation
Axios: For handling HTTP requests to the backend
React-Hook-Form: For form management and validation
DaisyUI: For additional UI components
React-Slick: For slick carousel integration
React-Hot-Toast: For toast notifications
Slick Carousel: For displaying carousels
Backend:
Express.js: Node.js web framework
MongoDB: Database for storing user and book data
Mongoose: MongoDB object modeling tool
bcrypt.js: For password hashing and security
dotenv: For environment variable management
Nodemon: For automatic server restart during development
CORS: To enable cross-origin resource sharing
Getting Started
Prerequisites
Node.js and npm installed on your machine.
MongoDB setup on your local machine or through a service like MongoDB Atlas.
Installation
Clone the repository:
bash
Copy code
git clone https://github.com/yourusername/ebookstore.git
cd ebookstore
Install dependencies for both frontend and backend:
bash
Copy code
# Install frontend dependencies
cd client
npm install

# Install backend dependencies
cd ../server
npm install
Environment Variables
Create a .env file in the backend (server) directory and provide the following details:

makefile
Copy code
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
Usage
Start the backend server:
bash
Copy code
cd server
npm run dev
Start the frontend development server:
bash
Copy code
cd client
npm start
Both the frontend and backend servers should now be running. You can navigate to http://localhost:3000 in your browser to see the frontend.

Screenshots


Screenshot 1: Homepage
Screenshot 2: Book Details Page
Screenshot 3: Signup/ Login Page
Screenshot 4: Contact Us Form
Screenshot 5: Carousel (Featured Books)
Backend API Endpoints
Endpoint	Method	Description
/api/signup	POST	Sign up new users
/api/login	POST	Log in users
/api/books	GET	Retrieve all available books
/api/books/:id	GET	Retrieve a book by ID
/api/cart	POST	Add books to cart (future)
Contributing
Contributions are welcome! Please submit a pull request or open an issue if you have any improvements or suggestions.