export default function NavBar(page, items){
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
            <li><a class="back" href="index.html#${items.projects[0].id}" target="_self">Go Back</a></li>
        </ul>`
    }
    if (page == 'dna'){
        return `
        <ul>
        <li><a class="back" href="index.html#${items.projects[1].id}" target="_self">Go Back</a></li>
        </ul>`
    }
}