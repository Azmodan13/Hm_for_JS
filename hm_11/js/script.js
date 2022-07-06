const deley = ms => {
    return new Promise(r => setTimeout(() => r(), ms))
};


document.querySelector('.btn').addEventListener('click', function() {
    console.log('test')
    let user = document.querySelector('.input').value;
    fetchAssyncTodos(user)
})

const url = "https://api.github.com/users";


async function fetchAssyncTodos (id) {
    console.log('Fetch todo started...')
    try {
        await deley(1000)
        const response = await fetch(`${url}/${id}`)
        const data = await response.json()
        console.log(data)
        createElement(data.avatar_url, data.login, data.public_repos)

    } catch (e) {
        console.error(e)
    } finally {
        await deley(2000)
        console.log('finally')
    }
}

function createElement(foto, userLog, description) {   
    let wraper = document.querySelector('.wraper')
    
    const item = document.createElement('div');
    item.className = 'item'

    const img = document.createElement('img');
    img.className = 'img'
    img.src = foto

    const descr = document.createElement('div');
    descr.className = 'descr'
    descr.innerHTML = `Repositories: ${description}`  

    const login = document.createElement('div');
    login.className = 'login'
    login.innerHTML = userLog



    item.append(img, login, descr)
    wraper.append(item)
}

