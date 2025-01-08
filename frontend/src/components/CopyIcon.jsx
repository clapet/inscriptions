import { useState } from 'react';

import { ClipboardDocumentIcon } from '@heroicons/react/24/outline';
export default function CopyIcon({ text }) {
  const [showCopied, setShowCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 1500);
  };

  return (
    <div className="relative">
      <button 
        onClick={handleCopy}
        className="hover:opacity-75"
      >
        <ClipboardDocumentIcon className="w-4 h-4" />
      </button>
      {showCopied && (
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded whitespace-nowrap">
          Copied!
        </div>
      )}
    </div>
  );
}
  