// Type definitions for Web3.js v1.0.0-beta.18
// Project: https://github.com/ethereum/web3.js
// Definitions by: Shannon Duncan <https://github.com/shadowcodex>, Halo Platform <https://github.com/haloplatform>
// Definitions: https://github.com/haloplatform/web3js-typings

/************************************************
*                                               *
*          Web3.js v1.0.0-beta.18 API           *
*                                               *
************************************************/


declare namespace version {
    const api: string;
    const node: string;
    const network: string;
    const ethereum: string;
    const whisper: string;
}

declare function isConnected(): boolean;

// declare function setProvider(new web3.providers.HttpProvider('http://localhost:8545')): object;

declare const currentProvider: object;

declare function reset(keepIsSyncing: boolean): undefined;

declare function sha3(value: string, options?:any): string;

declare function toHex(value: string): string;
declare function toHex(value: number): string;
declare function toHex(value: object): string;
declare function toHex(value: any[]): string;
declare function toHex(value: any): string; //catch bignumber

declare function toAscii(hexString: string): string;

declare function fromAscii(asciiString: string, padding?:number): string;

declare function toDecimal(hexString: string): number;

declare function fromDecimal(number: number): string;
declare function fromDecimal(number: string): string;

// Units for fromWei
// kwei/ada
// mwei/babbage
// gwei/shannon
// szabo
// finney
// ether
// kether/grand/einstein
// mether
// gether
// tether
declare function fromWei(number: number, unit: string): string;
declare function fromWei(number: string, unit: string): string;
declare function fromWei(number: any, unit: string): any;