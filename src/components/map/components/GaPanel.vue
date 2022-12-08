<template>
  <div
    :style="{
        top:'50px',
				width: window.innerWidth > 3000?toolOpt.width:'280px',
				left: darkPanelHide?'-500px':toolOpt.left,
				bottom: window.innerWidth > 3000?toolOpt.bottom:'5px',
			}"
    class="big filter-con-light"
  >
    <div class="filter-change-tool" @click="config.controller.mini = !config.controller.mini"></div>

    <div class="tab">
      <div
        v-for="(activity, index) in activities"
        :key="index"
        @click="changeFilterTab(index+'')"
        :class="{ active: curMenu === index+''}"
        style="height:73px"
      >
        <span>{{activity.content}}</span>
      </div>
    </div>

    <div class="filter-body" @scroll="handleScroll($event)">
      <div style="scroll-behavior: smooth;">
        <!-- 物 -->
        <div ref="content_0" id="0">
          <div class="group-title-big">物</div>
          <div class="tab-block">
            <div>
              <div class="group-title-light">{{getTitle('铁路派出所')}}</div>
              <div class="group-body-light">
                <el-checkbox
                  v-model="config_ga.wu_pcs.wu_pcs_jjing"
                  @change="filterLayers('派出所_进京')"
                >
                  <i class="filter-icon jjing-light"></i>
                  <span>进京</span>
                </el-checkbox>
                <el-checkbox
                  v-model="config_ga.wu_pcs.wu_pcs_jjiang"
                  @change="filterLayers('派出所_进疆')"
                >
                  <i class="filter-icon jjiang-light"></i>
                  <span v-if="isPolice">进疆</span>
                </el-checkbox>
                <el-checkbox
                  v-model="config_ga.wu_pcs.wu_pcs_jzang"
                  @change="filterLayers('派出所_进藏')"
                >
                  <i class="filter-icon jzang-light"></i>
                  <span v-if="isPolice">进藏</span>
                </el-checkbox>
                <el-checkbox
                  v-model="config_ga.wu_pcs.wu_pcs_kysn"
                  @change="filterLayers('派出所_客运枢纽所')"
                >
                  <i class="filter-icon kysn-light"></i>
                  <span>客运枢纽所</span>
                </el-checkbox>
                <el-checkbox
                  v-model="config_ga.wu_pcs.wu_pcs_kya"
                  @change="filterLayers('派出所_客运A类所')"
                >
                  <i class="filter-icon kya-light"></i>
                  <span>客运A类所</span>
                </el-checkbox>
                <el-checkbox
                  v-model="config_ga.wu_pcs.wu_pcs_kyb"
                  @change="filterLayers('派出所_客运B类所')"
                >
                  <i class="filter-icon kyb-light"></i>
                  <span>客运B类所</span>
                </el-checkbox>
                <el-checkbox
                  v-model="config_ga.wu_pcs.wu_pcs_kyc"
                  @change="filterLayers('派出所_客运C类所')"
                >
                  <i class="filter-icon kyc-light"></i>
                  <span>客运C类所</span>
                </el-checkbox>
                <el-checkbox
                  v-model="config_ga.wu_pcs.wu_pcs_linea"
                  @change="filterLayers('派出所_线路A类所')"
                >
                  <i class="filter-icon linea-light"></i>
                  <span>线路A类所</span>
                </el-checkbox>
                <el-checkbox
                  v-model="config_ga.wu_pcs.wu_pcs_lineb"
                  @change="filterLayers('派出所_线路B类所')"
                >
                  <i class="filter-icon lineb-light"></i>
                  <span>线路B类所</span>
                </el-checkbox>
                <el-checkbox
                  v-model="config_ga.wu_pcs.wu_pcs_linec"
                  @change="filterLayers('派出所_线路C类所')"
                >
                  <i class="filter-icon linec-light"></i>
                  <span>线路C类所</span>
                </el-checkbox>
              </div>
            </div>

            <div>
              <div class="group-title-light">{{getTitle('沿线机构')}}</div>
              <div class="group-body-light">
                <el-checkbox
                  v-model="config_ga.wu_pcs.wu_pcs_tlpcs"
                  @change="filterLayers('派出所_全部铁路派出所')"
                >
                  <i class="filter-icon tlpcs-light"></i>
                  <span>铁路派出所</span>
                </el-checkbox>
                <!-- <el-checkbox v-model="config_ga.wu_yxjg.wu_yxjg_dfpcs" @change="filterLayers('沿线机构_地方派出所')"> -->
                <el-checkbox
                  v-model="config_ga.wu_pcs.wu_pcs_dfpcs"
                  @change="filterLayers('派出所_地方派出所')"
                >
                  <i class="filter-icon dfpcs-light"></i>
                  <span>地方派出所</span>
                </el-checkbox>
                <el-checkbox
                  v-model="config_ga.wu_yxjg.wu_yxjg_tlnb"
                  @change="filterLayers('沿线机构_铁路内部单位')"
                >
                  <i class="filter-icon tlnb-light"></i>
                  <span v-if="isPolice">铁路内部单位</span>
                </el-checkbox>
                <el-checkbox
                  v-model="config_ga.wu_yxjg.wu_yxjg_town"
                  @change="filterLayers('沿线机构_村镇')"
                >
                  <i class="filter-icon town-light"></i>
                  <span>村镇</span>
                </el-checkbox>
                <el-checkbox
                  v-model="config_ga.wu_yxjg.wu_yxjg_hospital"
                  @change="filterLayers('沿线机构_医院')"
                >
                  <i class="filter-icon hospital-light"></i>
                  <span>医院</span>
                </el-checkbox>
                <el-checkbox
                  v-model="config_ga.wu_yxjg.wu_yxjg_school"
                  @change="filterLayers('沿线机构_学校')"
                >
                  <i class="filter-icon school-light"></i>
                  <span>学校</span>
                </el-checkbox>
                <el-checkbox
                  v-model="config_ga.wu_yxjg.wu_yxjg_danger"
                  @change="filterLayers('沿线机构_危险品场所')"
                >
                  <i class="filter-icon danger-light"></i>
                  <span>危险品场所</span>
                </el-checkbox>
                <el-checkbox
                  v-model="config_ga.wu_yxjg.wu_yxjg_special"
                  @change="filterLayers('沿线机构_特种行业')"
                >
                  <i class="filter-icon special-light"></i>
                  <span>特种行业</span>
                </el-checkbox>
              </div>
            </div>

            <div>
              <div class="group-title-light">{{getTitle('设施设备')}}</div>
              <div class="group-body-light">
                <el-checkbox
                  v-model="config_ga.wu_sb.wu_sb_complex"
                  @change="filterLayers('设施设备_重点复杂区段')"
                >
                  <i class="filter-icon complex-light"></i>
                  <span>重点复杂区段</span>
                </el-checkbox>
                <el-checkbox
                  v-model="config_ga.wu_sb.wu_sb_bridge"
                  @change="filterLayers('设施设备_桥梁')"
                >
                  <i class="filter-icon bridge-light"></i>
                  <span v-if="isPolice">桥梁</span>
                </el-checkbox>
                <el-checkbox
                  v-model="config_ga.wu_sb.wu_sb_tunnel"
                  @change="filterLayers('设施设备_隧道')"
                >
                  <i class="filter-icon tunnel-light"></i>
                  <span v-if="isPolice">隧道</span>
                </el-checkbox>
                <el-checkbox
                  v-model="config_ga.wu_sb.wu_sb_culvert"
                  @change="filterLayers('设施设备_涵洞')"
                >
                  <i class="filter-icon culvert-light"></i>
                  <span>涵洞</span>
                </el-checkbox>
                <el-checkbox
                  v-model="config_ga.wu_sb.wu_sb_bds"
                  @change="filterLayers('设施设备_牵引变电所')"
                >
                  <i class="filter-icon bds-light"></i>
                  <span>牵引变电所</span>
                </el-checkbox>
                <el-checkbox v-model="config_ga.wu_sb.wu_sb_pds" @change="filterLayers('设施设备_配电所')">
                  <i class="filter-icon pds-light"></i>
                  <span>配电所</span>
                </el-checkbox>
                <el-checkbox v-model="config_ga.wu_sb.wu_sb_at" @change="filterLayers('设施设备_AT所')">
                  <i class="filter-icon at-light"></i>
                  <span>AT所</span>
                </el-checkbox>
                <el-checkbox
                  v-model="config_ga.wu_sb.wu_sb_sxjk"
                  @change="filterLayers('设施设备_三线接口')"
                >
                  <i class="filter-icon sxjk-light"></i>
                  <span>三线接口</span>
                </el-checkbox>
                <el-checkbox
                  v-model="config_ga.wu_sb.wu_sb_gktq"
                  @change="filterLayers('设施设备_公跨铁桥')"
                >
                  <i class="filter-icon gktq-light"></i>
                  <span>公跨铁桥</span>
                </el-checkbox>
                <el-checkbox
                  v-model="config_ga.wu_sb.wu_sb_sktq"
                  @change="filterLayers('设施设备_上跨铁桥')"
                >
                  <i class="filter-icon sktq-light"></i>
                  <span>上跨铁桥</span>
                </el-checkbox>
              </div>
            </div>
          </div>
        </div>

        <!-- 人 -->
        <div ref="content_1" id="1">
          <div class="group-title-big">人</div>
          <div class="tab-block">
            <div>
              <div class="group-title-light">{{getTitle('违法犯罪人员')}}</div>
              <div class="group-body-light">
                <el-checkbox
                  v-model="config_ga.person_wffz.person_wffz_xs"
                  @change="filterLayers('违法犯罪人员_刑事犯罪嫌疑人')"
                >
                  <i class="filter-icon wffz_xs_light"></i>
                  <span v-if="isPolice">刑事犯罪嫌疑人</span>
                </el-checkbox>
                <br />
                <el-checkbox
                  v-model="config_ga.person_wffz.person_wffz_xz"
                  @change="filterLayers('违法犯罪人员_行政违法人员')"
                >
                  <i class="filter-icon wffz_xz_light"></i>
                  <span v-if="isPolice">行政违法人员</span>
                </el-checkbox>

                <el-checkbox
                  v-model="config_ga.person_wffz.person_wffz_net"
                  @change="filterLayers('违法犯罪人员_网上在逃人员')"
                >
                  <i class="filter-icon wffz_net_light"></i>
                  <span>网上在逃人员</span>
                </el-checkbox>
              </div>
            </div>
            <div>
              <div class="group-title-light">{{getTitle('重点掌握人员')}}</div>
              <div class="group-body-light">
                <el-checkbox
                  v-model="config_ga.person_zdzw.person_zdzw_dsc"
                  @change="filterLayers('重点掌握人员_大牲畜养殖户')"
                >
                  <i class="filter-icon zdzw_dsc_light"></i>
                  <span v-if="isPolice">大牲畜养殖户</span>
                </el-checkbox>
                <el-checkbox
                  v-model="config_ga.person_zdzw.person_zdzw_fp"
                  @change="filterLayers('重点掌握人员_废品收购人员')"
                >
                  <i class="filter-icon zdzw_fp_light"></i>
                  <span v-if="isPolice">废品收购人员</span>
                </el-checkbox>
                <el-checkbox
                  v-model="config_ga.person_zdzw.person_zdzw_wc"
                  @change="filterLayers('重点掌握人员_五残人员')"
                >
                  <i class="filter-icon zdzw_wc_light"></i>
                  <span>五残人员</span>
                </el-checkbox>
                <el-checkbox
                  v-model="config_ga.person_zdzw.person_zdzw_wxp"
                  @change="filterLayers('重点掌握人员_危险品从业人员')"
                >
                  <i class="filter-icon zdzw_wxp_light"></i>
                  <span v-if="isPolice">危险品从业人员</span>
                </el-checkbox>
                <el-checkbox
                  v-model="config_ga.person_zdzw.person_zdzw_other"
                  @change="filterLayers('重点掌握人员_其他重点人员')"
                >
                  <i class="filter-icon zdzw_other_light"></i>
                  <span v-if="isPolice">其他重点人员</span>
                </el-checkbox>
              </div>
            </div>
            <div>
              <div class="group-title-light">{{getTitle('铁路内部人员')}}</div>
              <div class="group-body-light">
                <el-checkbox
                  v-model="config_ga.person_tlnb.person_tlnb_regular"
                  @change="filterLayers('铁路内部人员_正式职工')"
                >
                  <i class="filter-icon tlnb_regular_light"></i>
                  <span v-if="isPolice">正式职工</span>
                </el-checkbox>
                <el-checkbox
                  v-model="config_ga.person_tlnb.person_tlnb_collect"
                  @change="filterLayers('铁路内部人员_大集体工')"
                >
                  <i class="filter-icon tlnb_collect_light"></i>
                  <span v-if="isPolice">大集体工</span>
                </el-checkbox>
                <el-checkbox
                  v-model="config_ga.person_tlnb.person_tlnb_fj"
                  @change="filterLayers('铁路内部人员_辅警')"
                >
                  <i class="filter-icon tlnb_fj_light"></i>
                  <span>辅警</span>
                </el-checkbox>
                <el-checkbox
                  v-model="config_ga.person_tlnb.person_tlnb_ba"
                  @change="filterLayers('铁路内部人员_保安')"
                >
                  <i class="filter-icon tlnb_ba_light"></i>
                  <span v-if="isPolice">保安</span>
                </el-checkbox>
                <el-checkbox
                  v-model="config_ga.person_tlnb.person_tlnb_aj"
                  @change="filterLayers('铁路内部人员_安检')"
                >
                  <i class="filter-icon tlnb_aj_light"></i>
                  <span v-if="isPolice">安检</span>
                </el-checkbox>
                <el-checkbox
                  v-model="config_ga.person_tlnb.person_tlnb_bj"
                  @change="filterLayers('铁路内部人员_保洁')"
                >
                  <i class="filter-icon tlnb_bj_light"></i>
                  <span v-if="isPolice">保洁</span>
                </el-checkbox>
                <el-checkbox
                  v-model="config_ga.person_tlnb.person_tlnb_xfdy"
                  @change="filterLayers('铁路内部人员_巡防队员')"
                >
                  <i class="filter-icon tlnb_xfdy_light"></i>
                  <span v-if="isPolice">巡防队员</span>
                </el-checkbox>
                <el-checkbox
                  v-model="config_ga.person_tlnb.person_tlnb_gcsg"
                  @change="filterLayers('铁路内部人员_工程施工人员')"
                >
                  <i class="filter-icon tlnb_gcsg_light"></i>
                  <span v-if="isPolice">工程施工人员</span>
                </el-checkbox>
                <el-checkbox
                  v-model="config_ga.person_tlnb.person_tlnb_zxby"
                  @change="filterLayers('铁路内部人员_装卸搬运人员')"
                >
                  <i class="filter-icon tlnb_zxby_light"></i>
                  <span v-if="isPolice">装卸搬运人员</span>
                </el-checkbox>
                <el-checkbox
                  v-model="config_ga.person_tlnb.person_tlnb_shyy"
                  @change="filterLayers('铁路内部人员_商户营业人员')"
                >
                  <i class="filter-icon tlnb_shyy_light"></i>
                  <span v-if="isPolice">商户营业人员</span>
                </el-checkbox>
                <el-checkbox
                  v-model="config_ga.person_tlnb.person_tlnb_others"
                  @change="filterLayers('铁路内部人员_其他务工人员')"
                >
                  <i class="filter-icon tlnb_others_light"></i>
                  <span v-if="isPolice">其他务工人员</span>
                </el-checkbox>
              </div>
            </div>
          </div>
        </div>

        <!-- 事 -->
        <div ref="content_2" id="2">
          <div class="group-title-big">事</div>
          <div class="tab-block">
            <div class="group-title-light">{{getTitle('案件类')}}</div>
            <div class="group-body-light">
              <el-checkbox
                v-model="config_ga.shi_aj.shi_aj_xzjy"
                @change="filterLayers('案件类_行政简易程序案件')"
              >
                <i class="filter-icon aj_xzjy_light"></i>
                <span>行政简易程序案件</span>
              </el-checkbox>
              <br />
              <el-checkbox
                v-model="config_ga.shi_aj.shi_aj_xzyb"
                @change="filterLayers('案件类_行政一般程序案件')"
              >
                <i class="filter-icon aj_xzyb_light"></i>
                <span>行政一般程序案件</span>
              </el-checkbox>
              <br />
              <el-checkbox v-model="config_ga.shi_aj.shi_aj_xs" @change="filterLayers('案件类_刑事案件')">
                <i class="filter-icon aj_xs_light"></i>
                <span>刑事案件</span>
              </el-checkbox>
              <el-checkbox v-model="config_ga.shi_aj.shi_aj_wx" @change="filterLayers('案件类_危行案件')">
                <i class="filter-icon aj_wx_light"></i>
                <span>危行案件</span>
              </el-checkbox>
              <el-checkbox
                v-model="config_ga.shi_aj.shi_aj_other"
                @change="filterLayers('案件类_其他案件')"
              >
                <i class="filter-icon aj_other_light"></i>
                <span>其他案件</span>
              </el-checkbox>
            </div>

            <div class="group-title-light">{{getTitle('事件类')}}</div>
            <div class="group-body-light">
              <el-checkbox v-model="config_ga.shi_sj.shi_sj_qt" @change="filterLayers('事件类_群体事件')">
                <i class="filter-icon sj_qt_light"></i>
                <span>群体事件</span>
              </el-checkbox>
              <el-checkbox
                v-model="config_ga.shi_sj.shi_sj_tljt"
                @change="filterLayers('事件类_铁路交通事故')"
              >
                <i class="filter-icon sj_tljt_light"></i>
                <span>铁路交通事故</span>
              </el-checkbox>
              <br />
              <el-checkbox
                v-model="config_ga.shi_sj.shi_sj_fire"
                @change="filterLayers('事件类_火灾事故')"
              >
                <i class="filter-icon sj_fire_light"></i>
                <span style="cursor: pointer">火灾事故</span>
              </el-checkbox>
              <el-checkbox
                v-model="config_ga.shi_sj.shi_sj_zdzr"
                @change="filterLayers('事件类_重大自然灾害事故')"
              >
                <i class="filter-icon sj_zdzr_light"></i>
                <span style="cursor: pointer">重大自然灾害事故</span>
              </el-checkbox>
              <br />
              <el-checkbox
                v-model="config_ga.shi_sj.shi_sj_other"
                @change="filterLayers('事件类_其他事件')"
              >
                <i class="filter-icon sj_other_light"></i>
                <span style="cursor: pointer">其他事件</span>
              </el-checkbox>
            </div>

            <div class="group-title-light">{{getTitle('隐患类')}}</div>
            <div class="group-body-light">
              <el-checkbox v-model="config_ga.shi_yh.shi_yh_za" @change="filterLayers('隐患类_治安隐患')">
                <i class="filter-icon yh_za_light"></i>
                <span>治安隐患</span>
              </el-checkbox>
              <el-checkbox v-model="config_ga.shi_yh.shi_yh_nb" @change="filterLayers('隐患类_内保隐患')">
                <i class="filter-icon yh_nb_light"></i>
                <span>内保隐患</span>
              </el-checkbox>
              <br />
              <el-checkbox v-model="config_ga.shi_yh.shi_yh_xf" @change="filterLayers('隐患类_消防隐患')">
                <i class="filter-icon yh_xf_light"></i>
                <span>消防隐患</span>
              </el-checkbox>
              <el-checkbox v-model="config_ga.shi_yh.shi_yh_fk" @change="filterLayers('隐患类_反恐隐患')">
                <i class="filter-icon yh_fk_light"></i>
                <span>反恐隐患</span>
              </el-checkbox>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 这里引用各种资源
import C from "../../../assets/com.js";
import config from "../js/config.js";
import Index from "../Index.vue";
import keYun from "../js/keYun.js"; // 客运

import config_ga from "../js/config_ga.js";
import gongAnPcs from "../js/gongAnPcs"; // 铁路派出所
export default {
  // 组件
  components: {},

  // 属性
  props: {
    isPolice: Boolean,
    darkPanelHide: Boolean,
    toolOpt: {
      default: function() {
        return {
          width: "260px",
          height: "750px",
          left: "20px",
          bottom: "20px",
          lateBottom: "10px",
          lateRight: "840px"
        };
      }
    }

    // obj: Object,
    // detailSql: Array
  },
  // 数据仓库
  data() {
    return {
      config: config,
      config_ga: config_ga,
      curMenu: "0",
      scrollHeight: [], // 存储所有模块的高度
      activities: [
        { content: "物", id: "0" },
        { content: "人", id: "1" },
        { content: "事", id: "2" }
      ],
      window: window
    };
  },
  // 组件挂载完毕
  mounted() {
    // 获取每个模块高度
    this.$nextTick(() => {
      this.getScrollHeight();
    });
  },
  // 方法
  methods: {
    /* @info  事件处理区-----------------------------------*/
    // 切换控制面板
    changeFilterTab(name) {
      this.curMenu = name + "";
      console.log("this.curMenu", this.curMenu);
      this.$refs["content_" + name] &&
        this.$refs["content_" + name].scrollIntoView(true);
    },

    getScrollHeight() {
      this.scrollHeight = [];
      this.activities.map(item => {
        this.scrollHeight.push(document.getElementById(item.id).offsetTop);
      });
      console.log("this.scrollHeight", this.scrollHeight);
    },

    handleScroll(e) {
      // console.log("e.target.scrollTop", e.target.scrollTop);
      if (
        e.target.scrollTop >
        this.scrollHeight[this.scrollHeight.length - 1] - 340
      ) {
        this.curMenu = this.scrollHeight.length - 1 + "";
      } else {
        this.scrollHeight.map((item, index) => {
          if (e.target.scrollTop >= item - 180) {
            this.curMenu = index + "";
          }
        });
      }
    },

    filterLayers(ty, data) {
      console.log("filerLLLLLLLLLLLLLLLLLLLLLLLLLL");
      switch (ty) {
        case "派出所_地方派出所": {
          console.log("filterLayers 派出所_地方派出所");
          gongAnPcs.filterLayer("wu_pcs", "wu_pcs_dfpcs");
          break;
        }
        case "派出所_全部铁路派出所": {
          gongAnPcs.filterLayer("wu_pcs", "wu_pcs_tlpcs");
          break;
        }
        case "派出所_进京": {
          gongAnPcs.filterLayer("wu_pcs", "wu_pcs_jjing");
          break;
        }
        case "派出所_进疆": {
          gongAnPcs.filterLayer("wu_pcs", "wu_pcs_jjiang");
          break;
        }
        case "派出所_进藏": {
          gongAnPcs.filterLayer("wu_pcs", "wu_pcs_jzang");
          break;
        }
        case "派出所_客运枢纽所": {
          gongAnPcs.filterLayer("wu_pcs", "wu_pcs_kysn");
          break;
        }
        case "派出所_客运A类所": {
          gongAnPcs.filterLayer("wu_pcs", "wu_pcs_kya");
          break;
        }
        case "派出所_客运B类所": {
          gongAnPcs.filterLayer("wu_pcs", "wu_pcs_kyb");
          break;
        }
        case "派出所_客运C类所": {
          gongAnPcs.filterLayer("wu_pcs", "wu_pcs_kyc");
          break;
        }
        case "派出所_线路A类所": {
          gongAnPcs.filterLayer("wu_pcs", "wu_pcs_linea");
          break;
        }
        case "派出所_线路B类所": {
          gongAnPcs.filterLayer("wu_pcs", "wu_pcs_lineb");
          break;
        }
        case "派出所_线路C类所": {
          gongAnPcs.filterLayer("wu_pcs", "wu_pcs_linec");
          break;
        }
      }
    },

    getTitle(str) {
      return "------------ " + "\xa0\xa0" + str + "\xa0\xa0" + " ------------";
    }

    /* @info  数据处理区-----------------------------------*/
    /* @info  数据交互区-----------------------------------*/
    // 获取数据
  },
  // 监视属性
  watch: {},
  // 计算属性
  computed: {},
  created() {
    // console.log("toolOpt", this.toolOpt);
  }
};
</script>

<!-- 私有样式 -->
<style scoped="scoped">
.tq-list {
  padding: 0px;
  white-space: nowrap;
  height: 100px;
}

.tq-list-item {
  display: inline-block;
  padding: 10px;
  text-align: center;
}

.tq-weather {
}

.tq-weather td {
  padding: 5px;
  border-bottom: 1px solid #333;
}
/*天气*/
.weather-icon {
  width: 20px;
}

>>> .el-tabs__header {
  margin: 0;
}

>>> .el-tabs__item {
  color: #c1c1c1;
}

>>> .el-tabs__item.is-active {
  color: #409eff;
}

>>> .el-tabs__nav-wrap::after {
  background-color: transparent;
}

>>> .el-scrollbar__wrap::-webkit-scrollbar {
  /*滚动条两端块*/
  width: 0px;
  height: 0px;
  border-radius: 0px;
  background-color: transparent !important;
}

>>> .el-scrollbar__wrap::-webkit-scrollbar-track {
  /*滚动条滑槽*/
  border-radius: 0px;
  background-color: transparent !important;
  -webkit-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0) !important;
}

>>> .el-scrollbar__wrap::-webkit-scrollbar-thumb {
  /*滚动条滑动条*/
  border-radius: 0px;
  background-color: transparent !important;
  -webkit-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0) !important;
}

>>> .el-scrollbar__wrap::-webkit-scrollbar-thumb:hover {
  background-color: transparent !important;
}

>>> .el-scrollbar__wrap::-webkit-scrollbar-thumb:active {
  background-color: transparent !important;
}

.filter-con-light {
  background-blend-mode: normal, normal;
  background-image: linear-gradient(-3deg, #fff 90%, #fff 100%),
    linear-gradient(#fff, #fff);
  border-image-slice: 1;
  border-image-source: linear-gradient(-2deg, #2d82cd 0%, #2d82cd 100%);

  border-style: solid;
  border-width: 1px;
  border-right: 0px;
  opacity: 0.89;
  overflow: hidden;
  padding: 10px 0px 0px 0px;
  position: absolute;
  z-index: 400;
  /* transition: height .3s,width .3s; */
}

.filter-con-light.big {
  overflow: visible;
  /* height: 750px; */
  /*与 filter-body 高度一致*/
}

.filter-con-light.big > .filter-body {
  height: 100%;
  overflow: auto;
}

.filter-change-tool {
  cursor: pointer;
  height: 10px;
  left: 0;
  line-height: 26px;
  position: absolute;
  text-align: center;
  top: 0px;
  width: 100%;
}

.filter-change-tool:hover {
  opacity: 0.8;
}

.filter-body {
  height: 0px;
  overflow: hidden;
  width: 100%;
}

.filter-con-light.big > .filter-body {
  height: 100%;
  overflow: auto;
}

.group-title-light {
  background: transparent;
  height: 28px;
  font-weight: bold;
  font-size: 12px;
  padding: 5px;
  text-align: center;
  color: #545967;
}

/* .group-title-big {
  color: #545967;
  height: 28px;
  font-weight: bold;
  font-size: 14px;
  padding: 5px;
  text-align: left;
} */
.group-title-big {
  background: #5684c8;
  height: 28px;
  font-weight: bold;
  font-size: 12px;
  padding: 5px;
  text-align: center;
}

.group-body-light {
  line-height: 26px;
  padding: 10px;
  font-size: 12px;
  color: #000;
}

.group-body-light.flex {
  display: flex;
  justify-content: space-between;
}

>>> .el-checkbox__label {
  color: #545967 !important;
  font-size: 12px;
  padding-left: 0px;
}

>>> .group-body-light .el-checkbox {
  margin: 5px 0;
  width: 50%;
}

.tab {
  bottom: 0px;
  max-height: 800px;
  overflow-y: scroll;
  position: absolute;
  right: -35px;
  margin-top: 10px;
  top: 0px;
  width: 35px;
}

.tab::-webkit-scrollbar {
  width: 0px;
}

.tab > div {
  color: #1e797f;
  font-size: 16px;
  height: auto;
  line-height: 16px;
  margin-top: -25px;
  padding: 17px 0;
  position: relative;
  width: 100%;
  z-index: 1;
  top: 20px;
}

.tab > div > span {
  background: url(../img/tabDefault_ga.png) no-repeat 1px -56px;
  background-size: 34px 200px;
  display: block;
  height: 39px;
  padding: 4px 5px 0px 5px;
  width: 100%;
  color: white;
}

.tab > div::before {
  background: url(../img/tabDefault_ga.png) no-repeat center 0px;
  content: "";
  height: 17px;
  left: 0;
  position: absolute;
  right: 0px;
  top: 0;
}

.tab > div::after {
  background: url(../img/tabDefault_ga.png) no-repeat center -56px;
  bottom: 0;
  content: "";
  height: 17px;
  left: 0;
  position: absolute;
  right: 0px;
  z-index: 1;
}

.tab > div.active {
  color: #20d0db;
  z-index: 2;
}

.tab > div.active > span {
  background: url(../img/tabActive_ga.png) no-repeat 1px -50px;
  background-size: 34px 200px;
  color: black;
}

.tab > div.active::before {
  background: url(../img/tabActive_ga.png) no-repeat center 0px;
}

.tab > div.active::after {
  background: url(../img/tabActive_ga.png) no-repeat center -56px;
}

.tab > div:hover {
  cursor: pointer;
  opacity: 0.8;
}

.tab-block {
  border-image-slice: 1;
  border-image-source: linear-gradient(-2deg, #2d82cd 0%, #2d82cd 100%);

  border-style: solid;
  border-width: 1px;
  padding: 5px;
  margin-bottom: 20px;
}

>>> .el-main {
  padding: 5px;
}
</style>
<!-- 公有样式（会影响全局） -->
<!-- 公有样式（会影响全局） -->
<style src="../css/Index.css"></style><!-- 本组件 -->
<style src="../css/station.css"></style><!-- 车站 -->
<style src="../css/gongDian.css"></style><!-- 供电 -->
<style src="../css/jiWu.css"></style><!-- 机务 -->
<style src="../css/yunShu.css"></style><!-- 运输 -->
<style src="../css/tuFang.css"></style><!-- 土房 -->
<style src="../css/jiaotong.css"></style><!-- 交通 -->
<style src="../css/earthquake.css"></style><!-- 地震 -->
<style src="../css/weather.css"></style><!-- 天气 、天气预警-->
<style src="../css/qiaoSui.css"></style><!-- 桥遂 -->
<style src="../css/houQing.css"></style><!-- 后勤 -->
<style src="../css/huoYun.css"></style><!-- 后勤 -->
<style src="../css/train.css"></style><!-- 列车样式 -->
<style src="../css/gongWu.css"></style>
<style src="../css/dk.css"></style>
<style src="../css/dianWu.css"></style>
<style src="../css/keYun.css"></style>
<style>
#app {
  background: transparent !important;
}
</style>
