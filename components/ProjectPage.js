import NavBar from './NavBar.js';
export default function ProjectPage(project, data){
    NavBar(project, data)
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