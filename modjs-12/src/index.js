import './styles.css';
import fetchCountries from './fetchCountries.js';
import countryListItemsTemplate from '../src/template/countries-list-item.hbs';
import countryListTemplate  from './template/countries-list.hbs';
import debounce from 'lodash.debounce';
import PNotify from '../node_modules/pnotify/dist/es/PNotify.js';
import PNotifyS from '../node_modules/pnotify/dist/PNotifyBrightTheme.css'
import PNotifyButtons from '../node_modules/pnotify/dist/es/PNotifyButtons';


const refs = {
searchForm: document.querySelector('#search-form'),
searchInput: document.querySelector('.search_input'),
countryList: document.querySelector('#country-list'),
};

refs.searchForm.addEventListener('submit', ev); 

function ev() {
    event.preventDefault();
};

refs.searchForm.addEventListener('input', debounce(searchFromInputHandler, 500),);


function searchFromInputHandler(e){
      const searchQuery = e.target.value;
      clearListItems();
      PNotify.closeAll();
   fetchCountries(searchQuery).then(data => {
       const markup = buildListItemMarkup(data);
       const renderCountriesList = buildCountriesList(data);
          if (!data) {
          return;
         } else if (data.length > 10) {
            PNotify.error({
            title: 'Oh no!!!',
            text: 'Too many matches found, please enter more specific query!',
             });
          } else if (data.length >= 2 && data.length <= 10){
            insertListItem(renderCountriesList);
          } else if (data.length ===1){
           insertListItem(markup);
         } else {
           PNotify.error({
            title: 'Oh no!!!',
            text: 'Nothing found!!!!',
          });
        }
  });
};

function insertListItem(items) {
    refs.countryList.insertAdjacentHTML('beforeend', items);
};

function buildCountriesList(items) {
    return countryListTemplate(items);
};

function buildListItemMarkup(items){
    return countryListItemsTemplate(items);
};

function clearListItems(){
    refs.countryList.innerHTML = '';
};


