/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 80024
 Source Host           : localhost:3306
 Source Schema         : loginregister

 Target Server Type    : MySQL
 Target Server Version : 80024
 File Encoding         : 65001

 Date: 06/06/2021 21:43:21
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for tab_admin
-- ----------------------------
DROP TABLE IF EXISTS `tab_admin`;
CREATE TABLE `tab_admin`  (
  `Admin_id` int(0) NOT NULL AUTO_INCREMENT,
  `Admin_account` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `Admin_name` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Admin_password` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Admin_role` varchar(27) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`Admin_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tab_admin
-- ----------------------------
INSERT INTO `tab_admin` VALUES (1, '943711797', 'yuanshuo', '8398156282e80352503efa05125cb22b', '董事长');

-- ----------------------------
-- Table structure for tab_comment
-- ----------------------------
DROP TABLE IF EXISTS `tab_comment`;
CREATE TABLE `tab_comment`  (
  `comment_id` int(0) NOT NULL AUTO_INCREMENT,
  `comment` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `comment_user` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `comment_date` timestamp(0) NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP(0),
  `comment_typeid` int(0) NULL DEFAULT NULL,
  PRIMARY KEY (`comment_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tab_comment
-- ----------------------------
INSERT INTO `tab_comment` VALUES (1, 'kinjaz yyds', 'ys', '2021-06-03 18:53:43', 1);
INSERT INTO `tab_comment` VALUES (2, 'kinjaz是我们的信仰', 'ys', '2021-06-03 18:53:44', 1);
INSERT INTO `tab_comment` VALUES (3, '无论是控制还是爆发，都是一流的', 'hch', '2021-06-03 18:53:55', 2);
INSERT INTO `tab_comment` VALUES (4, '无论是爆发还是控制，都是一流的水平', 'hch', '2021-06-03 18:53:57', 1);
INSERT INTO `tab_comment` VALUES (5, 'how you manage musicality, choreography, cinematography, just incredible and such a joy to watch.', 'hch', '2021-06-03 18:54:14', 1);

-- ----------------------------
-- Table structure for tab_event
-- ----------------------------
DROP TABLE IF EXISTS `tab_event`;
CREATE TABLE `tab_event`  (
  `event_id` int(0) NOT NULL AUTO_INCREMENT,
  `event_title` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `event_kind` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `event_cource` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `event_date` timestamp(0) NULL DEFAULT NULL,
  `event_massage` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `event_img` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `event_comment` bigint(0) NULL DEFAULT NULL,
  `event_tumb` bigint(0) NULL DEFAULT NULL,
  PRIMARY KEY (`event_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tab_event
-- ----------------------------
INSERT INTO `tab_event` VALUES (1, 'kinjaz举办舞朝竞技赛', '赛事活动', 'kinjaz官网', '2020-04-23 08:35:00', 'Arena舞朝竞技场全球齐舞大赛是由成都舞邦、美国驻成都总领事馆以及美国 Kinjaz联合主办亚洲较大齐舞比赛，几十个舞蹈团队和全球专业的裁判阵容，已成为海内外知名度前瞻的潮流舞蹈比赛', 'images/g1.jpg', 99, 99);
INSERT INTO `tab_event` VALUES (2, 'kinjaz和假面舞团一较高下', '赛事活动', 'ABDC', '2021-03-09 15:31:00', 'jabba偏old school， kinjaz偏la urban style。jabba更佳商业化，知名度更高，粉丝更多，历史更久。kinjaz 2010 成立，参加了abdc后知名度活跃度提升，逐渐有超越jabba的趋势。', 'images/g2.jpg', 99, 34);
INSERT INTO `tab_event` VALUES (3, 'kinjaz获新成员keone', '赛事活动', 'ABDC', '2019-06-22 10:22:00', 'KEONE & MARI 夫妇是URBAN DANCE的代表，他们的每一个作品都有要表达的思想，舞蹈承载着他们的灵魂和故事,加入kinjaz将继续续写他们的舞蹈神话，今晚BETTA WATCH YO SELF将炸裂出场', 'images/g3.jpg', 77, 23);
INSERT INTO `tab_event` VALUES (4, 'kinjaz将和鹿晗一起演出', '公司活动', 'kinjaz公司', '2021-06-02 16:25:00', 'kinjaz将和鹿晗一起参加双十一的演唱会，蒙面舞即将炸裂全场', 'images/g4.jpg', 32, 32);
INSERT INTO `tab_event` VALUES (5, 'Mike Song极致编舞“Tuesday”', '娱乐活动', 'kinjaz成员', '2021-06-02 16:26:00', '这个特别的表演在我们心中有着真正的分量。能够和我们大多数的兄弟们分享这个舞台一直是一种享受，而洛杉矶竞技场将永远使这成为可能。', 'images/g5.jpg', 54, 90);
INSERT INTO `tab_event` VALUES (6, 'Anthony Lee & Bailey Sok合作编舞', '娱乐活动', 'kinjaz成员', '2021-06-02 16:28:00', '我们邀请了一些朋友和家人参加一个私人展示，庆祝我们在Kinjaz Komplex的最后时刻。我们决定在搬家前几天举办这个展览，但是在我们团队和朋友的帮助下，我们在不到一周的时间里就把这个活动办好了。', 'images/g6.jpg', 99999, 9999);
INSERT INTO `tab_event` VALUES (7, 'Mike Song & Jason Lin抒情编舞\"Clouds\"', '娱乐活动', 'kinjaz成员', '2021-06-02 16:29:00', '你们都在自己的元素中，从音乐，身体控制，运动精神，摄影工作，节拍，在这个视频中的一切都是完美的', 'images/g7.jpg', 21, 2121);

-- ----------------------------
-- Table structure for tab_indicator
-- ----------------------------
DROP TABLE IF EXISTS `tab_indicator`;
CREATE TABLE `tab_indicator`  (
  `indicator_id` int(0) NOT NULL AUTO_INCREMENT,
  `indicator_img` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `indicator_name` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `indicator_mass` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `views_id` int(0) NULL DEFAULT NULL,
  PRIMARY KEY (`indicator_id`) USING BTREE,
  INDEX `viewImg`(`views_id`) USING BTREE,
  CONSTRAINT `viewImg` FOREIGN KEY (`views_id`) REFERENCES `tab_views` (`view_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tab_indicator
-- ----------------------------
INSERT INTO `tab_indicator` VALUES (1, 'images/t1.jpg', 'Anthony Lee', 'kinjaz舞团创始人之一 ，kinjaz dojo（LA、chengdo）   ，kin Aesthetik  ，Arena Dance Comp ，International创始人 ，担任Culture shock Los Angeles的创意总监 ,参加ABDC season 8 All Stars ,2017年参加 NBC World of Dance Season1 ,电影音乐剧《歌舞青春2/3》编舞 ,2018年担任热血街舞团编舞总监, Vibe Dance Competition，Vibe Jrs Dance Competition ，Urban Paradise, Arena Dance Comp Singapore赛事主办之一', 9);
INSERT INTO `tab_indicator` VALUES (2, 'images/t2.jpg', 'Mike Song', '籍贯:美籍韩裔。生日:8.25,棣属舞团： KINJAZ, Frenemies, Project Prepix, Kaba Modern Alum,\r家乡:美国加利福尼亚州托伦斯。(2010年搬到拉斯维加斯，现在和Anthony Lee同住在加州洛杉矶地区蒙特利公园。 ),高中：South Torrance High School,大学: UC Irvine(和Anthony Lee一个学校),An Egyptian hands and Popping as the label of man。', 10);
INSERT INTO `tab_indicator` VALUES (3, 'images/t3.jpg', 'Vinh Nguyen', 'Dancer, 烟不离口的人\r\n\r\n2016年洛杉矶会议中心的“ Closer” LIVE |世界巡回演唱会 编舞/舞者。\r\n\r\n耐克技术奖\r\n\r\n耐克总部设在俄勒冈州波特兰| 编舞/舞者\r\n\r\n海伦·菲舍尔（Helene Fischer）\r\n\r\n海伦·菲舍尔（Helene Fischer）巡回演唱会LIVE 2017-2018 | 编舞\r\n\r\n黑眼豆豆的禁忌\r\n\r\n烟不离口的人\r\n\r\n2016年洛杉矶会议中心的“ Closer” LIVE |世界巡回演唱会 编舞/舞者。\r\n\r\n耐克技术奖\r\n\r\n耐克总部设在俄勒冈州波特兰| 编舞/舞者\r\n\r\n海伦·菲舍尔（Helene Fischer）\r\n\r\n海伦·菲舍尔（Helene Fischer）巡回演唱会LIVE 2017-2018 | 编舞\r\n\r\n黑眼豆豆的禁忌\r\n\r\n“ TRANSM1T”音乐视频| 编舞/舞者\r\n\r\n鹿han\r\n\r\n“ Lu”，“ Skin to Skin”中国国家电视台LIVE 2019新年| 编舞/舞者', 11);

-- ----------------------------
-- Table structure for tab_title
-- ----------------------------
DROP TABLE IF EXISTS `tab_title`;
CREATE TABLE `tab_title`  (
  `title_id` int(0) NOT NULL,
  `title` varchar(55) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`title_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tab_title
-- ----------------------------
INSERT INTO `tab_title` VALUES (1, '我们是行业的领头羊');
INSERT INTO `tab_title` VALUES (2, '我们永远舞动着····');
INSERT INTO `tab_title` VALUES (3, '不惜一切代价的兄弟情谊···');
INSERT INTO `tab_title` VALUES (4, '尊重所有人,没有恐惧···');

-- ----------------------------
-- Table structure for tab_user
-- ----------------------------
DROP TABLE IF EXISTS `tab_user`;
CREATE TABLE `tab_user`  (
  `users_id` int(0) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `user_phoneNO` bigint(0) NOT NULL,
  `user_email` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  PRIMARY KEY (`users_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tab_user
-- ----------------------------
INSERT INTO `tab_user` VALUES (4, 'yuanshuo', '8398156282e80352503efa05125cb22b', 15270644627, '943711797@qq.com');
INSERT INTO `tab_user` VALUES (5, 'xyj', '970c04852e7ae893b56234c4163bf641', 15270644628, '940202@qq.com');
INSERT INTO `tab_user` VALUES (7, 'hch', 'ecf51851e107698eea2bca4b6b8d9fef', 18270896676, '943711797@qq.com');
INSERT INTO `tab_user` VALUES (8, 'wzm', '6601e4cb3768185d72278d3e82b1a1ab', 15270644622, '940632@qq.com');
INSERT INTO `tab_user` VALUES (10, 'kin', '7f9493fc0dc108db0579e5dc7f52ed57', 15270667899, '940202@qq.com');

-- ----------------------------
-- Table structure for tab_views
-- ----------------------------
DROP TABLE IF EXISTS `tab_views`;
CREATE TABLE `tab_views`  (
  `view_id` int(0) NOT NULL AUTO_INCREMENT,
  `view_img` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `view_name` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `view_time` datetime(0) NULL DEFAULT NULL,
  `view_tags` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `view_kind` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`view_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 13 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tab_views
-- ----------------------------
INSERT INTO `tab_views` VALUES (1, 'images/g1.jpg', 'kinjaz', '2021-02-03 09:13:21', '神仙打架', '赛事');
INSERT INTO `tab_views` VALUES (2, 'images/g2.jpg', 'jeson', '2021-05-11 09:14:24', '仙人', '赛事');
INSERT INTO `tab_views` VALUES (3, 'images/g3.jpg', 'vehn', '2021-05-27 09:15:34', 'keone', '一起摇摆');
INSERT INTO `tab_views` VALUES (4, 'images/g4.jpg', 'keone', '2021-05-28 09:16:11', '舞佳舞', '一起咚那个咚');
INSERT INTO `tab_views` VALUES (5, 'images/g5.jpg', 'jazzcab', '2021-04-21 09:17:39', '烦死我了', '太多了');
INSERT INTO `tab_views` VALUES (6, 'images/g6.jpg', 'hchz', '2021-05-27 09:18:29', '一声吼', 'rap');
INSERT INTO `tab_views` VALUES (7, 'images/g7.jpg', 'xyj', '2021-05-13 09:19:05', 'football', '球');
INSERT INTO `tab_views` VALUES (8, 'images/g8.jpg', 'xjf', '2021-05-11 09:19:28', '叫声', '猴叫');
INSERT INTO `tab_views` VALUES (9, 'images/t1.jpg', 'hls', '2021-05-29 09:20:05', '海伦斯', '酒吧');
INSERT INTO `tab_views` VALUES (10, 'images/t2.jpg', 'xhj', '2021-06-05 09:21:00', '健美操', '体操');
INSERT INTO `tab_views` VALUES (11, 'images/t3.jpg', 'xyj', '2021-05-14 09:21:38', '专业拔草', '自然');

SET FOREIGN_KEY_CHECKS = 1;
