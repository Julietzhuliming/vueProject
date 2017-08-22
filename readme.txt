
 TypeError: this._init is not a function
npm install vue-loader vue-html-loader vue-style-loader css-loader -save

{
        test: /\.vue$/,
        loader: 'vue-loader', /* 原来的'vue'改成'vue-loader' */
        options: {
          // vue-loader options go here
        }
      },