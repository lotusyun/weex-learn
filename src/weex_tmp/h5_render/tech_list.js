/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	;__weex_define__("@weex-component/44a6c30abb7606fc67268e7a969c496a", [], function(__weex_require__, exports, __weex_module__){
	__webpack_require__(1);

	;
	    __webpack_require__(3);
	    __webpack_require__(4);
	    //数据绑定
	    __webpack_require__(5);
	    //组件之间数据通信
	    __webpack_require__(6);
	    __webpack_require__(7);
	    __webpack_require__(8);
	    //加载更多
	    __webpack_require__(9);
	    __weex_module__.exports = {
	        data: function () {return {
	            intervalValue:"3000",
	            isShowIndicators:"true",
	            isAutoPlay:"true",
	            itemList: [
	                {
	                    link: 'https://sojump.com/m/9361140.aspx?zbj.com',
	                    pictureUrl: 'http://d.youth.cn/shrgch/201608/W020160830345709259446.jpg'
	                },{
	                    link: 'http://zt.zbj.com/dist/20160826-1329/index.html',
	                    pictureUrl: 'http://photocdn.sohu.com/20160830/Img466723544.jpg'
	                },{
	                    link: 'http://zt.zbj.com/dist/20160826-1334/index.html',
	                    pictureUrl: 'http://photocdn.sohu.com/20160830/Img466723539.jpg'
	                }
	            ]
	        }},
	        styles: {

	        },
	        methods: {
	            goWeexSite: function () {
	                this.$openURL('http://alibaba.github.io/weex/')
	            }
	        }
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "container",
	  "children": [
	    {
	      "type": "div",
	      "style": {
	        "flexDirection": "column"
	      },
	      "children": [
	        {
	          "type": "slider",
	          "classList": [
	            "slider"
	          ],
	          "attr": {
	            "interval": function () {return this.intervalValue},
	            "autoPlay": function () {return this.isAutoPlay}
	          },
	          "children": [
	            {
	              "type": "image",
	              "classList": [
	                "slider-pages"
	              ],
	              "repeat": function () {return this.itemList},
	              "attr": {
	                "src": function () {return this.pictureUrl}
	              }
	            },
	            {
	              "type": "indicator",
	              "style": {
	                "top": 80
	              }
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "list-thumb-text"
	    },
	    {
	      "type": "iconfont"
	    },
	    {
	      "type": "modal"
	    },
	    {
	      "type": "data-bind"
	    },
	    {
	      "type": "data-communicate-child-father"
	    },
	    {
	      "type": "data-communicate-father-child"
	    },
	    {
	      "type": "data-communicate-brother"
	    },
	    {
	      "type": "load-list"
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "slider": {
	    "width": 750,
	    "height": 200
	  },
	  "slider-pages": {
	    "flexDirection": "row",
	    "width": 750,
	    "height": 200
	  }
	})
	})
	;__weex_bootstrap__("@weex-component/44a6c30abb7606fc67268e7a969c496a", {
	  "transformerVersion": "0.3.1"
	},undefined)

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	;__weex_define__("@weex-component/list-thumb-text", [], function(__weex_require__, exports, __weex_module__){
	__webpack_require__(2);

	;
	    __weex_module__.exports = {
	        data: function () {return {
	            itemList: [{
	                picUrl: 'https://ss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/super/pic/item/359b033b5bb5c9ea5ab03642dd39b6003bf3b3cb.jpg',
	                title: '【热门推荐套餐】收藏淘宝天猫宝贝店铺淘宝推广微淘粉丝',
	                price: 48.00,
	                save: 2.0,
	                city: '四川',
	                number: 32432345
	            },{
	                picUrl: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2006511040,1656033524&fm=80',
	                title: '【淘宝推广热门推荐套餐】收藏流量销量打造爆款包月网店铺推广',
	                price: 48.00,
	                save: 2.0,
	                city: '重庆',
	                number: 355
	            },{
	                picUrl: 'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=762036346,2495714970&fm=80',
	                title: '阿里巴巴天猫淘宝宝贝收藏送店铺爆款收藏网店人气流量关注推广',
	                price: 48.00,
	                save: 2.0,
	                city: '安徽',
	                number: 5647
	            },{
	                picUrl: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2374982385,3270025697&fm=80',
	                title: '【热门推荐套餐】收藏淘宝天猫宝贝店铺淘宝推广微淘粉丝',
	                price: 48.00,
	                save: 2.0,
	                city: '宁夏',
	                number: 2343556
	            }],
	            list: [{
	                name: '品牌街',
	                price: '只挑大牌服务商'
	            },{
	                name: '惠体验',
	                price: '品质服务 一元体验'
	            },{
	                name: '品牌街',
	                price: '只挑大牌服务商'
	            },{
	                name: '惠体验',
	                price: '品质服务 一元体验'
	            },{
	                name: '品牌街',
	                price: '只挑大牌服务商'
	            },{
	                name: '惠体验',
	                price: '品质服务 一元体验'
	            },{
	                name: '品牌街',
	                price: '只挑大牌服务商'
	            },{
	                name: '惠体验',
	                price: '品质服务 一元体验'
	            },{
	                name: '品牌街',
	                price: '只挑大牌服务商'
	            },{
	                name: '惠体验',
	                price: '品质服务 一元体验'
	            }]
	        }}
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "container",
	  "classList": [
	    "father"
	  ],
	  "children": [
	    {
	      "type": "text",
	      "classList": [
	        "enjoy"
	      ],
	      "attr": {
	        "value": "猜您喜欢"
	      }
	    },
	    {
	      "type": "div",
	      "classList": [
	        "cell"
	      ],
	      "repeat": function () {return this.itemList},
	      "children": [
	        {
	          "type": "a",
	          "attr": {
	            "href": "http://baidu.com"
	          },
	          "classList": [
	            "flex-container"
	          ],
	          "children": [
	            {
	              "type": "image",
	              "classList": [
	                "thumb"
	              ],
	              "attr": {
	                "src": function () {return this.picUrl}
	              }
	            },
	            {
	              "type": "div",
	              "classList": [
	                "text"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "title"
	                  ],
	                  "attr": {
	                    "value": function () {return this.title}
	                  }
	                },
	                {
	                  "type": "div",
	                  "classList": [
	                    "price"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "classList": [
	                        "f-color-orange"
	                      ],
	                      "attr": {
	                        "value": function () {return '￥' + (this.price)}
	                      }
	                    },
	                    {
	                      "type": "text",
	                      "classList": [
	                        "f-color-grey"
	                      ],
	                      "attr": {
	                        "value": function () {return '已省' + (this.save) + '元'}
	                      }
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "classList": [
	                    "box"
	                  ],
	                  "children": [
	                    {
	                      "type": "div",
	                      "classList": [
	                        "label",
	                        "item"
	                      ],
	                      "children": [
	                        {
	                          "type": "text",
	                          "classList": [
	                            "item-inner"
	                          ],
	                          "attr": {
	                            "value": "打造爆款"
	                          }
	                        },
	                        {
	                          "type": "text",
	                          "classList": [
	                            "item-inner"
	                          ],
	                          "attr": {
	                            "value": "企业"
	                          }
	                        },
	                        {
	                          "type": "text",
	                          "classList": [
	                            "item-inner"
	                          ],
	                          "attr": {
	                            "value": "雇主保障"
	                          }
	                        }
	                      ]
	                    },
	                    {
	                      "type": "div",
	                      "classList": [
	                        "address",
	                        "item"
	                      ],
	                      "children": [
	                        {
	                          "type": "text",
	                          "classList": [
	                            "address-item-inner"
	                          ],
	                          "attr": {
	                            "value": function () {return (this.city) + ' | 成交 ' + (this.number)}
	                          }
	                        }
	                      ]
	                    }
	                  ]
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "text",
	      "style": {
	        "textAlign": "center",
	        "marginTop": 10
	      },
	      "attr": {
	        "value": "滚动加载....."
	      }
	    },
	    {
	      "type": "scroller",
	      "classList": [
	        "scroller"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "repeat": function () {return this.list},
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "value": function () {return (this.name) + ': ' + (this.price)}
	              }
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "switch-button"
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "flex-container": {
	    "flexDirection": "row",
	    "flex": 1
	  },
	  "enjoy": {
	    "textAlign": "center",
	    "marginTop": 10
	  },
	  "father": {
	    "overflow": "hidden"
	  },
	  "cell": {
	    "borderBottom": "1px solid #aaa",
	    "marginTop": 20,
	    "paddingLeft": 20,
	    "paddingBottom": 20,
	    "paddingRight": 20,
	    "flexDirection": "row"
	  },
	  "price": {
	    "flexDirection": "row"
	  },
	  "thumb": {
	    "width": 170,
	    "height": 170,
	    "marginRight": 20
	  },
	  "text": {
	    "flex": 1,
	    "color": "#000000"
	  },
	  "title": {
	    "height": 72,
	    "fontSize": 28,
	    "lineHeight": 38,
	    "marginBottom": 10
	  },
	  "f-color-grey": {
	    "color": "#b0b0b0",
	    "fontSize": 24,
	    "marginLeft": 10
	  },
	  "f-color-orange": {
	    "color": "#ff6600",
	    "fontSize": 28
	  },
	  "box": {
	    "flexDirection": "row",
	    "justifyContent": "space-between",
	    "marginTop": 20
	  },
	  "item-inner": {
	    "fontSize": 24,
	    "color": "#339ef3",
	    "border": "1px solid #ccc",
	    "borderColor": "#339ef3",
	    "padding": 2,
	    "marginRight": 4
	  },
	  "label": {
	    "flexDirection": "row"
	  },
	  "address-item-inner": {
	    "fontSize": 24
	  },
	  "scroller": {
	    "height": 200,
	    "margin": 10
	  }
	})
	})

/***/ },
/* 2 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/switch-button", [], function(__weex_require__, exports, __weex_module__){

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "children": [
	    {
	      "type": "text",
	      "style": {
	        "textAlign": "center"
	      },
	      "attr": {
	        "value": "注册表单"
	      }
	    },
	    {
	      "type": "div",
	      "classList": [
	        "form"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "item"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "value": "邮箱:"
	              }
	            },
	            {
	              "type": "input",
	              "classList": [
	                "input"
	              ],
	              "attr": {
	                "type": "url",
	                "autofocus": "true",
	                "placeholder": "...",
	                "value": "http://XXX@zhuabjie.com"
	              },
	              "style": {
	                "placeholderColor": "#666666"
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "item"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "value": "姓名:"
	              }
	            },
	            {
	              "type": "input",
	              "classList": [
	                "input"
	              ],
	              "attr": {
	                "type": "text",
	                "placeholder": "李四"
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "item",
	            "switch"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "value": "是否加入保密协议"
	              }
	            },
	            {
	              "type": "switch",
	              "attr": {
	                "checked": "true"
	              }
	            }
	          ]
	        },
	        {
	          "type": "text",
	          "classList": [
	            "button",
	            "bg-orange"
	          ],
	          "attr": {
	            "value": "注册"
	          }
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "form": {
	    "padding": 20
	  },
	  "item": {
	    "flexDirection": "row",
	    "marginBottom": 10,
	    "height": 50,
	    "lineHeight": 50
	  },
	  "input": {
	    "width": 600,
	    "fontSize": 32,
	    "border": "1px solid #aaa"
	  },
	  "switch": {
	    "justifyContent": "space-between"
	  },
	  "button": {
	    "display": "inline-block",
	    "width": 200,
	    "height": 30,
	    "padding": 10,
	    "border": "1px solid #aaa",
	    "borderRadius": 6,
	    "boxSizing": "content-box",
	    "textAlign": "center",
	    "alignSelf": "center"
	  },
	  "bg-orange": {
	    "backgroundColor": "#ff6600",
	    "color": "#ffffff"
	  }
	})
	})

/***/ },
/* 3 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/iconfont", [], function(__weex_require__, exports, __weex_module__){

	;
	    __weex_module__.exports = {
	        created: function() {
	            /* 提示没有addRule这个方法  */

	            /* ----------------------------  */

	            /*var domModule = __weex_require__('@weex-module/dom');
	            //目前支持ttf、woff文件，不支持svg、eot类型
	            domModule.addRule('font-face', {
	                'font-family': "iconfont1",
	                'src' : "url('iconfont.ttf')"
	            });
	            domModule.addRule('font-face', {
	                'font-family': "iconfont2",
	                'src': "url('http://at.alicdn.com/t/font_1469606063_76593.ttf')"
	            });
	            domModule.addRule('font-face', {
	                'font-family': "iconfont3",
	                'src': "url('http://at.alicdn.com/t/font_1469606522_9417143.woff')"
	            });
	            domModule.addRule('font-face', {
	                'font-family': "iconfont4",
	                'src': "url('file:///storage/emulated/0/Android/data/com.alibaba.weex/cache/http:__at.alicdn.com_t_font_1469606063_76593.ttf')"
	            });*/
	        }
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "children": [
	    {
	      "type": "text",
	      "classList": [
	        "iconfont"
	      ],
	      "attr": {
	        "value": "不同的字体图标 演示toast\\alert.."
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "title1"
	      ],
	      "attr": {
	        "value": "Assets: "
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "title2"
	      ],
	      "attr": {
	        "value": "http ttf: "
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "title3"
	      ],
	      "attr": {
	        "value": "http woff: "
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "title4"
	      ],
	      "attr": {
	        "value": "file: "
	      }
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "iconfont": {
	    "borderTop": "1px solid #aaa",
	    "marginTop": 10,
	    "paddingTop": 10,
	    "textAlign": "center"
	  },
	  "title1": {
	    "color": "#FF0000",
	    "fontSize": 36,
	    "fontFamily": "iconfont1"
	  },
	  "title2": {
	    "color": "#FF0000",
	    "fontSize": 36,
	    "fontFamily": "iconfont2"
	  },
	  "title3": {
	    "color": "#FF0000",
	    "fontSize": 36,
	    "fontFamily": "iconfont3"
	  },
	  "title4": {
	    "color": "#FF0000",
	    "fontSize": 36,
	    "fontFamily": "iconfont4"
	  }
	})
	})

/***/ },
/* 4 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/modal", [], function(__weex_require__, exports, __weex_module__){

	;
	    var toastMessage = 'I am toast!',
	            alertArg = 'I am alert!',
	            confirmArg = 'I am confirm',
	            promptArg = 'I am prompt',
	            ok = 'I am ok',
	            cancel = 'I am cancel';

	    var modal = __weex_require__('@weex-module/modal');

	    __weex_module__.exports = {
	        methods: {
	            toast: function(){
	                console.log('aaa');
	                modal.toast({
	                    message: toastMessage,
	                    duration: 1
	                });
	            },
	            alert: function(){
	                modal.alert({
	                    message: alertArg,
	                    okTitle: ok
	                },function(e){
	                    alert(e.status + ',' + e.data);
	                });
	            },
	            confirm: function(){
	                modal.confirm({
	                    message: confirmArg,
	                    okTitle: ok,
	                    cancelTitle: cancel
	                },function(e){
	                    alert(e.status + ',' + e.data);
	                });
	            },
	            prompt: function(){
	                modal.prompt({
	                    message: promptArg,
	                    okTitle: ok,
	                    cancelTitle: cancel
	                }, function(e){
	                    alert(e.status + ',' + e.data);
	                });
	            }
	        }
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "children": [
	    {
	      "type": "text",
	      "events": {
	        "click": "toast"
	      },
	      "classList": [
	        "button"
	      ],
	      "attr": {
	        "value": "点我toast"
	      }
	    },
	    {
	      "type": "text",
	      "events": {
	        "click": "alert"
	      },
	      "classList": [
	        "button"
	      ],
	      "attr": {
	        "value": "点我alert"
	      }
	    },
	    {
	      "type": "text",
	      "events": {
	        "click": "confirm"
	      },
	      "classList": [
	        "button"
	      ],
	      "attr": {
	        "value": "点我confirm"
	      }
	    },
	    {
	      "type": "text",
	      "events": {
	        "click": "prompt"
	      },
	      "classList": [
	        "button"
	      ],
	      "attr": {
	        "value": "点我prompt"
	      }
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "button": {
	    "display": "inline-block",
	    "width": 200,
	    "height": 30,
	    "border": "1px solid #aaa",
	    "padding": 10,
	    "borderRadius": 6,
	    "boxSizing": "content-box",
	    "marginBottom": 10
	  }
	})
	})

/***/ },
/* 5 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/data-bind", [], function(__weex_require__, exports, __weex_module__){

	;
	    __weex_module__.exports = {
	        data: function () {return {
	            shown: true
	        }},
	        methods: {
	            toggle : function(){
	                this.shown = !this.shown;
	            }
	        }
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "container",
	  "classList": [
	    "data-bind-container"
	  ],
	  "children": [
	    {
	      "type": "text",
	      "events": {
	        "click": "toggle"
	      },
	      "attr": {
	        "value": "Toggle"
	      }
	    },
	    {
	      "type": "image",
	      "classList": [
	        "img"
	      ],
	      "attr": {
	        "src": "http://ubmcmm.baidustatic.com/media/v1/0f000Qtw4wK2h_FhTOCDe6.jpg",
	        "alt": ""
	      },
	      "shown": function () {return this.shown}
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "data-bind-container": {
	    "flexDirection": "row"
	  },
	  "img": {
	    "width": 500,
	    "height": 500
	  }
	})
	})

/***/ },
/* 6 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/foo", [], function(__weex_require__, exports, __weex_module__){

	;
	        __weex_module__.exports = {
	            data: function () {return {
	                title: '子-父',
	                imageUrl: '',
	                clickNumber: 0
	            }},
	            methods: {
	                test: function(){
	                    this.$dispatch('notify', {
	                        clickNumber: this.clickNumber
	                    });
	                    this.clickNumber++;
	                }
	            }
	        }
	    
	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "children": [
	    {
	      "type": "image",
	      "classList": [
	        "img"
	      ],
	      "events": {
	        "click": "test"
	      },
	      "attr": {
	        "src": function () {return this.imageUrl},
	        "alt": "子元素"
	      }
	    },
	    {
	      "type": "text",
	      "attr": {
	        "value": function () {return this.title}
	      }
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "img": {
	    "width": 750,
	    "height": 200
	  }
	})
	});

	;__weex_define__("@weex-component/data-communicate-child-father", [], function(__weex_require__, exports, __weex_module__){

	;
	    __weex_module__.exports = {
	        data: function () {return {
	            title: '父级',
	            imageUrl: '',
	            number: 0
	        }},
	        created: function(){
	            this.$on('notify', function(e){
	                console.log(e.detail);
	                this.number = e.detail.clickNumber;
	            });
	        }
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "communicate-container"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "attr": {
	            "value": function () {return this.title}
	          }
	        },
	        {
	          "type": "text",
	          "shown": function () {return this.number},
	          "attr": {
	            "value": function () {return '子元素点击次数: ' + (this.number) + '次'}
	          }
	        }
	      ]
	    },
	    {
	      "type": "foo",
	      "attr": {
	        "imageUrl": "http://bgl.zbjimg.com/bgl%2Fbjclound%2F2016081507.png%2Forigine%2F59fcd33a-732d-429b-bc68-8509640d0f0c?imageMogr2/auto-orient/strip/quality/90"
	      }
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "communicate-container": {
	    "flexDirection": "row"
	  }
	})
	})

/***/ },
/* 7 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/foo1", [], function(__weex_require__, exports, __weex_module__){

	;
	        __weex_module__.exports = {
	            data: function () {return {
	                imageUrl: ''
	            }},
	            created: function(){
	                var that = this;
	                console.log('foo1')
	                this.$on('changeImage', function(e){
	                    console.log(e.detail);
	                    that.imageUrl = e.detail.imageUrl
	                });
	            }
	        }
	    
	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "children": [
	    {
	      "type": "image",
	      "classList": [
	        "img"
	      ],
	      "attr": {
	        "src": function () {return this.imageUrl},
	        "alt": "子元素"
	      }
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "img": {
	    "width": 750,
	    "height": 200
	  }
	})
	});

	;__weex_define__("@weex-component/bar", [], function(__weex_require__, exports, __weex_module__){

	;
	        __weex_module__.exports = {
	            data: function () {return {
	                title: '子-父'
	            }},
	            created: function(){
	                var that = this;
	                console.log('bar')
	                this.$on('changeTitle',function(e){
	                    console.log(e.detail);
	                    that.title = e.detail.title;
	                });
	            }
	        }
	    
	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "children": [
	    {
	      "type": "foo1"
	    },
	    {
	      "type": "text",
	      "attr": {
	        "value": function () {return this.title}
	      }
	    }
	  ]
	})
	});

	;__weex_define__("@weex-component/data-communicate-father-child", [], function(__weex_require__, exports, __weex_module__){

	;
	    __weex_module__.exports = {
	        methods: {
	            test: function(){
	                this.$broadcast('changeTitle', {
	                    title: '子元素'
	                });
	                this.$broadcast('changeImage', {
	                    imageUrl: 'http://mobilenewwap.zbjimg.com/mobile%2Fnewwap%2F1.jpg%2Forigine%2Fe6612733-e1e4-4448-882c-dbeffe007c97'
	                });
	            }
	        }
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "children": [
	    {
	      "type": "text",
	      "events": {
	        "click": "test"
	      },
	      "attr": {
	        "value": "click to update foo"
	      }
	    },
	    {
	      "type": "bar"
	    }
	  ]
	})
	})

/***/ },
/* 8 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/baby1", [], function(__weex_require__, exports, __weex_module__){

	;
	        __weex_module__.exports = {
	            data: function () {return {
	                title: '',
	                clickNumber: 0
	            }},
	            created: function(){
	                this.$on('callbaby11', function(e){
	                    this.title = e.detail.a;
	                    console.log('baby1' + e.detail);
	                });

	            }
	        }
	    
	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "children": [
	    {
	      "type": "text",
	      "attr": {
	        "value": function () {return this.title}
	      }
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "img": {
	    "width": 750,
	    "height": 200
	  }
	})
	});

	;__weex_define__("@weex-component/baby2", [], function(__weex_require__, exports, __weex_module__){

	;
	        __weex_module__.exports = {
	            data: function () {return {
	                title: '兄弟元素'
	            }},
	            methods: {
	                callbaby1: function(){
	                    this.$dispatch('callbaby1', {
	                        a: 1
	                    })
	                }
	            }
	        }
	    
	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "children": [
	    {
	      "type": "text",
	      "events": {
	        "click": "callbaby1"
	      },
	      "attr": {
	        "value": function () {return this.title}
	      }
	    }
	  ]
	})
	});

	;__weex_define__("@weex-component/data-communicate-brother", [], function(__weex_require__, exports, __weex_module__){

	;
	    __weex_module__.exports = {
	        created: function(){
	            var self = this;
	            this.$on('callbaby1', function(e){
	                console.log(e.detail)
	                self.$broadcast('callbaby11', e.detail);
	            });
	        }
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "children": [
	    {
	      "type": "baby1"
	    },
	    {
	      "type": "baby2"
	    }
	  ]
	})
	})

/***/ },
/* 9 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/load-list", [], function(__weex_require__, exports, __weex_module__){

	;
	    __weex_module__.exports = {
	        data: function () {return {
	            index: 0,
	            size: 50,
	            count: 1,
	            loadingText: '加载更多...',
	            items: []
	        }},
	        created: function(){
	            this.addPage()
	        },
	        methods: {
	            addPage: function(){
	                for(var i = 0; i < this.size; i++) {
	                    var id = this.index * this.size + i;
	                    this.items.push({
	                        id: id,
	                        name: 'item-' + id
	                    });
	                }
	                this.index++;
	            },
	            loadingHandler: function(){
	                console.log(this.index);
	                //this.index 当前页数
	                //this.count 总页数
	                //http://www.w2bc.com/article/155728
	                if(this.index === this.count) {
	                    this.loadingText = '没有更多了';
	                }else{
	                    this.addPage();
	                }
	            }
	        }
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "list",
	  "children": [
	    {
	      "type": "cell",
	      "append": "tree",
	      "repeat": {
	        "expression": function () {return this.items},
	        "value": "v"
	      },
	      "attr": {
	        "trackBy": "id"
	      },
	      "children": [
	        {
	          "type": "text",
	          "attr": {
	            "value": function () {return this.v.name}
	          }
	        }
	      ]
	    },
	    {
	      "type": "loading",
	      "classList": [
	        "loading"
	      ],
	      "events": {
	        "loading": "loadingHandler"
	      },
	      "children": [
	        {
	          "type": "text",
	          "attr": {
	            "value": function () {return this.loadingText}
	          }
	        }
	      ]
	    }
	  ]
	})
	})

/***/ }
/******/ ]);