// 替换此文件中的资料。素材存放在 assets/，按相对路径填写。
const content = {
  carouselMedia: [
    {
      "title": "Hello World · KIKI 与 KOKO",
      "category": "上传素材",
      "alt": "白底上的青绿与蓝色角色",
      "cover": "assets/hello-world-reference.webp"
    },
    {
      "title": "Ayble Health",
      "category": "上传素材",
      "alt": "紫色毛衣人物与健康应用界面",
      "cover": "assets/ayble-reference.webp"
    },
    {
      "title": "SkyMavis",
      "category": "上传素材",
      "alt": "蓝色笔记本电脑与猫头鹰角色",
      "cover": "assets/skymavis-reference.webp"
    },
    {
      "title": "Space · 云端文件",
      "category": "上传素材",
      "alt": "戴耳机的人物与云端文件界面",
      "cover": "assets/space-cloud-reference.webp"
    },
    {
      "title": "Netflix · The Last House",
      "category": "上传素材",
      "alt": "流媒体播放界面与演职员列表",
      "cover": "assets/netflix-reference.webp"
    },
    {
      "title": "Microsoft Edge",
      "category": "上传素材",
      "alt": "浅蓝背景中的 Edge 与 Copilot 图标",
      "cover": "assets/edge-reference.webp"
    },
    {
      "title": "Spotify · The Weeknd",
      "category": "上传素材",
      "alt": "室内空间中的音乐播放器界面",
      "cover": "assets/spotify-reference.webp"
    },
    {
      "title": "Wise · Promo Assets System",
      "category": "上传素材",
      "alt": "手持手机的 Wise 宣传图",
      "cover": "assets/wise-reference.webp"
    },
    {
      "title": "渐变云朵角色",
      "category": "上传素材",
      "alt": "蓝粉渐变的云朵形角色",
      "cover": "assets/cloud-character-reference.webp"
    },
    {
      "title": "黄色星星角色",
      "category": "上传素材",
      "alt": "渐变背景中的黄色星星角色",
      "cover": "assets/star-character-reference.webp"
    },
    {
      "title": "Space · All You Need Is Space",
      "category": "上传素材",
      "alt": "暖色室内的人物与 Space 品牌字样",
      "cover": "assets/space-intro-reference.webp"
    },
    {
      "title": "笔记本电脑样机",
      "category": "上传素材",
      "alt": "黑色背景中的作品集网页样机",
      "cover": "assets/laptop-reference.webp"
    }
  ],
  profile: {
    name: '姓名待填',
    headline: ['从数字产品', '到品牌视觉'],
    intro: '我有 7 年 UI 设计经验，近 3 年专注品牌与市场视觉，也持续探索 AI 在设计中的应用。',
    about: '我从 UI 设计起步，做过 App、网页、B 端、G 端与软硬件相关项目。近三年，我把设计实践从屏幕拓展到品牌与市场视觉，从活动主 KV、海报和邀请函，到展架、品牌空间与周边。最近我也在探索 AI 如何参与视觉创作、方案验证和设计工作流。',
    photo: '',
    email: '',
    social: [{ label: '社交平台', url: '' }]
  },
  projects: [
    {
      id: 'pace', order: 1, featured: true, homeWide: true, title: 'PACE 运动体验', category: '产品体验', tags: ['App'],
      cover: 'assets/pace.webp', ratio: 'wide', tone: '#bdd5ed', alt: '浅蓝背景上的两部手机，展示运动应用关键界面', placeholder: true,
      lead: '关键界面 · 训练概览与单次运动记录',
      sections: [
        { title: '项目背景与我的职责', text: '背景示例：让日常跑者更快看懂本次运动和长期变化。［真实背景、职责与协作范围待补充］' },
        { title: '关键设计决定', text: '方案示例：总览保留最常看的指标，路线、配速和分段数据放在单次记录页。', images: [{src:'assets/pace-detail.webp', alt:'运动总览界面示意'}, {src:'assets/pace-detail-2.webp', alt:'单次记录界面示意'}] },
        { title: '最终体验', text: '［待补充真实交互演示、上线结果与验证证据］' }
      ]
    },
    {
      id: 'field', order: 2, featured: true, title: 'FIELD 创意展视觉', category: '品牌视觉', tags: ['活动主 KV', '展会物料'],
      cover: 'assets/field.webp', ratio: 'poster', tone: '#d5c5f2', alt: '紫色展会视觉与印刷物料示意', placeholder: true,
      lead: '主 KV · 创意展视觉系统',
      sections: [
        { title: '创意概念', text: '概念示例：用可变的几何边界表现开放的创作场域。［真实背景与职责待补充］' },
        { title: '多物料延展', text: '［替换为同一展会的邀请函、海报和展架］', images: [{src:'assets/field-detail.webp', alt:'邀请函和海报示意', ratio:'poster'}, {src:'assets/field-detail-2.webp', alt:'展架视觉示意', ratio:'poster'}] },
        { title: '现场与落地', text: '［现场照片与交付成果待补充］' }
      ]
    },
    {
      id: 'relay', order: 3, featured: true, title: 'RELAY 调度工作台', category: '产品体验', tags: ['B 端', '软硬件交互'],
      cover: 'assets/relay.webp', ratio: 'landscape', tone: '#242c39', alt: '带有地图和数据表格的深色调度工作台', placeholder: true,
      lead: '关键界面 · 异常处理与任务调度',
      sections: [
        { title: '项目背景与我的职责', text: '背景示例：调度员在地图、告警与任务之间来回切换。［真实背景与职责待补充］' },
        { title: '关键设计决定', text: '复杂流程示例：发现告警 → 核对设备位置与任务 → 指派责任人 → 确认回执。优先在同一视图中完成核对与指派。', images: [{src:'assets/relay-detail.webp', alt:'工作台关键流程示意'}] },
        { title: '最终体验', text: '［待补充异常分支、真实界面、现场验证与成果］' }
      ]
    },
    {
      id: 'atlas', order: 4, title: 'ATLAS 服务门户', category: '产品体验', tags: ['网页', 'G 端'],
      cover: 'assets/atlas.webp', ratio: 'landscape', tone: '#d7c6aa', alt: '沙色背景下的网页产品界面示意', placeholder: true,
      lead: '关键界面 · 服务事项检索与申请',
      sections: [
        { title: '项目背景与我的职责', text: '［待补充真实服务场景、受众和个人职责］' },
        { title: '关键设计决定', text: '流程示例：查找事项 → 核对材料 → 提交申请 → 查询进度。每一步保留办理条件和下一步说明。' },
        { title: '最终体验', text: '［待补充真实界面、流程验证与成果］' }
      ]
    },
    {
      id: 'still', order: 5, title: 'STILL 品牌空间', category: '品牌视觉', tags: ['品牌空间', '导视'],
      cover: 'assets/still.webp', ratio: 'landscape', tone: '#cfb28d', alt: '带有琥珀色装置的展览空间示意', placeholder: true,
      lead: '主 KV · 品牌空间与导视',
      sections: [
        { title: '创意概念', text: '概念示例：从材料、光线和留白提取空间的视觉语言。［真实策略与职责待补充］' },
        { title: '多物料延展', text: '［待补充入口导视、空间标牌、品牌手册与周边］' },
        { title: '现场与落地', text: '［现场照片与交付成果待补充］' }
      ]
    }
  ],
  experiments: [
    {
      id:'mascot', order:1, title:'品牌 IP 的多姿态探索', category:'AI 创作', tags:['角色设计'],
      cover:'assets/hello-world-reference.webp', ratio:'landscape', tone:'#fff', alt:'上传的 KIKI 与 KOKO 角色参考图', placeholder:true,
      lead:'封面为上传的角色参考图，实验过程见下方示意',
      sections:[
        {title:'探索目标', text:'探索同一个品牌角色在招手、行走和跳跃时能否保持辨识度。'},
        {title:'设计约束', text:'保持脸部比例、头身关系与橙白主色稳定。'},
        {title:'迭代对照', text:'示意 A 强调面部与轮廓，示意 B 把一致的造型延伸到肢体动作。［实际测试记录待补充］', images:[{src:'assets/mascot-detail.webp', alt:'角色基准造型示意', caption:'A · 基准造型'}, {src:'assets/mascot-detail-2.webp', alt:'角色动作造型示意', caption:'B · 动作探索'}]},
        {title:'最终产出', text:'［角色姿态表与源文件待补充］'}
      ]
    },
    {
      id:'space', order:2, title:'AI 辅助空间可视化', category:'AI 创作', tags:['空间概念'],
      cover:'assets/space.webp', ratio:'landscape', tone:'#c9d9b5', alt:'绿色半透明材料的展厅提案示意', placeholder:true,
      lead:'同一展厅的材料和光线比较',
      sections:[
        {title:'探索目标', text:'在提案阶段快速对照展厅的材料和采光。'},
        {title:'设计约束', text:'保持入口位置、参观动线与基本空间比例。'},
        {title:'迭代对照', text:'示意 A 观察通透感与采光，示意 B 比较色彩集中后的空间焦点。［实际测试记录待补充］', images:[{src:'assets/space-detail.webp', alt:'空间采光示意', caption:'A · 通透度与光线'}, {src:'assets/space-detail-2.webp', alt:'空间色彩焦点示意', caption:'B · 色彩与空间焦点'}]},
        {title:'最终产出', text:'［最终提案图与验证过程待补充］'}
      ]
    }
  ]
};
