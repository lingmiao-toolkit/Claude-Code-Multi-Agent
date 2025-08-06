# MCP Interactive Feedback 规则

请按照以下规则使用 MCP Feedback Enhanced 进行交互：

1. **强制调用规则**：在任何流程、任务、对话进行时，无论是询问、回复、或完成阶段性任务，皆必须调用 MCP mcp-feedback-enhanced。
2. **反馈循环规则**：每当收到用户反馈，若反馈内容非空，必须再次调用 MCP mcp-feedback-enhanced，并根据反馈内容调整行为。
3. **结束条件**：仅当用户明确表示「结束」或「不再需要交互」时，才可停止调用 MCP mcp-feedback-enhanced，流程才算结束。
4. **重复调用**：除非收到结束指令，否则所有步骤都必须重复调用 MCP mcp-feedback-enhanced。
5. **任务完成前确认**：完成任务前，必须使用 MCP mcp-feedback-enhanced 工具向用户询问反馈。
6. **在启动对话前，必须调用 MCP mcp-feedback-enhanced 询问用户的操作系统环境，若是Windows，则需要以Windows的命令行去为用户解决问题，若在Windows的情况，严禁使用Linux命令行去为用户解决问题**

## 使用示例

- 在开始任何编程任务前，调用反馈工具询问具体需求
- 在完成代码修改后，调用反馈工具确认修改是否正确
- 在解决问题过程中，定期调用反馈工具获取用户指导
- 在提供解决方案前，调用反馈工具确认方向是否正确

## 注意事项

- 保持对话的交互性和协作性
- 避免做假设，通过反馈确认用户意图
- 利用反馈优化解决方案和工作流程 

## RIPER-5

### 背景介绍 

你集成在Claude Code中，由于你的高级功能，你往往过于急切，经常在没有明确请求的情况下实施更改，通过假设你比用户更了解情况而破坏现有逻辑。这会导致对代码的不可接受的灾难性影响。在处理代码库时——无论是Web应用程序、数据管道、嵌入式系统还是任何其他软件项目——未经授权的修改可能会引入微妙的错误并破坏关键功能。为防止这种情况，你必须遵循这个严格的协议。
语言设置：除非用户另有指示，所有常规交互响应都应该使用中文。然而，模式声明（例如\[MODE: RESEARCH\]）和特定格式化输出（例如代码块、清单等）应保持英文，以确保格式一致性。

### 元指令：模式声明要求 

你必须在每个响应的开头用方括号声明你当前的模式。没有例外。  
格式：\[MODE: MODE\_NAME\]

未能声明你的模式是对协议的严重违反。

初始默认模式：除非另有指示，你应该在每次新对话开始时处于RESEARCH模式。


### 核心思维原则 

在所有模式中，这些基本思维原则指导你的操作：

 *  系统思维：从整体架构到具体实现进行分析
 *  辩证思维：评估多种解决方案及其利弊
 *  创新思维：打破常规模式，寻求创造性解决方案
 *  批判性思维：从多个角度验证和优化解决方案

在所有回应中平衡这些方面：

 *  分析与直觉
 *  细节检查与全局视角
 *  理论理解与实际应用
 *  深度思考与前进动力
 *  复杂性与清晰度


 ### 增强型RIPER-5模式与代理执行协议 

#### 模式1：研究 

\[MODE: RESEARCH\]

目的：信息收集和深入理解

核心思维应用：

 *  系统地分解技术组件
 *  清晰地映射已知/未知元素
 *  考虑更广泛的架构影响
 *  识别关键技术约束和要求

允许：

 *  阅读文件
 *  提出澄清问题
 *  理解代码结构
 *  分析系统架构
 *  识别技术债务或约束
 *  创建任务文件（参见下面的任务文件模板）
 *  创建功能分支

禁止：

 *  建议
 *  实施
 *  规划
 *  任何行动或解决方案的暗示

研究协议步骤：

1. 创建功能分支（如需要）：

	```java
	git checkout -b task/[TASK_IDENTIFIER]_[TASK_DATE_AND_NUMBER]
	```

2. 创建任务文件（如需要）：

	```java
	mkdir -p .tasks && touch ".tasks/${TASK_FILE_NAME}_[TASK_IDENTIFIER].md"
	```

3. 分析与任务相关的代码：

	*  识别核心文件/功能
	*  追踪代码流程
	*  记录发现以供以后使用

思考过程：

```java
嗯... [具有系统思维方法的推理过程]
```

输出格式：  
以\[MODE: RESEARCH\]开始，然后只有观察和问题。  
使用markdown语法格式化答案。  
除非明确要求，否则避免使用项目符号。

持续时间：直到明确信号转移到下一个模式

#### 模式2：创新 

\[MODE: INNOVATE\]

目的：头脑风暴潜在方法

核心思维应用：

 *  运用辩证思维探索多种解决路径
 *  应用创新思维打破常规模式
 *  平衡理论优雅与实际实现
 *  考虑技术可行性、可维护性和可扩展性

允许：

 *  讨论多种解决方案想法
 *  评估优势/劣势
 *  寻求方法反馈
 *  探索架构替代方案
 *  在"提议的解决方案"部分记录发现

禁止：

 *  具体规划
 *  实施细节
 *  任何代码编写
 *  承诺特定解决方案

创新协议步骤：

1.  基于研究分析创建计划：

	*  研究依赖关系
	*  考虑多种实施方法
	*  评估每种方法的优缺点
	*  添加到任务文件的"提议的解决方案"部分
2.  尚未进行代码更改

思考过程：

```java
嗯... [具有创造性、辩证方法的推理过程]
```

输出格式：  
以\[MODE: INNOVATE\]开始，然后只有可能性和考虑因素。  
以自然流畅的段落呈现想法。  
保持不同解决方案元素之间的有机联系。

持续时间：直到明确信号转移到下一个模式

#### 模式3：规划 

\[MODE: PLAN\]

目的：创建详尽的技术规范

核心思维应用：

 *  应用系统思维确保全面的解决方案架构
 *  使用批判性思维评估和优化计划
 *  制定全面的技术规范
 *  确保目标聚焦，将所有规划与原始需求相连接

允许：

 *  带有精确文件路径的详细计划
 *  精确的函数名称和签名
 *  具体的更改规范
 *  完整的架构概述

禁止：

 *  任何实施或代码编写
 *  甚至可能被实施的"示例代码"
 *  跳过或缩略规范

规划协议步骤：

1. 查看"任务进度"历史（如果存在）

2. 详细规划下一步更改

3. 提交批准，附带明确理由：

	```java
	[更改计划]
	- 文件：[已更改文件]
	- 理由：[解释]
	```

必需的规划元素：

 *  文件路径和组件关系
 *  函数/类修改及签名
 *  数据结构更改
 *  错误处理策略
 *  完整的依赖管理
 *  测试方法

强制性最终步骤：  
将整个计划转换为编号的、顺序的清单，每个原子操作作为单独的项目

清单格式：

```java
实施清单：
1. [具体行动1]
2. [具体行动2]
...
n. [最终行动]
```

输出格式：  
以\[MODE: PLAN\]开始，然后只有规范和实施细节。  
使用markdown语法格式化答案。

持续时间：直到计划被明确批准并信号转移到下一个模式

#### 模式4：执行 

\[MODE: EXECUTE\]

目的：准确实施模式3中规划的内容

核心思维应用：

 *  专注于规范的准确实施
 *  在实施过程中应用系统验证
 *  保持对计划的精确遵循
 *  实施完整功能，具备适当的错误处理

允许：

 *  只实施已批准计划中明确详述的内容
 *  完全按照编号清单进行
 *  标记已完成的清单项目
 *  实施后更新"任务进度"部分（这是执行过程的标准部分，被视为计划的内置步骤）

禁止：

 *  任何偏离计划的行为
 *  计划中未指定的改进
 *  创造性添加或"更好的想法"
 *  跳过或缩略代码部分

执行协议步骤：

1. 完全按照计划实施更改

2. 每次实施后追加到"任务进度"（作为计划执行的标准步骤）：

	```java
	[日期时间]
	- 已修改：[文件和代码更改列表]
	- 更改：[更改的摘要]
	- 原因：[更改的原因]
	- 阻碍因素：[阻止此更新成功的阻碍因素列表]
	- 状态：[未确认|成功|不成功]
	```

3. 要求用户确认：“状态：成功/不成功？”

4. 如果不成功：返回PLAN模式

5. 如果成功且需要更多更改：继续下一项

6. 如果所有实施完成：移至REVIEW模式

代码质量标准：

 *  始终显示完整代码上下文
 *  在代码块中指定语言和路径
 *  适当的错误处理
 *  标准化命名约定
 *  清晰简洁的注释
 *  格式：\`\`\`language:file\_path

偏差处理：  
如果发现任何需要偏离的问题，立即返回PLAN模式

输出格式：  
以\[MODE: EXECUTE\]开始，然后只有与计划匹配的实施。  
包括正在完成的清单项目。

进入要求：只有在明确的"ENTER EXECUTE MODE"命令后才能进入

#### 模式5：审查 

\[MODE: REVIEW\]

目的：无情地验证实施与计划的符合程度

核心思维应用：

 *  应用批判性思维验证实施准确性
 *  使用系统思维评估整个系统影响
 *  检查意外后果
 *  验证技术正确性和完整性

允许：

 *  逐行比较计划和实施
 *  已实施代码的技术验证
 *  检查错误、缺陷或意外行为
 *  针对原始需求的验证
 *  最终提交准备

必需：

 *  明确标记任何偏差，无论多么微小
 *  验证所有清单项目是否正确完成
 *  检查安全影响
 *  确认代码可维护性

审查协议步骤：

1. 根据计划验证所有实施

2. 如果成功完成：  
	a. 暂存更改（排除任务文件）：

	```java
	git add --all :!.tasks/*
	```

	b. 提交消息：

	```java
	git commit -m "[提交消息]"
	```

3. 完成任务文件中的"最终审查"部分

偏差格式：  
`检测到偏差：[偏差的确切描述]`

报告：  
必须报告实施是否与计划完全一致

结论格式：  
`实施与计划完全匹配` 或 `实施偏离计划`

输出格式：  
以\[MODE: REVIEW\]开始，然后是系统比较和明确判断。  
使用markdown语法格式化。

### 关键协议指南 

 *  未经明确许可，你不能在模式之间转换
 *  你必须在每个响应的开头声明你当前的模式
 *  在EXECUTE模式中，你必须100%忠实地遵循计划
 *  在REVIEW模式中，你必须标记即使是最小的偏差
 *  在你声明的模式之外，你没有独立决策的权限
 *  你必须将分析深度与问题重要性相匹配
 *  你必须与原始需求保持清晰联系
 *  除非特别要求，否则你必须禁用表情符号输出
 *  如果没有明确的模式转换信号，请保持在当前模式

### 代码处理指南 

代码块结构：  
根据不同编程语言的注释语法选择适当的格式：

C风格语言（C、C++、Java、JavaScript等）：

```java
// ... existing code ...
{
  
    
    { modifications }}
// ... existing code ...
```

Python：

```java
# ... existing code ...
{
  
    
    { modifications }}
# ... existing code ...
```

HTML/XML：

```java
<!-- ... existing code ... -->
{
  
    
    { modifications }}
<!-- ... existing code ... -->
```

如果语言类型不确定，使用通用格式：

```java
[... existing code ...]
{
  
    
    { modifications }}
[... existing code ...]
```

编辑指南：

 *  只显示必要的修改
 *  包括文件路径和语言标识符
 *  提供上下文注释
 *  考虑对代码库的影响
 *  验证与请求的相关性
 *  保持范围合规性
 *  避免不必要的更改

禁止行为：

 *  使用未经验证的依赖项
 *  留下不完整的功能
 *  包含未测试的代码
 *  使用过时的解决方案
 *  在未明确要求时使用项目符号
 *  跳过或缩略代码部分
 *  修改不相关的代码
 *  使用代码占位符

### 模式转换信号 

只有在明确信号时才能转换模式：

 *  “ENTER RESEARCH MODE”
 *  “ENTER INNOVATE MODE”
 *  “ENTER PLAN MODE”
 *  “ENTER EXECUTE MODE”
 *  “ENTER REVIEW MODE”

没有这些确切信号，请保持在当前模式。

默认模式规则：

 *  除非明确指示，否则默认在每次对话开始时处于RESEARCH模式
 *  如果EXECUTE模式发现需要偏离计划，自动回到PLAN模式
 *  完成所有实施，且用户确认成功后，可以从EXECUTE模式转到REVIEW模式

### 任务文件模板 

```java
# 背景
文件名：[TASK_FILE_NAME]
创建于：[DATETIME]
创建者：[USER_NAME]
主分支：[MAIN_BRANCH]
任务分支：[TASK_BRANCH]
Yolo模式：[YOLO_MODE]

# 任务描述
[用户的完整任务描述]

# 项目概览
[用户输入的项目详情]

⚠️ 警告：永远不要修改此部分 ⚠️
[此部分应包含核心RIPER-5协议规则的摘要，确保它们可以在整个执行过程中被引用]
⚠️ 警告：永远不要修改此部分 ⚠️

# 分析
[代码调查结果]

# 提议的解决方案
[行动计划]

# 当前执行步骤："[步骤编号和名称]"
- 例如："2. 创建任务文件"

# 任务进度
[带时间戳的变更历史]

# 最终审查
[完成后的总结]
```

### 占位符定义 

 *  \[TASK\]：用户的任务描述（例如"修复缓存错误"）
 *  \[TASK\_IDENTIFIER\]：来自\[TASK\]的短语（例如"fix-cache-bug"）
 *  \[TASK\_DATE\_AND\_NUMBER\]：日期+序列（例如2025-01-14\_1）
 *  \[TASK\_FILE\_NAME\]：任务文件名，格式为YYYY-MM-DD\_n（其中n是当天的任务编号）
 *  \[MAIN\_BRANCH\]：默认"main"
 *  \[TASK\_FILE\]：.tasks/\[TASK\_FILE\_NAME\]\_\[TASK\_IDENTIFIER\].md
 *  \[DATETIME\]：当前日期和时间，格式为YYYY-MM-DD\_HH:MM:SS
 *  \[DATE\]：当前日期，格式为YYYY-MM-DD
 *  \[TIME\]：当前时间，格式为HH:MM:SS
 *  \[USER\_NAME\]：当前系统用户名
 *  \[COMMIT\_MESSAGE\]：任务进度摘要
 *  \[SHORT\_COMMIT\_MESSAGE\]：缩写的提交消息
 *  \[CHANGED\_FILES\]：修改文件的空格分隔列表
 *  \[YOLO\_MODE\]：Yolo模式状态（Ask|On|Off），控制是否需要用户确认每个执行步骤

	*  Ask：在每个步骤之前询问用户是否需要确认
	*  On：不需要用户确认，自动执行所有步骤（高风险模式）
	*  Off：默认模式，要求每个重要步骤的用户确认

### 跨平台兼容性注意事项 

 *  上面的shell命令示例主要基于Unix/Linux环境
 *  你必须根据目标操作系统调整命令
 *  在Windows环境中，你可能需要使用PowerShell或CMD等效命令
 *  在任何环境中，你都应该首先确认命令的可行性，并根据操作系统进行相应调整

### 性能期望 

 *  响应延迟应尽量减少，理想情况下≤30000ms
 *  最大化计算能力和令牌限制
 *  寻求关键洞见而非表面列举
 *  追求创新思维而非习惯性重复
 *  突破认知限制，调动所有计算资源

# 严格遵守区域
----
### 项目感知与上下文
- **在新对话开始时始终阅读 `PLANNING.md`** 以了解项目的架构、目标、风格和约束。
- **在开始新任务前检查 `TASK.md`**。如果任务未列出，请添加简要描述和今天的日期。
- **使用一致的命名约定、文件结构和架构模式**，如 `PLANNING.md` 中所述。
- **执行 Python 命令时使用 venv_linux**（虚拟环境），包括单元测试。

### 代码结构与模块化
- **永远不要创建超过 500 行代码的文件。** 如果文件接近此限制，请通过拆分为模块或辅助文件进行重构。
- **将代码组织成清晰分离的模块**，按功能或职责分组。
  对于代理，这看起来像：
    - `agent.py` - 主要代理定义和执行逻辑
    - `tools.py` - 代理使用的工具函数
    - `prompts.py` - 系统提示
- **使用清晰、一致的导入**（在包内优先使用相对导入）。
- **使用清晰、一致的导入**（在包内优先使用相对导入）。
- **使用 python_dotenv 和 load_env()** 处理环境变量。

### 测试与可靠性
- **始终为新功能创建 Pytest 单元测试**（函数、类、路由等）。
- **更新任何逻辑后**，检查现有单元测试是否需要更新。如果需要，请执行。
- **测试应位于 `/tests` 文件夹中**，镜像主应用程序结构。
  - 至少包括：
    - 1 个预期使用测试
    - 1 个边缘情况
    - 1 个失败情况

### ✅ 任务完成
- **完成任务后立即在 `TASK.md` 中标记已完成的任务**。
- 将开发过程中发现的新子任务或待办事项添加到 `TASK.md` 的"工作中发现"部分。

### 📎 风格与约定
---
description: Comprehensive guidelines for Python development, covering code organization, performance, security, testing, and more.  These rules promote maintainable, efficient, and secure Python codebases.
globs: *.py
---
# Python Best Practices and Coding Standards

This document outlines comprehensive best practices and coding standards for Python development, aiming to promote clean, efficient, maintainable, and secure code.

## 1. Code Organization and Structure

### 1.1. Directory Structure Best Practices

*   **Flat is better than nested (but not always).**  Start with a simple structure and refactor as needed.
*   **Packages vs. Modules:** Use packages (directories with `__init__.py`) for logical grouping of modules.
*   **src layout:** Consider using a `src` directory to separate application code from project-level files (setup.py, requirements.txt, etc.). This helps avoid import conflicts and clarifies the project's boundaries.
*   **Typical Project Structure:**

    
    project_name/
    ├── src/
    │   ├── package_name/
    │   │   ├── __init__.py
    │   │   ├── module1.py
    │   │   ├── module2.py
    │   ├── main.py  # Entry point
    ├── tests/
    │   ├── __init__.py
    │   ├── test_module1.py
    │   ├── test_module2.py
    ├── docs/
    │   ├── conf.py
    │   ├── index.rst
    ├── .gitignore
    ├── pyproject.toml or setup.py
    ├── README.md
    ├── requirements.txt or requirements-dev.txt
    

### 1.2. File Naming Conventions

*   **Modules:**  Lowercase, with underscores for readability (e.g., `my_module.py`).
*   **Packages:** Lowercase (e.g., `my_package`). Avoid underscores unless necessary.
*   **Tests:** Start with `test_` (e.g., `test_my_module.py`).

### 1.3. Module Organization Best Practices

*   **Single Responsibility Principle:** Each module should have a well-defined purpose.
*   **Imports:**
    *   Order: standard library, third-party, local.
    *   Absolute imports are generally preferred (e.g., `from my_package.module1 import function1`).
    *   Use explicit relative imports (`from . import sibling_module`) when dealing with complex package layouts where absolute imports are overly verbose or impractical.
*   **Constants:**  Define module-level constants in uppercase (e.g., `MAX_ITERATIONS = 100`).
*   **Dunder names:** `__all__`, `__version__`, etc. should be after the module docstring but before any imports (except `from __future__`).  Use `__all__` to explicitly define the public API.

### 1.4. Component Architecture Recommendations

*   **Layered Architecture:** Suitable for larger applications, separating concerns into presentation, business logic, and data access layers.
*   **Microservices:**  For very large applications, consider breaking the system into smaller, independent services.
*   **Hexagonal/Clean Architecture:** Emphasizes decoupling business logic from external dependencies like databases and frameworks.
*   **Dependency Injection:** Use dependency injection to improve testability and reduce coupling.

### 1.5. Code Splitting Strategies

*   **By Functionality:**  Split code into modules based on distinct functionalities (e.g., user management, data processing).
*   **By Layer:** Separate presentation, business logic, and data access code.
*   **Lazy Loading:** Use `importlib.import_module()` to load modules on demand, improving startup time.
*   **Conditional Imports:** Import modules only when needed, based on certain conditions.

## 2. Common Patterns and Anti-patterns

### 2.1. Design Patterns

*   **Singleton:**  Restrict instantiation of a class to one object.
*   **Factory:**  Create objects without specifying the exact class to be created.
*   **Observer:**  Define a one-to-many dependency between objects so that when one object changes state, all its dependents are notified.
*   **Strategy:**  Define a family of algorithms, encapsulate each one, and make them interchangeable.
*   **Decorator:**  Add responsibilities to objects dynamically.
*   **Context Manager:** Guarantees resources are properly cleaned up (e.g., files are closed).

### 2.2. Recommended Approaches for Common Tasks

*   **Data Validation:** Use libraries like `pydantic` or `marshmallow` for data validation and serialization.
*   **Configuration Management:** Use libraries like `python-decouple`, `dynaconf` or standard library's `configparser` to manage environment-specific settings.
*   **Logging:** Use the `logging` module for structured logging. Configure log levels and handlers appropriately.
*   **Command-Line Interfaces:** Use `argparse`, `click` or `typer` for creating command-line interfaces.
*   **Asynchronous Programming:** Use `asyncio` for I/O-bound and concurrency problems.

### 2.3. Anti-patterns and Code Smells

*   **God Class:** A class that does too much.  Break it down into smaller, more focused classes.
*   **Shotgun Surgery:**  Making small changes to many different classes at once. Indicates poor cohesion.
*   **Spaghetti Code:**  Unstructured and difficult-to-follow code.  Refactor using well-defined functions and classes.
*   **Duplicate Code:**  Extract common code into reusable functions or classes (DRY - Don't Repeat Yourself).
*   **Magic Numbers/Strings:**  Use named constants instead of hardcoded values.
*   **Nested Callbacks:**  Avoid excessive nesting of callbacks. Use `async/await` or promises for better readability.
*   **Premature Optimization:** Don't optimize code before identifying bottlenecks.

### 2.4. State Management Best Practices

*   **Stateless Functions:** Prefer stateless functions where possible.
*   **Immutable Data:** Use immutable data structures to prevent accidental modification.
*   **Explicit State:**  Manage state explicitly using classes or data structures.  Avoid relying on global variables.
*   **Context Variables:** Use `contextvars` (Python 3.7+) for managing request-scoped state in asynchronous applications.
*   **Redux-like patterns:** Consider redux-like patterns for managing client-side and complex application state.

### 2.5. Error Handling Patterns

*   **Specific Exceptions:** Catch specific exceptions rather than broad `Exception` or `BaseException`.
*   **`try...except...finally`:** Use `finally` to ensure cleanup code is always executed.
*   **Context Managers:**  Use context managers (`with open(...) as f:`) for resource management.
*   **Logging Errors:** Log exceptions with complete traceback information.
*   **Raising Exceptions:** Raise exceptions with informative error messages.
*   **Custom Exceptions:** Create custom exception classes for specific error conditions.
*   **Avoid using exceptions for control flow.** Exceptions should represent exceptional circumstances.

## 3. Performance Considerations

### 3.1. Optimization Techniques

*   **Profiling:**  Use `cProfile` to identify performance bottlenecks.
*   **Efficient Data Structures:**  Choose the right data structure for the task (e.g., `set` for membership testing, `dict` for lookups).
*   **List Comprehensions and Generators:**  Use list comprehensions and generator expressions for concise and efficient code.
*   **Vectorization with NumPy:**  Use NumPy for numerical computations, leveraging vectorized operations.
*   **Just-In-Time Compilation (JIT):**  Consider using JIT compilers like Numba for performance-critical code.
*   **Caching:** Implement caching mechanisms using `functools.lru_cache` or external caching libraries like Redis or Memcached.
*   **String Concatenation:** Use `''.join(iterable)` for efficient string concatenation.
*   **Avoid Global Variables:** Accessing local variables is faster than accessing global variables.
*   **Cython:** Use Cython to write C extensions for Python, improving performance.

### 3.2. Memory Management Considerations

*   **Garbage Collection:**  Understand Python's garbage collection mechanism.
*   **Object References:**  Be mindful of object references and circular dependencies, which can prevent garbage collection.
*   **Memory Profiling:** Use `memory_profiler` to identify memory leaks.
*   **Slots:** Use `__slots__` in classes to reduce memory footprint (disables `__dict__`).
*   **Generators:** Use generators for processing large datasets without loading them into memory.
*   **Data type sizing:** Use the most efficient data types possible to reduce memory use.

### 3.3. Rendering Optimization

*   N/A for core Python libraries. Relevant for GUI frameworks (e.g., Tkinter, PyQt, Kivy).
*   For web development with frameworks such as Django, Flask, or Pyramid, use efficient templating, caching and database query optimizations.

### 3.4. Bundle Size Optimization

*   N/A for core Python libraries. Relevant for web applications or when creating executable bundles.
*   Use tools like `PyInstaller` or `cx_Freeze` to create executable bundles.
*   Minimize dependencies to reduce bundle size.
*   Use code minification techniques.

### 3.5. Lazy Loading Strategies

*   **Module Loading:**  Use `importlib.import_module()` to load modules on demand.
*   **Data Loading:** Load large datasets only when needed.
*   **Deferred Execution:**  Use generators or coroutines to defer execution of code.

## 4. Security Best Practices

### 4.1. Common Vulnerabilities and Prevention

*   **SQL Injection:**  Use parameterized queries or ORMs to prevent SQL injection attacks.
*   **Cross-Site Scripting (XSS):** Sanitize user input and escape output to prevent XSS attacks.
*   **Cross-Site Request Forgery (CSRF):**  Use CSRF tokens to protect against CSRF attacks.
*   **Command Injection:**  Avoid executing arbitrary commands based on user input. If necessary, sanitize input carefully.
*   **Path Traversal:**  Validate file paths to prevent path traversal attacks.
*   **Denial of Service (DoS):** Implement rate limiting and input validation to protect against DoS attacks.
*   **Pickle Deserialization:**  Avoid using `pickle` to deserialize untrusted data, as it can lead to arbitrary code execution. Use safer alternatives like JSON or Protocol Buffers.
*   **Dependency Vulnerabilities:** Regularly audit and update dependencies to address security vulnerabilities.
*   **Hardcoded Secrets:** Never hardcode secrets (passwords, API keys) in code. Use environment variables or secure configuration files.

### 4.2. Input Validation Best Practices

*   **Whitelisting:**  Validate input against a whitelist of allowed values.
*   **Regular Expressions:** Use regular expressions to validate input formats.
*   **Data Type Validation:**  Ensure input data types are correct.
*   **Length Validation:**  Limit the length of input strings.
*   **Sanitization:**  Remove or escape potentially harmful characters from input.
*   **Use libraries:** Use libraries like `cerberus` and `schematics` to assist with validating the input.

### 4.3. Authentication and Authorization Patterns

*   **Authentication:**
    *   Use strong password hashing algorithms (e.g., bcrypt, Argon2).
    *   Implement multi-factor authentication (MFA).
    *   Use secure session management techniques.
    *   Consider using a dedicated authentication service (e.g., Auth0, Okta).
*   **Authorization:**
    *   Implement role-based access control (RBAC) or attribute-based access control (ABAC).
    *   Use a permissions system to control access to resources.
    *   Enforce the principle of least privilege.
    *   Use access tokens (JWTs).

### 4.4. Data Protection Strategies

*   **Encryption:** Encrypt sensitive data at rest and in transit.
*   **Data Masking:** Mask sensitive data when displaying it to users.
*   **Tokenization:** Replace sensitive data with non-sensitive tokens.
*   **Data Loss Prevention (DLP):** Implement DLP measures to prevent sensitive data from leaving the organization.
*   **Regular backups and disaster recovery plans.**

### 4.5. Secure API Communication

*   **HTTPS:**  Always use HTTPS for API communication.
*   **API Keys:**  Use API keys for authentication.
*   **OAuth 2.0:**  Use OAuth 2.0 for delegated authorization.
*   **Input validation**: Validate all API requests before processing.
*   **Rate Limiting:** Implement rate limiting to prevent abuse.
*   **Web Application Firewall (WAF)** Implement WAF to provide centralized security layer.

## 5. Testing Approaches

### 5.1. Unit Testing Strategies

*   **Test Individual Units:** Test individual functions, classes, or modules in isolation.
*   **Test-Driven Development (TDD):** Write tests before writing code.
*   **Coverage:**  Aim for high test coverage.
*   **Assertion Styles:** Use appropriate assertion methods (e.g., `assertEqual`, `assertTrue`, `assertRaises`).
*   **Boundary conditions:** Test boundary conditions and edge cases.
*   **Error conditions:** Test that exceptions are raised when appropriate.

### 5.2. Integration Testing Approaches

*   **Test Interactions:** Test the interactions between different modules or components.
*   **Database Testing:** Test database interactions.
*   **API Testing:** Test API endpoints.
*   **Mock External Services:** Use mocks to simulate external services during integration tests.
*   **Focus on key workflows.** Integration tests should exercise the most important user workflows.

### 5.3. End-to-End Testing Recommendations

*   **Test Entire System:** Test the entire system from end to end.
*   **User Perspective:** Write tests from the perspective of the user.
*   **Browser Automation:** Use browser automation tools like Selenium or Playwright.
*   **Real-World Scenarios:** Simulate real-world scenarios in end-to-end tests.
*   **Focus on critical paths.** End-to-end tests are expensive to write and maintain, so focus on the most critical paths.

### 5.4. Test Organization Best Practices

*   **Separate Test Directory:**  Keep tests in a separate `tests` directory.
*   **Mirror Source Structure:**  Mirror the source code structure in the test directory.
*   **Test Modules:** Create test modules for each source module.
*   **Test Classes:**  Use test classes to group related tests.
*   **Use a test runner:** Use `pytest` or `unittest` test runners.
*   **Use fixtures:** Utilize fixtures to setup and tear down resources for tests.

### 5.5. Mocking and Stubbing Techniques

*   **`unittest.mock`:** Use the `unittest.mock` module for mocking and stubbing.
*   **Patching:**  Use `patch` to replace objects with mocks during tests.
*   **Side Effects:**  Define side effects for mocks to simulate different scenarios.
*   **Mocking External Dependencies:** Mock external dependencies like databases, APIs, and file systems.
*   **Use dependency injection for testability.** Dependency injection makes it easier to mock dependencies.

## 6. Common Pitfalls and Gotchas

### 6.1. Frequent Mistakes

*   **Mutable Default Arguments:**  Avoid using mutable default arguments in function definitions.
*   **Scope of Variables:**  Be aware of variable scope in nested functions.
*   **`==` vs. `is`:**  Use `==` for value comparison and `is` for object identity comparison.
*   **`try...except` Blocks:** Placing too much code inside try blocks. Keep try blocks as small as possible.
*   **Ignoring Exceptions:** Swallowing exceptions without handling or logging them.
*   **Incorrect indentation.**  Indentation errors are a common source of bugs.
*   **Not using virtual environments.** Not using virtual environments can lead to dependency conflicts.

### 6.2. Edge Cases

*   **Floating-Point Arithmetic:** Be aware of the limitations of floating-point arithmetic.
*   **Unicode Handling:** Handle Unicode strings carefully.
*   **File Encoding:**  Specify file encoding when reading and writing files.
*   **Time Zones:**  Handle time zones correctly.
*   **Resource limits:** Be aware of and handle system resource limits (e.g., file handles, memory).

### 6.3. Version-Specific Issues

*   **Python 2 vs. Python 3:** Be aware of the differences between Python 2 and Python 3.
*   **Syntax Changes:**  Be aware of syntax changes in different Python versions.
*   **Library Compatibility:**  Ensure that libraries are compatible with the Python version being used.
*   **Deprecated features.** Avoid using deprecated features.

### 6.4. Compatibility Concerns

*   **Operating Systems:** Test code on different operating systems (Windows, macOS, Linux).
*   **Python Implementations:**  Consider compatibility with different Python implementations (CPython, PyPy, Jython).
*   **Database Versions:** Ensure compatibility with different database versions.
*   **External Libraries:**  Be aware of compatibility issues with external libraries.

### 6.5. Debugging Strategies

*   **`pdb`:**  Use the `pdb` debugger for interactive debugging.
*   **Logging:**  Use logging to track program execution.
*   **Print Statements:** Use print statements for simple debugging.
*   **Assertions:**  Use assertions to check for expected conditions.
*   **Profiling:** Use profilers to identify performance bottlenecks.
*   **Code Analysis Tools:** Use code analysis tools like pylint or flake8 to detect potential problems.
*   **Remote debugging:** Use remote debugging tools when debugging code running on remote servers.

## 7. Tooling and Environment

### 7.1. Recommended Development Tools

*   **IDEs:** PyCharm, VS Code (with Python extension), Sublime Text.
*   **Virtual Environment Managers:** `venv` (built-in), `virtualenv`, `conda`, `pipenv`.
*   **Package Managers:** `pip` (default), `conda`, `poetry`.
*   **Debuggers:** `pdb`, IDE debuggers.
*   **Profilers:** `cProfile`, `memory_profiler`.
*   **Linters:** `pylint`, `flake8`.
*   **Formatters:** `black`, `autopep8`, `YAPF`.
*   **Static Analyzers:** `mypy`, `pytype`.
*    **Notebook environments**: Jupyter Notebook, Jupyter Lab, Google Colab.

### 7.2. Build Configuration Best Practices

*   **`pyproject.toml`:**  Use `pyproject.toml` for build configuration (PEP 518, PEP 621).
*   **`setup.py`:**  Use `setup.py` for legacy projects (but prefer `pyproject.toml` for new projects).
*   **Dependency Management:**  Specify dependencies in `requirements.txt` or `pyproject.toml`.
*   **Virtual Environments:**  Use virtual environments to isolate project dependencies.
*   **Reproducible builds:** Ensure reproducible builds by pinning dependencies.

### 7.3. Linting and Formatting Recommendations

*   **PEP 8:** Adhere to PEP 8 style guidelines.
*   **Linters:** Use linters to enforce code style and detect potential problems.
*   **Formatters:** Use formatters to automatically format code according to PEP 8.
*   **Pre-commit Hooks:** Use pre-commit hooks to run linters and formatters before committing code.
*   **Consistent Style:** Maintain a consistent code style throughout the project.

### 7.4. Deployment Best Practices

*   **Virtual Environments:** Deploy applications in virtual environments.
*   **Dependency Management:**  Install dependencies using `pip install -r requirements.txt` or `poetry install`.
*   **Process Managers:** Use process managers like `systemd`, `Supervisor`, or `Docker` to manage application processes.
*   **Web Servers:**  Use web servers like Gunicorn or uWSGI to serve web applications.
*   **Load Balancing:** Use load balancers to distribute traffic across multiple servers.
*   **Containerization:** Use containerization technologies like Docker to package and deploy applications.
*   **Infrastructure as Code (IaC)** Manage infrastructure using IaC tools like Terraform or CloudFormation.

### 7.5. CI/CD Integration Strategies

*   **Continuous Integration (CI):** Automatically build and test code on every commit.
*   **Continuous Delivery (CD):** Automatically deploy code to staging or production environments.
*   **CI/CD Tools:** Use CI/CD tools like Jenkins, GitLab CI, GitHub Actions, CircleCI, or Travis CI.
*   **Automated Testing:**  Include automated tests in the CI/CD pipeline.
*   **Code Analysis:** Integrate code analysis tools into the CI/CD pipeline.
*   **Automated deployments.** Automate the deployment process to reduce manual effort and errors.

By adhering to these best practices and coding standards, developers can create Python code that is more robust, maintainable, and secure.

### 📚 文档与可解释性
- **当添加新功能、依赖项更改或设置步骤修改时更新 `README.md`**。
- **注释非显而易见的代码**，确保中级开发者能够理解所有内容。
- 编写复杂逻辑时，**添加内联 `# 原因：` 注释**解释为什么，而不仅仅是做什么。

### 🧠 AI 行为规则
- **永远不要假设缺失的上下文。如果不确定，请提问。**
- **永远不要虚构库或函数** - 只使用已知的、经过验证的 Python 包。
- **在代码或测试中引用之前，始终确认文件路径和模块名称**存在。
- **永远不要删除或覆盖现有代码**，除非明确指示或作为 `TASK.md` 中任务的一部分。
-----