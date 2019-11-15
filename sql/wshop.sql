/*
 Navicat Premium Data Transfer

 Source Server         : mystore
 Source Server Type    : MySQL
 Source Server Version : 80012
 Source Host           : localhost:3306
 Source Schema         : wshop

 Target Server Type    : MySQL
 Target Server Version : 80012
 File Encoding         : 65001

 Date: 15/11/2019 18:03:27
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
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for wshop_admin
-- ----------------------------
DROP TABLE IF EXISTS `wshop_admin`;
CREATE TABLE `wshop_admin`  (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '\'\'',
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '\'\'',
  `password_salt` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '\'\'',
  `last_login_ip` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '\'\'',
  `last_login_time` int(11) NULL DEFAULT 0,
  `add_time` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '0',
  `update_time` int(11) NULL DEFAULT 0,
  `avatar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '\'\'',
  `admin_role` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `createdAt` datetime(0) NULL DEFAULT NULL,
  `updatedAt` datetime(0) NULL DEFAULT NULL,
  `email` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `mobile` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `user_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of wshop_admin
-- ----------------------------
INSERT INTO `wshop_admin` VALUES (10, 'wx1988', '$2a$12$DCPOLEYzoHUZ6Yczd7gJHOcwB0VUR/60S02tSOPuFmiMrUk7YrjA6', '\'\'', '127.0.0.1', 0, '2019-11-15 15:53:54', 0, '\'\'', '[\"user\"]', NULL, NULL, '413307928@qq.com', '13641479847', '1191015155354661');
INSERT INTO `wshop_admin` VALUES (11, 'wx1988', '$2a$12$hAfwkYfWBxtSs1wAt7Cme.DVFk1HCfyKPG3XWBneypDGsDKKR4O2C', '\'\'', '127.0.0.1', 0, '2019-11-15 16:17:5', 0, '\'\'', '[\"user\"]', NULL, NULL, '413307928@qq.com', '13641479854', '119101516175373');
INSERT INTO `wshop_admin` VALUES (12, 'pengjianwei@wow-trend.com', '$2a$12$027Uh9GB78UV9KT/xlaiReBM2alr0RTA.0pUbkBLWsvxYY0iCk/1i', '\'\'', '127.0.0.1', 0, '2019-11-15 16:22:12', 0, '\'\'', '[\"user\"]', NULL, NULL, '413307928@qq.com', '13645478954', '1191015162212636');
INSERT INTO `wshop_admin` VALUES (13, 'wx1988123123', '$2a$12$ejEx7qzzyQJCrdQrjegepuy8YNlFePAe.tzmJXMdtMD5iED7ACZQW', '\'\'', '127.0.0.1', 0, '2019-11-15 16:24:43', 0, '\'\'', '[\"user\"]', NULL, NULL, '413307928@qq.com', '13641479587', '1191015162443729');

-- ----------------------------
-- Table structure for wshop_admin_user
-- ----------------------------
DROP TABLE IF EXISTS `wshop_admin_user`;
CREATE TABLE `wshop_admin_user`  (
  `id` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '自增id号',
  `user_id` smallint(5) NOT NULL COMMENT '管理员id',
  `user_name` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '管理员登录名',
  `email` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '管理员邮箱',
  `password` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '管理员登录密码',
  `add_time` int(11) NULL DEFAULT NULL COMMENT '管理员添加时间',
  `last_login` int(11) NULL DEFAULT NULL COMMENT '管理员最后一次登录时间',
  `last_ip` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '管理员最后一次登录IP',
  `action_list` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '管理员管理权限列表',
  `nav_list` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL COMMENT '管理员导航栏配置项',
  `mobile` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '管理员手机',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

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
  `user_id` int(8) UNSIGNED NOT NULL DEFAULT 0,
  `session_id` char(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '\'\'',
  `goods_id` int(8) UNSIGNED NOT NULL DEFAULT 0,
  `goods_sn` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '\'\'',
  `product_id` int(8) UNSIGNED NULL DEFAULT 0,
  `goods_name` varchar(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '\'\'',
  `market_price` decimal(10, 0) NOT NULL DEFAULT 0,
  `retail_price` decimal(10, 0) NOT NULL DEFAULT 0,
  `number` int(5) UNSIGNED NOT NULL DEFAULT 0,
  `goods_specifition_name_value` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `goods_specifition_ids` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '\'\'',
  `checked` int(1) UNSIGNED NOT NULL DEFAULT 1,
  `list_pic_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '\'\'',
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  `rec_type` int(1) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for wshop_category
-- ----------------------------
DROP TABLE IF EXISTS `wshop_category`;
CREATE TABLE `wshop_category`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(90) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '\'\'',
  `keywords` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '\'\'',
  `front_desc` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '\'\'',
  `parent_id` int(5) UNSIGNED NOT NULL DEFAULT 0,
  `sort_order` int(1) UNSIGNED NOT NULL DEFAULT 50,
  `show_index` int(1) NULL DEFAULT 0,
  `is_show` int(1) UNSIGNED NOT NULL DEFAULT 1,
  `banner_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '\'\'',
  `icon_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `img_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `wap_banner_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `level` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `type` int(11) NOT NULL DEFAULT 0,
  `front_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  `grade` int(4) NULL DEFAULT NULL,
  `filter_attr` int(6) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

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
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

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
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

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
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

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
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for wshop_goods
-- ----------------------------
DROP TABLE IF EXISTS `wshop_goods`;
CREATE TABLE `wshop_goods`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '-',
  `category_id` int(11) UNSIGNED NOT NULL DEFAULT 0 COMMENT '分类id',
  `goods_sn` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '\'\'' COMMENT '商品的唯一货号',
  `goods_name` varchar(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '\'\'' COMMENT '商品的名称',
  `brand_id` int(11) UNSIGNED NULL DEFAULT 0 COMMENT '品牌id，取值于brand 的brand_id',
  `goods_number` int(8) UNSIGNED NOT NULL DEFAULT 0 COMMENT '商品库存数量',
  `keywords` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '\'\'' COMMENT '商品关键字，放在商品页的关键字中，为搜索引擎收录用',
  `goods_brief` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '\'\'' COMMENT '商品的简短描述',
  `goods_desc` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL COMMENT '商品的详细描述',
  `is_on_sale` int(1) UNSIGNED NOT NULL DEFAULT 1 COMMENT '该商品是否开放销售，1，是；0，否',
  `add_time` int(10) UNSIGNED NOT NULL DEFAULT 0 COMMENT '商品添加时间',
  `sort_order` int(4) UNSIGNED NULL DEFAULT 100 COMMENT '应该是商品的显示顺序，不过该版程序中没实现该功能',
  `is_delete` int(1) UNSIGNED NOT NULL DEFAULT 0 COMMENT '商品是否已经删除，0，否；1，已删除',
  `counter_price` decimal(10, 0) NOT NULL DEFAULT 0 COMMENT '折扣价格',
  `is_new` int(1) UNSIGNED NOT NULL DEFAULT 0 COMMENT '是否是新品',
  `shop_price` decimal(10, 0) NOT NULL DEFAULT 0 COMMENT '销售价格',
  `market_price` decimal(10, 0) NOT NULL DEFAULT 0 COMMENT '市场价格',
  `promotion_desc` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '促销商品的详细描述',
  `promote_price` decimal(10, 0) NOT NULL COMMENT '促销商品价格',
  `is_hot` int(1) UNSIGNED NOT NULL DEFAULT 0 COMMENT '是否热销，0，否；1，是',
  `createdAt` datetime(0) NOT NULL COMMENT '创建时间',
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
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

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
  `order_sn` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '-',
  `user_id` int(8) UNSIGNED NOT NULL DEFAULT 0 COMMENT '-',
  `order_status` int(1) UNSIGNED NOT NULL DEFAULT 0 COMMENT '-',
  `shipping_status` int(1) UNSIGNED NOT NULL DEFAULT 0 COMMENT '-',
  `pay_status` int(1) UNSIGNED NOT NULL DEFAULT 0 COMMENT '-',
  `consignee` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '-',
  `country` int(5) UNSIGNED NOT NULL DEFAULT 0 COMMENT '-',
  `province` int(5) UNSIGNED NOT NULL DEFAULT 0 COMMENT '-',
  `city` int(5) UNSIGNED NOT NULL DEFAULT 0 COMMENT '-',
  `district` int(5) UNSIGNED NOT NULL DEFAULT 0 COMMENT '-',
  `address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '-',
  `mobile` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '-',
  `postscript` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '-',
  `shipping_fee` decimal(10, 0) NOT NULL DEFAULT 0 COMMENT '-',
  `pay_name` varchar(120) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '-',
  `pay_id` int(3) NOT NULL DEFAULT 0 COMMENT '-',
  `actual_price` decimal(10, 0) NOT NULL DEFAULT 0 COMMENT '-',
  `integral` int(10) UNSIGNED NOT NULL DEFAULT 0 COMMENT '-',
  `integral_money` decimal(10, 0) NOT NULL DEFAULT 0 COMMENT '-',
  `order_price` decimal(10, 0) NOT NULL DEFAULT 0 COMMENT '-',
  `goods_price` decimal(10, 0) NOT NULL DEFAULT 0 COMMENT '-',
  `add_time` int(11) UNSIGNED NOT NULL DEFAULT 0 COMMENT '-',
  `confirm_time` int(11) UNSIGNED NOT NULL DEFAULT 0 COMMENT '-',
  `pay_time` int(11) UNSIGNED NOT NULL DEFAULT 0 COMMENT '-',
  `freight_price` int(10) UNSIGNED NOT NULL DEFAULT 0 COMMENT '-',
  `coupon_id` int(8) UNSIGNED NOT NULL DEFAULT 0 COMMENT '-',
  `parent_id` int(8) UNSIGNED NOT NULL DEFAULT 0 COMMENT '-',
  `coupon_price` decimal(10, 0) NOT NULL DEFAULT 0 COMMENT '-',
  `callback_status` enum('true','false') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT 'true' COMMENT '-',
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `order_sn`(`order_sn`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

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
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

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
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for wshop_product
-- ----------------------------
DROP TABLE IF EXISTS `wshop_product`;
CREATE TABLE `wshop_product`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `goods_id` int(8) UNSIGNED NOT NULL DEFAULT 0,
  `goods_specification_ids` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `goods_sn` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `goods_number` int(8) UNSIGNED NOT NULL DEFAULT 0,
  `retail_price` decimal(10, 0) NOT NULL DEFAULT 0,
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

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
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for wshop_user
-- ----------------------------
DROP TABLE IF EXISTS `wshop_user`;
CREATE TABLE `wshop_user`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '-',
  `username` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '-',
  `password` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '-',
  `gender` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '-',
  `birthday` int(11) NOT NULL COMMENT '-',
  `register_time` datetime(0) NOT NULL COMMENT '-',
  `last_login_time` datetime(0) NOT NULL COMMENT '-',
  `last_login_ip` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '-',
  `user_level_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '-',
  `nickname` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '-',
  `mobile` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '-',
  `register_ip` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '-',
  `avatar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '-',
  `weixin_openid` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '-',
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for wshop_userinfo
-- ----------------------------
DROP TABLE IF EXISTS `wshop_userinfo`;
CREATE TABLE `wshop_userinfo`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '-',
  `avatar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '-',
  `balance` int(11) NULL DEFAULT NULL COMMENT '-',
  `brand_member_new` int(11) NULL DEFAULT NULL COMMENT '-',
  `current_address_id` int(11) NULL DEFAULT NULL COMMENT '-',
  `current_invoice_id` int(11) NULL DEFAULT NULL COMMENT '-',
  `delivery_card_expire_days` int(11) NULL DEFAULT NULL COMMENT '-',
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '-',
  `gift_amount` int(11) NULL DEFAULT NULL COMMENT '-',
  `city` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '-',
  `registe_time` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '-',
  `user_id` int(11) NULL DEFAULT NULL COMMENT '-',
  `is_active` int(11) NULL DEFAULT NULL COMMENT '-',
  `is_email_valid` int(1) NULL DEFAULT NULL COMMENT '-',
  `is_mobile_valid` int(1) NULL DEFAULT NULL COMMENT '-',
  `mobile` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '-',
  `point` int(11) NULL DEFAULT NULL COMMENT '-',
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '-',
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;
