# ZMS

I am a twelve year old living in India and I designed this app to help me with another app I am building which is a food delivery app. I have uploaded the open source code hoping that many people like me will want to use this app for OTP generation and sending! This is a documentation on how to setup, install and use the app...

![](https://raw.githubusercontent.com/Zo-Bro-23/zms/master/tutorial/My%20pic.jpg)



Don't trust your customers? Afraid they'll give you fake phone numbers? What do you do? Verify their phone numbers with OTPs, of course! But how do you do that? How can your web app or your mobile app make your phone send an SMS to their phone? There are services that do that, but why would you wanna waste so much money?? 

ZMS is an application designed to get rid of all those problems. You can use your own phone to send these OTPs, using ZMS. By the way, ZMS stands for Zohan Messaging Services if you're wondering. I **DID** not copy ZMS messaging app. ***Obviously!*** You can set up your own web API with just a few simple steps, so your OTPs won't interfere with anybody else's! Here are the steps to do so:

### Download and install Node.js from its official website

![Screenshot (140)](https://raw.githubusercontent.com/Zo-Bro-23/zms/master/tutorial/Screenshot%20(140).png)

### Download my program folder as a zip file

![Screenshot (136)](https://raw.githubusercontent.com/Zo-Bro-23/zms/master/tutorial/Screenshot%20(136).jpg)

### Extract the ZIP file

![Screenshot (137)](https://raw.githubusercontent.com/Zo-Bro-23/zms/master/tutorial/Screenshot%20(137).jpg)

### Open your command line (Command prompt or Powershell on Windows, Terminal on Linux and Mac)

### Type in the command ```cd \yourDownloadFolder\zms-master\backend``` on windows or the command ```cd ~/yourDownloadFolder/zms-master/backend``` on Linux or Mac - replace ```yourDownloadFolder``` with the complete file path of the extracted folder

![Screenshot (138)](https://raw.githubusercontent.com/Zo-Bro-23/zms/master/tutorial/Screenshot%20(138).jpg)

![Screenshot (139)](https://raw.githubusercontent.com/Zo-Bro-23/zms/master/tutorial/Screenshot%20(139).png)

### If you do not have an account in Vercel, go to https://vercel.com and create one

![](https://raw.githubusercontent.com/Zo-Bro-23/zms/master/tutorial/Screenshot%20(141).jpg)

### Type in the command ```npm i -g vercel``` in your command line

### You may be prompted to type in your login information

![](https://raw.githubusercontent.com/Zo-Bro-23/zms/master/tutorial/Screenshot%20(142).png)

### You should still have a command line at your extracted folder

### If so, type in the command 

### If not, use ```cd yourExtractedFolderPath/backend/``` replacing yourExtractedFolderPath with your full path of the extracted folder

### Type in the command ```npm install```

![](https://raw.githubusercontent.com/Zo-Bro-23/zms/master/tutorial/Screenshot%20(143).png)

### Type in the command ```vercel``` and give the necessary details when prompted

![](https://raw.githubusercontent.com/Zo-Bro-23/zms/master/tutorial/Screenshot%20(144).png)

### Copy the ```production url``` to your clipboard

![](https://raw.githubusercontent.com/Zo-Bro-23/zms/master/tutorial/Screenshot%20(145).png)

### Download my app from <a href= "https://github.com/Zo-Bro-23/zms/raw/master/frontend/ZMS.apk">here</a>

![](https://raw.githubusercontent.com/Zo-Bro-23/zms/master/tutorial/Screenshot%20(163).png)

### Copy the file to your phone through your preferred method and open it (I can't upload the app to Google Play Store as it violates their policy by sending SMSs in the background)

### Open the file, you may have to give permissions to the app you are trying to open it from

![](https://raw.githubusercontent.com/Zo-Bro-23/zms/master/tutorial/Screenshot_20200902-121218.jpg)![](https://raw.githubusercontent.com/Zo-Bro-23/zms/master/tutorial/Screenshot_20200902-121250.jpg)![](https://raw.githubusercontent.com/Zo-Bro-23/zms/master/tutorial/Screenshot_20200902-121255.jpg)

### Open the application, and type in the domain you copied in an earlier step, leaving the ```https://``` out

![](https://raw.githubusercontent.com/Zo-Bro-23/zms/master/tutorial/Screenshot_20200825-182808.jpg)![](https://raw.githubusercontent.com/Zo-Bro-23/zms/master/tutorial/Screenshot_20200825-182711.jpg)![](https://raw.githubusercontent.com/Zo-Bro-23/zms/master/tutorial/Screenshot_20200825-182714.jpg)![](https://raw.githubusercontent.com/Zo-Bro-23/zms/master/tutorial/Screenshot_20200825-182729.jpg)![](https://raw.githubusercontent.com/Zo-Bro-23/zms/master/tutorial/Screenshot_20200825-182754.jpg)

### And, you're done. Just remember one thing: ***Don't close the app*** 

### Go to ```https://yourDomainName/receive?phone=yourPhoneNumber&otp=yourOTP``` and, you're all set. The SMS will go to the ```yourPhoneNumber``` with the OTP ```OTP```

![](https://raw.githubusercontent.com/Zo-Bro-23/zms/master/tutorial/Screenshot%20(164).png)