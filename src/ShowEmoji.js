import React from 'react'
import Result from './Result';
function ShowEmoji() {
    let emojis=[];
    let emojiList;
    emojiList = ['💜','😄','❤️'];
   
    //var display = document.getElementById('emojiDisplay');
    
    // function displayEmoji() {
    let emoji;
    var randomEmojiIndex;
    for(let i=0;i<=2;i++){
      randomEmojiIndex = Math.floor(Math.random() * emojiList.length);
       emoji = emojiList[randomEmojiIndex];
      emojis[i]=emoji;
    }
  return (<>
    <div style={{alignItems:'center',textAlign:'center'}}>
            <h2>
                {emojis[0]}
                {emojis[1]}
                {emojis[2]}
            </h2>
      
    </div>
    <Result emoji1={emojis[0]} emoji2={emojis[1]} emoji3={emojis[2]} />
    </>
  )
}

export default ShowEmoji;
