# ClaimTrix - 空投矩阵

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D16.0.0-brightgreen)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.0+-61DAFB)](https://reactjs.org/)
[![NestJS](https://img.shields.io/badge/NestJS-10.0+-E0234E)](https://nestjs.com/)

ClaimTrix 是一个基于区块链的空投矩阵平台，帮助用户发现、追踪和管理各种加密货币空投机会。

## ✨ 主要特性

- 🎯 **空投发现** - 实时追踪最新的空投机会
- 📊 **收益分析** - 详细的空投收益统计和分析
- 🔄 **自动化工具** - 智能化空投参与流程
- 💎 **多链支持** - 支持以太坊、BSC、Polygon等多条区块链
- 📱 **响应式设计** - 完美适配桌面端和移动端
- 🚀 **SSR优化** - 服务端渲染，提升SEO和首屏加载速度

## 🏗️ 技术架构

### 前端技术栈
- **React 18** - 前端框架
- **TypeScript** - 类型安全
- **Webpack 5** - 模块打包
- **SSR** - 服务端渲染
- **Styled-Components** - CSS-in-JS样式方案
- **React Query** - 数据状态管理

### 后端技术栈
- **NestJS** - Node.js框架
- **TypeScript** - 统一类型系统
- **Prisma** - 数据库ORM
- **PostgreSQL** - 主数据库
- **Redis** - 缓存和会话存储
- **Web3.js** - 区块链交互

### 项目结构
```
ClaimTrix/
├── apps/
│   ├── web/                # React SSR 前端应用
│   │   ├── src/
│   │   │   ├── components/ # React组件
│   │   │   ├── pages/      # 页面组件
│   │   │   ├── hooks/      # 自定义Hook
│   │   │   ├── utils/      # 工具函数
│   │   │   └── types/      # TypeScript类型定义
│   │   ├── webpack.config.js
│   │   └── server.ts       # SSR服务器
│   └── api/                # NestJS 后端应用
│       ├── src/
│       │   ├── modules/    # 业务模块
│       │   ├── common/     # 公共组件
│       │   ├── guards/     # 守卫
│       │   └── interceptors/
│       └── prisma/         # 数据库schema
├── libs/                   # 共享库
│   ├── shared/            # 前后端共享代码
│   └── types/             # 类型定义
├── tools/                 # 构建工具
└── docker/                # Docker配置
```

## 🚀 快速开始

### 环境要求
- Node.js >= 16.0.0
- npm >= 8.0.0 或 yarn >= 1.22.0
- PostgreSQL >= 13.0
- Redis >= 6.0

### 安装步骤

1. **克隆项目**
   ```bash
   git clone https://github.com/officials/claimtrix.git
   cd claimtrix
   ```

2. **安装依赖**
   ```bash
   npm install
   ```

3. **环境配置**
   ```bash
   cp .env.example .env
   # 编辑 .env 文件，配置数据库、Redis和区块链节点
   ```

4. **数据库初始化**
   ```bash
   npx prisma migrate dev
   npx prisma db seed
   ```

5. **启动开发环境**
   ```bash
   # 并行启动前后端开发服务器
   npm run dev
   
   # 或分别启动
   npm run dev:api    # 启动 NestJS API (http://localhost:3001)
   npm run dev:web    # 启动 React SSR (http://localhost:3000)
   ```

## 📖 API 文档

- API文档：`http://localhost:3001/api/docs`
- GraphQL Playground：`http://localhost:3001/graphql`

### 主要API端点

- `GET /api/airdrops` - 获取空投列表
- `POST /api/airdrops` - 创建空投信息
- `GET /api/airdrops/:id` - 获取空投详情
- `POST /api/airdrops/:id/claim` - 参与空投
- `GET /api/users/portfolio` - 获取用户投资组合
- `GET /api/analytics/earnings` - 收益分析

## 🧪 测试

```bash
# 运行所有测试
npm test

# 前端测试
npm run test:web

# 后端测试
npm run test:api

# E2E测试
npm run test:e2e

# 测试覆盖率
npm run test:coverage
```

## 🏗️ 构建部署

### 开发构建
```bash
npm run build:dev
```

### 生产构建
```bash
npm run build:prod
```

### Docker 部署
```bash
# 构建镜像
docker-compose build

# 启动服务
docker-compose up -d
```

### 环境变量配置

#### 数据库配置
```env
DATABASE_URL="postgresql://user:password@localhost:5432/claimtrix"
REDIS_URL="redis://localhost:6379"
```

#### 区块链配置
```env
ETH_RPC_URL="https://mainnet.infura.io/v3/your-key"
BSC_RPC_URL="https://bsc-dataseed.binance.org/"
POLYGON_RPC_URL="https://polygon-rpc.com/"
```

#### 应用配置
```env
JWT_SECRET="your-jwt-secret"
API_PORT=3001
WEB_PORT=3000
NODE_ENV=production
```

## 📱 主要功能

### 空投发现
- 实时空投信息聚合
- 多链空投监控
- 智能筛选和推荐

### 投资组合管理
- 空投收益追踪
- 持仓分析
- 收益统计报告

### 自动化工具
- 批量空投参与
- 智能合约交互
- 风险评估

## 🔧 开发工具

```bash
# 代码格式化
npm run format

# 类型检查
npm run type-check

# 代码检查
npm run lint

# 数据库管理
npm run db:studio    # 打开Prisma Studio
npm run db:reset     # 重置数据库
npm run db:deploy    # 部署数据库变更
```

## 🤝 贡献指南

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 打开 Pull Request

### 开发规范
- 使用 TypeScript 严格模式
- 遵循 ESLint 和 Prettier 配置
- 编写单元测试和集成测试
- 使用 Conventional Commits 规范

## 📄 许可证

本项目采用 MIT 许可证。详情请见 [LICENSE](LICENSE) 文件。

## 🔗 相关链接

- 项目主页：https://github.com/officials/claimtrix
- 问题反馈：https://github.com/officials/claimtrix/issues
- 文档：https://claimtrix.docs.com
- 社区：https://discord.gg/claimtrix

## 🙏 致谢

感谢所有为 ClaimTrix 项目做出贡献的开发者和社区成员！

---

**ClaimTrix** - 发现你的下一个空投机会！ 🚀
