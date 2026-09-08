// Web Speech API for reading questions, hints, and explanations aloud

class SpeechManager {
  private synth: SpeechSynthesis | null = null;
  public enabled: boolean = true;

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
    }
  }

  isSupported(): boolean {
    return Boolean(this.synth);
  }

  stop() {
    if (this.synth) {
      this.synth.cancel();
    }
  }

  speak(text: string, onEnd?: () => void) {
    if (!this.synth || !this.enabled) return;

    this.stop();

    const cleanText = text.replace(/[*_#`~[\]]/g, '').trim();
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.rate = 0.95; // slightly slower for children's clarity
    utterance.pitch = 1.1; // warm and engaging pitch

    // Try to pick a natural English voice if available
    const voices = this.synth.getVoices();
    const englishVoice = voices.find(v => (v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha') || v.name.includes('Daniel')))) 
      || voices.find(v => v.lang.startsWith('en'));

    if (englishVoice) {
      utterance.voice = englishVoice;
    }

    if (onEnd) {
      utterance.onend = onEnd;
      utterance.onerror = onEnd;
    }

    this.synth.speak(utterance);
  }
}

export const speechManager = new SpeechManager();
