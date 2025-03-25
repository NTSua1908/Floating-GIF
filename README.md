# Floating GIF Extension

A Chrome extension that displays a draggable floating GIF on webpages. Users can select a custom GIF via a popup, revert to a default GIF, and drag the GIF to any position on the screen. The position and GIF selection persist across pages and browser sessions.

## Features

- Displays a floating GIF on all webpages.
- Drag-and-drop functionality to reposition the GIF.
- Persistent GIF position and URL using Chrome storage.
- Popup interface to:
  - Enter a custom GIF URL.
  - Revert to a default GIF.
- Beautiful, modern popup design with gradients and animations.

## Installation

1. **Clone or Download**:
   - Clone this repository or download the ZIP file and extract it:
     ```bash
     git clone https://github.com/yourusername/floating-gif-extension.git
     ```
2. **Load into Chrome**:
   - Open Chrome and navigate to `chrome://extensions/`.
   - Enable "Developer mode" in the top right corner.
   - Click "Load unpacked" and select the `floating-gif-extension` folder.
3. **Verify**:
   - The extension icon should appear in your toolbar. Click it to open the popup.

## Usage

- **View the GIF**: Open any webpage, and a floating GIF will appear (default position: 50px from top-left).
- **Drag the GIF**: Click and drag the GIF to move it anywhere on the screen. The position is saved automatically.
- **Change the GIF**:
  - Click the extension icon in the toolbar to open the popup.
  - Enter a GIF URL (e.g., from Giphy) and click "Save" to update the floating GIF.
  - Click "Use Default" to revert to the default GIF.
- **Persistence**: The GIF URL and position persist across pages and browser restarts.

## File Structure

floating-gif-extension/
├── icons/ # Extension icons
│ ├── icon16.png # 16x16 icon
│ ├── icon32.png # 32x32 icon
│ ├── icon48.png # 48x48 icon
│ ├── icon128.png # 128x128 icon
├── content.js # Content script for floating GIF logic
├── manifest.json # Extension manifest file
├── popup.html # Popup UI
├── popup.js # Popup logic
├── styles.css # Styles for the floating GIF
└── README.md # This file

## Files Explained

- **`manifest.json`**: Defines the extension’s metadata, permissions, and scripts.
- **`content.js`**: Injects the floating GIF into webpages, handles dragging, and persists position/GIF URL.
- **`popup.html`**: HTML for the popup interface with inline CSS.
- **`popup.js`**: Handles popup interactions (saving GIF URL, resetting to default).
- **`styles.css`**: Styles the floating GIF (size, position, etc.).
- **`icons/`**: Contains the extension’s toolbar icons.

## Customization

- **Default GIF**: Edit `content.js` and `popup.js` to change the default GIF URL or use a local file (e.g., `icons/default.gif`).
- **Position**: Modify the default `x: 50, y: 50` in `content.js` for a different starting position.
- **Styles**: Adjust `styles.css` for GIF size or `popup.html` CSS for the popup design.

## Notes

- Requires `"activeTab"` and `"storage"` permissions (defined in `manifest.json`).
- Uses `chrome.storage.sync` for cross-device syncing. Switch to `chrome.storage.local` for device-specific storage.
- The GIF position persists until manually reset (no reset button included by default).

## Future Improvements

- Add a "Reset Position" button in the popup.
- Constrain dragging to stay within the viewport.
- Support local GIF files in the extension directory.

## License

This project is open-source and available under the [MIT License](LICENSE). Feel free to modify and distribute!

## Credits

Developed with NTSua.
