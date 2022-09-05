'use strict';

{
  const btn = document.getElementById('btn');
  const topicSet = ['お金や健康に関する心配事','自分がイライラしてしまうこと','人生で幸福になれること','自分が改善したいこと','将来の夢・野望','自分の性生活に関する事','自分の弱点やマイナスな面','自分が許せないこと','自分の趣味・興味','自分の失敗談',];
  
  const questionSet = [
    ['一人暮らし？実家暮らし？','バイトはしてる？','大きな病気にかかったことある？'],
    ['なぜ、それにイライラしてしまうのか？','それについてのエピソード','イライラはどう解消している？'],
    ['なぜそれを幸せと感じる？','どのくらいの頻度で幸せと実感してる？','人にお薦めしてみて！'],
    ['どんな時によく感じる？最近はあった？','いつぐらいから実感した？','本当に直す必要があるかな？'],
    ['10年後どんな人になっているかな？','具体的にでも抽象的でも、どんなことに挑戦したい？','そう思ったきっかけはある？'],
    ['これまででやばいと思った恋人（異性）は？','今の恋人自慢ある？','人に話せる打ち明け話とかは？'],
    ['虫や動物は平気？','人混みはどう？旅行に行くなら有名所or穴場？','辛い食べ物平気な人？受け付けなかった食べ物は？'],
    ['許せないと感じた経験をしたことある？','それを友達にされたor友達がしていたらどうする？','それは自分ならではだと思う？'],
    ['ハマったきっかけは？','どんなところが魅力的？','趣味仲間はいる？'],
    ['自分がいつぐらいの時のが強烈？','どっちかというと恥ずかしかった？悲しかった？','それを受けて変えたor変わったことある？']
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