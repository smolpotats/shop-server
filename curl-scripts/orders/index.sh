#!/bin/sh

API="http://localhost:4741"
URL_PATH="/orders"

curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"

echo

# TOKEN="531caf422c68ef0b531fd74ddbaa6907" sh curl-scripts/orders/index.sh
