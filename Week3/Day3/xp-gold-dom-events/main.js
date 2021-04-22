// Exercise 1 : Select A Kind Of Music

// 1. Display the value of the selected option.
const genres = document.getElementById('genres')

// 2. Add an additional option to the select tag: <option value="classic">Classic</option>

const classic = document.createElement('option');
classic.setAttribute('value', 'classic');
classic.innerText = "Classic";

genres.appendChild(classic);


// 3. The newly added option should be selected by default.

classic.setAttribute('selected', 'selected')



// Exercise 2: Delete Colors

const colorSelect = document.querySelectorAll('#colorSelect option')

const input = document.querySelector('form input');
input.addEventListener('click', removecolor)

function removecolor() {
       
        for (x in colorSelect) {
            if (colorSelect[x].selected) {
                console.log(colorSelect[x])
                colorSelect[x].remove()
            }
        }       
    }

