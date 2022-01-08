# challenge-17-ibm-assistant

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/wutchara/challenge-17-ibm-assistant?color=56BEB8">
  <img alt="Github language count" src="https://img.shields.io/github/languages/count/wutchara/challenge-17-ibm-assistant?color=56BEB8">
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/wutchara/challenge-17-ibm-assistant?color=56BEB8">
  <img alt="License" src="https://img.shields.io/github/license/wutchara/challenge-17-ibm-assistant?color=56BEB8">
  <img alt="Github issues" src="https://img.shields.io/github/issues/wutchara/challenge-17-ibm-assistant?color=56BEB8" />
  <img alt="Github forks" src="https://img.shields.io/github/forks/wutchara/challenge-17-ibm-assistant?color=56BEB8" />
  <img alt="Github stars" src="https://img.shields.io/github/stars/wutchara/challenge-17-ibm-assistant?color=56BEB8" />
</p>
<br>

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
    </tr>
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
    </tr>
    <tr>
        <td> /start </td> <td> <b>GET</b> </td> <td>  </td>
    </tr>
    <tr>
        <td> /stop </td> <td> <b>POST</b> </td>
        <td> 
            <pre>
            {
                "session_id": "{{SESSION_ID}}"
            }
            </pre>
        </td>
    </tr>
</table>
