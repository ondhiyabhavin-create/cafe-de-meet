# Data Management Guide

This folder contains all the JSON configuration files for easy updates to the cafe website.

## File Structure

### `menuItems.json`
Contains all menu items with their details:
- `categories`: Array of available categories
- `items`: Array of menu items with:
  - `id`: Unique identifier
  - `name`: Item name
  - `description`: Item description
  - `price`: Item price (number)
  - `category`: Category name (must match one in categories array)
  - `tags`: Array of tags (e.g., "Hot", "New", "Popular")
  - `image`: Path to image file (e.g., "/images/menu/espresso.jpg")

**To update menu:**
1. Open `menuItems.json`
2. Add/edit/remove items in the `items` array
3. Update `categories` if needed
4. Save the file

### `siteConfig.json`
Contains all site-wide configuration:
- `site`: Site name, tagline, description
- `hero`: Hero section configuration (video path, headlines, buttons)
- `stats`: Statistics displayed after hero
- `contact`: Contact information
- `social`: Social media links
- `gallery`: Gallery images
- `testimonials`: Customer testimonials
- `about`: About section content and milestones

**To update site content:**
1. Open `siteConfig.json`
2. Edit the relevant section
3. Save the file

## Asset Organization

### Images
Place images in the following folders:
- `/public/images/menu/` - Menu item images
- `/public/images/gallery/` - Gallery images
- `/public/images/testimonials/` - Customer photos
- `/public/images/about/` - About section images

### Videos
Place videos in:
- `/public/videos/` - Hero video and other videos

## Example: Adding a New Menu Item

```json
{
  "id": "31",
  "name": "New Coffee Drink",
  "description": "Delicious new coffee creation",
  "price": 5.75,
  "category": "Coffee",
  "tags": ["New", "Popular"],
  "image": "/images/menu/new-coffee.jpg"
}
```

1. Add the image to `/public/images/menu/new-coffee.jpg`
2. Add the JSON object above to `menuItems.json` in the `items` array
3. Save the file

## Example: Updating Hero Video

1. Place new video in `/public/videos/`
2. Update `siteConfig.json`:
```json
"hero": {
  "video": "/videos/your-new-video.mp4",
  ...
}
```

## Notes

- All image/video paths should start with `/` (root of public folder)
- Image names should be lowercase with hyphens (e.g., `coffee-cup.jpg`)
- After updating JSON files, the site will automatically reflect changes (may need to refresh)
- Keep JSON syntax valid (use a JSON validator if unsure)

