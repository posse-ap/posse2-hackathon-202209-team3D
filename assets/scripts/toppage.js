'use strict';

{
  const btn = document.getElementById('btn');
  const topicSet = ['お金や健康に関する心配事','自分がイライラしてしまうこと','人生で幸福になれること','自分が改善したいこと','将来の夢・野望','自分の性生活に関する事','自分の弱点やマイナスな面','自分が許せないこと','自分の趣味・興味','自分の失敗談',];
  
  const questionSet = [
    ['一人暮らし？実家暮らし？','バイトはしてる？','大きな病気にかかったことある？'],
    ['なぜ、それにイライラしてしまうのか？','イライラはどう解消している？',''],
    ['なぜそれを幸せと感じる？','あ','い'],
    ['あ','い','あ'],
    ['具体的にどんなことがしたい？','あ','い'],
    ['あ','い','う'],
    ['あ','い','う'],
    ['許せないと感じた経験をしたことある？','い','う'],
    ['ハマったきっかけは？','どんなところが魅力的？','趣味仲間はいる？'],
    ['悲しかった？恥ずかしかった？','あ','い']
  ]

  const num = [0,1,2,3,4,5,6,7,8,9];
  const questions = document.getElementById('questions');

  let count = 0;
  const tBox = document.getElementById('tBox');
  
  btn.addEventListener('click',()=>{
    if(count === 10){
      tBox.innerHTML = 'Finish!!';  
      btn.classList.add('disabled')    
      return;
    }
    
    while(questions.firstChild){
      questions.removeChild(questions.firstChild);
    }
    let i = num.splice(Math.floor(Math.random()*num.length),1)[0];
    // const tBox = document.getElementById('tBox');
    tBox.innerHTML = topicSet[i];
    const qCollection = document.getElementById('q-collection');
    for(let q=0; q<questionSet[i].length; q++){
      const li = document.createElement('li');
      li.textContent = questionSet[i][q];
      questions.appendChild(li);
    }
    count ++;
    

    
    
  })
  
  
  
}