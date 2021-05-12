#!/bin/sh

API="http://localhost:4741"
URL_PATH="/products"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request GET \

echo

# ID="609b897debc6eb2c34476511" sh curl-scripts/products/show.sh
# ID="609b8968ebc6eb2c34476510" sh curl-scripts/products/show.sh
# ID="609b8790a74510420829fee0" sh curl-scripts/products/show.sh
# ID="609b89efebc6eb2c34476512" sh curl-scripts/products/show.sh
# ID="609b89f5ebc6eb2c34476513" sh curl-scripts/products/show.sh
