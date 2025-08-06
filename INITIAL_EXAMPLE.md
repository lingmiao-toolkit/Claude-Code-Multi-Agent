## 功能特性：

- 一个 Pydantic AI 智能体，它将另一个 Pydantic AI 智能体作为工具使用。
- 主智能体使用研究智能体，子智能体使用邮件草稿智能体。
- 命令行界面来与智能体交互。
- 邮件草稿智能体使用 Gmail，研究智能体使用 Brave API。

## 示例：

在 `examples/` 文件夹中，有一个 README 文件供您阅读，以了解示例的全部内容，以及在为上述功能创建文档时如何构建您自己的 README。

- `examples/cli.py` - 使用此文件作为创建 CLI 的模板
- `examples/agent/` - 通读这里的所有文件，了解创建支持不同提供商和 LLM 的 Pydantic AI 智能体、处理智能体依赖关系以及向智能体添加工具的最佳实践。
a
不要直接复制这些示例，它们完全是为不同的项目准备的。但请将其作为灵感和最佳实践的参考。

## 文档：

Pydantic AI 文档：https://ai.pydantic.dev/

## 其他注意事项：

- 包含 .env.example 文件，README 中包含设置说明，包括如何配置 Gmail 和 Brave。
- 在 README 中包含项目结构。
- 虚拟环境已经设置好，包含必要的依赖项。
- 使用 python_dotenv 和 load_env() 来处理环境变量
