# Keating Lab Website Content Update Guide

Welcome! This guide helps you update the Keating Lab website (live at [https://keatinglab.com](https://keatinglab.com)) without needing technical skills. The site is hosted on Vercel and uses a file called `labData.json` to manage lab information, team details, publications, research projects, news, and more. Follow these simple steps to add or edit content using GitHub.

## Before You Start
- You need a GitHub account. If you don’t have one, sign up at [github.com](https://github.com).
- Ask Om to add you as a collaborator to the private repository `keating-lab-website`. You’ll get an email invitation to join.
- Use a computer with internet access.

## Steps to Update Content

### 1. Log into GitHub
- Go to [github.com](https://github.com) and sign in with your username and password.

### 2. Find the Repository
- In the search bar at the top, type `keating-lab-website` and press Enter.
- Click on the repository named `keating-lab-website` to open it. (It’s private, so only collaborators can see it.)

### 3. Upload Photos (for Team Members or Research)
- If you’re adding a new team member or research image:
  - On the repository page, click the **public/images** folder.
  - Click **Add file** > **Upload files**.
  - Drag and drop your photo or click to browse and select it.
  - Use a **square photo (1:1 aspect ratio)**, ideally **300px × 300px** (e.g., `newperson.jpg` or `research-4.jpg`). Center the subject to avoid cropping.
  - In the “Commit changes” box at the bottom, type a message like “Uploaded new team photo” or “Added research image”.
  - Click **Commit changes**.

### 4. Edit `labData.json`
- On the repository page, click the **src/data/labData.json** file.
- Click the pencil icon (✏️) in the top-right corner to edit.
- Update the file based on what you want to change:
  - **Add or Edit Lab Information**:
    - Scroll to the `labInfo` section.
    - Update fields like `name`, `tagline`, `description`, `address`, `email`, `phone`, `contactDescription`, or `googleMapsEmbed` directly.
    - Example: Change `tagline` to “Pioneering Transplant Medicine Innovations.”
  - **Add or Edit Recent Research**:
    - Scroll to the `recentResearch` section (a list starting with `[` and ending with `]`).
    - To add a new item, copy this example and paste it before the closing `]`:
      ```json
      {
        "title": "New Research Topic",
        "description": "Brief description here",
        "image": "/images/research/research-3.jpg"
      }
      ```
      Add a comma `,` after the previous entry if it’s not the first one.
  - **Add or Edit Lab News**:
    - Scroll to the `labNews` section (a list of text items).
    - To add a new item, paste it before the closing `]` with a comma `,` after the previous entry.
    - Example:
      ```json
      "New team member joins in July 2025."
      ```
  - **Add or Edit Research Projects**:
    - Scroll to the `researchProjects` section.
    - To add a new project, copy this example and paste it before the closing `]`:
      ```json
      {
        "title": "New Project Title",
        "description": "Project description here",
        "image": "/images/research/research-4.jpg",
        "link": "https://google.com/"
      }
      ```
      Add a comma `,` after the previous entry.
  - **Add or Edit Latest Research**:
    - Scroll to the `latestResearch` section.
    - To add a new item, copy this example and paste it before the closing `]`:
      ```json
      {
        "title": "New Study Topic",
        "description": "Description of the study"
      }
      ```
      Add a comma `,` after the previous entry.
  - **Add or Edit Funding**:
    - Scroll to the `funding` section.
    - To add a new funder, copy this example and paste it before the closing `]`:
      ```json
      {
        "name": "New Funder Name",
        "description": "Funder description",
        "logo": "/images/funding/new-logo.png",
        "website": "https://newfunder.org/"
      }
      ```
      Add a comma `,` after the previous entry.
  - **Add or Edit Collaborations**:
    - Scroll to the `collaborations` section.
    - To add a new collaborator, copy this example and paste it before the closing `]`:
      ```json
      {
        "name": "New Collaborator Name",
        "description": "Collaborator description",
        "logo": "/images/collaborations/new-logo.png",
        "link": "https://newcollaborator.org/"
      }
      ```
      Add a comma `,` after the previous entry.
  - **Add or Edit Publications**:
    - Scroll to the `publications` section.
    - To add a new publication, copy this example and paste it before the closing `]`:
      ```json
      {
        "citation": "New Author et al., 2025",
        "link": "https://doi.org/new-link"
      }
      ```
      Add a comma `,` after the previous entry.
  - **Add or Edit Team Members**:
    - Scroll to the `team.members` section.
    - To add a new member, copy this example and paste it before the closing `]`:
      ```json
      {
        "name": "New Person",
        "degree": "Degree",
        "position": "Position",
        "photo": "/images/people/newperson.jpg",
        "projects": "Optional project details",
        "about": "Optional bio"
      }
      ```
      Add a comma `,` after the previous entry. Leave out `projects` or `about` if not needed.
    - Example:
      ```json
      {
        "name": "New Person",
        "photo": "/images/people/newperson.jpg",
        "degree": "PhD"
      }
      ```
  - **Important**: Don’t remove commas (`,`), brackets (`[` or `]`), or quotes (`"`).

### 5. Save Your Changes
- Scroll to the bottom and type a short message in the “Commit changes” box (e.g., “Added new team member” or “Updated publication”).
- Click **Commit changes**.
- Vercel will automatically update the website in about 1–2 minutes.

### 6. Check Your Updates
- Visit [https://keatinglab.com](https://keatinglab.com) to see your changes on pages like `/people`, `/publications`, or `/research`.
- If something looks wrong, contact Om for help.

## Tips for Success
- Use **300px × 300px square photos** to ensure they display well without cropping.
- Double-check your changes before saving to avoid errors (e.g., missing commas).
- If you’re unsure, ask Om for a quick demo or assistance.

## Need Help?
- Contact Om at [your email] if you run into issues or need guidance.
- Thank you for helping keep the Keating Lab website up to date!