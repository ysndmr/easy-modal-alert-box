import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

export interface ModalConfig {
  title?: string;
  content?: string;
  autoOpen?: boolean;
  type?: 'modal' | 'alert';
  closeButton?: boolean;
  closeText?: string;
  maxWidth?: string;
  minWidth?: string;
  overlay?: boolean;
  setTimeOut?: number | false;
  overlayClass?: string;
  modalTypeClass?: string[];
  className?: string[];
}

const DEFAULT_CONFIG: Required<Omit<ModalConfig, 'setTimeOut' | 'modalTypeClass' | 'className'>> & {
  setTimeOut: number | false;
  modalTypeClass: string[];
  className: string[];
} = {
  title: '',
  content: '',
  autoOpen: false,
  type: 'modal',
  closeButton: true,
  closeText: 'X',
  maxWidth: '',
  minWidth: '',
  overlay: true,
  setTimeOut: false,
  overlayClass: 'easy-modal-overlay',
  modalTypeClass: ['error', 'info', 'warn', 'succes'],
  className: []
};

@Injectable({ providedIn: 'root' })
export class EasyModalService {
  private modalEl: HTMLElement | null = null;
  private overlayEl: HTMLElement | null = null;
  private timeoutHandle: any;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  open(config: ModalConfig): void {
    const opts = { ...DEFAULT_CONFIG, ...config };
    this.close();

    if (opts.overlay) {
      this.overlayEl = this.document.createElement('div');
      this.overlayEl.classList.add(opts.overlayClass);
      this.document.body.appendChild(this.overlayEl);
    }

    this.modalEl = this.document.createElement('div');
    this.modalEl.classList.add('easy-modal');

    if (opts.className.length) {
      opts.className.forEach(c => this.modalEl!.classList.add(c));
    }

    if (opts.type === 'alert') {
      opts.modalTypeClass.forEach(c => this.modalEl!.classList.add(c));
    }

    if (opts.maxWidth) {
      this.modalEl.style.maxWidth = opts.maxWidth;
    }
    if (opts.minWidth) {
      this.modalEl.style.minWidth = opts.minWidth;
    }

    if (opts.title) {
      const titleEl = this.document.createElement('div');
      titleEl.classList.add('easy-modal-title');
      titleEl.textContent = opts.title;
      this.modalEl.appendChild(titleEl);
    }

    const contentEl = this.document.createElement('div');
    contentEl.classList.add('easy-modal-content');
    contentEl.innerHTML = opts.content;
    this.modalEl.appendChild(contentEl);

    if (opts.closeButton) {
      const button = this.document.createElement('button');
      button.classList.add('easy-modal-close');
      button.textContent = opts.closeText;
      button.addEventListener('click', () => this.close());
      this.modalEl.appendChild(button);
    }

    this.document.body.appendChild(this.modalEl);

    if (typeof opts.setTimeOut === 'number' && opts.setTimeOut > 0) {
      this.timeoutHandle = setTimeout(() => this.close(), opts.setTimeOut);
    }
  }

  close(): void {
    if (this.timeoutHandle) {
      clearTimeout(this.timeoutHandle);
      this.timeoutHandle = null;
    }
    if (this.modalEl && this.modalEl.parentNode) {
      this.modalEl.parentNode.removeChild(this.modalEl);
      this.modalEl = null;
    }
    if (this.overlayEl && this.overlayEl.parentNode) {
      this.overlayEl.parentNode.removeChild(this.overlayEl);
      this.overlayEl = null;
    }
  }
}
