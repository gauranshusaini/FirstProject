public class DisplayAccCtrlClass {
    @AuraEnabled(cacheable=true)
    public static List<Account> firstMethod(){
        
        return [SELECT Name,Type,Rating,Industry FROM Account ];
        
    }
    
    @AuraEnabled(cacheable=true)
    public static List<Contact> secondMethod(){
        return [SELECT FirstName,LastName,Phone,Email FROM Contact];
    }

}