let caloriesList = document.querySelector('#calories-list')
caloriesList.innerHTML = ''

fetch('http://localhost:3000/api/v1/calorie_entries')
    .then(resp => resp.json())
    .then(respJSON => respJSON.forEach(loadCalories))

function loadCalories(obj){
    console.log(obj)
    let listItem = document.createElement('li')
    listItem.className = 'calories-list-item'

    let grid = document.createElement('div')
    grid.className = 'uk-grid'

    let width_16 = document.createElement('div')
    width_16.className = 'uk-width-1-6'

    let strong = document.createElement('strong')
    strong.innerText = obj.calorie

    let span = document.createElement('span')
    span.innerText = 'kcal'

    width_16.append(strong, span)

    let width_45 = document.createElement('div')
    width_45.className = 'uk-width-4-5'

    let em = document.createElement('em')
    em.className = 'uk-text-meta'
    em.innerText = 'Additional Notes Go Here!'

    width_45.append(em)

    grid.append(width_16, width_45)

    let menu = document.createElement('div')
    menu.className = 'list-item-menu'

    let editBtn = <a class="edit-button" uk-toggle="target: #edit-form-container" uk-icon="icon: pencil"></a>

    let deleteBtn = <a class="delete-button" uk-icon="icon: trash"></a>

    menu.append(editBtn, deleteBtn)

    listItem.append(grid, menu)

    caloriesList.prepend(listItem)

}