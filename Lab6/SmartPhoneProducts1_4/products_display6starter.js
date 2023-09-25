//declare and push to the DOM the store name at top and bottom
const store_name="Tassia";
top_title.innerHTML=(store_name + "'s Used Smart Phone Store");
bottom_title.innerHTML=(store_name + "'s Used Smart Phone Store");

let hits= 0;
let spins=0;
//let wins;
hits_span.innerHTML = hits; 
spins_span.innerHTML = spins;

function changeClassName(element) {
    //Item is when its still, item rotate is when it spins 
    if(element.className='item'){
        element.className= 'item rotate';
        spins=spins+1;
    }
    
    if( spins<2*hits&&hits<spins){
      //  wins=true;
        Over_half=true;
    }else {
        //wins=false;
    }

    //win_span.innerHTML=wins;
    win_span.innerHTML=over_half;
    spins_span.innerHTML = spins; 
    hit_spin_span.innerHTML=Number(hits/spins).toFixed(2)

// -- Winning progress depends on hits/spins
let hits_spins_ratio = hits/spins;
let progress; 

/* if ( hits_spins_ratio > 0 ) {
    progress = 'On your way!';
    if ( hits_spins_ratio >= 0.25 ) {
        let progress = 'Almost there!';
        if ( hits_spins_ratio >= 0.5 ) {
            if( hits < spins) { 
                progress = 'You win!';
            }
        }
    }
}
else {
    progress = 'Get going!' ;
}*/
    if(hits_spins_ratio >= 0.5 ){
        progress='You win!';
        progress = 'On your way!';
    } else if(hits_spins_ratio >=0.25){
    progress = 'Almost there!';
    }  else if( hits < spins) { 
        progress = 'You win!';
    } else {
        progress = 'Get going!';
    }
    win_span.innerHTML=progress;
function resetClassName(element) {
    if(element.className=='item rotate'){
    element.className = 'item';
    hits=hits+=2;
    } else {}
        changeClassName(element);
    element.className = 'item rotate';
    spins=spins+1; 
    if( spins<2*hits&&hits<spins){
      //  wins=true;
        Over_half=true;
    }else {
        //wins=false;
    }
    //win_span.innerHTML=wins;
    win_span.innerHTML=over_half;
    hits_span.innerHTML = hits; 
    hit_spin_span.innerHTML=Number(hits/spins).toFixed(2)
}