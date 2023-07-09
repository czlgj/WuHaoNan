// 第一层
		fetch('https://api-juejin.suemor.com/api/v1/tab')
		.then(res => res.json())
		.then(res =>{
			// console.info(res);
			// 顶部
			document.getElementById('T1').innerText = res.data[0].title;
			document.getElementById('T2').innerText = res.data[1].title;
			document.getElementById('T3').innerText = res.data[2].title;
			document.getElementById('T4').innerText = res.data[3].title;
			document.getElementById('T5').innerText = res.data[4].title;
			document.getElementById('T6').innerText = res.data[5].title;
			document.getElementById('T7').innerText = res.data[6].title;
			document.getElementById('T8').innerText = res.data[7].title;
			document.getElementById('T9').innerText = res.data[8].title;
			
			
			
			// 跳转
			// document.getElementById('AT1')
			// document.getElementById('AT2')
			// document.getElementById('AT3')
			// document.getElementById('AT4')
			// document.getElementById('AT5')
			// document.getElementById('AT6')
			
			
			// var Shop = document.getElementById('AT7');
			// var id = Shop.mui.getAttribute('href');
			// id =  res.data[6].slug;
			// document.getElementById('AT8')
			// 链接
			document.getElementById('AT7').href = res.data[6].slug;
			document.getElementById('AT8').href = res.data[7].slug;
			var a = document.getElementById('AT9');
			a.href = res.data[8].slug;
			
			
		})
fetch('https://api-juejin.suemor.com/api/v1/aggregate/home/3')
.then(res => res.json())
.then(res =>{
	// 示例
	// console.info(res);
	// 右侧
	document.getElementById('TT1').innerText = res.category[0].name;
	document.getElementById('TT2').innerText = res.category[1].name;
	document.getElementById('TT3').innerText = res.category[2].name;
	document.getElementById('TT4').innerText = res.category[3].name;
	document.getElementById('TT5').innerText = res.category[4].name;
	document.getElementById('TT6').innerText = res.category[5].name;
	document.getElementById('TT7').innerText = res.category[6].name;
	document.getElementById('TT8').innerText = res.category[7].name;
	document.getElementById('TT9').innerText = res.category[8].name;
	
	
	// 图片
	var PP = document.getElementById('PP');
	var img1 = document.getElementById('IMG');
	img1.src = res.ad.phoUrl;
	var img2 = document.createElement('img');
	
	 img2.src = res.ad.phoUrl;
	PP.append(IMG);
	
	// 作者榜单
	document.getElementById('B1').innerText = res.authorRank[2].username;
	document.getElementById('B2').innerText = res.authorRank[1].username;
	document.getElementById('B3').innerText = res.authorRank[0].username;
	
	document.getElementById('BB1').innerText = res.authorRank[2].introduce;
	document.getElementById('BB2').innerText = res.authorRank[1].introduce;
	document.getElementById('BB3').innerText = res.authorRank[0].introduce;
	
	// 头像
	var t1 = document.getElementById('MM1');
	var t2 = document.getElementById('MM2');
	var t3 = document.getElementById('MM3');
	t1.src = res.authorRank[2].avatar;
	t2.src = res.authorRank[1].avatar;
	t3.src = res.authorRank[0].avatar;
})


// 文章主体
fetch('https://api-juejin.suemor.com/api/v1/post?pageCurrent=1&pageSize=15')
.then(res => res.json())
.then(res =>{
	console.info(res);
	// 文字
	document.getElementById('title1').innerText = res.postList[0].title;
	document.getElementById('title2').innerText = res.postList[1].title;
	document.getElementById('title3').innerText = res.postList[2].title;
	document.getElementById('title4').innerText = res.postList[3].title;
	document.getElementById('title5').innerText = res.postList[4].title;
	document.getElementById('title6').innerText = res.postList[5].title;
	document.getElementById('title7').innerText = res.postList[6].title;
	document.getElementById('title8').innerText = res.postList[7].title;
	document.getElementById('title9').innerText = res.postList[8].title;
	document.getElementById('title10').innerText = res.postList[9].title;
	document.getElementById('title11').innerText = res.postList[10].title;
	document.getElementById('title12').innerText = res.postList[11].title;
	document.getElementById('title13').innerText = res.postList[12].title;
	document.getElementById('title14').innerText = res.postList[13].title;
	document.getElementById('title15').innerText = res.postList[14].title;
	
	
	
	// 信息
	// document.getElementById('user1').innerText = res.postList[0].user.username;
	
	
	
	
	
	// 信息 -》简介
	document.getElementById('JJ1').innerText = res.postList[0].tags[0]+'~'+res.postList[0].tags[1];
	document.getElementById('JJ2').innerText = res.postList[1].tags[0]
	document.getElementById('JJ3').innerText = res.postList[2].tags[0]
	document.getElementById('JJ4').innerText = res.postList[3].tags[0]
	document.getElementById('JJ5').innerText = res.postList[4].tags[0]
	document.getElementById('JJ6').innerText = res.postList[5].tags[0]
	document.getElementById('JJ7').innerText = res.postList[6].tags[0]
	document.getElementById('JJ8').innerText = res.postList[7].tags[0]
	document.getElementById('JJ9').innerText = res.postList[8].tags[0]
	document.getElementById('JJ10').innerText = res.postList[9].tags[0]
	document.getElementById('JJ11').innerText = res.postList[10].tags[0]
	document.getElementById('JJ12').innerText = res.postList[11].tags[0]
	document.getElementById('JJ13').innerText = res.postList[12].tags[0]
	document.getElementById('JJ14').innerText = res.postList[13].tags[0]
	document.getElementById('JJ15').innerText = res.postList[14].tags[0]

	
	// 底部信息
	document.getElementById('top1').innerText = res.postList[0].content;
	document.getElementById('top2').innerText = res.postList[1].content;
	document.getElementById('top3').innerText = res.postList[2].content;
	document.getElementById('top4').innerText = res.postList[3].content;
	document.getElementById('top5').innerText = res.postList[4].content;
	document.getElementById('top6').innerText = res.postList[5].content;
	document.getElementById('top7').innerText = res.postList[6].content;
	document.getElementById('top8').innerText = res.postList[7].content;
	document.getElementById('top9').innerText = res.postList[8].content;
	document.getElementById('top10').innerText = res.postList[9].content;
	document.getElementById('top11').innerText = res.postList[10].content;
	document.getElementById('top12').innerText = res.postList[11].content;
	document.getElementById('top13').innerText = res.postList[12].content;
	document.getElementById('top14').innerText = res.postList[13].content;
	document.getElementById('top15').innerText = res.postList[14].content;
	
	
	
	// 图片
	document.getElementById('ti1').src = res.postList[0].cover;
	document.getElementById('ti2').src = res.postList[1].cover;
	document.getElementById('ti4').src = res.postList[3].cover;
	document.getElementById('ti7').src = res.postList[6].cover;
})