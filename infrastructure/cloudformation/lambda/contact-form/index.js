const {
    DynamoDBClient
  } = require("@aws-sdk/client-dynamodb");
  
  const {
    DynamoDBDocumentClient,
    PutCommand
  } = require("@aws-sdk/lib-dynamodb");
  
  const {
    SNSClient,
    PublishCommand
  } = require("@aws-sdk/client-sns");
  
  const dynamoClient = new DynamoDBClient({});
  
  const dynamodb =
    DynamoDBDocumentClient.from(dynamoClient);
  
  const sns = new SNSClient({});
  
  exports.handler = async (event) => {
  
      try {
  
          console.log(
            "Received Event:",
            JSON.stringify(event)
          );
  
          const body = JSON.parse(event.body);
  
          if (
            !body.name ||
            !body.email ||
            !body.message
          ) {
  
              return {
  
                  statusCode: 400,
  
                  headers: {
  
                      "Access-Control-Allow-Origin": "*",
  
                      "Access-Control-Allow-Headers": "*",
  
                      "Access-Control-Allow-Methods": "*"
                  },
  
                  body: JSON.stringify({
  
                      error: "All fields are required"
                  })
              };
          }
  
          const item = {
  
              messageId:
                Date.now().toString(),
  
              name: body.name,
  
              email: body.email,
  
              message: body.message,
  
              createdAt:
                new Date().toISOString()
          };
  
          await dynamodb.send(
  
              new PutCommand({
  
                  TableName:
                    process.env.TABLE_NAME,
  
                  Item: item
              })
          );
  
          await sns.send(
  
              new PublishCommand({
  
                  TopicArn:
                    process.env.SNS_TOPIC_ARN,
  
                  Subject:
                    "New Portfolio Contact Message",
  
                  Message:
                    "Name: " + body.name +
                    "\n\nEmail: " + body.email +
                    "\n\nMessage:\n" +
                    body.message
              })
          );
  
          return {
  
              statusCode: 200,
  
              headers: {
  
                  "Access-Control-Allow-Origin": "*",
  
                  "Access-Control-Allow-Headers": "*",
  
                  "Access-Control-Allow-Methods": "*"
              },
  
              body: JSON.stringify({
  
                  message:
                    "Message sent successfully"
              })
          };
  
      } catch (error) {
  
          console.error(error);
  
          return {
  
              statusCode: 500,
  
              headers: {
  
                  "Access-Control-Allow-Origin": "*"
              },
  
              body: JSON.stringify({
  
                  error:
                    "Failed to process request"
              })
          };
      }
  };
  