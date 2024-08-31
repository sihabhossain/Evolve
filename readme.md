# **Sports Facility Booking Platform**

## **Overview**

Welcome to the **Sports Facility Booking Platform**! This platform allows users to browse, book, and manage reservations for sports facilities. It also provides administrators with tools to manage facilities, bookings, and users.

## **Table of Contents**

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Installation](#installation)
4. [Usage](#usage)
5. [API Endpoints](#api-endpoints)
6. [Pages](#pages)
7. [Contribution Guidelines](#contribution-guidelines)
8. [License](#license)

## **Features**

- **Landing Page**: Acts as the gateway to the platform, offering a general overview and guiding users to specific actions like booking a facility or logging in.
- **User Dashboard**: Allows users to manage their bookings and access personalized content.
- **Admin Dashboard**: Provides administrators with tools to manage facilities, bookings, and users.
- **Login/Registration Page**: Secure login and registration forms with error handling.
- **Facility Listing Page**: Displays a list of all available sports facilities with search and filter options.
- **Facility Details Page**: Provides detailed information about a specific sports facility.
- **Booking Page**: Guides users through the booking process, including payment integration.
- **Custom Error Pages**: 404 and unauthorized access pages with navigation options.
- **Responsive Design**: Ensures the website is fully responsive on mobile, tablet, and desktop devices.

## **Technologies Used**

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Payment Integration**: SSL Commerz/AmarPay

## **Installation**

### **Prerequisites**

- Node.js (v14 or higher)
- MongoDB

### **Steps**

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/sports-facility-booking-platform.git
   Navigate to the project directory:
   bash
   Copy code
   cd sports-facility-booking-platform
   Install dependencies:
   bash
   Copy code
   npm install
   Set up environment variables: Create a .env file in the root directory and add the following:
   plaintext
   Copy code
   PORT=8000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   Start the development server:
   bash
   Copy code
   npm start
   Usage
   User Flow
   Landing Page: Start from the landing page where users can see featured facilities and how the booking process works.
   Facility Listing: Browse through available facilities and apply filters as needed.
   Booking: Select a facility, check availability, and proceed to book by providing the required details and making a payment.
   Dashboard: After booking, users can manage their reservations through their personalized dashboard.
   Admin Flow
   Admin Dashboard: Access facility management tools to add, edit, or delete facilities.
   Booking Management: View and manage all bookings.
   Add Admin: Create new admin accounts via the dedicated form.
   API Endpoints
   User Authentication
   POST /api/register: Register a new user.
   POST /api/login: User login.
   Facility Management
   GET /api/facilities: Get all facilities.
   POST /api/facilities: Add a new facility.
   PUT /api/facilities/:id: Update an existing facility.
   DELETE /api/facilities/:id: Delete a facility.
   Booking Management
   GET /api/bookings: Get all bookings.
   POST /api/bookings: Create a new booking.
   GET /api/check-availability: Check the availability of a facility based on date and facility ID.
   Pages
   Landing Page
   Purpose: Acts as the gateway to the platform, offering a general overview.
   Components:
   Header: Includes logo, navigation menu, and login/registration buttons.
   Hero Section: A visually appealing banner with a brief introduction and a "Book Now" call-to-action button.
   Featured Facilities: Showcase popular facilities with images and brief descriptions.
   How It Works: A step-by-step guide explaining the booking process.
   Customer Testimonials: A slider showcasing user feedback.
   Unique Section: A creative component related to the project.
   Footer: Contains links to the About Us, Contact Us, and social media pages.
   Dashboard
   User Dashboard:
   Purpose: Allows users to manage their bookings and access personalized content.
   Components: Welcome message, My Bookings.
   Admin Dashboard:
   Purpose: Provides tools for facility and booking management, and admin account creation.
   Components: Welcome message, Facility Management, Booking Management, Add Admin.
   Login/Registration Page
   Purpose: Allows users to access their accounts or create a new account.
   Components:
   Login Form: Email and password fields.
   Registration Form: Fields for name, email, password, phone, role, address, and confirmation.
   Social Login: Option to log in or register using social media accounts (optional).
   Error Handling: Clear error messages for invalid credentials or registration errors.
   Facility Listing Page
   Purpose: Displays a list of all available sports facilities.
   Components:
   Search & Filters: Options to search by facility name or location, and filters for pricing.
   Facility Cards: Each card includes an image, name, price per hour, and a "View Details" button.
   Facility Details Page
   Purpose: Provides detailed information about a specific sports facility.
   Components:
   Facility Overview: Images, name, location, price, and description.
   Booking Button: A "Book Now" button that navigates to the booking page.
   Booking Page
   Purpose: Guides users through booking a facility and completing the payment.
   Components:
   Facility Overview: Key details of the selected facility.
   Availability Checker:
   Date Picker: For selecting the desired booking date.
   Check Availability Button: Triggers the availability check.
   Availability Display: Shows available time slots.
   Booking Form: Fields for booking details.
   Payment Integration: SSL Commerz/AmarPay for secure payment processing.
   Confirmation: Displays a booking summary after successful booking.
   About Us Page
   Purpose: Provides information about the organization behind the platform.
   Components:
   Mission Statement: Description of the platform's purpose and values.
   Team Section: Photos and bios of key team members.
   History & Milestones: Timeline or narrative of the organization's journey and achievements.
   Contact Information: Office address, phone number, and email.
   Contact Us Page
   Purpose: Allows users to get in touch with support or provide feedback.
   Components:
   Contact Form: Fields for name, email, subject, and message.
   Map Integration: Embedded map showing the office location (optional).
   Contact Details: Phone number, email, and physical address.
   Error Pages
   Custom 404 Page: For non-existent routes.
   Unauthorized Access Page: For restricted areas.
   Contribution Guidelines
   Ensure that each commit is meaningful and reflects significant progress.
   Follow the project's coding standards and maintain consistency in code style.
   Document your code to enhance readability and maintainability.
   Pull requests should be linked to an issue or a feature request and thoroughly reviewed before merging.
   License
   ```
