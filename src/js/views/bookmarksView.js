import View from './View';
import icons from 'url:../../img/icons.svg';
import previewView from './previewView';
class BookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');

  _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark.';
  _successMessage = '';

  _parentElement = document.querySelector('.bookmarks__list');

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }
  _generateMarkup() {
    console.log(this._data);
    //return this._data.map(this._generateMarkupPreview).join('');
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join('');
  }
  //   _generateMarkupPreview(result) {
  //     const id = window.location.hash.slice(1);

  //     return `
  //     <li class="preview">
  //     <a class="preview__link ${
  //       result.id === id ? 'preview__link--active' : ''
  //     }" href="#${result.id}">
  //       <figure class="preview__fig">
  //         <img src="${result.image}" alt="Test" />
  //       </figure>
  //       <div class="preview__data">
  //         <h4 class="preview__title">${result.title}</h4>
  //         <p class="preview__publisher">${result.publisher}</p>

  //         </div>
  //       </div>
  //     </a>
  //   </li>
  //     `;
  //   }
}

export default new BookmarksView();
