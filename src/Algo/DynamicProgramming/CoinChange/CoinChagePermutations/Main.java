import java.util.Scanner;

public class Main {

    public static void main(String[] args) throws Exception {
        Scanner scn = new Scanner(System.in);
        int numberOfCoins = scn.nextInt();
        int[] coins = new int[numberOfCoins];
        for (int i = 0; i < coins.length; i++) {
            coins[i] = scn.nextInt();
        }
        int amount = scn.nextInt();
        scn.close();
        int[] dp = new int[amount + 1];
        dp[0] = 1;
        for (int i = 1; i <= amount; i++) {
            for (int j = 0; j < coins.length; j++) {
                int coin = coins[j];
                if (coin <= i) {
                    int rest = i - coin;
                    dp[i] += dp[rest];
                }
            }
        }
        System.out.println(dp[amount]);
    }
}
