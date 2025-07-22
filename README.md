# EVM CLI

A command-line tool for Ethereum wallet operations.

## Setup

1. Clone or download this project
2. Install dependencies:
   ```bash
   npm install
   ```

## Development

### TypeScript Development

The project is written in TypeScript. Source files are in the `src/` directory.

```bash
# Run directly with tsx (for development)
npm run evm-cli generate-wallet

# Build TypeScript to JavaScript
npm run build
```

## Usage

### Local Development

Test the CLI locally:

```bash
npm run evm-cli generate-wallet
```

### Install Globally

Build and install the CLI globally to use from anywhere:

```bash
npm run build
npm install -g .
```

Then use:

```bash
evm-cli generate-wallet
```

### Commands

#### `generate-wallet`

Generates a new Ethereum wallet with a private key and address.

```bash
evm-cli generate-wallet
```

Output:

```
Generated new wallet:
Address: 0x1234567890123456789012345678901234567890
Private Key: 0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890
```

#### `help`

Shows available commands and usage information.

```bash
evm-cli help
```

## Security Warning

⚠️ **Important**: The generated private keys are displayed in plain text. In a production environment, consider:

- Storing private keys securely
- Using environment variables or secure storage
- Never sharing or committing private keys to version control

## Dependencies

- [Viem](https://viem.sh/) - TypeScript interface for Ethereum
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [tsx](https://github.com/esbuild-kit/tsx) - TypeScript execution engine
- Node.js (ES modules support required)
