#!/bin/bash

API="http://localhost:4741"
URL_PATH="/orders"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "order": {
      "product": "'"${PRODUCT}"'"
    }
  }'

echo

# TOKEN="531caf422c68ef0b531fd74ddbaa6907" PRODUCT="609b897debc6eb2c34476511" sh curl-scripts/orders/create.sh
# TOKEN="531caf422c68ef0b531fd74ddbaa6907" PRODUCT="609b8968ebc6eb2c34476510" sh curl-scripts/orders/create.sh
# TOKEN="531caf422c68ef0b531fd74ddbaa6907" PRODUCT="609b8790a74510420829fee0" sh curl-scripts/orders/create.sh
# TOKEN="531caf422c68ef0b531fd74ddbaa6907" PRODUCT="609b89efebc6eb2c34476512" sh curl-scripts/orders/create.sh
# TOKEN="531caf422c68ef0b531fd74ddbaa6907" PRODUCT="609b89f5ebc6eb2c34476513" sh curl-scripts/orders/create.sh
