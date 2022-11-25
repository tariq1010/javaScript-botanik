import { Protocols } from "./constant/common";
import { AbiItem } from "web3-utils";

const queryString = require("query-string");

export class CommonUtility {
  static currencyFormat(value, currency) {
    if (Number.isNaN(value || 0)) {
      return value;
    }
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency || "USD",
    }).format(value || 0);
  }

  static isNotEmpty(item) {
    return (
      item !== undefined && item !== null && item !== "" && item.length !== 0
    );
  }

  static truncateString(text, ellipsisString) {
    return (text || "").length > ellipsisString
      ? `${text.substring(0, ellipsisString)}...`
      : text;
  }

  static numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  static objectToParams(obj) {
    const str = queryString.stringify(obj);
    return str;
  }

  static toTitleCase(phrase) {
    return phrase
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  static timeoutPromise(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  static roundNumber(num, decimals = 6) {
    const t = 10 ** decimals;
    let result = Math.round((num + Number.EPSILON) * t) / t;
    if (num < 0) {
      result *= -1;
    }
    return result;
  }

  static decimalConverter(number, exponent) {
    const decimals = (number * 10 ** exponent).toFixed(0).toString();
    return decimals;
  }

  static addressConvertor(address) {
    if ((address || "").length < 10) {
      return address || "";
    }
    return `${address.slice(0, 4)}...${address.slice(address.length - 6)}`;
  }

  static symbolConvertor(symbol) {
    switch (symbol) {
      case "Cake-LP":
        return "CTZN/BUSD Cake-LP";
      case "UNI-V2":
        return "CTZN/USDC UNI-LP";

      default:
        return symbol;
    }
  }

  static nameConvertor(name, protocol = Protocols.ethereum.name) {
    switch (name) {
      case "Pancake LPs":
        return "CTZN/BUSD Cake-LP";
      case "UNI-V2":
      case "Uniswap V2":
        return "$CTZN / ETH Uni-LP";
      case "Totem Earth Systems":
        return protocol === Protocols.ethereum.name
          ? "CTZN ERC Staking"
          : "CTZN BSC Staking";
      default:
        return name;
    }
  }

  static numFormatter(num) {
    if (!num) return num;
    if (num > 999 && num < 1000000) {
      return `${(num / 1000).toFixed(1)}K`; // convert to K for number from > 1000 < 1 million
    }
    if (num > 1000000) {
      return `${(num / 1000).toFixed(1)}K`; // convert to M for number from > 1 million
    }
    if (num > 1 && num < 900) {
      console.log("num", num);
      return num.toFixed(0); // if value < 1000, nothing to do
    }
    if (num < 0) {
      return num.toFixed(4);
    }
    return num;
  }

  static contract(web3, abi, address) {
    return new web3.eth.Contract(abi as AbiItem[], address);
  }
  static round(x) {
    if (x) {
      return x.toFixed(5).replace(/\.?0*$/g, "");
    } else {
      return "00.00";
    }
  }
  static toWei(decimals) {
    switch (decimals) {
      case "1":
        return "wei"
      case "3":
        return "Kwei"
      case "6":
        return "mwei"
      case "9":
        return "gwei"
      case "12":
        return "szabo"
      case "18":
        return "ether"
      case "21":
        return "kether"
      case "24":
        return "mether"
      case "27":
        return "gether"
      case "30":
        return "tether"
      default:
        return "ether"
    }
  }

  static getNonce = async (web3: any,account: any) => {
    const nonce = await web3.eth.getTransactionCount(account);
    return nonce;
  };

  static getGasForTxn = async (web3: any,data: any, to: any, from: any) => {
    const nonce = await this.getNonce(web3, from);
    const gasLimit = await web3.eth.estimateGas({
        "from"      : from,       
        "nonce"     : nonce, 
        "to"        : to,
        "data"      : data
    })
    const gasPrice = await web3.eth.getGasPrice();
    const totalGas = Number(gasPrice) * gasLimit;
    return totalGas;
     };
  
}