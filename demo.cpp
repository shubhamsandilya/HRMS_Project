int getAns(vector<int>& A, int n, int ind, int buy, int cap,vector<vector<vector<int>>>& dp ){
        if(ind==n || cap==0) return 0; //base case
        if(dp[ind][buy][cap]!=-1) return dp[ind][buy][cap];
        int profit;
        if(buy==0){// We can buy the stock
            profit = max(0+getAns(A,n,ind+1,0,cap,dp), -A[ind] + getAns(A,n,ind+1,1,cap,dp));
        }
        if(buy==1){// We can sell the stock
            profit = max(0+getAns(A,n,ind+1,1,cap,dp),A[ind] + getAns(A,n,ind+1,0,cap-1,dp));
        }
        return dp[ind][buy][cap] = profit;
    }
    int maxProfit(int k, vector<int>& A) {
        k=B;
        int n = A.size();
        vector<vector<vector<int>>> dp(n,vector<vector<int>>(2,vector<int>(k+1,-1)));
        return getAns(A,n,0,0,k,dp);
    }