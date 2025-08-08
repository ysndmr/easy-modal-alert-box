import { TestBed } from '@angular/core/testing';
import { DOCUMENT } from '@angular/common';
import { EasyModalService, ModalConfig } from './easy-modal.service';

describe('EasyModalService', () => {
  let service: EasyModalService;
  let document: Document;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EasyModalService);
    document = TestBed.inject(DOCUMENT);
  });

  afterEach(() => {
    service.close();
  });

  it('should create modal with title and content', () => {
    const config: ModalConfig = { title: 'Test', content: 'Hello' };
    service.open(config);
    const modal = document.querySelector('.easy-modal');
    expect(modal).not.toBeNull();
    expect(modal?.querySelector('.easy-modal-title')?.textContent).toBe('Test');
    expect(modal?.querySelector('.easy-modal-content')?.innerHTML).toBe('Hello');
  });

  it('should remove modal on close', () => {
    service.open({ title: 'Test', content: 'Bye' });
    service.close();
    expect(document.querySelector('.easy-modal')).toBeNull();
  });
});
