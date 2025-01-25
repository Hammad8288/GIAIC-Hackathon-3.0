# Hackathon Project: Summary and Documentation

## **Overview**
This repository documents the hackathon project developed over six days, highlighting the objectives, completed tasks, test cases, and deployment instructions. The project is built using **Next.js** and **Sanity CMS**, with a focus on dynamic content, responsiveness, and user-friendly functionality.

---

## **Summary of Activities**

### **Day 1: 15th January 2025**
- **Objective:** Initial setup and planning.
- **Key Achievements:**
  - Brainstormed and finalized the project idea.
  - Set up the development environment with Next.js 14.2.15.
  - Integrated Sanity CMS as the backend.
  - Created the basic folder structure and implemented routing.

### **Day 2: 16th January 2025**
- **Objective:** Backend setup and frontend foundation.
- **Key Achievements:**
  - Defined Sanity CMS schemas and added sample data.
  - Developed foundational UI components.

### **Day 3: 17th January 2025**
- **Objective:** Backend and frontend integration.
- **Key Achievements:**
  - Connected the frontend to Sanity CMS using GROQ queries.
  - Displayed dynamic content on the homepage.
  - Ensured responsiveness using Tailwind CSS.

### **Day 4: 19th January 2025**
- **Objective:** Filtering and advanced UI improvements.
- **Key Achievements:**
  - Implemented filtering options for items like beds, chairs, and sofas.
  - Improved UI/UX with animations and transitions.
  - Ensured layout responsiveness across devices.

### **Day 5: 20th January 2025**
- **Objective:** Core features and testing.
- **Key Achievements:**
  - Developed 'Add to Cart' functionality using Redux Toolkit.
  - Conducted thorough testing and fixed bugs.
  - Performed cross-browser testing for compatibility.

### **Day 6: 21st January 2025**
- **Objective:** Final touches and presentation.
- **Key Achievements:**
  - Addded Search Components.
  - favoutite page. 
  - Polished the UI and resolved minor issues.
  - Prepared documentation and deployment scripts.
  - Created a presentation to showcase the project.

---

## **Reports and Test Cases**

### **Reports**
- **Daily Progress Logs:** Documented activities for each day.
- **Bug Reports:**
  - Resolved layout issues for mobile screens.
  - Fixed GROQ query inconsistencies.

### **Test Cases**
| **Test Case**           | **Description**                        | **Result**  |
|-------------------------|----------------------------------------|-------------|
| Homepage Load Test      | Verifies dynamic data loads correctly. | Passed      |
| Filtering Functionality | Ensures accurate filtering of items.   | Passed      |
| Add to Cart             | Validates Redux Toolkit integration.   | Passed      |
| Filter functionality    | Validates Redux Toolkit integration.   | Passed      |
| Search Component        | using GROQ theory.                     | Passed      |
| Cross-Browser Testing   | Confirms compatibility on major browsers. | Passed   |

---

![image](https://github.com/user-attachments/assets/57526804-7606-4716-9903-c39c768733f8)


## **Deployment Instructions**

### **Step 1: Clone the Repository**
```bash
git clone https://github.com/username/hackathon-project.git
cd hackathon-project
```

### **Step 2: Install Dependencies**
```bash
npm install
```

### **Step 3: Set Up Environment Variables**
Create a `.env.local` file in the root directory and add the following variables:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=your_dataset
NEXT_PUBLIC_SANITY_API_VERSION=2023-01-01
```

### **Step 4: Run the Development Server**
```bash
npm run dev
```
Access the app at [http://localhost:3000](http://localhost:3000).

### **Step 5: Build and Deploy**
To build the project for production:
```bash
npm run build
```
Deploy the output folder to your preferred hosting platform.

---

## **Repository Structure**
```
├── Day-1        
├── Day-2
├── Day-3
├── Day-4
├── Day-5
└── Day-6
└── Hackathon Project
└── Read-me.md
```

---

## **Next Steps**
- Deploy the application and gather feedback.
- Optimize performance and scalability.
- Add more features based on user input.

---

Thank you for exploring the project! For any queries, feel free to reach out via email : hammad82887@gmail.com
