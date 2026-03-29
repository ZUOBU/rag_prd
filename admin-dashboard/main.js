// ====================================================
// 波波之音 AI 智能客服 · 运营管理系统  —  main.js
// SPA Router + Mock Data + Page Components
// Light Theme · Compact Layout
// ====================================================

// ==================== MOCK DATA ====================
const MOCK = {
  kpi: [
    { label: '自助率', value: '78.6%', change: '+2.3%', dir: 'up', accent: 'accent-green' },
    { label: '转人工率', value: '21.4%', change: '-1.8%', dir: 'up', accent: 'accent-yellow' },
    { label: '总提问量', value: '12,847', change: '+15.2%', dir: 'up', accent: 'accent-blue' },
    { label: '有效回答', value: '10,099', change: '+12.7%', dir: 'up', accent: 'accent-cyan' },
    { label: '意图识别率', value: '85.2%', change: '+3.1%', dir: 'up', accent: 'accent-blue' },
    { label: '风控拦截', value: '37', change: '+5', dir: 'down', accent: 'accent-red' },
    { label: '客户满意度', value: '92.1%', change: '+1.4%', dir: 'up', accent: 'accent-green' },
    { label: '新增入库', value: '156', change: '', dir: '', accent: 'accent-cyan' },
  ],

  todos: {
    '解析校对': {
      count: 12, fields: ['文档名称', '文档类型', '解析时间'], rows: [
        ['零售部网点晨夕会标准化手册.pdf', 'PDF', '2026-03-28 09:12'],
        ['个人贷款业务操作指引V3.2.docx', 'Word', '2026-03-28 08:45'],
        ['2026年Q1理财产品说明书.pdf', 'PDF', '2026-03-27 16:30'],
        ['反洗钱培训教材(更新版).pptx', 'PPT', '2026-03-27 14:22'],
        ['信用卡分期业务规则说明.pdf', 'PDF', '2026-03-27 11:05'],
        ['个人住房按揭贷款办理须知.pdf', 'PDF', '2026-03-26 17:40'],
        ['转账汇款手续费标准V2.1.docx', 'Word', '2026-03-26 15:18'],
        ['网银安全防范指南.pdf', 'PDF', '2026-03-26 10:52'],
      ]
    },
    '分块检查': {
      count: 8, fields: ['文档名称', '文档类型', '分块时间'], rows: [
        ['存量房贷利率调整政策.pdf', 'PDF', '2026-03-28 10:05'],
        ['大额存单最新利率表V2.xlsx', 'Excel', '2026-03-28 09:30'],
        ['个人经营性贷款申请流程.docx', 'Word', '2026-03-27 17:15'],
        ['信用卡还款方式说明.pdf', 'PDF', '2026-03-27 14:42'],
        ['外汇业务操作指引V3.0.docx', 'Word', '2026-03-27 11:30'],
        ['反诈中心联动预警处置规范.pdf', 'PDF', '2026-03-26 16:08'],
      ]
    },
    '入库审核': {
      count: 5, fields: ['文档名称', '文档类型', '提交时间'], rows: [
        ['理财产品风险等级说明.pdf', 'PDF', '2026-03-28 08:00'],
        ['网银PC端操作手册.docx', 'Word', '2026-03-27 15:40'],
        ['活期储蓄存款管理办法.pdf', 'PDF', '2026-03-27 10:20'],
        ['个人消费贷款利率表.xlsx', 'Excel', '2026-03-26 17:55'],
        ['小程序功能操作指引V1.2.pdf', 'PDF', '2026-03-26 14:10'],
      ]
    },
    '向量化/入库异常': {
      count: 3, fields: ['文档名称', '文档类型', '审核通过时间'], rows: [
        ['企业开户资料清单.pdf', 'PDF', '2026-03-27 10:20'],
        ['外汇业务操作指引.docx', 'Word', '2026-03-26 14:50'],
        ['贵金属购买规则说明.pdf', 'PDF', '2026-03-26 09:12'],
      ]
    },
    'Badcase': {
      count: 23, fields: ['改写后的Query', '来源端口', '发生时间'], rows: [
        ['如何提前还款我的房贷', 'App客户端', '2026-03-28 11:32'],
        ['信用卡额度怎么提升', '小程序客户端', '2026-03-28 10:15'],
        ['理财产品R3风险等级含义', '行员端', '2026-03-28 09:48'],
        ['转账限额在哪里修改', '网银PC端', '2026-03-27 16:55'],
        ['如何注销银行卡', 'App客户端', '2026-03-27 15:20'],
        ['定期存款提前支取利息计算', '行员端', '2026-03-27 14:08'],
        ['ETC办理需要什么资料', '小程序客户端', '2026-03-27 11:33'],
        ['手机银行登录密码忘记了', 'App客户端', '2026-03-27 09:45'],
      ]
    },
    'QA库': {
      count: 6, fields: ['新增QA对', '相似问'], rows: [
        ['大额存单利率是多少', '活期转定期利率|大额存单最低多少起存'],
        ['怎么开通手机银行', '手机银行怎么注册|如何下载手机银行APP'],
        ['信用卡年费怎么减免', '年费减免条件|刷卡免年费规则'],
        ['贷款提前还款违约金多少', '提前还贷手续费|提前还款罚息'],
        ['怎么查看银行卡余额', '余额查询方式|查余额'],
        ['转账到账时间多久', '跨行转账多久到|实时到账和普通到账区别'],
      ]
    },
    'Chunk修改': {
      count: 4, fields: ['ChunkID', '内容(前20字)', '修改时间'], rows: [
        ['CHK-20260328-001', '个人贷款业务中，申请人须...', '2026-03-28 09:50'],
        ['CHK-20260327-015', '信用卡分期手续费按月收取...', '2026-03-27 15:30'],
        ['CHK-20260327-008', '大额存单起存金额为人民币...', '2026-03-27 11:22'],
        ['CHK-20260326-042', '反洗钱大额交易报告标准为...', '2026-03-26 16:05'],
      ]
    },
  },

  chartDays: ['03-18', '03-19', '03-20', '03-21', '03-22', '03-23', '03-24', '03-25', '03-26', '03-27', '03-28'],
  chartSelfRate: [72.1, 73.5, 74.2, 75.8, 76.1, 74.9, 77.3, 76.8, 78.1, 77.9, 78.6],
  chartQueryVol: [9200, 9800, 10200, 11500, 10800, 9600, 11200, 12100, 12500, 12300, 12847],

  topIntents: [
    { name: '房贷提前还款', count: 1842 },
    { name: '信用卡额度调整', count: 1356 },
    { name: '理财产品到期', count: 1128 },
    { name: '转账限额查询', count: 987 },
    { name: '手机银行密码重置', count: 876 },
    { name: '大额存单利率', count: 745 },
    { name: '个人贷款申请进度', count: 654 },
    { name: '信用卡账单查询', count: 589 },
    { name: '外汇牌价查询', count: 432 },
    { name: '网点预约取号', count: 378 },
  ],

  services: [
    { name: 'Paddle OCR', label: '文本识别服务', status: 'ok' },
    { name: 'Milvus', label: '向量数据库', status: 'ok' },
    { name: 'Qwen 大模型', label: '推理引擎', status: 'ok' },
    { name: 'Elasticsearch', label: '关键词索引', status: 'warn' },
  ],

  knowledgeTree: [
    {
      name: '零售业务', icon: '📁', children: [
        {
          name: '个人贷款业务', icon: '📂', children: [
            { name: '个人住房贷款', icon: '📄' },
            { name: '个人经营性贷款', icon: '📄' },
            { name: '个人消费贷款', icon: '📄' },
          ]
        },
        {
          name: '储蓄与存款', icon: '📂', children: [
            { name: '活期存款', icon: '📄' },
            { name: '定期存款', icon: '📄' },
            { name: '大额存单', icon: '📄' },
          ]
        },
        {
          name: '理财业务', icon: '📂', children: [
            { name: 'R1-R2低风险', icon: '📄' },
            { name: 'R3中风险', icon: '📄' },
            { name: 'R4-R5高风险', icon: '📄' },
          ]
        },
        { name: '信用卡业务', icon: '📂' },
        { name: '转账汇款', icon: '📂' },
      ]
    },
    {
      name: '各端口操作指引', icon: '📁', children: [
        { name: 'App客户端', icon: '📂' },
        { name: '小程序', icon: '📂' },
        { name: '网银PC端', icon: '📂' },
      ]
    },
  ],

  documents: [
    { id: 'DOC-2026-0281', name: '零售部网点晨夕会标准化手册.pdf', version: 'V2.0', parse: '待校对', chunk: '待分块', review: '待审核', vector: '待向量化', storage: '待入库', size: '3.2' },
    { id: 'DOC-2026-0282', name: '个人贷款业务操作指引V3.2.docx', version: 'V3.2', parse: '校对完成', chunk: '分块检查完成', review: '审核通过', vector: '向量化完成', storage: '多库同步完成', size: '5.8' },
    { id: 'DOC-2026-0283', name: '2026年Q1理财产品说明书.pdf', version: 'V1.0', parse: '解析中', chunk: '待分块', review: '待审核', vector: '待向量化', storage: '待入库', size: '12.4' },
    { id: 'DOC-2026-0284', name: '反洗钱培训教材(更新版).pptx', version: 'V4.1', parse: '校对完成', chunk: '分块待检查', review: '待审核', vector: '待向量化', storage: '待入库', size: '28.6' },
    { id: 'DOC-2026-0285', name: '信用卡分期业务规则说明.pdf', version: 'V1.3', parse: '校对完成', chunk: '分块检查完成', review: '审核通过', vector: '向量化完成', storage: '同步失败', size: '2.1' },
    { id: 'DOC-2026-0286', name: '大额存单最新利率表V2.xlsx', version: 'V2.0', parse: '校对完成', chunk: '分块检查完成', review: '审核通过', vector: '向量化异常', storage: '待入库', size: '0.4' },
    { id: 'DOC-2026-0287', name: '存量房贷利率调整政策.pdf', version: 'V1.0', parse: '解析异常', chunk: '待分块', review: '待审核', vector: '待向量化', storage: '待入库', size: '1.7' },
    { id: 'DOC-2026-0288', name: '个人经营性贷款申请流程.docx', version: 'V2.1', parse: '校对完成', chunk: '分块检查完成', review: '未通过', vector: '待向量化', storage: '待入库', size: '4.3' },
  ],

  badcases: [
    { time: '2026-03-28 11:32', port: 'App客户端', status: '待处理', query: '怎么提前还房贷', rewrite: '如何办理个人住房贷款提前还款', intent: '贷款-提前还款', route: 'RAG', qa: '—', chunk: 'CHK-1024,CHK-1025', reply: '您可以通过手机银行...', final: '您可以通过手机银行...', reason: '不准确' },
    { time: '2026-03-28 10:15', port: '小程序', status: '待处理', query: '信用卡额度怎么提', rewrite: '如何申请信用卡额度提升', intent: '信用卡-额度调整', route: 'RAG', qa: '—', chunk: 'CHK-2031', reply: '信用卡额度调整需要...', final: '信用卡额度调整需要...', reason: '不完整' },
    { time: '2026-03-28 09:48', port: '行员端', status: '已处理', query: 'R3风险等级什么意思', rewrite: '理财产品R3风险等级定义', intent: '理财-风险等级', route: 'RAG', qa: 'QA-0812', chunk: 'CHK-3040', reply: 'R3属于中等风险...', final: 'R3属于中等风险等级...', reason: '不理解' },
    { time: '2026-03-27 16:55', port: '网银PC端', status: '待处理', query: '转账限额哪里改', rewrite: '如何修改个人转账限额设置', intent: '转账-限额设置', route: 'Agent', qa: '—', chunk: '—', reply: '您可以在设置中...', final: '您可以在设置中...', reason: '不相关' },
    { time: '2026-03-27 14:05', port: 'App客户端', status: '已忽略', query: '你好', rewrite: '你好', intent: '闲聊-问候', route: 'Chit_Chat', qa: '—', chunk: '—', reply: '您好！有什么...', final: '您好！请问有什么...', reason: '其他' },
    { time: '2026-03-27 11:20', port: '行员端', status: '待处理', query: '个人消费贷利率', rewrite: '个人消费贷款利率是多少', intent: '贷款-利率查询', route: 'RAG', qa: '—', chunk: 'CHK-1502', reply: '消费贷年利率...', final: '个人消费贷款年利率...', reason: '不准确' },
    { time: '2026-03-27 09:42', port: '小程序', status: '已处理', query: '理财什么时候到账', rewrite: '理财产品到期资金多久到账', intent: '理财-到期处理', route: 'RAG', qa: 'QA-0935', chunk: 'CHK-3102', reply: '到期后T+1日...', final: '理财产品到期后T+1个工作日...', reason: '不完整' },
  ],

  queryLogs: [
    { id: 'QRY-20260328-4821', port: 'App客户端', query: '房贷利率现在多少', rewrite: '当前个人住房贷款利率是多少', intent: '贷款-利率查询', route: 'RAG', qa: 'QA-0156', chunk: 'CHK-1010', reply: '目前个人住房贷款LPR...', final: '目前个人住房贷款基准利率...', feedback: '👍' },
    { id: 'QRY-20260328-4822', port: '行员端', query: '反洗钱大额交易标准', rewrite: '反洗钱大额交易报告标准和阈值', intent: '合规-反洗钱', route: 'RAG', qa: '—', chunk: 'CHK-5021,CHK-5022', reply: '根据反洗钱法规定...', final: '根据《反洗钱法》及相关规定...', feedback: '📋' },
    { id: 'QRY-20260328-4823', port: '小程序', query: '怎么查余额', rewrite: '如何查询银行账户余额', intent: '账户-余额查询', route: 'Agent', qa: '—', chunk: '—', reply: '请问您要查询哪张卡...', final: '请问您要查询哪张银行卡的余额？', feedback: '—' },
    { id: 'QRY-20260328-4824', port: 'App客户端', query: '开通短信提醒', rewrite: '如何开通账户变动短信通知服务', intent: '账户-短信通知', route: 'RAG', qa: 'QA-0203', chunk: 'CHK-2105', reply: '短信通知服务可通过...', final: '短信通知服务可通过手机银行...', feedback: '👍' },
    { id: 'QRY-20260328-4825', port: '网银PC端', query: '理财R2产品有哪些', rewrite: '当前在售的R2低风险理财产品有哪些', intent: '理财-产品查询', route: 'RAG', qa: '—', chunk: 'CHK-3051,CHK-3052,CHK-3053', reply: '目前在售R2理财产品...', final: '目前在售R2级别理财产品包括...', feedback: '👎' },
    { id: 'QRY-20260328-4826', port: '行员端', query: '信用卡挂失怎么办', rewrite: '信用卡挂失及补卡操作流程', intent: '信用卡-挂失补卡', route: 'RAG', qa: 'QA-0421', chunk: 'CHK-2240', reply: '信用卡挂失可拨打...', final: '信用卡挂失可拨打客服电话95xxx...', feedback: '👍' },
    { id: 'QRY-20260328-4827', port: 'App客户端', query: '怎么开通网银', rewrite: '如何开通个人网上银行', intent: '账户-网银开通', route: 'RAG', qa: 'QA-0089', chunk: 'CHK-2301', reply: '开通网银需准备...', final: '开通网上银行需携带身份证和银行卡...', feedback: '📋' },
  ],

  redisCache: [
    { rank: 1, intent1: '账户', intent2: '余额查询', hits: 3205, query: '怎么查余额', rewrite: '如何查询银行账户余额', similar: ['在哪看卡里还有多少钱', '余额在哪里查询'], reply: '您可以通过手机银行首页“账户”版块直接查看当前余额。', saved: '未录入' },
    { rank: 1, intent1: '账户', intent2: '余额查询', hits: 3205, query: '卡里还有多少钱', rewrite: '如何查询银行账户余额', similar: ['银行卡余额查询'], reply: '请问你要查哪张卡的余额？', saved: '已录入' },
    { rank: 2, intent1: '贷款', intent2: '提前还款', hits: 2841, query: '房贷怎么提前还', rewrite: '如何办理个人住房贷款提前还款', similar: ['我要提前还款', '提前还房贷流程'], reply: '住房贷款提前还款可通过手机银行“贷款-我的贷款-提前还款”入口申请。', saved: '未录入' },
    { rank: 3, intent1: '信用卡', intent2: '额度调整', hits: 2100, query: '信用卡提额', rewrite: '如何申请信用卡额度提升', similar: ['怎么提升信用卡额度', '额度太低了怎么提'], reply: '您可登录APP，在“信用卡-额度管理”中尝试申请临时或固额提升。', saved: '未录入' },
    { rank: 4, intent1: '转账', intent2: '限额设置', hits: 1845, query: '转账限额怎么改', rewrite: '如何修改个人转账限额设置', similar: ['修改每天转账额度'], reply: '为保障资金安全，请前往“安全中心-转账设置”刷脸认证后修改。', saved: '已录入' },
  ],
};

// ==================== ROUTER ====================
let currentPage = 'dashboard';
function navigate(page) { currentPage = page; renderSidebar(); renderPage(); }

// ==================== SIDEBAR ====================
function renderSidebar() {
  const el = document.getElementById('sidebar');
  el.innerHTML = `
    <div class="sidebar-logo">
      <div class="logo-icon">波</div>
      <div>
        <div class="logo-text">波波之音 AI智能客服</div>
        <div class="logo-sub">运营管理系统</div>
      </div>
    </div>
    <nav class="sidebar-nav">
      <div class="nav-group">
        <div class="nav-group-label">概览</div>
        <a class="nav-item ${currentPage === 'dashboard' ? 'active' : ''}" onclick="navigate('dashboard')">
          <span class="nav-icon">📊</span> 工作台
        </a>
      </div>
      <div class="nav-group">
        <div class="nav-group-label">知识管理</div>
        <a class="nav-item ${currentPage === 'knowledge' ? 'active' : ''}" onclick="navigate('knowledge')">
          <span class="nav-icon">📚</span> 知识库文档
        </a>
        <a class="nav-item" onclick="navigate('knowledge')">
          <span class="nav-icon">💬</span> QA库
        </a>
        <a class="nav-item ${currentPage === 'redis' ? 'active' : ''}" onclick="navigate('redis')">
          <span class="nav-icon">⚡</span> Redis缓存管理
        </a>
      </div>
      <div class="nav-group">
        <div class="nav-group-label">日志与行为</div>
        <a class="nav-item ${currentPage === 'badcase' ? 'active' : ''}" onclick="navigate('badcase')">
          <span class="nav-icon">🔴</span> Badcase
          <span class="badge">23</span>
        </a>
        <a class="nav-item ${currentPage === 'logs' ? 'active' : ''}" onclick="navigate('logs')">
          <span class="nav-icon">📝</span> 问答日志
        </a>
      </div>
      <div class="nav-group">
        <div class="nav-group-label">系统配置</div>
        <a class="nav-item" onclick="navigate('dashboard')"><span class="nav-icon">⚙️</span> 全局配置</a>
        <a class="nav-item" onclick="navigate('dashboard')"><span class="nav-icon">👥</span> 账号与权限</a>
      </div>
    </nav>
    <div class="sidebar-footer">
      <div class="avatar">张</div>
      <div class="user-info">
        <div class="user-name">张明远</div>
        <div class="user-role">系统管理员</div>
      </div>
    </div>
  `;
}

// ==================== PAGES ====================

// ---------- Dashboard ----------
function renderDashboard() {
  const main = document.getElementById('main-content');
  const kpiHtml = MOCK.kpi.map(k => `
    <div class="kpi-card ${k.accent}">
      <div class="kpi-label">${k.label}</div>
      <div class="kpi-value">${k.value}</div>
      ${k.change ? `<div class="kpi-change ${k.dir}">${k.dir === 'up' ? '↑' : '↓'} ${k.change}</div>` : '<div class="kpi-change" style="color:var(--foreground-dim)">本期新增</div>'}
    </div>
  `).join('');

  const tabKeys = Object.keys(MOCK.todos);
  const tabBtns = tabKeys.map((k, i) => `<button class="tab-btn ${i === 0 ? 'active' : ''}" data-tab="${k}">${k} <span class="tab-count">${MOCK.todos[k].count}</span></button>`).join('');

  const topnHtml = MOCK.topIntents.map((t, i) => {
    const pct = (t.count / MOCK.topIntents[0].count * 100).toFixed(0);
    const colors = ['#1E40AF', '#3B82F6', '#6366f1', '#8b5cf6', '#a855f7', '#d946ef', '#ec4899', '#f97316', '#D97706', '#16A34A'];
    return `
      <li class="topn-item">
        <span class="topn-rank">${i + 1}</span>
        <div class="topn-bar-wrap">
          <div class="topn-bar" style="width:${pct}%;background:${colors[i]}"></div>
          <span class="topn-label">${t.name}</span>
        </div>
        <span class="topn-count">${t.count.toLocaleString()}</span>
      </li>`;
  }).join('');

  const statusHtml = MOCK.services.map(s => `
    <div class="status-item">
      <div class="status-dot ${s.status}"></div>
      <div>
        <div class="status-name">${s.name}</div>
        <div class="status-label">${s.label} · ${s.status === 'ok' ? '运行良好' : s.status === 'warn' ? '⚠ 负载偏高' : '❌ 异常'}</div>
      </div>
    </div>
  `).join('');

  main.innerHTML = `
    <div class="page-container">
      <div class="page-header">
        <div>
          <div class="page-title">工作台</div>
          <div class="page-subtitle">AI 智能客服运营管理系统概览</div>
        </div>
        <select class="time-filter">
          <option>近 7 天</option><option>今日</option><option>昨日</option><option>近 30 天</option>
        </select>
      </div>

      <div class="kpi-grid">${kpiHtml}</div>

      <div class="dashboard-grid">
        <div class="card">
          <div class="tabs" id="todo-tabs">${tabBtns}</div>
          <div class="card-body" id="todo-body" style="overflow-y:auto"></div>
        </div>
        <div style="display:flex;flex-direction:column;gap:14px">
          <div class="card">
            <div class="card-header"><span class="card-title">自助率趋势</span><span class="card-more">按日 ▾</span></div>
            <div class="card-body" style="padding:8px 12px"><div class="chart-container"><canvas id="chart-selfrate" height="130"></canvas></div></div>
          </div>
          <div class="card">
            <div class="card-header"><span class="card-title">高频意图 Top10</span><span class="card-more">近7天 ▾</span></div>
            <div class="card-body" style="padding:6px 12px;max-height:200px;overflow-y:auto"><ul class="topn-list">${topnHtml}</ul></div>
          </div>
        </div>
      </div>

      <div class="bottom-dual">
        <div>
          <div class="section-label">快捷操作</div>
          <div class="quick-actions">
            <button class="btn btn-primary">⬆ 上传新文档</button>
            <button class="btn">➕ 快捷手录 QA 对</button>
            <button class="btn">📝 文档解析校对</button>
            <button class="btn">🏠 服务大厅配置</button>
            <button class="btn">📱 客户端首屏配置</button>
          </div>
        </div>
        <div>
          <div class="section-label">接口状态监测</div>
          <div class="status-grid">${statusHtml}</div>
        </div>
      </div>
    </div>
  `;

  document.querySelectorAll('#todo-tabs .tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#todo-tabs .tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderTodoTable(btn.dataset.tab);
    });
  });
  renderTodoTable(tabKeys[0]);
  setTimeout(() => renderSelfRateChart(), 100);
}

function renderTodoTable(tabKey) {
  const data = MOCK.todos[tabKey];
  const body = document.getElementById('todo-body');
  const header = data.fields.map(f => `<th>${f}</th>`).join('');
  const rows = data.rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('');
  body.innerHTML = `
    <div class="table-wrapper">
      <table><thead><tr>${header}</tr></thead><tbody>${rows}</tbody></table>
    </div>
    <div style="text-align:right;margin-top:6px"><a class="card-more">查看全部 ${data.count} 条 →</a></div>
  `;
}

function renderSelfRateChart() {
  const ctx = document.getElementById('chart-selfrate');
  if (!ctx) return;
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: MOCK.chartDays,
      datasets: [
        { label: '自助率 %', data: MOCK.chartSelfRate, borderColor: '#16A34A', backgroundColor: 'rgba(22,163,74,0.06)', fill: true, tension: 0.4, pointRadius: 3, pointHoverRadius: 5, yAxisID: 'y', borderWidth: 2 },
        { label: '总提问量', data: MOCK.chartQueryVol, borderColor: '#3B82F6', backgroundColor: 'rgba(59,130,246,0.12)', type: 'bar', yAxisID: 'y1', borderRadius: 3, barThickness: 14 },
      ]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: true, position: 'top', labels: { color: '#64748B', font: { size: 11, family: 'Fira Sans' }, boxWidth: 10, padding: 10 } } },
      scales: {
        x: { ticks: { color: '#94a3b8', font: { size: 10 } }, grid: { color: 'rgba(0,0,0,0.04)' } },
        y: { position: 'left', min: 60, max: 100, ticks: { color: '#16A34A', font: { size: 10 }, callback: v => v + '%' }, grid: { color: 'rgba(0,0,0,0.04)' } },
        y1: { position: 'right', ticks: { color: '#3B82F6', font: { size: 10 } }, grid: { display: false } },
      },
      interaction: { mode: 'index', intersect: false },
    }
  });
}

// ---------- Knowledge Base ----------
function renderKnowledge() {
  const main = document.getElementById('main-content');

  function buildTree(nodes, depth = 0) {
    return nodes.map(n => {
      const hasChildren = n.children && n.children.length;
      return `
        <div class="tree-node" style="padding-left:${12 + depth * 16}px">
          <span class="tree-icon">${n.icon}</span> ${n.name}
        </div>
        ${hasChildren ? `<div class="tree-children">${buildTree(n.children, depth + 1)}</div>` : ''}
      `;
    }).join('');
  }

  function statusBadge(text) {
    const map = {
      '校对完成': 'success', '审核通过': 'success', '向量化完成': 'success', '多库同步完成': 'success', '分块检查完成': 'success',
      '解析中': 'info', '分块中': 'info', '向量化中': 'info', '多库同步中': 'info', '审核中': 'info',
      '待解析': 'neutral', '待校对': 'neutral', '待分块': 'neutral', '待审核': 'neutral', '待向量化': 'neutral', '待入库': 'neutral', '分块待检查': 'neutral',
      '解析异常': 'error', '分块异常': 'error', '向量化异常': 'error', '同步失败': 'error', '未通过': 'warning',
    };
    return `<span class="badge-status ${map[text] || 'neutral'}"><span class="dot"></span>${text}</span>`;
  }

  const docRows = MOCK.documents.map(d => `
    <tr>
      <td><input type="checkbox" class="checkbox" /></td>
      <td style="font-family:var(--font-mono);font-size:12px;color:var(--foreground-dim)">${d.id}</td>
      <td style="color:var(--accent);cursor:pointer">${d.name}</td>
      <td>${d.version}</td>
      <td>${statusBadge(d.parse)}</td>
      <td>${statusBadge(d.chunk)}</td>
      <td>${statusBadge(d.review)}</td>
      <td>${statusBadge(d.vector)}</td>
      <td>${statusBadge(d.storage)}</td>
      <td>${d.size} MB</td>
      <td><button class="btn-link btn-sm">操作 ▾</button></td>
    </tr>
  `).join('');

  main.innerHTML = `
    <div class="two-col">
      <div class="tree-sidebar">
        <div class="tree-title">知识库目录</div>
        ${buildTree(MOCK.knowledgeTree)}
      </div>
      <div class="col-main">
        <div class="page-header">
          <div><div class="page-title">知识库文档管理</div><div class="page-subtitle">零售业务 · 全部文档</div></div>
        </div>
        <div class="filter-bar">
          <input type="text" placeholder="搜索文档名称 / 文档ID..." />
          <select><option>文档状态：全部</option><option>待解析</option><option>待校对</option><option>校对完成</option></select>
          <button class="btn btn-sm">查询</button>
          <button class="btn btn-sm">重置</button>
        </div>
        <div class="op-bar">
          <button class="btn btn-primary">⬆ 上传文档</button>
          <button class="btn btn-sm">批量删除</button><button class="btn btn-sm">批量解析</button>
          <button class="btn btn-sm">批量分块</button><button class="btn btn-sm">批量审核</button>
          <button class="btn btn-sm">批量向量化</button><button class="btn btn-sm">批量入库</button>
        </div>
        <div class="card">
          <div class="table-wrapper">
            <table>
              <thead><tr>
                <th style="width:30px"><input type="checkbox" class="checkbox" /></th>
                <th>文档ID</th><th>文档名称</th><th>版本</th>
                <th>识别与解析</th><th>分块状态</th><th>审核状态</th>
                <th>向量化</th><th>入库</th><th>大小</th><th>操作</th>
              </tr></thead>
              <tbody>${docRows}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  `;
}

// ---------- Badcase ----------
function renderBadcase() {
  const main = document.getElementById('main-content');
  const rows = MOCK.badcases.map(b => {
    const statusCls = b.status === '待处理' ? 'warning' : b.status === '已处理' ? 'success' : 'neutral';
    return `<tr>
      <td>${b.time}</td><td>${b.port}</td>
      <td><span class="badge-status ${statusCls}"><span class="dot"></span>${b.status}</span></td>
      <td>${b.query}</td><td style="color:var(--foreground-dim)">${b.rewrite}</td>
      <td>${b.intent}</td><td>${b.route}</td>
      <td style="max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${b.reply}</td>
      <td>${b.reason}</td>
      <td><button class="btn-link btn-sm">详情</button><button class="btn-link btn-sm">修改Chunk</button></td>
    </tr>`;
  }).join('');

  main.innerHTML = `
    <div class="page-container">
      <div class="page-header"><div><div class="page-title">Badcase 管理</div><div class="page-subtitle">用户负反馈跟踪与知识库修复闭环</div></div></div>
      <div class="stat-mini-grid">
        <div class="stat-mini"><div class="stat-label">待处理总数</div><div class="stat-value" style="color:var(--warning)">23</div></div>
        <div class="stat-mini"><div class="stat-label">今日已处理</div><div class="stat-value" style="color:var(--positive)">7</div></div>
        <div class="stat-mini"><div class="stat-label">近7日处理率</div><div class="stat-value">68.5%</div></div>
        <div class="stat-mini"><div class="stat-label">本月点踩率</div><div class="stat-value" style="color:var(--destructive)">7.9%</div></div>
      </div>
      <div class="filter-bar">
        <select><option>来源：全部</option><option>行员端</option><option>App客户端</option><option>小程序客户端</option><option>网银PC端</option></select>
        <select><option>时间：近7天</option><option>近30天</option><option>近90天</option></select>
        <select><option>状态：全部</option><option>待处理</option><option>已处理</option><option>已忽略</option></select>
        <select><option>原因：全部</option><option>不理解</option><option>不准确</option><option>不完整</option><option>不相关</option><option>其他</option></select>
        <input type="text" placeholder="搜索 Query / 回复..." />
        <button class="btn btn-sm">查询</button>
      </div>
      <div class="card"><div class="table-wrapper"><table>
        <thead><tr><th>时间</th><th>端口</th><th>状态</th><th>Query</th><th>改写</th><th>意图</th><th>路由</th><th>回复</th><th>原因</th><th>操作</th></tr></thead>
        <tbody>${rows}</tbody>
      </table></div></div>
    </div>
  `;
}

// ---------- Query Logs ----------
function renderLogs() {
  const main = document.getElementById('main-content');
  const feedbackIcon = { '👍': 'success', '👎': 'error', '📋': 'info', '🔗': 'info', '—': 'neutral' };
  const rows = MOCK.queryLogs.map(l => `
    <tr>
      <td style="font-family:var(--font-mono);font-size:12px;color:var(--foreground-dim)">${l.id}</td>
      <td>${l.port}</td><td>${l.query}</td>
      <td style="color:var(--foreground-dim)">${l.rewrite}</td>
      <td>${l.intent}</td><td>${l.route}</td>
      <td style="max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${l.final}</td>
      <td><span class="badge-status ${feedbackIcon[l.feedback]}">${l.feedback}</span></td>
      <td><button class="btn-link btn-sm">详情</button></td>
    </tr>
  `).join('');

  main.innerHTML = `
    <div class="page-container">
      <div class="page-header"><div><div class="page-title">问答日志</div><div class="page-subtitle">全量对话记录与反馈统计</div></div></div>
      <div class="stat-mini-grid">
        <div class="stat-mini"><div class="stat-label">近7日点赞率</div><div class="stat-value" style="color:var(--positive)">62.3%</div></div>
        <div class="stat-mini"><div class="stat-label">近7日点踩率</div><div class="stat-value" style="color:var(--destructive)">7.9%</div></div>
        <div class="stat-mini"><div class="stat-label">近7日复制率</div><div class="stat-value">18.4%</div></div>
        <div class="stat-mini"><div class="stat-label">近7日链接点击率</div><div class="stat-value" style="color:var(--cyan)">11.2%</div></div>
      </div>
      <div class="filter-bar">
        <select><option>来源：全部</option><option>行员端</option><option>App客户端</option><option>小程序客户端</option><option>网银PC端</option></select>
        <select><option>时间：近7天</option><option>近30天</option><option>近90天</option></select>
        <select><option>反馈：全部</option><option>👍 点赞</option><option>👎 点踩</option><option>📋 复制</option><option>🔗 链接点击</option><option>无反馈</option></select>
        <input type="text" placeholder="搜索 Query / 回复..." />
        <button class="btn btn-sm">查询</button>
      </div>
      <div class="card"><div class="table-wrapper"><table>
        <thead><tr><th>QueryID</th><th>端口</th><th>Query</th><th>改写</th><th>意图</th><th>路由</th><th>最终回复</th><th>反馈</th><th>操作</th></tr></thead>
        <tbody>${rows}</tbody>
      </table></div></div>
    </div>
  `;
}

// ---------- Redis Cache ----------
function renderRedis() {
  const main = document.getElementById('main-content');
  const rows = MOCK.redisCache.map((r, i) => `
    <tr>
      <td style="text-align:center">${r.rank}</td>
      <td>${r.intent1}-${r.intent2}</td>
      <td style="text-align:right;color:var(--accent-light);font-weight:500">${r.hits.toLocaleString()}</td>
      <td class="context-target" data-type="query" data-index="${i}" style="cursor:context-menu">${r.query}</td>
      <td>${r.saved === '已录入' ? '<span class="badge-status success"><span class="dot"></span>已录入</span>' : '<span class="badge-status neutral">未录入</span>'}</td>
      <td class="context-target" data-type="reply" data-index="${i}" style="max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;cursor:context-menu">${r.reply}</td>
    </tr>
  `).join('');

  main.innerHTML = `
    <div class="page-container" style="display:flex;flex-direction:column;height:100vh;padding:24px;overflow:hidden">
      <div class="page-header" style="flex-shrink:0">
        <div><div class="page-title">Redis 缓存待审库</div><div class="page-subtitle">定期分析高频 Query 进行高速缓存录入确认</div></div>
      </div>
      <div class="filter-bar" style="flex-shrink:0">
        <select><option>时间范围：近7天</option><option>近1天</option></select>
        <select><option>意图名称：全部</option><option>账户查询</option></select>
        <select><option>录取状态：全部</option><option>已录入</option><option>未录入</option></select>
        <select><option>失效状态：全部</option><option>已失效</option><option>有效中</option></select>
      </div>

      <div class="two-col" id="redis-two-col" style="flex:1;overflow:hidden;margin-top:0">
        <div class="card" style="flex:1.4;display:flex;flex-direction:column;overflow:hidden">
          <div class="card-header">
            <span class="card-title">待审库聚合分析列表</span>
            <span style="font-size:12px;color:var(--foreground-dim)">* 在 Query 或回复文本上点击右键</span>
          </div>
          <div class="table-wrapper" style="overflow-y:auto;flex:1">
            <table id="redis-table">
              <thead style="position:sticky;top:0;background:white"><tr><th style="width:50px;text-align:center">排名</th><th>意图名称</th><th style="text-align:right">命中次数</th><th>Query <span style="font-size:11px;color:rgba(0,0,0,0.3)">(指着我点右键)</span></th><th>状态</th><th>大模型回复 <span style="font-size:11px;color:rgba(0,0,0,0.3)">(右键)</span></th></tr></thead>
              <tbody>${rows}</tbody>
            </table>
          </div>
        </div>
        <div class="card" style="flex:0.6;display:flex;flex-direction:column;overflow:hidden;background:var(--bg-base)">
          <div class="card-header"><span class="card-title">Redis 键值录入</span></div>
          <div class="card-body" style="overflow-y:auto;flex:1;padding:16px;display:flex;flex-direction:column;gap:12px">
            <div class="form-group">
              <label>Redis ID (不可修改)</label>
              <input type="text" class="form-input" disabled value="RKV-${Date.now().toString().slice(-6)}" />
            </div>
            <div style="display:flex;gap:12px">
              <div class="form-group" style="flex:1"><label>一级意图</label><input type="text" id="r-it1" class="form-input" /></div>
              <div class="form-group" style="flex:1"><label>二级意图</label><input type="text" id="r-it2" class="form-input" /></div>
            </div>
            <div class="form-group"><label>Query 键名</label><input type="text" id="r-q" class="form-input" placeholder="标准问法" /></div>
            <div class="form-group"><label>相似 Query</label><textarea id="r-sq" class="form-input" rows="2" placeholder="多句以换行分割"></textarea></div>
            <div class="form-group"><label>回答缓存 (Value)</label><textarea id="r-r" class="form-input" rows="3"></textarea></div>
            <div class="form-group"><label>失效策略</label>
              <select class="form-input"><option>长期有效</option><option>30天后</option></select>
            </div>
          </div>
          <div style="padding:16px;border-top:1px solid var(--border);display:flex;justify-content:flex-end;gap:10px;background:#fff">
            <button class="btn" onclick="document.querySelectorAll('#redis-two-col input:not([disabled]), #redis-two-col textarea').forEach(e=>e.value='')">清空</button>
            <button class="btn btn-primary" id="btn-mock-redis">正式录入</button>
          </div>
        </div>
      </div>
    </div>
    <div id="redis-ctx-menu" style="display:none;position:absolute;z-index:999;background:#fff;border:1px solid var(--border);border-radius:6px;box-shadow:0 4px 12px rgba(0,0,0,0.1);padding:4px;width:130px">
      <div id="redis-fill-btn" style="padding:8px;font-size:13px;cursor:pointer;border-radius:4px;color:var(--accent-light);">👉 填入右侧区域</div>
    </div>
  `;

  let currentCtx = null;
  const ctxMenu = document.getElementById('redis-ctx-menu');
  const fillBtn = document.getElementById('redis-fill-btn');

  document.querySelectorAll('.context-target').forEach(el => {
    el.addEventListener('contextmenu', e => {
      e.preventDefault();
      currentCtx = { type: el.dataset.type, index: el.dataset.index };
      ctxMenu.style.display = 'block';
      ctxMenu.style.left = e.pageX + 'px';
      ctxMenu.style.top = e.pageY + 'px';
    });
  });

  document.addEventListener('click', e => {
    if (ctxMenu) ctxMenu.style.display = 'none';
  });

  if (fillBtn) {
    fillBtn.addEventListener('click', e => {
      e.stopPropagation();
      ctxMenu.style.display = 'none';
      if (!currentCtx) return;
      const data = MOCK.redisCache[currentCtx.index];
      if (currentCtx.type === 'query') {
        document.getElementById('r-q').value = data.query;
        document.getElementById('r-sq').value = data.similar.join('\\n');
        document.getElementById('r-it1').value = data.intent1;
        document.getElementById('r-it2').value = data.intent2;
        showSysToast('🔗 已自动填入 Query 及意图！');
      } else {
        document.getElementById('r-r').value = data.reply;
        showSysToast('🔗 已填入模型回答内容！');
      }
    });

    fillBtn.addEventListener('mouseenter', () => fillBtn.style.background = 'var(--surface)');
    fillBtn.addEventListener('mouseleave', () => fillBtn.style.background = 'transparent');
  }

  const submitBtn = document.getElementById('btn-mock-redis');
  if (submitBtn) {
    submitBtn.addEventListener('click', () => {
      if (!document.getElementById('r-q').value) return showSysToast('⚠️ Query 为空不可录入', true);
      submitBtn.textContent = '写入中...';
      setTimeout(() => {
        showSysToast('✅ 成功录入 Redis高速缓存！');
        submitBtn.textContent = '正式录入';
      }, 600);
    });
  }
}

function showSysToast(msg, isError = false) {
  let toast = document.getElementById('sys-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'sys-toast';
    document.body.appendChild(toast);
  }
  toast.style = `position:fixed;top:20px;left:50%;transform:translateX(-50%);padding:10px 24px;border-radius:8px;z-index:10000;font-size:14px;box-shadow:0 10px 25px rgba(0,0,0,0.1);color:#fff;background:${isError ? '#DC2626' : '#10B981'};transition:all 0.3s`;
  toast.textContent = msg;
  setTimeout(() => toast.remove(), 2500);
}

// ==================== ROUTER ====================
function renderPage() {
  const pages = { dashboard: renderDashboard, knowledge: renderKnowledge, badcase: renderBadcase, logs: renderLogs, redis: renderRedis };
  (pages[currentPage] || renderDashboard)();
}
window.navigate = navigate;

// ==================== INIT ====================
renderSidebar();
renderPage();
