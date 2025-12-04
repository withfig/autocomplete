const completionSpec: Fig.Spec = {
  name: "geo-maps",
  description:
    "Integrate high-quality base map data into your applications using MapLibre. Capabilities include:    Access to comprehensive base map data, allowing you to tailor the map display to your specific needs.   Multiple pre-designed map styles suited for various application types, such as navigation, logistics, or data visualization.   Generation of static map images for scenarios where interactive maps aren't suitable, such as:   Embedding in emails or documents   Displaying in low-bandwidth environments   Creating printable maps   Enhancing application performance by reducing client-side rendering",
  subcommands: [
    {
      name: "get-glyphs",
      description: "Returns the map's glyphs",
      options: [
        {
          name: "--font-stack",
          description:
            "Name of the FontStack to retrieve.  Example: Amazon Ember Bold,Noto Sans Bold. The supported font stacks are as follows:   Amazon Ember Bold   Amazon Ember Bold Italic   Amazon Ember Bold,Noto Sans Bold   Amazon Ember Bold,Noto Sans Bold,Noto Sans Arabic Bold   Amazon Ember Condensed RC BdItalic   Amazon Ember Condensed RC Bold   Amazon Ember Condensed RC Bold Italic   Amazon Ember Condensed RC Bold,Noto Sans Bold   Amazon Ember Condensed RC Bold,Noto Sans Bold,Noto Sans Arabic Condensed Bold   Amazon Ember Condensed RC Light   Amazon Ember Condensed RC Light Italic   Amazon Ember Condensed RC LtItalic   Amazon Ember Condensed RC Regular   Amazon Ember Condensed RC Regular Italic   Amazon Ember Condensed RC Regular,Noto Sans Regular   Amazon Ember Condensed RC Regular,Noto Sans Regular,Noto Sans Arabic Condensed Regular   Amazon Ember Condensed RC RgItalic   Amazon Ember Condensed RC ThItalic   Amazon Ember Condensed RC Thin   Amazon Ember Condensed RC Thin Italic   Amazon Ember Heavy   Amazon Ember Heavy Italic   Amazon Ember Light   Amazon Ember Light Italic   Amazon Ember Medium   Amazon Ember Medium Italic   Amazon Ember Medium,Noto Sans Medium   Amazon Ember Medium,Noto Sans Medium,Noto Sans Arabic Medium   Amazon Ember Regular   Amazon Ember Regular Italic   Amazon Ember Regular Italic,Noto Sans Italic   Amazon Ember Regular Italic,Noto Sans Italic,Noto Sans Arabic Regular   Amazon Ember Regular,Noto Sans Regular   Amazon Ember Regular,Noto Sans Regular,Noto Sans Arabic Regular   Amazon Ember Thin   Amazon Ember Thin Italic   AmazonEmberCdRC_Bd   AmazonEmberCdRC_BdIt   AmazonEmberCdRC_Lt   AmazonEmberCdRC_LtIt   AmazonEmberCdRC_Rg   AmazonEmberCdRC_RgIt   AmazonEmberCdRC_Th   AmazonEmberCdRC_ThIt   AmazonEmber_Bd   AmazonEmber_BdIt   AmazonEmber_He   AmazonEmber_HeIt   AmazonEmber_Lt   AmazonEmber_LtIt   AmazonEmber_Md   AmazonEmber_MdIt   AmazonEmber_Rg   AmazonEmber_RgIt   AmazonEmber_Th   AmazonEmber_ThIt   Noto Sans Black   Noto Sans Black Italic   Noto Sans Bold   Noto Sans Bold Italic   Noto Sans Extra Bold   Noto Sans Extra Bold Italic   Noto Sans Extra Light   Noto Sans Extra Light Italic   Noto Sans Italic   Noto Sans Light   Noto Sans Light Italic   Noto Sans Medium   Noto Sans Medium Italic   Noto Sans Regular   Noto Sans Semi Bold   Noto Sans Semi Bold Italic   Noto Sans Thin   Noto Sans Thin Italic   NotoSans-Bold   NotoSans-Italic   NotoSans-Medium   NotoSans-Regular   Open Sans Regular,Arial Unicode MS Regular",
          args: {
            name: "string",
          },
        },
        {
          name: "--font-unicode-range",
          description:
            "A Unicode range of characters to download glyphs for. This must be aligned to multiples of 256.  Example: 0-255.pdf",
          args: {
            name: "string",
          },
        },
        {
          name: "outfile",
          description: "Filename where the content will be saved",
          args: {
            name: "string",
          },
        },
      ],
    },
    {
      name: "get-sprites",
      description: "Returns the map's sprites",
      options: [
        {
          name: "--file-name",
          description:
            "Sprites API: The name of the sprite \ufb01le to retrieve, following pattern sprites(@2x)?\\.(png|json). Example: sprites.png",
          args: {
            name: "string",
          },
        },
        {
          name: "--style",
          description:
            "Style specifies the desired map style for the Sprites APIs",
          args: {
            name: "string",
          },
        },
        {
          name: "--color-scheme",
          description:
            "Sets color tone for map such as dark and light for specific map styles. It applies to only vector map styles such as Standard and Monochrome. Example: Light  Default value: Light   Valid values for ColorScheme are case sensitive",
          args: {
            name: "string",
          },
        },
        {
          name: "--variant",
          description:
            "Optimizes map styles for specific use case or industry. You can choose allowed variant only with Standard map style. Example: Default   Valid values for Variant are case sensitive",
          args: {
            name: "string",
          },
        },
        {
          name: "outfile",
          description: "Filename where the content will be saved",
          args: {
            name: "string",
          },
        },
      ],
    },
    {
      name: "get-static-map",
      description:
        "Provides high-quality static map images with customizable options. You can modify the map's appearance and overlay additional information. It's an ideal solution for applications requiring tailored static map snapshots",
      options: [
        {
          name: "--bounding-box",
          description:
            "Takes in two pairs of coordinates, [Lon, Lat], denoting south-westerly and north-easterly edges of the image. The underlying area becomes the view of the image.  Example: -123.17075,49.26959,-123.08125,49.31429",
          args: {
            name: "string",
          },
        },
        {
          name: "--bounded-positions",
          description:
            "Takes in two or more pair of coordinates, [Lon, Lat], with each coordinate separated by a comma. The API will generate an image to encompass all of the provided coordinates.   Cannot be used with Zoom and or Radius   Example: 97.170451,78.039098,99.045536,27.176178",
          args: {
            name: "string",
          },
        },
        {
          name: "--center",
          description:
            "Takes in a pair of coordinates, [Lon, Lat], which becomes the center point of the image. This parameter requires that either zoom or radius is set.  Cannot be used with Zoom and or Radius   Example: 49.295,-123.108",
          args: {
            name: "string",
          },
        },
        {
          name: "--compact-overlay",
          description:
            "Takes in a string to draw geometries on the image. The input is a comma separated format as follows format: [Lon, Lat]  Example: line:-122.407653,37.798557,-122.413291,37.802443;color=%23DD0000;width=7;outline-color=#00DD00;outline-width=5yd|point:-122.40572,37.80004;label=Fog Hill Market;size=large;text-color=%23DD0000;color=#EE4B2B   Currently it supports the following geometry types: point, line and polygon. It does not support multiPoint , multiLine and multiPolgyon",
          args: {
            name: "string",
          },
        },
        {
          name: "--geo-json-overlay",
          description:
            'Takes in a string to draw geometries on the image. The input is a valid GeoJSON collection object.  Example: {"type":"FeatureCollection","features": [{"type":"Feature","geometry":{"type":"MultiPoint","coordinates": [[-90.076345,51.504107],[-0.074451,51.506892]]},"properties": {"color":"#00DD00"}}]}',
          args: {
            name: "string",
          },
        },
        {
          name: "--height",
          description: "Specifies the height of the map image",
          args: {
            name: "integer",
          },
        },
        {
          name: "--key",
          description:
            "Optional: The API key to be used for authorization. Either an API key or valid SigV4 signature must be provided when making a request",
          args: {
            name: "string",
          },
        },
        {
          name: "--padding",
          description:
            "Applies additional space (in pixels) around overlay feature to prevent them from being cut or obscured.  Value for max and min is determined by: Min: 1  Max: min(height, width)/4   Example: 100",
          args: {
            name: "integer",
          },
        },
        {
          name: "--radius",
          description:
            "Used with center parameter, it specifies the zoom of the image where you can control it on a granular level. Takes in any value >= 1.  Example: 1500   Cannot be used with Zoom.   Unit: Meters",
          args: {
            name: "long",
          },
        },
        {
          name: "--file-name",
          description:
            "The map scaling parameter to size the image, icons, and labels. It follows the pattern of ^map(@2x)?$. Example: map, map@2x",
          args: {
            name: "string",
          },
        },
        {
          name: "--scale-bar-unit",
          description:
            "Displays a scale on the bottom right of the map image with the unit specified in the input.  Example: KilometersMiles, Miles, Kilometers, MilesKilometers",
          args: {
            name: "string",
          },
        },
        {
          name: "--style",
          description:
            "Style specifies the desired map style for the Style APIs",
          args: {
            name: "string",
          },
        },
        {
          name: "--width",
          description: "Specifies the width of the map image",
          args: {
            name: "integer",
          },
        },
        {
          name: "--zoom",
          description:
            "Specifies the zoom level of the map image.  Cannot be used with Radius",
          args: {
            name: "float",
          },
        },
        {
          name: "outfile",
          description: "Filename where the content will be saved",
          args: {
            name: "string",
          },
        },
      ],
    },
    {
      name: "get-style-descriptor",
      description: "Returns information about the style",
      options: [
        {
          name: "--style",
          description: "Style specifies the desired map style",
          args: {
            name: "string",
          },
        },
        {
          name: "--color-scheme",
          description:
            "Sets color tone for map such as dark and light for specific map styles. It applies to only vector map styles such as Standard and Monochrome. Example: Light  Default value: Light   Valid values for ColorScheme are case sensitive",
          args: {
            name: "string",
          },
        },
        {
          name: "--political-view",
          description:
            "Specifies the political view using ISO 3166-2 or ISO 3166-3 country code format. The following political views are currently supported:    ARG: Argentina's view on the Southern Patagonian Ice Field and Tierra Del Fuego, including the Falkland Islands, South Georgia, and South Sandwich Islands    EGY: Egypt's view on Bir Tawil    IND: India's view on Gilgit-Baltistan    KEN: Kenya's view on the Ilemi Triangle    MAR: Morocco's view on Western Sahara    PAK: Pakistan's view on Jammu and Kashmir and the Junagadh Area    RUS: Russia's view on Crimea    SDN: Sudan's view on the Halaib Triangle    SRB: Serbia's view on Kosovo, Vukovar, and Sarengrad Islands    SUR: Suriname's view on the Courantyne Headwaters and Lawa Headwaters    SYR: Syria's view on the Golan Heights    TUR: Turkey's view on Cyprus and Northern Cyprus    TZA: Tanzania's view on Lake Malawi    URY: Uruguay's view on Rincon de Artigas    VNM: Vietnam's view on the Paracel Islands and Spratly Islands",
          args: {
            name: "string",
          },
        },
        {
          name: "--key",
          description:
            "Optional: The API key to be used for authorization. Either an API key or valid SigV4 signature must be provided when making a request",
          args: {
            name: "string",
          },
        },
        {
          name: "outfile",
          description: "Filename where the content will be saved",
          args: {
            name: "string",
          },
        },
      ],
    },
    {
      name: "get-tile",
      description:
        "Returns a tile. Map tiles are used by clients to render a map. they're addressed using a grid arrangement with an X coordinate, Y coordinate, and Z (zoom) level",
      options: [
        {
          name: "--tileset",
          description:
            "Specifies the desired tile set. Valid Values: raster.satellite | vector.basemap",
          args: {
            name: "string",
          },
        },
        {
          name: "--z",
          description: "The zoom value for the map tile",
          args: {
            name: "string",
          },
        },
        {
          name: "--x",
          description:
            "The X axis value for the map tile. Must be between 0 and 19",
          args: {
            name: "string",
          },
        },
        {
          name: "--y",
          description: "The Y axis value for the map tile",
          args: {
            name: "string",
          },
        },
        {
          name: "--key",
          description:
            "Optional: The API key to be used for authorization. Either an API key or valid SigV4 signature must be provided when making a request",
          args: {
            name: "string",
          },
        },
        {
          name: "outfile",
          description: "Filename where the content will be saved",
          args: {
            name: "string",
          },
        },
      ],
    },
  ],
};
export default completionSpec;
