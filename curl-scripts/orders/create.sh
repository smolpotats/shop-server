#!/bin/bash

API="http://localhost:4741"
URL_PATH="/create-order"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "order": {
      "product": "'"${PRODUCT}"'",
      "total": "'"${TOTAL}"'"
    }
  }'

echo
