export default function About(about){
    return `
    <div>
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
        </section>
    </div>`;
}