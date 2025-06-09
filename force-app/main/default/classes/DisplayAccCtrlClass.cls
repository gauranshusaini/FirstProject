public class DisplayAccCtrlClass {
    @AuraEnabled(cacheable=true)
    public static List<Account> firstMethod(){
        
        return [SELECT Name,Type,Rating,Industry FROM Account ];
        
    }

}