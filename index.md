# 5 truques incríveis de DOM que você deveria conhecer.

- O que é DOM?
  document object model
- Visualizando a DOM

---
## eventos

  - on + nomedoevento
  - addEventListener('nomedoevento', function(event) {})

---
## criação de elementos 

  - .createElement()
  - template literals ``


  ```js
  //template literals
  ul.innerHTML = ul.innerHTML +`<li class="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out flex justify-between">${input.value} <button class="text-red-700">ⅹ</button></li>`
  ```

  ```js
  // createElement
  const li = document.createElement('li')
    li.setAttribute('class', "px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out flex justify-between")
    li.innerHTML = input.value

    const button = document.createElement('button')
    button.setAttribute("class", "text-red-700")
    button.innerHTML = "ⅹ"

    li.appendChild(button)
    ul.appendChild(li)

  ```


---
## .cloneNode()

  - deep: boolean

---
## classList

  - .contains


---
## target
  - event.target
  - event.currentTarget


### Código final
```js
const form = document.querySelector('form')
const ul = document.querySelector('ul')


form.onsubmit = function(event) {
  event.preventDefault()

  const input = form.querySelector('input')
  const value = input.value

  if(value == "") return

  const li = ul.querySelector('li').cloneNode(true)
  li.querySelector('span').textContent = value
  ul.appendChild(li)

  input.value = ""
  
}

ul.onclick = function (event) {
  if(event.target.classList.contains('delete')) {
    if(confirm("Deseja deletar esse item?")) {
      event.target.parentElement.remove()
    }
  }
}
```

<!-- ## new features by DevAndreAkira
  - localstorage to save itens; -->