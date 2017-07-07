//console.log(1);

//给牛奶盒子添加点击事件  $（" ./#/div "）
$(".drink").click(function() {
	//	console.log("点击盒子");
	drink(80,"drink");
	var mus = "raw/p_drink_milk.wav";
	$(".music").attr("src",mus);
})

$(".eat").click(function() {
	//	console.log("点击盒子");
	drink(39,"eat");
	var mus2 = "raw/p_eat.wav";
	$(".music").attr("src",mus2);
})

$(".scratch").click(function() {
	//	console.log("点击盒子");
	drink(55,"scratch");
	var mus3 = "raw/scratch_kratzen.wav";
	$(".music").attr("src",mus3);
})
$(".cymbal").click(function() {
	drink(12,"cymbal");
	var mus4 = "raw/cymbal.wav";
	$(".music").attr("src",mus4);
})
$(".fart").click(function() {
	drink(12,"fart");
	var mus5 = "raw/fart001_11025.wav";
	$(".music").attr("src",mus5);
})
$(".pie").click(function() {
	drink(12,"pie");
	var mus6 = "raw/splat_01.wav";
	$(".music").attr("src",mus6);
})
//图片播放
var index = 0;
var timer;

function drink(num,action) {
	clearInterval(timer);
	index = 0;
	timer = setInterval(function() {		
		if(index < num) {
			index++;
			var img = "Animations/"+action+"/"+action+"_" + stringNum(index) + ".jpg";
			$(".cat").attr("src", img);
		}
		else{
			clearInterval(timer);
			index = 0;
		}
	}, 50);

}

//写一个方法00-09
function stringNum(index) {
	if(index < 10) {
		return "0" + index;
	} else {
		return index;
	}
}
