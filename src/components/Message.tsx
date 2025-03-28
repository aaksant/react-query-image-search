type MessageProps = {
  text: string;
};

export default function Message({ text }: MessageProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-primary mx-auto mt-2 text-xl">{text}</h1>
      </div>
    </div>
  );
}
