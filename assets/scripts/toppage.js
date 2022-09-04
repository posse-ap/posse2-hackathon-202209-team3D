'use strict';

{
  const btn = document.getElementById('btn');
  const topicSet = ['お金や健康に関する心配事','自分がイライラしてしまうこと','人生で幸福になれること','自分が改善したいこと','将来の夢・野望','自分の性生活に関する事','自分の弱点やマイナスな面','自分が許せないこと','自分の趣味・興味','自分の失敗談',];
  const questionSet = [
    ['一人暮らし？実家暮らし？','バイトはしてる？','大きな病気にかかったことある？'],
    ['なぜ、それにイライラしてしまうのか？','',''],
    ['なんで、それが幸せなんだろう？'],
    ['','',''],
    ['','',''],
    ['',''],
    ['',''],
    ['例えば、'],
    ['ハマったきっかけは？','どんなところが魅力的？'],
    ['']
  ]

  const num = [0,1,2,3,4,5,6,7,8,9];


  btn.addEventListener('click',()=>{
    //while
    let i = num.splice(Math.floor(Math.random()*num.length),1)[0];
    const tBox = document.getElementById('tBox');
    tBox.innerHTML = topicSet[i];
    const qCollection = document.getElementById('q-collection');
    
    
  })
  
  
  
}