// Focus management utility to handle focus outlines based on input method
export class FocusManager {
  private static isKeyboardUser = false;
  private static isInitialized = false;

  static init() {
    if (this.isInitialized) return;
    
    // Listen for keyboard events to detect keyboard users
    document.addEventListener('keydown', (e) => {
      // Tab key or arrow keys indicate keyboard navigation
      if (e.key === 'Tab' || ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
        this.isKeyboardUser = true;
      }
    });

    // Listen for mouse events to detect mouse users
    document.addEventListener('mousedown', () => {
      this.isKeyboardUser = false;
    });

    // Listen for touch events to detect touch users
    document.addEventListener('touchstart', () => {
      this.isKeyboardUser = false;
    });

    this.isInitialized = true;
  }

  static shouldShowFocus(): boolean {
    return this.isKeyboardUser;
  }

  static addFocusClass(element: HTMLElement) {
    if (this.shouldShowFocus()) {
      element.classList.add('keyboard-focus');
    } else {
      element.classList.remove('keyboard-focus');
    }
  }
}

// Initialize on DOM ready
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => FocusManager.init());
}
