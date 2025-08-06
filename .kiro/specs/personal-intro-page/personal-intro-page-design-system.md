# Personal Introduction Page Design System

## 项目概述

### 项目目标
创建一个现代、专业、响应式的个人介绍页面，通过精心设计的视觉体验展示个人品牌。

### 设计原则
1. **简洁优雅** - 专注于内容，减少视觉噪音
2. **专业可信** - 建立权威性和专业形象
3. **响应性优先** - 移动优先，全设备完美适配
4. **性能导向** - 快速加载，优秀的用户体验
5. **可访问性** - 符合 WCAG 2.1 AA 标准

## 设计令牌 (Design Tokens)

### 1. 色彩系统

#### 主色彩 (Primary Colors)
```yaml
primary:
  50: "#eff6ff"    # 极浅蓝，用于背景高亮
  100: "#dbeafe"   # 浅蓝，用于辅助背景
  200: "#bfdbfe"   # 中浅蓝，用于边框
  300: "#93c5fd"   # 中蓝，用于次要元素
  400: "#60a5fa"   # 中深蓝，用于悬停状态
  500: "#2563eb"   # 主品牌色，按钮、链接
  600: "#1d4ed8"   # 深蓝，主按钮悬停
  700: "#1e40af"   # 更深蓝，按钮激活状态
  800: "#1e3a8a"   # 深蓝，深色主题辅助
  900: "#1e40af"   # 最深蓝，标题文字
```

#### 中性色 (Neutral Colors)
```yaml
neutral:
  0: "#ffffff"     # 纯白，主背景
  50: "#f9fafb"    # 极浅灰，卡片背景
  100: "#f3f4f6"   # 浅灰，分割线背景
  200: "#e5e7eb"   # 中浅灰，边框
  300: "#d1d5db"   # 中灰，禁用状态
  400: "#9ca3af"   # 中深灰，次要文字
  500: "#6b7280"   # 深灰，辅助文字
  600: "#4b5563"   # 更深灰，二级标题
  700: "#374151"   # 深色，主要文字
  800: "#1f2937"   # 更深色，深色主题背景
  900: "#111827"   # 最深色，强调文字
```

#### 强调色 (Accent Colors)
```yaml
accent:
  success:
    light: "#d1fae5"  # 成功浅色背景
    base: "#10b981"   # 成功状态
    dark: "#047857"   # 成功深色
  
  warning:
    light: "#fef3c7"  # 警告浅色背景
    base: "#f59e0b"   # 警告状态
    dark: "#d97706"   # 警告深色
  
  error:
    light: "#fecaca"  # 错误浅色背景
    base: "#ef4444"   # 错误状态
    dark: "#dc2626"   # 错误深色
  
  highlight:
    light: "#fef3c7"  # 高亮浅色（黄色系）
    base: "#f59e0b"   # 主要高亮色
    dark: "#d97706"   # 高亮深色
```

#### 渐变色 (Gradients)
```yaml
gradients:
  primary: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)"
  hero: "linear-gradient(135deg, #1e3a8a 0%, #2563eb 50%, #3b82f6 100%)"
  card: "linear-gradient(145deg, #ffffff 0%, #f9fafb 100%)"
  overlay: "linear-gradient(180deg, rgba(37, 99, 235, 0.9) 0%, rgba(30, 58, 138, 0.95) 100%)"
```

### 2. 排版系统

#### 字体家族
```yaml
fonts:
  primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
  secondary: "'Georgia', 'Times New Roman', serif"
  mono: "'JetBrains Mono', 'Fira Code', monospace"
```

#### 流体排版规范 (Fluid Typography)
```yaml
typography:
  display:
    size: "clamp(2.5rem, 5vw, 4rem)"      # 40px - 64px
    lineHeight: "clamp(2.75rem, 5.5vw, 4.5rem)"
    fontWeight: 700
    letterSpacing: "-0.025em"
    usage: "Hero 主标题"
  
  h1:
    size: "clamp(2rem, 4vw, 3rem)"        # 32px - 48px
    lineHeight: "clamp(2.25rem, 4.5vw, 3.375rem)"
    fontWeight: 700
    letterSpacing: "-0.025em"
    usage: "页面主标题"
  
  h2:
    size: "clamp(1.5rem, 3vw, 2.25rem)"   # 24px - 36px
    lineHeight: "clamp(1.75rem, 3.5vw, 2.625rem)"
    fontWeight: 600
    letterSpacing: "-0.025em"
    usage: "章节标题"
  
  h3:
    size: "clamp(1.25rem, 2.5vw, 1.875rem)" # 20px - 30px
    lineHeight: "clamp(1.5rem, 3vw, 2.25rem)"
    fontWeight: 600
    letterSpacing: "-0.025em"
    usage: "小节标题"
  
  body-large:
    size: "clamp(1.125rem, 2vw, 1.25rem)" # 18px - 20px
    lineHeight: "clamp(1.75rem, 3vw, 2rem)"
    fontWeight: 400
    letterSpacing: "0"
    usage: "重要正文，引言"
  
  body:
    size: "clamp(1rem, 1.5vw, 1.125rem)"  # 16px - 18px
    lineHeight: "clamp(1.5rem, 2.25vw, 1.75rem)"
    fontWeight: 400
    letterSpacing: "0"
    usage: "标准正文"
  
  body-small:
    size: "clamp(0.875rem, 1.25vw, 1rem)" # 14px - 16px
    lineHeight: "clamp(1.25rem, 1.875vw, 1.5rem)"
    fontWeight: 400
    letterSpacing: "0"
    usage: "次要信息"
  
  caption:
    size: "clamp(0.75rem, 1vw, 0.875rem)"  # 12px - 14px
    lineHeight: "clamp(1rem, 1.5vw, 1.25rem)"
    fontWeight: 500
    letterSpacing: "0.025em"
    usage: "说明文字，标签"
```

### 3. 间距系统

#### 基础间距 (Base Spacing)
```yaml
spacing:
  base: 4px  # 基准单位

  scale:
    xs: "4px"     # 0.25rem
    sm: "8px"     # 0.5rem
    md: "12px"    # 0.75rem
    base: "16px"  # 1rem
    lg: "20px"    # 1.25rem
    xl: "24px"    # 1.5rem
    "2xl": "32px" # 2rem
    "3xl": "48px" # 3rem
    "4xl": "64px" # 4rem
    "5xl": "80px" # 5rem
    "6xl": "96px" # 6rem
```

#### 流体间距 (Fluid Spacing)
```yaml
fluid_spacing:
  section_padding: "clamp(3rem, 8vw, 6rem)"     # 章节内边距
  content_gap: "clamp(2rem, 6vw, 4rem)"         # 内容区域间距
  element_gap: "clamp(1rem, 3vw, 2rem)"         # 元素间距
  text_gap: "clamp(0.5rem, 2vw, 1rem)"          # 文本元素间距
```

### 4. 阴影系统

```yaml
shadows:
  subtle: "0 1px 2px 0 rgba(0, 0, 0, 0.05)"
  small: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)"
  medium: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
  large: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
  inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)"
  
  # 彩色阴影
  primary: "0 10px 15px -3px rgba(37, 99, 235, 0.1), 0 4px 6px -2px rgba(37, 99, 235, 0.05)"
  primary_hover: "0 20px 25px -5px rgba(37, 99, 235, 0.15), 0 10px 10px -5px rgba(37, 99, 235, 0.1)"
```

### 5. 圆角系统

```yaml
border_radius:
  none: "0"
  sm: "0.125rem"    # 2px
  base: "0.25rem"   # 4px
  md: "0.375rem"    # 6px
  lg: "0.5rem"      # 8px
  xl: "0.75rem"     # 12px
  "2xl": "1rem"     # 16px
  "3xl": "1.5rem"   # 24px
  full: "9999px"    # 完全圆形
```

### 6. 过渡动画

```yaml
transitions:
  fast: "150ms ease-in-out"
  base: "200ms ease-in-out"
  slow: "300ms ease-in-out"
  
  easing:
    ease_in: "cubic-bezier(0.4, 0, 1, 1)"
    ease_out: "cubic-bezier(0, 0, 0.2, 1)"
    ease_in_out: "cubic-bezier(0.4, 0, 0.2, 1)"
    bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)"
```

## 响应式断点系统

### 断点定义
```yaml
breakpoints:
  xs: "320px"   # 小型手机
  sm: "480px"   # 大型手机
  md: "768px"   # 平板竖屏
  lg: "1024px"  # 平板横屏/小型笔记本
  xl: "1280px"  # 桌面
  "2xl": "1536px" # 大型桌面
```

### 设备类型映射
```yaml
device_mapping:
  mobile:
    range: "320px - 767px"
    primary_breakpoint: "sm"
    characteristics:
      - 单列布局
      - 大型触摸目标 (44px+)
      - 简化导航
      - 优化滚动体验
  
  tablet:
    range: "768px - 1023px"
    primary_breakpoint: "md"
    characteristics:
      - 两列布局选择
      - 混合触摸/鼠标交互
      - 侧边栏可选
      - 更大内容区域
  
  desktop:
    range: "1024px+"
    primary_breakpoint: "lg"
    characteristics:
      - 多列布局
      - 悬停效果
      - 丰富交互
      - 大型内容展示
```

### 容器尺寸
```yaml
containers:
  full: "100%"
  sm: "640px"
  md: "768px"  
  lg: "1024px"
  xl: "1280px"
  "2xl": "1400px"
```

## 组件设计规范

### 1. 按钮系统

#### 按钮变体
```yaml
buttons:
  primary:
    background: "primary.500"
    color: "white"
    border: "2px solid transparent"
    padding: "12px 24px"
    border_radius: "lg"
    font_weight: 600
    
    states:
      hover:
        background: "primary.600"
        shadow: "primary"
        transform: "translateY(-1px)"
      
      active:
        background: "primary.700"
        transform: "translateY(0)"
      
      focus:
        outline: "2px solid primary.500"
        outline_offset: "2px"
      
      disabled:
        background: "neutral.300"
        color: "neutral.500"
        cursor: "not-allowed"
  
  secondary:
    background: "transparent"
    color: "primary.600"
    border: "2px solid primary.500"
    padding: "12px 24px"
    border_radius: "lg"
    font_weight: 600
    
    states:
      hover:
        background: "primary.50"
        border_color: "primary.600"
      
      active:
        background: "primary.100"
```

#### 按钮尺寸
```yaml
button_sizes:
  small:
    padding: "8px 16px"
    font_size: "body-small"
    height: "36px"
  
  medium:
    padding: "12px 24px"
    font_size: "body"
    height: "44px"
  
  large:
    padding: "16px 32px"
    font_size: "body-large"
    height: "52px"
```

### 2. 卡片系统

```yaml
cards:
  base:
    background: "white"
    border: "1px solid neutral.200"
    border_radius: "xl"
    shadow: "medium"
    padding: "clamp(1.5rem, 4vw, 2rem)"
    
    states:
      hover:
        shadow: "large"
        transform: "translateY(-2px)"
        border_color: "primary.300"
  
  elevated:
    background: "white"
    border: "none"
    border_radius: "2xl"
    shadow: "xl"
    padding: "clamp(2rem, 5vw, 3rem)"
  
  flat:
    background: "neutral.50"
    border: "1px solid neutral.200"
    border_radius: "lg"
    shadow: "none"
    padding: "clamp(1rem, 3vw, 1.5rem)"
```

### 3. 输入控件

```yaml
inputs:
  text_field:
    background: "white"
    border: "2px solid neutral.300"
    border_radius: "lg"
    padding: "12px 16px"
    font_size: "body"
    
    states:
      focus:
        border_color: "primary.500"
        outline: "2px solid primary.100"
        outline_offset: "0"
      
      error:
        border_color: "error.base"
        background: "error.light"
      
      disabled:
        background: "neutral.100"
        color: "neutral.400"
        cursor: "not-allowed"
  
  label:
    font_size: "body-small"
    font_weight: 600
    color: "neutral.700"
    margin_bottom: "8px"
```

### 4. 导航系统

```yaml
navigation:
  mobile:
    type: "bottom_tab"
    background: "white"
    border_top: "1px solid neutral.200"
    shadow: "large"
    padding: "16px"
    
    items:
      padding: "12px"
      border_radius: "lg"
      font_size: "caption"
      
      active:
        background: "primary.100"
        color: "primary.700"
  
  desktop:
    type: "top_navigation"
    background: "white/95"
    backdrop_filter: "blur(12px)"
    border_bottom: "1px solid neutral.200"
    
    items:
      padding: "8px 16px"
      border_radius: "md"
      font_size: "body"
      font_weight: 500
      
      active:
        color: "primary.600"
        background: "primary.50"
      
      hover:
        color: "primary.500"
```

## 页面布局规范

### 1. Hero Section

```yaml
hero:
  container:
    min_height: "100vh"
    padding: "clamp(2rem, 8vw, 6rem)"
    background: "gradients.hero"
    position: "relative"
    display: "flex"
    align_items: "center"
    justify_content: "center"
    text_align: "center"
    color: "white"
  
  content:
    max_width: "800px"
    z_index: 10
    
  title:
    typography: "display"
    margin_bottom: "clamp(1rem, 3vw, 2rem)"
    
  subtitle:
    typography: "body-large"
    opacity: 0.9
    margin_bottom: "clamp(2rem, 4vw, 3rem)"
  
  cta_buttons:
    display: "flex"
    gap: "1rem"
    justify_content: "center"
    flex_wrap: "wrap"
    
    responsive:
      mobile: "flex-direction: column"
      desktop: "flex-direction: row"
```

### 2. About Section

```yaml
about:
  container:
    padding: "clamp(4rem, 10vw, 8rem) clamp(1rem, 5vw, 3rem)"
    background: "white"
  
  layout:
    mobile: "single_column"
    desktop: "two_column"
    grid_gap: "clamp(2rem, 6vw, 4rem)"
    max_width: "1200px"
    margin: "0 auto"
  
  image:
    border_radius: "2xl"
    shadow: "xl"
    max_width: "400px"
    aspect_ratio: "3/4"
  
  content:
    typography: "body-large"
    line_height: 1.7
    color: "neutral.700"
```

### 3. Skills Section

```yaml
skills:
  container:
    padding: "clamp(4rem, 10vw, 8rem) clamp(1rem, 5vw, 3rem)"
    background: "neutral.50"
  
  grid:
    mobile: "grid-cols-1"
    tablet: "grid-cols-2"
    desktop: "grid-cols-3"
    gap: "clamp(1.5rem, 4vw, 2.5rem)"
    max_width: "1200px"
    margin: "0 auto"
  
  skill_card:
    background: "white"
    border_radius: "xl"
    padding: "clamp(1.5rem, 4vw, 2rem)"
    shadow: "medium"
    text_align: "center"
    
    icon:
      size: "clamp(2rem, 6vw, 3rem)"
      color: "primary.500"
      margin_bottom: "1rem"
    
    title:
      typography: "h3"
      margin_bottom: "0.5rem"
      color: "neutral.800"
    
    description:
      typography: "body"
      color: "neutral.600"
```

### 4. Contact Section

```yaml
contact:
  container:
    padding: "clamp(4rem, 10vw, 8rem) clamp(1rem, 5vw, 3rem)"
    background: "white"
  
  layout:
    mobile: "single_column"
    desktop: "two_column"
    grid_gap: "clamp(2rem, 6vw, 4rem)"
    max_width: "1200px"
    margin: "0 auto"
  
  form:
    background: "neutral.50"
    border_radius: "xl"
    padding: "clamp(2rem, 5vw, 3rem)"
    
    fields:
      gap: "1.5rem"
      
    submit_button:
      width: "100%"
      variant: "primary"
      size: "large"
  
  info:
    display: "flex"
    flex_direction: "column"
    gap: "2rem"
    
    item:
      display: "flex"
      align_items: "center"
      gap: "1rem"
      padding: "1rem"
      border_radius: "lg"
      background: "neutral.50"
      
      icon:
        size: "1.5rem"
        color: "primary.500"
```

## 微交互设计

### 1. 悬停效果

```yaml
hover_effects:
  buttons:
    transform: "translateY(-2px)"
    shadow: "增强阴影"
    duration: "transitions.fast"
  
  cards:
    transform: "translateY(-4px)"
    shadow: "large"
    border_color: "primary.300"
    duration: "transitions.base"
  
  links:
    color: "primary.400"
    text_decoration: "underline"
    duration: "transitions.fast"
```

### 2. 加载状态

```yaml
loading_states:
  skeleton:
    background: "linear-gradient(90deg, neutral.200 25%, neutral.100 50%, neutral.200 75%)"
    animation: "shimmer 1.5s infinite linear"
  
  spinner:
    size: "24px"
    color: "primary.500"
    animation: "spin 1s infinite linear"
  
  button_loading:
    opacity: 0.7
    cursor: "wait"
    content: "加载中..."
```

### 3. 页面转换

```yaml
page_transitions:
  fade_in:
    opacity: "0 to 1"
    duration: "300ms"
    easing: "ease-out"
  
  slide_up:
    transform: "translateY(20px) to translateY(0)"
    opacity: "0 to 1"
    duration: "400ms"
    easing: "ease-out"
```

## 可访问性规范

### 1. 颜色对比
```yaml
color_contrast:
  text_on_white:
    minimum_ratio: "4.5:1"
    preferred_ratio: "7:1"
  
  text_on_primary:
    minimum_ratio: "4.5:1"
    color: "white"
  
  interactive_elements:
    minimum_ratio: "3:1"
    focus_indicator: "2px solid primary.500"
```

### 2. 焦点管理
```yaml
focus_management:
  visible_focus: true
  focus_outline: "2px solid primary.500"
  focus_offset: "2px"
  tab_order: "logical"
  skip_links: true
```

### 3. 语义HTML
```yaml
semantic_html:
  landmarks: "header, main, section, aside, footer"
  headings: "h1 -> h2 -> h3 逻辑层级"
  alt_text: "所有图片必须有描述性alt文本"
  form_labels: "所有表单元素必须有关联标签"
```

## 性能优化指南

### 1. 图片优化
```yaml
images:
  formats: "WebP, AVIF 优先，JPEG/PNG 降级"
  loading: "lazy loading 除首屏图片"
  sizes: "响应式图片，多尺寸适配"
  optimization: "压缩率 80-85%"
```

### 2. 字体优化
```yaml
fonts:
  loading: "font-display: swap"
  preload: "关键字体文件预加载"
  subset: "仅加载使用的字符子集"
  fallback: "系统字体作为降级"
```

### 3. CSS优化
```yaml
css:
  critical: "关键路径CSS内联"
  non_critical: "延迟加载非关键CSS"
  minification: "生产环境压缩"
  purge: "移除未使用的样式"
```

## 实施清单

### 阶段1：基础设置
- [ ] 建立色彩系统变量
- [ ] 配置排版规范
- [ ] 设置响应式断点
- [ ] 创建基础组件

### 阶段2：页面布局
- [ ] 实施Hero Section
- [ ] 构建About Section
- [ ] 开发Skills Section
- [ ] 创建Contact Section

### 阶段3：交互增强
- [ ] 添加微交互效果
- [ ] 实施加载状态
- [ ] 配置页面转换

### 阶段4：优化完善
- [ ] 可访问性测试
- [ ] 性能优化
- [ ] 跨浏览器测试
- [ ] 响应式验证

## 工具和资源

### 设计工具
- **Figma** - 设计原型和规范
- **ColorBox** - 色彩系统生成
- **Type Scale** - 排版规范

### 开发工具
- **Tailwind CSS** - 实用优先的CSS框架
- **PostCSS** - CSS处理工具
- **PurgeCSS** - 未使用样式清理

### 测试工具
- **WebAIM** - 可访问性检查
- **Lighthouse** - 性能审计
- **BrowserStack** - 跨浏览器测试

---

*最后更新：2025年1月*