let movies = document.getElementById('movies');
let music = document.getElementById('music');
let books = document.getElementById('books');
let moviesContent = document.querySelector('.wrapperContentRight');
let musicContent = document.getElementById('musicContent');
let booksContent = document.getElementById('booksContent');
let burger = document.getElementById('burger');
let mainButtons = document.getElementById('mainButtons');
let newHeight, newWidth;



burger.onclick = function(){
            burger.classList.toggle('active');
            mainButtons.style.display = mainButtons.style.display === 'flex' ? 'none' : 'flex';} 

            window.addEventListener('resize', function(){
                 newWidth = window.innerWidth;
                 newHeight = window.innerHeight; 
                 if (newWidth > 790){
                    burger.classList.remove('active');
                    mainButtons.style.display = 'flex';
                    if (newWidth <= 790){
                        mainButtons.style.display = 'none';
                    }
                }
            });





movies.addEventListener('click', ()=>{
movies.classList.add('active');
music.classList.remove('active');
books.classList.remove('active');
moviesContent.style.display='grid';
musicContent.style.display='none';
booksContent.style.display='none';
})

books.addEventListener('click', ()=>{
    books.classList.add('active');
    music.classList.remove('active');
    movies.classList.remove('active');
    moviesContent.style.display='none';
    musicContent.style.display='none';
    booksContent.style.display='flex';
})

music.addEventListener('click', ()=>{
    music.classList.add('active');
    movies.classList.remove('active');
    books.classList.remove('active');
    moviesContent.style.display='none';
    musicContent.style.display='flex';
    booksContent.style.display='none';
})