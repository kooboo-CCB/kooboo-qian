# KooBoo内置指令
## k-content

**作用：** 插入 element 元素（富文本）

**示例代码：**

```html
<span
  k-content="`<p class='active'>插入的属于富文本，会解析字符串中的标签</p>`"
></span>
```



## k-text

**作用：** 插入文本

```html
<span k-text="与k-content相反，插入的内容为文本"></span>
```



## k-attribute

**作用：** 设置一个元素的 attribute

```html
<p k-attribute="class attribute? 'active':''">配合三元运算符设置元素的class</p>
<p k-attribute="class attribute1">直接指定元素的class</p>
```



## k-for

**作用：** 循环

```html
<script>
  ket list = [{name:"张三"},{name:"李四"}]
</script>

<div k-for="(item,index) in list">
  <li k-content="item.name"></li>
</div>
```



## k-if | k-elseif | k-else

**作用：** 根据判断结果，结果为 false 隐藏元素

```html
<div k-if="kif === 'kif' ">1</div>
<div k-elseif="kif === 'kif1' ">2</div>
<div k-else="">3 ? (如何使用)</div>
```



##  k-placeholder

**作用：** 用于在布局中将元素标记为占位符/容器。组件可以从页面设计器添加到占位符中。

```html
<!-- 插槽 -->
<span k-placeholder="main"></span>

<!-- 使用placeholder插入插槽 -->
<!-- id用于指定插槽,和k-placeholder的值相对应 -->
<placeholder id="main">
  <view id="page.sneller"></view>
</placeholder>
```



## k-slot-insret

**作用：** 将内容插入包含插槽的子组件，value 值与`k-solt-define`相对应即可将内容插入插槽中

```html
<view id="global_footer">
  <div k-slot-insert="left" class="left_son">left</div>
  <div k-slot-insert="">默认?</div>
  <div k-slot-insert="right" class="right_son">right</div>
</view>
```



## k-slot-define

**作用：**  在组件中定义一个可以接受外部内容的插槽，设定一个插槽的名称。 这个名称与`k-slot-insert`相对应，会将内容进行 **替换**（替换意味着，当你需要一些特殊的类名设置样式来维持结构的稳定的时候，可以在插槽的外部添加一个 div 并添加需要的类名，在 div 的子元素里面使用 k-solt-define）

```html
<div class="jumbotron">
  <div k-slot-define="left"></div>
  <div k-slot-define=""></div>
  <div k-slot-define="right"></div>
</div>
```



## k-device

**作用：** 判断当前的设备为移动设备还是桌面设备，与设定的值不符会隐藏元素（无响应式，不稳定）

```html
当前设备为：
<span k-device="mobile">mobile</span>
<span k-device="desktop">desktop</span>
```



## k-label

**作用：** 用于指定元素的`content`，`k-label`的`value`会在系统中形成一个同名的标签，标签可以设定值，标签的值支持多语言设定，故相比`内容/内容`来说，使用 k-label 的场景多见于多语言

**模板中的应用**
```html
<body>
	<p k-label="services-first__text--top"></p>
</body>
```



# 未明白

## k-config

**作用：**？？？

## k-htmlblock

**作用：**？？？
