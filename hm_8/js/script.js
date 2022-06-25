
const start = document.querySelector('.btn');
const wraper = document.querySelector('.wraper')


function createItems(){

    // *  Создаем игровое поле
    let game = document.createElement('div');
    game.className = 'game';
    let item = document.createElement('div');
    item.className = 'item';

    for (let i = 0; i < 9; i++){
        let item = document.createElement('div');
        item.className = 'item';
        game.append(item);
    }
    wraper.append(game);
    const clicked = document.getElementsByClassName('item');


    // * какой игрок ходит
    let player = true ;
    function players() {
        if(player === true){
            player = false;
            
            return 'player_1'
        }else{
            player = true;
            
            return 'player_2'
        }
    }


    //* клик на ечейку
    
    for (var i = 0; i < clicked.length; i++) {
        clicked[i].addEventListener("click", function() {

        this.classList.add(players())



        }, {once : true});
    }

    console.log(clicked);


}

    //* старт игры
start.addEventListener('click', function(){
    createItems();
    start.remove()
});



