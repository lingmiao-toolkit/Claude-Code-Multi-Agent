#!/usr/bin/env node

/**
 * Intelligent Agent Selector
 * 智能代理选择器 - 基于需求自动匹配合适的专业代理
 */

const fs = require('fs').promises;
const path = require('path');

class AgentSelector {
    constructor() {
        this.capabilityMap = null;
        this.agentWorkloads = new Map(); // 跟踪代理工作负载
        this.selectionCache = new Map(); // 缓存选择结果
    }

    async initialize() {
        await this.loadCapabilityMap();
        await this.loadCurrentWorkloads();
    }

    async loadCapabilityMap() {
        try {
            const mapPath = path.join(__dirname, 'agent-capability-map.json');
            const mapContent = await fs.readFile(mapPath, 'utf-8');
            this.capabilityMap = JSON.parse(mapContent);
            console.log(`✅ 代理能力映射已加载: ${this.capabilityMap.meta.total_agents}个代理`);
        } catch (error) {
            throw new Error(`Failed to load capability map: ${error.message}`);
        }
    }

    async loadCurrentWorkloads() {
        // 从TODO.md或状态文件中加载当前工作负载
        try {
            const todoPath = 'TODO.md';
            const todoContent = await fs.readFile(todoPath, 'utf-8');
            this.parseWorkloadsFromTodo(todoContent);
        } catch (error) {
            console.log('⚠️  No existing TODO.md found, starting with empty workloads');
            this.agentWorkloads.clear();
        }
    }

    parseWorkloadsFromTodo(todoContent) {
        // 解析TODO.md中的代理工作负载信息
        const lines = todoContent.split('\n');
        for (const line of lines) {
            const match = line.match(/🤖\s*\*\*分配给\*\*:\s*([a-zA-Z-]+)/);
            if (match) {
                const agentName = match[1];
                const currentLoad = this.agentWorkloads.get(agentName) || 0;
                this.agentWorkloads.set(agentName, currentLoad + 1);
            }
        }
    }

    async analyzeKiroFiles(featureName) {
        const kirosPath = `.kiro/specs/${featureName}`;
        const analysisResult = {
            requirements: null,
            design: null,
            tasks: null,
            complexity: 'medium',
            domains: [],
            technologies: [],
            estimatedEffort: 'medium'
        };

        try {
            // 读取requirements.md
            const reqPath = path.join(kirosPath, 'requirements.md');
            const reqContent = await fs.readFile(reqPath, 'utf-8');
            analysisResult.requirements = this.analyzeRequirements(reqContent);

            // 读取design.md  
            const designPath = path.join(kirosPath, 'design.md');
            const designContent = await fs.readFile(designPath, 'utf-8');
            analysisResult.design = this.analyzeDesign(designContent);

            // 读取tasks.md
            const tasksPath = path.join(kirosPath, 'tasks.md');
            const tasksContent = await fs.readFile(tasksPath, 'utf-8');
            analysisResult.tasks = this.analyzeTasks(tasksContent);

            // 综合分析
            analysisResult.complexity = this.calculateComplexity(analysisResult);
            analysisResult.domains = this.extractDomains(analysisResult);
            analysisResult.technologies = this.extractTechnologies(analysisResult);
            analysisResult.estimatedEffort = this.estimateEffort(analysisResult);

            return analysisResult;

        } catch (error) {
            throw new Error(`Failed to analyze Kiro files: ${error.message}`);
        }
    }

    analyzeRequirements(content) {
        const analysis = {
            userStories: this.extractUserStories(content),
            functionalRequirements: this.extractFunctionalRequirements(content),
            nonFunctionalRequirements: this.extractNonFunctionalRequirements(content),
            constraints: this.extractConstraints(content),
            stakeholders: this.extractStakeholders(content)
        };

        return analysis;
    }

    analyzeDesign(content) {
        const analysis = {
            architecture: this.extractArchitecture(content),
            components: this.extractComponents(content),
            technologies: this.extractTechnologies(content),
            dataModels: this.extractDataModels(content),
            apis: this.extractAPIs(content),
            integrations: this.extractIntegrations(content)
        };

        return analysis;
    }

    analyzeTasks(content) {
        const analysis = {
            taskCount: this.countTasks(content),
            taskTypes: this.classifyTasks(content),
            dependencies: this.extractDependencies(content),
            priorities: this.extractPriorities(content),
            estimatedHours: this.estimateTaskHours(content)
        };

        return analysis;
    }

    extractUserStories(content) {
        const stories = [];
        const storyPattern = /(?:作为|As\s+a|用户故事)[\s\S]*?(?=\n\n|\n\s*\n|$)/gi;
        const matches = content.match(storyPattern) || [];

        matches.forEach(match => {
            stories.push({
                text: match.trim(),
                type: this.classifyStoryType(match)
            });
        });

        return stories;
    }

    extractFunctionalRequirements(content) {
        const requirements = [];
        const reqPattern = /(?:功能需求|Functional\s+Requirement|FR\d+)[\s\S]*?(?=\n\n|\n\s*\n|$)/gi;
        const matches = content.match(reqPattern) || [];

        matches.forEach(match => {
            requirements.push({
                text: match.trim(),
                complexity: this.assessRequirementComplexity(match)
            });
        });

        return requirements;
    }

    extractArchitecture(content) {
        const architectureKeywords = [
            'microservices', 'monolithic', 'serverless', 'event-driven',
            'layered', 'mvc', 'mvp', 'clean architecture', 'hexagonal',
            'frontend', 'backend', 'database', 'api', 'rest', 'graphql'
        ];

        const foundPatterns = [];
        const lowerContent = content.toLowerCase();

        architectureKeywords.forEach(keyword => {
            if (lowerContent.includes(keyword)) {
                foundPatterns.push(keyword);
            }
        });

        return {
            patterns: foundPatterns,
            style: this.determineArchitecturalStyle(foundPatterns),
            complexity: this.assessArchitecturalComplexity(foundPatterns)
        };
    }

    extractTechnologies(content) {
        const techStack = {
            frontend: [],
            backend: [],
            database: [],
            cloud: [],
            tools: []
        };

        const techPatterns = {
            frontend: ['react', 'vue', 'angular', 'svelte', 'typescript', 'javascript', 'css', 'html', 'tailwind'],
            backend: ['node.js', 'python', 'java', 'go', 'rust', 'php', 'ruby', 'c#', 'express', 'fastify', 'django', 'flask'],
            database: ['mysql', 'postgresql', 'mongodb', 'redis', 'elasticsearch', 'sqlite', 'oracle', 'cassandra'],
            cloud: ['aws', 'azure', 'gcp', 'docker', 'kubernetes', 'terraform', 'cloudformation'],
            tools: ['git', 'jenkins', 'github actions', 'circleci', 'webpack', 'vite', 'jest', 'cypress']
        };

        const lowerContent = content.toLowerCase();

        Object.entries(techPatterns).forEach(([category, techs]) => {
            techs.forEach(tech => {
                if (lowerContent.includes(tech)) {
                    techStack[category].push(tech);
                }
            });
        });

        return techStack;
    }

    countTasks(content) {
        const taskPattern = /(?:- \[ \]|\* \[ \]|\d+\.\s*\[ \]|Task\s+\d+)/gi;
        const matches = content.match(taskPattern) || [];
        return matches.length;
    }

    classifyTasks(content) {
        const taskTypes = {
            development: 0,
            testing: 0,
            design: 0,
            documentation: 0,
            deployment: 0,
            research: 0
        };

        const typeKeywords = {
            development: ['implement', 'code', 'develop', 'build', 'create', 'program'],
            testing: ['test', 'unit test', 'integration test', 'e2e', 'quality', 'validate'],
            design: ['design', 'ui', 'ux', 'interface', 'wireframe', 'mockup'],
            documentation: ['document', 'readme', 'api doc', 'guide', 'specification'],
            deployment: ['deploy', 'release', 'publish', 'production', 'ci/cd', 'infrastructure'],
            research: ['research', 'investigate', 'analyze', 'study', 'explore', 'evaluate']
        };

        const lowerContent = content.toLowerCase();

        Object.entries(typeKeywords).forEach(([type, keywords]) => {
            keywords.forEach(keyword => {
                const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
                const matches = lowerContent.match(regex) || [];
                taskTypes[type] += matches.length;
            });
        });

        return taskTypes;
    }

    calculateComplexity(analysis) {
        let complexityScore = 0;

        // 基于任务数量
        if (analysis.tasks?.taskCount > 20) complexityScore += 3;
        else if (analysis.tasks?.taskCount > 10) complexityScore += 2;
        else complexityScore += 1;

        // 基于技术栈复杂度
        const totalTechs = Object.values(analysis.design?.technologies || {}).flat().length;
        if (totalTechs > 10) complexityScore += 3;
        else if (totalTechs > 5) complexityScore += 2;
        else complexityScore += 1;

        // 基于架构复杂度
        if (analysis.design?.architecture?.complexity === 'high') complexityScore += 3;
        else if (analysis.design?.architecture?.complexity === 'medium') complexityScore += 2;
        else complexityScore += 1;

        // 转换为复杂度等级
        if (complexityScore >= 8) return 'very_high';
        if (complexityScore >= 6) return 'high';
        if (complexityScore >= 4) return 'medium';
        return 'low';
    }

    extractDomains(analysis) {
        const domains = new Set();

        // 基于技术栈推断领域
        const techs = analysis.design?.technologies || {};

        if (techs.frontend?.length > 0) domains.add('frontend');
        if (techs.backend?.length > 0) domains.add('backend');
        if (techs.database?.length > 0) domains.add('database');
        if (techs.cloud?.length > 0) domains.add('deployment');

        // 基于任务类型推断领域
        const taskTypes = analysis.tasks?.taskTypes || {};

        if (taskTypes.testing > 0) domains.add('testing');
        if (taskTypes.design > 0) domains.add('design');
        if (taskTypes.documentation > 0) domains.add('documentation');

        // 基于需求推断领域
        const requirements = analysis.requirements?.functionalRequirements || [];
        requirements.forEach(req => {
            if (req.text.toLowerCase().includes('用户')) domains.add('product');
            if (req.text.toLowerCase().includes('营销')) domains.add('marketing');
            if (req.text.toLowerCase().includes('分析')) domains.add('analytics');
        });

        return Array.from(domains);
    }

    async selectAgents(analysis) {
        const selection = {
            specialists: [],
            professionals: [],
            reasoning: [],
            totalAgents: 0,
            estimatedCost: 0
        };

        // 1. 选择specialist主管
        selection.specialists = await this.selectSpecialists(analysis);

        // 2. 为每个specialist选择专业代理
        for (const specialist of selection.specialists) {
            const professionals = await this.selectProfessionalsForSpecialist(specialist, analysis);
            selection.professionals.push(...professionals);
        }

        // 3. 去重和优化
        selection.professionals = this.deduplicateAndOptimize(selection.professionals);

        // 4. 生成选择理由
        selection.reasoning = this.generateSelectionReasoning(analysis, selection);

        // 5. 计算总数和成本
        selection.totalAgents = selection.specialists.length + selection.professionals.length;
        selection.estimatedCost = this.calculateEstimatedCost(selection);

        return selection;
    }

    async selectSpecialists(analysis) {
        const selectedSpecialists = [];
        const { specialist_managers } = this.capabilityMap;

        // spec-orchestrator 总是需要的
        selectedSpecialists.push({
            name: 'spec-orchestrator',
            role: specialist_managers['spec-orchestrator'].role,
            reason: '总协调器，必须参与所有项目'
        });

        // 基于领域需求选择其他specialists
        const domains = analysis.domains || [];

        if (domains.includes('frontend') || domains.includes('backend') || domains.includes('database')) {
            selectedSpecialists.push({
                name: 'spec-architect',
                role: specialist_managers['spec-architect'].role,
                reason: '需要系统架构设计和技术选型'
            });
        }

        if (analysis.requirements?.userStories?.length > 0 || domains.includes('product')) {
            selectedSpecialists.push({
                name: 'spec-analyst',
                role: specialist_managers['spec-analyst'].role,
                reason: '需要深度需求分析和用户研究'
            });
        }

        if (analysis.tasks?.taskCount > 5) {
            selectedSpecialists.push({
                name: 'spec-planner',
                role: specialist_managers['spec-planner'].role,
                reason: '任务数量较多，需要专业的规划和分解'
            });
        }

        if (domains.includes('frontend') || domains.includes('backend')) {
            selectedSpecialists.push({
                name: 'spec-developer',
                role: specialist_managers['spec-developer'].role,
                reason: '需要代码实现和开发指导'
            });
        }

        if (analysis.complexity === 'high' || analysis.complexity === 'very_high') {
            selectedSpecialists.push({
                name: 'spec-reviewer',
                role: specialist_managers['spec-reviewer'].role,
                reason: '高复杂度项目需要严格的代码审查'
            });

            selectedSpecialists.push({
                name: 'spec-validator',
                role: specialist_managers['spec-validator'].role,
                reason: '高复杂度项目需要质量验证'
            });
        }

        if (domains.includes('testing') || analysis.tasks?.taskTypes?.testing > 0) {
            selectedSpecialists.push({
                name: 'spec-tester',
                role: specialist_managers['spec-tester'].role,
                reason: '需要专业的测试策略和质量保证'
            });
        }

        // spec-task-reviewer 总是需要的（用于任务监督）
        selectedSpecialists.push({
            name: 'spec-task-reviewer',
            role: specialist_managers['spec-task-reviewer'].role,
            reason: '任务监督和自动化流程必需'
        });

        return selectedSpecialists;
    }

    async selectProfessionalsForSpecialist(specialist, analysis) {
        const professionals = [];
        const { agent_categories } = this.capabilityMap;
        const manages = this.capabilityMap.specialist_managers[specialist.name].manages;

        for (const category of manages) {
            if (category === 'all_specialists') continue; // 跳过specialist管理

            const categoryAgents = this.getCategoryAgents(category, agent_categories);
            const selectedAgents = this.matchAgentsToRequirements(categoryAgents, analysis, specialist);

            professionals.push(...selectedAgents);
        }

        return professionals;
    }

    getCategoryAgents(category, agentCategories) {
        const agents = [];

        if (agentCategories[category]) {
            if (Array.isArray(agentCategories[category].agents)) {
                // 直接类别（如databases, design等）
                agents.push(...agentCategories[category].agents);
            } else {
                // 嵌套类别（如engineering.frontend）
                Object.values(agentCategories[category]).forEach(subCategory => {
                    if (subCategory.agents) {
                        agents.push(...subCategory.agents);
                    }
                });
            }
        }

        return agents;
    }

    matchAgentsToRequirements(agents, analysis, specialist) {
        const matched = [];
        const complexity = analysis.complexity;
        const domains = analysis.domains || [];
        const technologies = this.flattenTechnologies(analysis.design?.technologies || {});

        for (const agent of agents) {
            const score = this.calculateMatchScore(agent, analysis, technologies, domains, complexity);

            if (score > 0.6) { // 匹配阈值
                const workload = this.agentWorkloads.get(agent.name) || 0;
                const maxWorkload = this.capabilityMap.selection_algorithms.workload_balancing.max_concurrent_tasks;

                if (workload < maxWorkload) {
                    matched.push({
                        ...agent,
                        matchScore: score,
                        currentWorkload: workload,
                        assignedBy: specialist.name,
                        reason: this.generateAgentSelectionReason(agent, score, analysis)
                    });
                }
            }
        }

        // 按匹配分数排序并选择前几个
        matched.sort((a, b) => b.matchScore - a.matchScore);
        return matched.slice(0, 3); // 每个specialist最多选择3个专业代理
    }

    calculateMatchScore(agent, analysis, technologies, domains, complexity) {
        let score = 0;
        const weights = this.capabilityMap.selection_algorithms.skill_matching.weight_factors;

        // 技能匹配
        const agentSkills = agent.skills || [];
        let skillMatches = 0;
        let skillTotal = 0;

        agentSkills.forEach(skill => {
            skillTotal++;
            if (technologies.includes(skill)) {
                skillMatches += weights.exact_match;
            } else if (this.isRelatedTechnology(skill, technologies)) {
                skillMatches += weights.related_skill;
            } else if (domains.some(domain => this.isDomainMatch(skill, domain))) {
                skillMatches += weights.domain_overlap;
            } else {
                skillMatches += weights.general_capability * 0.5;
            }
        });

        score += skillTotal > 0 ? (skillMatches / skillTotal) * 0.6 : 0;

        // 复杂度匹配
        const complexityRules = this.capabilityMap.selection_algorithms.complexity_based.rules;
        const agentComplexity = agent.complexity;

        if (this.isComplexityMatch(agentComplexity, complexity, complexityRules)) {
            score += 0.3;
        }

        // 用例匹配
        const agentUseCases = agent.use_cases || [];
        const useCaseMatches = agentUseCases.filter(useCase =>
            analysis.requirements?.functionalRequirements?.some(req =>
                req.text.toLowerCase().includes(useCase.replace(/_/g, ' '))
            ) || analysis.tasks?.taskTypes && Object.keys(analysis.tasks.taskTypes).includes(useCase)
        );

        score += (useCaseMatches.length / Math.max(agentUseCases.length, 1)) * 0.1;

        return Math.min(score, 1.0); // 确保分数不超过1
    }

    flattenTechnologies(techStack) {
        return Object.values(techStack).flat();
    }

    isRelatedTechnology(skill, technologies) {
        const relationMap = {
            'javascript': ['typescript', 'node.js', 'react', 'vue'],
            'typescript': ['javascript', 'node.js', 'react', 'vue'],
            'react': ['javascript', 'typescript', 'jsx'],
            'vue': ['javascript', 'typescript'],
            'css': ['sass', 'less', 'tailwind'],
            'tailwind': ['css'],
            'python': ['django', 'flask', 'fastapi'],
            'node.js': ['javascript', 'typescript', 'express'],
            'database': ['mysql', 'postgresql', 'mongodb']
        };

        const related = relationMap[skill] || [];
        return technologies.some(tech => related.includes(tech));
    }

    isDomainMatch(skill, domain) {
        const domainSkillMap = {
            'frontend': ['ui_development', 'react', 'vue', 'javascript', 'css'],
            'backend': ['api_design', 'server_programming', 'database_integration'],
            'database': ['database_administration', 'query_optimization', 'data_pipeline'],
            'testing': ['test_automation', 'api_testing', 'performance_testing'],
            'deployment': ['deployment_automation', 'ci_cd', 'infrastructure'],
            'design': ['ui_design', 'ux_analysis', 'visual_design']
        };

        const domainSkills = domainSkillMap[domain] || [];
        return domainSkills.includes(skill);
    }

    isComplexityMatch(agentComplexity, projectComplexity, rules) {
        const complexityLevels = ['low', 'medium', 'high', 'very_high'];
        const agentLevel = complexityLevels.indexOf(agentComplexity);
        const projectLevel = complexityLevels.indexOf(projectComplexity);

        // 代理能力应该匹配或略高于项目复杂度
        return agentLevel >= projectLevel - 1 && agentLevel <= projectLevel + 1;
    }

    generateAgentSelectionReason(agent, score, analysis) {
        const reasons = [];

        if (score > 0.9) reasons.push('完美匹配项目需求');
        else if (score > 0.8) reasons.push('高度匹配项目技能要求');
        else if (score > 0.7) reasons.push('良好匹配项目领域');
        else reasons.push('基本符合项目要求');

        if (agent.complexity === analysis.complexity) {
            reasons.push('复杂度完全匹配');
        }

        return reasons.join('，');
    }

    deduplicateAndOptimize(professionals) {
        const seen = new Set();
        const optimized = [];

        for (const agent of professionals) {
            if (!seen.has(agent.name)) {
                seen.add(agent.name);
                optimized.push(agent);
            }
        }

        return optimized;
    }

    generateSelectionReasoning(analysis, selection) {
        const reasoning = [];

        reasoning.push(`项目复杂度: ${analysis.complexity}`);
        reasoning.push(`涉及领域: ${analysis.domains.join(', ')}`);
        reasoning.push(`技术栈: ${this.flattenTechnologies(analysis.design?.technologies || {}).join(', ')}`);
        reasoning.push(`任务总数: ${analysis.tasks?.taskCount || 0}`);
        reasoning.push(`选择的专家主管: ${selection.specialists.length}个`);
        reasoning.push(`选择的专业代理: ${selection.professionals.length}个`);

        return reasoning;
    }

    calculateEstimatedCost(selection) {
        // 简单的成本估算逻辑
        const specialistCost = selection.specialists.length * 10; // 每个specialist 10个单位
        const professionalCost = selection.professionals.length * 5; // 每个professional 5个单位
        return specialistCost + professionalCost;
    }

    async saveSelectionResult(featureName, analysis, selection) {
        const result = {
            feature: featureName,
            timestamp: new Date().toISOString(),
            analysis,
            selection,
            metadata: {
                version: this.capabilityMap.meta.version,
                selector_version: '1.0.0'
            }
        };

        const outputPath = `.claude/agent-selection-${featureName}.json`;
        await fs.writeFile(outputPath, JSON.stringify(result, null, 2));
        console.log(`💾 代理选择结果已保存: ${outputPath}`);

        return result;
    }

    // 辅助方法实现
    classifyStoryType(story) {
        if (story.toLowerCase().includes('管理员')) return 'admin';
        if (story.toLowerCase().includes('用户')) return 'user';
        if (story.toLowerCase().includes('系统')) return 'system';
        return 'general';
    }

    assessRequirementComplexity(requirement) {
        const complexWords = ['集成', '分析', '优化', '算法', '机器学习', '人工智能'];
        const lowerReq = requirement.toLowerCase();
        const complexityScore = complexWords.filter(word => lowerReq.includes(word)).length;

        if (complexityScore >= 3) return 'high';
        if (complexityScore >= 1) return 'medium';
        return 'low';
    }

    determineArchitecturalStyle(patterns) {
        if (patterns.includes('microservices')) return 'microservices';
        if (patterns.includes('serverless')) return 'serverless';
        if (patterns.includes('event-driven')) return 'event-driven';
        if (patterns.includes('mvc')) return 'mvc';
        return 'layered';
    }

    assessArchitecturalComplexity(patterns) {
        if (patterns.length >= 5) return 'high';
        if (patterns.length >= 3) return 'medium';
        return 'low';
    }

    extractNonFunctionalRequirements(content) {
        const nfrKeywords = ['性能', '安全', '可用性', '扩展', '兼容', 'performance', 'security', 'availability'];
        const requirements = [];

        nfrKeywords.forEach(keyword => {
            const regex = new RegExp(`[^\\n]*${keyword}[^\\n]*`, 'gi');
            const matches = content.match(regex) || [];
            requirements.push(...matches.map(match => ({ text: match.trim(), type: keyword })));
        });

        return requirements;
    }

    extractConstraints(content) {
        const constraintKeywords = ['限制', '约束', '不能', '禁止', 'constraint', 'limitation'];
        const constraints = [];

        constraintKeywords.forEach(keyword => {
            const regex = new RegExp(`[^\\n]*${keyword}[^\\n]*`, 'gi');
            const matches = content.match(regex) || [];
            constraints.push(...matches.map(match => match.trim()));
        });

        return constraints;
    }

    extractStakeholders(content) {
        const stakeholderKeywords = ['用户', '客户', '管理员', '开发者', '运维', 'user', 'admin', 'developer'];
        const stakeholders = new Set();

        stakeholderKeywords.forEach(keyword => {
            if (content.toLowerCase().includes(keyword)) {
                stakeholders.add(keyword);
            }
        });

        return Array.from(stakeholders);
    }

    extractComponents(content) {
        const componentKeywords = ['组件', '模块', '服务', '类', 'component', 'module', 'service', 'class'];
        const components = [];

        componentKeywords.forEach(keyword => {
            const regex = new RegExp(`[^\\n]*${keyword}[^\\n]*`, 'gi');
            const matches = content.match(regex) || [];
            components.push(...matches.map(match => match.trim()));
        });

        return components;
    }

    extractDataModels(content) {
        const modelKeywords = ['实体', '表', '模型', '数据结构', 'entity', 'table', 'model', 'schema'];
        const models = [];

        modelKeywords.forEach(keyword => {
            const regex = new RegExp(`[^\\n]*${keyword}[^\\n]*`, 'gi');
            const matches = content.match(regex) || [];
            models.push(...matches.map(match => match.trim()));
        });

        return models;
    }

    extractAPIs(content) {
        const apiPattern = /(?:GET|POST|PUT|DELETE|PATCH)\s+\/[^\s]*/gi;
        const apis = content.match(apiPattern) || [];
        return apis;
    }

    extractIntegrations(content) {
        const integrationKeywords = ['集成', '接口', 'api', 'integration', 'interface', '第三方'];
        const integrations = [];

        integrationKeywords.forEach(keyword => {
            const regex = new RegExp(`[^\\n]*${keyword}[^\\n]*`, 'gi');
            const matches = content.match(regex) || [];
            integrations.push(...matches.map(match => match.trim()));
        });

        return integrations;
    }

    extractDependencies(content) {
        const depPattern = /依赖[：:]\s*([^\n]+)/gi;
        const dependencies = [];
        let match;

        while ((match = depPattern.exec(content)) !== null) {
            dependencies.push(match[1].trim());
        }

        return dependencies;
    }

    extractPriorities(content) {
        const priorityPattern = /优先级[：:]?\s*(高|中|低|high|medium|low)/gi;
        const priorities = [];
        let match;

        while ((match = priorityPattern.exec(content)) !== null) {
            priorities.push(match[1].toLowerCase());
        }

        return priorities;
    }

    estimateTaskHours(content) {
        const hourPattern = /(\d+)\s*(?:小时|hours?|h)/gi;
        let totalHours = 0;
        let match;

        while ((match = hourPattern.exec(content)) !== null) {
            totalHours += parseInt(match[1]);
        }

        return totalHours || this.estimateHoursByTaskCount(this.countTasks(content));
    }

    estimateHoursByTaskCount(taskCount) {
        // 简单的工时估算：平均每个任务4小时
        return taskCount * 4;
    }

    estimateEffort(analysis) {
        const taskCount = analysis.tasks?.taskCount || 0;
        const complexity = analysis.complexity;

        if (complexity === 'very_high' || taskCount > 20) return 'high';
        if (complexity === 'high' || taskCount > 10) return 'medium';
        return 'low';
    }
}

// CLI 接口
async function main() {
    const selector = new AgentSelector();
    const args = process.argv.slice(2);

    if (args.length === 0) {
        console.log('使用方法: node agent-selector.js <feature-name>');
        console.log('示例: node agent-selector.js user-authentication');
        process.exit(1);
    }

    const featureName = args[0];

    try {
        console.log(`🎯 开始分析特性: ${featureName}`);

        await selector.initialize();
        console.log('✅ 代理选择器初始化完成');

        const analysis = await selector.analyzeKiroFiles(featureName);
        console.log('✅ Kiro文件分析完成');
        console.log(`   - 复杂度: ${analysis.complexity}`);
        console.log(`   - 涉及领域: ${analysis.domains.join(', ')}`);
        console.log(`   - 任务数量: ${analysis.tasks?.taskCount || 0}`);

        const selection = await selector.selectAgents(analysis);
        console.log('✅ 代理选择完成');
        console.log(`   - 专家主管: ${selection.specialists.length}个`);
        console.log(`   - 专业代理: ${selection.professionals.length}个`);
        console.log(`   - 总代理数: ${selection.totalAgents}个`);
        console.log(`   - 预估成本: ${selection.estimatedCost}个单位`);

        const result = await selector.saveSelectionResult(featureName, analysis, selection);
        console.log('✅ 结果已保存');

        // 输出详细选择结果
        console.log('\n📋 选择的专家主管:');
        selection.specialists.forEach(specialist => {
            console.log(`   - ${specialist.name}: ${specialist.reason}`);
        });

        console.log('\n🤖 选择的专业代理:');
        selection.professionals.forEach(agent => {
            console.log(`   - ${agent.name} (匹配度: ${(agent.matchScore * 100).toFixed(1)}%): ${agent.reason}`);
        });

        console.log('\n💡 选择理由:');
        selection.reasoning.forEach(reason => {
            console.log(`   - ${reason}`);
        });

    } catch (error) {
        console.error('❌ 代理选择失败:', error.message);
        process.exit(1);
    }
}

if (require.main === module) {
    main().catch(console.error);
}

module.exports = AgentSelector; 