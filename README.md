# Chat Widget

A modern, customizable chat widget built with React, TypeScript, and Tailwind CSS. This widget provides a beautiful and responsive chat interface that can be easily integrated into any web application.

## Features

- 🎨 Modern and clean UI design
- 📱 Fully responsive
- 💬 Real-time chat functionality
- 🔒 Type-safe with TypeScript
- 🎭 Customizable appearance
- 🚀 Easy to integrate

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

2. Add the widget to your application:

```tsx
function App() {
  return (
    <div>
      <ChatWidget />
    </div>
  );
}
```

### CDN Integration

If you prefer to use the widget via CDN, add the following to your HTML:

```html
<!-- Required dependencies -->
<script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>

<!-- Chat Widget -->
<script src="https://unpkg.com/n8n-chat-widget/dist/chat-widget.umd.js"></script>

<!-- Mount the widget -->
<script>
  ChatWidget.createChatWidget('chat-root');
</script>
```

## Styling

The widget uses Tailwind CSS for styling. You can customize the appearance by:

1. Overriding the default Tailwind classes
2. Using the provided utility classes
3. Adding your own custom styles

## Dependencies

The widget has the following peer dependencies:
- React (>=16.8.0)
- React DOM (>=16.8.0)
- Lucide React (>=0.462.0)

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

## License

ISC

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. 