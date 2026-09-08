import React, { useState } from 'react';
import { X, Key, CheckCircle, AlertCircle, ExternalLink, Sparkles, Trash2 } from 'lucide-react';
import { 
  AVAILABLE_MODELS, 
  DEFAULT_MODEL, 
  saveStoredApiKey, 
  saveStoredModel, 
  removeStoredApiKey, 
  testGeminiApiKey 
} from '../services/gemini';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentApiKey: string;
  currentModel: string;
  onSave: (apiKey: string, model: string) => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  currentApiKey,
  currentModel,
  onSave,
}) => {
  const [apiKey, setApiKey] = useState(currentApiKey);
  const [model, setModel] = useState(currentModel || DEFAULT_MODEL);
  const [testing, setTesting] = useState(false);
  const [testResult, setTestResult] = useState<{ success: boolean; message: string } | null>(null);

  if (!isOpen) return null;

  const handleTest = async () => {
    if (!apiKey.trim()) {
      setTestResult({ success: false, message: 'Please enter an API key first.' });
      return;
    }
    setTesting(true);
    setTestResult(null);
    try {
      await testGeminiApiKey(apiKey.trim(), model);
      setTestResult({ success: true, message: 'Success! Your Gemini API key is valid and working.' });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Failed to connect. Check your key and network.';
      setTestResult({ success: false, message });
    } finally {
      setTesting(false);
    }
  };

  const handleSave = () => {
    saveStoredApiKey(apiKey.trim());
    saveStoredModel(model);
    onSave(apiKey.trim(), model);
    onClose();
  };

  const handleClear = () => {
    removeStoredApiKey();
    setApiKey('');
    setTestResult(null);
    onSave('', model);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full p-6 sm:p-8 border border-indigo-100 overflow-hidden relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center">
            <Key className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-slate-900">AI Quiz Generator Setup</h2>
            <p className="text-xs sm:text-sm text-slate-500">Google Gemini API Configuration</p>
          </div>
        </div>

        {/* Info banner */}
        <div className="mb-5 p-3.5 bg-indigo-50/80 rounded-2xl border border-indigo-100 text-xs text-indigo-900 leading-relaxed">
          <p className="font-bold flex items-center gap-1.5 mb-1 text-indigo-950">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            Works offline or with AI
          </p>
          BookQuest comes with <strong>60+ pre-generated questions</strong> for classic books ready to play.
          Adding your own free Gemini API key lets you generate brand new quizzes for <em>any</em> book you choose!
        </div>

        {/* Form */}
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Gemini API Key
            </label>
            <input
              type="password"
              value={apiKey}
              onChange={(e) => {
                setApiKey(e.target.value);
                setTestResult(null);
              }}
              placeholder="AIzaSy..."
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none text-sm font-mono transition-all"
            />
            <div className="mt-1.5 flex items-center justify-between text-xs text-slate-500">
              <span className="text-[11px] text-slate-400">Stored safely in your browser (localStorage).</span>
              <a
                href="https://aistudio.google.com/app/apikey"
                target="_blank"
                rel="noreferrer"
                className="text-indigo-600 hover:text-indigo-800 font-bold inline-flex items-center gap-1"
              >
                Get a free key <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              AI Model
            </label>
            <select
              value={model}
              onChange={(e) => setModel(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none text-sm font-medium transition-all"
            >
              {AVAILABLE_MODELS.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.name}
                </option>
              ))}
            </select>
          </div>

          {/* Test Status feedback */}
          {testResult && (
            <div
              className={`p-3 rounded-xl text-xs font-semibold flex items-start gap-2 ${
                testResult.success
                  ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                  : 'bg-rose-50 text-rose-800 border border-rose-200'
              }`}
            >
              {testResult.success ? (
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              ) : (
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              )}
              <span>{testResult.message}</span>
            </div>
          )}

          {/* Buttons */}
          <div className="pt-2 flex flex-col-reverse sm:flex-row items-center justify-between gap-2.5">
            <div>
              {apiKey && (
                <button
                  type="button"
                  onClick={handleClear}
                  className="flex items-center gap-1 text-xs text-rose-600 hover:text-rose-700 font-bold px-2 py-1.5 rounded-lg hover:bg-rose-50 transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  Clear Key
                </button>
              )}
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
              <button
                type="button"
                onClick={handleTest}
                disabled={testing || !apiKey.trim()}
                className="px-4 py-2 text-xs sm:text-sm font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl transition-all"
              >
                {testing ? 'Testing...' : 'Test Connection'}
              </button>
              <button
                type="button"
                onClick={handleSave}
                className="px-5 py-2 text-xs sm:text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 active:scale-95 shadow-md shadow-indigo-200 rounded-xl transition-all"
              >
                Save Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
