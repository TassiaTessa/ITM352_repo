//declare and push to the DOM the store name at top and bottom
const store_name="Tassia";
top_title.innerHTML=(store_name + "'s Used Smart Phone Store");
//footer title 
bottom_title.innerHTML=(store_name + "'s Used Smart Phone Store");

//initialize hits and spins to send to the DOM 
let hits= 0;
let spins=0;
//let wins;
let over_half=false;
hits_span.innerHTML = hits; 
spins_span.innerHTML = spins;

//adding variables in JS instead of HTML 

let name1 = "HTC";
let price1 = 40.00;
let image1 = "http://dport96.github.io/ITM352/morea/080.flow-control-II/HTC.jpg";

let name2 = "Apple";
let price2 = 75.00;
let image2 = "http://dport96.github.io/ITM352/morea/080.flow-control-II/iphone-3gs.jpg";

let name3 = "Nokia";
let price3 = 35.00;
let image3 = "http://dport96.github.io/ITM352/morea/080.flow-control-II/Nokia.jpg";

let name4 = "Samsung";
let price4 = 45.00;
let image4 = "http://dport96.github.io/ITM352/morea/080.flow-control-II/Samsung.jpg";

let name5 = "Blackberry";
let price5 = 10.00;
let image5 = "http://dport96.github.io/ITM352/morea/080.flow-control-II/Blackberry.jpg";




for (let i=1; eval("typeof name"+i) !='undefined'; i++){
    document.querySelector('.main').innerHTML += `
    <section class="item" onmouseover="changeClassName(this);"
    onclick="resetClassName(this);">
        <h2>${eval("name"+i)}</h2>
        <p>$${eval("price"+i)}</p>
        <img src="${eval("image"+i)}" />
    
    </section>`;
}


function changeClassName(element) {
     //Item is when its still, item rotate is when it spins
    if(element.className=='item'){
        spins=spins+1
        element.className='item rotate';
    }   
        if(spins<2*hits&&hits<spins){
            //wins=true;
           over_half=true;
        } else {
            //wins=false;
        }
    //win_span.innerHTML=wins;
    win_span.innerHTML=over_half;
    spins_span.innerHTML = spins; 
    hit_spin_span.innerHTML=Number(hits/spins).toFixed(2)
        // -- Winning progress depends on hits/spins
        let hits_spins_ratio = hits/spins;
        let progress; 
        
        if ( hits_spins_ratio > 0 ) {
            progress = 'On your way!';
            if ( hits_spins_ratio >= 0.25 ) {
                progress = 'Almost there!';
                if ( hits_spins_ratio >= 0.5 ) {
                    if( hits < spins) { 
                        progress = 'You win!';
                    }
                }
            }
        }
        else {
            progress = 'Get going!' ;
        }
        if(hits_spins_ratio >= 0.5 && hits<spins){
            progress='You win!';
          } else if(hits_spins_ratio >=0.25){
        progress = 'Almost there!';
        }  else if(hits_spins_ratio>0) { 
            progress = 'On your way!';
        } else {
            progress = 'Get going!';
        }

        //bing AI
         /*
        hits_spins_ratio = hits/spins;
if ( hits_spins_ratio > 0 ) {
    progress = 'On your way!';
} else if ( hits_spins_ratio >= 0.25 ) {
    progress = 'Almost there!';
} else if ( hits_spins_ratio >= 0.5 && hits < spins) { 
    progress = 'You win!';
} else {
    progress = 'Get going!' ;
}
*/
        win_span.innerHTML=progress;
}

function resetClassName(element) {
    if(element.className=='item rotate'){
        hits=hits+=2;
        element.className = 'item';
    } else{
        changeClassName(element);
    }
   
        if(spins<2*hits&&hits<spins){
            //wins=true;
            over_half=true;
        } else {
            wins=false;
        }
    //win_span.innerHTML=wins;
    win_span.innerHTML=over_half;
    hits_span.innerHTML = hits; 
    hit_spin_span.innerHTML=Number(hits/spins).toFixed(2)
      // -- Winning progress depends on hits/spins
      let hits_spins_ratio = hits/spins;
      let progress; 

     if ( hits_spins_ratio > 0 ) {
          progress = 'On your way!';
          if ( hits_spins_ratio >= 0.25 ) {
              progress = 'Almost there!';
              if ( hits_spins_ratio >= 0.5 ) {
                  if( hits < spins) { 
                      progress = 'You win!';
                  }
              }
          }
      }
      else {
          progress = 'Get going!' ;
      }
    if(hits_spins_ratio >= 0.5 && hits<spins){
        progress='You win!';
      } else if(hits_spins_ratio >=0.25){
    progress = 'Almost there!';
    }  else if(hits_spins_ratio>0) { 
        progress = 'On your way!';
    } else {
        progress = 'Get going!';
    }


      win_span.innerHTML=progress;
}
    //Bing AI 
    /*
    hits_spins_ratio = hits/spins;
if ( hits_spins_ratio > 0 ) {
    progress = 'On your way!';
} else if ( hits_spins_ratio >= 0.25 ) {
    progress = 'Almost there!';
} else if ( hits_spins_ratio >= 0.5 && hits < spins) { 
    progress = 'You win!';
} else {
    progress = 'Get going!' ;
}
*/