var React = require('react');

var Foot = React.createClass({
	render:function(){
		return(
			<footer>
				<ul style={this.sty.t1}>
					<li style={this.sty.t2}>
						<em style={this.sty.sty1}>&#xe618;</em>
						<span>外卖</span>
					</li>
					<li style={this.sty.t2}>
						<em style={this.sty.sty1}>&#xe603;</em>
						<span>发现</span>
					</li>
					<li style={this.sty.t2}>
						<em style={this.sty.sty1}>&#xe604;</em>
						<span>订单</span>
					</li>
					<li style={this.sty.t2}>
						<em style={this.sty.sty1}>&#xe605;</em>
						<span>我 的</span>
					</li>
				</ul>
			</footer>
		)
	}
})
Foot.prototype.sty={
	sty1:{
		fontFamily:'iconfont',
		fontStyle:'normal',
		fontSize:'20px'
	},
	t1:{
		display:'flex',
		
	},
	t2:{
		flex:'0 1 25%',
		display:'flex',
		flexDirection:'column',
		textAlign:'center'
	}
}
module.exports=Foot;