# Sych Assesment Round One

## Overview

This application is a minimal Next.js based web application that allows users to view posts, search for specific posts, view detailed information about each post, and maintain a personalized list of bookmarked posts with pagination.

## Installation

1. Extract Zip
2. Installing Dependencies

   ```npm isntall```

3. Running the Application

   ```npm run dev```

Visit the development server at http://localhost:3000.

## Application Structure and Component Hierarchy
The Application structure is organized as follows:

pages/: Contains Next.js page components.

    index.js: Post Listing Page.
    bookmarks.js: Bookmarks Page.
    _app.js: Main entry point.

    posts/
        [id].js: Post Detail Page.
    
/components: Reusable React components used across different pages.

    Layout.js: Common layout components.
    PostList.js: Component for rendering a list of posts.
    SearchBar.js: Search bar component.
    Pagination.js: Pagination component.
    PostDetail.js: Component for rendering post details.
    Bookmarks.js: Component for rendering bookmarked posts.

styles/: Styling Files

    global.css: Global styles.

package.json: Project's installed dependencies

## Technical Decisions
### Local Storage for Bookmarks
Bookmarked posts are stored in the local storage to provide a simple and persistent way to track user bookmarks across sessions.

### Dynamic Routing
Dynamic routing is used to create individual pages for each post, enhancing the user experience and allowing deep linking to specific posts.

### Component-Based Structure
The application follows a component-based structure, making it modular and easy to maintain. Each component has a specific responsibility, promoting code reusability.