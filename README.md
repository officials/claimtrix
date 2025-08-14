# ClaimTrix - 空投矩阵

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.0+-61DAFB)](https://reactjs.org/)
[![NestJS](https://img.shields.io/badge/NestJS-10.0+-E0234E)](https://nestjs.com/)

ClaimTrix 是一个基于 React + TypeScript + NestJS 的 SSR（服务端渲染）空投矩阵平台，帮助用户发现、追踪和管理各种加密货币空投机会。

## ✨ 项目特性

- 🎯 **空投发现** - 实时追踪最新的空投机会
- 📊 **数据分析** - 详细的空投收益统计和分析
- 🔄 **SSR支持** - 服务端渲染，提升SEO和首屏加载速度
- 💎 **多链支持** - 支持以太坊、Arbitrum、Optimism等多条区块链
- 📱 **响应式设计** - 完美适配桌面端和移动端
- 🚀 **现代化技术栈** - React 18 + TypeScript + NestJS

## 🏗️ 技术架构

### 前端技术栈
- **React 18** - 前端框架
- **TypeScript** - 类型安全
- **Webpack 5** - 模块打包
- **Styled-Components** - CSS-in-JS样式方案
- **Framer Motion** - 动画库
- **React Query** - 数据状态管理

### 后端技术栈
- **NestJS** - Node.js框架
- **TypeScript** - 统一类型系统
- **Prisma** - 数据库ORM
- **PostgreSQL** - 主数据库
- **React SSR** - 服务端渲染

### 项目结构
```
ClaimTrix/
├── client/                 # React 前端应用
│   ├── src/
│   │   ├── components/     # React组件
│   │   ├── pages/          # 页面组件
│   │   ├── styles/         # 样式文件
│   │   ├── hooks/          # 自定义Hook
│   │   └── utils/          # 工具函数
│   ├── public/             # 静态资源
│   ├── webpack.config.js   # Webpack配置
│   └── package.json
├── server/                 # NestJS 后端应用
│   ├── src/
│   │   ├── modules/        # 业务模块
│   │   ├── common/         # 公共组件
│   │   └── main.ts         # 应用入口
│   ├── prisma/             # 数据库schema
│   └── package.json
├── package.json            # 根项目配置
└── README.md
```

## 🚀 快速开始

### 环境要求
- Node.js >= 18.0.0
- npm >= 8.0.0
- PostgreSQL >= 13.0 (可选)

### 安装步骤

1. **克隆项目**
   ```bash
   git clone https://github.com/officials/claimtrix.git
   cd claimtrix
   ```

2. **安装依赖**
   ```bash
   # 安装根项目依赖
   npm install
   
   # 安装客户端依赖
   npm run install:client
   
   # 安装服务端依赖
   npm run install:server
   
   # 或者一键安装所有依赖
   npm run install:all
   ```

3. **环境配置**
   ```bash
   cp .env.example .env
   # 编辑 .env 文件，配置数据库连接和其他环境变量
   ```

4. **数据库初始化（可选）**
   ```bash
   # 如果使用PostgreSQL数据库
   npm run db:migrate
   npm run db:seed
   ```

5. **启动开发环境**
   ```bash
   # 同时启动前后端开发服务器
   npm run dev
   
   # 或分别启动
   npm run dev:server    # 启动 NestJS 服务器 (http://localhost:3001)
   npm run dev:client    # 启动 React 开发服务器 (http://localhost:3000)
   ```

6. **访问应用**
   - 前端应用：http://localhost:3000
   - API文档：http://localhost:3001/api/docs
   - 健康检查：http://localhost:3001/health

## 📖 项目命令

### 根项目命令
```bash
# 开发
npm run dev              # 同时启动前后端
npm run dev:client       # 启动客户端
npm run dev:server       # 启动服务端

# 构建
npm run build            # 构建前后端
npm run build:client     # 构建客户端
npm run build:server     # 构建服务端

# 测试
npm run test             # 运行所有测试
npm run test:client      # 客户端测试
npm run test:server      # 服务端测试

# 代码质量
npm run lint             # 检查代码规范
npm run lint:client      # 客户端代码检查
npm run lint:server      # 服务端代码检查

# 数据库
npm run db:migrate       # 运行数据库迁移
npm run db:seed          # 填充测试数据
npm run db:studio        # 打开Prisma Studio
```

### 客户端命令
```bash
cd client

npm run dev              # 开发服务器
npm run build            # 生产构建
npm run test             # 运行测试
npm run lint             # 代码检查
npm run type-check       # TypeScript类型检查
```

### 服务端命令
```bash
cd server

npm run start:dev        # 开发模式
npm run start:prod       # 生产模式
npm run build            # 构建项目
npm run test             # 运行测试
npm run test:e2e         # 端到端测试
npm run lint             # 代码检查

# 数据库相关
npm run db:generate      # 生成Prisma客户端
npm run db:migrate       # 运行迁移
npm run db:seed          # 填充数据
npm run db:studio        # Prisma Studio
```

## 🔧 环境变量配置

### 服务端环境变量 (.env)
```env
# 服务配置
PORT=3001
NODE_ENV=development
CLIENT_URL=http://localhost:3000

# 数据库
DATABASE_URL="postgresql://postgres:password@localhost:5432/claimtrix_dev"

# JWT
JWT_SECRET="your-jwt-secret"
JWT_EXPIRES_IN="7d"

# 区块链RPC
ETH_RPC_URL="https://mainnet.infura.io/v3/your-key"
ARB_RPC_URL="https://arb1.arbitrum.io/rpc"
OP_RPC_URL="https://mainnet.optimism.io"

# 外部API
COINGECKO_API_KEY="your-api-key"
MORALIS_API_KEY="your-api-key"
```

## 📁 核心模块

### 服务端模块
- **AuthModule** - 用户认证和授权
- **UsersModule** - 用户管理
- **AirdropsModule** - 空投管理
- **AnalyticsModule** - 数据分析
- **RenderModule** - SSR渲染

### 客户端页面
- **HomePage** - 首页和功能介绍
- **AirdropsPage** - 空投列表页面
- **AirdropDetailPage** - 空投详情页面
- **AnalyticsPage** - 数据分析页面
- **NotFoundPage** - 404错误页面

## 🎨 设计系统

项目使用统一的设计系统，包括：
- **主题配置** - 颜色、字体、间距等
- **响应式断点** - 移动端、平板、桌面端适配
- **动画系统** - Framer Motion动画库
- **组件库** - 可复用的UI组件

## 🧪 测试

```bash
# 运行所有测试
npm run test

# 运行特定测试
npm run test:client      # 前端测试
npm run test:server      # 后端测试

# 测试覆盖率
cd server && npm run test:cov
```

## 📦 部署

### 生产构建
```bash
# 构建所有项目
npm run build

# 启动生产服务器
npm start
```

### Docker部署（待完善）
```bash
# 构建镜像
docker build -t claimtrix .

# 运行容器
docker run -p 3001:3001 claimtrix
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

## 🐛 问题反馈

如果您发现任何问题或有功能建议，请通过以下方式联系我们：
- 在 GitHub 上创建 [Issue](https://github.com/officials/claimtrix/issues)
- 发送邮件至：support@claimtrix.com

## 📄 许可证

本项目采用 MIT 许可证。详情请见 [LICENSE](LICENSE) 文件。

## 🙏 致谢

感谢所有为 ClaimTrix 项目做出贡献的开发者和社区成员！

---

**ClaimTrix** - 发现你的下一个空投机会！ 🚀

## 📚 相关文档

- [React 官方文档](https://reactjs.org/)
- [NestJS 官方文档](https://nestjs.com/)
- [TypeScript 官方文档](https://typescriptlang.org/)
- [Prisma 官方文档](https://prisma.io/)
- [Styled Components 文档](https://styled-components.com/)
