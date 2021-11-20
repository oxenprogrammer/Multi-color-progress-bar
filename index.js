const button = () => {
  const finish = document.querySelector('.button');
  finish.addEventListener('click', (event)=> {
    event.preventDefault();

    const progressBar = document.querySelectorAll('.outer>span');
    const percent = document.querySelectorAll('.percent');
    let index = 0, length = progressBar.length;
    
    for ( ; index < length; index++) {
      progressBar[index].style.transition = 'width 5s ease';
      progressBar[index].style.width = '100%';
      percent[index].textContent = '100%'
    }
  });
}

button();