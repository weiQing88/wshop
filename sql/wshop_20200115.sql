/*
 Navicat Premium Data Transfer

 Source Server         : [mysqld]
 Source Server Type    : MySQL
 Source Server Version : 50726
 Source Host           : localhost:3306
 Source Schema         : wshop

 Target Server Type    : MySQL
 Target Server Version : 50726
 File Encoding         : 65001

 Date: 15/01/2020 16:46:16
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for sequelizemeta
-- ----------------------------
DROP TABLE IF EXISTS `sequelizemeta`;
CREATE TABLE `sequelizemeta`  (
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`) USING BTREE,
  UNIQUE INDEX `name`(`name`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sequelizemeta
-- ----------------------------
INSERT INTO `sequelizemeta` VALUES ('20191012082650-create-wshop-address.js');
INSERT INTO `sequelizemeta` VALUES ('20191012082927-create-wshop-admin.js');
INSERT INTO `sequelizemeta` VALUES ('20191012082939-create-wshop-cart.js');
INSERT INTO `sequelizemeta` VALUES ('20191012082949-create-wshop-category.js');
INSERT INTO `sequelizemeta` VALUES ('20191012083001-create-wshop-collect.js');
INSERT INTO `sequelizemeta` VALUES ('20191012083015-create-wshop-comment-picture.js');
INSERT INTO `sequelizemeta` VALUES ('20191012083023-create-wshop-comment.js');
INSERT INTO `sequelizemeta` VALUES ('20191012083036-create-wshop-food.js');
INSERT INTO `sequelizemeta` VALUES ('20191012083044-create-wshop-goods.js');
INSERT INTO `sequelizemeta` VALUES ('20191012083057-create-wshop-keywords.js');
INSERT INTO `sequelizemeta` VALUES ('20191012083106-create-wshop-order.js');
INSERT INTO `sequelizemeta` VALUES ('20191012083118-create-wshop-pay-log.js');
INSERT INTO `sequelizemeta` VALUES ('20191012083139-create-wshop-payment.js');
INSERT INTO `sequelizemeta` VALUES ('20191012083155-create-wshop-product.js');
INSERT INTO `sequelizemeta` VALUES ('20191012083204-create-wshop-region.js');
INSERT INTO `sequelizemeta` VALUES ('20191012083212-create-wshop-user.js');
INSERT INTO `sequelizemeta` VALUES ('20191012083222-create-wshop-userinfo.js');
INSERT INTO `sequelizemeta` VALUES ('20191208085943-wshop_attribution.js');

-- ----------------------------
-- Table structure for wshop_address
-- ----------------------------
DROP TABLE IF EXISTS `wshop_address`;
CREATE TABLE `wshop_address`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `user_id` int(8) UNSIGNED NOT NULL DEFAULT 0,
  `country` int(5) NOT NULL DEFAULT 0,
  `province` int(5) NOT NULL DEFAULT 0,
  `city` int(5) NOT NULL DEFAULT 0,
  `district` int(5) NOT NULL DEFAULT 0,
  `address` varchar(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `mobile` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  `sign_building` varchar(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for wshop_admin
-- ----------------------------
DROP TABLE IF EXISTS `wshop_admin`;
CREATE TABLE `wshop_admin`  (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `username` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `password_salt` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `last_login_ip` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `last_login_time` int(11) NULL DEFAULT 0,
  `update_time` datetime(0) NULL DEFAULT NULL,
  `avatar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `admin_role` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `createdAt` datetime(0) NULL DEFAULT NULL,
  `updatedAt` datetime(0) NULL DEFAULT NULL,
  `email` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `mobile` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `user_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `add_time` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of wshop_admin
-- ----------------------------
INSERT INTO `wshop_admin` VALUES (6, 'wq1988', '$2a$12$WgHwjXep69.8RE22K11XX.q5p.5GBvjvBqBGR58sMA5YcI/ZOLGwK', '\'\'', '127.0.0.1', 0, NULL, '\'\'', '超级管理员', NULL, NULL, '413307928@qq.com', '13641439075', '1191113161044204', '2019-12-13 16:10:44');
INSERT INTO `wshop_admin` VALUES (7, 'normal', '$2a$12$1YlXDc.xzKfCjI3nQZi6Uue8rolsilhUENo6EBNV3T8Zb6zW9hsOW', NULL, '127.0.0.1', 0, NULL, '\\public\\uploads\\avatar\\2019-12-19\\1576734474950293.jpg', '普通管理员', NULL, NULL, 'maiwai1212@qq.com', '13641439078', '1191119134754966', '2019-12-19 13:47:54');

-- ----------------------------
-- Table structure for wshop_attribution
-- ----------------------------
DROP TABLE IF EXISTS `wshop_attribution`;
CREATE TABLE `wshop_attribution`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `category_id` int(8) NULL DEFAULT NULL,
  `attr_name` varchar(90) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `attr_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `attr_value` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `createdAt` datetime(0) NULL DEFAULT NULL,
  `updatedAt` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 12 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of wshop_attribution
-- ----------------------------
INSERT INTO `wshop_attribution` VALUES (1, NULL, '重量', '119118175221538', '30kg,50kg', '2019-12-08 17:52:21', '2019-12-08 17:52:21');
INSERT INTO `wshop_attribution` VALUES (2, NULL, '味道', '11911819377797', '香辣,麻辣,清淡', '2019-12-08 19:37:07', '2019-12-08 19:37:07');
INSERT INTO `wshop_attribution` VALUES (3, NULL, '规格', '119118193856708', '大号,中号,小号', '2019-12-08 19:38:56', '2019-12-08 19:38:56');
INSERT INTO `wshop_attribution` VALUES (4, NULL, '包装', '11911819431998', '一瓶装,六瓶装', '2019-12-08 19:43:19', '2019-12-08 19:43:19');
INSERT INTO `wshop_attribution` VALUES (9, NULL, '桶装', '12007121214424', '5斤装,10斤装,20斤装', '2020-01-07 12:12:14', '2020-01-07 12:12:14');
INSERT INTO `wshop_attribution` VALUES (10, NULL, '腊味规格', '12007132831708', '500g,700g,1000g', '2020-01-07 13:28:31', '2020-01-07 13:29:13');
INSERT INTO `wshop_attribution` VALUES (11, NULL, '风味', '12007132953385', '日晒,烟熏', '2020-01-07 13:29:53', '2020-01-07 13:29:53');

-- ----------------------------
-- Table structure for wshop_brand
-- ----------------------------
DROP TABLE IF EXISTS `wshop_brand`;
CREATE TABLE `wshop_brand`  (
  `brand_id` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT,
  `brand_name` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `brand_logo` varchar(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `brand_desc` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL COMMENT '品牌描述',
  `site_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '品牌的网址',
  `is_show` tinyint(1) NULL DEFAULT NULL COMMENT '该品牌是否显示;0否1显示',
  `sort_order` tinyint(3) NULL DEFAULT NULL COMMENT '品牌在前台页面的显示顺序,数字越大越靠后',
  PRIMARY KEY (`brand_id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for wshop_cart
-- ----------------------------
DROP TABLE IF EXISTS `wshop_cart`;
CREATE TABLE `wshop_cart`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '0',
  `expired` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '过期时间',
  `goods_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '0' COMMENT '商品的ID',
  `goods_sn` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '商品的货号',
  `goods_name` varchar(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '\'\'',
  `market_price` decimal(10, 0) NULL DEFAULT 0 COMMENT '市场价',
  `shop_price` decimal(10, 0) NOT NULL DEFAULT 0 COMMENT '销售价',
  `number` int(5) UNSIGNED NOT NULL DEFAULT 0 COMMENT '购买商品数量',
  `list_pic_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '商品图片',
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  `rec_type` int(1) NOT NULL COMMENT '购物车商品类型;0普通;1团够;2拍卖;3夺宝奇兵',
  `goods_attrs` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '已选属性',
  `goods_number` int(8) NULL DEFAULT NULL COMMENT '商品库存数量',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 18 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of wshop_cart
-- ----------------------------
INSERT INTO `wshop_cart` VALUES (17, '119112212311681', '1578559506000', '1200713517577', '20121416', ' 泡仔姜', 0, 26, 1, '/public/uploads/goods/2020-01-07/1578373517566446.png', '2020-01-09 13:45:06', '2020-01-09 13:45:06', 0, '50kg,清淡', 23);

-- ----------------------------
-- Table structure for wshop_category
-- ----------------------------
DROP TABLE IF EXISTS `wshop_category`;
CREATE TABLE `wshop_category`  (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(90) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '\'\'',
  `keywords` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '\'\'',
  `category_sort` int(1) UNSIGNED NULL DEFAULT NULL,
  `front_desc` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '\'\'',
  `parent_id` int(5) UNSIGNED NULL DEFAULT 0,
  `sort_order` int(1) UNSIGNED NULL DEFAULT 50,
  `show_index` int(1) NULL DEFAULT 0,
  `is_show` int(1) UNSIGNED NULL DEFAULT 1,
  `banner_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '\'\'',
  `icon_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `img_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `wap_banner_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `level` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `type` int(11) NULL DEFAULT 0,
  `front_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `createdAt` datetime(0) NULL DEFAULT NULL,
  `updatedAt` datetime(0) NULL DEFAULT NULL,
  `grade` int(4) NULL DEFAULT NULL,
  `filter_attr` int(6) NULL DEFAULT NULL,
  `category_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `category_name` varchar(90) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `category_attrs` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of wshop_category
-- ----------------------------
INSERT INTO `wshop_category` VALUES (1, '\'\'', '\'\'', NULL, '\'\'', 0, 50, 0, 1, '\'\'', NULL, '\\public\\uploads\\goods\\2020-01-07\\1578386036723546.png', NULL, NULL, 0, NULL, '2019-12-08 19:41:43', '2020-01-07 16:33:56', NULL, NULL, '119118194143128', '五谷杂粮', '119118175221538');
INSERT INTO `wshop_category` VALUES (2, '\'\'', '\'\'', NULL, '\'\'', 0, 50, 0, 1, '\'\'', NULL, '\\public\\uploads\\goods\\2020-01-07\\1578386073300668.png', NULL, NULL, 0, NULL, '2019-12-08 19:42:06', '2020-01-07 16:34:33', NULL, NULL, '11911819426415', '农家开胃菜', '11911819377797,119118193856708,11911819431998');
INSERT INTO `wshop_category` VALUES (3, '\'\'', '\'\'', NULL, '\'\'', 0, 50, 0, 1, '\'\'', NULL, '\\public\\uploads\\goods\\2020-01-07\\1578386084990951.jpg', NULL, NULL, 0, NULL, '2019-12-08 19:42:21', '2020-01-07 16:34:44', NULL, NULL, '119118194221369', '农家米酒', '12007121214424');
INSERT INTO `wshop_category` VALUES (5, '\'\'', '\'\'', NULL, '\'\'', 0, 50, 0, 1, '\'\'', NULL, '\\public\\uploads\\goods\\2020-01-07\\1578374836562461.png', NULL, NULL, 0, NULL, '2020-01-07 13:27:16', '2020-01-07 13:27:16', NULL, NULL, '12007132716572', '农家腊肉', '119118175221538');
INSERT INTO `wshop_category` VALUES (6, '\'\'', '\'\'', NULL, '\'\'', 0, 50, 0, 1, '\'\'', NULL, '\\public\\uploads\\goods\\2020-01-07\\1578375400976117.png', NULL, NULL, 0, NULL, '2020-01-07 13:36:41', '2020-01-07 13:36:41', NULL, NULL, '120071336411', '农家果蔬', '119118175221538');
INSERT INTO `wshop_category` VALUES (7, '\'\'', '\'\'', NULL, '\'\'', 0, 50, 0, 1, '\'\'', NULL, '\\public\\uploads\\goods\\2020-01-07\\1578376136141393.png', NULL, NULL, 0, NULL, '2020-01-07 13:48:56', '2020-01-07 13:48:56', NULL, NULL, '12007134856145', '蜂蜜', '119118175221538');

-- ----------------------------
-- Table structure for wshop_collect
-- ----------------------------
DROP TABLE IF EXISTS `wshop_collect`;
CREATE TABLE `wshop_collect`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(8) UNSIGNED NOT NULL DEFAULT 0,
  `goods_id` int(8) UNSIGNED NOT NULL DEFAULT 0,
  `add_time` int(11) UNSIGNED NOT NULL DEFAULT 0,
  `is_attention` int(1) NOT NULL DEFAULT 0,
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for wshop_comment
-- ----------------------------
DROP TABLE IF EXISTS `wshop_comment`;
CREATE TABLE `wshop_comment`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `comment_id` int(3) UNSIGNED NULL DEFAULT 0,
  `value_id` int(8) UNSIGNED NOT NULL DEFAULT 0,
  `content` varchar(6550) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `add_time` bigint(20) NOT NULL DEFAULT 0,
  `status` int(3) UNSIGNED NOT NULL DEFAULT 0,
  `user_id` int(11) UNSIGNED NOT NULL DEFAULT 0,
  `new_content` varchar(6550) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '\'\'',
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for wshop_comment_picture
-- ----------------------------
DROP TABLE IF EXISTS `wshop_comment_picture`;
CREATE TABLE `wshop_comment_picture`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `comment_id` int(11) UNSIGNED NOT NULL DEFAULT 0,
  `pic_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '\'\'',
  `sort_order` int(1) UNSIGNED NOT NULL DEFAULT 5,
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for wshop_food
-- ----------------------------
DROP TABLE IF EXISTS `wshop_food`;
CREATE TABLE `wshop_food`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '-',
  `rating` int(11) NULL DEFAULT 0 COMMENT '-',
  `is_featured` int(11) NULL DEFAULT 0 COMMENT '-',
  `restaurant_id` int(11) NULL DEFAULT NULL COMMENT '-',
  `category_id` int(11) NULL DEFAULT NULL COMMENT '-',
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '\'\'' COMMENT '-',
  `month_sales` int(11) NULL DEFAULT 0 COMMENT '-',
  `rating_count` int(11) NULL DEFAULT 0 COMMENT '-',
  `tips` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '-',
  `image_path` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '-',
  `goods_id` int(11) NULL DEFAULT NULL COMMENT '-',
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '-',
  `satisfy_count` int(11) NULL DEFAULT 0 COMMENT '-',
  `satisfy_rate` int(11) NULL DEFAULT NULL COMMENT '-',
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  `activity` int(11) NULL DEFAULT NULL COMMENT '-',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for wshop_goods
-- ----------------------------
DROP TABLE IF EXISTS `wshop_goods`;
CREATE TABLE `wshop_goods`  (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '-',
  `category_id` bigint(255) UNSIGNED NULL DEFAULT 0 COMMENT '分类id',
  `goods_id` bigint(255) NULL DEFAULT NULL,
  `goods_sn` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '商品的唯一货号',
  `goods_name` varchar(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '商品的名称',
  `brand_id` int(11) UNSIGNED NULL DEFAULT 0 COMMENT '品牌id，取值于brand 的brand_id',
  `goods_number` int(8) UNSIGNED NULL DEFAULT 0 COMMENT '商品库存数量',
  `keywords` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '商品关键字，放在商品页的关键字中，为搜索引擎收录用',
  `goods_brief` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '商品的简短描述',
  `goods_desc` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL COMMENT '商品的详细描述',
  `is_on_sale` int(1) UNSIGNED NULL DEFAULT 1 COMMENT '该商品是否开放销售，1，是；0，否',
  `add_time` int(10) UNSIGNED NULL DEFAULT 0 COMMENT '商品添加时间',
  `sort_order` int(4) UNSIGNED NULL DEFAULT 100 COMMENT '应该是商品的显示顺序，不过该版程序中没实现该功能',
  `is_delete` int(1) UNSIGNED NULL DEFAULT 0 COMMENT '商品是否已经删除，0，否；1，已删除',
  `counter_price` decimal(10, 0) NULL DEFAULT 0 COMMENT '折扣价格',
  `is_new` int(1) UNSIGNED NULL DEFAULT 0 COMMENT '是否是新品',
  `shop_price` decimal(10, 0) NULL DEFAULT 0 COMMENT '销售价格',
  `market_price` decimal(10, 0) NULL DEFAULT 0 COMMENT '市场价格',
  `promotion_desc` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '促销商品的详细描述',
  `promote_price` decimal(10, 0) NULL DEFAULT NULL COMMENT '促销商品价格',
  `is_hot` int(1) UNSIGNED NULL DEFAULT 0 COMMENT '是否热销，0，否；1，是',
  `createdAt` datetime(0) NULL DEFAULT NULL COMMENT '创建时间',
  `updatedAt` datetime(0) NOT NULL COMMENT '更新时间',
  `is_promote` int(1) NULL DEFAULT NULL COMMENT '是否特价促销；0，否；1，是',
  `promote_start_date` datetime(0) NULL DEFAULT NULL COMMENT '促销价格开始日期',
  `promote_end_date` datetime(0) NULL DEFAULT NULL COMMENT '促销价格结束日期',
  `goods_img` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '商品的实际大小图片，如进入该商品页时介绍商品属性所显示的大图片',
  `goods_thumb` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '商品在前台显示的微缩图片，如在分类筛选时显示的小图片',
  `integral` int(10) NULL DEFAULT NULL COMMENT '购买该商品可以使用的积分数量；（ 用积分代替金额消费 ）',
  `category_name` varchar(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '商品分类名称',
  `is_recommend` int(1) NULL DEFAULT NULL COMMENT '是否推荐；0，否；1，是',
  `brand_name` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '	品牌名称\r\n	品牌名称\r\n品牌名称',
  `promotion_img` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `category_attrs` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL COMMENT '分类属性',
  `goods_sale` int(10) NULL DEFAULT NULL COMMENT '销量',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 49 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of wshop_goods
-- ----------------------------
INSERT INTO `wshop_goods` VALUES (8, 119118194143128, 12007121614481, '2012141', '黑米糊', 1230034, 50, '养生，米糊，黑米糊', '中老年人养生黑米糊', NULL, 1, 0, 100, 0, 15, 0, 15, 15, NULL, NULL, 0, '2020-01-07 12:16:14', '2020-01-07 12:16:14', NULL, NULL, NULL, '\\public\\uploads\\goods\\2020-01-07\\1578370574453268.png', NULL, NULL, '五谷杂粮', 0, NULL, NULL, '119118175221538,11911819431998', 0);
INSERT INTO `wshop_goods` VALUES (9, 119118194143128, 12007121914497, '2012142', '老牌八宝粥', 1230034, 120, '八宝粥，早餐粥', '中国人营养早餐', NULL, 1, 0, 100, 0, 15, 0, 15, 15, NULL, NULL, 0, '2020-01-07 12:19:14', '2020-01-07 12:19:14', NULL, NULL, NULL, '\\public\\uploads\\goods\\2020-01-07\\1578370754480875.png', NULL, NULL, '五谷杂粮', 0, NULL, NULL, '119118175221538,119118193856708,11911819431998', 0);
INSERT INTO `wshop_goods` VALUES (10, 119118194143128, 12007122250849, '2012143', '芝麻核桃粉', 1230034, 42, '芝麻，早晨，核桃，芝麻核桃粉', '保健早餐营养搭配', NULL, 1, 0, 100, 0, 18, 0, 18, 18, NULL, NULL, 0, '2020-01-07 12:22:50', '2020-01-07 12:22:50', NULL, NULL, NULL, '\\public\\uploads\\goods\\2020-01-07\\1578370970846856.png', NULL, NULL, '五谷杂粮', 0, NULL, NULL, '11911819431998', 0);
INSERT INTO `wshop_goods` VALUES (11, 119118194143128, 1200712253141, '2012144', ' 红豆薏米粉', 1230034, 43, ' 红豆薏米粉', '祛湿养颜', NULL, 1, 0, 100, 0, 18, 0, 18, 18, NULL, NULL, 0, '2020-01-07 12:25:31', '2020-01-07 12:25:31', NULL, NULL, NULL, '\\public\\uploads\\goods\\2020-01-07\\1578371131019493.png', NULL, NULL, '五谷杂粮', 0, NULL, NULL, '119118175221538,119118193856708,11911819431998', 0);
INSERT INTO `wshop_goods` VALUES (12, 119118194143128, 12007122718468, '2012145', '五谷杂粮粥', 1230034, 43, '五谷杂粮粥', '吃出健康', NULL, 1, 0, 100, 0, 22, 0, 22, 22, NULL, NULL, 0, '2020-01-07 12:27:18', '2020-01-07 12:27:18', NULL, NULL, NULL, '\\public\\uploads\\goods\\2020-01-07\\1578371238462576.png', NULL, NULL, '五谷杂粮', 0, NULL, NULL, '119118175221538,11911819431998', 0);
INSERT INTO `wshop_goods` VALUES (13, 119118194143128, 1200712298671, '2012146', '芝麻山药核桃黑豆粉', 1230034, 62, '芝麻山药核桃黑豆粉', '补肾养秀发', NULL, 1, 0, 100, 0, 25, 0, 25, 25, NULL, NULL, 0, '2020-01-07 12:29:08', '2020-01-07 12:29:08', NULL, NULL, NULL, '\\public\\uploads\\goods\\2020-01-07\\1578371348660791.png', NULL, NULL, '五谷杂粮', 0, NULL, NULL, '119118175221538,119118193856708', 0);
INSERT INTO `wshop_goods` VALUES (14, 119118194143128, 12007123051153, '2012147', '五谷磨房芒果燕麦', 1230034, 345, '五谷磨房芒果燕麦', '好吃看得见', NULL, 1, 0, 100, 0, 33, 0, 33, 33, NULL, NULL, 0, '2020-01-07 12:30:51', '2020-01-07 12:30:51', NULL, NULL, NULL, '\\public\\uploads\\goods\\2020-01-07\\1578371451146361.png', NULL, NULL, '五谷杂粮', 0, NULL, NULL, '119118175221538', 0);
INSERT INTO `wshop_goods` VALUES (15, 119118194143128, 12007123249641, '2012148', '山药薏米芡实米糊', 1230034, 34, '山药薏米芡实米糊', '脾胃守护', NULL, 1, 0, 100, 0, 60, 0, 60, 60, NULL, NULL, 0, '2020-01-07 12:32:49', '2020-01-07 12:32:49', NULL, NULL, NULL, '\\public\\uploads\\goods\\2020-01-07\\1578371569636945.png', NULL, NULL, '五谷杂粮', 0, NULL, NULL, '119118175221538,119118193856708', 0);
INSERT INTO `wshop_goods` VALUES (16, 119118194143128, 12007123443858, '2012149', '全麦燕麦魔芋', 1230034, 345, '全麦燕麦魔芋', '无糖饱腹', NULL, 1, 0, 100, 0, 13, 0, 13, 13, NULL, NULL, 0, '2020-01-07 12:34:43', '2020-01-07 12:34:43', NULL, NULL, NULL, '\\public\\uploads\\goods\\2020-01-07\\1578371683847702.png', NULL, NULL, '五谷杂粮', 0, NULL, NULL, 'undefined', 0);
INSERT INTO `wshop_goods` VALUES (17, 119118194143128, 1200712363251, '20121410', '原味燕麦酥', 1230034, 85, '原味燕麦酥', '高颜值', NULL, 0, 0, 100, 0, 12, 0, 12, 12, NULL, NULL, 0, '2020-01-07 12:36:03', '2020-01-07 12:36:21', NULL, NULL, NULL, '\\public\\uploads\\goods\\2020-01-07\\1578371781312673.png', NULL, NULL, '五谷杂粮', 0, NULL, NULL, 'undefined', 0);
INSERT INTO `wshop_goods` VALUES (18, 119118194143128, 12007124444691, '20121411', '薏米红豆燕麦代餐饼干', 1230034, 32, '薏米红豆燕麦代餐饼干', '米红豆燕麦代餐饼干无糖精卡脂肪热量杂粗粮低0健康压缩零食品', NULL, 0, 0, 100, 0, 13, 0, 13, 13, NULL, NULL, 0, '2020-01-07 12:44:44', '2020-01-07 12:44:44', NULL, NULL, NULL, '\\public\\uploads\\goods\\2020-01-07\\1578372284652432.png', NULL, NULL, '五谷杂粮', 0, NULL, NULL, 'undefined', 0);
INSERT INTO `wshop_goods` VALUES (19, 119118194143128, 12007125635857, '20121412', '五谷杂粮饼干无糖精食品', 1230034, 543, '五谷杂粮饼干无糖精食品', '高血糖糖尿人糖尿病人零食粗粮专用', NULL, 1, 0, 100, 0, 14, 0, 14, 14, NULL, NULL, 0, '2020-01-07 12:56:35', '2020-01-07 12:56:35', NULL, NULL, NULL, '\\public\\uploads\\goods\\2020-01-07\\1578372995846280.png', NULL, NULL, '五谷杂粮', 0, NULL, NULL, '119118175221538,119118193856708', 0);
INSERT INTO `wshop_goods` VALUES (20, 119118194143128, 120071304150, '20121413', '纤麸无添糖粗粮消化饼干 ', 1230034, 23, '纤麸无添糖粗粮消化饼干 ', '五谷杂粮全麦代餐零食', NULL, 1, 0, 100, 0, 14, 0, 14, 14, NULL, NULL, 0, '2020-01-07 13:00:41', '2020-01-07 13:00:41', NULL, NULL, NULL, '\\public\\uploads\\goods\\2020-01-07\\1578373241042786.png', NULL, NULL, '五谷杂粮', 0, NULL, NULL, '119118175221538,119118193856708', 0);
INSERT INTO `wshop_goods` VALUES (21, 119118194143128, 12007132849, '20121414', '粗粮代餐饼干', 1230034, 123, '粗粮代餐饼干', '尿人专用糖尿饼病人中老年五谷杂粮', NULL, 1, 0, 100, 0, 12, 0, 12, 12, NULL, NULL, 0, '2020-01-07 13:02:08', '2020-01-07 13:02:08', NULL, NULL, NULL, '\\public\\uploads\\goods\\2020-01-07\\1578373328042720.png', NULL, NULL, '五谷杂粮', 0, NULL, NULL, 'undefined', 0);
INSERT INTO `wshop_goods` VALUES (22, 119118194143128, 1200713315830, '20121415', '咸蛋黄酥饼干', 1230034, 23, '咸蛋黄酥饼干', '无糖精咸味老人零食品五谷杂粮糖尿人糖尿饼病人专用', NULL, 1, 0, 100, 0, 14, 0, 14, 14, NULL, NULL, 0, '2020-01-07 13:03:15', '2020-01-07 13:03:15', NULL, NULL, NULL, '\\public\\uploads\\goods\\2020-01-07\\1578373395823371.png', NULL, NULL, '五谷杂粮', 0, NULL, NULL, '119118175221538,119118193856708', 0);
INSERT INTO `wshop_goods` VALUES (23, 11911819426415, 1200713517577, '20121416', ' 泡仔姜', 1230034, 23, ' 泡仔姜', ' 老母水泡菜 嫩姜泡姜生姜子姜特产', NULL, 1, 0, 100, 0, 26, 0, 26, 26, NULL, NULL, 0, '2020-01-07 13:05:17', '2020-01-07 13:05:17', NULL, NULL, NULL, '\\public\\uploads\\goods\\2020-01-07\\1578373517566446.png', NULL, NULL, '农家开胃菜', 0, NULL, NULL, '119118175221538,11911819377797', 0);
INSERT INTO `wshop_goods` VALUES (24, 11911819426415, 1200713649877, '20121417', '野山椒小米辣', 1230034, 34, '野山椒小米辣', '正宗坛装四川泡菜野山椒小米辣农家泡仔姜嫩姜酸豇豆角红灯笼泡椒', NULL, 1, 0, 100, 0, 26, 0, 26, 26, NULL, NULL, 0, '2020-01-07 13:06:49', '2020-01-07 13:06:49', NULL, NULL, NULL, '\\public\\uploads\\goods\\2020-01-07\\1578373609870825.png', NULL, NULL, '农家开胃菜', 0, NULL, NULL, '119118175221538,11911819377797,11911819431998', 0);
INSERT INTO `wshop_goods` VALUES (25, 11911819426415, 1200713839516, '20121418', '红糟酸', 1230034, 32, '红糟酸', '广西来宾特产武宣红糟酸杂酸姜荞头刀豆角空心菜梗酸嘢', NULL, 1, 0, 100, 0, 26, 0, 26, 26, NULL, NULL, 0, '2020-01-07 13:08:39', '2020-01-07 13:08:39', NULL, NULL, NULL, '\\public\\uploads\\goods\\2020-01-07\\1578373719512692.png', NULL, NULL, '农家开胃菜', 0, NULL, NULL, 'undefined', 0);
INSERT INTO `wshop_goods` VALUES (26, 11911819426415, 12007131019195, '20121419', '东北酸菜', 1230034, 34, '东北酸菜', '榆园正宗东北酸菜农家自制翠花上大缸整棵酸大白菜馅饺子颗丝', NULL, 1, 0, 100, 0, 26, 0, 26, 26, NULL, NULL, 0, '2020-01-07 13:10:19', '2020-01-07 13:10:19', NULL, NULL, NULL, '\\public\\uploads\\goods\\2020-01-07\\1578373819190410.png', NULL, NULL, '农家开胃菜', 0, NULL, NULL, 'undefined', 0);
INSERT INTO `wshop_goods` VALUES (27, 11911819426415, 12007131144713, '20121420', '老坛酸菜', 1230034, 54, '老坛酸菜', '正宗老坛酸菜鱼的酸菜炒菜调料', NULL, 1, 0, 100, 0, 32, 0, 32, 32, NULL, NULL, 0, '2020-01-07 13:11:44', '2020-01-07 13:11:44', NULL, NULL, NULL, '\\public\\uploads\\goods\\2020-01-07\\157837390470871.png', NULL, NULL, '农家开胃菜', 1, NULL, NULL, '119118175221538,11911819377797,119118193856708,11911819431998', 0);
INSERT INTO `wshop_goods` VALUES (28, 11911819426415, 1200713131988, '20121421', '泡椒藕尖', 1230034, 54, '泡椒藕尖', '特产泡藕带泡椒藕尖新鲜酸辣下饭菜泡菜', NULL, 1, 0, 100, 0, 23, 0, 23, 23, NULL, NULL, 0, '2020-01-07 13:13:19', '2020-01-07 13:13:19', NULL, NULL, NULL, '\\public\\uploads\\goods\\2020-01-07\\157837399908545.png', NULL, NULL, '农家开胃菜', 1, NULL, NULL, '119118175221538,11911819377797,11911819431998', 0);
INSERT INTO `wshop_goods` VALUES (29, 11911819426415, 12007131454484, '20121422', '咸菜豆角酱菜', 1230034, 34, '咸菜豆角酱菜', '酸豆角罐装广西农家咸菜豆角酱菜下饭菜自制开胃菜红油香脆酸豇豆', NULL, 0, 0, 100, 0, 23, 0, 23, 23, NULL, NULL, 0, '2020-01-07 13:14:54', '2020-01-07 13:14:54', NULL, NULL, NULL, '\\public\\uploads\\goods\\2020-01-07\\1578374094473697.png', NULL, NULL, '农家开胃菜', 1, NULL, NULL, '119118175221538,11911819377797,119118193856708', 0);
INSERT INTO `wshop_goods` VALUES (30, 11911819426415, 12007131635492, '20121423', '青年小萝卜', 1230034, 43, '青年小萝卜', '三口一品正宗新鲜爽口韩国泡菜酸香辣白菜青年小萝卜甜脆腌制咸菜', NULL, 0, 0, 100, 0, 23, 0, 23, 23, NULL, NULL, 1, '2020-01-07 13:16:35', '2020-01-07 13:16:35', NULL, NULL, NULL, '\\public\\uploads\\goods\\2020-01-07\\1578374195487328.png', NULL, NULL, '农家开胃菜', 1, NULL, NULL, '119118175221538,11911819377797,119118193856708', 0);
INSERT INTO `wshop_goods` VALUES (31, 119118194221369, 12007131811963, '20121424', '桂花糯米酒', 1230034, 54, '桂花糯米酒', '苏州特产米久桂花糯米酒低度甜酒桂花酒', NULL, 1, 0, 100, 0, 31, 0, 31, 31, NULL, NULL, 0, '2020-01-07 13:18:11', '2020-01-07 13:18:11', NULL, NULL, NULL, '\\public\\uploads\\goods\\2020-01-07\\1578374291959551.png', NULL, NULL, '农家米酒', 0, NULL, NULL, '11911819431998', 0);
INSERT INTO `wshop_goods` VALUES (32, 119118194221369, 12007131919915, '20121425', '老陈米酒', 1230034, 34, '老陈米酒', '农家自酿散装米酒', NULL, 1, 0, 100, 0, 5, 0, 5, 5, NULL, NULL, 0, '2020-01-07 13:19:19', '2020-01-07 13:19:19', NULL, NULL, NULL, '\\public\\uploads\\goods\\2020-01-07\\1578374359912455.png', NULL, NULL, '农家米酒', 0, NULL, NULL, '12007121214424', 0);
INSERT INTO `wshop_goods` VALUES (33, 119118194221369, 12007132021708, '20121426', '农家高度糯米酒', 1230034, 23, '农家高度糯米酒', '古法自酿高度米酒', NULL, 1, 0, 100, 0, 7, 0, 7, 7, NULL, NULL, 0, '2020-01-07 13:20:21', '2020-01-07 13:20:21', NULL, NULL, NULL, '\\public\\uploads\\goods\\2020-01-07\\1578374421707924.jpg', NULL, NULL, '农家米酒', 0, NULL, NULL, '12007121214424', 0);
INSERT INTO `wshop_goods` VALUES (34, 119118194221369, 12007132149968, '20121427', '半干花雕', 1230034, 43, '半干花雕', '古越龙山木盒十年陈糯米酒半干花雕酒绍兴黄酒', NULL, 0, 0, 100, 0, 24, 0, 24, 24, NULL, NULL, 0, '2020-01-07 13:21:49', '2020-01-07 13:21:49', NULL, NULL, NULL, '\\public\\uploads\\goods\\2020-01-07\\1578374509964446.png', NULL, NULL, '农家米酒', 0, NULL, NULL, '11911819431998', 0);
INSERT INTO `wshop_goods` VALUES (35, 119118194221369, 12007132258793, '20121428', '绍兴黄酒', 1230034, 23, '绍兴黄酒', '咸亨绍兴黄酒 雕皇十年陈老酒10年陈整箱装糯米酒', NULL, 1, 0, 100, 0, 23, 0, 23, 23, NULL, NULL, 0, '2020-01-07 13:22:58', '2020-01-07 13:22:58', NULL, NULL, NULL, NULL, NULL, NULL, '农家米酒', 1, NULL, NULL, NULL, 0);
INSERT INTO `wshop_goods` VALUES (36, 119118194221369, 1200713243939, '20121429', '糯米酒', 1230034, 23, '糯米酒', '青草沙崇明糯米酒12度低度甜米酒上海特产黄酒送礼', NULL, 1, 0, 100, 0, 32, 0, 32, 32, NULL, NULL, 0, '2020-01-07 13:24:39', '2020-01-07 13:24:39', NULL, NULL, NULL, '\\public\\uploads\\goods\\2020-01-07\\1578374679035130.png', NULL, NULL, '农家米酒', 0, NULL, NULL, '11911819431998', 0);
INSERT INTO `wshop_goods` VALUES (37, 12007132716572, 12007133053198, '20121430', '五花腊肉', 1230034, 54, '五花腊肉', '四川特产五花腊肉正宗农家手工自制烟熏柴火熏咸肉年货咸肉', NULL, 1, 0, 100, 0, 20, 0, 20, 20, NULL, NULL, 0, '2020-01-07 13:30:53', '2020-01-07 13:30:53', NULL, NULL, NULL, '\\public\\uploads\\goods\\2020-01-07\\1578375053183822.png', NULL, NULL, '农家腊肉', 0, NULL, NULL, '12007132831708,12007132953385', 0);
INSERT INTO `wshop_goods` VALUES (38, 12007132716572, 12007133218863, '20121431', '腊肉烟熏腊肠', 1230034, 23, '腊肉烟熏腊肠', '四川正宗特产麻辣香肠农家风干自制腊肉烟熏腊肠', NULL, 1, 0, 100, 0, 25, 0, 25, 25, NULL, NULL, 0, '2020-01-07 13:32:18', '2020-01-07 13:32:18', NULL, NULL, NULL, '\\public\\uploads\\goods\\2020-01-07\\1578375138856171.png', NULL, NULL, '农家腊肉', 0, NULL, NULL, '12007132831708', 0);
INSERT INTO `wshop_goods` VALUES (39, 12007132716572, 12007133343160, '20121432', '芝麻麻辣香肠', 1230034, 23, '芝麻麻辣香肠', '芝麻麻辣香肠500克6分瘦四川特产川味烟熏腊肠农家自制腊肉', NULL, 0, 0, 100, 0, 26, 0, 26, 26, NULL, NULL, 0, '2020-01-07 13:33:43', '2020-01-07 13:33:43', NULL, NULL, NULL, '\\public\\uploads\\goods\\2020-01-07\\157837522313423.png', NULL, NULL, '农家腊肉', 1, NULL, NULL, '12007132831708', 0);
INSERT INTO `wshop_goods` VALUES (40, 120071336411, 1200713373618, '20121433', '什锦果蔬', 1230034, 34, '什锦果蔬', '果蔬脆脱水蔬菜干混合蔬菜干水果干菇甜葵什锦果蔬脆', NULL, 1, 0, 100, 0, 5, 0, 5, 5, NULL, NULL, 0, '2020-01-07 13:37:36', '2020-01-07 13:37:36', NULL, NULL, NULL, '\\public\\uploads\\goods\\2020-01-07\\1578375456010758.png', NULL, NULL, '农家果蔬', 0, NULL, NULL, '119118175221538', 0);
INSERT INTO `wshop_goods` VALUES (41, 120071336411, 12007133850858, '20121434', '新鲜马蹄', 1230034, 23, '新鲜马蹄', '鲜马蹄荸荠地栗农家水果蔬菜红马蹄果净现货', NULL, 1, 0, 100, 0, 3, 0, 3, 3, NULL, NULL, 0, '2020-01-07 13:38:50', '2020-01-07 13:38:50', NULL, NULL, NULL, '\\public\\uploads\\goods\\2020-01-07\\1578375530851194.png', NULL, NULL, '农家果蔬', 0, NULL, NULL, '119118175221538', 0);
INSERT INTO `wshop_goods` VALUES (42, 120071336411, 12007134011191, '20121435', '新鲜小红萝卜', 1230034, 43, '新鲜小红萝卜', '胡萝卜新鲜小红萝卜 新鲜5斤包邮水果蔬菜农家自产老品种非转基因', NULL, 1, 0, 100, 0, 6, 0, 6, 6, NULL, NULL, 0, '2020-01-07 13:40:11', '2020-01-07 13:40:11', NULL, NULL, NULL, '\\public\\uploads\\goods\\2020-01-07\\1578375611182811.png', NULL, NULL, '农家果蔬', 0, NULL, NULL, '119118175221538', 0);
INSERT INTO `wshop_goods` VALUES (43, 120071336411, 12007134140425, '20121436', '台湾小香葱', 1230034, 43, '台湾小香葱', '新鲜红葱头干小葱 台湾小香葱种子火葱农家自种肠粉调料', NULL, 1, 0, 100, 0, 45, 0, 45, 45, NULL, NULL, 0, '2020-01-07 13:41:40', '2020-01-07 13:41:40', NULL, NULL, NULL, '\\public\\uploads\\goods\\2020-01-07\\1578375700403846.png', NULL, NULL, '农家果蔬', 0, NULL, NULL, '119118175221538', 0);
INSERT INTO `wshop_goods` VALUES (44, 120071336411, 12007134437745, '20121437', '小黄瓜', 1230034, 23, '小黄瓜', '崇明农家特产 天然新鲜水果蔬菜 无刺青瓜生吃', NULL, 1, 0, 100, 0, 12, 0, 12, 12, NULL, NULL, 0, '2020-01-07 13:44:37', '2020-01-07 13:44:37', NULL, NULL, NULL, '\\public\\uploads\\goods\\2020-01-07\\1578375877742907.png', NULL, NULL, '农家果蔬', 0, NULL, NULL, '119118175221538', 0);
INSERT INTO `wshop_goods` VALUES (45, 12007134856145, 12007134949430, '20121438', '纯正天然蜂蜜', 1230034, 233, '纯正天然蜂蜜', '纯正天然结晶农家自产椴树蜜洋槐百花蜜自家养土蜂蜜峰蜜野生', NULL, 1, 0, 100, 0, 34, 0, 34, 34, NULL, NULL, 1, '2020-01-07 13:49:49', '2020-01-07 13:49:49', NULL, NULL, NULL, '\\public\\uploads\\goods\\2020-01-07\\1578376189425757.png', NULL, NULL, '蜂蜜', 1, NULL, NULL, '119118175221538', 0);
INSERT INTO `wshop_goods` VALUES (46, 12007134856145, 1200713565543, '20121439', '冠生园蜂蜜', 1230034, 23, '冠生园蜂蜜', '冠生园蜂蜜', NULL, 1, 0, 100, 0, 34, 0, 34, 34, NULL, NULL, 0, '2020-01-07 13:56:05', '2020-01-07 13:56:05', NULL, NULL, NULL, '\\public\\uploads\\goods\\2020-01-07\\1578376565536635.png', NULL, NULL, '蜂蜜', 1, NULL, NULL, '119118175221538', 0);
INSERT INTO `wshop_goods` VALUES (47, 12007134856145, 120071401114, '20121440', '麦卢卡蜂蜜', 1230034, 34, '麦卢卡蜂蜜', '麦卢卡蜂蜜', NULL, 1, 0, 100, 0, 34, 0, 34, 34, NULL, NULL, 0, '2020-01-07 14:00:01', '2020-01-07 14:00:01', NULL, NULL, NULL, '\\public\\uploads\\goods\\2020-01-07\\157837680110750.png', NULL, NULL, '蜂蜜', 0, NULL, NULL, '119118175221538', 0);
INSERT INTO `wshop_goods` VALUES (48, 12007134856145, 1200714253543, '20121441', '高海拔岩蜜土蜂蜜', 1230034, 23, '高海拔岩蜜土蜂蜜', '高海拔岩蜜土蜂蜜', NULL, 1, 0, 100, 0, 34, 0, 34, 34, NULL, NULL, 0, '2020-01-07 14:02:53', '2020-01-08 09:41:47', NULL, NULL, NULL, '\\public\\uploads\\goods\\2020-01-07\\1578376973512842.png,\\public\\uploads\\goods\\2020-01-07\\1578378462811906.png,', NULL, NULL, '蜂蜜', 1, NULL, NULL, '11911819431998', 0);

-- ----------------------------
-- Table structure for wshop_keywords
-- ----------------------------
DROP TABLE IF EXISTS `wshop_keywords`;
CREATE TABLE `wshop_keywords`  (
  `id` int(11) NOT NULL COMMENT '-',
  `is_hot` int(1) UNSIGNED NOT NULL DEFAULT 0 COMMENT '-',
  `is_default` int(1) UNSIGNED NOT NULL DEFAULT 0 COMMENT '-',
  `is_show` int(1) UNSIGNED NOT NULL DEFAULT 1 COMMENT '-',
  `sort_order` int(11) UNSIGNED NOT NULL DEFAULT 100 COMMENT '-',
  `type` int(11) UNSIGNED NOT NULL DEFAULT 0 COMMENT '-',
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for wshop_order
-- ----------------------------
DROP TABLE IF EXISTS `wshop_order`;
CREATE TABLE `wshop_order`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '-',
  `order_id` bigint(255) NOT NULL,
  `order_sn` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '订单号,唯一',
  `money_paid` decimal(11, 0) NULL DEFAULT NULL COMMENT '定金',
  `user_id` bigint(255) UNSIGNED NOT NULL DEFAULT 0 COMMENT '-',
  `zipcode` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '邮编',
  `order_status` int(1) UNSIGNED NULL DEFAULT 0 COMMENT '订单的状态;0未确认,1确认,2已取消,3无效,4退货',
  `shipping_status` int(1) UNSIGNED NULL DEFAULT 0 COMMENT '商品配送情况;0未发货,1已发货,2已收货,4退货',
  `pay_status` int(1) UNSIGNED NULL DEFAULT NULL COMMENT '	支付状态;0未付款;1付款中;2已付款；3支付中',
  `consignee` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '收货人的姓名,用户页面填写,默认取值表user_address',
  `country` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '	收货人的国家,用户页面填写,默认取值于表user_address,其id对应的值在region',
  `province` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '	收货人的省份,用户页面填写,默认取值于表user_address, 其id对应的值在region',
  `city` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '	收货人的城市,用户页面填写,默认取值于表user_address,其id对应的值在region',
  `district` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '收货人的地区,用户页面填写,默认取值于表user_address,其id对应的值在region',
  `address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '	收货人的详细地址,用户页面填写,默认取值于表user_address',
  `mobile` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '-',
  `postscript` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '订单附言,由用户提交订单前填写',
  `shipping_fee` decimal(10, 0) NULL DEFAULT 0 COMMENT '配送费用',
  `pay_name` varchar(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '支付方式名称',
  `pay_id` int(3) NULL DEFAULT 0 COMMENT '支付方式;0微信支付,1其他支付',
  `actual_price` decimal(10, 0) NULL DEFAULT 0 COMMENT '实际价格',
  `integral` int(10) UNSIGNED NULL DEFAULT 0 COMMENT '使用的积分的数量,取用户使用积分,商品可用积分,用户拥有积分中最小者',
  `integral_money` decimal(10, 0) UNSIGNED NULL DEFAULT 0 COMMENT '使用积分金额',
  `order_price` decimal(10, 0) NULL DEFAULT 0 COMMENT '订单总金额',
  `end_time` datetime(0) NULL DEFAULT NULL COMMENT '订单结束时间（有效期）',
  `add_time` datetime(0) NULL DEFAULT NULL COMMENT '-',
  `confirm_time` datetime(0) NULL DEFAULT NULL COMMENT '物流确认时间',
  `pay_time` datetime(0) NULL DEFAULT NULL COMMENT '支付时间',
  `freight_price` int(10) UNSIGNED NULL DEFAULT 0 COMMENT '配送费用',
  `coupon_id` int(8) UNSIGNED NULL DEFAULT 0 COMMENT '\r\ncoupon_\r\n优惠券',
  `parent_id` int(8) UNSIGNED NULL DEFAULT 0,
  `coupon_price` decimal(10, 0) NULL DEFAULT 0 COMMENT '-',
  `callback_status` enum('true','false') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT 'true' COMMENT '-',
  `createdAt` datetime(0) NULL DEFAULT NULL,
  `updatedAt` datetime(0) NULL DEFAULT NULL,
  `order_channel` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `order_type` int(3) UNSIGNED NOT NULL COMMENT '订单类型；0普通，1团购',
  `note` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `logistic_code` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '物流单号',
  `shipper_code` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '物流公司',
  `delivery_type` int(3) NOT NULL COMMENT '收货方式；0物流，1上门自提',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 51 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of wshop_order
-- ----------------------------
INSERT INTO `wshop_order` VALUES (50, 12009125135440, '', NULL, 119112212311681, '510000', 0, 0, 0, '张三', '中国', '广东省', '广州市', '海珠区', '新港中路397号', '020-81167888', '', 0, '微信支付', 0, 0, 0, 0, 43, NULL, '2020-01-09 12:51:35', NULL, NULL, 0, 0, 0, 0, 'true', '2020-01-09 12:51:35', '2020-01-09 12:51:35', NULL, 0, NULL, NULL, NULL, 0);

-- ----------------------------
-- Table structure for wshop_order_goods
-- ----------------------------
DROP TABLE IF EXISTS `wshop_order_goods`;
CREATE TABLE `wshop_order_goods`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `order_id` bigint(255) NOT NULL COMMENT '订单id',
  `goods_id` bigint(255) NOT NULL COMMENT '商品id',
  `goods_attrs` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '商品属性',
  `number` int(5) NOT NULL COMMENT '选购商品数量',
  `goods_sn` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '商品唯一编号',
  `goods_name` varchar(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '商品名称',
  `shop_price` decimal(10, 2) NOT NULL COMMENT '商品销售价格',
  `list_pic_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '商品海报',
  `goods_number` int(8) NOT NULL COMMENT '商品库存',
  `createdAt` datetime(0) NULL DEFAULT NULL,
  `updatedAt` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of wshop_order_goods
-- ----------------------------
INSERT INTO `wshop_order_goods` VALUES (1, 12009125135440, 12007125635857, '30kg,中号', 1, NULL, '五谷杂粮饼干无糖精食品', 14.00, '/public/uploads/goods/2020-01-07/1578372995846280.png', 543, '2020-01-09 12:51:35', '2020-01-09 12:51:35');
INSERT INTO `wshop_order_goods` VALUES (2, 12009125135440, 1200713315830, '50kg,大号', 1, NULL, '咸蛋黄酥饼干', 14.00, '/public/uploads/goods/2020-01-07/1578373395823371.png', 23, '2020-01-09 12:51:35', '2020-01-09 12:51:35');
INSERT INTO `wshop_order_goods` VALUES (3, 12009125135440, 12007133850858, '50kg', 1, NULL, '新鲜马蹄', 3.00, '/public/uploads/goods/2020-01-07/1578375530851194.png', 23, '2020-01-09 12:51:35', '2020-01-09 12:51:35');
INSERT INTO `wshop_order_goods` VALUES (4, 12009125135440, 12007134437745, '50kg', 1, NULL, '小黄瓜', 12.00, '/public/uploads/goods/2020-01-07/1578375877742907.png', 23, '2020-01-09 12:51:35', '2020-01-09 12:51:35');

-- ----------------------------
-- Table structure for wshop_pay_log
-- ----------------------------
DROP TABLE IF EXISTS `wshop_pay_log`;
CREATE TABLE `wshop_pay_log`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '-',
  `order_id` int(8) NOT NULL COMMENT '-',
  `order_amount` decimal(10, 0) NOT NULL COMMENT '-',
  `order_type` int(1) NOT NULL COMMENT '-',
  `is_paid` int(1) NOT NULL COMMENT '-',
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for wshop_payment
-- ----------------------------
DROP TABLE IF EXISTS `wshop_payment`;
CREATE TABLE `wshop_payment`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '-',
  `pay_code` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '-',
  `pay_name` varchar(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '-',
  `pay_fee` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '-',
  `pay_desc` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '-',
  `pay_order` int(3) NULL DEFAULT NULL COMMENT '-',
  `pay_config` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL COMMENT '-',
  `enabled` int(1) NOT NULL COMMENT '-',
  `is_cod` int(1) NOT NULL COMMENT '-',
  `is_online` int(1) NOT NULL COMMENT '-',
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for wshop_product
-- ----------------------------
DROP TABLE IF EXISTS `wshop_product`;
CREATE TABLE `wshop_product`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `goods_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '0',
  `order_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '订单id，取值于wshop_order表的 id 字段',
  `user_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `goods_sn` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '',
  `goods_number` int(8) UNSIGNED NULL DEFAULT 0,
  `shop_price` decimal(10, 0) NULL DEFAULT 0,
  `createdAt` datetime(0) NULL DEFAULT NULL,
  `updatedAt` datetime(0) NULL DEFAULT NULL,
  `goods_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `pay_status` int(1) NULL DEFAULT NULL COMMENT '支付状态;0未付款;1付款中;2已付款',
  `shipping_status` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '商品配送情况;0未发货,1已发货,2已收货,4退货',
  `order_uid` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '订单唯一id，取值于wshop_order表的 order_id 字段',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of wshop_product
-- ----------------------------
INSERT INTO `wshop_product` VALUES (1, '119118195055572', '1', '1', '55474', 12, 21, '2019-12-08 20:06:58', '2019-12-10 12:23:30', '黑米糊', 2, '1', '19881');
INSERT INTO `wshop_product` VALUES (2, '11911819521880', '1', '1', '55474', 2, 21, '2019-12-08 20:06:58', '2019-12-10 12:23:30', '红高粱高度酒', 2, '1', '19881');
INSERT INTO `wshop_product` VALUES (3, '1191182016476', '2', '2', '554422', 2, 21, '2019-12-08 20:06:58', '2019-12-10 13:40:31', '红糟姜酸', 2, '1', '19882');
INSERT INTO `wshop_product` VALUES (4, '11911820157838', '2', '2', '6544', 2, 21, '2019-12-08 20:06:58', '2019-12-10 13:40:31', '四季豆角酸', 2, '1', '19882');

-- ----------------------------
-- Table structure for wshop_region
-- ----------------------------
DROP TABLE IF EXISTS `wshop_region`;
CREATE TABLE `wshop_region`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '-',
  `parent_id` int(5) NULL DEFAULT NULL COMMENT '-',
  `region_name` varchar(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '-',
  `region_type` int(1) NULL DEFAULT NULL COMMENT '-',
  `agency_id` int(5) NULL DEFAULT NULL COMMENT '-',
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for wshop_role
-- ----------------------------
DROP TABLE IF EXISTS `wshop_role`;
CREATE TABLE `wshop_role`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `authorities` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `createdAt` datetime(0) NULL DEFAULT NULL,
  `updatedAt` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 6 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of wshop_role
-- ----------------------------
INSERT INTO `wshop_role` VALUES (1, '销售组长', 'logs-admin', '2019-12-11 18:04:41', '2019-12-13 15:13:23');
INSERT INTO `wshop_role` VALUES (2, '超级管理员', 'goods-list,goods-category,goods-attrs,order-list,order-deliver,order-cancel,order-service,wx-setting,members-list,members-admin,members-roles,logs-admin', '2019-12-11 18:05:39', '2019-12-13 15:13:41');
INSERT INTO `wshop_role` VALUES (3, '普通管理员', 'order-list,goods-list,members-list', '2019-12-11 18:07:15', '2019-12-13 15:14:18');
INSERT INTO `wshop_role` VALUES (4, '测试角色', 'goods-list,goods-category,goods-attrs,order-list,order-deliver,order-cancel,order-service,wx-setting,members-list,members-admin,members-roles,logs-admin', '2019-12-13 15:04:04', '2019-12-13 15:04:04');
INSERT INTO `wshop_role` VALUES (5, '测试水水', 'goods-list,goods-category,goods-attrs,order-list,order-deliver,order-cancel,order-service,wx-setting,members-list,members-admin,members-roles,logs-admin', '2019-12-13 15:07:04', '2019-12-13 15:07:04');

-- ----------------------------
-- Table structure for wshop_user
-- ----------------------------
DROP TABLE IF EXISTS `wshop_user`;
CREATE TABLE `wshop_user`  (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '-',
  `username` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '-',
  `password` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '-',
  `gender` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '-',
  `birthday` int(11) NULL DEFAULT NULL COMMENT '-',
  `register_time` datetime(0) NULL DEFAULT NULL COMMENT '-',
  `last_login_time` datetime(0) NOT NULL COMMENT '-',
  `last_login_ip` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '-',
  `user_level_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '-',
  `nickname` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '-',
  `mobile` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '-',
  `register_ip` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '-',
  `avatar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '-',
  `weixin_openid` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '-',
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  `user_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of wshop_user
-- ----------------------------
INSERT INTO `wshop_user` VALUES (1, 'A💣B', NULL, '男', NULL, '2019-12-22 12:31:16', '2019-12-22 12:31:16', '', NULL, 'A💣B', NULL, '', 'https://wx.qlogo.cn/mmopen/vi_32/qxWEIjy9XYffo1rUETYRYriaQbtuFGqUKEIgBR02qdSKPdh69V0icfY3nxEPv8KDSz37JAwSsBBhBv4bgmADXyYw/132', 'omzqg4rVULsBMgodJZv7reCr0kls', '2019-12-22 12:31:16', '2019-12-22 12:31:16', '119112212311681');

-- ----------------------------
-- Table structure for wshop_wx
-- ----------------------------
DROP TABLE IF EXISTS `wshop_wx`;
CREATE TABLE `wshop_wx`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `appid` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `appsecret` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `organization` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `intro` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of wshop_wx
-- ----------------------------
INSERT INTO `wshop_wx` VALUES (1, 'wx8003c4b4ffcf7125', 'c0a2b4993d8dbc5d3561c9a8e1f4a0d0', '临街士多店', '韦*', '生活杂货铺，专营农家特产', '2019-12-23 17:49:13', '2019-12-23 17:49:13');

SET FOREIGN_KEY_CHECKS = 1;
