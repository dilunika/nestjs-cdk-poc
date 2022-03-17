#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { NestCdkLambdaStack } from '../lib/nest-cdk-lambda-stack';

const app = new cdk.App();
new NestCdkLambdaStack(app, 'NestCdkLambdaStack', {
  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
});