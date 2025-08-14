import { PrismaClient } from '@prisma/client';
import { hash } from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seeding...');

  // Create sample users
  const hashedPassword = await hash('password123', 12);
  
  const user1 = await prisma.user.upsert({
    where: { email: 'demo@claimtrix.com' },
    update: {},
    create: {
      email: 'demo@claimtrix.com',
      username: 'demo_user',
      firstName: 'Demo',
      lastName: 'User',
      bio: '演示用户账户',
      walletAddress: '0x742d35Cc6635C0532925a3b8D6E96D1C92b1bC3d',
      isEmailVerified: true
    }
  });

  const user2 = await prisma.user.upsert({
    where: { email: 'test@claimtrix.com' },
    update: {},
    create: {
      email: 'test@claimtrix.com',
      username: 'test_user',
      firstName: 'Test',
      lastName: 'User',
      bio: '测试用户账户',
      walletAddress: '0x8ba1f109551bD432803012645Hac136c5532sY4',
      isEmailVerified: true
    }
  });

  console.log('👥 Created users:', { user1: user1.email, user2: user2.email });

  // Create sample airdrops
  const airdrop1 = await prisma.airdrop.create({
    data: {
      name: 'Arbitrum Airdrop',
      description: 'Arbitrum生态系统代币空投，奖励早期用户和活跃参与者',
      projectName: 'Arbitrum',
      projectUrl: 'https://arbitrum.io',
      twitterUrl: 'https://twitter.com/arbitrum',
      tokenSymbol: 'ARB',
      tokenContract: '0x912CE59144191C1204E64559FE8253a0e49E6548',
      totalSupply: '10000000000',
      airdropAmount: '1275000000',
      chainId: 42161,
      chainName: 'Arbitrum One',
      status: 'ACTIVE',
      startDate: new Date('2024-01-01'),
      endDate: new Date('2024-12-31'),
      claimDeadline: new Date('2025-03-31'),
      participants: 625143,
      requirements: {
        criteria: [
          '在Arbitrum上进行过交易',
          '桥接资产到Arbitrum',
          '使用Arbitrum生态DApps'
        ],
        minTransactions: 4,
        minVolume: '10000'
      }
    }
  });

  const airdrop2 = await prisma.airdrop.create({
    data: {
      name: 'Optimism Airdrop Round 2',
      description: 'Optimism第二轮空投，面向生态建设者和治理参与者',
      projectName: 'Optimism',
      projectUrl: 'https://optimism.io',
      twitterUrl: 'https://twitter.com/optimismFND',
      tokenSymbol: 'OP',
      tokenContract: '0x4200000000000000000000000000000000000042',
      totalSupply: '4294967296',
      airdropAmount: '11742277',
      chainId: 10,
      chainName: 'Optimism',
      status: 'UPCOMING',
      startDate: new Date('2024-03-01'),
      endDate: new Date('2024-06-01'),
      claimDeadline: new Date('2024-09-01'),
      participants: 0,
      requirements: {
        criteria: [
          '参与Optimism治理',
          '委托OP代币',
          '在生态项目中活跃'
        ],
        minTransactions: 1,
        governanceParticipation: true
      }
    }
  });

  const airdrop3 = await prisma.airdrop.create({
    data: {
      name: 'Polygon zkEVM Airdrop',
      description: 'Polygon zkEVM早期用户空投奖励',
      projectName: 'Polygon zkEVM',
      projectUrl: 'https://zkevm.polygon.technology',
      twitterUrl: 'https://twitter.com/0xPolygon',
      tokenSymbol: 'MATIC',
      tokenContract: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
      totalSupply: '10000000000',
      airdropAmount: '50000000',
      chainId: 1101,
      chainName: 'Polygon zkEVM',
      status: 'ENDED',
      startDate: new Date('2023-12-01'),
      endDate: new Date('2024-02-29'),
      claimDeadline: new Date('2024-05-31'),
      participants: 45891,
      totalClaimed: '48750000',
      requirements: {
        criteria: [
          '在zkEVM测试网交互',
          '桥接资产到zkEVM',
          '使用zkEVM DApps'
        ],
        minTransactions: 3,
        testnetActivity: true
      }
    }
  });

  console.log('🎯 Created airdrops:', {
    airdrop1: airdrop1.name,
    airdrop2: airdrop2.name,
    airdrop3: airdrop3.name
  });

  // Create sample claims
  const claim1 = await prisma.airdropClaim.create({
    data: {
      userId: user1.id,
      airdropId: airdrop1.id,
      amount: '1250',
      status: 'CLAIMED',
      transactionHash: '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef',
      blockNumber: '18500000',
      claimedAt: new Date('2024-01-15')
    }
  });

  const claim2 = await prisma.airdropClaim.create({
    data: {
      userId: user1.id,
      airdropId: airdrop2.id,
      status: 'ELIGIBLE'
    }
  });

  const claim3 = await prisma.airdropClaim.create({
    data: {
      userId: user2.id,
      airdropId: airdrop3.id,
      amount: '856',
      status: 'CLAIMED',
      transactionHash: '0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890',
      blockNumber: '17850000',
      claimedAt: new Date('2024-02-10')
    }
  });

  console.log('📋 Created claims:', {
    claim1: `${claim1.amount} ARB`,
    claim2: 'OP (eligible)',
    claim3: `${claim3.amount} MATIC`
  });

  // Create sample portfolios
  const portfolio1 = await prisma.portfolio.create({
    data: {
      userId: user1.id,
      name: '主投资组合',
      description: '主要的空投和DeFi投资组合',
      holdings: [
        {
          symbol: 'ARB',
          name: 'Arbitrum',
          amount: '1250',
          value: '2500',
          price: '2.00',
          change24h: '+5.2%'
        },
        {
          symbol: 'OP',
          name: 'Optimism',
          amount: '0',
          value: '0',
          price: '3.45',
          change24h: '+2.1%',
          status: 'eligible'
        }
      ],
      totalValue: '2500',
      totalTokens: 2,
      totalAirdrops: 2
    }
  });

  const portfolio2 = await prisma.portfolio.create({
    data: {
      userId: user2.id,
      name: 'DeFi 投资组合',
      description: 'DeFi协议代币投资组合',
      holdings: [
        {
          symbol: 'MATIC',
          name: 'Polygon',
          amount: '856',
          value: '684.8',
          price: '0.80',
          change24h: '-1.5%'
        }
      ],
      totalValue: '684.8',
      totalTokens: 1,
      totalAirdrops: 1
    }
  });

  console.log('💼 Created portfolios:', {
    portfolio1: portfolio1.name,
    portfolio2: portfolio2.name
  });

  // Create sample notifications
  await prisma.notification.createMany({
    data: [
      {
        userId: user1.id,
        title: '新空投机会',
        message: 'Optimism第二轮空投即将开始，请检查您的资格',
        type: 'AIRDROP_ALERT',
        data: { airdropId: airdrop2.id }
      },
      {
        userId: user1.id,
        title: 'ARB代币已到账',
        message: '您的Arbitrum空投已成功领取，1250 ARB已到达您的钱包',
        type: 'SUCCESS',
        isRead: true,
        data: { claimId: claim1.id }
      },
      {
        userId: user2.id,
        title: '投资组合更新',
        message: '您的投资组合价值有变动，当前总价值：$684.8',
        type: 'INFO'
      }
    ]
  });

  console.log('🔔 Created notifications');
  console.log('✅ Database seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
