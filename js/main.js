let btns = document.querySelectorAll('#btn');
let all = document.querySelector('.rock__btns');
let span = document.querySelector('.hide');
let user = document.querySelector('.user');
let comp = document.querySelector('.camp');
let table = document.querySelector('.table');
let lst = [...btns];

btns.forEach((val)=>{
  val.addEventListener('click',(e)=>{
    for(let i of btns){
      i.style.display = 'none';
    }
    all.classList.add('bet');
    e.target.style.display = 'block';
    randoms(lst,e.target.value);
  });
  
});
let countcamp = 0;
let coutnuser = 0;

function randoms(ran,e){
  let res = ran[Math.floor(Math.random() * ran.length)];
  let clone = document.createElement('button');
  clone.className = res.className;
  clone.value = res.value;
  clone.id = res.id;
  all.appendChild(clone);
  span.classList.add('d');

  if(e == 'qogoz' && res.value == 'tosh'){
    coutnuser += 1;
    table.textContent = 'Yutin';
  }
  else if(e == 'qogoz' && res.value == 'qaychi'){
    countcamp += 1;
    table.textContent = 'Yutkazdin';
  }

  else if(e == 'qaychi' && res.value == 'qogoz'){
    coutnuser += 1;
    table.textContent = 'Yutin';
  }
  else if(e == 'qaychi' && res.value == 'tosh'){
    countcamp += 1;
    table.textContent = 'Yutkazdin';
  }

  else if(e == 'tosh' && res.value == 'qogoz'){
    countcamp += 1;
    table.textContent = 'Yutkazdin';
  }
  else if(e == 'tosh' && res.value == 'qaychi'){
    coutnuser += 1;
    table.textContent = 'Yutin';
  }
  else if(e == res.value){
    table.textContent = 'Durang';
  }
  comp.textContent = countcamp;
  user.textContent = coutnuser;
  setTimeout(function(){
    all.removeChild(clone);
    for(let i of btns){
      i.style.display = 'block';
    }
    all.classList.remove('bet');
    span.classList.remove('d');
  },3000);
  
}
