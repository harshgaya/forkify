import View from './View';
import icons from 'url:../../img/icons.svg';
import previewView from './previewView';
class ResultsView extends View {
  _parentElement = document.querySelector('.recipe');

  _errorMessage = 'No recipe found for your query! please try again';
  _successMessage = '';

  _parentElement = document.querySelector('.results');
  _generateMarkup() {
    console.log(this._data);
    //return this._data.map(this._generateMarkupPreview).join('');
    return this._data.map(result => previewView.render(result, false)).join('');
  }
  // _generateMarkup() {
  //   console.log(this._data);
  //   return this._data.map(this._generateMarkupPreview).join('');
  // }
  // _generateMarkupPreview(result) {
  //   const id = window.location.hash.slice(1);

  //   return `
  //   <li class="preview">
  //   <a class="preview__link ${
  //     result.id === id ? 'preview__link--active' : ''
  //   }" href="#${result.id}">
  //     <figure class="preview__fig">
  //       <img src="${result.image}" alt="Test" />
  //     </figure>
  //     <div class="preview__data">
  //       <h4 class="preview__title">${result.title}</h4>
  //       <p class="preview__publisher">${result.publisher}</p>

  //       </div>
  //     </div>
  //   </a>
  // </li>
  //   `;
  // }
}

export default new ResultsView();
