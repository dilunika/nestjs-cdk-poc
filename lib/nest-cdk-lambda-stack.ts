import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as gateway from 'aws-cdk-lib/aws-apigateway';

export class NestCdkLambdaStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const nodeLayer = new lambda.LayerVersion(this, 'node-layer', {
      compatibleRuntimes: [
          lambda.Runtime.NODEJS_14_X,
          lambda.Runtime.NODEJS_12_X
      ],
      code: lambda.Code.fromAsset('layers/nodejs/node_modules')
    });

    const apiLambda = new lambda.Function(this, 'nest-api-lambda', {
      runtime: lambda.Runtime.NODEJS_14_X,
      code: lambda.Code.fromAsset('api/dist'),
      handler: 'index.handler',
      layers: [nodeLayer],
      environment: {
        NODE_PATH: "$NODE_PATH:/opt",
      }
    });

    new gateway.LambdaRestApi(this, 'nest-api', {
      handler: apiLambda
    });
  }
}
