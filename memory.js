const cards = ["coffee-heart.jpg", "coffee-heart.jpg", "coffeehold.jpg", "coffeehold.jpg", 
"kawa-1.jpg", "kawa-1.jpg", "kawa2.jpg", "kawa2.jpg", "kawa-5526.jpg", "kawa-5526.jpg",
 "KawaAZ.jpg", "KawaAZ.jpg"];


 const c0 = document.getElementById('c0');
 const c1 = document.getElementById('c1');
 const c2 = document.getElementById('c2');
 const c3 = document.getElementById('c3');

 const c4 = document.getElementById('c4');
 const c5 = document.getElementById('c5');
 const c6 = document.getElementById('c6');
 const c7 = document.getElementById('c7');

 const c8 = document.getElementById('c8');
 const c9 = document.getElementById('c9');
 const c10 = document.getElementById('c10');
 const c11 = document.getElementById('c11');

 c0.addEventListener("click", function() {revealCard(0);});
 c1.addEventListener("click", function() {revealCard(1);});
 c2.addEventListener("click", function() {revealCard(2);});
 c3.addEventListener("click", function() {revealCard(3);});

 c4.addEventListener("click", function() {revealCard(4);});
 c5.addEventListener("click", function() {revealCard(5);});
 c6.addEventListener("click", function() {revealCard(6);});
 c7.addEventListener("click", function() {revealCard(7);});

 c8.addEventListener("click", function() {revealCard(8);});
 c9.addEventListener("click", function() {revealCard(9);});
 c10.addEventListener("click", function() {revealCard(10);});
 c11.addEventListener("click", function() {revealCard(11);});

 let oneVisible = false;
 let turnCounter = 0;
 let visibleCardNr;        //first card
 let lock = false;       //to prevent from clicking more than two cards
 let pairsLeft = 6;

 function revealCard(nr){

    let opacityValue = $('#c'+nr).css('opacity');

    if (opacityValue != 0 && lock == false){

        lock = true;

        let obraz = "url(./images/" + cards[nr] + ")";

        $('#c'+nr).css('background-image', obraz);
        $('#c'+nr).addClass('cardActive');
        $('#c'+nr).removeClass('card');
            
        
        
                if(oneVisible == false){
                                            //first card
                    oneVisible = true;
                    visibleCardNr = nr;
                    lock = false;
                }

                else{
                                            //second card
                    if(cards[visibleCardNr] == cards[nr]){
                        
                        setTimeout(function(){hide2cards(visibleCardNr, nr)}, 750);
                        
                    }
                    else{
                        setTimeout(function(){restore2cards(visibleCardNr, nr)}, 750);
                    }

                            turnCounter++;
                            $('.score').html('Turn counter: '+turnCounter);
                            oneVisible = false;

                     }
    }
 }

 function hide2cards (card1, card2){
 $('#c'+card1).css('opacity', 0);
 $('#c'+card2).css('opacity', 0);
 pairsLeft--;

    if (pairsLeft == 0){
        $('.board').html('<h1>Congratulations! <br> You win in: '+ turnCounter + 'turns!</h1>');
    }

    lock = false;
 }

 function restore2cards (card1, card2){
    $('#c'+card1).css('background-image', 'url(./images/icon.jpg)');
    $('#c'+card1).addClass('card');
    $('#c'+card1).removeClass('cardActive');
    $('#c'+card2).css('background-image', 'url(./images/icon.jpg)');
    $('#c'+card2).addClass('card');
    $('#c'+card2).removeClass('cardActive');
    lock = false;
    
 }