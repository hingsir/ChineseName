/**
 * Created by jinceon on 15/6/4.
 */
(function () {
    var ChineseName = {
        version: "0.1.0",
        random: random
    };

    function random(familyName) {
        var familyNames = "赵钱孙李周吴郑王冯陈褚卫蒋沈韩杨朱秦尤许何吕施张孔曹严华金魏陶姜戚谢邹喻柏水窦章云苏潘葛奚范彭郎鲁韦昌马苗凤花方俞任袁柳酆鲍史唐".split("");
        var names = "贵福生龙元全国胜学祥才发武新利清飞彬富顺信子杰涛昌成康星光天达安岩中茂进林有坚和彪博绍功松善厚庆磊民友裕河哲江超浩亮政谦亨奇固之轮翰朗伯宏言若鸣朋斌梁栋维启克伦翔旭鹏月莺媛艳瑞凡佳嘉琼勤珍贞莉桂娣叶璧璐娅琦晶妍茜秋珊莎锦黛青倩婷姣婉娴瑾颖露瑶怡婵雁蓓".split("");
        familyName = familyName || pick(familyNames);
        var name = "";
        var count = Math.random() > .66 ? 1 : 2;
        for (var i = 0; i < count; i++) {
            name += pick(names);
        }
        return familyName + name;
    }

    function pick(arr) {
        arr = arr || [];
        return arr[natural(0, arr.length - 1)];
    }

    function natural(min, max) {
        return Math.round(Math.random() * (max - min)) + min;
    }

    if (typeof module === "object" && module.exports) {
        module.exports = ChineseName;
    } else if (typeof define === "function" && define.amd) {
        define("ChineseName", [], function () {
            return ChineseName;
        });
    } else if (typeof define === "function" && define.cmd) {
        define(function () {
            return ChineseName;
        });
    }
    this.ChineseName = ChineseName;

}).call(this);