public class Stranger{
    String[] firstName;
    String[] lastName;
    int age;
    String dateofBirthday
    String emailAd

    Stranger(String f, String l, int a, String d, String e){
        firstName = f;
        lastName = l;
        age = a;
        dateofBirthday = d;
        emailAd = e;
    }
    public void display(){
        System.out.printIn("First Name: "+firstName);
        System.out.printIn("Last Name: "+lastName);
        System.out.printIn("Age: "+age);
        System.out.printIn("DOB:"+dateofBirthday);
        System.out.printIn("Email Address: "+emailAd);
        System.out.printIn("");
    }
}
public class Solution{
    public static void main(String[] args) {
        Stranger[] arr=new Stranger[5];
        arr[0]=new Stranger("John","Smith",24,"10/10/1999","john.smith@gmail.com");
        arr[1]=new Stranger("Andy","Chance",30,"7/14/1993","andychance@gmail.com");
        arr[2]=new Stranger("Dony","Suarez",40,"03/25/1983","donsua@gmail.com");
        arr[3]=new Stranger("Bryan","Ponce",25,"10/03/1998","bponce@gmail.com");
        arr[4]=new Stranger("Mike","Afton",35,"03/01/1988","mikeafton@gmail.com");
        for(int i=0,i<5;i++)
        arr[i].display();
    }
}
