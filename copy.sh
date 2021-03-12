# Copy specfiles to the Fig resource dir
# TODO Remove cp from specs when types are validated
cp ./specs/*.js ~/.fig/autocomplete/
cp ./dist/*.js ~/.fig/autocomplete/
echo "Copied specs to ~/.fig/autocomplete"
