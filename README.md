# Tweeter 2.0

A small Twitter-like app built with React, featuring tweet creation, tweet listing, server integration via Supabase, user profile management, and optional authentication.

---

## Features

- **Step 1 – Mockup (Local Data):**
  - Create tweets with a 140-character limit
  - Disable submit button when the limit is exceeded
  - Store tweets locally so they persist on page refresh
  - List tweets in descending order (latest first)
  - Hard-coded username

- **Step 2 – Server Connection:**
  - Fetch and post tweets using Supabase REST API
  - Display loading indicators while posting
  - Handle server errors
  - Remove local storage logic

- **Step 3 – User Profile Page:**
  - Display current username
  - Update username locally
  - Navbar with "Home" and "Profile" links

- **Step 4 – Context:**
  - Use React Context for tweets list and tweet creation
  - Automatically update list from server at intervals

- **Step 5 – Deployment:**
  - Deploy to GitHub Pages

- **Step 6 – Supabase Integration:**
  - Replace REST API calls with Supabase JS library
  - Create Tweets table and populate with dummy data

- **Step 7 – Authentication (Optional/Advanced):**
  - Implement login page
  - Enable RLS policies in Supabase
  - Only authenticated users can view and post tweets
  - Navbar includes login/logout

- **Step 8 – Sign Up (Extension)**
  - Add user registration flow

- **Step 9 – Infinite Scrolling (Extension)**
  - Load tweets in batches as the user scrolls

---

## Tech Stack

- **Frontend:** React, React Router, Context API
- **Backend:** Supabase (REST API / JS SDK)
- **Deployment:** GitHub Pages
- **Styling:** CSS / Optional CSS framework

---

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone <repo-url>
   cd tweeter-2.0
