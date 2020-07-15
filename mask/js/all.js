function init(){
    getDate();
    linkdata();
    screen();
}
init();

//顯示日期
function getDate(){
    var data = new Date();
    var Day = data.getDay();
    var year = data.getFullYear();
    var month = (data.getMonth() + 1);
    var date = data.getDate();
    var changeday = changeDay(Day);
    document.querySelector('.jsData span').textContent = changeday;
    document.querySelector('.today').textContent = year + '-' + month + '-' + date;

    //判斷單雙
    if(Day == 1 || Day == 3 || Day == 5 || Day == 7 || Day == 9){
        document.querySelector('.odd').style.display = 'block';
    }else if(Day == 0 || Day == 2 || Day == 4 || Day == 6 || Day == 8){
        document.querySelector('.even').style.display = 'block';
    }
}

//日期轉換中文
function changeDay(day){
    if(day == '0'){
        return '日'
    }
    else if(day == '1'){
        return '一'
    }
    else if(day == '2'){
        return '二'
    }
    else if(day == '3'){
        return '三'
    }
    else if(day == '4'){
        return '四'
    }
    else if(day == '5'){
        return '五'
    }
    else if(day == '6'){
        return '六'
    }
}

//連伺服器
var _data;
function linkdata(){
    var xhr = new XMLHttpRequest();
    xhr.open('get','https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json',true);
    xhr.send();
    xhr.onload = function(){
        _data = JSON.parse(xhr.responseText);
        renderList('臺中市');
        coordinate();
        //抓出所有資料的地區
        var areaList = [];
        for(var i = 0 ; _data.features.length > i ; i++){
            if(_data.features[i].properties.county !== ''){
                areaList.push(_data.features[i].properties.county);
            }
        }
        //找到重複的刪掉
        var area =[];
        areaList.forEach(function(value){
            if(area.indexOf(value) == -1){
                area.push(value);
            }
        })

        //按筆畫排序
        area_sort = area.sort(function compareFunction(item1, item2) {
            return item1.localeCompare(item2);
        });

        var area_str ='';
        for(var i=0; area.length > i; i++){
            if(area[i] == '臺中市'){
                area_str +='<option value="' + area[i] + '" selected>' + area[i] + '</option>';
            }else{
                area_str +='<option value="' + area[i] + '">' + area[i] + '</option>';
            }   
        };
        document.querySelector('#area').innerHTML = '<option value="">請選擇</option>' + area_str;

    }
}


//讀取json資料,寫入html
function renderList(city){
    var ary = _data.features;
    var str ='';
    for(var i=0; ary.length > i; i++){
        if(ary[i].properties.county == city){
            str +='<div class="item"><div class="title_c">'+ ary[i].properties.name +'</div><div class="info"><div class="area_c row">'+ ary[i].properties.address +'</div><div class="tel_c row">'+ ary[i].properties.phone +'</div><div class="open_c row">'+ ary[i].properties.note +'</div></div><div class="num_box"><div class="adult"><span>成人口罩</span><span>'+ ary[i].properties.mask_adult +'</span></div><div class="child"><span>兒童口罩</span><span>'+ ary[i].properties.mask_child +'</span></div></div></div>';
        }
    };
    document.querySelector('.list').innerHTML = str;
}

//篩選選中資料
document.querySelector('#area').addEventListener('change',function(e){
    renderList(e.target.value)
})


//關閉按鈕
document.querySelector('.close_btn').addEventListener('click',function(){
    document.querySelector('.fix_box').classList.toggle("open");
})


//判斷螢幕寬
function screen(){
  var width = document.body.clientWidth;
  if(width > 1023){
    document.querySelector('.fix_box').classList.add("open");
  }
  else{
    document.querySelector('.fix_box').classList.remove("open");
  }
}

//監聽螢幕縮放
window.onresize = function(){
    screen();
}



//載入地圖
var map = L.map('map');
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 16,
    minZoom: 8,
    zoom: 16,
}).addTo(map);
map.locate({setView: true, watch: true});

//地圖icon
var greenIcon = new L.Icon({
  iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
var redIcon = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

//json檔案
function coordinate(){
    var data = _data.features;
    for(let i =0;data.length>i;i++){
        var mask;
        if(data[i].properties.mask_adult == 0){
            mask = redIcon;
        }else{
            mask = greenIcon;
        } 
        markers.addLayer(L.marker([data[i].geometry.coordinates[1],data[i].geometry.coordinates[0]], {icon: greenIcon})
        .bindPopup('<div class="item"><div class="title_c">'+ data[i].properties.name +'</div><div class="info"><div class="area_c row">'+ data[i].properties.address +'</div><div class="tel_c row">'+ data[i].properties.phone +'</div><div class="open_c row">'+ data[i].properties.note +'</div></div><div class="num_box"><div class="adult"><span>成人口罩</span><span>'+ data[i].properties.mask_adult +'</span></div><div class="child"><span>兒童口罩</span><span>'+ data[i].properties.mask_child +'</span></div></div></div>'));
    }
    map.addLayer(markers);
}    
var markers = new L.MarkerClusterGroup().addTo(map);




