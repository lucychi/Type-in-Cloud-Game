# Type-Game-Web-App

Client
-	Landing page is a login page. Ask user to login or register.
-	Utilize AWS Cognito for login authentication. First name, last name, phone number and email. AWS provides a feature to allow user will get an authentication link in their email. 
-	Once logged in, user will be taken to the next page that has three buttons.
o	Play game – play the typing game The client will call http://api.quotable.io/random to get an random quote they can type to for 60 seconds. After they finish, the score will but packaged with username and sent to the server
o	Leaderboard – Show the top 10 highest score players. Fetch our server to bring back the data and display it to screen. 
o	Logout – go back to landing page 
-	Client will be hosted on azure web app. 


Server
-	Store user’s information in azure table when they register. Using first name and last name as unique identifiers. Update their highest score every time they complete a round. 
-	Alert system by using AWS Simple Notification System. Whenever a user achieved a score that is in the top 10, send all players that are below that new score a message (email or phone number). 
-	Server will be stored in AWS s3 and using AWS Lambda to run whenever client requests it. Or hosting it on an AWS/Azure VM. 

Resources:
https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SNS.html
https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/using-lambda-functions.html
https://docs.microsoft.com/en-us/azure/azure-functions/functions-reference-node
https://docs.microsoft.com/en-us/azure/cosmos-db/table-storage-how-to-use-nodejs
https://docs.microsoft.com/en-us/azure/storage/blobs/storage-quickstart-blobs-nodejs
