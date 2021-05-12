#!/bin/sh

API="http://localhost:4741"
URL_PATH="/products"

curl "${API}${URL_PATH}" \
  --include \
  --request GET \

echo

# sh curl-scripts/products/index.sh
