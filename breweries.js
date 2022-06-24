
const breweryCardTemplate = document.querySelector('[brewery-card-template]')

const breweryCardContainer = document.querySelector('[brewery-card-container]')

const searchInput = document.querySelector('[brewery-search]')

let arrayBreweries = []



fetch('https://api.openbrewerydb.org/breweries')
.then(res => res.json())
.then(breweries => {

    arrayBreweries = breweries.map(brewery => {
    const breweryCard = breweryCardTemplate.content.cloneNode(true).children[0]

    const header = breweryCard.querySelector('[brewery-header]')

    const body = breweryCard.querySelector('[brewery-body]')
     
    header.textContent = brewery.name
    body.textContent = brewery.city
    breweryCardContainer.append(breweryCard)

    breweryCard.addEventListener('click', function (e){
        showBreweryDetails(brewery, this)

        

    })

    return { name: brewery.name, city: brewery.city, element: breweryCard}

    })
    const btnvar1 = document.querySelectorAll('.btn');

    btnvar1.forEach(btn => {
        btn.addEventListener('click', myLike)
    })
  
    function myLike(event) {
        console.log(event.target)
        event.target.parentNode.classList.toggle("colorOfI")
    }

})

searchInput.addEventListener('input', (e) => {
    const value = e.target.value
    const breweriesNode = document.querySelectorAll('.brewery')
    console.log(breweriesNode)
    breweriesNode.forEach(brewery => {
        const breweryHeader = brewery.querySelector('.header', '.body')
        if (value !== breweryHeader.textContent.slice(0,value.length)) {
            brewery.style.display = "none"
        }
        else brewery.style.display = "block"

    })
    

    })

    function showBreweryDetails(brewery, showStateArea){
        const showState = document.createElement('p')
        showState.textContent = brewery.state
        showState.append(' ', brewery.phone)
        showState.append(' ', brewery.website_url)
        showStateArea.append(showState)
    }



    const userForm = document.querySelector('#userForm')

    userForm.addEventListener('submit', (e) => {
        e.preventDefault()

        userFormObj = {
            "name": document.querySelector('#userFormName').value,
            "city": document.querySelector('#userFormCity').value,
            "state": document.querySelector('#userFormState').value,
            "website": document.querySelector('#userFormWebsite').value
        }

       const userFormCard = breweryCardTemplate.content.cloneNode(true).children[0]
       
       const userHeader = userFormCard.querySelector('[brewery-header]')

        const userBody = userFormCard.querySelector('[brewery-body]')

        const userBreweryNode = document.createElement('div')

        userBreweryNode.setAttribute('id', 'user-brewery')

        userHeader.textContent = userFormObj.name
        userBody.textContent = userFormObj.city

        userBreweryNode.append(userHeader, userBody)

        breweryCardContainer.append(userBreweryNode)

        userBreweryNode.addEventListener('click', function (e){
            showUserBreweryDetails(userFormObj, this)

        })

        return { name: userFormObj.name, city: userFormObj.city, element: userBreweryNode}
        
        })
        const userBtnvar1 = document.querySelectorAll('.user-btn');

        userBtnvar1.forEach(btn => {
            btn.addEventListener('click', userMyLike)

            userBreweryNode.append(userBtnvar1)
        })
      
        function userMyLike(event) {
            console.log(event.target)
            event.target.parentNode.classList.toggle("colorOfI")
        }
    
    

    function showUserBreweryDetails(userFormObj, showUserStateArea){
        const showUserState = document.createElement('p')
        showUserState.textContent = userFormObj.state
        showUserState.append(' ', userFormObj.website)
        showUserStateArea.append(showUserState)

    }

    const yourAge = prompt("Please enter your age to enter this site: ")

    if(yourAge >= 21) {
        alert("Welcome! We hope you enjoy your experience! Please drink responsibly.")

        document.getElementById("age-verification")
    }
    else {
        alert("Users under the age of 21 cannot access this page! Please visit us when you reach the legal age limit!")
        location.href = ("")
    }


  