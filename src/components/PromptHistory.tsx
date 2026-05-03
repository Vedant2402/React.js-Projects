import React, { useState } from 'react';
import { Search, Heart, Trash2, Download, Filter, Clock } from 'lucide-react';
import { usePromptGenerator } from '../hooks/usePromptGenerator';
import { ExportModal } from './ExportModal';
import { copyToClipboard } from '../utils/exportUtils';

export const PromptHistory: React.FC = () => {
  const {
    prompts,
    favorites,
    toggleFavorite,
    deletePrompt,
    clearHistory,
    searchPrompts
  } = usePromptGenerator();

  const [searchTerm, setSearchTerm] = useState('');
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [showExportModal, setShowExportModal] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredPrompts = showFavoritesOnly 
    ? favorites 
    : searchPrompts(searchTerm);

  const handleCopy = async (content: string, id: string) => {
    const success = await copyToClipboard(content);
    if (success) {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Prompt History
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {prompts.length} prompts generated • {favorites.length} favorites
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setShowExportModal(true)}
            disabled={prompts.length === 0}
            className="flex items-center gap-2 px-4 py-2 bg-blue-primary text-white rounded-lg hover:bg-blue-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Download className="w-4 h-4" />
            Export
          </button>
          <button
            onClick={clearHistory}
            disabled={prompts.length === 0}
            className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Trash2 className="w-4 h-4" />
            Clear All
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search prompts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
        </div>
        <button
          onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
            showFavoritesOnly
              ? 'bg-blue-light/20 dark:bg-blue-primary/30 border-blue-primary text-blue-primary dark:text-blue-light'
              : 'bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600'
          }`}
        >
          <Filter className="w-4 h-4" />
          {showFavoritesOnly ? 'Show All' : 'Favorites Only'}
        </button>
      </div>

      {/* Prompt List */}
      {filteredPrompts.length === 0 ? (
        <div className="text-center py-12">
          <Clock className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-400 mb-2">
            {prompts.length === 0 
              ? 'No prompts generated yet' 
              : showFavoritesOnly 
                ? 'No favorites yet' 
                : 'No prompts match your search'
            }
          </h3>
          <p className="text-gray-500 dark:text-gray-500">
            {prompts.length === 0 
              ? 'Start creating prompts to see them here'
              : showFavoritesOnly
                ? 'Add prompts to favorites to see them here'
                : 'Try a different search term'
            }
          </p>
        </div>
      ) : (
        <div className="grid gap-4">
          {filteredPrompts.map((prompt) => (
            <div
              key={prompt.id}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 text-xs font-medium bg-blue-light/20 dark:bg-blue-primary/30 text-blue-primary dark:text-blue-light rounded-full">
                    {prompt.category}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {formatDate(prompt.timestamp)}
                  </span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => toggleFavorite(prompt.id)}
                    className={`p-2 rounded-lg transition-colors ${
                      prompt.favorite
                        ? 'text-blue-primary hover:bg-blue-light/10 dark:hover:bg-blue-primary/20'
                        : 'text-gray-400 hover:text-red-500 hover:bg-gray-50 dark:hover:bg-gray-700'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${prompt.favorite ? 'fill-current' : ''}`} />
                  </button>
                  <button
                    onClick={() => handleCopy(prompt.content, prompt.id)}
                    className="p-2 rounded-lg text-gray-400 hover:text-blue-primary hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    {copiedId === prompt.id ? (
                      <span className="text-green-500 text-xs font-medium">Copied!</span>
                    ) : (
                      'Copy'
                    )}
                  </button>
                  <button
                    onClick={() => deletePrompt(prompt.id)}
                    className="p-2 rounded-lg text-gray-400 hover:text-red-500 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
                <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
                  {prompt.content}
                </p>
                {prompt.length && (
                  <div className="mt-2 pt-2 border-t border-gray-200 dark:border-gray-600">
                    <span className="text-xs bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300 px-2 py-1 rounded">
                      Length: {prompt.length}
                    </span>
                  </div>
                )}
              </div>

              {Object.keys(prompt.variables).length > 0 && (
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                    Variables used:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {Object.entries(prompt.variables).map(([key, value]) => (
                      <span
                        key={key}
                        className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300 rounded"
                      >
                        {key}: {value}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {showExportModal && (
        <ExportModal
          prompts={filteredPrompts}
          onClose={() => setShowExportModal(false)}
        />
      )}
    </div>
  );
};