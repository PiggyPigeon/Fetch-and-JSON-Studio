window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json) {
            console.log(json.length);
            console.log(json[6].active)
            console.log(json[4].picture)
            const astroCount = document.getElementById("count");
            astroCount.innerHTML = `No. of astronauts: ${json.length}`
            const astronautDiv = document.getElementById("container");

            //do not understand below sorting line, someone plz explain....
            json.sort((a,b) => (a.hoursInSpace>b.hoursInSpace) ? 1 : -1)
                for (let i = 0; i <json.length; i++) {
                    //below if statement is supposed to turn 'Active: true' to green... didnt work
                    console.log(`active status: ${json[i].active}`)
                    if (json[i].active == true){
                        let green = json[i].active;
                        green.color = 'green'
                    }
                astronautDiv.innerHTML += `
                <div class="astronaut">
                    <div class="bio">
                        <h3>${json[i].firstName} ${json[i].lastName}</h3>
                        <ul>
                            <li>Hours in space: ${json[i].hoursInSpace} </li>
                            <li>Active: ${json[i].active}</li>
                            <li>Skills: ${json[i].skills}</li>
                        </ul>
                    </div>
                    <img class="avatar" src='${json[i].picture}'/>
                </div>`
                }
            })
        })
    })





