import { a, defineData } from "@aws-amplify/backend";
const schema = a.schema({
    Todo: a
        .model({
        content: a.string(),
    })
        .authorization((allow) => [allow.authenticated("identityPool")]),
});
export const data = defineData({
    schema,
    authorizationModes: {
        defaultAuthorizationMode: "iam",
    },
});
