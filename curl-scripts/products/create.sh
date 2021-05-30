#!/bin/bash

API="http://localhost:4741"
URL_PATH="/products"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "product": {
      "name": "'"${NAME}"'",
      "description": "'"${DESC}"'",
      "price": "'"${PRICE}"'",
      "owner": "'"${OWNERID}"'"
    }
  }'

echo

# NAME="Boeing 747" DESC="The Boeing 747 is a large, long–range wide-body airliner and cargo aircraft manufactured by Boeing Commercial Airplanes in the United States." PRICE="747747747.00" sh curl-scripts/products/create.sh

# NAME="My Uncle Joey" DESC="He's kinda cool and comes over when he knows there's food. I'm pretty sure he's homeless!" PRICE="15.00" sh curl-scripts/products/create.sh

# NAME="Wyoming" DESC="Literally the state of Wyoming" PRICE="0.03" sh curl-scripts/products/create.sh

# NAME="Homer Simpson" DESC="This probably isn't legal to sell" PRICE="39.99" sh curl-scripts/products/create.sh

# NAME="Gas Station Sushi" DESC="It's on sale!" PRICE="1.99" sh curl-scripts/products/create.sh
