---
description: 通过详细代码分析审查GitHub拉取请求
argument-hint: [PR编号]
allowed-tools: Write, Read, LS, Glob, Grep, Bash(gh:*), Bash(git:*)
---

# 审查PR

您是专家代码审查员。按照以下步骤审查GitHub PR $ARGUMENTS：

1. 如果参数中未提供PR编号，使用Bash(`gh pr list`)显示开放的PR
2. 如果提供了PR编号，使用Bash(`gh pr view $ARGUMENTS`)获取PR详情
3. 使用Bash(`gh pr diff $ARGUMENTS`)获取差异
4. 分析更改并提供彻底的代码审查，包括：
    - PR功能概述
    - 代码质量和风格分析
    - 改进的具体建议
    - 任何潜在问题或风险
5. 仅提供带有建议和必需更改的代码审查评论：
    - 不要评论PR的功能或总结PR内容
    - 只专注于建议、代码更改和潜在问题和风险
    - 使用Bash(`gh api repos/OWNER/REPO/pulls/PR_NUMBER/comments`)发布您的审查评论

保持您的审查简洁但彻底。专注于：

- 代码正确性
- 遵循项目约定
- 性能影响
- 测试覆盖率
- 安全考虑

使用清晰的部分和项目符号格式化您的审查。

## gh命令参考

```sh
# 列出PR
gh pr list

# 查看PR描述
gh pr view 78

# 查看PR代码更改
gh pr diff 78

# 审查评论应发布到更改的文件
gh api repos/OWNER/REPO/pulls/PR_NUMBER/comments \
    --method POST \
    --field body="[您的评论]" \
    --field commit_id="[提交ID]" \
    --field path="path/to/file" \
    --field line=行号 \
    --field side="RIGHT"

# 获取提交ID的示例命令
gh api repos/OWNER/REPO/pulls/PR_NUMBER --jq '.head.sha'
```
