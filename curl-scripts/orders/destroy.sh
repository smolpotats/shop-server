#!/bin/bash

API="http://localhost:4741"
URL_PATH="/orders"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Bearer ${TOKEN}"

echo

# TOKEN="531caf422c68ef0b531fd74ddbaa6907" ID="609b9d41ee9ced33a479443c" sh curl-scripts/orders/destroy.sh
