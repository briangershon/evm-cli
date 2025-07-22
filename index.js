#!/usr/bin/env node
import { generatePrivateKey, privateKeyToAccount } from 'viem/accounts';
function generateWallet() {
    const privateKey = generatePrivateKey();
    const account = privateKeyToAccount(privateKey);
    const walletInfo = {
        address: account.address,
        privateKey: privateKey
    };
    console.log('Generated new wallet:');
    console.log('Address:', walletInfo.address);
    console.log('Private Key:', walletInfo.privateKey);
    return walletInfo;
}
function showHelp() {
    console.log('Usage: evm-cli <command>');
    console.log('');
    console.log('Commands:');
    console.log('  generate-wallet  Generate a new Ethereum wallet');
    console.log('  help             Show this help message');
}
function main() {
    const args = process.argv.slice(2);
    const command = args[0];
    switch (command) {
        case 'generate-wallet':
            generateWallet();
            break;
        case 'help':
        case '--help':
        case '-h':
            showHelp();
            break;
        default:
            if (!command) {
                showHelp();
            }
            else {
                console.error(`Unknown command: ${command}`);
                console.error('Run "evm-cli help" for usage information.');
                process.exit(1);
            }
    }
}
main();
//# sourceMappingURL=index.js.map