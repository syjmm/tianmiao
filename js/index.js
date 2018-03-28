//banner部分
{
	const imgs=document.querySelectorAll(".imgbox img");
	const pagers=document.querySelectorAll(".banner_pargerbox li");
	const banner=document.querySelector("#banner");
	const l=imgs.length;
	pagers.forEach(function(ele,index){
		ele.onmouseenter=function(){
			for(let i=0;i<imgs.length;i++){
				imgs[i].classList.remove("active");
				pagers[i].classList.remove("active");
			}
			this.classList.add("active");
			imgs[index].classList.add("active");
			n=index;
		}
	})
	let n=0;
	let t=setInterval(move,3000)
		function move(){
			n++;
			// n=n%5;
			if(n===l){
				n=0;
			}
			if(n<0){
				n=l-1;
			}
			for(let i=0;i<l;i++){
					imgs[i].classList.remove("active");
					pagers[i].classList.remove("active");
				}
				imgs[n].classList.add("active");
				pagers[n].classList.add("active");

		}
	banner.onmouseenter=function(){
		clearInterval(t);
	}
	banner.onmouseleave=function(){
		t=setInterval(move,3000);
	}
	
}
//顶部显示
{
	let flxtop=document.querySelector(".sidebar");
	let letbar=document.querySelector(".floatbar");
	window.onscroll=function(){
	let st=document.documentElement.scrollTop;
	if(st>700){
		flxtop.style.display="block";
	}else{
		flxtop.style.display="none";
	}

	if(st>400){
		letbar.style.display="block";
	}else{
		letbar.style.display="none";
	}
	}
}
{
	function content(parent){
	const types=parent.querySelectorAll(".type");
	const goods=parent.querySelectorAll(".goodlist");
	types.forEach(function(ele,index){
		ele.onmouseenter=function(){
			for(let i=0;i<types.length;i++){
				types[i].classList.remove("active");
				goods[i].classList.remove("active");
			}
			this.classList.add("active");
			goods[index].classList.add("active");
		}
	})
	}
	const contentList=document.querySelectorAll(".chaoshi_rb_sitem");
	contentList.forEach(function(ele){
		content(ele);
	})
}
{
	let totop=document.querySelector(".rtotop");
	totop.onclick=function(){
		// document.documentElement.scrollTop=0;
		let st=document.documentElement.scrollTop;
		let t=setInterval(function(){
			st-=200;
			if(st<0){
				st=0;
				clearInterval(t);
			}
			document.documentElement.scrollTop=st;
		},25)
	}
}
// {
// 	$(".totop").click(function(){
		
// 		$("html,body").animate({scrollTop:0})

// 	})
// 	$(window).scroll(function(){
// 		let st=$(window).scrollTop();
// 		if(st>500){
// 			$(".topBar").show()
// 		}else{
// 			$(".topBar").hide()
// 		}
// 		if(st>800){
// 			$(".leftBar").show()
// 		}else{
// 			$(".leftBar").hide()
// 		}
// 	})
// 	$(".tips").click(function(){
// 		let index=$(this).index(".tips");
// 		let ot=$(".container").eq(index).offset().top-80;
// 		$("html,body").animate({scrollTop:ot},200)
// 	});
// 	$(window).scroll(function(){
// 		let st=$(window).scrollTop();
// 		$(".container").each(function(index,ele){
// 			if(st>$(this).offset().top-200){
// 				$(".tips").removeClass("active").eq(index).addClass("active")
// 			}
// 		})
// 	})
// }
//对应模板
{
	let tips=document.querySelectorAll(".tips");
	let containers=document.querySelectorAll(".container");
	tips.forEach(function(ele,index){
		ele.onclick=function(){
			let ot=containers[index].offsetTop-70;
			// console.log(ot);
			// document.documentElement.scrollTop=ot;
			let now=document.documentElement.scrollTop;
			let speed=(ot-now)/8;
			let time=0;
			let t=setInterval(function(){
				time+=25;
				now+=speed;
				if(time===200){
					clearInterval(t);
				}
				document.documentElement.scrollTop=now;
			},25);
		}
	})

	window.addEventListener("scroll",function(){
		let st=document.documentElement.scrollTop;
		
		for(let i=0;i<containers.length;i++){
			if(st>containers[i].offsetTop-70){
				for(let i=0;i<tips.length;i++){
					tips[i].classList.remove("active");
					
				}
				tips[i].classList.add("active");
			}
		}
	})
}
//banner侧导航
{
	let bns=document.querySelectorAll(".banner_nav li");
	let menus=document.querySelectorAll(".menu");
	let obj=menus[0];
	bns.forEach(function(ele,index){
		ele.onmouseenter=function(){
			obj.style.display="none";
			menus[index].style.display="block";
			obj=menus[index];
		}
		ele.onmouseleave=function(){
			menus[index].style.display="none";
		}
	})
}