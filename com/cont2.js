var React = require('react');

var Cont2 = React.createClass({
	render:function(){
		var sty = {
			sty1:{
				width:"100%",
				height:"350px",
				background:"#fff",
//				margin:"0 2%",
				padding:"0",
				listStyle:"none"
			},
			sty2:{
				float:"left",
				width:"25%",
				height:"175px"
			},
			sty3:{
				display:"block",
				width:"100%",height:"100px",
//				marginLeft:"70px"
			},
			sty4:{
				display:"block",
				width:"100%",height:"75px",
				lineHeight:"75px",textAlign:"center",
				color:"#666666"
			},
			sty5:{
				display:"block",
				width:"96%",
				padding:"0 2%"
			}
		}
		return(
			<div id="cont2">
				<ul style={sty.sty1}>
					<li style={sty.sty2}>
						<em><img style={sty.sty3} src="images/2-1.jpg"/></em>
						<span style={sty.sty4}>美食</span>
					</li>
					<li style={sty.sty2}>
						<em><img style={sty.sty3} src="images/2-2.jpg"/></em>
						<span style={sty.sty4}>甜品饮品</span>
					</li>
					<li style={sty.sty2}>
						<em><img style={sty.sty3} src="images/2-3.jpg"/></em>
						<span style={sty.sty4}>商超便利</span>
					</li>
					<li style={sty.sty2}>
						<em><img style={sty.sty3} src="images/2-4.jpg"/></em>
						<span style={sty.sty4}>果蔬生鲜</span>
					</li>
					<li style={sty.sty2}>
						<em><img style={sty.sty3} src="images/2-5.jpg"/></em>
						<span style={sty.sty4}>新店特惠</span>
					</li>
					<li style={sty.sty2}>
						<em><img style={sty.sty3} src="images/2-6.jpg"/></em>
						<span style={sty.sty4}>大牌必吃</span>
					</li>
					<li style={sty.sty2}>
						<em><img style={sty.sty3} src="images/2-7.jpg"/></em>
						<span style={sty.sty4}>帮买帮送</span>
					</li>
					<li style={sty.sty2}>
						<em><img style={sty.sty3} src="images/2-8.jpg"/></em>
						<span style={sty.sty4}>晚餐</span>
					</li>
				</ul>
				<img style={sty.sty5} src="images/22.jpg"/>
			</div>
		)
	}
})

module.exports=Cont2;