import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.elem = document.createElement('div');
    this.elem.classList.add('modal');

    this.title = '';

    let template = `
      <div class="modal__overlay"></div>

      <div class="modal__inner">
        <div class="modal__header">
          <!--Кнопка закрытия модального окна-->
          <button type="button" class="modal__close">
            <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
          </button>

          <h3 class="modal__title"></h3>
        </div>

        <div class="modal__body">
          A сюда нужно добавлять содержимое тела модального окна
        </div>
      </div>
    `;

    this.elem.innerHTML = template;

    this.elem.querySelector('.modal__close').addEventListener('click', () => {
      this.close();
    });

  }

  open() {
    let bodyEl = document.querySelector('body');
    bodyEl.append(this.elem);

    bodyEl.classList.add('is-modal-open');

    document.addEventListener('keydown', this.closeOnEsc);
  }

  closeOnEsc = (e) => {
    if (e.code === 'Escape') {
      this.close();
    }
  }

  close() {
    this.elem.remove();

    let bodyEl = document.querySelector('body');
    bodyEl.classList.remove('is-modal-open');

    document.removeEventListener('keydown', this.closeOnEsc);
  }

  setTitle(title) {
    this.title = title;
    let titleEl = this.elem.querySelector('.modal__title');
    titleEl.innerHTML = this.title;
  }

  setBody(body) {
    let bodyBlock = this.elem.querySelector('.modal__body');
    bodyBlock.innerHTML = '';
    bodyBlock.append(body);
  }
}
