import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';

import { storage } from './storage/resource';

// defineBackend({
//   auth,
//   data,
//   storage,
// });

const backend = defineBackend({
  auth,
  data,
});

backend.addOutput({
  storage: {
    aws_region: "eu-west-2",
    bucket_name: "testbucket-bduvi-neoscb"
  },
});