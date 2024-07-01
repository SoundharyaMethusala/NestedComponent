const commentContainer=document.querySelector('#first-comment');
const container=document.querySelector('.container');

commentContainer.addEventListener('click',function(e){
    //console.log(e.target);
    let closestContainer=e.target.closest('.comment-container');

    if(e.target.classList.contains('reply')){
        
        const commentreplycontainer=document.createElement('div');
        commentreplycontainer.setAttribute('class','comment-reply-container');
        commentreplycontainer.innerHTML=`<input type="text" placeholder="Write your Comment">
                                        <button class="btn-submit">Submit</button`;
        closestContainer.appendChild(commentreplycontainer);
    }
    else if(e.target.classList.contains('btn-submit')){
        let closestcommentreplycontainer=e.target.closest('.comment-reply-container');
        const newcomment=document.createElement('div');
        newcomment.setAttribute('class','comment-container');
        const input=closestcommentreplycontainer.querySelector('input');
        const value=input.value;
        newcomment.innerHTML= `<h3>${value}</h3>
                                <div class="reply">Reply</div>`;
        closestContainer.appendChild(newcomment);
        closestcommentreplycontainer.remove();

    }
});