const todoList = [
    {
        'name': 'header'
    },
    {
        'name': "Mini Project",
        "description": "A to-do list mini project using javascript, dom, and localStorage creating an interective webpage to display the to-do list with specific requirements.",
        "start date": new Date('2021-05-17').toISOString().substring(0, 10),
        "end date": new Date('2021-05-20').toISOString().substring(0, 10),
        "status": "active"
    },
    {
        "name": "DOM",
        "description": "A mini project using the tools of DOM (Document Object Manipulation) to create interaction with JavaScript",
        "start date": new Date('2021-05-20').toISOString().substring(0, 10),
        "end date": new Date('2021-05-27').toISOString().substring(0, 10),
        "status": "active"
    },
    {
        "name": "PostgreSQL",
        "description": "A database project to work on postgresql queries on PgAdmin4 tool.",
        "start date": new Date('2021-05-19').toISOString().substring(0, 10),
        "end date": new Date('2021-05-25').toISOString().substring(0, 10),
        "status": "active"
    },
    {
        "name": "React",
        "description": "Create a project using REACT, an open-source front-end JavaScript library for building user interfaces or UI components.",
        "start date": new Date('2021-05-12').toISOString().substring(0, 10),
        "end date": new Date('2021-05-17').toISOString().substring(0, 10),
        "status": "active"
    },
]


let local = localStorage.setItem('todoList', JSON.stringify(todoList));
let todo = localStorage.getItem('todoList')
let parse = JSON.parse(todo)
console.log(parse)


const table = document.querySelector('.table');
const closeBtn = document.getElementById('close');
const close1Btn = document.getElementById('close1');
const close2Btn = document.getElementById('close2');
const confirmBtn = document.getElementById('confirm');
const overlay = document.querySelector('.overlay');
const delOverlay = document.querySelector('.delete-overlay');
const editOverlay = document.querySelector('.edit-overlay');
const overlayBox = document.querySelector('.overlay-box');
const h2 = document.getElementById('h2');
const h3 = document.getElementById('h3');
const description = document.getElementById('desc-p');
const title = document.querySelectorAll('.row td:first-child');

parse.sort((a, b) => new Date(a['start date']) - new Date(b['start date']))

console.log(parse)


for (let i = 1; i < todoList.length; i++) {

    let icon = document.createElement('i');
    let tr = document.createElement('tr');
            tr.classList.add('row');
            table.appendChild(tr);

    function createElements() {

            icon.classList.add('far', 'fa-square', 'fa-2x');
            icon.style.marginRight = "10px";

            icon.addEventListener('click', () => {
                clearTimeout(timer);
                prevent = true;
                tr.classList.toggle('done')
                icon.classList.toggle('fa-square');
                icon.classList.toggle('fa-check-square');
            })


            let tdName = document.createElement('td');
            tdName.style.display = "flex";
            tdName.style.justifyContent = "left";
            tdName.style.alignItems = "center";
            tdName.appendChild(icon)
            tr.appendChild(tdName);

            let tdNameText = document.createElement('p')
            tdNameText.textContent = parse[i]['name']
            tdNameText.style.textAlign = "left";
            tdName.appendChild(tdNameText)

            let tdDate = document.createElement('td')
            tdDate.style.textAlign = "left";
            tr.appendChild(tdDate)
            let tdDateText = document.createTextNode(parse[i]["start date"])
            tdDate.appendChild(tdDateText)

            let daysRemaining = document.createElement('td');
            daysRemaining.style.textAlign = "left";
            tr.appendChild(daysRemaining)


            function getNumberOfDays(start, end) {
                const date1 = new Date(start)
                const date2 = new Date(end);
            
                // One day in milliseconds
                const oneDay = 1000 * 60 * 60 * 24;
            
                // Calculating the time difference between two dates
                const diffInTime = date2.getTime() - date1.getTime();
            
                // Calculating the no. of days between two dates
                const diffInDays = Math.ceil(diffInTime / oneDay);
            
                return diffInDays;
            }
            
            let days = getNumberOfDays(new Date(), parse[i]['end date'])
            let daysText = daysRemaining.textContent = days;

            if(days < 0) {
                    tr.classList.add('over');
            }


            let editNode = document.createElement('td');
            editNode.style.textAlign = "center";
            tr.appendChild(editNode);
            let editIcon = document.createElement('i');
            editIcon.classList.add('far', 'fa-edit');
            editNode.appendChild(editIcon)

            editIcon.addEventListener('click', () => {
                clearTimeout(timer);
                prevent = true;
                editOverlay.classList.remove('hidden')
            })

            let delNode = document.createElement('td');
            delNode.style.textAlign = "center";
            tr.appendChild(delNode);


            let delIcon = document.createElement('i');
            delIcon.classList.add('far', 'fa-trash-alt');
            delNode.appendChild(delIcon)

            delIcon.addEventListener('click', () => {
                clearTimeout(timer);
                prevent = true;
                delOverlay.classList.remove('hidden')

                confirmBtn.addEventListener('click', () => {
                    tr.remove();
                    delOverlay.classList.add('hidden')
                })
            })
    }
    createElements();

    let timer = 0;
    let prevent = false;

    tr.addEventListener('click', () => {

        timer = setTimeout(() => {
            if(!prevent) {
                overlay.classList.remove('hidden')
                h3.textContent = parse[i]["name"];
                description.textContent = parse[i]["description"];
            }
            prevent = false;
        }, 300)

    })


    tr.addEventListener('dblclick', () => {
        clearTimeout(timer);
        prevent = true;
        tr.classList.toggle('done')
        icon.classList.toggle('fa-square');
        icon.classList.toggle('fa-check-square');
    })
}


closeBtn.addEventListener('click', () => {
    overlay.classList.add('hidden')
})
close1Btn.addEventListener('click', () => {
    delOverlay.classList.add('hidden')
})
close2Btn.addEventListener('click', () => {
    editOverlay.classList.add('hidden')
})