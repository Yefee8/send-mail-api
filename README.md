# Documentation

## Get started

For getting started, you might be create an http request. 
For example (For JavaScript axios):

```
axios.post('https://yefee-send-mail-api.herokuapp.com', {{
from: 'auto8mailer@gmail.com',
pass: 'blahblahblah123'
to:"findikliyavuzefe@gmail.com",
title: "Hi!",
html: "<h1 style='font-size:300px; color:crimson;'>heeei!</h1>"
}})
```
if you don't want using you're own mail, you don't want to use the from & pass parameters.

## Explaining the parameters

### from
from param is sender's gmail, if you don't want to use you're own mail, don't use this.
(from must be string and gmail.)

### pass
pass param is sender's password(don't worry we don't use this :D), if you don't use from param, don't use that too.
(pass must be string)

### to
to param is e-mail of the person receiving the e-mail.
(to must be string.)

### title
title param is subject of mail.
(title must be string)

### html
html param is html of mail( you can write html or just text)
(html must be string)
