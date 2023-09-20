import * as cdk from 'aws-cdk-lib';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class TestCdkDeployStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'TestCdkDeployQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });

    const testFn = new NodejsFunction(this, 'MyFunction', {
      entry: './lambda/index.ts',
      runtime: lambda.Runtime.NODEJS_14_X,
      handler: 'main',
      bundling: {
        externalModules: ['aws-sdk'],
        minify: true,
      },
    });
  }
}
