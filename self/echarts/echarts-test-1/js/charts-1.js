var item_y = [2011, 2012, 2013];
var item_x = [];
var items = [];

var length_y = item_y.length;
var tem = '24';

function functionName(){

    var serie = [];
    for(var i = 0; i < item_x.length; i++){
        var item = {
            name: item_x[i],
            type: 'line',
            data: items[i]
        }
        serie.push(item);
    };
    return serie;
}

function madeChart() {
    
    var myChart = echarts.init(document.getElementById('chart'));

    var option = {
        title: {
                text: 'ECharts 入门练习一'
        },
        legend: {
            data: item_y
        },
        tooltip: {},
        xAxis: {
            data: item_y
        },
        yAxis: {},
        series: functionName()
    };

    myChart.setOption(option);
}

function addX() {
    var liElement = document.createElement('li');
    liElement.setAttribute('class', 'start_li');
    var ulElement = document.createElement('ul');
    ulElement.setAttribute('class', 'final_ul');
    var temp = [];
    for(var i = 0; i <= item_y.length; i++) {
        var ulliElement = document.createElement('li');
        ulliElement.setAttribute('class', 'final_li');
        ulliElement.setAttribute('style', 'width:'+tem+"%");
        var user_input;
        if(i == 0) {
            user_input = prompt("输入一个X");
            var liText=document.createTextNode(user_input);
            ulliElement.appendChild(liText);
            item_x.push(user_input);
        } else {
            user_input = prompt("Y=" + item_y[i-1] + "：输入一个z( 0 <= z <= 1000 )");
            var liText=document.createTextNode(user_input);
            ulliElement.appendChild(liText);
            temp.push(user_input);
        }
        ulElement.appendChild(ulliElement);
    }
    items.push(temp);
    liElement.appendChild(ulElement);
    document.getElementById('start_ul').appendChild(liElement);
    madeChart();
}

function addY() {
    var user_input;
    user_input = prompt("输入一个Y");
    if(user_input == null) {
        return ;
    }
    item_y.push(user_input);
    length_y = item_y.length + 1;
    var items_ul = document.getElementsByClassName('final_ul');
    for(var i = 0; i < items_ul.length; i++) {
        var liElement = document.createElement('li');
        liElement.setAttribute('class', 'final_li');
        if(i == 0) {
            var liText=document.createTextNode(user_input);
            liElement.appendChild(liText);
        } else {
            user_input = prompt("X=" + item_y[i-1] + "：输入一个z( 0 <= z <= 1000 )");
            var liText=document.createTextNode(user_input);
            liElement.appendChild(liText);
            items[i-1].push(user_input);
        }
        items_ul[i].appendChild(liElement);
    }
    var liitems = document.getElementsByClassName('final_li');
    for(var i = 0; i < liitems.length; i++) {
        tem = 97 / length_y;
        liitems[i].style.width = tem + '%';
    }
    madeChart();
}

madeChart();
