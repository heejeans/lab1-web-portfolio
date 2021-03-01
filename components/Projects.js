export default function Projects(projects){
    return `
        <div id="projects">
        <h1 class="container animate__animated animate__pulse animate__infinite animate__slow">Projects</h1><br>
        <div class="filter">
            <label class="text">
                <input type="radio" name="filter" value="all" checked>
                All
            </label>
            <label class="text">
                <input type="radio" name="filter" value="credit">
                Credit
            </label>
            <label class="text">
                <input type="radio" name="filter" value="gene">
                Gene
            </label>
            <label class="text">
                <input type="radio" name="filter" value="coursework">
                Coursework
            </label>
        </div>
        <div class="project_list">
            ${ProjectItems(projects)}
        </div>
        </div>`
}

export function ProjectItems(projects){
    return projects.map(d=>`
        <section class="row container">
        <p class="col-8" id="${d.id}">
            <b><a class="project animate__animated animate__rubberBand animate__infinite animate__slow" href="?project=${d.id}" target="_self">${d.title}</a></b><br>
            <img class="pp" src="${d.image}" width="500" height="285">
        </p>
        <div class="right col-4 text tags"><br>
        ${d.author}<br><i>${d.source}</i><br>
            <div class="tagstyle luhn">${d.tags[0]}</div>
            <div class="tagstyle coursework">${d.tags[1]}</div><br>
            <a class="code" href="${d.code}" target="_blank"><i class="fas fa-laptop-code"> Source Code</i></a>
        </div> 
    </section>
    `).join('');
}

export function ProjectsFilter(data){ //project button function
    let buttons = document.querySelectorAll('.filter input[name="filter"]');
    buttons.forEach(cond=>cond.addEventListener('change', (event)=>{
        console.log(event.target.value);
        const value = event.target.value;
        const projectsfiltered = data.projects.filter(project=>{
            for (let i = 0; i < project.tags.length; i++) { //something is wrong with the for loop: only getting first item
                if (value === project.tags[i].toLowerCase()){
                    return project;
                }
                else if (value == "all"){
                    return data.projects;
                }
            }
        })
    console.log(projectsfiltered);
    document.querySelector('.project_list').innerHTML = ProjectItems(projectsfiltered);
     }))
}
 