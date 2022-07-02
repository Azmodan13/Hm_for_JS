


    fetch('https://api.punkapi.com/v2/beers?brewed_before=11-2017&abv_gt=6')
    .then((response) => {
            if (response.status !== 200) {
                console.log('Looks like there was a problem');
                console.log(`Status Code: ${response.status}`);
                return;
            }
            return response.json();
        }
    )
    
    .then((data) => {
        btn.addEventListener('click', function() {
                for (const key in data){
                    createElement(data[key].image_url, data[key].description, data[key].id)
                }
            btn.remove()
        });
    })
    
    .catch((err) => {
        console.log('Fetch Error :-S', err);
    });

    const btn = document.querySelector('.btn')

    const wraper = document.querySelector('.wrapper');

    function createElement(url, description, id) {    
        const item = document.createElement('div');
        item.className = 'item'
    
        const img = document.createElement('img');
        img.className = 'img'
        img.src = url
        img.dataset.id = id
    
        const descr = document.createElement('div');
        descr.className = 'descr'
        descr.innerHTML = description 
    
        item.append(img, descr)
        wraper.append(item)
    }
    


    let counter = 0;
    document.addEventListener('click', function(e) {
        if (!e.target.classList.contains('img')) { return }


for (const i in localStorage){
    console.log(typeof(i))
    if(localStorage.getItem(i) === e.target.dataset.id){
        return console.log('уже есть')
    } else {
        localStorage.setItem(counter,e.target.dataset.id )

    }
}
counter++;
});





