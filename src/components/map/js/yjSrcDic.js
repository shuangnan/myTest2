import com from '../../../assets/com'
import dayjs from 'dayjs'
export default {
	/**
	 * 应急资源字典
	 */
	emergencyResourcesDic: {

		/**
		 * 字典条目格式
		 * 条目名称: 模块_资源项目名称 (如: 供电模块-供电臂 —— gd_gdb)
		 * visible: 控制该项是否显示的字段
		 * api: 查询该项资源使用的接口号
		 * sql: 调用查询接口的传参，如不需要传参则填写 []
		 * j: 资源位置经度字段，默认为 GPS_POINT_X
		 * w: 资源位置纬度字段，默认为 GPS_POINT_Y
		 * name: 应急资源名称
		 * desc: 应急资源统计表中显示的字段，key为字段名，text为字段含义
		 */

		'gd_gdb': {
			visible: 'gongDianOther.gd_sbss.ck_gdb',
			api: 'tyzd_zxy2002',
			sql: [['all', 'all', 'all']],
			j: 'GPS_POINT_X',
			w: 'GPS_POINT_Y',
			name: '供电臂',
			desc: [
				{
					key: 'LINE',
					text: '线别'
				},
				{
					key: 'DEPOT',
					text: '所属段'
				},
				{
					key: 'STN',
					text: '车站'
				},
				{
					key: 'BDS',
					text: '变电所',
				},
				{
					key: 'GDB',
					text: '供电臂'
				},
				{
					key: 'AREA',
					text: '停电影响范围'
				},
				{
					key: 'MILEAGE_START',
					text: '停电起始公里标'
				},
				{
					key: 'MILEAGE_END',
					text: '停电结束公里标'
				}
			]
		},
		'gd_bds': {
			visible: 'gongDianOther.gd_sbss.ck_bds',
			api: 'eqeh_zxy2034',
			sql: [['all', 'all']],
			j: 'GPS_POINT_X',
			w: 'GPS_POINT_Y',
			name: '变电所',
			desc: [
				{
					key: 'LINE_NAME',
					text: '线名'
				},
				{
					key: 'LINE_DIRECT',
					text: '行别'
				},
				{
					key: 'DEPOT',
					text: '所属单位'
				},
				{
					key: 'BDS_NAME',
					text: '变电所名称'
				},
				{
					key: 'GLB_MARK',
					text: '公里标'
				}
			]
		},
		'gd_yjdy': {
			visible: 'gongDianOther.gd_sbss.ck_yjdy',
			api: 'tyzd_zxy2003',
			sql: [['all']],
			j: 'GPS_POINT_X',
			w: 'GPS_POINT_Y',
			name: '应急电源',
			desc: [
				{
					key: 'LINE_NAME',
					text: '线别'
				},
				{
					key: 'STN_NAME',
					text: '设置地点'
				},
				{
					key: 'DEPOT',
					text: '设备管理单位'
				},
				{
					key: 'KVA',
					text: '变压器容量'
				},
				{
					key: 'TRACK',
					text: '接触网接入地点'
				},
				{
					key: 'GDB',
					text: '接触网连接支柱号'
				},
				{
					key: 'NOTE',
					text: '备注'
				}
			]
		},
		'gd_gdgdc': {
			visible: 'gongDianOther.gd_sbss.ck_yjc',
			api: 'tyzd_ggy2075',
			sql: [['', '']],
			j: 'GPS_POINT_X',
			w: 'GPS_POINT_Y',
			name: '供电轨道车',
			desc: [
				{
					key: 'LINE_NAME',
					text: '线名'
				},
				{
					key: 'DUAN_NAME',
					text: '段名'
				},
				{
					key: 'CJ',
					text: '车间'
				},
				{
					key: 'GQ',
					text: '工区'
				},
				{
					key: 'WORKTRAIN_TYPE',
					text: '车型'
				},
				{
					key: 'WORKTRAIN_NAME',
					text: '车号'
				},
				{
					key: 'TRAIN_STATES',
					text: '轨道车状态',
					formatter: (row, col, val, index) => {
						switch (val) {
							case '1': return '可用'
							case '2': return '不可用'
							case '3': return '备用'
							default: return '/'
						}
					}
				},
				{
					key: 'REASON',
					text: '不可用原因'
				},
				{
					key: 'PARK_PLACE',
					text: '日常停驻地点'
				},
				{
					key: 'WORK_RANGE',
					text: '主要抢修范围'
				},
				{
					key: 'STATION',
					text: '当前停留点'
				},
				{
					key: 'SJ_NAME',
					text: '司机姓名'
				},
				{
					key: 'SJ_PHONE',
					text: '司机电话'
				},
				{
					key: 'GL_NAME',
					text: '管理人员'
				},
				{
					key: 'GL_PHONE',
					text: '管理人员电话'
				},
				{
					key: 'SPEED',
					text: '构造速度'
				},
				{
					key: 'POWER',
					text: '功率'
				}
			]
		},
		'gd_dfx': {
			visible: 'gongDianOther.gd_jcw.ck_fxjyq',
			api: 'tyzd_zxy2004',
			sql: [],
			j: 'GPS_POINT_X',
			w: 'GPS_POINT_Y',
			name: '电分相',
			desc: [
				{
					key: 'NAME',
					text: '线名'
				},
				{
					key: 'ROW_TYPE',
					text: '行别',
					formatter: (row, col, val, index) => {
						switch (val) {
							case '8': return '上'
							case '9': return '下'
							case '10': return '单'
							default: return '/'
						}
					}
				},
				{
					key: 'CONSTRUCTION_TYPE',
					text: '施工单位'
				},
				// {
				// 	key: 'FK_DEVICE_TYOE_ID',
				// 	text: '设备类型',
				// 	formatter: (row, col, val, index) => {
				// 		switch (val) {
				// 			case '173': return '器件式'
				// 			case '174': return '关节式'
				// 			default: return '/'
				// 		}
				// 	}
				// },
				{
					key: 'IS_HIGHRAIL',
					text: '是否高铁设备',
					formatter: (row, col, val, index) => {
						switch (val) {
							case '0': return '否'
							case '1': return '是'
							default: return '/'
						}
					}
				},
				{
					key: 'DEVICE_LEVEL',
					text: '设备等级',
					formatter: (row, col, val, index) => {
						switch (val) {
							case '0': return '优良'
							case '1': return '合格'
							case '2': return '不合格'
							default: return '/'
						}
					}
				},
				{
					key: 'LENGTH',
					text: '长度'
				},
				{
					key: 'START_PILLAR_ID',
					text: '支柱号'
				},
				{
					key: 'USEDATE',
					text: '投用日期'
				}
			]
		},
		'gw_gwgdc': {
			visible: 'config.gw_sb.gdc',
			api: 'tyzd_ggy2072',
			sql: [['', '']],
			j: 'GPS_POINT_X',
			w: 'GPS_POINT_Y',
			name: '工务轨道车',
			desc: [
				{
					key: 'LINE',
          text: '线路名称'
				},
        {
          key: 'DW',
          text: '所属站段'
        },
        {
          key: 'CJ',
          text: '所属车间'
        },
        {
          key: 'GQ',
          text: '所属工区'
        },
        {
          key: 'TRAIN_NO',
          text: '轨道车号'
        },
        {
          key: 'TYPE',
          text: '轨道车种类'
        },
        {
          key: 'TRAIN_TYPE',
          text: '轨道车型号'
        },
        {
          key: 'PLACE',
          text: '日常停驻地点'
        },
        {
          key: 'GPS',
          text: '当前停留点'
        },
        {
          key: 'TRAIN_STATES',
          text: '轨道车状态',
          formatter: (row, col, val, index) => {
            switch (val) {
              case '1': return '可用'
              case '2': return '不可用'
              case '3': return '备用'
              default: return '/'
            }
          }
        },
        {
          key: 'REASON',
          text: '不可用原因'
        },
        {
          key: 'BEGIN_DATE',
          text: '值守开始日期'
        },
        {
          key: 'END_DATE',
          text: '值守结束日期'
        },
        {
          key: 'SPEED',
          text: '构造速度'
        },
        {
          key: 'POWER',
          text: '功率'
        },
        {
          key: 'PERSON_NAME',
          text: '联系人'
        },
        {
          key: 'PERSON_PHONE',
          text: '联系人电话'
        },
        {
          key: 'CJ_NAME',
          text: '综合机修车间值班人员'
        },
        {
          key: 'CJ_PHONE',
          text: '综合机修车间值班人员联系电话'
        }
			]
		},
    'gw_fhksd': {
      visible: 'config.gw_sb.ksd',
      api: 'tyzd_ggy2083',
      sql: [['', '1']],
      j: 'GPS_POINT_X',
      w: 'GPS_POINT_Y',
      name: '防洪看守点',
      desc: [
        {
          key: 'LINE_NAME',
          text: '线名'
        },
        {
          key: 'LINE_TYPE',
          text: '线别'
        },
        {
          key: 'LINE_DIRECT',
          text: '行别'
        },
        {
          key: 'LINE_SIDE',
          text: '侧别'
        },
        {
          key: 'FLOOD_LEVEL',
          text: '防洪等级'
        },
        {
          key: 'START_STN',
          text: '起始车站'
        },
        {
          key: 'END_STN',
          text: '终止车站'
        },
        {
          key: 'START_MILEAGE',
          text: '起始里程'
        },
        {
          key: 'END_MILEAGE',
          text: '终点里程'
        },
        {
          key: 'LINE_LENGTH',
          text: '长度'
        },
        {
          key: 'DEV_NAME',
          text: '设备名称'
        },
        {
          key: 'RISK',
          text: '预计风险'
        },
        {
          key: 'MEASURE',
          text: '预防措施'
        },
        {
          key: 'CALL_NO',
          text: '呼叫编号'
        },
        {
          key: 'GUARD',
          text: '看守期间'
        },
        {
          key: 'KSDDH',
          text: '看守点电话'
        },
        {
          key: 'KSDSH',
          text: '看守点市话'
        },
        // {
        //   key: 'LXD',
        //   text: '联系点职工姓名'
        // },
        // {
        //   key: 'LXDDH',
        //   text: '联系点职工电话'
        // },
        // {
        //   key: 'KSG1',
        //   text: '看守工姓名'
        // },
        // {
        //   key: 'KSGDH1',
        //   text: '看守工电话'
        // },
        // {
        //   key: 'KSG2',
        //   text: '看守工姓名'
        // },
        // {
        //   key: 'KSGDH2',
        //   text: '看守工电话'
        // },
        // {
        //   key: 'KSG3',
        //   text: '看守工姓名'
        // },
        // {
        //   key: 'KSGDH3',
        //   text: '看守工电话'
        // },
        // {
        //   key: 'ZD',
        //   text: '最近站点'
        // },
        // {
        //   key: 'ZDDH',
        //   text: '最近站点电话'
        // }
      ]
    },
		'gw_fhqxcljjj': {
			visible: 'config.gw_sb.qx',
			api: 'tyzd_ggy2125',
			sql: [['', '']],
			j: 'GPS_POINT_X',
			w: 'GPS_POINT_Y',
			name: '防洪抢险材料及机具',
			desc: [
				{
					key: 'LINE_NAME',
					text: '线名'
				},
				{
					key: 'SAVE_PLACE',
					text: '存放地点'
				},
				{
					key: 'MILEAGE',
					text: '里程'
				},
				{
					key: 'DUAN_NAME',
					text: '联系单位'
				},
				{
					key: 'RAIL',
					text: '钢轨（根）'
				},
				{
					key: 'WOODEN_SLEEPER',
					text: '木枕（根）'
				},
				{
					key: 'WASTE_SLEEPER',
					text: '废砼枕（根）'
				},
				{
					key: 'BALLAST',
					text: '道渣（方）'
				},
				{
					key: 'RUBBLE',
					text: '片石（方）'
				},
				{
					key: 'TEMPORARY_SLEEPER',
					text: '铺便线木枕及扣件（米）'
				},
				{
					key: 'CONSTRUCTION_BEAM8',
					text: '施工便梁（孔）（8m）'
				},
				{
					key: 'CONSTRUCTION_BEAM16',
					text: '施工便梁（孔）（16m）'
				},
				{
					key: 'CONSTRUCTION_BEAM24',
					text: '施工便梁（孔）（24m）'
				},
				{
					key: 'PREPAREWAR_BEAM16',
					text: '战备梁（孔）（16m）'
				},
				{
					key: 'PREPAREAWR_BEAM32',
					text: '战备梁（孔）（32m）'
				},
				{
					key: 'LOADER',
					text: '装载机（台）'
				},
				{
					key: 'DIGGER',
					text: '挖掘机（台）'
				},
				{
					key: 'STEEL_ARCH',
					text: '钢拱架（榀）'
				},
				{
					key: 'WATER_FRAME',
					text: '隧道引水板（块）'
				},
				{
					key: 'PASSIVE_NET',
					text: '防护网被动网（m2）'
				},
				{
					key: 'ACTIVE_NET',
					text: '防护网主动网（m2）'
				},
				{
					key: 'STEEL_STRIP',
					text: 'W钢带（米）'
				},
				{
					key: 'ANCHOR',
					text: '自进式锚杆（套）'
				},
				{
					key: 'BULLDOZER',
					text: '推土机（台）'
				},
				{
					key: 'REMARKS',
					text: '备注'
				}
			]
		},
		'dw_4g': {
			name: '4G应急通信设备',
			visible: 'config.dw_sb.dw_4g',
			api: 'eqeh_zxy2050',
			sql: [],
			j: 'GPS_POINT_X',
			w: 'GPS_POINT_Y',
			desc: [
				{
					text: '线名',
					key: 'LINE_NAME'
				},
				{
					text: '线路等级',
					key: 'LINE_LEVEL'
				},
				{
					text: '车间',
					key: 'WORKSHOP'
				},
				{
					text: '工区',
					key: 'WORKAREA'
				},
				{
					text: '临近车站',
					key: 'STN_NAME'
				},
				{
					text: '编号',
					key: 'NUM'
				},
				{
					text: '设备状况',
					key: 'STATUS'
				},
				{
					text: '故障原因及送修情况',
					key: 'BROKE'
				},
				{
					text: '管理人员联系电话',
					key: 'CONTACT'
				},
				{
					text: '备注',
					key: 'NOTE'
				}
			]
		},
		'dw_gddlsb': {
			visible: 'config.dw_sb.dw_gdsb',
			name: '轨道电路设备',
			api: 'eqeh_zxy2046',
			sql: [['0']],
			j: 'GPS_POINT_X',
			w: 'GPS_POINT_Y',
			desc: [
				{
					key: 'CODE',
					text: '设备编号'
				},
				{
					key: 'RAILWAY_STATION_NAME',
					text: '站名'
				},
				{
					key: 'LINE_TYPE',
					text: '线路类型'
				},
				{
					key: 'DEVICE_CLASSIFY',
					text: '设备等级'
				},
				{
					key: 'START_STATION_NAME',
					text: '起始站名'
				},
				{
					key: 'END_STATION_NAME',
					text: '结束站名'
				},
				{
					text: '公里标',
					key: 'KILOMETER_POST'
				}
			]
		},
		'dw_lksb': {
			visible: 'config.dw_sb.dw_lksb',
			api: 'eqeh_zxy2052',
			sql: [],
			name: '有源应答器',
			j: 'GPS_POINT_X',
			w: 'GPS_POINT_Y',
			desc: [
				{
					key: 'CODE',
					text: '设备编号'
				},
				{
					key: 'RAILWAY_STATION_NAME',
					text: '站名'
				},
				{
					key: 'LINE_TYPE',
					text: '线路类型'
				},
				{
					key: 'DEVICE_CLASSIFY',
					text: '设备类型'
				},
				{
					key: 'START_STATION_NAME',
					text: '起始站名'
				},
				{
					key: 'END_STATION_NAME',
					text: '结束站名'
				},
				{
					text: '公里标',
					key: 'KILOMETER_POST'
				}
			],
			respFilter: function (res) {
				// console.log(res)
				return res.filter((r) => {
					return JSON.stringify(r).includes('有源')
				})
			}
		},
		'dw_lksb_w': {
			visible: 'config.dw_sb.dw_lksb_w',
			api: 'eqeh_zxy2052',
			sql: [],
			name: '无源应答器',
			j: 'GPS_POINT_X',
			w: 'GPS_POINT_Y',
			desc: [
				{
					key: 'CODE',
					text: '设备编号'
				},
				{
					key: 'RAILWAY_STATION_NAME',
					text: '站名'
				},
				{
					key: 'LINE_TYPE',
					text: '线路类型'
				},
				{
					key: 'DEVICE_CLASSIFY',
					text: '设备类型'
				},
				{
					key: 'START_STATION_NAME',
					text: '起始站名'
				},
				{
					key: 'END_STATION_NAME',
					text: '结束站名'
				},
				{
					text: '公里标',
					key: 'KILOMETER_POST'
				}
			],
			respFilter: function (res) {
				// console.log(res)
				return res.filter((r) => {
					return JSON.stringify(r).includes('无源')
				})
			}
		},
		'dw_dcrxsb': {
			visible: 'config.dw_sb.dw_dccxsb',
			api: 'tyzd_zxy2033',
			sql: [{
				LINE_NAME: 'all',
				DEPOT: 'all',
				STATION: 'all',
				PSB_NO: 'all',
				CONTROL_NAME: 'all',
				CONTROL_NO: 'all'
			}],
			name: '道岔融雪设备',
			j: 'GPS_POINT_X',
			w: 'GPS_POINT_Y',
			desc: [
				{
					key: 'LINE_NAME',
					text: '线别'
				},
				{
					key: 'WORKSHOP',
					text: '车间'
				},
				{
					key: 'STATION',
					text: '车站'
				},
				{
					key: 'PSB_NO',
					text: '供电箱编号'
				},
				{
					key: 'CONTROL_NAME',
					text: '融雪控制柜名称'
				},
				{
					key: 'CONTROL_NO',
					text: '控制道岔名称'
				},
				{
					text: '设备厂家',
					key: 'FACTORY'
				}
			]
		},
		'dw_xhj': {
			visible: 'config.dw_sb.dw_xhj',
			api: 'eqeh_zxy2046',
			sql: [['2']],
			name: '信号机',
			j: 'GPS_POINT_X',
			w: 'GPS_POINT_Y',
			desc: [
				{
					key: 'CODE',
					text: '设备编号'
				},
				{
					key: 'RAILWAY_STATION_NAME',
					text: '站名'
				},
				{
					key: 'LINE_TYPE',
					text: '线路类型'
				},
				{
					key: 'DEVICE_CLASSIFY',
					text: '设备等级'
				},
				{
					key: 'START_STATION_NAME',
					text: '起始站名'
				},
				{
					key: 'END_STATION_NAME',
					text: '结束站名'
				},
				{
					text: '公里标',
					key: 'KILOMETER_POST'
				}
			]
		},
		'dw_dc': {
			visible: 'config.dw_sb.dw_dx',
			api: 'eqeh_zxy2046',
			sql: [['3']],
			name: '道岔',
			j: 'GPS_POINT_X',
			w: 'GPS_POINT_Y',
			desc: [
				{
					key: 'CODE',
					text: '设备编号'
				},
				{
					key: 'RAILWAY_STATION_NAME',
					text: '站名'
				},
				{
					key: 'LINE_TYPE',
					text: '线路类型'
				},
				{
					key: 'DEVICE_CLASSIFY',
					text: '设备等级'
				},
				{
					key: 'START_STATION_NAME',
					text: '起始站名'
				},
				{
					key: 'END_STATION_NAME',
					text: '结束站名'
				},
				{
					text: '公里标',
					key: 'KILOMETER_POST'
				}
			]
		},
		'jw_jylc': {
			visible: 'jiWuOther.jw_cx.jyc',
			api: 'eqeh_zxy2067',
			sql: [
				{
					'TRAIN_TYPE': '1'
				}
			],
			name: '救援列车',
			j: 'GPS_POINT_X',
			w: 'GPS_POINT_Y',
			desc: [
				{
					key: 'DEPOT',
					text: '担当机务段'
				},
				{
					key: 'TRAIN_NAME',
					text: '救援列车名称'
				},
				{
					key: 'DIRECTION',
					text: '主救方向'
				},
				{
					key: 'CRANE_MODEL',
					text: '起重机型号'
				},
				{
					key: 'TRAIN_SPEED',
					text: '车辆限速'
				},
				{
					key: 'CRANE_SPEED',
					text: '起重机限速'
				},
				{
					key: 'PLACE',
					text: '设置地点'
				},
				{
					key: 'NUM',
					text: '列车编组'
				},
				{
					key: 'REMARKS',
					text: '备注'
				}
			]
		},
		'jw_rbnrjc': {
			visible: 'jiWuOther.jw_cx.rbnrjc',
			api: 'eqeh_zxy2067',
			sql: [
				{
					TRAIN_TYPE: '2'
				}
			],
			name: '热备内燃机车',
			j: 'GPS_POINT_X',
			w: 'GPS_POINT_Y',
			desc: [
				{
					key: 'DEPOT',
					text: '担当机务段'
				},
				{
					key: 'TRAIN_NAME',
					text: '机车名称'
				},
				{
					key: 'HOT_MODEL',
					text: '热备机型'
				},
				{
					key: 'HTIME_BEGIN',
					text: '热备时间',
					formatter: (row, col, val, index) => {
						return `${row.HTIME_BEGIN} - ${row.HTIME_END}`
					}
				},
				{
					key: 'PLACE',
					text: '设置地点'
				},
				{
					key: 'REMARKS',
					text: '备注'
				}
			]
		},
		'jw_rbdljc': {
			visible: 'jiWuOther.jw_cx.rbdljc',
			api: 'eqeh_zxy2067',
			sql: [
				{
					TRAIN_TYPE: '3'
				}
			],
			name: '热备电力机车',
			j: 'GPS_POINT_X',
			w: 'GPS_POINT_Y',
			desc: [
				{
					key: 'DEPOT',
					text: '担当机务段'
				},
				{
					key: 'TRAIN_NAME',
					text: '机车名称'
				},
				{
					key: 'HOT_MODEL',
					text: '热备机型'
				},
				{
					key: 'HTIME_BEGIN',
					text: '热备时间',
					formatter: (row, col, val, index) => {
						return `${row.HTIME_BEGIN} - ${row.HTIME_END}`
					}
				},
				{
					key: 'PLACE',
					text: '设置地点'
				},
				{
					key: 'REMARKS',
					text: '备注'
				}
			]
		},
		'jw_jwdpdtscz': {
			visible: 'jiWuOther.jw_fw.jwcz',
			api: 'tyzd_ggy2027',
			sql: [],
			name: '机外大坡道特殊车站',
			j: 'GPS_POINT_X',
			w: 'GPS_POINT_Y',
			desc: [
				{
					key: 'DUAN_NAME',
					text: '段名'
				},
				{
					key: 'LINE_NAME',
					text: '线名'
				},
				{
					key: 'LINE_TYPE',
					text: '行别',
					formatter: (row, col, val, index) => {
						switch (row.LINE_TYPE) {
							case '0': return '上行'
							case '1': return '下行'
							case '2': return '单线'
							default: return ''
						}
					}
				},
				{
					key: 'STATION_NAME',
					text: '站名'
				},
				{
					key: 'SLOPE',
					text: '坡度'
				}
			]
		},
		'ys_ddjc': {
			visible: 'yunShuOther.ys_dcjc.ck_ddjc',
			api: 'tyzd_qw2001',
			sql: [
				{
					TYPE: '3'
				}
			],
			name: '调度机车',
			j: 'GPS_POINT_X',
			w: 'GPS_POINT_Y',
			desc: [
				{
					key: 'DD_DEPOT',
					text: '段别'
				},
				{
					key: 'DD_STATION',
					text: '车站'
				},
				{
					key: 'DD_TYPE',
					text: '机型'
				},
				{
					key: 'DD_RANGE',
					text: '作业范围'
				}
			]
		},
		'ys_zydcjc': {
			visible: 'yunShuOther.ys_dcjc.ck_zydc',
			api: 'tyzd_qw2001',
			sql: [
				{
					TYPE: '1'
				}
			],
			name: '专用调车机车',
			j: 'GPS_POINT_X',
			w: 'GPS_POINT_Y',
			desc: [
				{
					key: 'ZD_DEPOT',
					text: '段别'
				},
				{
					key: 'ZD_STATION',
					text: '车站'
				},
				{
					key: 'ZD_TYPE',
					text: '车型'
				},
				{
					key: 'ZD_NUM',
					text: '台数'
				},
				{
					key: 'ZD_CODE',
					text: '机车号'
				}
			]
		},
		'cl_byct': {
			visible: 'cheLiangOther.bycz',
			api: 'tyzd_zxy2018',
			sql: function () {
				return [
					{
						S_DATE: dayjs().format('YYYY-MM-DD')
					}
				]
			},
			sqlGenerator: function () {
				return [
					{
						S_DATE: dayjs().format('YYYY-MM-DD')
					}
				]
			},
			name: '备用车体',
			j: 'GPS_POINT_X',
			w: 'GPS_POINT_Y',
			desc: [
				{
					key: 'S_BELONGPLACE',
					text: '配属所'
				},
				{
					key: 'S_MODEL',
					text: '车型'
				},
				{
					key: 'S_CARNUM',
					text: '车号'
				},
				{
					key: 'S_DETAIL_STATUS',
					text: '状态'
				},
				{
					key: 'ZGYYSD',
					text: '速度等级'
				},
				{
					key: 'S_DATE',
					text: '日期'
				},
				{
					key: 'S_EXPLAIN',
					text: '备注'
				}
			]
		},
		'hq_shc': {
			visible: 'tuFangOther.sbss.shc',
			api: 'eqeh_zxy2038',
			sql: [['all']],
			name: '生活车',
			j: 'GPS_POINT_X',
			w: 'GPS_POINT_Y',
			desc: [
				{
					key: 'DEPOT',
					text: '成都生活段'
				},
				{
					key: 'NAME',
					text: '应急机具名称'
				},
				{
					key: 'TYPE',
					text: '规格型号'
				},
				{
					key: 'UNIT',
					text: '计量单位'
				},
				{
					key: 'AMOUNT',
					text: '数量'
				},
				{
					key: 'LOCATION',
					text: '储备地点'
				},
				{
					key: 'STATION_AREA',
					text: '应急辐射站区'
				},
				{
					key: 'REMARKS',
					text: '生活车'
				},
				{
					key: 'STATION',
					text: '地点'
				}
			]
		},
		'hq_wsjds': {
			visible: 'tuFangOther.sbss.wsjds',
			api: 'tyzd_ggy2077',
			sql: [],
			name: '卫生监督所',
			j: 'GPS_POINT_X',
			w: 'GPS_POINT_Y',
			desc: [
				{
					key: 'NAME',
					text: '卫生单位名称'
				},
				{
					key: 'PLACE',
					text: '地点'
				},
				{
					key: 'PEOPLE',
					text: '人员'
				},
				{
					key: 'JOB',
					text: '工作内容'
				}
			]
		},
		'hq_jks': {
			visible: 'tuFangOther.sbss.jks',
			api: 'tyzd_ggy2078',
			sql: [],
			name: '疾控所',
			j: 'GPS_POINT_X',
			w: 'GPS_POINT_Y',
			desc: [
				{
					key: 'NAME',
					text: '卫生单位名称'
				},
				{
					key: 'PLACE',
					text: '地点'
				},
				{
					key: 'PEOPLE',
					text: '人员'
				},
				{
					key: 'JOB',
					text: '工作内容'
				}
			]
		},
		'hq_scd': {
			visible: 'tuFangOther.sbss.scd',
			api: 'eqeh_zxy2041',
			sql: [['all']],
			name: '送餐点',
			j: 'GPS_POINT_X',
			w: 'GPS_POINT_Y',
			desc: [
				{
					key: 'STN_NAME',
					text: '送餐点'
				},
				{
					key: 'STN_CODE',
					text: '送餐点码'
				},
				{
					key: 'STN_TMIS',
					text: '送餐点TMIS'
				},
				{
					key: 'STN_UNIT',
					text: '所属站段'
				},
				{
					key: 'SC_NAME',
					text: '送餐员姓名'
				},
				{
					key: 'SC_POST',
					text: '职务'
				},
				{
					key: 'SC_CALL',
					text: '电话'
				},
				{
					key: 'MEMO',
					text: '备注'
				}
			]
		},
		'hq_gy': {
			visible: 'tuFangOther.sbss.gy',
			api: 'eqeh_zxy2040',
			sql: [],
			name: '公寓',
			j: 'GPS_POINT_X',
			w: 'GPS_POINT_Y',
			desc: [
				{
					key: 'NAME',
					text: '名称'
				}
			]
		},
		'hy_ydszthyx': {
			visible: 'hy_sbss_ydszthwx.visible',
			api: 'tyzd_zxy2008',
			sql: [
				{
					LINE_TYPE: '0'
				}
			],
			name: '有端式站台货物线',
			j: 'GPS_POINT_X',
			w: 'GPS_POINT_Y',
			desc: [
				{
					key: 'DW',
					text: '站段'
				},
				{
					key: 'STATION',
					text: '站名'
				},
				{
					key: 'LOCATION',
					text: '所属行政区域'
				},
				{
					key: 'LINE',
					text: '线路名称'
				},
				{
					key: 'ENABLE_LENGTH',
					text: '有效长(m)'
				},
				{
					key: 'CAR_CAPACITY',
					text: '客车数(辆)'
				}
			]
		},
		'hy_ycmzthwx': {
			visible: 'hy_sbss_ycmzthwx.visible',
			api: 'tyzd_zxy2008',
			sql: [
				{
					LINE_TYPE: '1'
				}
			],
			j: 'GPS_POINT_X',
			w: 'GPS_POINT_Y',
			name: '有侧面1.1m站台货物线',
			desc: [
				{
					key: 'DW',
					text: '站段'
				},
				{
					key: 'STATION',
					text: '站名'
				},
				{
					key: 'LOCATION',
					text: '所属市县区'
				},
				{
					key: 'PROVINCE',
					text: '省域'
				},
				{
					key: 'LINE',
					text: '线路名称'
				},
				{
					key: 'ENABLE_LENGTH',
					text: '有效长(m)'
				},
				{
					key: 'CAR_CAPACITY',
					text: '客车数(辆)'
				}
			]
		},
		'hy_ydsztzyx': {
			visible: 'hy_sbss_ydsztzyx.visible',
			api: 'tyzd_zxy2008',
			sql: [
				{
					LINE_TYPE: '2'
				}
			],
			name: '有端式站台的专用线线路',
			j: 'GPS_POINT_X',
			w: 'GPS_POINT_Y',
			desc: [
				{
					key: 'OWN_UNIT',
					text: '专用线产权单位'
				},
				{
					key: 'OWN_LINE_NAME',
					text: '专用线名称'
				},
				{
					key: 'STATION',
					text: '接轨站'
				},
				{
					key: 'LOCATION',
					text: '所属行政区域'
				},
				{
					key: 'OWN_HANDLE',
					text: '专用线货物办理范围'
				},
				{
					key: 'LINE',
					text: '作业线名称'
				},
				{
					key: 'ENABLE_LENGTH',
					text: '有效长(m)'
				},
				{
					key: 'CAR_CAPACITY',
					text: '客车数(辆)'
				}
			]
		},
		'hy_yjzzjgcl': {
			visible: 'hy_sbss_yjzzjgcl.visible',
			api: 'tyzd_zxy2010',
			sql: [],
			name: '应急装载站及常用加固材料',
			j: 'GPS_POINT_X',
			w: 'GPS_POINT_Y',
			desc: [
				{
					key: 'DW',
					text: '站段'
				},
				{
					key: 'STATION',
					text: '装车站'
				},
				{
					key: 'JGCL',
					text: '加固材料名称'
				},
				{
					key: 'CLDW',
					text: '单位'
				},
				{
					key: 'SL',
					text: '加固材料数量'
				},
				{
					key: 'JGGJ',
					text: '加固工具'
				},
				{
					key: 'GJSL',
					text: '加固工具数量'
				},
				{
					key: 'CZBZ',
					text: '日常维护保管人员'
				}
			]
		},
		'hy_yjzxll': {
			visible: 'hy_sbss_yjzxll.visible',
			api: 'tyzd_zxy2011',
			sql: [],
			name: '应急装卸劳力',
			j: 'GPS_POINT_X',
			w: 'GPS_POINT_Y',
			desc: [
				{
					key: 'DW',
					text: '站段'
				},
				{
					key: 'STATION',
					text: '车站'
				},
				{
					key: 'LOCATION',
					text: '行政区域'
				},
				{
					key: 'PEOPLE_NUM',
					text: '应急装卸人数'
				}
			]
		},
		'hy_lwyjqxjx': {
			visible: 'hy_sbss_lwyjqxjx.visible',
			api: 'tyzd_zxy2013',
			sql: [],
			name: '路外应急抢险机械',
			j: 'GPS_POINT_X',
			w: 'GPS_POINT_Y',
			desc: [
				{
					key: 'DW',
					text: '站段'
				},
				{
					key: 'STATION',
					text: '车站'
				},
				{
					key: 'LOCATION',
					text: '所属行政区域'
				},
				{
					key: 'STATION_PEOPLE',
					text: '车站负责人'
				},
				{
					key: 'STATION_PHONE',
					text: '车站负责人联系方式'
				},
				{
					key: 'SOCIAL_DW',
					text: '配合单位名称'
				},
				{
					key: 'SOCIAL_PEOPLE',
					text: '可配合汽车吊联系人'
				},
				{
					key: 'SOCIAL_PHONE',
					text: '可配合汽车吊联系人电话'
				},
				{
					key: 'MACHIEN_TYPE',
					text: '汽车吊规格型号'
				},
				{
					key: 'MACHINE_NUM',
					text: '台数'
				},
				{
					key: 'MACHINE_USE',
					text: '起重能力'
				},
				{
					key: 'DISTANCE',
					text: '配合单位离联系车站距离(km)'
				}
			]
		},
		'hy_lntjqxjx': {
			visible: 'hy_lntjqxjx',
			api: 'tyzd_zxy2012',
			sql: [
				{
					DW: 'all',
					WORK_STATION: 'all',
					MACHINE_NAME: 'all'
				}
			],
			name: '路内应急抢险机械',
			j: 'GPS_POINT_X',
			w: 'GPS_POINT_Y',
			desc: [
				{
					key: 'DW',
					text: '站段'
				},
				{
					key: 'LOCATION',
					text: '行政区域所属'
				},
				{
					key: 'MACHINE_NAME',
					text: '机械名称'
				},
				{
					key: 'MACHINE_USE',
					text: '主要用途'
				},
				{
					key: 'MACHINE_NUM',
					text: '台数'
				},
				{
					key: 'WORK_STATION',
					text: '作业站'
				}
			]
		},
		'hy_wxhyshwl': {
			visible: 'hy_sbss_wxhyshwl.visible',
			api: 'tyzd_zxy2014',
			sql: [],
			name: '危险货运施救信息网络及应急资源',
			j: 'GPS_POINT_X',
			w: 'GPS_POINT_Y',
			desc: [
				{
					key: 'ZD',
					text: '站段'
				},
				{
					key: 'ZM',
					text: '站名'
				},
				{
					key: 'XZQY',
					text: '所属行政区域'
				},
				{
					key: 'ZYX',
					text: '专用线'
				},
				{
					key: 'ZZSJ',
					text: '车站站长手机号'
				},
				{
					key: 'HYSJ',
					text: '货运负责人手机号'
				},
				{
					key: 'ZYXSJ',
					text: '专用线负责人手机号'
				},
				{
					key: 'JYD',
					text: '专业救援队名称'
				},
				{
					key: 'JYDLXDH',
					text: '专业救援队联系电话'
				},
				{
					key: 'WXHW',
					text: '办理危险货物品名'
				},
				{
					key: 'AQJC_DEV',
					text: '安全检测设备种类及数量'
				},
				{
					key: 'LDAQFH_DEV',
					text: '劳动安全防护用品种类及数量'
				},
				{
					key: 'TX_DEV',
					text: '通信设备及数量'
				},
				{
					key: 'SGYJ_DEV',
					text: '事故应急救援器材种类及数量'
				},
				{
					key: 'QT_DEV',
					text: '其他防护用品器材种类及数量'
				}
			]
		},
		'df_xs': {
			visible: 'houQingOther.xiaoxue',
			api: 'eqeh_zxy2017',
			sql: [],
			name: '小学',
			respFilter: function (res) {
				return res.filter((r) => {
					return r.SCHOOL_KIND === '小学'
				})
			},
			j: 'GPS_POINT_X',
			w: 'GPS_POINT_Y',
			desc: [
				{
					key: 'SCHOOL_NAME',
					text: '学校名称'
				},
				{
					key: 'SCHOOL_ADDRESS',
					text: '地址'
				}
			]
		},
		'df_zx': {
			visible: 'houQingOther.zhongxue',
			api: 'eqeh_zxy2017',
			sql: [],
			name: '中学',
			respFilter: function (res) {
				return res.filter((r) => {
					return r.SCHOOL_KIND === '初中'
				})
			},
			j: 'GPS_POINT_X',
			w: 'GPS_POINT_Y',
			desc: [
				{
					key: 'SCHOOL_NAME',
					text: '学校名称'
				},
				{
					key: 'SCHOOL_ADDRESS',
					text: '地址'
				}
			]
		},
		'df_gz': {
			visible: 'houQingOther.gaozhong',
			api: 'eqeh_zxy2017',
			sql: [],
			name: '高中',
			respFilter: function (res) {
				return res.filter((r) => {
					return r.SCHOOL_KIND === '高中'
				})
			},
			j: 'GPS_POINT_X',
			w: 'GPS_POINT_Y',
			desc: [
				{
					key: 'SCHOOL_NAME',
					text: '学校名称'
				},
				{
					key: 'SCHOOL_ADDRESS',
					text: '地址'
				}
			]
		},
		'df_zhongxiaoxue': {
			visible: 'houQingOther.zhongxiaoxue',
			api: 'eqeh_zxy2017',
			sql: [],
			name: '九年一贯制学校(中小学)',
			respFilter: function (res) {
				return res.filter((r) => {
					return r.SCHOOL_KIND === '九年一贯制学校（中小学校）'
				})
			},
			j: 'GPS_POINT_X',
			w: 'GPS_POINT_Y',
			desc: [
				{
					key: 'SCHOOL_NAME',
					text: '学校名称'
				},
				{
					key: 'SCHOOL_ADDRESS',
					text: '地址'
				}
			]
		},
		'df_chugaozhong': {
			visible: 'houQingOther.chugaozhong',
			api: 'eqeh_zxy2017',
			sql: [],
			name: '完全中学(初高中)',
			respFilter: function (res) {
				return res.filter((r) => {
					return r.SCHOOL_KIND === '完全中学（初中、高中）'
				})
			},
			j: 'GPS_POINT_X',
			w: 'GPS_POINT_Y',
			desc: [
				{
					key: 'SCHOOL_NAME',
					text: '学校名称'
				},
				{
					key: 'SCHOOL_ADDRESS',
					text: '地址'
				}
			]
		},
		'ky_ylzy': {
			visible: 'config.ky_sb.ky_sb_yl',
			api: 'tyzd_zxy2022',
			sql: [
				{
					HQ_TYPE: '0'
				}
			],
			name: '医疗资源',
			j: 'GPS_POINT_X',
			w: 'GPS_POINT_Y',
			desc: [
				{
					key: 'NAME',
					text: '名称'
				},
				{
					key: 'PHONE1',
					text: '电话1'
				},
				{
					key: 'PHONE2',
					text: '电话2'
				},
				{
					key: 'NOTE',
					text: '备注'
				}
			]
		},
		'ky_xfz': {
			visible: 'config.ky_sb.ky_sb_xf',
			api: 'tyzd_zxy2022',
			sql: [
				{
					HQ_TYPE: '1'
				}
			],
			name: '消防站',
			j: 'GPS_POINT_X',
			w: 'GPS_POINT_Y',
			desc: [
				{
					key: 'NAME',
					text: '名称'
				},
				{
					key: 'PHONE1',
					text: '电话1'
				},
				{
					key: 'PHONE2',
					text: '电话2'
				},
				{
					key: 'NOTE',
					text: '备注'
				}
			]
		},
		'ky_pcs': {
			visible: 'config.ky_sb.ky_sb_pcs',
			api: 'tyzd_zxy2022',
			sql: [
				{
					HQ_TYPE: '2'
				}
			],
			name: '派出所',
			j: 'GPS_POINT_X',
			w: 'GPS_POINT_Y',
			desc: [
				{
					key: 'NAME',
					text: '名称'
				},
				{
					key: 'PHONE1',
					text: '电话1'
				},
				{
					key: 'PHONE2',
					text: '电话2'
				},
				{
					key: 'NOTE',
					text: '备注'
				}
			]
		},
		'ky_yjys': {
			visible: 'config.ky_sb.ky_sb_yjys',
			api: 'tyzd_zxy2027',
			sql: [
				{
					DW_NAME: 'all',
					STATION_NAME: 'all'
				}
			],
			name: '应急饮食',
			j: 'GPS_POINT_X',
			w: 'GPS_POINT_Y',
			desc: [
				{
					key: 'DW_NAME',
					text: '站段'
				},
				{
					key: 'STATION_NAME',
					text: '站名'
				},
				{
					key: 'GC',
					text: '供餐（份）'
				},
				{
					key: 'GS',
					text: '供水（份）'
				},
				{
					key: 'YSLXR',
					text: '饮食供应联系人'
				},
				{
					key: 'YSLXDH',
					text: '饮食供应联系人联系电话'
				}
			]
		},
		'ky_fdwz': {
			visible: 'config.ky_sb.ky_sb_fdwz',
			api: 'tyzd_zxy2027',
			sql: [
				{
					DW_NAME: 'all',
					STATION_NAME: 'all'
				}
			],
			name: '防冻物资',
			j: 'GPS_POINT_X',
			w: 'GPS_POINT_Y',
			desc: [
				{
					key: 'DW_NAME',
					text: '站段'
				},
				{
					key: 'STATION_NAME',
					text: '站名'
				},
				{
					key: 'FHD',
					text: '防滑垫'
				},
				{
					key: 'GYY',
					text: '工业盐'
				},
				{
					key: 'CXGJ',
					text: '除雪工具'
				},
				{
					key: 'FHX',
					text: '防滑（草）鞋'
				}
			]
		},
		'ky_yjsscs': {
			visible: 'config.ky_sb.ky_sb_yjsscs',
			api: 'tyzd_zxy2027',
			sql: [
				{
					DW_NAME: 'all',
					STATION_NAME: 'all'
				}
			],
			name: '防冻物资',
			j: 'GPS_POINT_X',
			w: 'GPS_POINT_Y',
			desc: [
				{
					key: 'DW_NAME',
					text: '站段'
				},
				{
					key: 'STATION_NAME',
					text: '站名'
				},
				{
					key: 'YJD',
					text: '应急灯'
				},
				{
					key: 'YJSSCS',
					text: '应急疏散场所名称'
				},
				{
					key: 'SSCSMJ',
					text: '疏散场所面积'
				},
				{
					key: 'SSCSNL',
					text: '疏散场所候车能力'
				},
				{
					key: 'SSCSLXR',
					text: '疏散场所联系人'
				},
				{
					key: 'SSCSLXFS',
					text: '疏散场所联系人联系方式'
				},
				{
					key: 'SSJTFS',
					text: '疏散交通方式'
				}
			]
		}
	},
	/**
	 * 根据框选范围查询应急资源
	 * @param {Array} queryMatrix 查询条目矩阵
	 * @param {Array} queryRegion 查询区域范围
	 * @returns {Promise}
	 */
	queryEmergencyResources(queryMatrix = [], queryRegion = []) {
		return new Promise((resolve, reject) => {
			// 未选定查询资源或无查询范围时
			if (queryMatrix.length === 0 || queryRegion.length === 0) {
				reject('未选择任何应急资源或未划定查询范围')
			}
			console.log('查询应急资源范围', queryRegion)
			console.log('查询应急资源条目', queryMatrix)
			this.generateApiQueryParams(queryMatrix, queryRegion).then((p) => {
				com.getData(p, (res) => {
					try {
						console.log('查询应急资源结果', res.data)
						let response = {}
						for (let i in res.data) {
							let itemName = queryMatrix[parseInt(i)-1]
							let itemDic = this.emergencyResourcesDic[itemName]
							console.log(itemDic)
							response[itemName] = {
								...itemDic,
								source: itemDic.respFilter ? itemDic.respFilter(res.data[i]) : res.data[i]
							}
						}
						resolve(response)
					} catch (e) {
						reject(e)
					}
				})
			})
		})
	},
	/**
	 * 生成应急资源查询接口传参
	 * @param {Array} queryMatrix
	 * @param {Array} queryRegion
	 * @returns {Promise}
	 */
	generateApiQueryParams(queryMatrix = [], queryRegion = []) {
		return new Promise((resolve, reject) => {
			try {
				let sql = []
				let where = []
				let order = []
				queryMatrix.map((item) => {
					sql.push(this.emergencyResourcesDic[item].sqlGenerator ? this.emergencyResourcesDic[item].sqlGenerator() : this.emergencyResourcesDic[item].sql)
					where.push(this.emergencyResourcesDic[item].api)
					order.push({
						LON_KEY: this.emergencyResourcesDic[item].j,
						LAT_KEY: this.emergencyResourcesDic[item].w,
						TYPE: '1',
						POINT_LIST: queryRegion.map((pt) => {
							return [pt.y, pt.x]
						}),
						RADIUS: '10'
					})
				})
				resolve({
					c: 'eqeh_zxy9021',
					s: sql,
					w: where,
					o: order,
					url: 'https://10.192.126.203/GeneralProServlet'
				})
			} catch (e) {
				reject(e)
			}
		})
	}
}
