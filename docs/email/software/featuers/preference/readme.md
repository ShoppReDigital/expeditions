# Feature: [Email Preference]() for Handling Unsubscribe & Users can Choose email preference

writing article in the context of Engage Platform



## Test Cases - Fair

### Assumptions

- only one user exists, that is user@example.com

### Base Process 1:
- Setup engage platform

### Base Process 2:

- user_welcome email template created using engage-cli
- user_welcome email will be sent to email: user@example.com


### Fair Flow 1: Customer Select Preference from UI
- BaseProcess1
- BaseProcess2
- user@email.com visits https://engage.example.com/preferences
- user click deselect user_welcome email
- our system will try to send a email, it will get terminated and in email_logs table entry will be there, amazon message_id should not be there

## Test Cases - Edge

### Flow 1 - Fair use case: