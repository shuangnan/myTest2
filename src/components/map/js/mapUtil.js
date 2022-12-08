/**
 * 代码分离，单独处理marker图层的逻辑
 * */
//vue实例，在组件created的时候调用setVm传入\


let $vm = null;

import C from "../../../assets/com.js";
import configs from '../js/config'

//绘制多边形
var points = [];
var circleLayers = []; //小圆点
var lines = new L.polyline([]); //实线
var tempLines = new L.polyline([], { //临时虚线
	dashArray: 5
});
const EARTH_RADIUS = 6378137;

export default {
	IndexVue:$vm,
	curZoom: 3,
	// 夜间成都城市地图---带公路
	sccqUrlNight_gl: "https://10.192.34.79/ky12555/iserver/services/map-ugcv5-cdCity/rest/maps/cdCity",
	// 夜间成都城市地图
	// sccqUrlNight: "https://10.192.125.55:8443/iserver/services/map-ugcv5-cdCity2/rest/maps/cdCity",
	// sccqUrlNight: "https://10.192.125.55:8443/iserver/services/map-map_detail/rest/maps/cdCity",
	// sccqUrlNight: "https://10.192.125.55:8443/iserver/services/map-ugcv5-cdCity/rest/maps/cdCity",
	sccqUrlNight: "https://10.192.34.79/ky12555/iserver/services/map-ugcv5-ChinaCityb/rest/maps/ChinaCity_b",
	// sccqUrlNight:"https://10.192.125.55:8443/iserver/services/map-ugcv5-ChengDuDongWeiXing/rest/maps/成都东卫星",
	// 日间成都城市地图
	// sccqUrlDay: '',
	// sccqUrlDay: "https://10.192.125.55:8443/iserver/services/map-ugcv5-cdCity2/rest/maps/cdCity2",
	sccqUrlDay: "https://10.192.125.55:8443/iserver/services/map-ugcv5-cdCity3/rest/maps/cdCity3",
	// qgUrlDay: "https://10.192.125.55:8443/iserver/services/map-ugcv5-ChinaCity/rest/maps/ChinaCity",
	// qgUrlDay: "http://10.192.125.65:8090/iserver/services/map-ugcv5-ChinaCitya1/rest/maps/ChinaCity_a1%E6%9C%89%E9%93%81%E8%B7%AF",
	// qgUrlDay: "http://10.192.125.65:8090/iserver/services/map-ugcv5-ChinaCitya2/rest/maps/ChinaCity_a2",
	qgUrlDay: "https://10.192.34.79/supermap/iserver/services/map-ugcv5-ChinaCitya2/rest/maps/ChinaCity_a2",

	//公安日间地图
	// kyglUrlDay: "http://10.202.157.27:8090/iserver/services/map-ugcv5-ChinaCity/rest/maps/ChinaCity",
	// kyglUrlDay: "http://10.202.157.27:8090/iserver/services/map-ugcv5-ChinaCitya1/rest/maps/ChinaCity_a1%E6%9C%89%E9%93%81%E8%B7%AF",
	kyglUrlDay: "http://10.202.157.27:8090/iserver/services/map-ugcv5-ChinaCitya2/rest/maps/ChinaCity_a2",
	// kyglUrlDay: "https://10.192.125.55:8443/iserver/services/map-ugcv5-ChinaCity/rest/maps/ChinaCity", // 路内
	//公安夜间地图
	// kyglUrlNight: "http://10.202.157.27:8090/iserver/services/map-ugcv5-ChinaCityc/rest/maps/ChinaCity_c", 旧版
	kyglUrlNight: "http://10.202.157.27:8090/iserver/services/map-ugcv5-ChinaCityc2/rest/maps/ChinaCity_c1",
	// kyglUrlNight: "https://10.192.125.55:8443/iserver/services/map-ugcv5-ChinaCityc1/rest/maps/ChinaCity_c1",//路内

	// qgUrlDay: "https://10.192.125.55:8443/iserver/services/map-ugcv5-ChinaCity/rest/maps/ChinaCity.leaflet",
	// qgUrlNight: "https://10.192.34.79/ky12555/iserver/services/map-ugcv5-ChinaCityb/rest/maps/ChinaCity_b",
	// https://10.192.125.55:8443/iserver/services/map-map_detail/rest/maps/cdCity2.leaflet
	qgUrlNight: 'https://10.192.125.55:8443/iserver/services/map-ugcv5-ChinaCityc/rest/maps/ChinaCity_c',

	// mapUrl: "https://10.192.34.79/ky12555/iserver/services/map-ugcv5-ChinaMap3/rest/maps/ChinaMap3", //地图服务
	// mapUrl: 'http://10.192.125.65:8090/iserver/services/map-China/rest/maps/China_Dark',
	mapUrl: "https://10.192.125.55:8443/iserver/services/map-ugcv5-ChinaCityc1/rest/maps/ChinaCity_c1", //地图服务
	sccqLayer: null,
	baseLayer: null,
	roadQgLayer: null,
	roadSccqLayer: null,
	temp_mianyang_stn_marker: null,
	baseLayerVisible:1,
	policeNightLayer: null,
	policeDayLayer: null,
	policeBoundLayer:null,//公安处管界
	policeSccqUrlNightLayer:null,
	policeSccqUrlDayLayer:null,
	policeRoadQgNightLayer:null,
	policeRoadQgDayLayer:null,
	policeRoadSccqNightLayer:null,
	policeRoadSccqDayLayer:null,
	policeBounds:{
		// 路内
		url0:C.ADDS.isPolice?"http://10.202.157.27:8090/iserver/services/map-ugcv5-JuGuanJieYouTieLu/rest/maps/局管界_有铁路":"http://10.192.125.65:8090/iserver/services/map-ugcv5-JuGuanJieYouTieLu/rest/maps/局管界_有铁路",
		url1:C.ADDS.isPolice?"http://10.202.157.27:8090/iserver/services/map-ugcv5-ChengDuGongAnChuGuanJieYouTieLu/rest/maps/成都公安处管界_有铁路":"http://10.192.125.65:8090/iserver/services/map-ugcv5-ChengDuGongAnChuGuanJieYouTieLu/rest/maps/成都公安处管界_有铁路",
		url2:C.ADDS.isPolice?"http://10.202.157.27:8090/iserver/services/map-ugcv5-ChongQingGongAnChuGuanJieYouTieLu/rest/maps/重庆公安处管界_有铁路":"http://10.192.125.65:8090/iserver/services/map-ugcv5-ChongQingGongAnChuGuanJieYouTieLu/rest/maps/重庆公安处管界_有铁路",
		url3:C.ADDS.isPolice?"http://10.202.157.27:8090/iserver/services/map-ugcv5-GuiYangGongAnChuGuanJieYouTieLu/rest/maps/贵阳公安处管界_有铁路":"http://10.192.125.65:8090/iserver/services/map-ugcv5-GuiYangGongAnChuGuanJieYouTieLu/rest/maps/贵阳公安处管界_有铁路",
		url4:C.ADDS.isPolice?"http://10.202.157.27:8090/iserver/services/map-ugcv5-XiChangGongAnChuGuanJieYouTieLu/rest/maps/西昌公安处管界_有铁路":"http://10.192.125.65:8090/iserver/services/map-ugcv5-XiChangGongAnChuGuanJieYouTieLu/rest/maps/西昌公安处管界_有铁路",

	},
	init(vmParam) {
		this.setVm(vmParam);
		this.initMap();
	},
	/**--------------------------------------初始化vm-----------------------------------------*/
	setVm(vmParam) {
		if ($vm === null) {
			$vm = vmParam;
		} else {
			$vm.map.eachLayer(function(l) {
				l.removeFrom($vm.map)
			});
			$vm = null;
			$vm = vmParam;
		}
	},
	/**--------------------------------------map绘制-----------------------------------------*/
	initMap() {
		const trainLineUrl = "https://10.192.34.79/ky12555/iserver/services/map-ugcv5-RoadLine3/rest/maps/RoadLine3"; //铁路线服务
		// const trainLineUrl = "https://10.192.125.55:8443/iserver/services/map-ugcv5-RoadLine/rest/maps/RoadLine"; //铁路线服务
		// const sccqUrl = this.sccqUrlNight; //四川重庆详细地图服务
		let sccqUrl = ''
		let isLight = false
		if (configs.superMap.lightMode === undefined) {
			isLight = false
		} else {
			isLight = configs.superMap.lightMode
		}
		if (isLight) {
			sccqUrl = $vm.sys === "police"?"":this.sccqUrlDay;
		} else {
			sccqUrl = $vm.sys === "police"?"":this.sccqUrlNight;
		}
		// const sccqUrl = configs.superMap.darkMode ? this.sccqUrlNight : this.sccqUrlDay
		const mapCenterPoint = C.ADDS.isPolice?[ 30.69330,104.08356]:($vm.config.superMap.center || [30.629280172126524, 104.13989732474064]); //成都东
		// const scaleDenominators = [36978669, 18489335, 9244668, 4622334, 3081556, 2311167, 1540778, 1155583, 770389, 577792,
		// 	288896, 144448, 72224, 36112, 18056, 9028, 4514, 2257, 1129
		// ]
		const scaleDenominators = [36978669, 18489335, 9244668, 4622334, 3081556, 2311167, 1540778, 1155583, 770389, 577792,
			288896, 144448, 72224, 36112, 18056, 9028, 1129
		]
		//自定义坐标系
		const crs = L.Proj.CRS("EPSG:3857", {
			origin: mapCenterPoint,
			scaleDenominators: scaleDenominators,
		});
		//边界
		const cornerLeftUp = L.latLng(70, 30);
		const cornerRightDown = L.latLng(-10, 175);
		const bounds = L.latLngBounds(cornerLeftUp, cornerRightDown);
		console.log("默认缩放比例1", $vm.config.superMap.zoom)
		console.log("默认中心点", mapCenterPoint)
		$vm.map = L.map('home-map', {
			crs: crs,
			center: mapCenterPoint, //中心点
			minZoom: $vm.config.superMap.zoomMin || 1, //最小缩放
			maxZoom: $vm.config.superMap.zoomMax || 19, //最大缩放15
			zoom: $vm.config.superMap.zoom || 1, //默认缩放
			maxBounds: $vm.localBounds || bounds, //边界
			zoomControl: false, //不显示缩放按钮
			logoControl: false, //supermap水印
			attributionControl: false, //水印文本,可以传字符串进行自定义
		});
			// $vm.map.addControl(new SuperMap.Control.ScaleLine(), new SuperMap.Pixel(500,500));
			// L.control.scale().addTo($vm.map) // 正确写法
		this.temp_mianyang_stn_marker = L.marker({
			lon: 104.728625 - 0.0005,
			lat: 31.47384722
		}, {
			icon: L.divIcon({
				className: 'temp-stn-icon-container',
				html: `<div style="height: 25px; width: 60px;"><span style="font-weight: bold; font-size: 15px; font-family: ${"宋体"};">绵阳北</span></div>`
			})
		})
		//注册地图的缩放事件

		$vm.map.on("zoomend", (e) => {
			const oldZoom = $vm.config.superMap.zoom;
			const newZoom = e.target._zoom;

			console.log("地图缩放事件:" + oldZoom + " → " + newZoom);
			this.curZoom = newZoom;
			// $vm.highlightStations()
			if($vm.sys !== "police" && this.baseLayerVisible==1){
				// if (newZoom >= 5) {
				// 	this.baseLayer.setOpacity(0);
				// } else {
				// 	this.baseLayer.setOpacity(1);
				// }
			}
			if ($vm.sys !== "police") {
				if (newZoom >= 5) {
					this.roadQgLayer.setOpacity(0);
				} else {
					this.roadQgLayer.setOpacity(1);
				}
				// 订制了四川重庆详图
				if($vm.config.superMap.sccq && this.baseLayerVisible == 1){
					if (newZoom >= 5) {
						$vm.map.addLayer(this.temp_mianyang_stn_marker)
						this.sccqLayer.setOpacity(1);
						console.log('MIANYANG', this.temp_mianyang_stn_marker)
					} else {
						this.sccqLayer.setOpacity(0);
						$vm.map.removeLayer(this.temp_mianyang_stn_marker)
					}
					if (newZoom >= 5) {
						this.roadSccqLayer.setOpacity(1)
					} else {
						this.roadSccqLayer.setOpacity(0)
					}
					if (newZoom >= 10) {
						$('.station-icon-station-name').show()
					} else {
						$('.station-icon-station-name').hide()
					}
				}
			}
			$vm.onMapZoomend(newZoom, oldZoom, e);
		});
		// 地图点击事件
		$vm.map.on("click", (e) => {
			console.log("点击坐标", e.latlng)
			$vm.handleMapClick(e); //外部调用
		});
		// 地图双击事件
		$vm.map.on("dblclick", (e) => {});
		// 地图鼠标移动事件
		$vm.map.on("mousemove", (e) => {});
		// 加载天地图
		let tdtUrl = ''
		if (isLight) {
			tdtUrl = this.qgUrlDay
		} else {
			tdtUrl = this.mapUrl;
			// tdtUrl = this.mapUrl;
		}
		if ($vm.sys === 'police') {
			let gaUrlDay=C.ADDS.isPolice?this.kyglUrlDay:this.qgUrlDay;
			let gaUrlNight=C.ADDS.isPolice?this.kyglUrlNight:this.mapUrl;
			// 地图底图
			this.policeNightLayer = L.supermap.tiledMapLayer(gaUrlNight, {
				opacity: 1,
				transparent: true
			})
			this.policeDayLayer = L.supermap.tiledMapLayer(gaUrlDay, {
				opacity: 1,
				transparent: true
			})
			$vm.map.addLayer(this.policeNightLayer);

			// 初始化四川重庆详细地图的白版黑版：
			if ($vm.config.superMap.sccq){
				this.policeSccqUrlNightLayer = L.supermap.tiledMapLayer(this.sccqUrlDay, {
					opacity: $vm.config.superMap.zoom >= 5 ? 1 : 0,
					transparent: true
				});
				this.policeSccqUrlDayLayer = L.supermap.tiledMapLayer(this.sccqUrlNight, {
					opacity: $vm.config.superMap.zoom >= 5 ? 1 : 0,
					transparent: true
				});
				$vm.map.addLayer(this.policeSccqUrlDayLayer)

			}

			// 添加比例尺
			// $vm.map.addControl(new SuperMap.Control.ScaleLine(), new SuperMap.Pixel(500,500))
			// $vm.map.addControl(new SuperMap.Control.OverviewMap({maximized: true}))
			// L.control.scale({
			// 	position:'bottomright'
			// }).addTo($vm.map)

			// L.control.scale({position:'bottomright'}).addTo($vm.map) // 正确写法
			L.control.scale().addTo($vm.map) // 正确写法
		}
		// 其他地图
		 else {
			// 地图底图
			this.policeNightLayer = L.supermap.tiledMapLayer(this.mapUrl, {
				opacity: 1,
				transparent: true
			});
			this.policeDayLayer = L.supermap.tiledMapLayer(this.qgUrlDay, {
				opacity: 1,
				transparent: true
			})
			this.baseLayer = this.policeNightLayer.addTo($vm.map);
			
			// 初始化四川重庆详细地图的白版黑版：
			if ($vm.config.superMap.sccq){
				this.policeSccqUrlNightLayer = L.supermap.tiledMapLayer(this.sccqUrlNight, {
					opacity: $vm.config.superMap.zoom >= 5 ? 1 : 0,
					transparent: true
				});
				this.policeSccqUrlDayLayer = L.supermap.tiledMapLayer(this.sccqUrlDay, {
					opacity: $vm.config.superMap.zoom >= 5 ? 1 : 0,
					transparent: true
				});
				this.sccqLayer = this.policeSccqUrlNightLayer.addTo($vm.map);
			}
		}

		let tlUrl = '';//铁路线
		let tlSccqUrl = '';//四川重庆铁路线
		if (isLight) {
			tlUrl = 'https://10.192.34.79/ky12555/iserver/services/map-ugcv5-RoadLine7a/rest/maps/RoadLine7a';
			tlUrl = C.ADDS.isPolice ? "http://10.202.157.27:8090/iserver/services/map-ugcv5-RoadLine7bq2/rest/maps/RoadLine7bq2" : tlUrl;
			tlSccqUrl = 'https://10.192.34.79/ky12555/iserver/services/map-ugcv5-RoadLine7ac/rest/maps/RoadLine7ac';
			tlSccqUrl = C.ADDS.isPolice ? "" : tlSccqUrl;
		} else {
			tlUrl = 'https://10.192.34.79/ky12555/iserver/services/map-ugcv5-RoadLine7bq3/rest/maps/RoadLine7bq3';
			tlUrl = C.ADDS.isPolice ? "http://10.202.157.27:8090/iserver/services/map-ugcv5-RoadLine7bq2/rest/maps/RoadLine7bq2" : tlUrl;
			tlSccqUrl = 'https://10.192.34.79/ky12555/iserver/services/map-ugcv5-RoadLine7bq22/rest/maps/RoadLine7bq2';
			tlSccqUrl = C.ADDS.isPolice ? "" : tlSccqUrl;
		}
		// 加载铁路线
		if ($vm.sys === 'police') {
			// // 公安自带铁路线
		} else{
			this.roadQgLayer = L.supermap.tiledMapLayer($vm.trainLineUrl || tlUrl, {
				opacity: $vm.config.superMap.zoom >= 5 ? 0 : 1,//$vm.config.superMap.zoom >= 5 ? 0 : 1,
				transparent: true
			}).addTo($vm.map);
			this.roadSccqLayer = L.supermap.tiledMapLayer($vm.trainLineUrl || tlSccqUrl, {
				opacity: $vm.config.superMap.zoom >= 5 ? 1 : 0,
				transparent: true
			}).addTo($vm.map);
		}
		if($vm.lightSkin){
			this.changePoliceLayer(true);
		}
	},
	/**--------------------------------------以下为地图事件-----------------------------------------*/
	// 切换天地图显示
	toggleBaseLayerVisible(){
		this.baseLayerVisible = this.baseLayerVisible===1?0:1;
		this.baseLayer.setOpacity(this.baseLayerVisible);
		if ($vm.config.superMap.sccq) {
			this.sccqLayer.setOpacity(this.baseLayerVisible)
		}
	},
	//////////////////地图框选列车
	// 判断点是否在多边形内
	isPointInPoly(pt, poly) {
		for (var isIn = false, i = -1, l = poly.length, j = l - 1; ++i < l; j = i) {
			(poly[i].y <= pt.y && pt.y < poly[j].y || poly[j].y <= pt.y && pt.y < poly[i].y) && pt.x < (poly[j].x - poly[i].x) *
				(pt.y - poly[i].y) / (poly[j].y - poly[i].y) + poly[i].x && (isIn = !isIn);
		}
		return isIn;
	},
	// 计算两点坐标之间的距离(米)
	getDistance(p1, p2) {
		const radLat1 = p1.lat * Math.PI / 180;
		const radLat2 = p2.lat * Math.PI / 180;
		const a = radLat1 - radLat2;
		const b = (p1.lng * Math.PI / 180) - (p2.lng * Math.PI / 180);

		let s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(
			b / 2), 2)));
		s = s * EARTH_RADIUS;
		return s;
	},
	// 获取缓冲区
	geoBufferAnalystProcess(latlng, radiu, radiuType, callback) {
		if (radiu === 0) {
			callback.call(null, []);
			return;
		}
		console.log(latlng, radiu, radiuType)
		var bufferAnalystService, geoBufferAnalystParams, resultLayer;
		// let serviceUrl = 'http://10.194.72.181:8090/iserver/services/spatialAnalysis-TieLuTu/restjsr/spatialanalyst'
		// var serviceUrl = "https://10.192.34.79/ky203/supermap/iserver/services/spatialAnalysis-TieLuTu/restjsr/spatialanalyst"; //缓冲区分析服务
		var serviceUrl = "http://10.192.125.65:8090/iserver/services/spatialAnalysis-0527/restjsr/spatialanalyst"; //缓冲区分析服务
		var marker = L.marker(latlng);
		bufferAnalystService = L.supermap.spatialAnalystService(serviceUrl);
		//对生成的线路进行缓冲区分析
		geoBufferAnalystParams = new SuperMap.GeometryBufferAnalystParameters({
			sourceGeometry: marker,
			sourceGeometrySRID: 4326,
			bufferSetting: new SuperMap.BufferSetting({
				endType: SuperMap.BufferEndType.ROUND,
				radiusUnit: SuperMap.BufferRadiusUnit.METER,
				leftDistance: new SuperMap.BufferDistance({
					value: radiu * 1000
				}),
				rightDistance: new SuperMap.BufferDistance({
					value: radiu * 1000
				}),
				semicircleLineSegment: 100
			})
		});
		bufferAnalystService.bufferAnalysis(geoBufferAnalystParams, (serviceResult) => {
			// L.geoJSON(serviceResult.result.resultGeometry).addTo($vm.map);
			var aa = serviceResult.result.resultGeometry.geometry.coordinates[0];
			var pointsList = aa[0];
			var DZ = [];
			for (var i = 0; i < pointsList.length; i++) {
				var xx = pointsList[i][0];
				var yy = pointsList[i][1];
				DZ[i] = [yy, xx];
			}
			var polygon = L.polygon(DZ, {
				color: 'red'
			});
			console.log(polygon)
			// polygon.addTo($vm.map);
			this.overlayAnalystProcess(polygon, "地震", (features) => {
				const ps = [];
				features.forEach(f => {
					if (f.geometry.type === "LineString") {
						// [线名,起点,终点,半径类型(2-检查,1-封锁,3-限速)]
						ps.push(["成贵客专", f.geometry.coordinates[0], f.geometry.coordinates[f.geometry.coordinates.length - 1],
							radiuType
						]);
					} else if (f.geometry.type === "MultiLineString") {
						f.geometry.coordinates.forEach(ff => {
							ps.push(["成贵客专", ff[0], ff[ff.length - 1], radiuType]);
						});
					}
				});
				callback && callback.call(null, ps);
			});
		});
	},

	// 切换黑白版本
	changePoliceLayer(val){
		console.log(val);
		if($vm.sys!=="police"){
			$vm.map.removeLayer(this.baseLayer);//清除底图
			$vm.map.removeLayer(this.roadQgLayer);//清除全图铁路线
			$vm.map.removeLayer(this.roadSccqLayer);//清除四川重庆铁路线
			// 如果配置里面显示重庆成都
			if ($vm.config.superMap.sccq){
				$vm.map.removeLayer(this.sccqLayer);
			}
			if(val){//白
				this.baseLayer = this.policeDayLayer;
				this.sccqLayer = this.policeSccqUrlDayLayer;
			}else{
				this.baseLayer = this.policeNightLayer;
				this.sccqLayer = this.policeSccqUrlNightLayer;
			}
			$vm.map.addLayer(this.baseLayer);// 添加底图
			if ($vm.config.superMap.sccq){
				$vm.map.addLayer(this.sccqLayer);
			}
			// 黑版，加载铁路铁
			if(!val){
				$vm.map.addLayer(this.roadQgLayer);//添加全图铁路线
				$vm.map.addLayer(this.roadSccqLayer);//添加四川重庆铁路线
				// 全图铁路线
				if (newZoom >= 5) {
					this.roadSccqLayer.setOpacity(0);
				} else {
					this.roadSccqLayer.setOpacity(1);
				}
				// 四川重庆铁路线
				if($vm.config.superMap.sccq){
					if (newZoom >= 5) {
						this.roadSccqLayer.setOpacity(1)
					} else {
						this.roadSccqLayer.setOpacity(0)
					}
				}
			}
			return;
		}
		if (val) { // 如果切换成白版
			// 移除底图
			$vm.map.removeLayer(this.policeNightLayer);
			// 如果配置里面显示重庆成都
			if ($vm.config.superMap.sccq){
				$vm.map.removeLayer(this.policeSccqUrlNightLayer);
			}
			// 移除铁路线
			// $vm.map.removeLayer(this.policeRoadQgNightLayer);
			// if ($vm.config.superMap.sccq){
			// 	$vm.map.removeLayer(this.policeRoadSccqNightLayer);
			// }
			// 添加底图
			$vm.map.addLayer(this.policeDayLayer);
			if ($vm.config.superMap.sccq){
				$vm.map.addLayer(this.policeSccqUrlDayLayer);
			}
			// 添加铁路线
			// $vm.map.addLayer(this.policeRoadQgDayLayer);
			// if ($vm.config.superMap.sccq){
			// 	$vm.map.addLayer(this.policeRoadSccqDayLayer);
			// }

		} else {
			$vm.map.removeLayer(this.policeDayLayer);
			// // 如果配置里面显示重庆成都
			// if ($vm.config.superMap.sccq){
			// 	$vm.map.removeLayer(this.policeSccqUrlDayLayer);
			// }
			// 移除铁路线
			// $vm.map.removeLayer(this.policeRoadQgDayLayer);
			// if ($vm.config.superMap.sccq){
			// 	$vm.map.removeLayer(this.policeRoadSccqDayLayer);
			// }
			// 添加底图
			$vm.map.addLayer(this.policeNightLayer);
			// if ($vm.config.superMap.sccq){
			// 	$vm.map.addLayer(this.policeSccqUrlNightLayer);
			// }
			// 添加铁路线
			// $vm.map.addLayer(this.policeRoadQgNightLayer);
			// if ($vm.config.superMap.sccq){
			// 	$vm.map.addLayer(this.policeRoadSccqNightLayer);
			// }
		}

	},
	// 切找公安处管界
	changePoliceBond(item){
		this.policeBoundLayer && $vm.map.removeLayer(this.policeBoundLayer);
		this.policeBoundLayer = L.supermap.tiledMapLayer(this.policeBounds["url"+item.ID], {
			opacity: 1,
			transparent: true
		});
		$vm.map.addLayer(this.policeBoundLayer);
		if(item.ID==="0"){
			// console.log("configs.superMap.zoom",configs.superMap.zoomGA)
			$vm.map.setView(item.center, configs.superMap.zoomGA); //平移地图
		}else{
			$vm.map.setView(item.center, 4); //平移地图
		}
	},
	// 叠加分析---铁路线
	overlayAnalystProcess(polygon, type, callback) {
		// let servUrl = 'http://10.194.72.181:8090/iserver/services/spatialAnalysis-TieLuTu/restjsr/spatialanalyst'
		let servUrl = "http://10.192.125.65:8090/iserver/services/spatialAnalysis-0527/restjsr/spatialanalyst"; //铁路线裁剪服务
		// let servUrl = "https://10.192.34.79/ky203/supermap/iserver/services/spatialAnalysis-TieLuTu/restjsr/spatialanalyst"; //铁路线裁剪服务
		const serv = L.supermap.spatialAnalystService(servUrl);
		const parameters = new SuperMap.DatasetOverlayAnalystParameters({
			// sourceDataset: "空间分析用线_1@KFKNEW",
			// sourceDataset: "全国铁路线_1@铁路",
			sourceDataset: "空间分析用线_1_1@oooo",
			// sourceDataset: "空间分析用线_4326@KFKNEW",
			operateRegions: [polygon],
			tolerance: 0.00001,
			operation: SuperMap.OverlayOperationType.CLIP
		});
		serv.overlayAnalysis(parameters, function(sr) {
			console.log(sr)
			if(sr.error){
				callback.call(null, []);
			}else{
				callback.call(null, sr.result.recordset.features.features);
			}
			// L.geoJSON(sr.result.recordset.features).addTo($vm.map);
		});
	},

	// 将经纬度数组转为x,y坐标
	lonLatArrayToXY(points) {
		return points.map(p => {
			return {
				x: p[0],
				y: p[1]
			};
		});
	},

}
