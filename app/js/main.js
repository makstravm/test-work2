// реле класа для окрытие формы  добавления фильма

document.querySelector('.header__btn').addEventListener('click', () => {
  document.querySelector('.header__btn').classList.toggle('--active');
  document.querySelector('.form-add').classList.toggle('--active');
})

// обработчик для кнопки Cancel  - закрытие формы

document.querySelector('.form__cancel').addEventListener('click', () => {
  document.querySelector('.header__btn').classList.remove('--active');
  document.querySelector('.form-add').classList.remove('--active');
})

function addClassActive() {
  this.classList.toggle('--active');
  this.nextElementSibling.classList.toggle('--active');
}


// обработчик для расскрытие комментариев

const commentsBtnArray = document.getElementsByClassName('comments__btn');
for (let i = 0; i < commentsBtnArray.length; i++) {

  commentsBtnArray[i].addEventListener('click', addClassActive);
}

//  добавление комментария

let comments = document.getElementsByClassName('comments');
for (let i = 0; i < comments.length; i++) {
  let commentItem = comments[i]
  commentItem.querySelector('.comments__count').innerHTML = commentItem.getElementsByClassName('comments__item').length;
  commentItem.querySelector('.comment__add').addEventListener('click', function () {
    if (commentItem.querySelector('.comments__textarea').value.trim()) {
      let div = document.createElement('div');
      div.className = 'comments__item';
      div.innerHTML = commentItem.querySelector('.comments__textarea').value;
      commentItem.querySelector('.comments__items').append(div);
      commentItem.querySelector('.comments__count').innerHTML = commentItem.getElementsByClassName('comments__item').length; // счет коментариев
      commentItem.querySelector('.comments__textarea').value = '';
    }
  })
}

// удалить фильм
function filmsItemRemove() {
  this.closest('.films__item').remove()
}
const filmDelete = document.getElementsByClassName('film__del');
for (let i = 0; i < filmDelete.length; i++) {
  filmDelete[i].addEventListener('click', filmsItemRemove)
}

document.querySelector('.form__add').addEventListener('click', () => {
  let div = document.createElement('div');
  div.className = 'films__item';
  div.control = false;
  div.innerHTML = `<div class="films__item-wrapper">
    <div class="films__item-img">
      <img src=${document.getElementById('poster').value} alt="film image">
    </div>
    <div class="films__inner">
    <h2 class="films__title films__correct-input">
    ${document.getElementById('title').value}
    </h2>
    <p class="films__description films__correct-textarea">
    ${document.getElementById('description').value}
    </p>
    <div class="films__box">
      <span class="films__group">country</span>
      <span class="films__name films__correct-input">${document.getElementById('country').value}</span>
    </div>
    <div class="films__box">
      <span class="films__group">year</span>
      <span class="films__name films__correct-input">${document.getElementById('year').value}</span>
    </div>
    <div class="films__box">
      <span class="films__group ">Genre</span>
      <span class="films__name films__correct-input">${document.getElementById('genre').value}</span>
    </div>
    <div class="films__box">
      <span class="films__group">actors</span>
      <span class="films__name films__correct-textarea">${document.getElementById('actors').value}</span>
    </div>
    <button class="btn btn__cancel film__del">Delete</button>
    <button class="btn btn__add film__edit">Edit</button>
    </div>
    </div>
    <div class="films__commnts comments">
    <button class="comments__btn">Comments: <span class="comments__count">3</span>
    <svg width='18px' height='12px' fill="#ff7e70" viewBox="0 0 320 512">
      <path
        d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z">
      </path>
    </svg>
    </button>
    <div class="comments__inner">
    <div class="comments__items">
    </div>
    <textarea class="form-add__textarea comments__textarea" placeholder="Add your comment"></textarea>
    <button class="btn btn__add comment__add">Add</button>
    </div> 
  </div>`
  document.querySelector('.films .container').append(div);
  div.querySelector('.comments__btn').addEventListener('click', addClassActive);
  div.querySelector('.film__del').addEventListener('click', filmsItemRemove);
  div.querySelector('.comments__count').innerHTML = div.getElementsByClassName('comments__item').length;
  div.querySelector('.comment__add').addEventListener('click', function () {
    if (div.querySelector('.comments__textarea').value.trim()) {
      let divComment = document.createElement('div');
      divComment.className = 'comments__item';
      divComment.innerHTML = div.querySelector('.comments__textarea').value;
      div.querySelector('.comments__items').append(divComment);
      div.querySelector('.comments__count').innerHTML = div.getElementsByClassName('comments__item').length; // счет коментариев
      div.querySelector('.comments__textarea').value = '';
    }
  })
  div.querySelector('.film__edit').addEventListener('click', function () {
    let inputClass = div.getElementsByClassName('films__correct-input')
    let textareaClass = div.getElementsByClassName('films__correct-textarea')
    if (!div.control) {
      for (let i = 0; i < inputClass.length; i++) {
        let input = document.createElement('input');
        input.className = 'correct-input'
        input.value = inputClass[i].innerHTML.trim();
        inputClass[i].innerHTML = '';
        inputClass[i].appendChild(input);
      }
      for (let i = 0; i < textareaClass.length; i++) {
        let textarea = document.createElement('textarea');
        textarea.className = 'correct-input'
        textarea.value = textareaClass[i].innerHTML.trim();
        textareaClass[i].innerHTML = '';
        textareaClass[i].appendChild(textarea);
      }
      return div.control = true
    } else {
      for (let i = 0; i < inputClass.length; i++) {
        inputClass[i].innerHTML = inputClass[i].querySelector('input').value;
      }
      for (let i = 0; i < textareaClass.length; i++) {
        textareaClass[i].innerHTML = textareaClass[i].querySelector('textarea').value;
      }
      return div.control = false
    }
  });
})

let editItem = document.getElementsByClassName('film__edit');
for (let i = 0; i < editItem.length; i++) {
  let control = false
  editItem[i].addEventListener('click', function () {

    let inputClass = this.parentElement.getElementsByClassName('films__correct-input')
    let textareaClass = this.parentElement.getElementsByClassName('films__correct-textarea')
    if (!control) {
      for (let i = 0; i < inputClass.length; i++) {
        let input = document.createElement('input');
        input.className = 'correct-input'
        input.value = inputClass[i].innerHTML.trim();
        inputClass[i].innerHTML = '';
        inputClass[i].appendChild(input);
      }
      for (let i = 0; i < textareaClass.length; i++) {
        let textarea = document.createElement('textarea');
        textarea.className = 'correct-input'
        textarea.value = textareaClass[i].innerHTML.trim();
        textareaClass[i].innerHTML = '';
        textareaClass[i].appendChild(textarea);
      }
      return control = true
    } else {
      for (let i = 0; i < inputClass.length; i++) {
        inputClass[i].innerHTML = inputClass[i].querySelector('input').value;
      }
      for (let i = 0; i < textareaClass.length; i++) {
        textareaClass[i].innerHTML = textareaClass[i].querySelector('textarea').value;
      }
      return control = false
    }
  });
}
let aaa = document.getElementsByClassName('films__item')
let array = []
for (let i = 0; i < aaa.length; i++) {
 console.log(aaa[i]);
 array = [aaa[i], ...array]
}
console.log(array);
  localStorage.setItem("test", `${array}`)
  console.log(localStorage.getItem("test"));