import NavBar from './NavBar.js';
import About from './About.js';
import News, {NewsFilter} from './News.js';
import Projects, {ProjectsFilter} from './Projects.js';

export default function MainPage(data){
    document.querySelector('.container').innerHTML = `
        ${NavBar('main', Object.keys(data))}
        ${About(data.about)}
        ${News(data.news)}
        ${Projects(data.projects)}
    `;
    NewsFilter(data);
    ProjectsFilter(data);
    console.log(Object.keys(data));
}