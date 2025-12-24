# Cafe De Meet - Update Guide

This guide explains how to update the website content without touching any code.

## 📁 File Structure

```
cafe-de-meet/
├── data/
│   ├── menuItems.json      ← Update menu items here
│   ├── siteConfig.json      ← Update site content here
│   └── README.md            ← Detailed data guide
├── public/
│   ├── images/
│   │   ├── menu/            ← Menu item images
│   │   ├── gallery/          ← Gallery images
│   │   ├── testimonials/     ← Customer photos
│   │   └── about/            ← About section images
│   └── videos/
│       └── *.mp4            ← Hero video and other videos
```

## 🍽️ How to Update Menu Items

### Step 1: Add/Update Images
1. Place menu item images in `/public/images/menu/`
2. Name them descriptively (e.g., `espresso.jpg`, `cappuccino.jpg`)

### Step 2: Update JSON File
1. Open `/data/menuItems.json`
2. Find the `items` array
3. Add a new item or edit an existing one:

```json
{
  "id": "31",
  "name": "Your New Item",
  "description": "Description of the item",
  "price": 5.99,
  "category": "Coffee",
  "tags": ["New", "Popular"],
  "image": "/images/menu/your-new-item.jpg"
}
```

4. Save the file
5. Refresh the website

### Step 3: Update Categories (if needed)
In the same file, update the `categories` array:
```json
"categories": ["All", "Coffee", "Tea", "Pastries", "Food", "YourNewCategory"]
```

## 🎬 How to Update Hero Video

1. Place your video file in `/public/videos/`
2. Open `/data/siteConfig.json`
3. Find the `hero` section:
```json
"hero": {
  "video": "/videos/your-new-video.mp4",
  "headline": "Welcome to Cafe De Meet",
  "subtitle": "Where Every Cup Tells a Story",
  ...
}
```
4. Update the `video` path to your new video
5. Optionally update `headline` and `subtitle`
6. Save and refresh

## 📸 How to Update Gallery Images

1. Place images in `/public/images/gallery/`
2. Open `/data/siteConfig.json`
3. Find the `gallery` section
4. Update the `images` array:

```json
"gallery": {
  "images": [
    {
      "id": 1,
      "src": "/images/gallery/your-image-1.jpg",
      "alt": "Description of image"
    },
    {
      "id": 2,
      "src": "/images/gallery/your-image-2.jpg",
      "alt": "Another description"
    }
  ]
}
```

## 💬 How to Update Testimonials

1. Place customer photos in `/public/images/testimonials/`
2. Open `/data/siteConfig.json`
3. Find the `testimonials` array
4. Add or edit testimonials:

```json
{
  "id": 5,
  "name": "Customer Name",
  "role": "Customer Role",
  "image": "/images/testimonials/customer-photo.jpg",
  "rating": 5,
  "text": "Customer review text here",
  "date": "1 week ago"
}
```

## 📞 How to Update Contact Information

Open `/data/siteConfig.json` and update the `contact` section:

```json
"contact": {
  "address": "Your Address Here",
  "phone": "(123) 456-7890",
  "email": "your@email.com",
  "hours": {
    "weekday": "Mon-Fri: 7am - 8pm",
    "weekend": "Sat-Sun: 8am - 9pm"
  }
}
```

## 📊 How to Update Statistics

Update the `stats` array in `/data/siteConfig.json`:

```json
"stats": [
  {
    "icon": "Coffee",
    "value": "50+",
    "label": "Coffee Varieties"
  },
  {
    "icon": "Users",
    "value": "10K+",
    "label": "Happy Customers"
  }
]
```

## 📖 How to Update About Section

1. Place founder/about images in `/public/images/about/`
2. Update the `about` section in `/data/siteConfig.json`:

```json
"about": {
  "image": "/images/about/founder.jpg",
  "title": "Our Story",
  "description": "Your story here...",
  "milestones": [
    {
      "year": "2015",
      "title": "The Beginning",
      "description": "Your milestone description"
    }
  ]
}
```

## 🔗 How to Update Social Media Links

Update the `social` section in `/data/siteConfig.json`:

```json
"social": {
  "facebook": "https://facebook.com/yourpage",
  "instagram": "https://instagram.com/yourpage",
  "twitter": "https://twitter.com/yourpage"
}
```

## ⚠️ Important Notes

1. **JSON Syntax**: Always ensure valid JSON (use commas correctly, no trailing commas)
2. **Image Paths**: All paths must start with `/` (e.g., `/images/menu/item.jpg`)
3. **Image Formats**: Use `.jpg`, `.png`, or `.webp` for images
4. **Video Formats**: Use `.mp4` for videos
5. **File Names**: Use lowercase with hyphens (e.g., `coffee-cup.jpg`)
6. **After Updates**: Refresh the browser to see changes

## 🆘 Troubleshooting

- **Images not showing?** Check that:
  - File is in the correct folder
  - Path in JSON matches the file location
  - File name matches exactly (case-sensitive)

- **JSON errors?** Use a JSON validator like [jsonlint.com](https://jsonlint.com)

- **Changes not appearing?** 
  - Hard refresh the browser (Ctrl+Shift+R or Cmd+Shift+R)
  - Clear browser cache
  - Restart the development server if running locally

## 📝 Quick Reference

| What to Update | File to Edit | Folder for Assets |
|---------------|--------------|-------------------|
| Menu Items | `data/menuItems.json` | `public/images/menu/` |
| Hero Video | `data/siteConfig.json` | `public/videos/` |
| Gallery | `data/siteConfig.json` | `public/images/gallery/` |
| Testimonials | `data/siteConfig.json` | `public/images/testimonials/` |
| Contact Info | `data/siteConfig.json` | - |
| About Section | `data/siteConfig.json` | `public/images/about/` |
| Statistics | `data/siteConfig.json` | - |
| Social Links | `data/siteConfig.json` | - |

For detailed information, see `/data/README.md`

