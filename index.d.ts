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

// Units for toWei
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
declare function toWei(number: number, unit: string): string;
declare function toWei(number: string, unit: string): string;
declare function toWei(number: any, unit: string): any;

declare function toBigNumber(numberOrHexString: number): any;
declare function toBigNumber(numberOrHexString: string): any;

declare function isAddress(HexString: string): boolean;

declare namespace net {
    const listening: boolean;
    const peerCount: number;
}

declare namespace eth {
    let defaultAccount: string;
    let defaultBlock: number|string; 
    const syncing: object|boolean;
    function isSyncing(callback: (error: string, sync: object) => void): void;
    const coinbase: string;
    function getCoinbase(callback: (error: string, result: any) => void): void;
    const mining: boolean;
    function getMining(callback: (error: string, result: any) => void): void;
    const hashrate: number;
    function getHashrate(callback: (error: string, result: any) => void): void;
    const gasPrice: any;
    function getGasPrice(callbacK: (error: string, result: any) => void): void;
    const accounts: string[];
    function getAccounts(callback: (error: string, result: any) => void): void;
    const blockNumber: number;
    function getBlockNumber(callback: (error: string, result: any) => void): void;
    function register(addressHexString: string, callback?: (error: string, result: any) => void): void;
    function unregister(addressHexString: string, callback?: (error: string, result: any) => void): void;
    function getBalance(addressHexString: string, defaultBlock?: number|string, callback?: (error: string, result: any) => void ): string;
    function getStorageAt(addressHexString: string, position: number, defaultBlock?: number| string, callback?: (error: string, result: any) => void): string;
    function getCode(addressHexString: string, defaultBlock?: number|string, callback?: (error: string, result: any) => void ): string;
    interface blockObject {
        number: number,
        hash: string,
        parentHash: string,
        nonce: string,
        sha3Uncles: string,
        logsBloom: string,
        transactionsRoot: string,
        stateRoot: string,
        miner: string,
        difficulty: any,
        totalDifficulty: any,
        extraData: string,
        size: number,
        gasLimit: number,
        gasUsed: number,
        timestamp: number,
        transactions: any[],
        uncles: any[],
    }
    function getBlock(blockHashOrBlockNumber: string|number, returnTransactionObjects: boolean, callback?: (error: string, result: any) => void): blockObject;
    function getBlockTransactionCount(hashStringOrBlockNumber: string|number, callback?: (error: string, result: any) => void): number;
    function getUncle(blockHashOrBlockNumber: string|number, uncleNumber: number, returnTransactionObjects?: boolean, callback?: (error: string, result: any) => void): blockObject;
    interface transactionObject {
        hash: string,
        noonce: number,
        blockHash: string,
        blockNumber: number,
        transactionIndex: number,
        from: string,
        to: string,
        value: any,
        gasPrice: any,
        gas: number,
        input: string,
    }
    function getTransaction(transactionHash: string, callback?: (error: string, result: any) => void): transactionObject;
    function getTransactionFromBlock(hashStringOrNumber: string, indexNumber: number, callback?: (error: string, result: any) => void): transactionObject;
    interface transactionReceiptObject {
        blockHash: string,
        blockNumber: number,
        transactionHash: string,
        transactionIndex: number,
        from: string,
        to: string,
        cumulativeGasUsed: number,
        gasUsed: number,
        contractAddress: string,
        logs: any[],
    }
    function getTransactionReceipt(hashString: string, callback?: (error: string, result: any) => void): transactionReceiptObject;
    function getTransactionCount(addressHexString: string, defaultBlock?: number|string, callback?: (error: string, result: any) => void): number;
    interface transactionSendObject {
        from: string,
        to: string,
        value: number|string|any,
        gas: number|string|any,
        gasPrice: number|string|any,
        data: string,
        nonce: number,
    }
    function sendTransaction(transactionObject: transactionSendObject, callback?: (error: string, result: any) => void): string;
    function sendRawTransaction(signedTransactionData: string, callback?: (error: string, result: any) => void): string;
    function sign(address: string, dataToSign: string, callback?: (error: string, result: any) => void): string;
    interface callObject {
        from?: string,
        to: string,
        value: number|string|any,
        gas: number|string|any,
        gasPrice: number|string|any,
        data: string,
        nonce: number,
    }
    function call(callObject: callObject, defaultBlock: number|string, callback?: (error: string, result: any) => void): string;
    interface estimateGasObject {
        from?: string,
        to?: string,
        value?: number|string|any,
        gas?: number|string|any,
        gasPrice?: number|string|any,
        data?: string,
        nonce?: number,
    }
    function estimateGas(callObject: estimateGasObject, callback?: (error: string, result: any) => void): number;
    interface filterObject {
        fromBlock: number|string,
        toBlock: number|string,
        address: string,
        topics: string[],
    }
    interface watchReturnObject {
        logIndex: number,
        transactionIndex: number,
        transactionHash: string,
        blockHash: string,
        blockNumber: number,
        address: string,
        data: string,
        topics: string[]
    }
    interface filterReturnObject {
        get: (callback: (error: string, result: any) => void) => void,
        watch: (callback: (error: string, result: watchReturnObject) => void) => void,
        stopWatching: () => void,
    }
    function filter(filter: string|filterObject): filterReturnObject;
    function contract(abiArray: any[]): any; // returns contract object
    function getCompilers(); // depreciated - don't use
    namespace compile {} // depreciated - don't use
    const namereg: any; // global registrar object

    function sendIBANTransaction(addres: string, ibanAddress: string, value: any);
    
    class iban {
        constructor(address: string);
        fromAddress(address: string): string;
        fromBban(bBan: string): string;
        indirectObject: {
            institution: string,
            identifier: string,
        }
        createIndirect(indirectObject): any;
        isValid(address: string): boolean;
        isDirect(address: string): boolean;
        isIndirect(address: string): boolean;
        checksum(address: string): any;
        institution(address: string): string;
        client(address: string): string;
        address(address: string): string;
        toString(address: string): string;
    }
}

declare namespace db {
    function putString(db: string, key: string, value: string): boolean;
    function getString(db: string, key: string): string;
    function putHex(db: string, key: string, value: string): boolean;
    function getHex(db: string, key: string): string;
}

declare namespace shh {
    interface postObject {
        from: string,
        to: string,
        topics: string[],
        payload: string|number|any,
        priority: number,
        ttl: number,
    }
    function post(object: postObject, callback?: (error: string, result: any) => void): boolean;
    function newIdentity(callback?: (error: string, result: any) => void): string;
    function hasIdentity(identity: string, callback?: (error: string, result: any) => void): boolean;
    function newGroup(); // not implemented
    function addToGroup(); // not implemented

    // todo filter 
    interface filterObject {
        topics: string[],
        to: string,
    }
    interface watchReturnObject {
        from: string,
        to: string,
        expiry: number,
        ttl: number,
        sent: number,
        topics: string[],
        payload: string,
        workProved: number
    }
    interface filterReturnObject {        
        watch: (callback: (error: string, result: watchReturnObject) => void) => void,        
    }
    function filter(filterObject, callback?: (error: string, result: any) => void): filterReturnObject;
}