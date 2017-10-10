var React = require('react');

var One = React.createClass({
	render:function(){
		return(
			<div style={this.sty.tpz}>
				<div style={this.sty.tp1}>
					<div style={this.sty.fl}>
						<span style={this.sty.sty1}>&#xe64b;</span><span>河南教育学院</span>
					</div>
					<div style={this.sty.fr}>
						<span>16°</span><span style={this.sty.sty1}>&#xe6bf;</span>
					</div>
				</div>
				
				<input type="text" style={this.sty.tp2} placeholder="输入商家.商品名称" />
				
				<ul style={this.sty.tp3}>
					<li style={this.sty.tp4}><a href="#" style={this.sty.tp5}>汉堡</a></li>
					<li style={this.sty.tp4}><a href="#" style={this.sty.tp5}>华莱士</a></li>
					<li style={this.sty.tp4}><a href="#" style={this.sty.tp5}>蛋挞</a></li>
					<li style={this.sty.tp4}><a href="#" style={this.sty.tp5}>烤鸭</a></li>
					<li style={this.sty.tp4}><a href="#" style={this.sty.tp5}>热干面</a></li>
					<li style={this.sty.tp4}><a href="#" style={this.sty.tp5}>寿司</a></li>
					<li style={this.sty.tp4}><a href="#" style={this.sty.tp5}>黄焖鸡</a></li>
				</ul>
			</div>
		)
	}
});

One.prototype.sty = {
	sty1:{
		fontFamily:'iconfont'
	},
	fl:{
		float:'left',
		fontSize:'22px',
		color:'#fff'
	},
	fr:{
		float:'right',
		fontSize:'22px',
		color:'#fff'
	},
	tp1:{
		height:'30px',
		lineHeight:'30px',
		padding:'5% 5% 0'
	},
	tp2:{
		margin:'2% 5%',
		width:'88%',
		display:'block',
		height:'34px',
		lineHeight:'34px',
		textAlign:'center'
	},
	tp3:{
		padding:'0 5%',
		height:'34px',
		lineHeight:'34px'
	},
	tp4:{
		float:'left',
		listStyle:'none',
		color:'#fff',
		marginLeft:'1%',
		fontSize:'15px'
	},
	tp5:{
		textDecoration:'none',
		color:'#fff'
	},
	tpz:{
		background:'#02a3ff'
	}
}

module.exports=One;