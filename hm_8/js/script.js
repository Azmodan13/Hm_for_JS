
const start = document.createElement('button');
start.className = 'btn';
start.innerHTML = 'START';
const wraper = document.createElement('div')
wraper.className = 'wraper';
document.body.append(wraper);
wraper.append(start);

    // *  Создаем игровое поле
function createItems(){
    const game = document.createElement('div');
    game.className = 'game';
    for (let i = 0; i < 9; i++){
        let item = document.createElement('div');
        item.className = 'item';
        game.append(item);
    }
    wraper.append(game);
}

    let clicked = document.getElementsByClassName('item');
    const game = document.getElementsByClassName('game');
    
    let player = true ;
    function players() {
        if(player === true){
            player = false;
            
            return 'X'
        }else{
            player = true;
            
            return 'O'
        }
    }


    //* клик на ечейку
    function checked(){
        for (var i = 0; i < clicked.length; i++) {
        clicked[i].addEventListener("click", function() {
        this.innerText = players();

            checkArr(getArr());
        }, {once : true});
    }
}




    //* старт игры
start.addEventListener('click', function(){
    createItems();
    checked();
    start.remove()
});

function getArr() {
    for (var i = 0; i < clicked.length; i++) {
            var arr = Array.from(clicked);
            var mapP = arr.map(t => {return t.innerText});   
            return mapP
        
    }
}

function checkArr(arr){
    counter = 1;
    for(let i = 0; i < arr.length; i++){
        if ( arr[0] == "X" && arr[1] == 'X' && arr[2] == 'X' ||
    arr[3] == "X" && arr[4] == 'X' && arr[5] == 'X' ||
    arr[6] == "X" && arr[7] == 'X' && arr[8] == 'X' ||
    arr[0] == "X" && arr[3] == 'X' && arr[6] == 'X' ||
    arr[1] == "X" && arr[4] == 'X' && arr[7] == 'X' ||
    arr[2] == "X" && arr[5] == 'X' && arr[8] == 'X' ||
    arr[0] == "X" && arr[4] == 'X' && arr[8] == 'X' ||
    arr[6] == "X" && arr[4] == 'X' && arr[2] == 'X' ){
		return tryAgain('Player X won')
    }
    
    if ( arr[0] == "O" && arr[1] == 'O' && arr[2] == 'O' ||
    arr[3] == "O" && arr[4] == 'O' && arr[5] == 'O' ||
    arr[6] == "O" && arr[7] == 'O' && arr[8] == 'O' ||
    arr[0] == "O" && arr[3] == 'O' && arr[6] == 'O' ||
    arr[1] == "O" && arr[4] == 'O' && arr[7] == 'O' ||
    arr[2] == "O" && arr[5] == 'O' && arr[8] == 'O' ||
    arr[0] == "O" && arr[4] == 'O' && arr[8] == 'O' ||
    arr[6] == "O" && arr[4] == 'O' && arr[2] == 'O' ){
        return tryAgain('Player O won')
        
    }
    
    if 
    ( arr[0] == "X" && arr[1] == 'O' && arr[2] == 'X' &&
    arr[3] == "O" && arr[4] == 'X' && arr[5] == 'X' &&
    arr[6] == "O" && arr[7] == 'X' && arr[8] == 'O' ||

    arr[0] == "O" && arr[1] == 'X' && arr[2] == 'X' &&
    arr[3] == "X" && arr[4] == 'O' && arr[5] == 'O' &&
    arr[6] == "X" && arr[7] == 'O' && arr[8] == 'X' ||

    arr[0] == "X" && arr[1] == 'O' && arr[2] == 'X' &&
    arr[3] == "O" && arr[4] == 'O' && arr[5] == 'X' &&
    arr[6] == "X" && arr[7] == 'X' && arr[8] == 'O' ||

    arr[0] == "X" && arr[1] == 'O' && arr[2] == 'O' &&
    arr[3] == "O" && arr[4] == 'X' && arr[5] == 'X' &&
    arr[6] == "X" && arr[7] == 'X' && arr[8] == 'O' ||

    arr[0] == "X" && arr[1] == 'O' && arr[2] == 'X' &&
    arr[3] == "X" && arr[4] == 'O' && arr[5] == 'X' &&
    arr[6] == "O" && arr[7] == 'X' && arr[8] == 'O' ||

    arr[0] == "O" && arr[1] == 'O' && arr[2] == 'X' &&
    arr[3] == "X" && arr[4] == 'X' && arr[5] == 'O' &&
    arr[6] == "O" && arr[7] == 'X' && arr[8] == 'X' ||

    arr[0] == "X" && arr[1] == 'X' && arr[2] == 'O' &&
    arr[3] == "O" && arr[4] == 'X' && arr[5] == 'X' &&
    arr[6] == "X" && arr[7] == 'O' && arr[8] == 'O' ||

    arr[0] == "X" && arr[1] == 'O' && arr[2] == 'X' &&
    arr[3] == "X" && arr[4] == 'X' && arr[5] == 'O' &&
    arr[6] == "O" && arr[7] == 'X' && arr[8] == 'O' ||

    arr[0] == "O" && arr[1] == 'X' && arr[2] == 'X' &&
    arr[3] == "X" && arr[4] == 'O' && arr[5] == 'O' &&
    arr[6] == "O" && arr[7] == 'X' && arr[8] == 'X' ||


    arr[0] == "O" && arr[1] == 'X' && arr[2] == 'O' &&
    arr[3] == "X" && arr[4] == 'X' && arr[5] == 'O' &&
    arr[6] == "X" && arr[7] == 'O' && arr[8] == 'X' ||


    arr[0] == "X" && arr[1] == 'O' && arr[2] == 'X' &&
    arr[3] == "X" && arr[4] == 'O' && arr[5] == 'O' &&
    arr[6] == "O" && arr[7] == 'X' && arr[8] == 'X' ||


    arr[0] == "O" && arr[1] == 'X' && arr[2] == 'O' &&
    arr[3] == "X" && arr[4] == 'O' && arr[5] == 'X' &&
    arr[6] == "X" && arr[7] == 'O' && arr[8] == 'X'
    )
    return tryAgain('Draw')
    } 

    
}

function tryAgain(winner){
    const wrap = document.createElement('div');
    wrap.className = 'wrap';
    const btn = document.createElement('button');
    btn.className = 'btn';
    btn.innerText = 'Try again';
    const text = document.createElement('h1');
    text.className = 'winner';
    text.innerHTML = winner;
    wrap.append(text, btn);
    wraper.append(wrap);
    btn.addEventListener('click', function(){
        location.reload();

    });
}
