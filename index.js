import MainPage from './components/MainPage.js'
import ProjectPage from './components/ProjectPage.js'

let data = null;

fetch('assets/data.json')
.then(response => {
  return response.json();
  
})

.then(_data => {
    data = _data
    console.log(data);

    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    if (urlParams.has('project')){
    const project = urlParams.get('project');
    console.log(project);
    ProjectPage(project, data);
}
    else{
        MainPage(data);
        //console.log("works");
}
    // if (urlParams.get('project')==null){
    //     MainPage(data);
    // }else{
    //     let project = data.projects.find(d=>d.id===urlParams.get('project'));
    //     ProjectPage(project);
    //     console.log(project);
    // }
});
