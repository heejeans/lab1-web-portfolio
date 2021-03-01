export default function News(news){
    return `
        <div id="news">
        <h1 class="container animate__animated animate__pulse animate__infinite animate__slow">News</h1><br>
        <div class="search">
            <input type="search" name='news' placeholder="Search News...">
        </div><br>
        <div class="row container news_list">
            ${NewsItems(news)}
        </div>
        </div>`
}

export function NewsItems(news){
    const n = 4;
        return news.map(d=>`
            <p class="container"><div class="col-8 text">${d.title}</div><div class="right col-4 text">${d.date}</div></p>
            `).slice(0, n).join('');
}

export function NewsFilter(data){
    document.querySelector('.search input[name="news').addEventListener('input', (event)=>{
        console.log(event.target.value);
        const keyword = event.target.value;
        const newsfiltered = data.news.filter(news=>{
            return news.title.toLowerCase().includes(keyword.toLowerCase())
        })
        console.log(newsfiltered);
        document.querySelector('.news_list').innerHTML = NewsItems(newsfiltered);
    
    })
}