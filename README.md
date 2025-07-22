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
Mnemonic: swallow want morning impact drift problem version focus chimney again worth address
Address: 0x5AB78171430243aC8393361020C9065499ccB7D7
Private Key: 0x4023b5b383483283b81a93b2bffc59c4c264b4faddb406812e03fb6e9f5959c4
```

#### `help`

Shows available commands and usage information.

```bash
evm-cli help
```

## Importing Private Key into Wallets

### MetaMask

**Option 1: Import via Private Key**
1. **Open MetaMask** and click the account circle in the top right
2. **Select "Import Account"** from the dropdown menu
3. **Choose "Private Key"** as the import type
4. **Paste your private key** (the 0x... string from the CLI output)
5. **Click "Import"** - your wallet will be added to MetaMask

**Option 2: Import via Seed Phrase**
1. **Open MetaMask** and click the account circle in the top right
2. **Select "Import using Secret Recovery Phrase"**
3. **Enter your 12-word mnemonic** (the word phrase from the CLI output)
4. **Set a password** and click "Import"

### Brave Wallet

**Import via Seed Phrase** (Recommended)
1. **Open Brave Wallet** (Menu → More Tools → Crypto Wallets)
2. **Click "Already have a wallet?"**
3. **Select "Import wallet"**
4. **Enter your 12-word mnemonic** (the word phrase from the CLI output)
5. **Set a password** and click "Continue"

*Note: Brave Wallet does not support direct private key import. Use the mnemonic seed phrase instead.*

## Security Warning

⚠️ **Important**: The generated mnemonic and private keys are displayed in plain text. In a production environment, consider:

- Storing seed phrases and private keys securely
- Using environment variables or secure storage
- Never sharing or committing mnemonics/private keys to version control
- Only import seed phrases you generated yourself
- Never share your mnemonic or private key with anyone
- Consider these test wallets only - don't store significant funds
- Use hardware wallets for production/mainnet funds
- Both the mnemonic and private key give complete control over the wallet

## Dependencies

- [Viem](https://viem.sh/) - TypeScript interface for Ethereum
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [tsx](https://github.com/esbuild-kit/tsx) - TypeScript execution engine
- Node.js (ES modules support required)
