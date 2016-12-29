var webpack=require('webpack');
var ET=require('extract-text-webpack-plugin')
module.exports={
   entry:'./src/app.js',
   output:{
   	 path:__dirname+/prd/,
   	 filename:'bundle.js'
   },
   devtool:'source-map',
   module:{
   	loaders:[
   	{
   	test:/\.css$/,
   	loader:'style!css'
   	},
   	{
   		test:/\.js$/,
   		loader:'babel-loader?presets[]=es2015'
   	},
   	{
   		test:/\.scss$/,
   		//loader:'style!css!sass'
        loader:ET.extract('style','css!sass')
   	}
   	]
   	
   },
   plugins:[
     new webpack.optimize.UglifyJsPlugin(),
     new ET('bundle.css')
   ]
	
}
