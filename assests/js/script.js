const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
const ticketPrice = +movieSelect.value;


// update total and count 
function updateSelectCount(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const selectedSeatCount= selectedSeats.length;

    count.innerHTML=selectedSeatCount;
    total.innerHTML=selectedSeatCount * ticketPrice;

}

// Movie select event 
movieSelect.addEventListener('change',e=>{
    ticketPrice = +e.target.value;
    updateSelectCount();
});

container.addEventListener('click',e =>{
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied') )
        {
            e.target.classList.toggle('selected');

            updateSelectCount();
        }
   
});