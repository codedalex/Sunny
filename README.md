# Sunny Payment Gateway Platform

> 🇰🇪 **Built in Kenya, Trusted Globally** - The complete fintech platform with Kenya-first approach

A comprehensive payment processing platform offering global coverage with specialized focus on Kenya and East African markets.

## 🏗️ Platform Architecture

```
sunny-platform/
├── apps/                           # Applications
│   ├── marketing/                  # sunnypayments.com
│   ├── user-dashboard/             # app.sunnypayments.com
│   ├── business-dashboard/         # business.sunnypayments.com
│   ├── institutions-portal/        # institutions.sunnypayments.com
│   ├── admin-dashboard/            # admin.sunnypayments.com
│   └── developer-portal/           # developers.sunnypayments.com
├── packages/                       # Shared packages
│   ├── ui/                        # Shared UI components
│   ├── kenya-tax/                 # Kenya tax compliance
│   ├── shared-types/              # TypeScript types
│   ├── api-client/                # API integration
│   ├── auth/                      # Authentication
│   └── utils/                     # Common utilities
└── tools/                         # Development tools
```

## 🌍 Domains & Applications

| Domain | Application | Purpose | Port |
|--------|-------------|---------|------|
| `sunnypayments.com` | Marketing | Main website + integrated services | 3000 |
| `app.sunnypayments.com` | User Dashboard | Individual user portal | 3001 |
| `business.sunnypayments.com` | Business Dashboard | Business & merchant portal | 3002 |
| `institutions.sunnypayments.com` | Institutions Portal | Banks, SACCOs, MFIs portal | 3003 |
| `admin.sunnypayments.com` | Admin Dashboard | Platform administration | 3004 |
| `developers.sunnypayments.com` | Developer Portal | API docs & developer tools | 3005 |

## 🇰🇪 Kenya-First Features

### **Tax Compliance**
- **KRA Integration**: Direct eTIMS connection and iTax reporting
- **VAT Automation**: Automated VAT calculations and submissions
- **Digital Service Tax**: Automated DST for digital services
- **M-Pesa Tax**: Automated tax calculations for mobile money transactions

### **Local Payment Methods**
- **M-Pesa**: Full Safaricom M-Pesa integration
- **Airtel Money**: Airtel mobile money support
- **Bank Transfers**: Local bank integration (KCB, Equity, Co-op, etc.)
- **PesaLink**: Real-time bank transfers

### **Regulatory Compliance**
- **CBK Compliance**: Central Bank of Kenya requirements
- **KBA Standards**: Kenya Bankers Association standards
- **Data Protection**: Kenya Data Protection Act compliance
- **AML/CFT**: Anti-money laundering and counter-terrorism financing

## 🚀 Quick Start

### **Prerequisites**
- Node.js 18+ 
- PNPM 8+
- Git

### **Installation**
   ```bash
# Clone the repository
git clone https://github.com/sunny/sunny-platform.git
cd sunny-platform

# Install dependencies
pnpm install

# Start development servers
pnpm dev
```

### **Development Commands**
   ```bash
# Start specific applications
pnpm dev:marketing      # Marketing website
pnpm dev:user          # User dashboard  
pnpm dev:business      # Business dashboard
pnpm dev:institutions  # Institutions portal
pnpm dev:admin         # Admin dashboard
pnpm dev:developer     # Developer portal

# Build applications
pnpm build             # Build all
pnpm build:marketing   # Build marketing site
pnpm build:dashboards  # Build all dashboards

# Testing & Quality
pnpm test              # Run all tests
pnpm lint              # Lint all code
pnpm type-check        # TypeScript checking
pnpm format            # Format code
```

## 📦 Shared Packages

### **@sunny/ui**
Shared UI component library with consistent design system.

### **@sunny/kenya-tax**
Kenya-specific tax compliance components and utilities.
- KRA PIN validation
- Tax calculations (VAT, WHT, DST)
- eTIMS integration
- Receipt generation

### **@sunny/shared-types**
TypeScript type definitions shared across all applications.

### **@sunny/api-client**
Unified API client with React hooks for all Sunny APIs.

### **@sunny/auth**
Authentication and authorization utilities.

### **@sunny/utils**
Common utility functions for dates, currency, validation, etc.

## 🛠️ Technology Stack

### **Frontend**
- **Next.js 15**: React framework with App Router
- **React 19**: UI library
- **TypeScript**: Type safety
- **Tailwind CSS**: Styling system
- **Framer Motion**: Animations

### **Development**
- **Turborepo**: Monorepo build system
- **PNPM**: Package manager
- **ESLint**: Code linting
- **Prettier**: Code formatting
- **Jest**: Testing framework

### **Deployment**
- **Vercel**: Frontend deployment
- **Docker**: Containerization
- **Kubernetes**: Orchestration
- **Terraform**: Infrastructure as code

## 🌍 Global Coverage

- **190+ Countries**: Worldwide payment processing
- **135+ Currencies**: Multi-currency support
- **20+ Payment Methods**: Cards, mobile money, crypto, bank transfers
- **Sub-minute Settlement**: Instant settlement capabilities
- **PCI DSS Level 1**: Enterprise-grade security

## 🔒 Security & Compliance

- **PCI DSS Level 1**: Payment card industry compliance
- **SOC 2 Type II**: Security and availability
- **ISO 27001**: Information security management
- **GDPR**: EU data protection compliance
- **Kenya DPA**: Kenya Data Protection Act compliance

## 📊 Business Focus

### **Target Markets**
1. **Kenya** (Primary) - Home market with full regulatory compliance
2. **East Africa** (Secondary) - Tanzania, Uganda, Rwanda expansion
3. **Global** (Tertiary) - Worldwide coverage for diaspora and international businesses

### **Customer Segments**
- **Individuals**: Personal payments and remittances
- **SMEs**: Small and medium enterprises
- **Large Enterprises**: Corporate payment solutions
- **Financial Institutions**: Banks, SACCOs, MFIs
- **Government**: Public sector payment solutions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary software. All rights reserved.

## 📞 Contact

- **Website**: [sunnypayments.com](https://sunnypayments.com)
- **Email**: hello@sunnypayments.com
- **Phone**: +254 (0) 700 000 000
- **Address**: Nairobi, Kenya

---

**Built with ❤️ in Kenya 🇰🇪 for the world 🌍**