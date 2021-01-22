require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good close blue spot shock rare remember horn hunt infant orange slot'; 
let testAccounts = [
"0x90b62d262d296a4dad011fe57f580bf5798acd486022b5468cf985005ebbba22",
"0x65fcaaab5a2aa59150a340bf7b472344c827ed4474f81e77ffade29e472e515a",
"0x85588ef8552006fbd4c904f164b2187dcd373792c552550533ddbb7f817789a8",
"0x96a15d1b053fce48174c997e307cfa495d661cc06a93dc0e67aa3a9ee8cdd3d1",
"0x376347aa88304acf6d4ed493a4a47aaf8c0be032d7b343a30bc02000de6fd8af",
"0xd2f3492de4b0668280f72131136ccf042abc95a640bea9ce9249beae793ab6bb",
"0x4a9039cfb90218b6d5df3238727e9359fc5358572320b816f1cb6433b5ffdd49",
"0x0a49b2e59dd657bac3593f463578cf52ac364cc8d2713a80979a75125e15adca",
"0x67944169588077de65a2b2254b743a1f4cab26e98502de31e37c066818ff05c4",
"0xbf5a3eaa0bf22021d1913232979898d4c00ad87b807b858b7220cae455ab6ec2"
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
