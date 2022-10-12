var data = [{"id":1,"first_name":"Gayle","last_name":"Lefeuvre","email":"glefeuvre0@odnoklassniki.ru","gender":"Female","ip_address":"184.46.153.91"},
{"id":2,"first_name":"Celinda","last_name":"Dobrovsky","email":"cdobrovsky1@earthlink.net","gender":"Female","ip_address":"45.6.202.43"},
{"id":3,"first_name":"Judith","last_name":"Grantham","email":"jgrantham2@g.co","gender":"Female","ip_address":"64.141.161.16"},
{"id":4,"first_name":"Irving","last_name":"O'Hartagan","email":"iohartagan3@friendfeed.com","gender":"Polygender","ip_address":"57.108.219.12"},
{"id":5,"first_name":"Klarika","last_name":"Woolham","email":"kwoolham4@merriam-webster.com","gender":"Female","ip_address":"169.11.56.229"},
{"id":6,"first_name":"Tobie","last_name":"Thaxter","email":"tthaxter5@uiuc.edu","gender":"Male","ip_address":"180.201.18.147"},
{"id":7,"first_name":"Dom","last_name":"Triplow","email":"dtriplow6@g.co","gender":"Male","ip_address":"243.27.218.145"},
{"id":8,"first_name":"Isabella","last_name":"Reddell","email":"ireddell7@skyrock.com","gender":"Female","ip_address":"146.72.35.15"},
{"id":9,"first_name":"Melisent","last_name":"Cullrford","email":"mcullrford8@tripod.com","gender":"Female","ip_address":"86.69.110.65"},
{"id":10,"first_name":"Dalis","last_name":"Sawnwy","email":"dsawnwy9@pcworld.com","gender":"Male","ip_address":"133.240.132.33"}]
        
for (i=0;i<=9;i++)
{ 
console.log(data[i]);    
}
console.log(data.length);
for( x of data)
{
    console.log(x.first_name)
    console.log(x.id);
    console.log(x.email);
}