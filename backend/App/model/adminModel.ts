const AdminLogin = async (wallet_address:any) => {
    try {
        const data=String(process.env.WALLET_ADDREES).toLowerCase() === (wallet_address).toLowerCase();
        if (!data) throw "unauthorized attempt";
      else return data;
    } catch (error) {
      return {
        error: error,
      };
    }
  };
  export={AdminLogin}