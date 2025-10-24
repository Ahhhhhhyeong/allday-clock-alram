# ⏰ Hourly Alarm Clock

A web-based digital clock application that rings an alarm every hour on the hour.

## ✨ Features

- **Real-time Digital Clock**: Displays current time in real-time
- **Hourly Alarm**: Automatically plays alarm sound every hour (at 00 minutes)
- **Alarm Toggle**: Button to enable/disable alarm functionality
- **Alarm Test**: Test button to preview alarm sound
- **Next Alarm Countdown**: Shows remaining time until next hourly alarm
- **Responsive Design**: Adaptive UI for various screen sizes

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Audio**: Web Audio API

## 📦 Installation & Setup

### 1. Clone the repository

```bash
git clone [repository-url]
cd hourly-alarm-clock
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Add audio file

Place your `tap-notification.mp3` file in the `public` folder.

### 4. Run development server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
hourly-alarm-clock/
├── public/
│   └── tap-notification.mp3  # Alarm sound file
├── src/
│   └── app/
│       ├── page.tsx          # Main page component
│       ├── layout.tsx        # Layout component
│       └── globals.css       # Global styles
├── package.json
└── README.md
```

## 🎯 Usage

1. **Enable Alarm**: Click "🔕 Alarm Off" button to change it to "🔔 Alarm On"
2. **Test Alarm**: Use "🎵 Test Alarm" button to check alarm sound
3. **Automatic Alarm**: When enabled, alarm will automatically ring every hour at 00 minutes

## 🔧 Customization

### Change Alarm Sound

Replace the `public/tap-notification.mp3` file with your desired audio file.

### Change Alarm Interval

Modify the following part in `page.tsx` to change alarm frequency:

```typescript
// Current: Every hour (minutes === 0)
newTime.getMinutes() === 0;

// Example: Every 30 minutes
newTime.getMinutes() === 0 || newTime.getMinutes() === 30;
```

### Style Customization

Modify Tailwind CSS classes to change colors, fonts, and layout.

## 🌐 Browser Compatibility

- Chrome 66+
- Firefox 60+
- Safari 11.1+
- Edge 79+

> **Note**: Due to browser autoplay policies, audio may not play without user interaction. Please click the alarm test button first to allow audio playback.

## 📝 License

MIT License

## 🤝 Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

If you have any questions about the project, please create an issue.
