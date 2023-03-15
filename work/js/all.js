//指定dom
var showbtn = document.querySelector('.showbtn');
var list = document.querySelector('.list');
var final = document.querySelector('.final');
var data = JSON.parse(localStorage.getItem('BMI')) || [];
//監聽.更新資料
showbtn.addEventListener('click',addData);
list.addEventListener('click',deleteData);
final.addEventListener('click',resetbtn);
update(data);


//增加
function addData(e){
    var heightValue = document.querySelector('.height').value;
    var weightValue = document.querySelector('.weight').value;
    if(heightValue && weightValue !==''){
        var heightdec = heightValue * 0.01;
        var BMIValue = (weightValue/(heightdec*heightdec)).toFixed(2);
        var Today=new Date();
        var txt ={height:heightValue,weight:weightValue,BMI:BMIValue,day:(Today.getMonth()+1)+'-'+Today.getDate()+'-'+Today.getFullYear()};
        data.push(txt);
        update(data);
        localStorage.setItem('BMI',JSON.stringify(data));
        final.classList.add("active");
    }else{
        alert('請輸入資料');
    }
}
//更新
function update(item){
    var str ='';
    var strbtn ='';
    var len = item.length;
    if(len>0){
        for(var i=0; i<len; i++){
            var BMI = item[i].BMI;
            switch (true) {
                case (BMI< 18.5) :
                    str +='<div class="show level-2"><a href="#" data-index="'+ i +'" class="delete">X</a><div>過輕</div><div><span>BMI</span>'+ item[i].BMI +'</div><div><span>weight</span>'+ item[i].weight +'kg</div><div><span>height</span>'+ item[i].height +'cm</div><div>'+ item[i].day +'</div></div>';
                    break;
                case (BMI>= 18.5 && BMI<24) :
                    str +='<div class="show level-1"><a href="#" data-index="'+ i +'" class="delete">X</a><div>理想</div><div><span>BMI</span>'+ item[i].BMI +'</div><div><span>weight</span>'+ item[i].weight +'kg</div><div><span>height</span>'+ item[i].height +'cm</div><div>'+ item[i].day +'</div></div>';
                    break;
                case (BMI>= 24 && BMI<27) :
                    str +='<div class="show level-3"><a href="#" data-index="'+ i +'" class="delete">X</a><div>過重</div><div><span>BMI</span>'+ item[i].BMI +'</div><div><span>weight</span>'+ item[i].weight +'kg</div><div><span>height</span>'+ item[i].height +'cm</div><div>'+ item[i].day +'</div></div>';
                    break;
                case (BMI>= 27 && BMI<30) :
                    str +='<div class="show level-4"><a href="#" data-index="'+ i +'" class="delete">X</a><div>輕度肥胖</div><div><span>BMI</span>'+ item[i].BMI +'</div><div><span>weight</span>'+ item[i].weight +'kg</div><div><span>height</span>'+ item[i].height +'cm</div><div>'+ item[i].day +'</div></div>';
                    break;
                case (BMI>= 30 && BMI<35) :
                    str +='<div class="show level-4"><a href="#" data-index="'+ i +'" class="delete">X</a><div>中度肥胖</div><div><span>BMI</span>'+ item[i].BMI +'</div><div><span>weight</span>'+ item[i].weight +'kg</div><div><span>height</span>'+ item[i].height +'cm</div><div>'+ item[i].day +'</div></div>';
                    break;
                case (BMI>= 35) :
                    str +='<div class="show level-5"><a href="#" data-index="'+ i +'" class="delete">X</a><div>重度肥胖</div><div><span>BMI</span>'+ item[i].BMI +'</div><div><span>weight</span>'+ item[i].weight +'kg</div><div><span>height</span>'+ item[i].height +'cm</div><div>'+ item[i].day +'</div></div>';
                    break;
            
            }
            var BMIlast = item[item.length-1].BMI;
            
                switch (true) {
                    case (BMIlast< 18.5) :
                        strbtn ='<div class="showall level-2-c"><span>'+BMIlast+'</span><span>BMI</span><a href="" class="reset"><img src="images/icons_loop.png" alt=""></a><span class="finaltext">過輕</span></div>';
                        break;
                    case (BMIlast>= 18.5 && BMIlast<24) :
                        strbtn ='<div class="showall level-1-c"><span>'+BMIlast+'</span><span>BMI</span><a href="" class="reset"><img src="images/icons_loop.png" alt=""></a><span class="finaltext">理想</span></div>';
                        break;
                    case (BMIlast>= 24 && BMIlast<27) :
                        strbtn ='<div class="showall level-3-c"><span>'+BMIlast+'</span><span>BMI</span><a href="" class="reset"><img src="images/icons_loop.png" alt=""></a><span class="finaltext">過重</span></div>';
                        break;
                    case (BMIlast>= 27 && BMIlast<30) :
                        strbtn ='<div class="showall level-4-c"><span>'+BMIlast+'</span><span>BMI</span><a href="" class="reset"><img src="images/icons_loop.png" alt=""></a><span class="finaltext">輕度肥胖</span></div>';
                        break;
                    case (BMIlast>= 30 && BMIlast<35) :
                        strbtn ='<div class="showall level-4-c"><span>'+BMIlast+'</span><span>BMI</span><a href="" class="reset"><img src="images/icons_loop.png" alt=""></a><span class="finaltext">中度肥胖</span></div>';
                        break;
                    case (BMIlast>= 35) :
                        strbtn ='<div class="showall level-5-c"><span>'+BMIlast+'</span><span>BMI</span><a href="" class="reset"><img src="images/icons_loop.png" alt=""></a><span class="finaltext">重度肥胖</span></div>';
                        break;             
                    default:
                        break;
                }
        };
    }else{
        final.classList.remove("active");
        str ='<div style="text-align: center;">您尚未輸入任何資料!</div>';
    }
    list.innerHTML = str;
    final.innerHTML = strbtn;
}
//刪除
function deleteData(e){
    e.preventDefault();
    var link = e.target.nodeName;
    var index = e.target.dataset.index;
    if(link !=='A'){return}
    data.splice(index,1);
    update(data);
    localStorage.setItem('BMI',JSON.stringify(data));
}

function resetbtn(e){
    e.preventDefault();
    if(e.target.nodeName !=='A'&& e.target.nodeName !=='IMG'){return}
    final.classList.remove("active");
    document.querySelector('.height').value = '';
    document.querySelector('.weight').value = '';
}
