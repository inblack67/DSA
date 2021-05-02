import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        int n = scn.nextInt();
        int k = scn.nextInt();
        if (n < k || k == 0 || n == 0) {
            System.out.println(0);
            return;
        }

        long[][] dp = new long[k + 1][n + 1];

        for (int t = 1; t <= k; t++) {
            for (int p = 1; p <= n; p++) {
                if (p < t) {
                    // teamSize more than peeps => senseless
                    dp[t][p] = 0;
                } else if (p == t) {
                    // 4 peeps in 4 teams => 1 way => 1 peep in each team
                    dp[t][p] = 1;
                } else {
                    // peeps > teamSize
                    dp[t][p] = dp[t - 1][p - 1] + dp[t][p - 1] * k;
                }
            }
        }

        System.out.println(dp[k][n]);

    }

}
