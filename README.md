# challenge-17-ibm-assistant

## Before run project, Please create `.env`
```
WATSON_URL={url}
WATSON_ASSISTANT_API_KEY={api_key}
WATSON_VERSION={version}
WATSON_ASSISTANT_ID={id}
# WATSON_ASSISTANT_URL={assistant_url}
# WATSON_ASSISTANT_NAME=my first assistant
```


```bash
npm run start:dev
```

Getting Started: https://cloud.ibm.com/docs/assistant?topic=assistant-getting-started#getting-started-tutorial

IBM Assistant Document: https://cloud.ibm.com/apidocs/assistant/assistant-v2?code=node#message

<be />

---

---

## Sample

- Create session
![image info](https://github.com/wutchara/challenge-17-ibm-assistant/blob/main/images/1_create_session.PNG)

- Test send message: **`Hello`**
![image info](https://github.com/wutchara/challenge-17-ibm-assistant/blob/main/images/2_say_hello.PNG)

- Test send message: **`BYE`**
![image info](https://github.com/wutchara/challenge-17-ibm-assistant/blob/main/images/3_bye.PNG)

- Remove session
![image info](https://github.com/wutchara/challenge-17-ibm-assistant/blob/main/images/4_remove_session.PNG)

---

---

<br />

## API specification

<table>
    <tr>
        <td> Endpoint </td> <td> Method </td> <td> Body </td>
    </tr>
    <tr>
        <td> / </td> <td> <b>GET</b> </td> <td>  </td>
    <td>
    <tr>
        <td> /ask </td> <td> <b>POST</b> </td>
        <td> 
            <pre>
            {
                "input": "{{MESSAGE}}",
                "session_id": "{{SESSION_ID}}"
            }
            </pre>
        </td>
    <td>
    <tr>
        <td> /start </td> <td> <b>GET</b> </td> <td>  </td>
    <td>
    <tr>
        <td> /stop </td> <td> <b>POST</b> </td>
        <td> 
            <pre>
            {
                "session_id": "{{SESSION_ID}}"
            }
            </pre>
        </td>
    <td>
</table>
