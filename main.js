fetch('assets/data.json')
.then(response => {
  return response.json();
  
})
.then(data => {
  console.log(data);
  function renderAbout(about){
    return `
    <h1 id="about" class="container animate__animated animate__pulse animate__infinite animate__slow"><br>Joy Son</h1>
        <section class="row container">
            <p class="col-6 personal text">
                <img class="profile" src="${about.photo}" alt="Profile picture" width="369.4" height="450"><br><br>
                <b>${about.title}</b><br>${about.info[0]}<br>${about.info[1]}<br>
                <a href="${about.links[0]}" target="_blank"><i class="far fa-file-alt"> Resume</i></a> |
                <a href="${about.links[1]}" target="_blank"><i class="fab fa-linkedin"></i></a> | 
                <a href="${about.links[2]}" target="_blank"><i class="fab fa-github"></i></a>
            </p>
            <p class="col-6 text">
            ${about.description}
            </p>
        </section>`;
    }
    function renderNews(news){
        return `
        <h1 id="news" class="container animate__animated animate__pulse animate__infinite animate__slow">News</h1><br>
            <div class="row container">
                ${renderNewsItems(news)}
            </div>`
    }
    function renderNewsItems(news){
        return news.map(d=>`
            <p class="container"><div class="col-8 text">${d.title}</div><div class="right col-4 text">${d.date}</div></p>
            `).join('');
    }
    function renderProjects(projects){
        return `
        <h1 id="projects" class="container animate__animated animate__pulse animate__infinite animate__slow">Projects</h1>
        <div>
            ${renderProjectItems(projects)}
        </div>`
    }
    function renderProjectItems(projects){
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
    function renderNavbar(page, items){
        if (page == 'main'){
            return `
            <nav>
                <ul>
                    <li><a href="#${items[0]}">About</a></li>
                    <li><a href="#${items[1]}">News</a></li>
                    <li><a href="#${items[2]}">Projects</a></li>
                </ul>
            </nav>`
        }
        if (page == 'credit'){
            return `
            <ul>
                <li><a class="back" href="index.html#${items[0].id}" target="_self">Go Back</a></li>
            </ul>`
        }
        if (page == 'dna'){
            return `
            <ul>
            <li><a class="back" href="index.html#${items[1].id}" target="_self">Go Back</a></li>
            </ul>`
        }
    }
        
    function renderMainPage(data){
    document.querySelector('.container').innerHTML = `
        ${renderNavbar('main', Object.keys(data))}
        ${renderAbout(data.about)}
        ${renderNews(data.news)}
        ${renderProjects(data.projects)}
    `;
}
console.log(Object.keys(data));

function renderProjectPage(project){ //parameter is project name, how to extract data
    renderNavbar(project, data.projects)
    if (project == 'credit'){
        return `
        <h2 class="container animate__animated animate__pulse animate__infinite animate__slow">${data.projects[0].title}</h2><br>
        <section class="row container">
            <div class="col-8 text">
                <img class="pp" src="${data.projects[0].image}" width="500" height="285"><br>
                ${data.projects[0].author}<br><i>${data.projects[0].source}</i><br>
                <div class="tagstyle luhn">${data.projects[0].tags[0]}</div>
                <div class="tagstyle coursework">${data.projects[0].tags[1]}</div><br>
            </div><br><br><br>
            <p class="col-4 text">
            ${data.projects[0].description}
            </p>
            <p class="container text">
            <a class="code" href="${data.projects[0].code}" target="_blank"><i class="fas fa-laptop-code"> Source Code</i></a><br>
            ${data.projects[0].copyright}
            </p>
        </section>`
    }
    if (project == 'dna'){
        return `
        <h2 class="container animate__animated animate__pulse animate__infinite animate__slow">${data.projects[1].title}</h2><br>
        <section class="row container">
            <div class="col-8 text">
                <img class="pp" src="${data.projects[1].image}" width="500" height="270"><br>
                ${data.projects[1].author}<br><i>${data.projects[1].source}</i><br>
                <div class="tagstyle gene">${data.projects[1].tags[0]}</div>
                <div class="tagstyle coursework">${data.projects[1].tags[1]}</div><br>
            </div><br><br><br>
            <p class="col-4 text">
            ${data.projects[1].description}
            </p>
            <p class="container text">
            <a class="code" href="${data.projects[1].code}" target="_blank"><i class="fas fa-laptop-code"> Source Code</i></a><br>
            ${data.projects[1].copyright}
            </p>
        </section>`
    }
    
}

const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
if (urlParams.has('project')){
    const project = urlParams.get('project');
    console.log(project);
    renderProjectPage(project);

}
else{
    renderMainPage(data);
}

});
    


