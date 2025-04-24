import Chat from './Chat';

interface ChatWidgetProps {
  url: string;
}

export default function ChatWidget({ url }: ChatWidgetProps) {
  return <Chat url={url} />;
}
