$(function(){
	// banner图下滚动
	var lunbo=$('.kuang5')[0];
	var imgBox=$('.ku5')[0];
	var left1=$('.gundz')[0];
	var right1=$('.gundy')[0];
	var img=$('.gongdong5')[0];
	var width=parseInt(getStyle(img,"width"));
	console.log()
	var left=$('#left');
	var right=$('#right');
	var t=setInterval(move,2000);
	function move(){
			animate(imgBox,{left:-width},600,function(){
			var first=getFirst(imgBox);
			imgBox.appendChild(first);
			imgBox.style.left=0;
			})
			console.log(t)
	}
	lunbo.onmouseover=function(){
		clearInterval(t);
	}
	lunbo.onmouseout=function(){
		t=setInterval(move,2000);
	}
	
	right1.onclick=function(){

		move();
	}
	left1.onclick=function(){
		var first=getFirst(imgBox);
		var last=getLast(imgBox);
		insertBefore(last,first);
		imgBox.style.left=-width+'px'
		animate(imgBox,{left:0},600)
	}


	// banner图
	var box=$('.center4')[0];
	var banner_img=$('.bunner');
	var lit=$('.yigedian');
	var left=$('.leftc4')[0];
	var right=$('.rightc4')[0];
	var width1=740;
	var next=0;
	var n=0;
	var flag=true;

	var t1=setInterval(move1,2000);
	function move1(){
		if(!flag){
			return;
		}
		flag=false
		next=n+1

		if(next>=banner_img.length){
			next=0;
		}
		banner_img[next].style.left=width1+'px';
		animate(banner_img[n],{left:-740},600);
		animate(banner_img[next],{left:0},600,function(){
			flag=true
		});
		lit[n].style.background='#D2D1CE'
		lit[next].style.background='#E72487'
		n=next;
	}
	box.onmouseover=function(){
		clearInterval(t1)
	}
	box.onmouseout=function(){
		t1=setInterval(move1,2000)
	}
	right.onclick=function(){
		move1();
	}
	left.onclick=function(){
		if(!flag){
			return;
		}
		flag=true;
		next=n-1;
		if(next<0){
			next=banner_img.length-1;
		}
		banner_img[next].style.left=-width1+'px';
		animate(banner_img[n],{left:740},600);
		animate(banner_img[next],{left:0},600,function(){
			flag=true;
		});
		lit[n].style.background='#D2D1CE'
		lit[next].style.background='#E72487'
		n=next;
	}

	for(var i=0;i<lit.length;i++){
		lit[i].index=i;
		lit[i].onclick=function(){
			if(this.index>n){
				if(!flag){
					return;
				}
				flag=true;
				banner_img[this.index].style.left=width+'px';
				animate(banner_img[n],{left:-740},600);
				animate(banner_img[this.index],{left:0},600,function(){
					flag=true
				});
				lit[n].style.background='#ccc'
				lit[this.index].style.background='#E72487'
				n=this.index;
			}else if(this.index<n){
				if(!flag){
					return;
				}
				flag=true;
				banner_img[this.index].style.left=-width+'px';
				animate(banner_img[n],{left:740},600);
				animate(banner_img[this.index],{left:0},600,function(){
					flag=true;
				});
				lit[n].style.background='#ccc'
				lit[this.index].style.background='#E72487'
				n=this.index;
			}
		}
	}
	// 登录选项卡
	var dlx1=$('.dlx1')[0];
	var denglu1=$('.denglu1')[0];
	var zhe1=$('.zhe')[0]
	hover(denglu1,function(){
		this.style.background='#fff'
		this.style.color='#25b2fe'
		dlx1.style.display='block'
		zhe1.style.display='block'
	},function(){
		dlx1.style.display='none'
		this.style.background='#F6F6F6';
		this.style.color='#888888'
		zhe1.style.display='none'
	})
	// 手机营业厅选项卡
	var yyt1=$('.yyt1')[0];
	var yyt_1=$('.yyt-1')[0];
	var zhe2=$('.zhe')[1]
	hover(yyt1,function(){
		this.style.background='#fff'
		this.style.color='#25b2fe'
		yyt_1.style.display='block'
		zhe2.style.display='block'
	},function(){
		yyt_1.style.display='none'
		this.style.background='#F6F6F6';
		this.style.color='#888888'
		zhe2.style.display='none'
	})
	// 首页等五个的选项卡
	var box_in=$('.box-ev');
	for(var i=0;i<box_in.length;i++){
		if(i==0){
			continue;
		}
		hover(box_in[i],function(){
			this.style.background='#F3F3F3';
			var box_x=$('.box-xiala',this)[0];
			box_x.style.display='block'
		},function(){
			var box_x=$('.box-xiala',this)[0];
			var that=this;
			box_x.style.display='none';
			that.style.background='#e4e4e4';
		})
	}
	//city点击效果
	var city=$('.city')[0];
	var city_jt=$('.city-jt')[0];
	var body=$('body')[0]
	body.onclick=function(e){
		var ev=e||window.event;
		var obj=ev.target||ev.srcElement;
//		console.log(obj.className);
		if(obj.className=="city-ty"||obj.className=="city-jt"||obj.className=="city-c"||obj.className=="city-l"){
			city_jt.style.display='block';
			return;
		}
		city_jt.style.display='none';
		
	}
	
	//公告效果
	var ggg=$('.gg-g')[0];
	var ggf=$(".gg-f");
	var leftg=$('.fanzhuan2')[0];
	var rightg=$('.fanzhuan1')[0];
	var ng=0;
	ggf[0].style.display='block';
	leftg.onclick=function(){
		ng--
		if(ng<0){
			ng=ggf.length-1
		}
		for(var i=0;i<ggf.length;i++){
			 ggf[i].style.display='none';
		}
		 ggf[ng].style.display='block';
	}
	rightg.onclick=function(){
		ng++
		
		if(ng>ggf.length-1){
			ng=0
		}

		for(var i=0;i<ggf.length;i++){
			 ggf[i].style.display='none';
		}
		 ggf[ng].style.display='block';
	}
	
	
	
	
	
})

	