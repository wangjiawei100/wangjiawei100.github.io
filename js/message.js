window.onload = function() {
    var btn = document.getElementById('publish');
    btn.addEventListener('click', function(){
        var content = document.getElementById('content').value;
        console.log(content)
        if ( content == '') {
            alert('发布内容不能为空');
            return false;
        }
        var li = document.createElement('li');
        li.className = 'clearfix';
        var html = '';
        html+='    <img class="icon" src="./img/aboutMe.png" alt="">';
        html+='    <div class="mesBoardBox">';
        html+='        <h5>神秘游客</h5>';
        html+='        <p>'+content+'</p>';
        html+='    </div>';
        li.innerHTML = html;
        document.getElementById('msgList').prepend(li);
    })
}
