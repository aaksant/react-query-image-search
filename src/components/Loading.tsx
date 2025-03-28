import { Loader2 } from 'lucide-react';

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="text-center">
        <Loader2 className="text-primary mx-auto h-12 w-12 animate-spin" />
        <p className="text-muted-foreground mt-2 text-sm">Getting images...</p>
      </div>
    </div>
  );
}
