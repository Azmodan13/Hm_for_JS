
const start = document.querySelector('.btn');
const wraper = document.querySelector('.wraper')

    // *  Создаем игровое поле
const create = function createItems(){

    let game = document.createElement('div');
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
    const checked =  function(el){
        for (var i = 0; i < clicked.length; i++) {
        clicked[i].addEventListener("click", function() {

        this.classList.add(players())



        }, {once : true});
    }
}



    //* старт игры
start.addEventListener('click', function(){
    create();
    checked();
    start.remove()

});






