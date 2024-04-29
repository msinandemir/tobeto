package org.example._007classes;

import java.util.ArrayList;
import java.util.List;

public class Classes {
    public static void main(String[] args) {
    /*    CreditManager creditManager = new CreditManager();
        creditManager.calculate();
        creditManager.add();*/

        MortgageManager mortgageManager = new MortgageManager();
       /* mortgageManager.add();*/
        mortgageManager.calculate();

        /*CreditManager[] creditManagers = new CreditManager[2];
        creditManagers[0] = new MortgageManager();
        creditManagers[1] = new VehicleManager();*/

        List<CreditManager> creditManagers = new ArrayList<>();
        creditManagers.add(new MortgageManager());
        creditManagers.add(new VehicleManager());

      /*  for (int i = 0; i < creditManagers.length; i++) {
            creditManagers[i].calculate();
        }*/

        for (CreditManager creditManager : creditManagers){
            creditManager.calculate();
        }
    }
}
