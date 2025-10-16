# RANDOBONKER

A MEGABONK random build generator SPA with PS1-era retro aesthetic.

## Features

- **Random Build Generator**: Generate completely random builds with characters, weapons, tomes, and items
- **Advanced Filtering**: Select or deselect specific characters, weapons, tomes, and items to customize your pool
- **Locked Defaults**: Default items (isDefault: true) cannot be unchecked, ensuring core content is always available
- **Image Support**: Display images for characters, weapons, tomes, and items
- **MEGABONK-Inspired Design**: Retro pixel aesthetic matching the game's style with vibrant colors and animations
- **Complete Game Data**: 20 characters, 29 weapons, 23 tomes, and 77 items from MEGABONK

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS with custom MEGABONK theme
- **Code Quality**: Biome.js for linting and formatting

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development

```bash
npm run dev
```

Open http://localhost:5173/ in your browser.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Code Quality

```bash
# Run Biome linter
npm run lint

# Format code
npm run format

# Check and fix issues
npm run check
```

## How to Use

1. **Generate Random Build**: Click the "GENERATE BONK" button to create a random build
2. **Filter Options**: Use the filter panel on the left to select/deselect specific items:
   - Expand each category (Characters, Weapons, Tomes, Items)
   - Use "Select All" or "Deselect All" for quick filtering
   - Check/uncheck individual items (items with 🔒 are locked and cannot be unchecked)
3. **View Build**: Your generated build appears on the right with:
   - 1 Character (with tier rating)
   - 4 Weapons (with tier ratings)
   - 4 Tomes (with tier ratings)
   - 5-10 Items (with rarity colors)

## Adding Images

You can add images in two ways:

### Option 1: Use Web URLs (Easiest)
Simply use direct URLs to images hosted online:
```typescript
{ id: 'dicehead', name: 'Dicehead', tier: 'S', image: 'https://example.com/dicehead.png' }
```

### Option 2: Use Local Files
1. Place image files (64x64px PNG recommended) in `public/images/{category}/`
2. Reference them with local paths:
   ```typescript
   { id: 'dicehead', name: 'Dicehead', tier: 'S', image: '/images/characters/dicehead.png' }
   ```

See [public/images/README.md](public/images/README.md) for detailed instructions.

## Color Coding

### Tier Ratings (Characters, Weapons, Tomes)
- **S-Tier**: Gold (best)
- **A-Tier**: Green
- **B-Tier**: Cyan
- **C-Tier**: Pink
- **D-Tier**: Gray

### Item Rarities
- **Legendary**: Gold border
- **Epic**: Pink border
- **Rare**: Cyan border
- **Uncommon**: Green border
- **Common**: Gray border

## Project Structure

```
randobonker/
├── src/
│   ├── components/       # React components
│   ├── data/            # Game data (characters, weapons, tomes, items)
│   ├── types/           # TypeScript type definitions
│   ├── utils/           # Utility functions (randomizer logic)
│   ├── App.tsx          # Main app component
│   └── main.tsx         # Entry point
├── public/              # Static assets
└── index.html           # HTML template
```

## License

Unofficial fan-made tool for MEGABONK. All game content belongs to its respective owners.
