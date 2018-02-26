//菜单切换
$('#tabbar').on('click', 'li', function () { 
    console.log($(this).index())
    $('#tabbar li').removeClass('active');
    $(this).addClass('active');
    var index = $(this).index();
    $('.tab').hide();
    $('.tab').eq($(this).index()).show()  
})
     

var arr1 = ['5%', '10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '95%', '终馏点'];
// console.log(arr1)
var tr1 = '';

for(var i = 0, length1 = arr1.length; i < length1; i++){
	tr1 = '<tr class="p'+i+'">'+
			'<td>'+arr1[i]+'</td>'+
			'<td><input type="number" class="oneIpt" /></td>'+
			'<td><span class="output"></span></td>'+
		'</tr>';
	// var table1 = document.getElementById('tb1');
	$('#tb1').append(tr1);
}
// table1.appendChild(tr1);




var arr2 = ['10%','20%','50%','90%','终馏点'];
// console.log(arr1)
var tr2 = '';
for(var i = 0, length1 = arr2.length; i < length1; i++){
	tr2 += '<tr class="k'+i+'">'+
			'<td>'+arr2[i]+'</td>'+
			'<td><input type="number" class="oneIpt" /></td>'+
			'<td><span class="output"></span></td>'+
		'</tr>';

}
$('#tb2').append(tr2);


//差值计算

// console.log($('#tb1'))
$('#tb1').on('input','input.oneIpt',function(){
	$('#tb1 span.output').css('backgroundColor','#fff');
	var inputItem = $(this).closest('tr').children('td:first').text();

	if(inputItem == '初馏点'){
		var startVal1 = $('#tb1 tr.p0 input.oneIpt').val();
		var startVal2 = $('#tb1 tr.p2 input.oneIpt').val();
		var sum1 = 0.35 * (Number(startVal1) - Number($(this).val()))/5 + 1;
		$('#tb1 tr.p span.output').text(sum1.toFixed(1)).css('backgroundColor','#ddd');
		var sum2 = 0.41 * (Number(startVal2) - Number($(this).val()))/20 + 1;
		$('#tb1 tr.p1 span.output').text(sum2.toFixed(1)).css('backgroundColor','#ddd');
	}

	if(inputItem == '5%'){
		// console.log(inputItem);
		var startVal = $('#tb1 tr.p input.oneIpt').val();
		// console.log(startVal)
		var sum = 0.35 * (Number($(this).val()) - Number(startVal))/5 + 1;
		$('#tb1 tr.p span.output').text(sum.toFixed(1)).css('backgroundColor','#ddd');
	}

	if(inputItem == '20%'){
		var startVal = $('#tb1 tr.p input.oneIpt').val();
		// console.log(startVal)
		var sum = 0.41 * (Number($(this).val()) - Number(startVal))/20 + 1;
		$('#tb1 tr.p1 span.output').text(sum.toFixed(1)).css('backgroundColor','#ddd');
	}

	if(inputItem == '10%' || inputItem == '30%'){
		if(inputItem == '10%'){
			var startVal = $('#tb1 tr.p3 input.oneIpt').val();
			// console.log(startVal)
			var sum = 0.41 * (Number(startVal) - Number($(this).val()))/20 + 1;
			$('#tb1 tr.p2 span.output').text(sum.toFixed(1)).css('backgroundColor','#ddd');
		}

		if(inputItem == '30%'){
			var startVal = $('#tb1 tr.p1 input.oneIpt').val();
			// console.log(startVal)
			var sum = 0.41 * (Number($(this).val()) - Number(startVal))/20 + 1;
			$('#tb1 tr.p2 span.output').text(sum.toFixed(1)).css('backgroundColor','#ddd');
		}
	}

	if(inputItem == '40%' || inputItem == '60%'){
		if(inputItem == '40%'){
			var startVal = $('#tb1 tr.p6 input.oneIpt').val();
			// console.log(startVal)
			var sum = 0.41 * (Number(startVal) - Number($(this).val()))/20 + 1;
			$('#tb1 tr.p5 span.output').text(sum.toFixed(1)).css('backgroundColor','#ddd');
		}

		if(inputItem == '60%'){
			var startVal = $('#tb1 tr.p4 input.oneIpt').val();
			// console.log(startVal)
			var sum = 0.41 * (Number($(this).val()) - Number(startVal))/20 + 1;
			$('tr.p5 span.output').text(sum.toFixed(1)).css('backgroundColor','#ddd');
		}
	}

	if(inputItem == '80%' || inputItem == '90%'){
		if(inputItem == '80%'){
			var startVal = $('#tb1 tr.p9 input.oneIpt').val();
			// console.log(startVal)
			var sum = 0.41 * (Number(startVal) - Number($(this).val()))/10 + 1;
			$('#tb1 tr.p9 span.output').text(sum.toFixed(1)).css('backgroundColor','#ddd');
		}

		if(inputItem == '90%'){
			var startVal = $('#tb1 tr.p8 input.oneIpt').val();
			// console.log(startVal)
			var sum = 0.41 * (Number($(this).val()) - Number(startVal))/10 + 1;
			$('#tb1 tr.p9 span.output').text(sum.toFixed(1)).css('backgroundColor','#ddd');
		}
	}


	if(inputItem == '95%' || inputItem == '终馏点'){
		if(inputItem == '95%'){
			var startVal = $('#tb1 tr.p11 input.oneIpt').val();
			// console.log(startVal)
			var num = $('#tb1 .recovery').val()
			var sum = 0.36 * ((Number(startVal) - Number($(this).val()))/(num-95)) + 0.7;
			$('#tb1 tr.p11 span.output').text(sum.toFixed(1)).css('backgroundColor','#ddd');
		}

		if(inputItem == '终馏点'){
			var startVal = $('#tb1 tr.p10 input.oneIpt').val();
			var num = $('#tb1 .recovery').val()
			// console.log(startVal)
			var sum = 0.36 * ((Number($(this).val()) - Number(startVal))/(num-95)) + 0.7;
			$('#tb1 tr.p11 span.output').text(sum.toFixed(1)).css('backgroundColor','#ddd');
		}
	}



})

$('#tb1').on('input','.recovery',function(){
	console.log('回收');
	var val1 = $('#tb1 tr.p10 input.oneIpt').val();
	var val2 = $('#tb1 tr.p11 input.oneIpt').val();
	var sum = 0.36 * ((val2 - val1)/($(this).val()-95)) + 0.7;
	$('#tb1 tr.p11 span.output').text(sum.toFixed(1)).css('backgroundColor','#ddd');
})


//大气压计算

$('#tb2').on('input','input.oneIpt',function(){
	$('#tb2 span.output').css('backgroundColor','#fff');
	var inputItem = $(this).closest('tr').children('td:first').text();
	// console.log(inputItem);
	var num = $('#tb2 .recovery').val()
	// console.log(num)
	var sum = 0.0009*(101.3-Number(num))*(273+Number($(this).val()));
	// console.log(sum);
	// console.log($(this).closest('tr').children('td:eq(2)').children('span').html(sum))
	$(this).closest('tr').children('td:eq(2)').children('span.output').text(sum.toFixed(1)).css('backgroundColor','#ddd');
})

$('#tb2 .recovery').on('input',function(){
	var val = $(this).val();
	$('#tb2 input.oneIpt').each(function(ele,index){
		// console.log($(this).val())
		// console.log($(this).closest('tr').children('td:eq(1)').children('input.oneIpt'));
		var val1 = $(this).closest('tr').children('td:eq(1)').children('input.oneIpt').val();
		var sum = 0.0009*(101.3-Number(val))*(273+Number(val1));
		$(this).closest('tr').children('td:eq(2)').children('span.output').text(sum.toFixed(1)).css('backgroundColor','#ddd');
	})
})




// Lc = 0.5+(L-0.5)/(1+(101.3-Pk)/8)
//Rc = Rmax+L-Lc

 //矢量修正
$('#loss').on('input','input.p_l',function(){
	$('#loss span.output').css('backgroundColor','#fff');
    var num = $('#loss input.p_k').val() !=''?$('#loss input.p_k').val():0;
    //console.log(num)
	var sum = 0.5+($(this).val()-0.5)/(1+(101.3-num)/8);
	// console.log(sum)
	// console.log($('#loss output.one').text(sum))
	$('#loss .output.one').text(sum.toFixed(1)).css('backgroundColor','#ddd');

	var maxVal = $('#loss input.p_m').val() !=''?$('#loss input.p_m').val():0;
	// console.log((Number(maxVal) + ($(this).val() - sum)).toFixed(1))
	$('#loss .output.two').text((maxVal + ($(this).val() - sum)).toFixed(1)).css('backgroundColor','#ddd');
})
$('#loss').on('input','input.p_m',function(){
	$('#loss span.output').css('backgroundColor','#fff');
    var starVal = $('#loss .p_l').val() != '' ? $('#loss .p_l').val() : 0;
    var num = $('#loss input.p_k').val() != '' ? $('#loss input.p_k').val() : 0;
    var lcVal = 0.5+(starVal-0.5)/(1+(101.3-num)/8);
	//var lcVal = $('#loss .output.one').text()!=''?$('#loss .output.one').text():0;
	// console.log(starVal)
	 //console.log(lcVal)
    $('#loss .output.one').text(lcVal.toFixed(1)).css('backgroundColor','#ddd');
	var sum = Number($(this).val()) + (starVal - Number(lcVal))
	$('#loss .output.two').text(sum.toFixed(1)).css('backgroundColor','#ddd');
})
$('#loss').on('input', 'input.p_k', function () {   
	$('#loss span.output').css('backgroundColor','#fff');
	var num = $('#loss input.p_l').val()!=''?$('#loss input.p_l').val():0;
	var sum = 0.5+(num-0.5)/(1+(101.3-$(this).val())/8); 
     $('#loss .output.one').text(sum.toFixed(1)).css('backgroundColor', '#ddd');
     var maxVal = $('#loss input.p_m').val() != '' ? $('#loss input.p_m').val() : 0;
     //console.log(maxVal)
     //console.log(num)
     //console.log(sum)
	$('#loss .output.two').text((Number(maxVal) + Number(num) - sum).toFixed(1)).css('backgroundColor','#ddd');
})
  

//温度计修正
var Thermometer = [
    {
        name: '冰点',
        list: [
            {
                factorynum:'8',
                correction:'-0.03',
                type:'棒式',
                unifiednum:'TT01D023',
                term: '2017.08.14',
                input:true
            },{
                factorynum:'43',
                correction:'0.10',
                type:'棒式',
                unifiednum:'TT01D023',
                term: '2018.01.18',
                input:true
            },
        ]
    },{
        name: '馏程',
        list: [
            {
                factorynum:'505',
                correction:'-0.80',
                type:'棒式',
                unifiednum:'TT01D016',
                term: '/',
                input:true
            },{
                factorynum:'513',
                correction:'-0.33',
                type:'棒式',
                unifiednum:'TT01D016',
                term: '/',
                input:true
            },
        ]
    },{
        name: '密度',
        list: [
            {
                factorynum:'41',
                correction:'-0.03',
                type:'棒式',
                unifiednum:'TT01DA001',
                term: '2017.12.15',
                input:true
            },{
                factorynum:'41',
                correction:'-0.03',
                type:'棒式',
                unifiednum:'TT01DA001',
                term: '2017.12.15',
                input:true
            },
        ]
    }
]

//console.log(Thermometer) 
var tr3 = '';
Thermometer.map(function (item, index) {  
    tr3 += '<tr class="k'+index+'">'+
			'<td>'+item.name+'</td>'+
            '<td class="factorynum"></td>'+
            '<td class="input"></td>' +
            '<td class="correction"></td>'+
            '<td class="type"></td>'+
            '<td class="unifiednum"></td>'+
            '<td class="term"></td>'+
        '</tr>';
    return tr3;
})
//console.log(tr3)  
$('#tb3').append(tr3);
tagList($('.factorynum'), 'factorynum');
tagList($('.correction'), 'correction');
tagList($('.type'), 'type');
tagList($('.unifiednum'), 'unifiednum');
tagList($('.term'), 'term');
tagList($('.input'), 'input');
function tagList(c, key) {
        c.each(function (index, ele) {  
           Thermometer[index].list.map(function (item, index) {
               if (key === 'correction') {
                   var div = $('<div><span class="output" data-index='+index+'></span></div>');
               } else if (key == 'input') {
                   var div = $('<div><input type="number" class="oneIpt" data-index=' + index +' /></div>')
               }else {
                   var div = $('<div>' + item[key] + '</div>');  
               }   
                $(ele).append(div)
            })  
       })  
}     
//温度计输入计算
$('#tb3').on('input', 'input.oneIpt', function () {
    console.log('温度计');
    console.log($(this).val())
    var value = '';
    var index = $(this).attr('data-index');
    if ($(this).closest('tr').find('td:first').text() == '冰点') {
        value = thermometer(index, $(this).val());
    } else if ($(this).closest('tr').find('td:first').text() == '馏程') {
        value = distillationRange(index, $(this).val());
    } else if ($(this).closest('tr').find('td:first').text() == '密度') {
        value = density(index, $(this).val());
    }     
    console.log(value)  
    if ($(this).val() != '' && $(this).val() != 'undefined') {
        console.log(PointFloat(value, 2)) 
        console.log(index)
        console.log($(this).closest('td').next())
        $(this).closest('td').next().find('.output[data-index=' + index + ']').text(PointFloat(value, 2).toFixed(2)).css('backgroundColor', '#ddd');  
    } else {  
        $(this).closest('td').next().find('.output[data-index=' + index + ']').text('错误').css('backgroundColor', '#ddd');
       
    } 
       
})  
//冰点温度计修正计算
function thermometer(index,value) {
    console.log(value)
    var result = '';
    if (value == '' || value== 'undefined') {  
        result = ''; 
    } else { 
        if (index == 0) {
            if (Number(value) <= -60) {
                result = -1;
            } else if (Number(value) > -60 && Number(value) <= -40) {
                result = (0.75 / 20) * (Number(value) + 60) - 1;
            } else {
                result = (0.15 / 40) * (Number(value) + 40) - 0.25;
            }
        } else if (index == 1) {
            if ( Number(value) <= -60) {
                result = -1;
            } else if ( Number(value) > -60 &&  Number(value) <= -40) {
                result = (0.5 / 20) * ( Number(value) + 60) - 1;
            } else {  
                result = (0.25 / 40) * ( Number(value) + 40) - 0.5;
            }
        }
        
    }
    console.log(result)
    return result;
}
//馏程温度计修正计算
function distillationRange(index,value) {
    console.log(value)
    var result = '';
    if (value == '' || value== 'undefined') {  
        result = ''; 
    } else { 
        if (index == 0) {
            if (Number(value) <= 0) {
                result = -0.7;
            } else if (Number(value) > 0 && Number(value) <= 100) {
                result = (-0.1 / 100) * (Number(value) - 0) - 0.7;
            } else if (Number(value) > 100 && Number(value) <= 200) {
                result = -0.8;
            } else {
                result = (-0.2 / 100) * (Number(value) - 200) - 0.8;
            }
        } else if (index == 1) {
            if (Number(value) <= 0) {
                result = -0.2;
            } else if (Number(value) > 0 && Number(value) <= 100) {
                result = (-0.1 / 100) * (Number(value) - 0) - 0.2;
            } else if (Number(value) > 100 && Number(value) <= 200) {
                result = (-0.1 / 100) * (Number(value) - 100) - 0.3;
            } else {
                result = (-0.2 / 100) * (Number(value) - 200) - 0.4;
            }
        }
        
    }
    console.log(result)
    return result;
}
//密度温度计修正计算
function density(index, value){
     console.log(value)
    var result = '';
    if (value == '' || value == 'undefined') {
        result = '';
    } else {
        if (index == 0) {
            if (Number(value) == 0) {
                result = 0;
            } else if (Number(value) > 0 && Number(value) < -20) {
                result = -0.06 / 20 * Number(value);
            } else if (Number(value) >= -20 && Number(value) < 20) {
                result = (-0.06 / 40) * (Number(value) + 20) + 0.06;
            } else if (Number(value) >= 20 && Number(value) < 40) {
                result = (-0.1 / 20) * (Number(value) - 20);
            }
        } else if (index == 1) {
            if (Number(value) == 0) {
                result = 0;
            } else if (Number(value) > 0 && Number(value) < -20) {
                result = -0.06 / 20 * Number(value);
            } else if (Number(value) >= -20 && Number(value) < 20) {
                result = (-0.06 / 40) * (Number(value) + 20) + 0.06;
            } else if (Number(value) >= 20 && Number(value) < 40) {
                result = (-0.1 / 20) * (Number(value) - 20);
            }
        }
    }
    console.log(result)
    return result;
}  

//密度计修正 
var Densimeter = [
    {        
        factorynum: '94(750～800)',
        input: true,
        correction: '',
        type: 'SY-05',
        unifiednum: 'TT01D023',
        term:'2017.08.14'
        
    },{   
        factorynum: '316(800～850)',
        input: true,
        correction: '',
        type: 'SY-05',
        unifiednum: 'TT01D023',
        term:'2017.08.14'
       
    }
]

//console.log(Densimeter)
var tr4 = '';
Densimeter.map(function (item, index) {  
    tr4 += '<tr class="k'+index+'">'+
			'<td>'+item.factorynum+'</td>'+
            '<td><input type="number" class="oneIpt" /></td>'+
            '<td><span class="output"></span></td>' + 
            '<td>'+item.type+'</td>'+     
            '<td>'+item.unifiednum+'</td>'+     
            '<td>'+item.term+'</td>'+     
        '</tr>';
    return tr4;
})
//console.log(tr4)  
$('#tb4').append(tr4);

//密度计输入计算
$('#tb4').on('input', 'input.oneIpt', function () {
    console.log('密度计');
    console.log($(this).val())
    var value = '';
    var num = $(this).closest('tr').find('td:first').text();
    console.log(num)
    if (num == '94(750～800)') {
        value = densimeterOne($(this).val());
    } else if (num == '316(800～850)') {
        value = densimeterTwo($(this).val());
    } 
    console.log(value)  
    if ($(this).val() != '' && $(this).val() != 'undefined') {
        $(this).closest('td').next('td').find('span.output').text(PointFloat(value, 2).toFixed(2)) 
    } else {  
        $(this).closest('td').next('td').find('span.output').text('错误')
    } 
       
}) 
//94(750～800)出厂编号计算方法
function densimeterOne(value) {
    var result = '';
    if (value == '' || value == 'undefined') {
        result = '';
    } else {
        if (Number(value) <= 750) {
            result = -0.3
        } else if (Number(value) > 750 && Number(value) <= 780) {
            result = (0.35 / 30) * (Number(value) - 750) - 0.3;
        } else if (Number(value) > 780 && Number(value) <= 800) {
            result = 0.05;
        }
    }
    return result;
}
//316(800～850)出厂编号计算方法
function densimeterTwo(value) {
    var result = '';
    if (value == '' || value == 'undefined') {
        result = '';
    } else {
        if (Number(value) <= 830) {
            result = -0.05;
        } else if (Number(value) > 830 && Number(value) <= 850) {
            result = (0.05 / 20) * (Number(value) - 830) + 0.05;
        } 
    }
    return result;
}



//电导率输入计算
$('#tb5').on('input', 'input.oneIpt', function () {
    console.log('电导率');
    console.log($(this).val())
    var value = '';  
    value = conductivity($(this).val());
    console.log(value)  
    if ($(this).val() != '' && $(this).val() != 'undefined') {
        $(this).closest('td').next('td').find('span.output').text(Math.round(value)) 
    } else {  
        $(this).closest('td').next('td').find('span.output').text('错误')
    } 
       
})
function conductivity(value) {
    var result = '';
    if (value == '' || value == 'undefined') {
        result = '';
    } else {
        if (Number(value) >= 50 && Number(value) <= 70) {
            result = (1 / 20) * (Number(value) - 50) + 3;
        } else if (Number(value) > 70 && Number(value) <= 100) {
            result = (1 / 30) * (Number(value) - 70) + 4;
        } else if (Number(value) > 100 && Number(value) <= 200){
            result = (5 / 100) * (Number(value) - 100) + 5;
        }else if (Number(value) > 200 && Number(value) <= 300){
            result = (4 / 100) * (Number(value) - 200) + 10;
        }else if (Number(value) > 300 && Number(value) <= 500){
            result = (7 / 200) * (Number(value) - 300) + 14;
        } 
    }
    return result;
}

//清除
$('.box').on('click','button',function(){
	$(this).closest('.card').find('input').val('');
	$(this).closest('.card').find('.output').text('');
})


// 保留小数位数 四舍六入五成双计算方法
function PointFloat(src, pos) { 
    return Math.round(src * Math.pow(10, pos)) / Math.pow(10, pos);
}

  






