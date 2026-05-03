import { GeneratedPrompt, ExportFormat } from '../types';

export const exportPrompts = (prompts: GeneratedPrompt[], format: ExportFormat) => {
  const selectedPrompts = format.selectedPrompts 
    ? prompts.filter(p => format.selectedPrompts!.includes(p.id))
    : prompts;

  if (format.format === 'json') {
    const data = format.includeMetadata 
      ? selectedPrompts 
      : selectedPrompts.map(p => ({ content: p.content, category: p.category }));
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    downloadFile(blob, 'prompts.json');
  } else {
    const content = selectedPrompts.map(p => {
      if (format.includeMetadata) {
        return `Category: ${p.category}\nTimestamp: ${p.timestamp.toISOString()}\nContent: ${p.content}\n${'='.repeat(50)}\n`;
      }
      return p.content;
    }).join('\n\n');
    
    const blob = new Blob([content], { type: 'text/plain' });
    downloadFile(blob, 'prompts.txt');
  }
};

const downloadFile = (blob: Blob, filename: string) => {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error('Failed to copy to clipboard:', err);
    return false;
  }
};