
var React=require('react');

var Recommend = React.createClass({
	render:function(){
		
		var sty = {
			fontWeight:'hold',
			fontSize:'18px',
			margin:'10px 0 10px 3%'
		}
		
		return(
			<div style={{width:'100%',height:'430px'}}>
				<h2 style={sty}>推荐商家</h2>
				<div>
					<div style={{height:'130px',width:'24%',float:'left',margin:'0 3% 0 3%'}}>
						<img style={{height:'80px',width:'100%'}} src="images/ji.jpg" />
					</div>
					<div style={{height:'130px',width:'65%',float:'left'}}>
						<h2 style={{fontWeight:'hold',fontSize:'18px'}}>兄弟特色大盘鸡(人民路店)</h2>
						<img style={{height:'20px',width:'40%',marginRight:'5px'}} src="images/star.jpg" /><span>月售9999单</span><br/>
						<a style={{color:'#666',borderRight:'1px solid #eee',fontSize:'12px'}}>￥20起送</a><a style={{color:'#666',marginRight:'12%',fontSize:'12px'}}>配送费￥2.5</a>
						<a style={{color:'#727171',borderRight:'1px solid #727171',fontSize:'12px',marginRight:'5px'}}>2.2km &nbsp;&nbsp;</a><a style={{color:'#727171',fontSize:'12px'}}>50分钟</a>
						<hr style={{height:'1px',border:'none',borderTop:'1px dashed #0066CC',marginTop:'2px',marginBottom:'2px'}} />
						<a style={{color:'#666',fontSize:'12px'}}>满25减20,满35减23,满50减27</a><br/>
						<a style={{color:'#666',fontSize:'12px'}}>新用户下单立减14元</a>
					</div>
					
					<div style={{height:'130px',width:'24%',float:'left',margin:'0 3% 0 3%'}}>
						<img style={{height:'80px',width:'100%'}} src="images/ji.jpg" />
					</div>
					<div style={{height:'130px',width:'65%',float:'left'}}>
						<h2 style={{fontWeight:'hold',fontSize:'18px'}}>兄弟特色大盘鸡(人民路店)</h2>
						<img style={{height:'20px',width:'40%',marginRight:'5px'}} src="images/star.jpg" /><span>月售9999单</span><br/>
						<a style={{color:'#666',borderRight:'1px solid #eee',fontSize:'12px'}}>￥20起送</a><a style={{color:'#666',marginRight:'12%',fontSize:'12px'}}>配送费￥2.5</a>
						<a style={{color:'#727171',borderRight:'1px solid #727171',fontSize:'12px',marginRight:'5px'}}>2.2km &nbsp;&nbsp;</a><a style={{color:'#727171',fontSize:'12px'}}>50分钟</a>
						<hr style={{height:'1px',border:'none',borderTop:'1px dashed #0066CC',marginTop:'2px',marginBottom:'2px'}} />
						<a style={{color:'#666',fontSize:'12px'}}>满25减20,满35减23,满50减27</a><br/>
						<a style={{color:'#666',fontSize:'12px'}}>新用户下单立减14元</a>
					</div>
					
					<div style={{height:'130px',width:'24%',float:'left',margin:'0 3% 0 3%'}}>
						<img style={{height:'80px',width:'100%'}} src="images/ji.jpg" />
					</div>
					<div style={{height:'130px',width:'65%',float:'left'}}>
						<h2 style={{fontWeight:'hold',fontSize:'18px'}}>兄弟特色大盘鸡(人民路店)</h2>
						<img style={{height:'20px',width:'40%',marginRight:'5px'}} src="images/star.jpg" /><span>月售9999单</span><br/>
						<a style={{color:'#666',borderRight:'1px solid #eee',fontSize:'12px'}}>￥20起送</a><a style={{color:'#666',marginRight:'12%',fontSize:'12px'}}>配送费￥2.5</a>
						<a style={{color:'#727171',borderRight:'1px solid #727171',fontSize:'12px',marginRight:'5px'}}>2.2km &nbsp;&nbsp;</a><a style={{color:'#727171',fontSize:'12px'}}>50分钟</a>
						<hr style={{height:'1px',border:'none',borderTop:'1px dashed #0066CC',marginTop:'2px',marginBottom:'2px'}} />
						<a style={{color:'#666',fontSize:'12px'}}>满25减20,满35减23,满50减27</a><br/>
						<a style={{color:'#666',fontSize:'12px'}}>新用户下单立减14元</a>
					</div>
				</div>
				
			</div>
		)
	}
})

module.exports=Recommend;