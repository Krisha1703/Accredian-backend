# 📝 **Accredian Refer & Earn Landing Page**

This is the **backend** for the **Refer & Earn landing page** built using **Node.js**, **Express**, **Prisma ORM**, and **MySQL**. The backend handles the business logic for creating referrals, validating user inputs, and sending email notifications via **Gmail API**.

## 🌟 **Features**

- **Referral Form** 📋: A multi-step form to submit referrals with user details and course selection.
- **Major & Niche Course Selection** 🎓: Dynamic course options based on the selected major.
- **Form Validation** ✅: Input validation using **Zod** schema to ensure accurate data submission.
- **Responsive UI** 📱: Built with **Tailwind CSS** and **Material UI** for a modern and responsive design.
- **Error Handling** ⚠️: Comprehensive error handling for failed submissions, including validation feedback for users and clear alert messages, ensuring a smooth experience even when something goes wrong (e.g., "You cannot refer yourself" or "This course has already been referred to this person").
- **API Integration** 🌐: Backend API built with **Express** and **Prisma ORM**, connected to **MySQL**.
- **Deployment** 🚀: Frontend deployed on **Vercel** and Backend on **Render**.


### Prerequisites  
- Node.js and npm installed  
- MySQL installed locally or cloud-hosted  

## ⚙️ Setup Instructions For Backend

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Krisha1703/Accredian-backend.git
   cd Accredian-backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables 🌍:**
    - Create a `.env.local` file with the following:
        ```env
            PORT=5000
            URL="http://localhost:3000"
        ```

     - Create a `.env` file with the following:
        ```env
            DATABASE_URL="your-database-connection-url"
            GMAIL_CLIENT_ID="your-gmail-client-id"
            GMAIL_CLIENT_SECRET="your-gmail-client-secret"
            GMAIL_REFRESH_TOKEN="your-gmail-refresh-token"
            SENDER_EMAIL="your-email-or-any-other-verified-email"
            APP_PASSWORD="your-app-password"
        ```
        > **Note**: Replace `"your-app-password"` with your actual Gmail App Password. This is required for authenticating Gmail API requests securely.


4. **Run the development server 🚀:**
   ```bash
   npm start
   ```

- For **frontend** setup, please visit https://github.com/Krisha1703/Accredian-frontend.

## 🔄 **API Endpoints**

1. **POST /api/referrals**  
   Create a new referral. This endpoint validates that the referrer is not the same as the referee and that the same course has not been referred multiple times to the same person.

   ### Request Body:

    ```json
    {
        "yourFirstName": "John",
        "yourLastName": "Doe",
        "yourEmail": "john.doe@example.com",
        "yourPhone": "1234567890",
        "friendFirstName": "Jane",
        "friendLastName": "Doe",
        "friendEmail": "jane.doe@example.com",
        "friendPhone": "0987654321",
        "major": "Robotics",
        "nicheCourse": "AI"
    }
    ```

   ### Response:

    ```json
    {
        "message": "Referral created and email sent successfully",
        "newReferral": {
            "id": 1,
            "yourFirstName": "John",
            "yourLastName": "Doe",
            "yourEmail": "john.doe@example.com",
            "yourPhone": "1234567890",
            "friendFirstName": "Jane",
            "friendLastName": "Doe",
            "friendEmail": "jane.doe@example.com",
            "friendPhone": "0987654321",
            "major": "Robotics",
            "nicheCourse": "AI",
            "createdAt": "2023-12-01T00:00:00Z"
        }
    }
    ```

2. **Error Handling**
Proper error handling is implemented, and meaningful messages are returned for different failure scenarios such as:

- **Referring yourself:** "You cannot refer yourself."
- **Duplicate referral:** "You have already referred this course to this person."
- **Internal server errors:** Standard 500 error response with an appropriate message.

## 🔧 **Technologies Used**

- **Frontend**: React, Tailwind CSS, Material UI, Axios  
- **Backend**: Node.js, Express, Prisma ORM, Gmail API
- **Database**: MySQL  
- **Deployment**: Vercel (Frontend), Render (Backend)  


*Happy Referring & Earning! 🎉*

