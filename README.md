# Chat Widget

A modern, customizable chat widget built with React, TypeScript, and Tailwind CSS. This widget provides a beautiful and responsive chat interface that can be easily integrated into any web application.

## Features

- 🎨 Modern and clean UI design with Radix UI components
- 📱 Fully responsive design
- 💬 Real-time chat functionality
- 🔒 Type-safe with TypeScript
- 🎭 Customizable appearance with Tailwind CSS
- 🚀 Easy to integrate
- 🎯 Built with modern React patterns and hooks
- 📦 Optimized bundle size with Rollup
- 🔌 Configurable chat endpoint URL

## Installation

```bash
npm install n8n-chat-widget
```

## Usage

### Basic Integration

1. First, import the ChatWidget component:

```tsx
import ChatWidget from 'n8n-chat-widget';
```

2. Add the widget to your application with the required URL prop:

```tsx
function App() {
  return (
    <div>
      <ChatWidget url="https://your-chat-endpoint.com/api/chat" />
    </div>
  );
}
```

The `url` prop is required and should point to your chat API endpoint. This endpoint will be used for all chat communications.

### CDN Integration (Upcoming)

If you prefer to use the widget via CDN, add the following to your HTML:

```html
<!-- Required dependencies -->
<script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
<script src="https://unpkg.com/lucide-react@latest/dist/umd/lucide-react.min.js"></script>

<!-- Chat Widget -->
<script src="https://unpkg.com/n8n-chat-widget/dist/chat-widget.umd.js"></script>

<!-- Mount the widget -->
<script>
  ChatWidget.createChatWidget('chat-root', {
    url: 'https://your-chat-endpoint.com/api/chat'
  });
</script>
```

## Dependencies

The widget has the following peer dependencies:
- React (>=16.8.0)
- React DOM (>=16.8.0)
- Lucide React (>=0.462.0)

Additional dependencies:
- @radix-ui/react-slot
- @radix-ui/react-toast
- class-variance-authority
- tailwind-merge
- clsx

## Development

To run the widget locally:

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Build the widget:
```bash
npm run build
```

The build process uses Rollup to create both ESM and UMD bundles, along with TypeScript declarations.

## Project Structure

```
src/
├── components/     # Reusable UI components
├── lib/           # Utility functions and hooks
├── Chat.tsx       # Main chat component
├── ChatButton.tsx # Chat toggle button
├── ChatWindow.tsx # Chat window component
├── index.tsx      # Entry point
└── index.css      # Global styles
```

## License

ISC

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. 