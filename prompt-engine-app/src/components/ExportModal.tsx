import React, { useState } from 'react';
import { X, Download, FileText, FileCode } from 'lucide-react';
import { GeneratedPrompt, ExportFormat } from '../types';
import { exportPrompts } from '../utils/exportUtils';

interface ExportModalProps {
  prompts: GeneratedPrompt[];
  onClose: () => void;
}

export const ExportModal: React.FC<ExportModalProps> = ({ prompts, onClose }) => {
  const [format, setFormat] = useState<'json' | 'txt'>('json');
  const [includeMetadata, setIncludeMetadata] = useState(true);
  const [selectedPrompts, setSelectedPrompts] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState(false);

  const handleExport = () => {
    const exportFormat: ExportFormat = {
      format,
      includeMetadata,
      selectedPrompts: selectedPrompts.length > 0 ? selectedPrompts : undefined
    };
    
    exportPrompts(prompts, exportFormat);
    onClose();
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedPrompts([]);
    } else {
      setSelectedPrompts(prompts.map(p => p.id));
    }
    setSelectAll(!selectAll);
  };

  const handlePromptSelect = (promptId: string) => {
    setSelectedPrompts(prev => {
      if (prev.includes(promptId)) {
        return prev.filter(id => id !== promptId);
      } else {
        return [...prev, promptId];
      }
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Export Prompts
          </h3>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 overflow-y-auto max-h-[calc(90vh-140px)]">
          {/* Format Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              Export Format
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setFormat('json')}
                className={`p-4 rounded-lg border-2 transition-all ${
                  format === 'json'
                    ? 'border-blue-primary bg-blue-light/20 dark:bg-blue-primary/20'
                    : 'border-gray-200 dark:border-gray-600 hover:border-blue-primary/50'
                }`}
              >
                <FileCode className="w-6 h-6 mx-auto mb-2 text-blue-primary" />
                <div className="text-sm font-medium text-gray-900 dark:text-white">JSON</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Structured data</div>
              </button>
              <button
                onClick={() => setFormat('txt')}
                className={`p-4 rounded-lg border-2 transition-all ${
                  format === 'txt'
                    ? 'border-blue-primary bg-blue-light/20 dark:bg-blue-primary/20'
                    : 'border-gray-200 dark:border-gray-600 hover:border-blue-primary/50'
                }`}
              >
                <FileText className="w-6 h-6 mx-auto mb-2 text-blue-primary" />
                <div className="text-sm font-medium text-gray-900 dark:text-white">Text</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Plain text</div>
              </button>
            </div>
          </div>

          {/* Options */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              Export Options
            </label>
            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={includeMetadata}
                onChange={(e) => setIncludeMetadata(e.target.checked)}
                className="w-4 h-4 text-blue-primary border-gray-300 rounded focus:ring-blue-primary"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">
                Include metadata (timestamps, categories, variables)
              </span>
            </label>
          </div>

          {/* Prompt Selection */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Select Prompts ({prompts.length} total)
              </label>
              <button
                onClick={handleSelectAll}
                className="text-sm text-blue-primary dark:text-blue-light hover:text-blue-dark dark:hover:text-white"
              >
                {selectAll ? 'Deselect All' : 'Select All'}
              </button>
            </div>
            <div className="max-h-48 overflow-y-auto space-y-2 border border-gray-200 dark:border-gray-600 rounded-lg p-3">
              {prompts.map((prompt) => (
                <label key={prompt.id} className="flex items-start gap-3 p-2 rounded hover:bg-gray-50 dark:hover:bg-gray-700/50 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedPrompts.includes(prompt.id)}
                    onChange={() => handlePromptSelect(prompt.id)}
                    className="w-4 h-4 text-blue-primary border-gray-300 rounded focus:ring-blue-primary mt-1"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs bg-blue-light/20 dark:bg-blue-primary/30 text-blue-primary dark:text-blue-light px-2 py-1 rounded">
                        {prompt.category}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {prompt.timestamp.toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-2">
                      {prompt.content}
                    </p>
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 p-6 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleExport}
            className="flex items-center gap-2 px-6 py-2 bg-blue-primary text-white rounded-lg hover:bg-blue-dark transition-colors"
          >
            <Download className="w-4 h-4" />
            Export {selectedPrompts.length > 0 ? `(${selectedPrompts.length})` : 'All'}
          </button>
        </div>
      </div>
    </div>
  );
};