@isTest
public class DisplayAccCtrlTest {
    @isTest
    public static void firstTestMethod(){
        
        Account acc = new Account();
        acc.Name = 'Test Account' ;
        acc.Type = 'Prospect' ;
        acc.Rating = 'Hot';
        acc.Industry ='Banking' ;
        
        insert acc ; 
        
        DisplayAccCtrl.firstMethod();
        
    }

}