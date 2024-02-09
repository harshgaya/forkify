import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

if (module.hot) {
  module.hot.accept();
}

const controlRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);
    if (!id) return;
    recipeView.renderSpinner();

    //0 update results view to mark selected serach result
    resultsView.update(model.getSearchResultsPage());
    bookmarksView.update(model.state.bookmarks);

    /// loading recipe
    await model.loadRecipe(id);

    /// rendering recipe

    recipeView.render(model.state.recipe);
  } catch (e) {
    // alert(e);
    //console.log(e);
    recipeView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();

    // 1. Get search query
    const query = searchView.getQuery();
    if (!query) return;

    //2. load search results
    await model.loadSearchResults(query);
    console.log(model.state.search.results);

    ///3.render results
    //resultsView.render(model.state.search.results);
    resultsView.render(model.getSearchResultsPage());

    //4. render initial pagination buttons
    console.log('model page no', model.state.search.page);
    paginationView.render(model.state.search);
  } catch (e) {
    console.log(e);
  }
};

const controlPagination = function (goto) {
  console.log('pag controller', goto);
  ///1.render new results

  resultsView.render(model.getSearchResultsPage(goto));

  //2. render new  pagination buttons
  paginationView.render(model.state.search);
};

const controlServings = function (newSrvings) {
  /// 1. udating servings
  model.updateServings(newSrvings);

  ///2. updating recipe view
  //recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
};
const controlAddBookmark = function () {
  console.log(model.state.recipe);
  if (!model.state.recipe.bookmarked) {
    model.addBookmark(model.state.recipe);
  } else {
    console.log(false);
    model.deleteBookmark(model.state.recipe.id);
  }

  recipeView.render(model.state.recipe);

  bookmarksView.render(model.state.bookmarks);
};
const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
};

//showRecipe();
// window.addEventListener('hashchange', showRecipe);
// window.addEventListener('load', showRecipe);
///['haschange', 'load'].forEach(ev => window.addEventListener(ev, controlRecipe));
const init = function () {
  bookmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipe);
  searchView.addHandlerSearch(controlSearchResults);
  window.addEventListener('hashchange', controlRecipe);
  window.addEventListener('load', controlRecipe);
  paginationView.addHandlerClick(controlPagination);
  recipeView.addHandlerUpdateServing(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
};
init();
