(function() {

  // === Character data with detailed descriptions ===
  var characters = {
    // === 主角团 ===
    lumingfei: {
      name: '路明非',
      role: '男主角 · S级混血种',
      desc: '卡塞尔学院唯一的S级学生。表面是平凡的"衰小孩"，实际拥有与龙族相关的惊人血统。与魔鬼弟弟路鸣泽签订了生命契约——每次交易消耗四分之一生命，换取神一般的力量。曾三次交易：一杀诺顿、二杀耶梦加得、三杀白王。暗恋诺诺，被绘梨衣深爱。他的真实身份是全书最大谜团。',
      tags: ['S级血统', '学生会主席', '言灵未知', '衰小孩', '龙族血统'],
      size: 80,
      cat: 0,
      books: [1,2,3,4,5]
    },
    lumingze: {
      name: '路鸣泽',
      role: '魔鬼 · 身份不明',
      desc: '自称路明非的弟弟，穿着黑西装红领结的小男孩模样。对世界充满恨意，掌握超越常理的力量。每次赋予路明非力量都要收取四分之一生命。他像命运的交易者，微笑着将路明非推向深渊。真实身份可能与龙族始祖有关，是全书最神秘的存在。',
      tags: ['魔鬼', '路明非的弟弟', '言灵不明', '身份成谜', '命运交易者'],
      size: 60,
      cat: 0,
      books: [1,2,3,4,5]
    },
    nuonuo: {
      name: '诺诺',
      role: 'A级混血种 · 侧写师',
      desc: '本名陈墨瞳，A级血统，路明非的师姐。她是路明非生命中第一束光——在CC1000次列车上把他从平凡生活带入了龙族世界。拥有侧写能力，能从蛛丝马迹还原事件全貌。凯撒的未婚妻，已答应求婚。性格独立果断，是学院中最耀眼的女生之一。',
      tags: ['A级血统', '学生会副主席', '侧写能力', '凯撒未婚妻', '路明非暗恋'],
      size: 55,
      cat: 3,
      books: [1,2,3,4,5]
    },
    chuzihang: {
      name: '楚子航',
      role: '超A级 · 狮心会会长',
      desc: '超A级血统的混血种，狮心会会长，路明非的面瘫师兄。掌握禁忌秘术"爆血"，言灵为君焰（可释放毁灭性的火焰）。性格冷峻内敛但内心炽热。父亲楚天骄神秘失踪后，他在北京地铁任务中爱上了夏弥，却发现她正是大地与山之王耶梦加得。第四部中被奥丁抹去了存在。',
      tags: ['超A级血统', '狮心会会长', '言灵·君焰', '爆血秘术', '面瘫师兄'],
      size: 60,
      cat: 2,
      books: [1,2,3,4,5]
    },
    kaisa: {
      name: '凯撒·加图索',
      role: 'A级 · 学生会会长',
      desc: '意大利加图索家族继承人，A级血统，学生会会长。外表英俊自信，内心重情重义。虽然出身最古老的混血种家族之一，却从不以权势压人。诺诺的未婚夫，与路明非既是竞争对手也是生死战友。在东京任务中与楚子航、路明非组成铁三角。',
      tags: ['A级血统', '学生会会长', '加图索家族', '言灵·镰鼬', '诺诺未婚夫'],
      size: 55,
      cat: 2,
      books: [1,2,3,4,5]
    },
    huiliyi: {
      name: '上杉绘梨衣',
      role: '蛇岐八家上杉家主 · 月读命',
      desc: '蛇岐八家内三家的上杉家主，言灵为"审判"——足以冰封整个东京的恐怖力量。因为无法控制言灵被误认为哑巴，被源稚生关在森严的宅邸中。路明非带她走出牢笼，逛美容院、玩游戏机、看外面的世界，成为她生命中唯一的温暖。在笔记本上写满了"Sakura最好了"。最终被赫尔佐格带到红井作为白王复活的容器，抽干血液而死。',
      tags: ['言灵·审判', '月读命', '蛇岐八家', '试管婴儿', '白王容器'],
      size: 58,
      cat: 3,
      books: [3]
    },
    xiami: {
      name: '夏弥',
      role: '大地与山之王 · 耶梦加得',
      desc: '四大龙王之一大地与山之王的另一半，化名夏弥混入人类世界。她美丽、活泼、贪吃，像一只慵懒的猫。楚子航爱上了这个转学生，却发现她的真实身份是毁灭性的龙族君主。在最终的战斗中，她被觉醒的芬里厄吞噬，成为完整的龙王。她死前对楚子航说："不要死。"',
      tags: ['大地与山之王', '耶梦加得', '龙族君主', '转学生', '楚子航恋人'],
      size: 50,
      cat: 4,
      books: [2]
    },
    yuanzhisheng: {
      name: '源稚生',
      role: '蛇岐八家少主 · 皇',
      desc: '蛇岐八家的最高领袖，被称为"皇"。表面上是不苟言笑的年轻领袖，内心却厌倦杀戮，渴望平凡生活。他是上杉越基因创造的试管婴儿，绘梨衣和源稚女的哥哥。最终在与弟弟源稚女（风间琉璃）的对决中双双落入红井。',
      tags: ['蛇岐八家少主', '皇', '言灵·白樱', '上杉越后代', '厌倦杀戮'],
      size: 55,
      cat: 1,
      books: [3]
    },
    yuanzhinv: {
      name: '源稚女/风间琉璃',
      role: '蛇岐八家 · 恶鬼风间琉璃',
      desc: '源稚生的双胞胎弟弟，幼年被赫尔佐格从黑天鹅港带走，遭受非人折磨后人格分裂，成为了蛇岐八家最恐惧的恶鬼"风间琉璃"。他拥有绝美的容颜和残忍的性格，以杀戮为乐。与哥哥源稚生有着痛苦的血缘羁绊，最终两人在红井中走向终结。',
      tags: ['风间琉璃', '恶鬼', '源稚生之弟', '人格分裂', '赫尔佐格实验品'],
      size: 52,
      cat: 4,
      books: [3]
    },
    heierzhuoge: {
      name: '赫尔佐格',
      role: '黑天鹅港科学家 · 王将',
      desc: '第三部的大反派，一个疯狂的科学家。在黑天鹅港进行龙族血统纯化实验，炸毁港口后带走了源稚生和源稚女。在日本布局多年，以王将的身份潜伏于蛇岐八家。最终在红井中窃取白王之力，将绘梨衣作为容器抽干血液，成为新的白王。被路明非第三次交易后杀死。',
      tags: ['黑天鹅港', '王将', '科学家', '白王窃取者', '杀害绘梨衣'],
      size: 55,
      cat: 4,
      books: [3]
    },
    feneger: {
      name: '芬格尔',
      role: 'G级混血种 · 路明非室友',
      desc: '路明非的室友和最好的兄弟。表面上被评为G级（最低等级），实际上隐藏着惊人的实力和秘密。看起来是一个懒散贪吃的大块头，但在关键时刻总是挺身而出。他的真实身份与卡塞尔学院的秘密计划有关。冷知识：他是"芬里厄"这个名字的来源之一。',
      tags: ['G级血统', '路明非室友', '隐藏实力', '最佳损友', '秘密身份'],
      size: 48,
      cat: 2,
      books: [1,2,3,4,5]
    },
    ling: {
      name: '零',
      role: 'A级混血种 · 学生会成员',
      desc: '诺诺的闺蜜，学生会成员。外表像精致的洋娃娃，拥有冷冰冰的机械般的美感。A级血统，战斗力出色。虽然看似缺乏感情，但对诺诺忠心耿耿。平时和诺诺形影不离。',
      tags: ['A级血统', '学生会成员', '诺诺闺蜜', '冷美人', '战斗力强'],
      size: 42,
      cat: 2,
      books: [1,2,3,4,5]
    },
    angre: {
      name: '昂热',
      role: '卡塞尔学院校长 · 秘党领袖',
      desc: '卡塞尔学院的校长，秘党（混血种组织）的核心领袖。一位活了超过百岁的混血种老人，外表却只有五六十岁的模样。拥有超乎想象的智慧和权力。他一手策划了学院的所有行动，将路明非引入龙族世界的幕后推手。他深深隐藏着自己的真实目的。',
      tags: ['秘党领袖', '超A级血统', '学院校长', '百年寿命', '幕后策划者'],
      size: 50,
      cat: 1,
      books: [1,2,3,4,5]
    },
    jiudemayi: {
      name: '酒德麻衣',
      role: '秘党执行部 · "老板"下属',
      desc: '秘党执行部的精英成员，直属神秘的"老板"。一头黑发挑染紫色，穿着黑色紧身作战服，拥有致命的战斗力和冷艳的外表。在东京任务中执行"东京爱情故事"计划，促成路明非与绘梨衣的相遇。她的"老板"身份至今仍是谜。',
      tags: ['秘党执行部', '紫色挑染', '战斗力极强', '"老板"下属', '东京任务'],
      size: 45,
      cat: 2,
      books: [1,2,3,4,5]
    },
    shangshanyue: {
      name: '上杉越',
      role: '前蛇岐八家上杉家主',
      desc: '蛇岐八家前任上杉家主，源稚生、源稚女、绘梨衣三人的基因提供者。一位活了数百年的传奇混血种，拥有强大的龙族血统。他在黑天鹅港进行实验，用自身基因创造了三个试管婴儿后代。性格狂放不羁，是一个有故事的老江湖。',
      tags: ['前任上杉家主', '数百岁', '基因提供者', '龙族血统', '传奇人物'],
      size: 45,
      cat: 1,
      books: [3]
    },
    lulincheng: {
      name: '路麟城',
      role: '路明非之父 · S级混血种',
      desc: '路明非的父亲，S级血统。表面是一个普通的中年男人，但拥有着远超常人的龙族血统。他和妻子乔薇尼一起将路明非送入了平凡的生活，隐藏了家族的秘密。他们的真实身份和行踪是第五部的关键谜题。',
      tags: ['S级血统', '路明非之父', '身份成谜', '乔薇尼之夫', '隐藏秘密'],
      size: 45,
      cat: 1,
      books: [5]
    },
    qiaoweini: {
      name: '陈雯雯',
      role: '路明非高中暗恋对象',
      desc: '路明非高中时期的暗恋对象，一个普通善良的高中女生。她是路明非平凡生活中的温暖回忆，代表着路明非成为"衰小孩"时期的全部寄托。后来她有了自己的生活，与路明非渐行渐远。',
      tags: ['高中同学', '路明非初恋暗恋', '平凡少女', '白月光'],
      size: 38,
      cat: 3,
      books: [1]
    },
    chutianjiao: {
      name: '楚天骄',
      role: '楚子航之父 · 超A级混血种',
      desc: '楚子航的父亲，超A级血统的混血种。在一次执行任务后神秘失踪，留下年幼的楚子航和母亲。他的失踪与"爆血"秘术有关，也与更大的龙族阴谋相连。在第四部中暗示他可能仍然存在于某个空间中。',
      tags: ['超A级血统', '楚子航之父', '神秘失踪', '爆血秘术', '可能仍活着'],
      size: 42,
      cat: 1,
      books: [2,4]
    },
    nuodong: {
      name: '薯片妞',
      role: '蛇岐八家成员 · 东京任务协助',
      desc: '一个开朗可爱的日本女孩，外号"薯片妞"。在东京任务中协助路明非等人，执行"老板"的"东京爱情故事"计划，暗中撮合路明非和绘梨衣。性格大大咧咧，喜欢吃薯片，是沉重的龙族故事中难得的轻松角色。',
      tags: ['蛇岐八家', '薯片爱好者', '东京任务', '撮合绘梨衣', '"老板"下属'],
      size: 38,
      cat: 2,
      books: [3]
    },
    // === 新增角色 ===
    suxiaoyan: {
      name: '苏小妍',
      role: '楚子航之母',
      desc: '楚子航的母亲，一位美丽优雅的贵妇。在楚天骄神秘失踪后，她改嫁他人，但始终关心着楚子航。她不知道龙族世界的真相，只是单纯地希望儿子能过上正常人的生活。楚子航对她的感情复杂而深沉。',
      tags: ['楚子航之母', '优雅贵妇', '改嫁', '不知情者', '母爱的羁绊'],
      size: 40,
      cat: 3,
      books: [2,4]
    },
    jiudeyaji: {
      name: '酒德亚纪',
      role: '执行部成员 · 叶胜搭档',
      desc: '酒德麻衣的妹妹，执行部年轻成员，叶胜的搭档和恋人。性格温柔内敛，与姐姐麻衣的冷艳截然不同。在三峡青铜城任务中与叶胜一起潜入水下，最终为救叶胜而牺牲。她的死是龙族第一部中最令人心碎的时刻之一。',
      tags: ['执行部', '叶胜恋人', '酒德麻衣之妹', '温柔内敛', '三峡牺牲'],
      size: 40,
      cat: 2,
      books: [1]
    },
    nuoma: {
      name: '诺玛/EVA',
      role: '卡塞尔学院人工智能',
      desc: '卡塞尔学院的核心人工智能系统，以银发少女的形象投影出现。她掌管着学院的所有电子系统，从门禁到武器系统无所不能。她似乎拥有自己的情感，对路明非等人表现出超越程序的关心。她的底层代码中隐藏着不为人知的秘密。',
      tags: ['人工智能', '学院核心系统', '银发投影', '情感AI', '秘密代码'],
      size: 42,
      cat: 2,
      books: [1,2,3,4,5]
    },
    fulameier: {
      name: '弗拉梅尔',
      role: '卡塞尔学院副校长',
      desc: '卡塞尔学院的副校长，昂热的挚友。一个打扮成牛仔模样的 eccentric 老人，精通炼金术，是学院中炼金术课程的首席教授。看似疯疯癫癫，实则拥有深不可测的实力和智慧。他与昂热共同守护着学院的秘密。',
      tags: ['副校长', '炼金术大师', '牛仔打扮', '昂热挚友', '疯癫外表'],
      size: 44,
      cat: 1,
      books: [1,2,3,4,5]
    },
    yesheng: {
      name: '叶胜',
      role: '执行部专员 · 酒德亚纪搭档',
      desc: '卡塞尔学院执行部的优秀专员，酒德亚纪的搭档和恋人。年轻有为，勇敢果断。在三峡青铜城任务中负责潜入水下探索龙王遗迹，最终为完成任务而牺牲。他与亚纪的爱情是龙族第一部中最纯洁的悲剧。',
      tags: ['执行部专员', '酒德亚纪恋人', '勇敢果断', '三峡牺牲', '年轻有为'],
      size: 42,
      cat: 2,
      books: [1]
    },
    mansi: {
      name: '曼斯·龙德施泰特',
      role: '执行部教授 · 三峡任务指挥官',
      desc: '卡塞尔学院执行部的资深教授，三峡青铜城任务的现场指挥官。一位严厉但关心学生的导师，在任务中为保护学生而壮烈牺牲。他的死是路明非第一次直面龙族世界的残酷。',
      tags: ['执行部教授', '三峡指挥官', '严厉导师', '壮烈牺牲', '爱护学生'],
      size: 42,
      cat: 1,
      books: [1]
    },
    gudelian: {
      name: '古德里安',
      role: '教授 · 路明非导师',
      desc: '路明非在卡塞尔学院的导师教授，一位和蔼可亲的学者。他负责引导路明非了解龙族世界的基本知识，是路明非在学院中的第一位引路人。性格温和，对学生的关怀无微不至。',
      tags: ['学院教授', '路明非导师', '和蔼学者', '引路人', '温和关怀'],
      size: 40,
      cat: 1,
      books: [1,2]
    },
    shinaide: {
      name: '施耐德',
      role: '教授 · 楚子航导师',
      desc: '卡塞尔学院的严厉教授，楚子航的导师。因某次任务中遭遇龙类而面部严重烧伤，常年戴着呼吸面罩。虽然外表恐怖，但对学生极其负责，是楚子航成长路上的重要引路人。',
      tags: ['学院教授', '楚子航导师', '面部烧伤', '严厉负责', '呼吸面罩'],
      size: 42,
      cat: 1,
      books: [1,2,3,4]
    },
    kangstanding: {
      name: '康斯坦丁',
      role: '青铜与火之王（弟）',
      desc: '四大君主之一青铜与火之王的弟弟，诺顿的孪生兄弟。外表是一个天真无邪的少年，对哥哥诺顿有着绝对的依赖和崇拜。当诺顿被唤醒后，康斯坦丁也随之苏醒，最终被路明非和诺诺联手击败。',
      tags: ['青铜与火之王', '诺顿之弟', '天真少年', '龙族君主', '依赖哥哥'],
      size: 48,
      cat: 4,
      books: [1]
    },
    nuodun: {
      name: '诺顿',
      role: '青铜与火之王（兄）',
      desc: '四大君主之一青铜与火之王的哥哥，康斯坦丁的孪生兄弟。龙族中掌控火焰与金属的至高存在。苏醒后展现出毁灭性的力量，是路明非面对的第一位龙王。最终被路明非与路鸣泽第一次交易后杀死。',
      tags: ['青铜与火之王', '康斯坦丁之兄', '火焰君主', '毁灭力量', '第一位龙王'],
      size: 52,
      cat: 4,
      books: [1]
    },
    fenlier: {
      name: '芬里厄',
      role: '大地与山之王（兄）',
      desc: '四大君主之一大地与山之王的哥哥，耶梦加得（夏弥）的孪生兄弟。体型庞大如山的龙形生物，拥有吞噬一切的恐怖力量。在夏弥被楚子航杀死后，他吞噬了夏弥的尸体，成为完整的大地与山之王。',
      tags: ['大地与山之王', '耶梦加得之兄', '吞噬之力', '龙形巨兽', '兄妹羁绊'],
      size: 50,
      cat: 4,
      books: [2]
    },
    baiwang: {
      name: '白王',
      role: '龙族至高神性',
      desc: '龙族中最神秘的存在，被称为"精神元素"的掌控者。传说中与黑王并肩的至高存在，拥有操控心灵和精神的恐怖能力。赫尔佐格窃取绘梨衣的血液后化身新白王，成为路明非面临的最强大敌人，最终被路明非第三次交易后终结。',
      tags: ['精神元素', '至高神性', '心灵操控', '赫尔佐格化身', '终极敌人'],
      size: 55,
      cat: 4,
      books: [3]
    },
    aoding: {
      name: '奥丁',
      role: '北欧主神 · 尼伯龙根之主',
      desc: '北欧神话中的主神，在龙族世界中以神秘的存在出现。他拥有抹去一个人在世界中存在痕迹的恐怖能力。第四部中，他抹去了楚子航的存在，让全世界只有路明非记得他。奥丁的真实身份与龙族的最高秘密有关。',
      tags: ['北欧主神', '存在抹除', '尼伯龙根', '楚子航消失', '最高秘密'],
      size: 55,
      cat: 4,
      books: [4]
    },
    qiaoweini2: {
      name: '乔薇尼',
      role: '路明非之母 · S级混血种',
      desc: '路明非的母亲，S级血统的混血种。与丈夫路麟城一起将路明非隐藏于平凡世界中。她的真实身份和行踪是第五部的关键谜团之一。作为母亲，她对路明非的爱深沉而隐秘，为了保护儿子不惜一切代价。',
      tags: ['S级血统', '路明非之母', '身份成谜', '深沉母爱', '第五部关键'],
      size: 42,
      cat: 1,
      books: [5]
    },
    suxi: {
      name: '苏茜',
      role: '狮心会成员 · 楚子航搭档',
      desc: '狮心会的优秀成员，楚子航的得力搭档。暗恋楚子航但从未表白，只是默默守护在他身边。性格坚强独立，战斗能力出色。在楚子航被世界遗忘后，她是少数还能隐约记得他的人之一。',
      tags: ['狮心会', '楚子航搭档', '暗恋楚子航', '坚强独立', '隐约记忆'],
      size: 40,
      cat: 2,
      books: [1,2,3,4]
    },
    yingjingxiaomu: {
      name: '樱井小暮',
      role: '猛鬼众干部 · 风间琉璃下属',
      desc: '猛鬼众的核心干部之一，风间琉璃（源稚女）最信任的手下。她美丽而危险，对风间琉璃有着近乎狂热的忠诚。在猛鬼众与蛇岐八家的战争中，她多次执行关键任务。最终被蛇岐八家捕获，在审讯中仍坚守对风间琉璃的忠诚。',
      tags: ['猛鬼众', '风间琉璃下属', '忠诚', '美丽危险', '蛇岐八家敌人'],
      size: 38,
      cat: 4,
      books: [3]
    },
    yablowying: {
      name: '矢吹樱',
      role: '蛇岐八家 · 源稚生护卫',
      desc: '源稚生的贴身护卫和亲信，沉默寡言的武士少女。她自幼被蛇岐八家收养，对源稚生忠心耿耿，甘愿为他赴死。在源稚生与风间琉璃的最终对决中，她为了保护源稚生而牺牲。',
      tags: ['蛇岐八家', '源稚生护卫', '忠心耿耿', '武士少女', '牺牲'],
      size: 38,
      cat: 2,
      books: [3]
    },
    paxijiatuosuo: {
      name: '帕西·加图索',
      role: '加图索家族秘书 · A级混血种',
      desc: '加图索家族的贴身秘书，恺撒最信任的亲信之一。A级血统，拥有言灵·无尘之地。性格冷静理性，做事一丝不苟，是家族中少有的不骄不躁之人。他暗中保护恺撒，并在关键时刻为家族做出重要决策。',
      tags: ['加图索家族', 'A级血统', '恺撒亲信', '言灵·无尘之地', '冷静理性'],
      size: 40,
      cat: 2,
      books: [1,2,3,4,5]
    },
    meiniieke: {
      name: '梅涅克·卡塞尔',
      role: '狮心会创始人 · 传奇混血种',
      desc: '狮心会的创始人，卡塞尔学院的传奇人物。在1900年的"夏之哀悼"事件中，他带领初代狮心会全员战死，仅昂热一人幸存。他的牺牲奠定了现代秘党对抗龙族的基础。昂热一生都在为他和同伴的复仇而战。',
      tags: ['狮心会创始人', '传奇人物', '夏之哀悼', '昂热挚友', '战死'],
      size: 42,
      cat: 1,
      books: [1]
    }
  };

  // === Relationship links ===
  var relationships = [
    // 路明非的核心关系
    { s: 'lumingfei', t: 'lumingze', name: '兄弟/生命契约', color: '#e94560', w: 3.5, type: 'solid' },
    { s: 'lumingfei', t: 'nuonuo', name: '暗恋', color: '#ff6b9d', w: 2.5, type: 'dashed' },
    { s: 'lumingfei', t: 'chuzihang', name: '师兄弟', color: '#2ed573', w: 2, type: 'solid' },
    { s: 'lumingfei', t: 'kaisa', name: '好友/对手', color: '#2ed573', w: 2, type: 'solid' },
    { s: 'lumingfei', t: 'feneger', name: '室友/挚友', color: '#2ed573', w: 1.8, type: 'solid' },
    { s: 'lumingfei', t: 'huiliyi', name: '被深爱', color: '#ff6b9d', w: 2.5, type: 'dashed' },
    { s: 'lumingfei', t: 'ling', name: '同学', color: '#2ed573', w: 1.5, type: 'solid' },
    { s: 'lumingfei', t: 'angre', name: '校长/学生', color: '#7c3aed', w: 1.5, type: 'solid' },
    { s: 'lumingfei', t: 'lulincheng', name: '父子', color: '#ffd700', w: 2, type: 'solid' },
    { s: 'lumingfei', t: 'qiaoweini', name: '曾经暗恋', color: '#ff6b9d', w: 1.5, type: 'dashed' },
    { s: 'lumingfei', t: 'heierzhuoge', name: '杀死（复仇）', color: '#ff4757', w: 3, type: 'solid' },
    { s: 'lumingfei', t: 'qiaoweini2', name: '母子', color: '#ffd700', w: 2, type: 'solid' },
    { s: 'lumingfei', t: 'gudelian', name: '师生', color: '#7c3aed', w: 1.5, type: 'solid' },
    { s: 'lumingfei', t: 'nuoma', name: '被守护', color: '#2ed573', w: 1.2, type: 'dashed' },
    // 诺诺的关系
    { s: 'nuonuo', t: 'kaisa', name: '未婚夫妻', color: '#ff6b9d', w: 3, type: 'solid' },
    { s: 'nuonuo', t: 'ling', name: '闺蜜', color: '#2ed573', w: 1.5, type: 'solid' },
    { s: 'nuonuo', t: 'jiudemayi', name: '同僚', color: '#2ed573', w: 1.2, type: 'solid' },
    { s: 'nuonuo', t: 'kangstanding', name: '联手击败', color: '#ff4757', w: 2, type: 'dashed' },
    // 楚子航的关系
    { s: 'chuzihang', t: 'xiami', name: '相爱/宿敌', color: '#ff6b9d', w: 2.5, type: 'dashed' },
    { s: 'chuzihang', t: 'chutianjiao', name: '父子', color: '#ffd700', w: 2, type: 'solid' },
    { s: 'chuzihang', t: 'suxiaoyan', name: '母子', color: '#ffd700', w: 1.8, type: 'solid' },
    { s: 'chuzihang', t: 'shinaide', name: '师生', color: '#7c3aed', w: 1.5, type: 'solid' },
    { s: 'chuzihang', t: 'suxi', name: '搭档', color: '#2ed573', w: 1.5, type: 'solid' },
    { s: 'chuzihang', t: 'fenlier', name: '击杀', color: '#ff4757', w: 2.5, type: 'solid' },
    { s: 'chuzihang', t: 'aoding', name: '被抹除', color: '#ff4757', w: 3, type: 'dashed' },
    // 凯撒的关系
    { s: 'kaisa', t: 'jiudemayi', name: '同僚', color: '#2ed573', w: 1.2, type: 'solid' },
    // 蛇岐八家关系
    { s: 'yuanzhisheng', t: 'huiliyi', name: '兄妹', color: '#ffd700', w: 2, type: 'solid' },
    { s: 'yuanzhisheng', t: 'yuanzhinv', name: '兄弟/宿命对决', color: '#ff4757', w: 2.5, type: 'dashed' },
    { s: 'yuanzhinv', t: 'huiliyi', name: '兄妹', color: '#ffd700', w: 2, type: 'solid' },
    { s: 'shangshanyue', t: 'yuanzhisheng', name: '基因之父', color: '#ffd700', w: 1.5, type: 'dashed' },
    { s: 'shangshanyue', t: 'yuanzhinv', name: '基因之父', color: '#ffd700', w: 1.5, type: 'dashed' },
    { s: 'shangshanyue', t: 'huiliyi', name: '基因之父', color: '#ffd700', w: 1.5, type: 'dashed' },
    // 赫尔佐格的邪恶线
    { s: 'heierzhuoge', t: 'huiliyi', name: '杀害', color: '#ff4757', w: 3.5, type: 'solid' },
    { s: 'heierzhuoge', t: 'yuanzhinv', name: '培养/控制', color: '#7c3aed', w: 2.5, type: 'dashed' },
    { s: 'heierzhuoge', t: 'yuanzhisheng', name: '操纵', color: '#7c3aed', w: 2, type: 'dashed' },
    { s: 'heierzhuoge', t: 'baiwang', name: '窃取化身', color: '#7c3aed', w: 3, type: 'dashed' },
    { s: 'heierzhuoge', t: 'shangshanyue', name: '利用', color: '#7c3aed', w: 1.5, type: 'dashed' },
    // 龙王关系
    { s: 'nuodun', t: 'kangstanding', name: '孪生兄弟', color: '#ffd700', w: 2.5, type: 'solid' },
    { s: 'xiami', t: 'fenlier', name: '孪生兄妹', color: '#ffd700', w: 2.5, type: 'solid' },
    { s: 'lumingfei', t: 'nuodun', name: '击杀', color: '#ff4757', w: 2.5, type: 'solid' },
    { s: 'lumingfei', t: 'baiwang', name: '击杀', color: '#ff4757', w: 3, type: 'solid' },
    // 教授/学院关系
    { s: 'angre', t: 'fulameier', name: '挚友/同事', color: '#2ed573', w: 1.5, type: 'solid' },
    { s: 'angre', t: 'shinaide', name: '同事', color: '#2ed573', w: 1.2, type: 'solid' },
    { s: 'angre', t: 'gudelian', name: '同事', color: '#2ed573', w: 1.2, type: 'solid' },
    { s: 'angre', t: 'mansi', name: '上下级', color: '#7c3aed', w: 1.5, type: 'solid' },
    { s: 'angre', t: 'jiudemayi', name: '上下级', color: '#7c3aed', w: 1.5, type: 'solid' },
    { s: 'angre', t: 'nuoma', name: '控制/共生', color: '#7c3aed', w: 1.5, type: 'dashed' },
    { s: 'fulameier', t: 'shinaide', name: '同事', color: '#2ed573', w: 1.2, type: 'solid' },
    { s: 'mansi', t: 'yesheng', name: '上下级', color: '#7c3aed', w: 1.5, type: 'solid' },
    { s: 'mansi', t: 'jiudeyaji', name: '上下级', color: '#7c3aed', w: 1.5, type: 'solid' },
    { s: 'shinaide', t: 'suxi', name: '师生', color: '#7c3aed', w: 1.2, type: 'solid' },
    // 执行部关系
    { s: 'yesheng', t: 'jiudeyaji', name: '恋人/搭档', color: '#ff6b9d', w: 2.5, type: 'solid' },
    { s: 'jiudemayi', t: 'nuodong', name: '同僚', color: '#2ed573', w: 1.5, type: 'solid' },
    { s: 'jiudemayi', t: 'jiudeyaji', name: '姐妹', color: '#ffd700', w: 1.5, type: 'solid' },
    // 父母关系
    { s: 'lulincheng', t: 'qiaoweini2', name: '夫妻', color: '#ff6b9d', w: 2, type: 'solid' },
    { s: 'chutianjiao', t: 'suxiaoyan', name: '前妻/前夫', color: '#ff6b9d', w: 1.5, type: 'dashed' },
    // 其他关系
    { s: 'feneger', t: 'angre', name: '隐藏关系', color: '#7c3aed', w: 1.5, type: 'dashed' },
    { s: 'nuoma', t: 'fulameier', name: '协助', color: '#2ed573', w: 1.2, type: 'dashed' },
    { s: 'aoding', t: 'chutianjiao', name: '关联', color: '#7c3aed', w: 1.5, type: 'dashed' },
    // 新角色关系
    { s: 'yuanzhinv', t: 'yingjingxiaomu', name: '主从', color: '#7c3aed', w: 2, type: 'solid' },
    { s: 'yuanzhisheng', t: 'yablowying', name: '主从', color: '#2ed573', w: 2, type: 'solid' },
    { s: 'kaisa', t: 'paxijiatuosuo', name: '主从/信任', color: '#2ed573', w: 2, type: 'solid' },
    { s: 'angre', t: 'meiniieke', name: '挚友/战友', color: '#ffd700', w: 2.5, type: 'solid' },
    { s: 'yablowying', t: 'yuanzhinv', name: '敌对', color: '#ff4757', w: 1.5, type: 'dashed' },
    { s: 'paxijiatuosuo', t: 'nuonuo', name: '同僚', color: '#2ed573', w: 1.2, type: 'solid' }
  ];

  // === Build ECharts data ===
  var categories = [
    { name: '主角', itemStyle: { color: '#e94560' } },
    { name: '重要角色', itemStyle: { color: '#ffd700' } },
    { name: '师友/同盟', itemStyle: { color: '#2ed573' } },
    { name: '感情线', itemStyle: { color: '#ff6b9d' } },
    { name: '反派/敌对', itemStyle: { color: '#ff4757' } }
  ];

  var nodes = [];
  var base = 'assets/';
  for (var key in characters) {
    var c = characters[key];
    nodes.push({
      id: key,
      name: c.name,
      symbol: 'image://' + base + 'avatar_' + key + '.png',
      symbolSize: c.size,
      category: c.cat,
      label: {
        show: true,
        position: 'bottom',
        color: '#e8e8f0',
        fontSize: c.size > 55 ? 13 : 11,
        fontWeight: c.size > 55 ? 'bold' : 'normal',
        textBorderColor: 'rgba(10,10,20,0.9)',
        textBorderWidth: 2,
        distance: 8
      },
      itemStyle: {
        borderColor: ['#e94560','#ffd700','#2ed573','#ff6b9d','#ff4757'][c.cat],
        borderWidth: 2
      }
    });
  }

  var links = [];
  for (var i = 0; i < relationships.length; i++) {
    var r = relationships[i];
    links.push({
      source: r.s,
      target: r.t,
      name: r.name,
      lineStyle: {
        color: r.color,
        width: r.w,
        type: r.type,
        curveness: 0.15,
        opacity: 0.75
      }
    });
  }

  // === Initialize Chart ===
  var chart = echarts.init(document.getElementById('chart-relations'), null, { renderer: 'canvas' });

  var option = {
    tooltip: {
      trigger: 'item',
      formatter: function(params) {
        if (params.dataType === 'edge') {
          var src = characters[params.data.source];
          var tgt = characters[params.data.target];
          return '<div style="font-size:13px;color:#e8e8f0;padding:4px 8px;">' +
            (src ? src.name : params.data.source) + ' → ' + (tgt ? tgt.name : params.data.target) +
            '<br/><span style="color:#ffd700;font-weight:600;">' + params.data.name + '</span></div>';
        }
        if (params.dataType === 'node') {
          var c = characters[params.data.id];
          if (c) {
            var booksLabel = c.books.map(function(b) { return '龙族' + b; }).join('、');
            return '<div style="max-width:280px;font-size:13px;color:#e8e8f0;padding:4px 8px;">' +
              '<div style="font-size:15px;font-weight:700;color:#ffd700;margin-bottom:4px;">' + c.name + '</div>' +
              '<div style="color:#e94560;font-size:12px;margin-bottom:6px;">' + c.role + '</div>' +
              '<div style="color:#8888aa;font-size:11px;margin-bottom:6px;">出场：' + booksLabel + '</div>' +
              '<div style="color:#a0a0b8;line-height:1.6;">' + c.desc.substring(0, 80) + '...</div>' +
              '</div>';
          }
        }
        return params.name;
      },
      backgroundColor: 'rgba(17,17,34,0.95)',
      borderColor: '#2a2a4a',
      textStyle: { color: '#e8e8f0' },
      extraCssText: 'border-radius:8px;box-shadow:0 4px 20px rgba(0,0,0,0.5);'
    },
    legend: {
      data: categories.map(function(c) { return c.name; }),
      textStyle: { color: '#8888aa', fontSize: 12 },
      bottom: 10,
      itemGap: 18,
      itemWidth: 12,
      itemHeight: 12
    },
    series: [{
      type: 'graph',
      layout: 'force',
      animation: false,
      roam: true,
      draggable: true,
      label: { show: true },
      edgeSymbol: ['none', 'arrow'],
      edgeSymbolSize: [0, 6],
      edgeLabel: {
        show: true,
        fontSize: 9,
        color: '#8888aa',
        formatter: function(x) {
          var important = ['兄弟/生命契约', '暗恋', '未婚夫妻', '兄妹', '杀害', '相爱/宿敌', '父子', '被深爱', '击杀', '母子', '恋人/搭档', '孪生兄弟', '孪生兄妹', '被抹除'];
          if (important.indexOf(x.data.name) >= 0) return x.data.name;
          return '';
        }
      },
      data: nodes,
      links: links,
      categories: categories,
      force: {
        repulsion: 600,
        edgeLength: [80, 220],
        gravity: 0.08,
        friction: 0.6
      },
      lineStyle: {
        curveness: 0.15,
        opacity: 0.75
      },
      emphasis: {
        focus: 'adjacency',
        itemStyle: {
          borderWidth: 4,
          shadowBlur: 20,
          shadowColor: 'rgba(233,69,96,0.5)'
        },
        lineStyle: { width: 4, opacity: 1 }
      },
      blur: {
        itemStyle: { opacity: 0.3 },
        lineStyle: { opacity: 0.1 }
      }
    }]
  };

  chart.setOption(option);

  // === Click handler to update info panel ===
  chart.on('click', function(params) {
    if (params.dataType === 'node') {
      var c = characters[params.data.id];
      if (c) {
        var panel = document.getElementById('info-panel');
        var tagsHtml = c.tags.map(function(t) {
          return '<span class="info-tag">' + t + '</span>';
        }).join('');
        var booksHtml = c.books.map(function(b) {
          return '<span class="info-tag book-tag">龙族' + b + '</span>';
        }).join('');
        panel.innerHTML =
          '<div class="info-header">' +
            '<img src="assets/avatar_' + params.data.id + '.png" class="info-avatar" alt="' + c.name + '">' +
            '<div class="info-header-text">' +
              '<div class="info-name">' + c.name + '</div>' +
              '<div class="info-role">' + c.role + '</div>' +
            '</div>' +
          '</div>' +
          '<div class="info-desc">' + c.desc + '</div>' +
          '<div class="info-section">标签</div>' +
          '<div class="info-tags">' + tagsHtml + '</div>' +
          '<div class="info-section">出场卷次</div>' +
          '<div class="info-tags">' + booksHtml + '</div>';
        panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }
  });

  // === Search functionality ===
  window.searchCharacter = function(query) {
    query = query.trim().toLowerCase();
    if (!query) {
      chart.dispatchAction({ type: 'downplay' });
      return;
    }
    var found = [];
    for (var key in characters) {
      var c = characters[key];
      if (c.name.includes(query) || c.role.includes(query) || c.tags.some(function(t) { return t.includes(query); })) {
        found.push(key);
      }
    }
    if (found.length > 0) {
      chart.dispatchAction({ type: 'downplay' });
      found.forEach(function(id) {
        chart.dispatchAction({ type: 'highlight', seriesIndex: 0, dataIndex: nodes.findIndex(function(n) { return n.id === id; }) });
      });
      // Focus on first found
      var firstIdx = nodes.findIndex(function(n) { return n.id === found[0]; });
      if (firstIdx >= 0) {
        var pos = chart.convertToPixel({ seriesIndex: 0 }, [nodes[firstIdx].x, nodes[firstIdx].y]);
      }
    }
  };

  // === Filter by relationship type ===
  window.filterRelation = function(type) {
    var filteredLinks = links;
    var filteredNodes = nodes;

    if (type === 'all') {
      chart.setOption({ series: [{ data: nodes, links: links }] });
      return;
    }

    var colorMap = {
      'protagonist': '#e94560',
      'romance': '#ff6b9d',
      'ally': '#2ed573',
      'enemy': '#ff4757',
      'family': '#ffd700',
      'subordinate': '#7c3aed'
    };

    var targetColor = colorMap[type];
    if (!targetColor) return;

    filteredLinks = links.filter(function(l) {
      return l.lineStyle.color === targetColor;
    });

    var activeNodeIds = {};
    filteredLinks.forEach(function(l) {
      activeNodeIds[l.source] = true;
      activeNodeIds[l.target] = true;
    });

    filteredNodes = nodes.map(function(n) {
      var active = activeNodeIds[n.id];
      return Object.assign({}, n, {
        itemStyle: Object.assign({}, n.itemStyle, {
          opacity: active ? 1 : 0.15
        }),
        label: Object.assign({}, n.label, {
          opacity: active ? 1 : 0.15
        })
      });
    });

    filteredLinks = filteredLinks.map(function(l) {
      return Object.assign({}, l, {
        lineStyle: Object.assign({}, l.lineStyle, {
          opacity: 0.9
        })
      });
    });

    chart.setOption({ series: [{ data: filteredNodes, links: filteredLinks }] });
  };

  // === Highlight characters by book ===
  window.highlightBook = function(bookNum) {
    if (bookNum === 'all') {
      chart.setOption({
        series: [{
          data: nodes.map(function(n) {
            return Object.assign({}, n, {
              itemStyle: Object.assign({}, n.itemStyle, { opacity: 1, shadowBlur: 0 }),
              label: Object.assign({}, n.label, { opacity: 1 })
            });
          }),
          links: links.map(function(l) {
            return Object.assign({}, l, { lineStyle: Object.assign({}, l.lineStyle, { opacity: 0.75 }) });
          })
        }]
      });
      return;
    }

    var highlightedNodes = nodes.map(function(n) {
      var c = characters[n.id];
      var inBook = c && c.books.indexOf(bookNum) >= 0;
      return Object.assign({}, n, {
        itemStyle: Object.assign({}, n.itemStyle, {
          opacity: inBook ? 1 : 0.15,
          shadowBlur: inBook ? 15 : 0,
          shadowColor: inBook ? 'rgba(233,69,96,0.6)' : 'transparent'
        }),
        label: Object.assign({}, n.label, {
          opacity: inBook ? 1 : 0.15,
          fontWeight: inBook ? 'bold' : 'normal'
        })
      });
    });

    var highlightedLinks = links.map(function(l) {
      var srcInBook = characters[l.source] && characters[l.source].books.indexOf(bookNum) >= 0;
      var tgtInBook = characters[l.target] && characters[l.target].books.indexOf(bookNum) >= 0;
      var inBook = srcInBook && tgtInBook;
      return Object.assign({}, l, {
        lineStyle: Object.assign({}, l.lineStyle, {
          opacity: inBook ? 0.85 : 0.05
        })
      });
    });

    chart.setOption({ series: [{ data: highlightedNodes, links: highlightedLinks }] });
  };

  // === Reset view ===
  window.resetGraph = function() {
    document.getElementById('char-search').value = '';
    chart.setOption({
      series: [{
        data: nodes,
        links: links
      }]
    });
  };

  window.addEventListener('resize', function() { chart.resize(); });
})();
