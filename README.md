# Story Feature

A client-side implementation of a **Story Feature** similar to those found in popular social media platforms like Instagram and WhatsApp. This project allows users to upload images, display them as stories, and automatically remove them after 24 hours. It also includes basic swipe functionality for navigating through stories.

---

## Features

- **Upload Images**: Users can upload images, which are converted to base64 and stored in `localStorage`.
- **Display Stories**: Stories are displayed in a horizontal list at the top of the page.
- **24-Hour Expiry**: Stories older than 24 hours are automatically removed.
- **Swipe Functionality**: Users can swipe left/right to navigate through stories (basic swipe detection is implemented).
- **Responsive Design**: The layout is responsive and works on both desktop and mobile devices.

---

## Technologies Used

- **HTML**: For the structure of the application.
- **CSS**: For styling the components and making the design responsive.
- **JavaScript**: For handling image uploads, displaying stories, and implementing swipe functionality.
- **LocalStorage**: For storing images and their metadata temporarily.

---

## How to Use

1. **Upload a Story**:
   - Click the `+` button to open the upload modal.
   - Select an image from your device.
   - The image will be added to the list of stories.

2. **View a Story**:
   - Click on any story in the list to view it in full screen.
   - Use swipe gestures (left/right) to navigate between stories (if implemented).

3. **Automatic Expiry**:
   - Stories will automatically disappear after 24 hours.

---

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/story-feature.git
   cd story-feature