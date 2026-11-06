// Tab switching
    function switchTab(tabId, btn) {
      document.querySelectorAll('.tab-content').forEach(function(el) { el.classList.remove('active'); });
      document.querySelectorAll('.tab-btn').forEach(function(el) { el.classList.remove('active'); });
      document.getElementById(tabId).classList.add('active');
      btn.classList.add('active');
    }

    // Toolbar button active state
    function setActive(btn) {
      var parent = btn.parentElement;
      parent.querySelectorAll('.tool-btn').forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
    }

    // ===== Scroll Reveal Animation =====
    var revealObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(function(el) {
      revealObserver.observe(el);
    });

    // ===== Content Update System =====
    var updatePool = {
      quotes: [
        { text: "有些路，只能一个人走。", char: "路明非", context: "《龙族》" },
        { text: "我可以为你而死，但我不能为你而活。", char: "路鸣泽", context: "《龙族》" },
        { text: "王者并非生来为王，而是因为有人愿意追随。", char: "恺撒·加图索", context: "《龙族》" },
        { text: "人这一辈子，总得为了什么拼一次命。", char: "昂热", context: "《龙族》" },
        { text: "真正的强大，不是战胜别人，而是战胜自己。", char: "楚子航", context: "《龙族》" },
        { text: "我不怕死，我只怕遗憾。", char: "源稚生", context: "《龙族Ⅲ·黑月之潮》" },
        { text: '世界上最大的谎言，就是"我没事"。', char: "诺诺", context: "《龙族》" },
        { text: "龙族的历史，就是一部背叛与复仇的史诗。", char: "昂热", context: "《龙族》" },
        { text: "我不想当什么英雄，我只想保护我在乎的人。", char: "路明非", context: "《龙族》" },
        { text: "黄金瞳亮起的那一刻，便是龙族血脉觉醒之时。", char: "弗拉梅尔", context: "《龙族》" },
        { text: "你以为你是猎人，其实你才是猎物。", char: "路鸣泽", context: "《龙族》" },
        { text: "天若有情天亦老，人间正道是沧桑。", char: "源稚女", context: "《龙族Ⅲ·黑月之潮》" },
        { text: "活着的意义，就是找到值得你为之而死的东西。", char: "昂热", context: "《龙族》" },
        { text: "我不是什么救世主，我只是一个不想让自己后悔的衰小孩。", char: "路明非", context: "《龙族》" },
        { text: "当你凝视深渊的时候，深渊也在凝视你。", char: "楚子航", context: "《龙族》· 引用尼采" },
        { text: "最痛苦的不是失去，而是明明拥有却不得不放手。", char: "源稚生", context: "《龙族Ⅲ·黑月之潮》" },
        { text: "没有人天生就是强者，强者只是在软弱的时候没有倒下。", char: "恺撒·加图索", context: "《龙族》" },
        { text: "绘梨衣，如果可以，我想带你去看外面的世界。", char: "路明非", context: "《龙族Ⅲ·黑月之潮》" },
        { text: "时间会冲淡一切，但有些伤口，时间只会让血流的更久。", char: "楚子航", context: "《龙族》" },
        { text: "信仰不是神拯救了你，而是你选择相信神。", char: "弗拉梅尔", context: "《龙族》" },
        { text: "所谓命运，就是无论你愿不愿意，都会发生的事。", char: "路鸣泽", context: "《龙族》" },
        { text: "我不需要全世界都理解我，我只需要一个人懂我。", char: "路明非", context: "《龙族》" },
        { text: "刀锋入骨不得不战，背水争雄不胜则亡。", char: "源稚生", context: "《龙族Ⅲ·黑月之潮》" },
        { text: "有些人，注定只能活在你的回忆里。", char: "诺诺", context: "《龙族》" },
        { text: "强大的力量带来孤独，而孤独让人更强大。", char: "路鸣泽", context: "《龙族》" },
        { text: "选择比天赋更重要，坚持比选择更重要。", char: "昂热", context: "《龙族》" },
        { text: "我不怕成为怪物，我只怕保护不了我爱的人。", char: "楚子航", context: "《龙族Ⅱ·悼亡者之瞳》" },
        { text: " Sakura 最好了。", char: "上杉绘梨衣", context: "《龙族Ⅲ·黑月之潮》· 最后短信" },
        { text: "所谓的成长，就是不断失去，然后学会坚强。", char: "路明非", context: "《龙族》" },
        { text: "如果你不得不背叛，那就背叛得彻底一点。", char: "路鸣泽", context: "《龙族》" },
        { text: "每个人心中都住着一个魔鬼，只是有些人选择放纵，有些人选择封印。", char: "昂热", context: "《龙族》" },
        { text: "我不是英雄，我只是一个不想让自己后悔的衰小孩。", char: "路明非", context: "《龙族》" },
        { text: "人这一生，总要为了什么而燃烧一次。", char: "楚天骄", context: "《龙族》" },
        { text: "世界上最遥远的距离，不是生与死，而是我站在你面前，你却不知道我是谁。", char: "夏弥", context: "《龙族Ⅱ·悼亡者之瞳》" },
        { text: "我们都是小怪兽，总有一天会被正义的奥特曼杀死。", char: "上杉绘梨衣", context: "《龙族Ⅲ·黑月之潮》" },
        { text: "命运这种东西，生来就是要被踏于足下的。", char: "路鸣泽", context: "《龙族》" },
        { text: "如果世界背叛了你，那就让我来背叛这个世界。", char: "路明非", context: "《龙族》" },
        { text: "有些事，不是因为看到希望才坚持，而是坚持了才看到希望。", char: "楚子航", context: "《龙族》" },
        { text: "爱情是一场豪赌，而我，押上了全部。", char: "恺撒·加图索", context: "《龙族》" },
        { text: "当一个人不得不独自面对整个世界的时候，他要么成为英雄，要么成为疯子。", char: "昂热", context: "《龙族》" },
        { text: "人最怕的不是死亡，而是被遗忘。", char: "楚子航", context: "《龙族Ⅳ·奥丁之渊》" },
        { text: "或许我们都只是命运棋盘上的棋子，但我偏要做一个不听话的棋子。", char: "路明非", context: "《龙族》" },
        { text: "当你凝视深渊的时候，深渊也在凝视你。", char: "夏弥", context: "《龙族Ⅱ·悼亡者之瞳》" },
        { text: "所有的离别，都是为了更好的重逢。但有些离别，就是永别。", char: "路明非", context: "《龙族Ⅲ·黑月之潮》" },
        { text: "如果能重来，我一定不放开你的手。", char: "楚子航", context: "《龙族Ⅱ·悼亡者之瞳》" },
        { text: "世界那么大，能遇见你，已经是最大的奇迹。", char: "芬格尔", context: "《龙族》" }
      ],
      trivia: [
        { title: '路明非的"衰"属性', desc: '路明非在小说中被称为"衰小孩"，这个"衰"字贯穿了他的整个成长轨迹。从入学时成绩倒数第一，到每次任务都遭遇最危险的情况，路明非的"衰"其实是江南对<strong>普通人逆袭</strong>这一主题的另类诠释——最衰的人，反而承载了最重的命运。' },
        { title: "昂热的年龄之谜", desc: "昂热出生于1878年，到故事发生时已经超过130岁。他之所以能活这么久，不仅因为言灵·时间零能延缓自身时间流逝，更因为他心中<strong>永不熄灭的复仇之火</strong>。有读者推测，昂热可能是除了龙王之外活得最久的混血种。" },
        { title: "诺诺的红发", desc: "诺诺（陈墨瞳）标志性的红发不仅是一种外貌特征，在龙族设定中，红发往往与<strong>高纯度龙族血统</strong>有关。诺诺的侧写能力也与她的血统纯度直接相关。" },
        { title: "零的冰冷", desc: "零（Zero）的真实身份是俄罗斯混血种，她的言灵·镜瞳可以解析任何炼金物品和龙文。零对路明非的<strong>无条件信任</strong>是一个未解之谜——她似乎知道一些关于路明非的秘密，但从未透露。" },
        { title: "芬格尔的伪装", desc: "芬格尔被评为G级，表面上是学院的废柴和衰人。但实际上，他的<strong>真实实力</strong>和<strong>真实目的</strong>都是巨大的谜团。有读者发现，芬格尔每次都能在关键时刻出现并提供帮助，这绝不是巧合。" },
        { title: "白王血裔的特殊性", desc: "白王血裔（如蛇岐八家）与四大君主血裔最大的区别在于：白王血裔可以<strong>免疫言灵·皇帝</strong>的龙威。这是因为白王在叛乱前创造了言灵·神谕（序列121），专门用于对抗黑王的统治。" },
        { title: "路明非的父母之谜", desc: "路明非的父母<strong>路麟城</strong>和<strong>乔薇尼</strong>在故事中极少出现。路麟城被描述为一位沉默寡言的考古学家，乔薇尼则是一位温柔的母亲。但在龙族Ⅳ和Ⅴ中，越来越多的线索表明他们的身份并不简单——他们可能与龙族有某种深层的联系，甚至可能是某个古老秘密的守护者。" },
        { title: '卡塞尔学院的秘密课程', desc: '卡塞尔学院除了常规的屠龙课程外，还设有<strong>龙族历史学</strong>、<strong>炼金术基础</strong>、<strong>龙文破译</strong>、<strong>言灵控制</strong>等 secret 课程。其中"言灵控制"是最难通过的课程之一，因为言灵的觉醒往往伴随着失控的风险。' },
        { title: '绘梨衣的"小怪兽"日记', desc: '上杉绘梨衣有一本画满<strong>小怪兽</strong>插画的日记本。她把自己和路明非都画成小怪兽，因为在她看来，这个世界上的每个人都是某种意义上的怪物——只是有些怪物选择隐藏，有些选择面对。' },
        { title: "楚子航的君焰进化", desc: "楚子航的言灵<strong>君焰</strong>（序列89）原本是危险级言灵。但在多次暴血后，他的君焰展现出了远超常规的强大威力——可以将火焰压缩到极高的密度，甚至能够熔化龙族的青铜铠甲。这种进化是否与他父亲的血脉有关，至今仍是谜团。" },
        { title: "恺撒的家族诅咒", desc: "加图索家族是秘党中最显赫的家族，但同时也是<strong>被诅咒的家族</strong>。历代加图索家族成员都英年早逝，且死法离奇。恺撒的言灵·吸血镰和血统纯度都远超常人，但他心中最恐惧的，可能就是步上家族先辈的后尘。" },
        { title: '诺玛与EVA的双重人格', desc: '卡塞尔学院的AI系统<strong>诺玛</strong>和<strong>EVA</strong>共享同一个硬件核心，但拥有不同的"人格"。诺玛是温柔体贴的学院管家，EVA则是冷酷高效的战斗AI。有读者推测，EVA的人格可能来源于一位真实存在的混血种女性——一位与昂热校长有深刻羁绊的故人。' },
        { title: '死侍的真相', desc: '<strong>死侍</strong>是龙族血统超过临界血限的混血种，他们失去了人类的理智，沦为只知杀戮的怪物。但死侍并非完全没有意识——在某些特殊情况下，死侍会表现出对过去的<strong>碎片化记忆</strong>，甚至会对曾经认识的人产生某种"认知"。这让死侍的存在比单纯的怪物更加悲剧。' },
        { title: '龙族与克苏鲁神话的关联', desc: '江南在创作龙族时大量借鉴了<strong>克苏鲁神话</strong>的设定：不可名状的恐怖、古老存在的苏醒、人类在宇宙中的渺小。尼伯龙根的设定直接对应了克苏鲁神话中的"异界"概念，而龙王的归来则类似于旧日支配者的复苏。' },
        { title: "黑天鹅港的黑暗实验", desc: "<strong>黑天鹅港</strong>是赫尔佐格在北极圈建立的秘密实验基地。在那里，无数孤儿被当作实验品进行龙族血统的注射和纯化。源稚生和源稚女就是在那里被分离的——一个成为蛇岐八家的皇，一个成为极恶之鬼。赫尔佐格的实验记录至今仍是秘党最高级别的机密。" },
        { title: "龙族中的中国元素", desc: "龙族系列中融入了大量<strong>中国传统文化元素</strong>：诺顿化名李熊辅佐公孙述（真实历史人物）、北京地铁尼伯龙根、长江三峡青铜城、王恭厂大爆炸等。江南巧妙地将中国历史事件重新诠释为龙族活动的痕迹，让中国读者产生强烈的代入感。" },
        { title: '路鸣泽的"交易"本质', desc: '路鸣泽与路明非的"四分之一生命"交易，实际上可能并非真正的生命交换。有理论认为，每一次"交易"都是在<strong>逐步解放路明非体内的龙王之力</strong>——路鸣泽只是在帮他打开封印。这也解释了为什么路明非三次交易后仍然活着。' },
        { title: "昂热的折刀", desc: "昂热校长的折刀不仅是一件炼金武器，更是他<strong>复仇信念的象征</strong>。这把折刀陪伴他超过一个世纪，刺穿过龙王的鳞片，也染过无数死侍的血。折刀上的贤者之石来自弗拉梅尔，而折刀本身可能是初代狮心会的遗物。" },
        { title: '绘梨衣的审判言灵', desc: '绘梨衣的言灵<strong>审判（序列111）</strong>是已知最危险的高阶言灵之一。它的本质是对领域内物体下达"死亡"命令，切割不被赦免的所有存在。这种言灵的可怕之处在于——它几乎无法防御，被审判的目标会自行崩解。' },
        { title: "楚子航的暴血极限", desc: "楚子航是已知唯一能安全使用<strong>四层暴血</strong>的混血种。在第四层暴血状态下，他的身体会出现明显的龙化特征——龙鳞、龙角、甚至龙尾。但他凭借惊人的意志力，总能在彻底失控前恢复人类形态。" },
        { title: "路明非的言灵之谜", desc: "路明非的言灵至今没有明确的序列号和名称。他在每次交易中展现出的力量，似乎都超出了言灵体系的范畴。有理论认为，路明非的能力不属于任何已知言灵——那是<strong>龙王本身的权能</strong>。" },
        { title: "卡塞尔学院的S级", desc: "在卡塞尔学院的历史上，S级学生极为罕见。已知的S级包括：<strong>昂热</strong>（校长）、<strong>路麟城</strong>（路明非之父）、<strong>乔薇尼</strong>（路明非之母），以及<strong>路明非</strong>本人。这个血统等级不仅代表力量，更代表某种宿命的传承。" },
        { title: '蛇岐八家的内三家', desc: '蛇岐八家的内三家——<strong>源家、上杉家、橘家</strong>——掌握着家族的最高权力。其中源家世代传承"皇"的称号，上杉家守护白王圣骸，橘家则负责家族的外交和情报。外五家包括犬山家、樱井家、风魔家、龙马家和夜叉家。' },
        { title: "七宗罪的真正用途", desc: "七宗罪不仅是武器，更是一套<strong>血统鉴定系统</strong>。每一柄刀都对应一种罪孽，也对应一种特定的龙类血统弱点。只有血统足够高贵的人才能拔出对应的刀。路明非能拔出傲慢，暗示他的血统纯度远超常人。" },
        { title: "奥丁的真实身份", desc: "奥丁是全书最神秘的存在之一。有理论认为，奥丁可能是<strong>天空与风之王</strong>的化身，或者是某种更古老的存在。奥丁能够抹除一个人的存在痕迹，这种能力甚至超越了言灵体系，可能是某种更高层次的权能。" },
        { title: '龙族中的音乐元素', desc: '江南在龙族中大量使用<strong>古典音乐</strong>作为情感载体。路明非在东京与绘梨衣逛商场时听到的钢琴曲、楚子航与夏弥在地铁中对视时的BGM、以及"东京爱情故事"计划中贯穿始终的旋律，都赋予了场景更强的感染力。' },
        { title: '卡塞尔学院的学费', desc: '卡塞尔学院的学费<strong>全免</strong>，因为混血种的培养本身就是人类对抗龙族灭亡的关键投资。学院不仅免学费，还提供食宿、装备和任务补贴。但毕业后的代价可能是生命——执行部专员的平均寿命远低于常人。' },
        { title: '龙族与北欧神话', desc: '龙族的命名体系大量借鉴了<strong>北欧神话</strong>：诺顿（诺顿=Nidhogg，啃噬世界树根的龙）、芬里厄（Fenrir，北欧神话中的巨狼）、奥丁（北欧众神之父）。这些名字暗示了龙族与世界末日的联系——诸神黄昏。' }
      ],
      battles: [
        { title: "卡塞尔学院 · 康斯坦丁入侵", book: "龙族Ⅰ · 火之晨曦", loc: "美国 · 卡塞尔学院", status: "win", statusText: "胜利", body: "<p><strong>背景</strong>：青铜与火之王康斯坦丁提前苏醒，闯入卡塞尔学院寻找哥哥诺顿。学院进入最高警戒状态。</p><p><strong>经过</strong>：康斯坦丁展现出惊人的破坏力，一路突破学院防线。路明非在关键时刻被路鸣泽附身，使用言灵·不要死和路鸣泽的力量，成功拖延了康斯坦丁。最终康斯坦丁被学院合力击杀。</p><p><strong>结果</strong>：康斯坦丁死亡，但其龙骨十字被学院缴获。诺顿因此恢复记忆，为后续三峡屠龙埋下伏笔。</p>", participants: [{name:"路明非",hero:true},{name:"路鸣泽",hero:true},{name:"诺诺",hero:true},{name:"康斯坦丁",villain:true}] },
        { title: "东京街头 · 死侍猎杀", book: "龙族Ⅲ · 黑月之潮", loc: "日本 · 东京", status: "win", statusText: "胜利", body: "<p><strong>背景</strong>：蛇岐八家内部出现叛徒，大量死侍被释放到东京街头。路明非、楚子航和恺撒在东京执行任务时遭遇大规模死侍袭击。</p><p><strong>经过</strong>：三人在东京街头与死侍展开激战。楚子航使用君焰清理大片敌人，恺撒以精准的枪法和吸血镰言灵进行远程支援，路明非则在关键时刻使用路鸣泽的力量扭转战局。</p><p><strong>结果</strong>：死侍群被歼灭，但事件暴露了蛇岐八家内部的严重问题，为后续源稚生与源稚女的宿命对决埋下伏笔。</p>", participants: [{name:"路明非",hero:true},{name:"楚子航",hero:true},{name:"恺撒·加图索",hero:true},{name:"死侍群",villain:true}] },
        { title: "高天原 · 白王圣骸争夺", book: "龙族Ⅲ · 黑月之潮", loc: "日本 · 深海高天原", status: "draw", statusText: "无果", body: "<p><strong>背景</strong>：白王圣骸的封印地高天原被发现。各方势力——蛇岐八家、秘党、赫尔佐格的势力——都试图获取圣骸。</p><p><strong>经过</strong>：深海探险队在高压环境中艰难前行，遭遇古代龙族守卫和诡异的海底生物。圣骸的封印被触动，释放出强烈的龙族元素波动。</p><p><strong>结果</strong>：圣骸未能被任何一方获得，但赫尔佐格借此机会掌握了更多关于圣骸的秘密，为他后续在红井的阴谋铺平了道路。</p>", participants: [{name:"源稚生",hero:true},{name:"路明非",hero:true},{name:"楚子航",hero:true},{name:"赫尔佐格势力",villain:true}] },
        { title: "000号高架桥 · 奥丁初现", book: "龙族 · 前传/回忆", loc: "中国 · 000号高架桥", status: "loss", statusText: "惨败", body: "<p><strong>背景</strong>：2004年7月4日，楚子航和父亲楚天骄在雨夜驾车经过000号高架桥，误入奥丁的尼伯龙根。这是楚子航人生中最重要的一天——也是他失去父亲的一天。</p><p><strong>经过</strong>：楚天骄展现出惊人的实力，使用言灵·时间零与奥丁周旋。但奥丁的力量远超想象，楚天骄最终为了保护儿子，独自面对奥丁，从此消失。楚子航在暴雨中醒来，发现自己躺在路边，父亲的车和人都不见了。</p><p><strong>结果</strong>：楚天骄失踪，生死不明。楚子航觉醒言灵·君焰，被卡塞尔学院发现并招募。这一事件成为楚子航心中永远的痛，也埋下了他与奥丁宿命对决的种子。</p>", participants: [{name:"楚天骄",hero:true},{name:"楚子航",hero:true},{name:"奥丁",villain:true}] },
        { title: "黑天鹅港 · 毁灭之夜", book: "龙族Ⅲ · 黑月之潮", loc: "北极圈 · 黑天鹅港", status: "win", statusText: "逃脱", body: "<p><strong>背景</strong>：赫尔佐格在黑天鹅港进行龙族血统纯化实验，培养了无数混血种实验体。零号（零）是其中最特别的存在——她拥有完美的血统控制能力和言灵·镜瞳。</p><p><strong>经过</strong>：零号带领其他实验体发动起义，摧毁了黑天鹅港的实验设施。赫尔佐格在混乱中逃脱，但带走了最重要的实验数据。零号在冰天雪地中独自逃生，最终被俄罗斯混血种组织收留。</p><p><strong>结果</strong>：黑天鹅港被毁，但赫尔佐格的实验数据得以保存。源稚生和源稚女在混乱中被带往日本。零号的身世成为她日后加入卡塞尔学院的伏笔。</p>", participants: [{name:"零号（零）",hero:true},{name:"实验体们",hero:true},{name:"赫尔佐格",villain:true}] },
        { title: '蛇岐八家 · 内乱之战', book: '龙族Ⅲ · 黑月之潮', loc: '日本 · 蛇岐八家本部', status: 'win', statusText: '平定', body: '<p><strong>背景</strong>：蛇岐八家内部因白王圣骸的问题产生严重分歧。一部分家族成员支持秘党的强硬立场，另一部分则认为应该守护圣骸。内乱一触即发。</p><p><strong>经过</strong>：源稚生作为蛇岐八家的"皇"，不得不面对家族内部的分裂。他在源氏重工与叛乱的家族成员展开对决，使用言灵·王权压制了叛乱者。但这场内斗让蛇岐八家的实力大损。</p><p><strong>结果</strong>：叛乱被平定，但蛇岐八家的团结已不复存在。这为后续赫尔佐格趁虚而入、窃取白王之力创造了条件。源稚生的威信也因此受到质疑。</p>', participants: [{name:'源稚生',hero:true},{name:'蛇岐八家忠臣',hero:true},{name:'叛乱家族成员',villain:true}] },
        { title: '卡塞尔学院 · 自由一日', book: '龙族Ⅰ · 火之晨曦', loc: '美国 · 卡塞尔学院', status: 'draw', statusText: '玩乐', body: '<p><strong>背景</strong>："自由一日"是卡塞尔学院的传统活动，在这一天，学生可以使用任何手段（包括言灵）进行模拟战斗，目标是夺取对方的"军旗"。狮心会和学生会每年都会在这一天展开激烈对决。</p><p><strong>经过</strong>：路明非在入学第一天就赶上了"自由一日"。他在混乱中意外成为了决定胜负的关键人物——学生会和狮心会的会长都因他而"阵亡"。路明非稀里糊涂地成为了学生会的"名誉主席"。</p><p><strong>结果</strong>：这场看似荒唐的"战争"实际上是学院对新生的一次特殊测试。路明非的表现引起了昂热校长的注意，为他后来成为S级学生铺平了道路。</p>', participants: [{name:'路明非',hero:true},{name:'恺撒·加图索',hero:true},{name:'楚子航',hero:true},{name:'学生会成员',hero:true},{name:'狮心会成员',hero:true}] },
        { title: '东京爱情故事 · 最后的约会', book: '龙族Ⅲ · 黑月之潮', loc: '日本 · 东京', status: 'loss', statusText: '悲剧', body: '<p><strong>背景</strong>：路明非答应带绘梨衣去东京最好的地方玩。他们一起去了 Disneyland、水族馆、天空树……绘梨衣在笔记本上写满了"Sakura最好了"。这是全书最温暖、也最虐心的章节。</p><p><strong>经过</strong>：在最后一次约会中，路明非带绘梨衣去了东京塔。绘梨衣第一次看到了整个东京的夜景，她在路明非怀里睡着了。但路明非不知道，这是他与绘梨衣最后一次见面。</p><p><strong>结果</strong>：约会结束后，绘梨衣被蛇岐八家带回，最终在红井中被赫尔佐格抽干血液而死。路明非收到的最后一条短信是："Sakura最好了。"这场"战役"没有硝烟，却比任何屠龙之战都更加惨烈。</p>', participants: [{name:'路明非',hero:true},{name:'上杉绘梨衣',hero:true},{name:'赫尔佐格',villain:true}] }
      ],
      yanling: [
        { num: "28", name: "阴流", level: "低阶", levelClass: "low", effect: "控制领域内气流方向，可制造狂风或真空", user: "恺撒·加图索" },
        { num: "47", name: "炽", level: "中阶", levelClass: "mid", effect: "释放高温火焰，温度可达数千度", user: "未知" },
        { num: "66", name: "真空之蛇", level: "低阶", levelClass: "low", effect: "抽干领域内空气，制造真空环境", user: "未知" },
        { num: "77", name: "炽日", level: "高阶", levelClass: "high", effect: "释放强烈光芒，可致盲领域内所有生物", user: "未知" },
        { num: "92", name: "涡", level: "危险", levelClass: "danger", effect: "控制水流形成巨大漩涡，可吞噬船只", user: "未知" },
        { num: "96", name: "深渊", level: "高危", levelClass: "danger", effect: "控制领域内重力方向，可使人坠入天空", user: "未知" },
        { num: "17", name: "阴雷", level: "低阶", levelClass: "low", effect: "压缩空气后释放，产生爆炸性冲击波", user: "酒德麻衣" },
        { num: "22", name: "蛇", level: "低阶", levelClass: "low", effect: "释放生物电流探查周围环境和生命体", user: "叶胜" },
        { num: "33", name: "琉璃梵城", level: "中阶", levelClass: "mid", effect: "构建透明防御壁，可抵挡物理和言灵攻击", user: "未知" },
        { num: "44", name: "催眠", level: "低阶", levelClass: "low", effect: "对目标进行精神暗示，可修改短期记忆", user: "富山雅史" },
        { num: "50", name: "纹蛇", level: "中阶", levelClass: "mid", effect: "在物体表面留下追踪印记，可远距离感知", user: "未知" },
        { num: "56", name: " ROT " , level: "中阶", levelClass: "mid", effect: "加速领域内有机物的腐烂过程", user: "未知" },
        { num: "61", name: "月光", level: "中阶", levelClass: "mid", effect: "释放清冷月光般的治愈能量，可加速伤口愈合", user: "未知" },
        { num: "74", name: "风王之瞳", level: "中阶", levelClass: "mid", effect: "召唤飓风，可吹飞敌人或形成风刃", user: "夏弥/耶梦加得" },
        { num: "82", name: "不要死", level: "中阶", levelClass: "mid", effect: "强制维持生命体征，可暂时阻止死亡", user: "路明非" },
        { num: "86", name: "青铜御座", level: "中阶", levelClass: "mid", effect: "增强肌肉力量，使身体坚硬如青铜", user: "芬格尔" },
        { num: "101", name: "天地为炉", level: "高危", levelClass: "danger", effect: "将领域内物质转化为武器或工具", user: "未知" }
      ],
      alchemy: [
        { title: "茧化术", tag: "龙族秘术", desc: "<p>龙王在濒死时可以通过<strong>茧化</strong>进入休眠状态，将意识和力量封存在一个茧中。茧可以经历漫长岁月后重新孵化，使龙王复活。</p><p>诺顿和康斯坦丁在青铜城中都有自己的茧。茧化术是龙族最重要的生存手段，也是混血种最难彻底消灭龙王的原因。</p>", props: "诺顿茧（青铜城） · 康斯坦丁茧（冰窖） · 茧化周期：数百年至数千年" },
        { title: "血源印记", tag: "血统标记", desc: "<p>混血种体内龙族血统达到临界血限时，身体会出现<strong>血源印记</strong>——龙鳞、龙角、龙尾等龙族特征。</p><p>血源印记的出现意味着混血种正在向死侍转化。楚子航在暴血到第四层时，身体出现了明显的血源印记，但他凭借意志力压制住了龙血的侵蚀。</p>", props: "表现形式：龙鳞/龙角/龙尾 · 危险等级：极高 · 不可逆性：部分可逆" },
        { title: "龙文翻译机", tag: "现代装备", desc: "<p>卡塞尔学院研发的便携式<strong>龙文翻译设备</strong>，可以快速破译大部分常见龙文。设备内置了EVA的离线翻译模块。</p><p>在青铜城探险和北京尼伯龙根行动中，龙文翻译机都发挥了关键作用。但对于高阶龙文和言灵吟唱，翻译机的准确率会大幅下降。</p>", props: "制作者：卡塞尔学院装备部 · 准确率：常规龙文95%+ · 限制：无法翻译绝密言灵" },
        { title: "莫洛托夫鸡尾酒", tag: "炼金燃烧弹", desc: "<p>卡塞尔学院装备部改良的<strong>炼金燃烧弹</strong>，内部装有高纯度龙血提取物。爆炸后可以产生持续燃烧的白色火焰，对龙类和死侍有极强的杀伤力。</p><p>这种武器在实战中非常有效，但使用起来也有一定风险——如果操作不当，火焰可能会反噬使用者。</p>", props: "制作者：装备部 · 杀伤范围：半径15米 · 对龙类伤害加成300%" },
        { title: "贤者之石", tag: "炼金材料", desc: "<p><strong>贤者之石</strong>是炼金术的终极产物，传说中可以点石成金、治愈一切疾病。在龙族世界中，贤者之石是极为稀有的炼金材料，可以极大地增强言灵的威力。</p><p>弗拉梅尔副校长掌握着贤者之石的炼制方法，但他极少对外透露。昂热校长的折刀上就镶嵌有一颗贤者之石。</p>", props: "持有者：弗拉梅尔 · 功能：增强言灵/治愈/延寿 · 稀有度：传说级" },
        { title: "折刀 · 昂热的武器", tag: "炼金武器", desc: "<p>昂热校长的标志性武器是一把<strong>折刀</strong>，刀身由炼金秘银打造，刀柄镶嵌着贤者之石。这把折刀陪伴昂热超过一个世纪，见证了无数屠龙之战。</p><p>折刀并非大型武器，但在昂热手中配合言灵·时间零，可以发挥出惊人的杀伤力。昂热曾用这把折刀刺穿过龙王的鳞片。</p>", props: "材质：炼金秘银+贤者之石 · 持有者：昂热 · 历史：100年+" },
        { title: "血统稳定剂", tag: "医疗制剂", desc: "<p><strong>血统稳定剂</strong>是卡塞尔学院医学部研发的特殊药物，可以暂时抑制龙族血统的暴走。对于经常使用暴血秘术的混血种来说，这是救命的药剂。</p><p>但稳定剂也有副作用——长期使用会导致血统活性下降，言灵威力减弱。楚子航在使用暴血后，经常需要注射稳定剂来恢复理智。</p>", props: "制作者：卡塞尔学院医学部 · 效果：抑制龙血暴走 · 副作用：降低血统活性" },
        { title: "炼金子弹", tag: "特种弹药", desc: "<p>卡塞尔学院执行部标配的<strong>炼金子弹</strong>，弹头由炼金秘银和龙骨粉末混合铸造。这种子弹可以穿透龙类的鳞片，对死侍也有极强的杀伤力。</p><p>炼金子弹的造价极其昂贵，每颗子弹的成本相当于一辆普通轿车。因此执行部专员只有在面对高阶目标时才会使用。</p>", props: "材质：秘银+龙骨粉末 · 穿甲能力：S级 · 造价：极高" },
        { title: "龙族血清", tag: "实验制剂", desc: "<p><strong>龙族血清</strong>是从龙血中提取的浓缩制剂，注射后可以短时间内大幅提升混血种的血统纯度和身体素质。这是卡塞尔学院的秘密武器之一。</p><p>但龙族血清的风险极高——注射后血统很容易超过临界血限，导致使用者直接转化为死侍。只有在绝境中，执行部专员才会被授权使用。</p>", props: "来源：龙血提取 · 效果：血统临时提升 · 风险：死侍化概率50%+" }
      ]
    };

    // Track used items to avoid duplicates
    var usedItems = { quotes: [], trivia: [], battles: [], yanling: [], alchemy: [] };

    function openUpdatePanel() {
      document.getElementById('updatePanel').classList.add('open');
    }
    function closeUpdatePanel() {
      document.getElementById('updatePanel').classList.remove('open');
    }

    function showToast(text) {
      var toast = document.getElementById('updateToast');
      document.getElementById('toastText').textContent = text;
      toast.classList.add('show');
      setTimeout(function() { toast.classList.remove('show'); }, 2500);
    }

    function getRandomItem(type) {
      var pool = updatePool[type];
      var used = usedItems[type];
      // Find unused items
      var available = [];
      for (var i = 0; i < pool.length; i++) {
        if (used.indexOf(i) === -1) available.push(i);
      }
      if (available.length === 0) {
        // Reset if all used
        usedItems[type] = [];
        available = Object.keys(pool).map(Number);
      }
      var idx = available[Math.floor(Math.random() * available.length)];
      usedItems[type].push(idx);
      return pool[idx];
    }

    function createQuoteCard(q) {
      var div = document.createElement('div');
      div.className = 'quote-card new-content';
      div.innerHTML = '<div class="quote-text">' + q.text + '</div><div class="quote-line"></div><div class="quote-char">' + q.char + '</div><div class="quote-context">' + q.context + '</div>';
      return div;
    }

    function createTriviaCard(t) {
      var div = document.createElement('div');
      div.className = 'trivia-card new-content';
      div.innerHTML = '<div class="tria-title">' + t.title + '</div><div class="tria-desc">' + t.desc + '</div>';
      return div;
    }

    function createBattleCard(b) {
      var pHtml = '';
      for (var i = 0; i < b.participants.length; i++) {
        var p = b.participants[i];
        var cls = p.hero ? 'hero' : (p.villain ? 'villain' : '');
        pHtml += '<span class="' + cls + '">' + p.name + '</span>';
      }
      var div = document.createElement('div');
      div.className = 'battle-card new-content';
      div.innerHTML = '<div class="battle-title">' + b.title + '</div><div class="battle-meta"><span class="battle-book">' + b.book + '</span><span class="battle-loc">' + b.loc + '</span><span class="battle-status ' + b.status + '">' + b.statusText + '</span></div><div class="battle-body">' + b.body + '</div><div class="battle-participants"><h4>参战方</h4>' + pHtml + '</div>';
      return div;
    }

    function createYanlingRow(y) {
      var tr = document.createElement('tr');
      tr.className = 'new-content';
      tr.innerHTML = '<td class="ws-num">' + y.num + '</td><td class="ws-name">' + y.name + '</td><td><span class="ws-level ' + y.levelClass + '">' + y.level + '</span></td><td>' + y.effect + '</td><td class="ws-user">' + y.user + '</td>';
      return tr;
    }

    function createAlchemyCard(a) {
      var div = document.createElement('div');
      div.className = 'alchemy-card new-content';
      div.innerHTML = '<div class="alc-title">' + a.title + '</div><span class="alc-tag">' + a.tag + '</span><div class="alc-desc">' + a.desc + '</div><div class="alc-props"><h4>特性</h4><p>' + a.props + '</p></div>';
      return div;
    }

    function doUpdate(type) {
      var btn = document.getElementById('updateBtn');
      btn.classList.add('updating');
      closeUpdatePanel();

      setTimeout(function() {
        var item, container;
        if (type === 'random') {
          var types = ['quotes', 'trivia', 'battles', 'yanling', 'alchemy'];
          type = types[Math.floor(Math.random() * types.length)];
        }

        switch(type) {
          case 'quotes':
            item = getRandomItem('quotes');
            container = document.querySelector('#sec-quotes .quote-grid');
            if (container) {
              container.appendChild(createQuoteCard(item));
              showToast('已新增 1 条经典语录');
            }
            break;
          case 'trivia':
            item = getRandomItem('trivia');
            container = document.querySelector('#sec-trivia .trivia-grid');
            if (container) {
              container.appendChild(createTriviaCard(item));
              showToast('已新增 1 条幕后彩蛋');
            }
            break;
          case 'battles':
            item = getRandomItem('battles');
            container = document.querySelector('#sec-battles .battle-grid');
            if (container) {
              container.appendChild(createBattleCard(item));
              showToast('已新增 1 场经典战役');
            }
            break;
          case 'yanling':
            item = getRandomItem('yanling');
            container = document.querySelector('#tab-yanling .ws-table tbody');
            if (container) {
              container.appendChild(createYanlingRow(item));
              showToast('已新增 1 条言灵知识');
            }
            break;
          case 'alchemy':
            item = getRandomItem('alchemy');
            container = document.querySelector('#sec-alchemy .alchemy-grid');
            if (container) {
              container.appendChild(createAlchemyCard(item));
              showToast('已新增 1 条炼金科技');
            }
            break;
        }
        btn.classList.remove('updating');
      }, 600);
    }