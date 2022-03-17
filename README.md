# Nest + Lambda + CDK PoC

Proof of Concept project to expose API written in Nest JS deployed through AWS Lambda + API GW using AWS CDK as IaC
framework.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Steps to Deploy
1. Install dependencies (for the first time or when dependencies changed)
```shell
yarn deps
```

2. Deploy to AWS
```shell
yarn deploy --profile <aws profile>
```
