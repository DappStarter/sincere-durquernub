require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter occur slab chaos note mushroom purity imitate private frame tail'; 
let testAccounts = [
"0xe67f05874fa34b61f75fb0a2d101d2f38b930810cb6656298e4436c31fa8e55b",
"0x7c2a6468568e55693e2f604b8102f58cd5f1e1e6cfe0d8aa01e55b2d4c2c2e10",
"0xfa26012f2aec26171c7f6936d705f66d906b34637206c5cd7bd2f14e7d213993",
"0x839f5c33c914c7c3f72123b80cd7b8c0de3d027e3cb9232ea050827981e9712d",
"0xd1e6b0eaf8c5c1d59a374675a79a9671c5a6c85b00a4b63352f244080fc5a957",
"0xae435a0c03a6b0840be98a8fc954808dc5e6459d081f6412925d2f8d31dc3552",
"0x47153f3c0873208ae8b3f0b305379e1c921e66df000d949111c257960ee98cf0",
"0x634ec892564cba9123f1a313f039f529a1d176e8e42f0fc0aaf5e4a1f01295a4",
"0xdf95a958f6e8b108b7149e23d811b275c637110c2af6cea685521c0301a7f746",
"0x94d8066c0cc86766c9b1bff153b35b0a3c3d31da562c0fd81e8326eb16a6ffc1"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
