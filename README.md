# Sunny Payment Gateway - Monorepo

A comprehensive TypeScript monorepo for the Sunny Payment Gateway platform.

## Architecture

```
sunny-platform/
├── apps/                    # Applications
│   └── marketing/          # Marketing website (Next.js 15)
├── packages/               # Shared packages
│   ├── shared/            # UI components, types, utilities
│   ├── core-sdk/          # Payment gateway SDK
│   └── auth/              # Authentication package
```

## Quick Start

```bash
# Install dependencies
npm install

# Build all packages
npm run build

# Start development
npm run dev
```

## Packages

- **@sunny/shared** - Shared UI components and utilities
- **@sunny/core-sdk** - Core payment processing SDK
- **@sunny/auth** - Authentication package

## Applications

- **Marketing Site** - Main website (sunnypayments.com)
- **User Dashboard** - Personal dashboard (app.sunnypayments.com)
- **Business Dashboard** - Business management (business.sunnypayments.com)
- **Developer Portal** - API docs and tools (developers.sunnypayments.com)

## Features

- 20+ payment methods globally
- 190+ countries, 135+ currencies
- Real-time fraud detection
- Instant settlement
- PCI DSS compliance

Built with TypeScript, Next.js, and modern tooling.