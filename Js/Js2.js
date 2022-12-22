var mainImg = document.getElementById('mainImg');
var smallimg = document.getElementsByClassName('small-img');

smallimg[0].onclick = function(){
mainImg.src = smallimg[0].src;
}
smallimg[1].onclick = function(){
mainImg.src = smallimg[1].src;
}
smallimg[2].onclick = function(){
mainImg.src = smallimg[2].src;
}
smallimg[3].onclick = function(){
mainImg.src = smallimg[3].src;
}

function buy(click){
    var x = document.getElementById('size').value;
    if(x != 1){
        alert('Đã thêm vào giỏ hàng');
    }
    else{
        confirm('Chưa chọn size');
    }
}

function modalimg(){
    var Mimg = document.getElementById('modalimg');
    Mimg.src = mainImg.src;
    document.getElementById('modal01').style.display='block';     
}